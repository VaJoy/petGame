import { codes } from '@config/codes.js';
import emitter from 'tiny-emitter/instance';
const url = __IS_DEV__ ? 'http://localhost' : 'https://vajoy.icu';


export const request = (function () {
    const requestRecord = {};
    const requestId = {};
    const toggleState = (route, state, silent) => {
        if (!silent) {
            requestRecord[route] = state;
            emitter.emit('request/loading', state);
        }
        
        if (state) {
            const id = (requestId[route] || 0) + 1;
            requestId[route] = id;
            return id;
        }
    }

    return (route, body = {}, callback, silent) => {
        if (requestRecord[route]) return;
        const id = toggleState(route, true, silent);

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
                if (requestId[route] !== id) return;
                toggleState(route, false, silent);
                if (typeof data.err === 'object') {
                    data.err = JSON.stringify(data.err);
                }
                
                callback(data);
            })
            .catch((err) => {
                toggleState(route, false, silent);
                callback({
                    err,
                    code: codes.clientError
                })
            });
    }
})();


export const getInitData = (callback, silent) => {
    if (location.hostname === 'localhost') {
        import('@config/mockData.js').then(({ getInitMorkData }) => {
            emitter.emit('request/loading', false);
            callback(getInitMorkData());
        })
    } else {
        request('get-init-data', {}, callback, silent);
    }
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

export const endWorking = (workType, callback) => {
    request('end-working', { workType }, callback);
}

export const buyProp = (data, callback) => {
    request('buy-prop', data, callback);
}

export const useProp = (data, callback) => {
    request('use-prop', data, callback);
}

export const attack = (data, callback) => {
    request('attack', data, callback);
}