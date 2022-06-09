export const petType = {
    none: 0,
    cat: 1,
    rabbit: 2,
    dog: 3,
}

export const eventType = {
    attack: 1,
    work: 2,
    enhance: 3,  // 喝药水增强
}

const levels = [
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

export function getLevel(exp = 0) {
    let level = 0;
    for(let i = 0, item; item = levels[i]; i++) {
        if(exp >= item.exp) {
            level = item.level;
        } else {
            break;
        }
    }

    return level
}

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

export const shopInfo = {
    list: [
        { type: 1, name: '武神胶囊', price: 100, desc: '增加 1 点武力值' },
        { type: 2, name: '强身秘籍', price: 100, desc: '增加 1 点防御值' },
        { type: 3, name: '敏捷药水', price: 100, desc: '增加 1 点敏捷值' },
        { type: 4, name: '紫金丹', price: 150, desc: '随机增加 2 点属性' },
    ]
}