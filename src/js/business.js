import emitter from 'tiny-emitter/instance';

export function reload() {
    emitter.emit('request/reload');
}