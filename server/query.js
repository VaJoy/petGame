import mysql from 'mysql';
import { password, adminId } from './secret.js';
import { codes } from '../config/codes.js';
import {
    errorHandler, cryptPassword, arrangePet, sqlFilter, getRandomNum,
    rollbackHandler, generateEffectSql
} from './util.js';
import {
    petType, rewardsMap, eventType, getLevel, getUpdateReward,
    shopProps, getPropEffect, getDailyAttackTimes
} from '../config/data.js';
import moment from 'moment';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password,
    database: 'petgame',
    multipleStatements: true
});

connection.connect();

export function checkLogin(req, needAdmin, next) {
    connection.query(`SELECT * from users where session_id="${sqlFilter(req.session.id)}" and id=${needAdmin ? adminId : req.session.user_id | 0}`,
        function (error, results) {
            if (!error && results?.length) {
                next();
            } else {
                next('你没有权限操作，请重新登录');
                req.session.destroy(() => { });
            }
        });
}

export function buyProp(req, callback) {
    const { body, session } = req;
    const type = (body?.type) | 0;
    const prop = shopProps[type - 1];
    const userId = session.user_id | 0;
    if (!prop) return errorHandler('找不到该道具', callback);
    connection.query(`SELECT coin from users where session_id="${sqlFilter(session.id)}" and id=${userId};`,
        function (error, results) {
            if (error || !results.length) {
                return errorHandler(error || '参数错误', 'limitedAccess', callback);
            }

            const coin = results[0].coin;
            const price = prop.price;
            if (coin < price) {
                return errorHandler('没有足够的金币', callback);
            }

            connection.beginTransaction((err) => {
                if (err) {
                    return errorHandler(err, 'buyOpError', callback);
                }

                connection.query(`update users set coin=(coin-${price}) where id=${userId};
                insert into props (type, user_id, is_valid) values (${type}, ${userId}, 1)`, (err) => {
                    if (err) {
                        return rollbackHandler(connection, err, 'buyOpError', callback);
                    }

                    connection.commit((err) => {
                        if (err) {
                            return rollbackHandler(connection, err, 'buyOpError', callback);
                        }

                        callback({ code: codes.ok });
                    });
                });
            });
        });
}

function promiseQuery(sql, callback, errorType = codes.error) {
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, results) => {
            if (errorHandler(err, errorType, callback)) {
                reject(err)
            } else {
                resolve(results)
            }
        });
    })
}

export function useProp(req, callback) {
    const { body, session } = req;
    checkLogin(req, false, async (error) => {
        if (errorHandler(error, 'limitedAccess', callback)) {
            return;
        }

        const type = (body?.type) | 0;
        const prop = shopProps[type - 1];
        const userId = session.user_id | 0;
        if (!prop) return errorHandler('找不到该道具', callback);

        const propResult = await promiseQuery(`select count(1) as prop_num from props where is_valid=1 and type=${type};`, callback, 'useOpError');
        if (!propResult[0]) {
            return errorHandler('找不到该道具', callback);
        }

        const effect = getPropEffect(type);

        if (effect.exp) {
            const userResult = await promiseQuery(`select a.exp, a.sign_exp 
        from pets a left join users b on b.id = a.user_id where b.id=${userId}`, callback, 'useOpError');
            const ret = userResult[0];
            const oldLevel = getLevel(ret.exp + ret.sign_exp);
            const newLevel = getLevel(ret.exp + effect.exp + ret.sign_exp);
            if (newLevel > oldLevel) {  // 升级处理
                const rewards = getUpdateReward(oldLevel, newLevel);
                effect.force = (effect.force || 0) + (rewards.force || 0);
                effect.defence = (effect.defence || 0) + (rewards.defence || 0);
                effect.agility = (effect.agility || 0) + (rewards.agility || 0);
            }
        }

        const effectSql = 'update pets set ' + generateEffectSql(effect) + ` where user_id=${userId};`;

        connection.beginTransaction((err) => {
            if (err) {
                return errorHandler(err, 'useOpError', callback);
            }

            connection.query(`update props set is_valid=0 where is_valid=1 and type=${type} and user_id=${userId} limit 1; ${effectSql}`,
                (error) => {
                    if (errorHandler(error, 'useOpError', callback)) {
                        return;
                    }

                    connection.commit((err) => {
                        if (err) {
                            return rollbackHandler(connection, err, 'useOpError', callback);
                        }

                        callback({ code: codes.ok, effect });
                    });
                });
        });


    });
}

