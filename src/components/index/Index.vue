<template>
  <div class="pets-wrap">
    <PetCard v-for="(pet, index) in initData?.pets" :pet="pet" :key="`pet-${index}`"
    :hasLogined="hasLogined" :permission="initData.permission"></PetCard>
  </div>
</template>

<script>
import { reactive } from 'vue';
import PetCard from '../pet-card/PetCard.vue';
import { getInitData } from './js/getData.js';

let initData = reactive({});

getInitData().then((data) => {
  initData = Object.assign(initData, data);
})

export default {
  components: { PetCard },
  setup() {
    return {
      initData
    }
  },
  computed: {
    hasLogined() {
      return this.initData.id > 0;
    }
  }
}
</script>

<style lang="sass">
@import './scss/reset.scss'
@import './scss/index.scss'
</style>
