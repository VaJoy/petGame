<template>
  <div class="mask-bg">
    <div class="bag-plane-wrap dialog-base">
      <h1>我的背包</h1>
      <h2 title="我的金币"><span class="iconfont">&#xe618;</span><span>{{ myInfo.coin }}</span></h2>
      <ul v-if="myProps.length">
        <li v-for="(item, index) in myProps">
          <div class="prop-icon" :class="'prop-icon-' + item.type"></div>
          <div class="prop-info-wrap">
            <p class="name">{{ getPropInfo(item).name }}</p>
            <p class="desc">{{ getPropInfo(item).desc }}</p>
            <p class="num">数量：<span>{{ item.nums }}</span></p>
            <p><span class="button" @click.stop="useProp(item)">使用</span></p>
          </div>
        </li>
      </ul>
      <div class="none-prop" v-else>空空如也</div>
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
import { useProp } from '@js/request.js';

const getEffectStr = (effect) => {
  const map = { 'force': '武力', 'defence': '防御', 'agility': '敏捷', 'exp': '经验' };
  let str = '';
  for (let featrue in effect) {
        str += `${map[featrue]} +${effect[featrue]}，`;
    }
    return str.replace(/，$/, '');
}

export default {
  props: ['myInfo', 'myProps'],
  data() {
    return {
    }
  },
  methods: {
    getPropInfo(prop) {
      return shopProps[prop.type - 1]
    },
    useProp(item) {
      useProp(item, (data) => {
        if (data.code !== codes.ok) {
          return emitter.emit('dialog/alert', data.err);
        }

        emitter.emit('request/reload');

        const effectStr = getEffectStr(data.effect);

        emitter.emit('dialog/alert', '使用道具成功，宝宝的' + effectStr);
      })
    },
    closePlane() {
      emitter.emit('index/toggle-plane-state', 'bag', false);
    }
  },
}
</script>

<style lang="sass">
@import './scss/index.scss'
</style>