export function attack(req, callback) {
    const { body, session } = req;
    const target = body?.target | 0;
    const userId = session.user_id | 0;
    const today = moment().format('yyyy-MM-DD');

    connection.query(`SELECT a.coin, b.* from users a left join pets b on b.user_id=a.id
    where a.session_id="${sqlFilter(session.id)}" and a.id=${userId};
    select a.*, b.coin from pets a left join users b on a.user_id=b.id where a.user_id=${target};
    select count(1) as times from events where user_id=${userId} and c_date='${today}' and type=${eventType.attack};
    select max(id) as id from events;
    `,
        function (error, results) {
            if (error || !results[0]?.length || !results[1]?.length) {
                return errorHandler(error || '参数错误', 'attackOpError', callback);
            }

            const userInfo = results[0][0];
            const targetInfo = results[1][0];
            const attackTimes = results[2][0]?.times || 0;
            const newEventId = (results[3][0]?.id || 0) + 1;
            const userLevel = getLevel(userInfo.exp + userInfo.sign_exp);
            const dailyAttackTimes = getDailyAttackTimes(userLevel);
            const random1 = getRandomNum(8, 12) / 10;
            const random2 = getRandomNum(8, 12) / 10;
            const random3 = getRandomNum(8, 12) / 10;
            const randomAgilityResult = getRandomNum(0, 100);
            let isSuccess = 0;
            let gainCoins = 0;

            if (attackTimes >= dailyAttackTimes) {
                return errorHandler('攻击失败，你的宝宝今天攻击的次数已达上限', callback);
            }

            let agilityPercent = (targetInfo.agility - userInfo.agility) * random1;
            agilityPercent = agilityPercent > 90 ? 90 : agilityPercent;

            if (agilityPercent < randomAgilityResult && userInfo.force * random2 > targetInfo.defence * random3) {
                isSuccess = 1;
                const randomCoins = getRandomNum(1, 5);
                gainCoins = targetInfo.coin <= 10 ? 0 : randomCoins;
            }

            connection.beginTransaction((err) => {
                if (err) {
                    return errorHandler(err, 'attackOpError', callback);
                }

                let sql = `insert into events (type, user_id, c_time, c_date, success, target_id) 
                values(${eventType.attack}, ${userId}, ${Date.now()}, '${today}', ${isSuccess}, ${target});`;
                if (gainCoins > 0) {
                    sql += `update users set coin=(coin+${gainCoins}) where id=${userId};
                    update users set coin=(coin-${gainCoins}) where id=${target};
                    insert into awards (num,name,event_id) values (${gainCoins},'金币',${newEventId});`
                }

                connection.query(sql, (error) => {
                    if (errorHandler(error, 'attackOpError', callback)) {
                        return;
                    }

                    connection.commit((err) => {
                        if (err) {
                            return rollbackHandler(connection, err, 'attackOpError', callback);
                        }

                        callback({ code: codes.ok, gainCoins, isSuccess });
                    });
                });
            });
        }
    );
}


export function endWorking(req, callback) {
    const { body, session } = req;
    const userId = session.user_id | 0;
    const workType = body?.workType | 0;
    const today = moment().format('yyyy-MM-DD');
    checkLogin(req, false, (error) => {
        if (errorHandler(error, 'limitedAccess', callback)) {
            return;
        }

        connection.query(`SELECT id,c_time,c_date,success from events where user_id=${userId} and type=${eventType.startWorking} order by c_time desc limit 1;SELECT id,c_time,c_date,success from events where user_id=${userId} and type=${eventType.startWorking} and success=1 order by c_time desc limit 1`,
            function (error, list) {
                if (errorHandler(error, 'sqlNativeError', callback)) {
                    return;
                }

                const results = (list[0] || []).concat(list[1]);

                if (!results?.length) {
                    return errorHandler('未找到打工记录', callback);
                }

                const { c_time, success, id } = results[0];

                if (success === 1) {
                    return errorHandler('错误操作，你的宝宝未开始打工', callback);
                }

                if (results[1] && results[1].c_date === today) {
                    return errorHandler('你的宝宝今天已经打工过了，无法再获得奖励', callback);
                }

                const timeSpan = Date.now() - c_time;
                if (timeSpan > 60000 * 55 && timeSpan <= 60000 * 60 * 10) {
                    const coins = getRandomNum(8, 13) + (workType === 1 ? 1 : 0);
                    connection.query(`update users set coin=(coin+${coins}) where id=${userId}; update events set success=1 where id=${id};
                    insert into awards (num, name, event_id) values (${coins}, '金币', ${id})`,
                        (err) => {
                            if (!errorHandler(err, 'sqlNativeError', callback)) {
                                callback({
                                    code: codes.ok,
                                    coins
                                })
                            }
                        });
                } else {
                    return errorHandler('打工时间异常，请联系 VJ', callback);
                }
            });
    });
}

