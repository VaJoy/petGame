<template>
  <div class="mask-bg">
    <div class="shop-plane-wrap dialog-base">
      <h1>商店</h1>
      <h2 title="我的金币"><span class="iconfont">&#xe618;</span><span>{{ myInfo.coin }}</span></h2>
      <ul>
        <li v-for="(item, index) in shopProps">
          <div class="prop-icon" :class="'prop-icon-' + item.type"></div>
          <div class="prop-info-wrap">
            <p class="name">{{ item.name }}</p>
            <p class="desc">{{ item.desc }}</p>
            <p class="price"><span class="iconfont">&#xe618;</span>{{ item.price }}</p>
            <p><span class="button" @click.stop="clickBuy(item)">购买</span></p>
          </div>
        </li>
      </ul>
      <p>
        <span class="button" @click.stop="closePlane">返回</span>
      </p>
    </div>
  </div>
</template>

<script>
import emitter from 'tiny-emitter/instance';
import { shopProps } from '@config/data';
import { codes } from '@config/codes.js';
import { buyProp } from '@js/request.js';

export default {
  props: ['myInfo'],
  computed: {
  },
  data() {
    return {
      shopProps
    }
  },
  methods: {
    closePlane() {
      emitter.emit('index/toggle-plane-state', 'shop', false);
    },
    clickBuy(item) {
      if (item.price > this.myInfo.coin) {
        return emitter.emit('dialog/alert', '你的金币不够哦 :(');
      }

      emitter.emit('dialog/confirm', `确定花费 ${item.price} 金币购买「${item.name}」么？`, () => {
        buyProp(item, (data) => {
          if (data.code !== codes.ok) {
            return emitter.emit('dialog/alert', data.err);
          }

          emitter.emit('request/reload');

          emitter.emit('dialog/alert', '购买成功，快去背包使用吧');
        })
      });
    },
  },
}
</script>

<style lang="sass">
@import './scss/index.scss'
</style>