import { initData } from '@config/data.js';
import { request } from '@js/request.js';

const getMockData = () => {
    return new Promise((resolve) => {
        resolve(initData);
    })
}

export const getInitData = (callback) => {
    request('get-init-data', {}, callback);
}

export const login = (data, callback) => {
    request('login', data, callback);
}