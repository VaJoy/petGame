<template>
  <div class="mask-bg" v-if="isShow">
    <div class="dialog-wrap dialog-base">
      <p>{{ msg }}</p>
      <p>
        <span v-if="type === 1" class="button" @click.stop="close">确定</span>
        <span v-if="type === 2" class="button mr-30 button-light" @click.stop="close">取消</span>
        <span v-if="type === 2" class="button" @click.stop="confirm">确定</span>
      </p>
    </div>
  </div>
</template>

<script>
import emitter from 'tiny-emitter/instance';
const noop = () => { };

export default {
  data() {
    return {
      isShow: false,
      type: 1,  // 1-alert, 2-confirm
      callback: noop,
      msg: '',
    }
  },
  methods: {
    show(msg = '', callback = noop, type) {
      this.msg = msg;
      this.callback = callback;
      this.type = type;
      this.isShow = true;
    },
    close() {
      this.isShow = false;
    },
    confirm() {
      this.close();
      this.callback();
    }
  },
  mounted() {
    emitter.on('dialog/alert', (msg, callback) => {
      this.show(msg, callback, 1);
    });

    emitter.on('dialog/confirm', (msg, callback) => {
      this.show(msg, callback, 2);
    });
  },
}
</script>

<style lang="sass" scoped>
div.mask-bg
  display: flex
  align-items: center
  justify-content: center
  background: transparent
  .dialog-wrap
    padding: .7rem 2rem
    p
      text-align: center
    .button
      display: inline-block
      margin-top: .5rem
</style>