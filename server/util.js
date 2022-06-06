import { codes } from './config/codes.js';
import bcrypt from 'bcryptjs';

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

export function cryptPassword(password) {
    return password ? bcrypt.hashSync(password, 'petgame2022') : ''
}

export function arrangePet(pets, user_id) {
    for (let i = 0, item; i < pets.length; i++) {
        item = pets[i];
        if (item.user_id === user_id) {
            item.isMine = true;
            pets.unshift(pets.splice(i, 1));
            break;
        }
    }
}