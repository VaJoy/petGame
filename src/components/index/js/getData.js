import { initData } from '@mock/data.js'

const getMockData = () => {
    return new Promise((resolve) => {
        resolve(initData);
    })
}

export const getInitData = __IS_DEV__ ? getMockData : getMockData;

