import mysql from 'mysql';
import { password, adminId } from './secret.js';
import { codes } from '../config/codes.js';
import { errorHandler, cryptPassword, arrangePet, sqlFilter } from './util.js';
import { petType, rewardsMap } from '../config/data.js';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password,
    database: 'petgame',
    multipleStatements: true
});

let rewardTimestamp;

connection.connect();

export function checkLogin(req, isAdmin, next) {
    connection.query(`SELECT * from users where session_id="${sqlFilter(req.session.id)}" and id=${isAdmin ? adminId : req.session.user_id|0}`,
        function (error, results) {
            if (!error && results?.length) {
                next();
            } else {
                next('你没有权限操作，请重新登录');
                req.session.destroy(() => { });
            }
        });
}

export function reward(req, callback) {
    const { query } = req;
    checkLogin(req, true, (error) => {
        if (errorHandler(error, 'limitedAccess', callback)) {
            return;
        }

        try {
            const { top1=[], top2=[], top3=[], score100=[], sign=[] } = JSON.parse(query.data);
            const promises = [];

            top1.forEach((id) => {
                promises.push(getRewardPromise(id, 1));
            });
            top2.forEach((id) => {
                promises.push(getRewardPromise(id, 2));
            });
            top3.forEach((id) => {
                promises.push(getRewardPromise(id, 3));
            });
            score100.forEach((id) => {
                promises.push(getRewardPromise(id, 4));
            });
            sign.forEach((item) => {
                promises.push(addRewards(item.id, { signExp: item.signExp }));
            });
            
            Promise.all(promises).then(() => {
                callback({ code: codes.ok })
            }).catch(err => {
                errorHandler(err, callback);
            })
        } catch (err) {
            errorHandler(err, 'rewardOpError', callback)
        }
    })
}

function getRewardPromise(id, level) {
    return addRewards(id, rewardsMap[level])
}

function addRewards(id, { force, defence, agility, exp, signExp, coin }) {
    return new Promise((resolve, reject) => {
        connection.query(`select a.id as pet_id, a.force, a.defence, a.agility, a.exp, a.sign_exp, b.coin
        from pets a left join users b on b.id = a.user_id where b.id=${id}`,
            function (err, results) {
                if (err || !results?.length) {
                    return reject('获取用户失败');
                }

                let sql = '';
                const ret = results[0];

                if (force || defence || agility || exp || signExp) {
                    sql = `update pets set `;
                    if (force) {
                        sql += `\`force\`=${ret.force + force},`;
                    }
                    if (defence) {
                        sql += `defence=${ret.defence + defence},`;
                    }
                    if (agility) {
                        sql += `agility=${ret.agility + agility},`;
                    }
                    if (exp) {
                        sql += `exp=${ret.exp + exp},`;
                    }
                    if (signExp) {
                        sql += `sign_exp=${signExp}`;  // 签到直接替换
                    }

                    sql = sql.replace(/,$/, '');
                    sql += ` where id=${ret.pet_id};`
                }

                if (coin) {
                    sql += `update users set coin=${ret.coin + coin} where id=${id}`
                }

                connection.query(sql, (err) => {
                    if (err) {
                        return reject(err);
                    }

                    resolve();
                });
            });
    });

}

export function initEgg(req, callback) {
    checkLogin(req, false, (error) => {
        if (errorHandler(error, 'limitedAccess', callback)) {
            return;
        }

        const { type = petType.rabbit } = req.body || {};
        connection.query(`INSERT INTO pets (type, user_id, \`force\`, defence, agility, exp, sign_exp) 
        VALUES (${type}, ${req.session.user_id|0}, 10, 10, 10, 0, 0)`, function (err) {
            if (errorHandler(err, 'sqlNativeError', callback)) {
                return;
            }

            callback({
                code: codes.ok
            })
        });
    })
}

