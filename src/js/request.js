import { codes } from '@config/codes.js';
import emitter from 'tiny-emitter/instance';
const url = __IS_DEV__ ? 'http://localhost:2022' : 'http://localhost:2022';


export const request = (function () {
    const requestRecord = {};
    const toggleState = (route, state) => {
        requestRecord[route] = state;
        emitter.emit('request/loading', state);
    }

    return (route, body = {}, callback) => {
        if (requestRecord[route]) return;
        toggleState(route, true);

        fetch(`${url}/${route}`, {
            credentials: "include",
            mode: "cors",
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'content-Type': 'application/json',
            }
        })
            .then((response) => {
                toggleState(route, false);

                if (response.ok) {
                    return response.json();
                }
                throw new Error('请求失败');
            })
            .then((data) => {
                callback(data)
            })
            .catch((err) => {
                toggleState(route, false);
                callback({
                    err,
                    code: codes.clientError
                })
            });
    }
})();


export const getInitData = (callback) => {
    request('get-init-data', {}, callback);
}

export const login = (data, callback) => {
    request('login', data, callback);
}

export const modifyPassword = (data, callback) => {
    request('modify-password', data, callback);
}

export const pickPet = (data, callback) => {
    request('init-egg', data, callback);
}