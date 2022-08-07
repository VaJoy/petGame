<template>
  <div class="pet-info-card-wrap dialog-base" ref="wrap" :class="{ 'mine': pet.isMine }" :style="{ left: x, top: y }">
    <p>武力：<span :title="pet.force"><em :style="{ width: getPercent(pet.force) }"></em></span></p>
    <p>防御：<span :title="pet.defence"><em :style="{ width: getPercent(pet.defence) }"></em></span></p>
    <p>敏捷：<span :title="pet.agility"><em :style="{ width: getPercent(pet.agility) }"></em></span></p>
    <p>经验：<span :title="pet.total_exp"><em :style="{ width: levelPercent }"></em></span></p>
    <div v-if="!pet.isMine" class="attack">
      <span class="button" @click.stop="clickAttack">攻击该宝宝</span>
    </div>
  </div>
</template>

<script>
import { shallowReactive, ref } from 'vue';
import emitter from 'tiny-emitter/instance';
import { getNextLevelExp, getCurLevelExp, levels } from '@config/data.js'
import { attack } from '@js/request.js';
import { codes } from '@config/codes.js';

export default {
  props: ['pet', 'axis', 'myLevel'],
  computed: {
    x() {
      let x = 0;
      const wrap = this.wrap;
      if (wrap && this.axis?.x >= 0) {
        const wrapWidth = wrap.getBoundingClientRect().width;
        const windowWidth = window.innerWidth;
        if (wrapWidth + this.axis.x > windowWidth) {
          x = this.axis.x - wrapWidth;
        } else {
          x = this.axis.x;
        }
      }
      return x + 'px';
    },
    y() {
      let y = 0;
      const wrap = this.wrap;
      if (wrap && this.axis?.y >= 0) {
        const wrapHeight = wrap.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        if (wrapHeight + this.axis.y > windowHeight) {
          y = this.axis.y - wrapHeight;
        } else {
          y = this.axis.y;
        }
      }
      return y + 'px';
    },

  },
  setup(props) {
    const wrap = ref(null);
    let maxFeatrueVal = 0;
    let nextLevelExp = 0;
    let curLevelExp = 0;
    const { force, defence, agility, name, total_exp = 0 } = props.pet;
    if (name) {
      maxFeatrueVal = Math.max(force, defence, agility);
      nextLevelExp = getNextLevelExp(total_exp);
      curLevelExp = getCurLevelExp(total_exp);
    }

    return {
      wrap,
      getPercent(val = 0) {
        const percent = (val / maxFeatrueVal).toFixed(2) * 100;
        return percent + '%';
      },
      levelPercent: (((total_exp - curLevelExp) / (nextLevelExp - curLevelExp)).toFixed(2) * 100) + '%',
      clickAttack() {
        if (props.myLevel < 5) {
          return emitter.emit('dialog/alert', '宝宝 5 级后才能发动攻击哦。');
        }

        // if (total_exp < levels[2].exp) {
        //   return emitter.emit('dialog/alert', '该宝宝还小，就别欺负它了。');
        // }

        emitter.emit('dialog/confirm', `确定攻击${name}的宝宝么？`, () => {
          attack({ target: props.pet.user_id }, (data) => {
            if (data.code !== codes.ok) {
              return emitter.emit('dialog/alert', data.err);
            }
            
            let msg = data.isSuccess === 0 ? '你的宝宝还不够强大，没打赢对方 :(' : 
            ('攻击成功，' + (data.gainCoins > 0 ? `从${name}身上抢走了 ${data.gainCoins} 金币` : 
            (data.targetGetAttackedTimes > 0 ? `但${name}今天被别人殴打过了，你大发慈悲没有再抢 TA 的金币` : `但${name}实在太穷了，你没有抢到金币`)));
            emitter.emit('request/reload');

            emitter.emit('dialog/alert', msg);
          });
        });
      }
    }
  },
}
</script>

<style lang="sass" scoped>
.pet-info-card-wrap
  position: absolute
  z-index: 99
  padding: .3rem .4rem
  p
    color: #555
    font-size: .2rem
    line-height: 2
    vertical-align: middle
    span
      display: inline-block
      width: 2rem
      height: .2rem
      background: #F7E3B3
      border-radius: .1rem
      position: relative
      overflow: hidden
      em
        position: absolute
        display: inline-block
        height: .2rem
        background: #ffbf1d
  .attack
    margin-top: .2rem
    text-align: center
    .button
      display: inline-block
      font-size: .2rem
      padding: .2rem .3rem
      border-radius: .2rem
</style>
