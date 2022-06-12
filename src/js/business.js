import emitter from 'tiny-emitter/instance';
import { getInitData } from '@js/request.js';

export function reload() {
    emitter.emit('request/reload');
}
