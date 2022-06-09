<template>
  <div class="pet-card-wrap">
    <div class="pet-wrap">
      <component :is="petComponent"></component>
    </div>
    <div class="host-name">{{pet.name}} (Lv. {{level}})</div>
  </div>
</template>

<script>
import { shallowReactive, ref } from 'vue';
import Cat1 from '@components/cat/Cat1.vue'
import Dog1 from '@components/dog/Dog1.vue'
import Rabbit1 from '@components/rabbit/Rabbit1.vue'
import NoPet from '@components/no-pet/NoPet.vue'
import { petType, getLevel, getPetStage } from '@config/data.js'


const setPetComponent = (type, level) => {
  let curCom;
  let stage = getPetStage(level);
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

export default {
  components: { NoPet, Cat1, Dog1, Rabbit1 },
  props: ['pet', 'hasLogined', 'permission'],
  computed: {
    petComponent() {
      return setPetComponent(this.pet.type, this.level)
    }
  },
  setup(props) {
    return {
      level: getLevel(props.pet.total_exp)
    }
  },
}
</script>

<style lang="sass">
@import './scss/pet-card.scss'
</style>
