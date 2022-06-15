
export function getRandomNum(min = 0, max = 1) {  // 只支持传入整数
    const span = max - min;
    return Math.round(Math.random() * span + min);
}