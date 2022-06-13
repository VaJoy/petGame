<template>
  <div class="pet-info-card-wrap dialog-base" ref="wrap" :class="{ 'mine': pet.isMine }" :style="{ left: x, top: y }">
    <p>武力：<span :title="pet.force"><em :style="{ width: getPercent(pet.force) }"></em></span></p>
    <p>防御：<span :title="pet.defence"><em :style="{ width: getPercent(pet.defence) }"></em></span></p>
    <p>敏捷：<span :title="pet.agility"><em :style="{ width: getPercent(pet.agility) }"></em></span></p>
    <p>经验：<span :title="pet.total_exp"><em :style="{ width: levelPercent }"></em></span></p>
  </div>
</template>

<script>
import { shallowReactive, ref } from 'vue';
import emitter from 'tiny-emitter/instance';
import { getNextLevelExp } from '@config/data.js'

export default {
  props: ['pet', 'axis'],
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
    const { force, defence, agility, name, total_exp = 0 } = props.pet;
    if (name) {
      maxFeatrueVal = Math.max(force, defence, agility);
      nextLevelExp = getNextLevelExp(total_exp);
    }

    return {
      wrap,
      getPercent(val = 0) {
        const percent = (val / maxFeatrueVal).toFixed(2) * 100;
        return percent + '%';
      },
      levelPercent: ((total_exp / nextLevelExp).toFixed(2) * 100) + '%'
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


</style>
