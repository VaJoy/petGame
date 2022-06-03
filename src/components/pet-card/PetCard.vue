<template>
  <div class="pet-card-wrap">
    <div class="pet-wrap">
      <component :is="petComponent"></component>
    </div>
    <div class="host-name">{{pet.host.name}}</div>
  </div>
</template>

<script>
import { shallowReactive } from 'vue';
import Cat1 from '@components/cat/Cat1.vue'
import Dog1 from '@components/dog/Dog1.vue'
import Rabbit1 from '@components/rabbit/Rabbit1.vue'
import NoPet from '@components/no-pet/NoPet.vue'
import { petType } from '@mock/data.js'

const setPetComponent = (type) => {
  let curCom;
  switch (type) {
    case petType.cat:
      curCom = Cat1;
      break;
    case petType.dog:
      curCom = Dog1;
      break;
    case petType.rabbit:
      curCom = Rabbit1;
      break;
    default:
      curCom = NoPet;
      break;
  }

  return curCom;
}

export default {
  components: { NoPet, Cat1, Dog1, Rabbit1 },
  props: ['pet', 'hasLogined', 'permission'],
  setup(props) {
    const petComponent = setPetComponent(props.pet.type);

    return {
      petComponent
    }
  },
}
</script>

<style lang="sass">
@import './scss/pet-card.scss'
</style>