export function markEvent(req, callback) {
    const { body, session } = req;
    checkLogin(req, false, (error) => {
        if (errorHandler(error, 'limitedAccess', callback)) {
            return;
        }

        const { target } = body || {};
        const type = eventType[body.type];
        if (!type) {
            return errorHandler('参数错误', callback)
        }

        const today = moment().format('yyyy-MM-DD');
        connection.query(`INSERT INTO events (type, user_id, c_time, c_date, success, target_id) 
        VALUES (${type}, ${session.user_id | 0}, ${Date.now()}, '${today}', ${type === eventType.startWorking ? 0 : 1}, ${sqlFilter(target) || 'null'})`,
            function (err) {
                if (errorHandler(err, 'sqlNativeError', callback)) {
                    return;
                }

                callback({
                    code: codes.ok
                })
            });
    });
}

export function reward(req, callback) {
    const { query } = req;
    const { top1 = [], top2 = [], top3 = [], score100 = [], sign = [], isImmediate } = JSON.parse(query.data);
    let rewardTimestamp;

    const handler = (immediate) => {
        clearInterval(rewardTimestamp);
        checkLogin(req, true, (error) => {
            if (errorHandler(error, 'limitedAccess', immediate && callback)) {
                return;
            }

            connection.beginTransaction((err) => {
                if (err) {
                    return errorHandler(err, 'rewardOpError', immediate && callback);
                }

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
                    connection.commit((err) => {
                        if (err) {
                            return rollbackHandler(connection, err, 'rewardOpError', immediate && callback);
                        }

                        immediate && callback({ code: codes.ok });
                    });

                }).catch(err => {
                    connection.rollback();
                    rollbackHandler(connection, err, 'rewardOpError', immediate && callback);
                })
            })
        });
    }

    if (isImmediate) {
        handler(true)
    } else {
        rewardTimestamp = setInterval(() => {
            if (new Date().getHours() === 0) {
                handler();
            }
        }, 1000 * 60);
        callback({ code: codes.ok });
    }
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

                if (exp || signExp) {
                    const oldLevel = getLevel(ret.exp + ret.sign_exp);
                    const newLevel = getLevel(ret.exp + (exp || 0) + (signExp || 0));
                    if (newLevel > oldLevel) {  // 升级处理
                        const rewards = getUpdateReward(oldLevel, newLevel);
                        force = (force || 0) + (rewards.force || 0);
                        defence = (defence || 0) + (rewards.defence || 0);
                        agility = (agility || 0) + (rewards.agility || 0);
                    }
                }

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
                    sql += `update users set coin=${ret.coin + coin} where id=${id}`;
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
        VALUES (${type}, ${req.session.user_id | 0}, 10, 10, 10, 0, 0)`, function (err) {
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
        where session_id="${sqlFilter(session_id)}" and id=${user_id | 0}`, function (error, results) {
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

    const getAttacks = new Promise((resolve, reject) => {
        connection.query(`SELECT user_id, count(1) as times from events where success=1 and type=${eventType.attack} group by user_id order by times DESC`, function (error, results) {
            if (error) {
                return reject(error);
            }
            resolve(results)
        });
    });


    const getEvents = new Promise((resolve, reject) => {
        connection.query(`SELECT a.*, b.name as award_name, b.num as award_num from events a left join awards b on a.id=b.event_id 
        where a.success=1 order by a.c_time DESC LIMIT 10`, function (error, results) {
            if (error) {
                return reject(error);
            }
            resolve(results)
        });
    });

    const getMyEvents = new Promise((resolve, reject) => {
        connection.query(`SELECT a.*, b.name as award_name, b.num as award_num from events a left join awards b on a.id=b.event_id
        where (a.user_id=${user_id | 0} or a.target_id=${user_id | 0}) and a.success=1 order by a.c_time DESC LIMIT 10`,
            function (error, results) {
                if (error) {
                    return reject(error);
                }
                resolve(results)
            });
    });

    const getMyProps = new Promise((resolve, reject) => {
        connection.query(`SELECT type, count(1) as nums from props where user_id=${user_id | 0} and is_valid=1 group by type`, function (error, results) {
            if (error) {
                return reject(error);
            }
            resolve(results)
        });
    });

    const queryList = [getPets, getEvents, getAttacks];
    if (session_id && user_id) {
        queryList.push(getUserInfo, getMyEvents, getMyProps);
    }

    Promise.all(queryList).then(([pets = [], events = [], attacks = [], userInfo = [], myEvents = [], myProps = []]) => {
        const time = Date.now();
        let result = {
            time,
            code: codes.ok,
            pets,
            attacks,
            events
        };

        if (userInfo?.length) {
            result = Object.assign(result, { myInfo: userInfo[0], myEvents, myProps });
            // 把自己的宠物提升到第一位，并加上 isMine 字段
            result.pets = arrangePet(pets, user_id);

            setTimeout(() => {  // 更新用户访问时间
                connection.query(`UPDATE users SET last_visit_time=${time} where id=${user_id | 0}`, function (err) { });
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
    connection.query(`SELECT password from users where id=${id | 0}`, function (error, results, fields) {
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

    connection.query(`SELECT password from users where id=${id | 0}`, function (error, results) {
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

            connection.query(`UPDATE users SET session_id="${req.session.id}",
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