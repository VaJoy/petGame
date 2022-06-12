<template>
  <div class="mask-bg"></div>
  <div class="choose-pet-wrap dialog-base">
    <h1>请选择你的宝宝</h1>
    <p><input v-model="picked" type="radio" value="1" id="cat"><label for="cat">猫咪</label></p>
    <p><input v-model="picked" type="radio" value="2" id="rabbit"><label for="rabbit">兔子</label></p>
    <p><input v-model="picked" type="radio" value="3" id="dog"><label for="dog">柯基</label></p>
    <p class="button" @click="getMyPet">获取宠物蛋</p>
  </div>
</template>

<script>
import { pickPet } from '@js/request.js';
import { codes } from '@config/codes.js';
import { reload } from '@js/business.js';

export default {
  props: [],
  methods: {
    getMyPet() {
      pickPet({
        type: this.picked
      }, (json) => {
        if (json.code === codes.ok) {
          reload();
        } else {
          alert(`[${json.code}] ${json.err || '登录失败，请截图联系 vj 处理。'}`)
        }
      })
    }
  },
  data() {
    return {
      picked: '1'
    }
  },
}
</script>

<style lang="sass" scoped>
  div.choose-pet-wrap
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
      display: flex
      justify-content: center
      label
        position: relative
        display: inline-block
        width: 2rem
        font-size: .14rem
        margin-left: .2rem
        font-size: .26rem
      input
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