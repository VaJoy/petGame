import { codes } from '@config/codes.js';
import emitter from 'tiny-emitter/instance';
const url = __IS_DEV__ ? 'http://localhost:2022' : 'http://localhost:2022';


export const request = (function () {
    const requestRecord = {};
    const toggleState = (route, state) => {
        requestRecord[route] = state;
        emitter.emit('request/loading', state);
    }

    return (route, body = {}, callback, silent) => {
        if (requestRecord[route]) return;
        silent || toggleState(route, true);

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
                if (response.ok) {
                    return response.json();
                }
                throw new Error('请求失败');
            })
            .then((data) => {
                toggleState(route, false);
                if (typeof data.err === 'object') {
                    data.err = JSON.stringify(data.err);
                }
                
                callback(data);
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


export const getInitData = (callback, silent) => {
    request('get-init-data', {}, callback, silent);
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

export const markEvent = (data, callback) => {
    request('mark-event', data, callback);
}

export const endWorking = (callback) => {
    request('end-working', {}, callback);
}