export function getInitData(req, callback) {
    const { id: session_id = '', user_id = 0 } = req.session;

    const getUserInfo = new Promise((resolve, reject) => {
        connection.query(`SELECT id, name, coin, last_visit_time from users 
        where session_id="${sqlFilter(session_id)}" and id=${user_id|0}`, function (error, results) {
            if (error) {
                return reject(error);
            }

            resolve(results)
        });
    });

    const getPets = new Promise((resolve, reject) => {
        connection.query(`SELECT a.id, a.user_id, a.type, a.force, a.defence, a.agility, (a.exp + a.sign_exp) as total_exp, b.name, b.coin 
        from pets a left join users b on b.id = a.user_id order by total_exp DESC`, function (error, results) {
            if (error) {
                return reject(error);
            }

            resolve(results)
        });
    });

    const getEvents = new Promise((resolve, reject) => {
        connection.query(`SELECT * from events order by time DESC LIMIT 10`, function (error, results) {
            if (error) {
                return reject(error);
            }
            resolve(results)
        });
    });

    const getMyEvents = new Promise((resolve, reject) => {
        connection.query(`SELECT * from events where user_id=${user_id|0} or target_id=${user_id|0} order by time DESC LIMIT 10`, 
        function (error, results, fields) {
            if (error) {
                return reject(error);
            }
            resolve(results)
        });
    });

    const getMyProps = new Promise((resolve, reject) => {
        connection.query(`SELECT * from props where user_id=${user_id|0}`, function (error, results) {
            if (error) {
                return reject(error);
            }
            resolve(results)
        });
    });

    const queryList = [getPets, getEvents];
    if (session_id && user_id) {
        queryList.push(getUserInfo, getMyEvents, getMyProps);
    }

    Promise.all(queryList).then(([pets = [], events = [], userInfo = [], myEvents = [], myProps = []]) => {
        const time = Date.now();
        let result = {
            time,
            code: codes.ok,
            pets,
            events
        };

        if (userInfo?.length) {
            result = Object.assign(result, { myInfo: userInfo[0], myEvents, myProps });
            // 把自己的宠物提升到第一位，并加上 isMine 字段
            result.pets = arrangePet(pets, user_id);

            setTimeout(() => {  // 更新用户访问时间
                connection.query(`UPDATE users SET last_visit_time=${time} where id=${user_id|0}`, function (err) { });
            }, 0);
        }

        callback(result);
    }).catch(err => {
        errorHandler(err, callback);
    })
}

export function login(req, callback) {
    const { body = {}, session } = req;
    const id = body.id || 0;
    connection.query(`SELECT password from users where id=${id|0}`, function (error, results, fields) {
        if (errorHandler(error, 'sqlNativeError', callback)) {
            return;
        }

        if (!results?.length) {
            return errorHandler('找不到该用户', callback);
        }

        const isValid = (results[0].password || '') === cryptPassword(body.password);
        if (!isValid) {
            return errorHandler('密码错误，若忘记密码请找 VJ 处理', callback);
        }

        session.regenerate(function (err) {
            if (errorHandler(err, 'sessionError', callback)) {
                return;
            }

            connection.query(`UPDATE users SET session_id="${req.session.id}" where id=${id}`, function (err) {
                if (errorHandler(err, 'sqlNativeError', callback)) {
                    return;
                }

                req.session.user_id = id
                req.session.save(function (err) {
                    if (errorHandler(err, 'sessionError', callback)) {
                        return;
                    }

                    callback({
                        code: codes.ok
                    })
                })
            });
        })
    });
}

export function modifyPassword(req, callback) {
    const { id = 0, password = '', newPassword = '' } = (req.body || {});

    connection.query(`SELECT password from users where id=${id|0}`, function (error, results) {
        if (errorHandler(error, 'sqlNativeError', callback)) {
            return;
        }

        if (!results?.length) {
            return errorHandler('找不到该用户', callback);
        }

        const isValid = (results[0].password || '') === cryptPassword(password);
        if (!isValid) {
            return errorHandler('密码错误，若忘记密码请找 VJ 处理', callback);
        }

        req.session.regenerate(function (err) {
            if (errorHandler(err, 'sessionError', callback)) {
                return;
            }

            connection.query(`UPDATE users SET session_id="${req.session.id|0}",
            password="${cryptPassword(newPassword) || ''}" where id=${id}`, function (err) {
                if (errorHandler(err, 'sqlNativeError', callback)) {
                    return;
                }

                req.session.user_id = id
                req.session.save(function (err) {
                    if (errorHandler(err, 'sessionError', callback)) {
                        return;
                    }

                    callback({
                        code: codes.ok
                    })
                })
            });
        });
    });
}