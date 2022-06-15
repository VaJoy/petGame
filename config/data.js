import { getRandomNum } from '../server/util.js';

export const petType = {
    none: 0,
    cat: 1,
    rabbit: 2,
    dog: 3,
}

export const eventType = {
    attack: 1,
    startWorking: 2,
    endWorking: 3,
    enhance: 4,  // 喝药水增强
}

export const levels = [
    { level: 1, exp: 10 },
    { level: 2, exp: 20 },
    { level: 3, exp: 40 },
    { level: 4, exp: 60 },
    { level: 5, exp: 80 },
    { level: 6, exp: 100 },
    { level: 7, exp: 120 },
    { level: 8, exp: 140 },
    { level: 9, exp: 160 },
    { level: 10, exp: 180 },
    { level: 11, exp: 220 },
    { level: 12, exp: 260 },
    { level: 13, exp: 300 },
    { level: 14, exp: 340 },
    { level: 15, exp: 380 },
    { level: 16, exp: 420 },
    { level: 17, exp: 460 },
    { level: 18, exp: 500 },
    { level: 19, exp: 540 },
    { level: 20, exp: 600 },
];

export const getUpdateReward = (oldLevel, newLevel) => {
    const rewards = {
        1: { force: 1, defence: 1, agility: 1 },
        5: { force: 2, defence: 2, agility: 2 },
        10: { force: 3, defence: 3, agility: 3 },
        15: { force: 5, defence: 5, agility: 5 },
        20: { force: 10, defence: 10, agility: 10 },
    }

    let ret = { force: 0, defence: 0, agility: 0 };
    const combineRewards = (a, b) => {
        return {
            force: a.force + b.force,
            defence: a.defence + b.defence,
            agility: a.agility + b.agility,
        }
    }

    for (let level in rewards) {
        if (newLevel >= level) {
            ret = rewards[level];
            if (newLevel - oldLevel > 1) {
                ret = combineRewards(ret, getUpdateReward(oldLevel, newLevel - 1))
            }
        } else {
            break;
        }
    }

    return ret;
}

export function getNextLevelExp(exp = 0) {
    const nextLevel = getLevel(exp) + 1;
    let ret = 0;
    for (let i = 0, item; item = levels[i]; i++) {
        if (nextLevel === item.level) {
            ret = item.exp;
            break;
        }
    }

    return ret;
}


export function getLevel(exp = 0) {
    let level = 0;
    for (let i = 0, item; item = levels[i]; i++) {
        if (exp >= item.exp) {
            level = item.level;
        } else {
            break;
        }
    }

    return level
}

export const rewardsMap = {
    1: { force: 3, defence: 3, agility: 3, exp: 10, coin: 50 },
    2: { force: 2, defence: 2, agility: 2, exp: 8, coin: 30 },
    3: { force: 1, defence: 1, agility: 1, exp: 7, coin: 20 },
    4: { exp: 5, coin: 10 }
};

export function getPetStage(level = 0) {
    let stage = 1;
    if (level >= 1) {
        stage = 2;  // 破蛋宝宝
    }
    if (level >= 5) {
        stage = 3;  // 婴儿宝宝
    }
    if (level >= 10) {
        stage = 4;  // 少年宝宝
    }
    if (level >= 15) {
        stage = 5;  // 成年宝宝
    }

    return stage
}

export const shopProps = [
    { type: 1, name: '武力牛奶', price: 100, desc: '增加 1 点武力值' },
    { type: 2, name: '防御咖啡', price: 100, desc: '增加 1 点防御值' },
    { type: 3, name: '敏捷绿茶', price: 100, desc: '增加 1 点敏捷值' },
    { type: 4, name: '随缘面包', price: 150, desc: '随机增加 2 点属性' },
    { type: 5, name: '阅历面包', price: 200, desc: '增加 15 点经验' },
];

export function getPropEffect(type) {
    const effect = {};
    switch (type) {
        case 1:
            effect.force = 1;
            break;
        case 2:
            effect.defence = 1;
            break;
        case 3:
            effect.agility = 1;
            break;
        case 4:
            getRandomEffect(effect);
            getRandomEffect(effect);
            break;
        case 5:
            effect.exp = 15;
            break;
        default:
            break;
    }

    return effect;
}


function getRandomEffect(effect) {
    const featrues = ['force', 'defence', 'agility'];
    const index = getRandomNum(0, 2);
    const featrue = featrues[index];
    effect[featrue] = 1 + (effect[featrue] || 0);
}

// mock data belows
export const initData = {
    time: Date.now(),
    id: 1,  // 0 为未登录
    permission: {
        work: true,
        attack: true,
    },
    props: [
        { type: 1, name: '武神胶囊', num: 2, desc: '增加 1 点武力值' },
        { type: 5, name: '随心药水', num: 3, desc: '增加 1 点指定的属性值' }
    ],
    pets: [
        {
            isMine: true,
            host: {
                id: 1,
                name: 'VJ'
            },
            type: petType.dog,
            featrue: {
                force: 13,
                defence: 10,
                agility: 10
            },
            coins: 100,
            level: 0,
            exp: 1,
        },
        {
            host: {
                id: 2,
                name: '月夜猫Jiner'
            },
            type: petType.cat,
            featrue: {
                force: 10,
                defence: 10,
                agility: 10
            },
            coins: 100,
            level: 0,
            exp: 1,
        },
        {
            host: {
                id: 3,
                name: '忆然特雷西'
            },
            type: petType.rabbit,
            featrue: {
                force: 10,
                defence: 10,
                agility: 10
            },
            coins: 100,
            level: 0,
            exp: 1,
        },
        {
            host: {
                id: 4,
                name: '雨三'
            },
            type: petType.none,
            featrue: {
                force: 10,
                defence: 10,
                agility: 10
            },
            coins: 100,
            level: 0,
            exp: 1,
        },
        {
            host: {
                id: 5,
                name: '野原新之助'
            },
            type: petType.none,
            featrue: {
                force: 10,
                defence: 10,
                agility: 10
            },
            coins: 100,
            level: 0,
            exp: 1,
        },
        {
            host: {
                id: 6,
                name: '上善若水'
            },
            type: petType.none,
            featrue: {
                force: 10,
                defence: 10,
                agility: 10
            },
            coins: 100,
            level: 0,
            exp: 1,
        },
        {
            host: {
                id: 7,
                name: 'Tooooo'
            },
            type: petType.none,
            featrue: {
                force: 10,
                defence: 10,
                agility: 10
            },
            coins: 100,
            level: 0,
            exp: 1,
        },
        {
            host: {
                id: 8,
                name: '奈奈生'
            },
            type: petType.none,
            featrue: {
                force: 10,
                defence: 10,
                agility: 10
            },
            coins: 100,
            level: 0,
            exp: 1,
        }
    ]
}



export const events = [
    {
        time: 1654112069581,
        eventType: eventType.attack,
        success: true,
        subject: 'VJ',
        target: '雨三',
        award: [{ type: 'coin', num: 1 }],
    },
    {
        time: 1654112069581,
        eventType: eventType.attack,
        success: false,
        subject: 'VJ',
        target: '雨三',
        award: null,
    },
    {
        time: 1654111069581,
        eventType: eventType.work,
        subject: '月夜猫Jiner',
        target: null,
        award: [{ type: 'coin', num: 7 }],
    },
    {
        time: 1654110069581,
        eventType: eventType.work,
        subject: '忆然特雷西',
        target: '武神胶囊',
        award: [{ type: 'force', num: 1 }],
    }
]
