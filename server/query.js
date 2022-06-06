import mysql from 'mysql';
import password from './password.js';
import { codes } from './config/codes.js';
import { errorHandler, cryptPassword, arrangePet } from './util.js';
import { petType } from '../src/mock/data.js';


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password,
    database: 'petgame'
});

connection.connect();

export function checkLogin(req, next) {
    connection.query(`SELECT * where session_id="${req.session.id}" and id=${req.session.user_id}`, function (error, results) {
        if (!error && results?.length) {
            next();
        } else {
            next('你没有权限操作，请重新登录')
        }
    });
}

export function initEgg(req, callback) {
    checkLogin(req, (error) => {
        if (errorHandler(error, 'limitedAccess', callback)) {
            return;
        }

        const { type = petType.rabbit } = req.body || {};

        connection.query(`INSERT INTO pets (type, user_id, force, defence, agility, exp, sign_exp)
        VALUES (${type}, ${req.session.user_id}, 10, 10, 10, 0, 0)`, function (err) {
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
        where session_id="${session_id}" and id=${user_id}`, function (error, results) {
            if (error) {
                return reject(error);
            }

            resolve(results)
        });
    });

    const getPets = new Promise((resolve, reject) => {
        connection.query(`SELECT a.user_id, a.type, a.force, a.defence, a.agility, (a.exp + a.sign_exp) as total_exp, b.name, b.coin 
        from pets a left join users b on b.id = a.user_id order by a.total_exp DESC`, function (error, results) {
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
        connection.query(`SELECT * from events where user_id=${user_id} or target_id=${user_id} order by time DESC LIMIT 10`, function (error, results, fields) {
            if (error) {
                return reject(error);
            }
            resolve(results)
        });
    });

    const getMyProps = new Promise((resolve, reject) => {
        connection.query(`SELECT * from props where user_id=${user_id}`, function (error, results) {
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
        let result = {
            time: Date.now(),
            code: codes.ok,
            pets,
            events
        };

        if (userInfo?.length) {
            result = Object.assign(result, { myInfo: userInfo[0], myEvents, myProps });
            // 把自己的宠物提升到第一位，并加上 isMine 字段
            result.pets = arrangePet(pets, user_id);
        }

        callback(result);
    }).catch(err => {
        errorHandler(err, callback);
    })
}

export function login(req, callback) {
    const { body = {}, session } = req;
    const id = body.id || 0;
    connection.query(`SELECT password from users where id=${id}`, function (error, results, fields) {
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
    const { id = 0, oldPassword = '', newPassword = '' } = (req.body || {});
    connection.query(`SELECT password from users where id=${id}`, function (error, results, fields) {
        if (errorHandler(error, 'sqlNativeError', callback)) {
            return;
        }

        if (!results?.length) {
            return errorHandler('找不到该用户', callback);
        }

        const isValid = (results[0].password || '') === cryptPassword(oldPassword);
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