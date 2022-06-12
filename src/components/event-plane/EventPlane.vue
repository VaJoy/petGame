<template>
  <div class="mask-bg">
    <div class="event-plane-wrap dialog-base">
      <h1>消息</h1>
      <p v-if="isShow">
        占位
      </p>
      <p v-if="!isShow">
        暂无消息
      </p>
      <p>
        <span class="button" @click.stop="closePlane">返回</span>
      </p>
    </div>
  </div>
</template>

<script>
import emitter from 'tiny-emitter/instance';

let timeStamp = null;

export default {
  props: ['myLevel'],
  computed: {
    isShow() {
      return this.myLevel >= 2;
    }
  },
  data() {
    return {
    }
  },
  methods: {
    closePlane() {
      emitter.emit('index/toggle-plane-state', 'event', false);
    }
  },
}
</script>

<style lang="sass">
@import './scss/index.scss'
</style>