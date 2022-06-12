<template>
  <div class="pets-wrap">
    <PetCard v-for="(pet, index) in initData?.pets" :pet="pet" :key="`pet-${pet.id}`" :hasLogined="hasLogined"
      :permission="initData.permission"></PetCard>
    <Login v-if="isInitRequestDone && !hasLogined && !isRequesting"></Login>
    <ChoosePet v-if="isInitRequestDone && hasLogined && !hasPet && !isRequesting"></ChoosePet>
    <WorkPlane v-if="planeState.work" :myLevel="myLevel"></WorkPlane>
    <EventPlane v-if="planeState.event" :myLevel="myLevel"></EventPlane>
    <RankPlane v-if="planeState.rank" :myLevel="myLevel"></RankPlane>
    <ShopPlane v-if="planeState.shop" :myLevel="myLevel"></ShopPlane>
    <BagPlane v-if="planeState.bag" :myLevel="myLevel"></BagPlane>
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
import WorkPlane from '../work-plane/WorkPlane.vue';
import EventPlane from '../event-plane/EventPlane.vue';
import RankPlane from '../rank-plane/RankPlane.vue';
import BagPlane from '../bag-plane/BagPlane.vue';
import ShopPlane from '../shop-plane/ShopPlane.vue';
import { getLevel } from '@config/data.js'

let initData = reactive({});
let planeState = reactive({});
let isRequesting = ref(true);
let isInitRequestDone = ref(false);

const initOrResetData = () => {
  getInitData((data) => {
    if (data.code !== codes.ok) {
      alert(data.err || '请求失败，请稍后重试');
      return;
    }

    console.log(data);
    initData = Object.assign(initData, data);
    isInitRequestDone.value = true;
  });
}

emitter.on('request/loading', (state) => {
  isRequesting.value = state;
});

emitter.on('index/toggle-plane-state', (plane, state) => {
  planeState[plane] = state;
});

emitter.on('request/reload', initOrResetData);

export default {
  components: { PetCard, Login, Loading, ChoosePet, WorkPlane, EventPlane, BagPlane, ShopPlane, RankPlane },
  setup() {
    initOrResetData();
    return {
      initData,
      isRequesting,
      isInitRequestDone,
      planeState,
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
    },
    myLevel() {
      let level = 0;
      if (this.initData.pets[0]?.isMine) {
        const myPet = this.initData.pets[0];
        level = getLevel(myPet.total_exp);
      }

      return level;
    }
  },
}
</script>

<style lang="sass" rel="stylesheet/scss">
@import './scss/reset.scss'
@import './scss/index.scss'
</style>
