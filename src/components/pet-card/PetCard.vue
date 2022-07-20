<template>
  <div class="pet-card-wrap" :class="{ 'mine': pet.isMine }">
    <div class="pet-wrap" @click.stop="clickPet">
      <component :is="petComponent" :perf="pet.isMine ? 0 : perf"></component>
    </div>
    <div class="host-name" @click.stop>{{ pet.isMine ? '我的宝宝' : pet.name }} (v{{ level }})</div>
    <div v-if="pet.isMine" class="op-wrap">
      <span title="打工" @click.stop="togglePlane('work', true)">&#xe8f4;</span>
      <span title="消息" @click.stop="togglePlane('event', true)">&#xe604;</span>
      <span title="排行" @click.stop="togglePlane('rank', true)">&#xea06;</span>
    </div>
    <div v-if="pet.isMine" class="op-wrap op-r-wrap">
      <span title="我的背包" @click.stop="togglePlane('bag', true)">&#xe769;</span>
      <span title="商店" @click.stop="togglePlane('shop', true)">&#xe697;</span>
      <span :title="perfTitle" :class="{disabled: perf}" @click.stop="togglePerformance">&#xe8c5;</span>
    </div>
    <Chat v-if="pet.isMine && level > 0" :initData="initData"></Chat>
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from 'vue';
const Cat1 = defineAsyncComponent(() => import('@components/cat/Cat1.vue'));
const Cat2 = defineAsyncComponent(() => import('@components/cat/Cat2.vue'));
const Cat3 = defineAsyncComponent(() => import('@components/cat/Cat3.vue'));
const Dog1 = defineAsyncComponent(() => import('@components/dog/Dog1.vue'));
const Dog2 = defineAsyncComponent(() => import('@components/dog/Dog2.vue'));
const Dog3 = defineAsyncComponent(() => import('@components/dog/Dog3.vue'));
const Rabbit1 = defineAsyncComponent(() => import('@components/rabbit/Rabbit1.vue'));
const Rabbit2 = defineAsyncComponent(() => import('@components/rabbit/Rabbit2.vue'));
const Rabbit3 = defineAsyncComponent(() => import('@components/rabbit/Rabbit3.vue'));
const NoPet = defineAsyncComponent(() => import('@components/no-pet/NoPet.vue'));
const Chat = defineAsyncComponent(() => import('./Chat.vue'));
import { petType, getLevel, getPetStage } from '@config/data.js'
import emitter from 'tiny-emitter/instance';
import { isGithub } from '@js/util';

const setPetComponent = (type, level) => {
  let curCom;
  let stage = getPetStage(level);
  stage = stage > 2 ? 3 : stage;
  switch (type) {
    case petType.cat:
      curCom = 'Cat' + stage;
      break;
    case petType.dog:
      curCom = 'Dog' + stage;
      break;
    case petType.rabbit:
      curCom = 'Rabbit' + stage;
      break;
    default:
      curCom = 'NoPet';
      break;
  }

  return eval(curCom);
}

const perfFlag = 'pet-performance';
const perfVal = isGithub ? 0 : Number(localStorage.getItem(perfFlag) || 1);
const perf = ref(perfVal);

export default {
  components: { NoPet, Cat1, Cat2, Cat3, Dog1, Rabbit1, Dog2, Dog3, Rabbit2, Rabbit3, Chat },
  props: ['pet', 'initData', 'index'],
  computed: {
    petComponent() {
      return setPetComponent(this.pet.type, this.level)
    },
    perfTitle() {
      return perf.value ? '关闭性能模式' : '开启性能模式';
    }
  },
  setup(props) {

    return {
      level: getLevel(props.pet.total_exp),
      togglePlane(name, state) {
        emitter.emit('index/toggle-plane-state', name, state)
      },
      clickPet() {
        emitter.emit('index/click-pet', props.pet);
      },
      perf,
      togglePerformance() {
        const newPerf = perf.value ^ 1;
        perf.value = newPerf;
        localStorage.setItem(perfFlag, newPerf);
      }
    }
  },
}
</script>

<style lang="sass">
@import './scss/pet-card.scss'
</style>
