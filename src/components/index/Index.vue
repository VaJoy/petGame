<template>
  <div class="pets-wrap" @click="clickWrap">
    <PetCard v-for="(pet, index) in initData?.pets" :pet="pet" :key="`pet-${pet.id}`" 
      :initData="initData"></PetCard>
    <Login v-if="isInitRequestDone && !hasLogined && !isRequesting"></Login>
    <ChoosePet v-if="isInitRequestDone && hasLogined && !hasPet && !isRequesting"></ChoosePet>
    <WorkPlane v-if="planeState.work" :myLevel="myLevel"></WorkPlane>
    <EventPlane v-if="planeState.event" :userMap="userMap" :events="initData.events" :myEvents="initData.myEvents"></EventPlane>
    <RankPlane v-if="planeState.rank" :pets="pets" :userMap="userMap" :attacks="attacks"></RankPlane>
    <ShopPlane v-if="planeState.shop" :myInfo="myInfo"></ShopPlane>
    <BagPlane v-if="planeState.bag" :myInfo="myInfo" :myProps="myProps"></BagPlane>
    <InfoCard :pet="infoCard.pet" :axis="infoCard.axis" :myLevel="myLevel" v-if="infoCard.isShow"></InfoCard>
    <Loading v-if="isRequesting"></Loading>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import Login from '../login/Login.vue';
import Loading from '../loading/Loading.vue';
import ChoosePet from '../choose-pet/ChoosePet.vue';
import PetCard from '../pet-card/PetCard.vue';
import InfoCard from '../info-card/InfoCard.vue'
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
const infoCard = reactive({ isShow: false, pet: {}, axis: {} });

const initOrResetData = () => {
  getInitData((data) => {
    if (data.code !== codes.ok) {
      alert(data.err);
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
  infoCard.isShow = false;
  planeState[plane] = state;
});

emitter.on('request/reload', initOrResetData);

emitter.on('index/click-pet', (pet) => {
  infoCard.pet = pet;
  infoCard.isShow = !(infoCard.isShow);
  if (infoCard.isShow) {
    const { pageX, pageY } = event;
    infoCard.axis = {
      x: pageX, y: pageY
    }
  }
});

export default {
  components: { PetCard, InfoCard, Login, Loading, ChoosePet, WorkPlane, EventPlane, BagPlane, ShopPlane, RankPlane },
  setup() {
    initOrResetData();
    return {
      initData,
      isRequesting,
      isInitRequestDone,
      planeState,
      infoCard,
      clickWrap() {
        infoCard.isShow = false;
      }
    }
  },
  computed: {
    myInfo() {
      return this.initData.myInfo;
    },
    myProps() {
      return this.initData.myProps || [];
    },
    pets() {
      return this.initData.pets || [];
    },
    attacks() {
      return this.initData.attacks || [];
    },
    userMap() {
      const map = {};
      const pets = this.initData.pets || [];
      pets.forEach(pet => {
        map[pet.user_id] = pet.name;
        if (pet.isMine) {
          map.mine = pet.user_id
        }
      });
      return map;
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
