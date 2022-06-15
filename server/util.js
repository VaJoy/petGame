import { codes } from '../config/codes.js';
import crypto from 'crypto';
import { salt } from './secret.js';

export function errorHandler(err, codeType, callback) {
    if (!err) return;

    if (typeof codeType === 'function') {
        callback = codeType;
        codeType = 'codes.error';
    }

    const code = codes[codeType] || codes.error;

    callback({
        err,
        code,
    });

    console.error(`[error-${code}] ${err}`);

    return err;
}

export function rollbackHandler(connection, err, errorType, callback) {
    connection.rollback(() => {
        errorHandler(err, errorType, callback);
    });
}

export function generateEffectSql(effect) {
    let sql = '';
    for (let featrue in effect) {
        sql += `\`${featrue}\`=(\`${featrue}\`+${effect[featrue]}),`
    }
    return sql.replace(/,$/, '');
}

const secret = salt.toString("hex");

export function cryptPassword(password) {
    if (!password) return '';

    const Signture = crypto.createHmac("sha1", secret);
    Signture.update(password);

    return Signture.digest().toString("base64");
}

export function arrangePet(pets, user_id) {
    for (let i = 0, item; i < pets.length; i++) {
        item = pets[i];
        if (item.user_id === Number(user_id)) {
            let spliceItem = pets.splice(i, 1)[0];
            spliceItem.isMine = true;
            pets.unshift(spliceItem);
            break;
        }
    }

    return pets
}

export function sqlFilter(sqlStr = '') {
    sqlStr = sqlStr.replace(/[`"'\s]/g, '');
    return sqlStr.trim()
}

export function getRandomNum(min = 0, max = 1) {  // 只支持传入整数
    const span = max - min;
    return Math.round(Math.random() * span + min);
}