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