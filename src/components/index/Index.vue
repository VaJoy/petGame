<template>
  <div class="pets-wrap">
    <PetCard v-for="(pet, index) in initData?.pets" :pet="pet" :key="`pet-${index}`" :hasLogined="hasLogined"
      :permission="initData.permission"></PetCard>
    <Login v-if="isInitRequestDone && !hasLogined"></Login>
    <ChoosePet v-if="isInitRequestDone && hasLogined && !hasPet"></ChoosePet>

    <Loading v-if="isRequesting"></Loading>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import Login from '../login/Login.vue';
import Loading from '../loading/Loading.vue';
import ChoosePet from '../choose-pet/ChoosePet.vue';
import PetCard from '../pet-card/PetCard.vue';
import { getInitData } from '@js/request.js';
import { codes } from '@config/codes.js';
import emitter from 'tiny-emitter/instance';

let initData = reactive({});
let isRequesting = ref(true);
let isInitRequestDone = ref(false);

const initOrResetData = () => {
  getInitData((data) => {
  console.log(data);
  initData = Object.assign(initData, data);
  isInitRequestDone.value = true;
});
}


emitter.on('request/loading', (state) => {
  isRequesting.value = state;
});

emitter.on('request/reload', initOrResetData);

export default {
  components: { PetCard, Login, Loading, ChoosePet },
  setup() {
    initOrResetData();
    return {
      initData,
      isRequesting,
      isInitRequestDone
    }
  },
  computed: {
    myInfo() {
      return this.initData.myInfo;
    },
    pets() {
      return this.initData.pets || [];
    },
    hasPet() {
      return this.initData.pets[0]?.isMine
    },
    hasLogined() {
      return Boolean(this.initData.myInfo)
    }
  },
}
</script>

<style lang="sass">
@import './scss/reset.scss'
@import './scss/index.scss'
</style>
