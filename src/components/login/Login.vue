<template>
  <div class="mask-bg"></div>
  <div class="login-wrap  dialog-base">
    <h1>请先登录</h1>
    <p><label>ID</label><input v-model="id" type="number" placeholder="纯数字"></p>
    <p><label>密码</label><input v-model="password" type="password" maxlength="30"></p>
    <p><label>新密码</label><input v-model="newPassword" class="new-password" type="password" maxlength="30"
        placeholder="选填"></p>
    <span class="tip">若需要修改密码，才填写「新密码」项</span>
    <p class="button" @click="goLogin">确定登录</p>
  </div>
</template>

<script>
import { login, modifyPassword } from '@js/request.js';
import { codes } from '@config/codes.js'
import { reload } from '@js/business.js'
import emitter from 'tiny-emitter/instance';

export default {
  props: [],
  methods: {
    goLogin() {
      const id = String(this.id).trim();
      const password = this.password.trim();
      const newPassword = this.newPassword.trim();
      if (!id) {
        return emitter.emit('dialog/alert', 'ID 未填写。')
      }

      const data = {
        id, password, newPassword
      };
      const callback = (json) => {
        if (json.code === codes.ok) {
          reload();
        } else {
          emitter.emit('dialog/alert', `[${json.code}] ${json.err || '登录失败，请截图联系 vj 处理。'}`)
        }
      }

      if (newPassword) {
        modifyPassword(data, callback);
      } else {
        login(data, callback);
      }
    }
  },
  data() {
    return {
      id: '',
      password: '',
      newPassword: ''
    }
  },
}
</script>

<style lang="sass" scoped>
  div.login-wrap
    z-index: 999
    position: absolute
    padding: .4rem 1rem
    left: 50%
    top: 50%
    transform: translateY(-50%) translateX(-50%)
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    h1
      font-size: .35rem
      font-weight: bold
      color: #F1845F
    p
      margin-top: .2rem
      label
        position: relative
        display: inline-block
        text-align: right
        width: 2rem
        font-size: .14rem
        margin-right: .2rem
        margin-left: -1.5rem
      input
        padding: .06rem .15rem
        width: 2.5rem
        font-size: .12rem
        border-radius: 3px
        border: solid 1px gray
        outline: none
        &.new-password
          background-color: #EEE
    span.tip
      font-size: .14rem
      margin-top: .2rem
      color: gray
    .button
      margin-top: .4rem
      
</style>