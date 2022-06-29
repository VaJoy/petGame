import emitter from 'tiny-emitter/instance';
import { onMounted, ref } from 'vue';

export function reload() {
    emitter.emit('request/reload');
}

export const petCompSetup = (initAnimate) => {
    return () => {
        let animateCanvas = ref(null);
        let staticCanvas = ref(null);
        onMounted(() => {
            initAnimate(animateCanvas.value);
            const staticCtx = staticCanvas.value.getContext('2d');
            setTimeout(() => {
                staticCanvas.value.width = animateCanvas.value.width;
                staticCanvas.value.height = animateCanvas.value.height;
                staticCtx.drawImage(animateCanvas.value, 0, 0);
            }, 300)
        });

        return {
            animateCanvas,
            staticCanvas
        }
    }
}