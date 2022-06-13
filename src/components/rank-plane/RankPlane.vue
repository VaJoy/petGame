<template>
  <div class="mask-bg">
    <div class="rank-plane-wrap dialog-base">
      <div class="rank-wrap">
        <p>
        <h2>武力榜</h2>
        <ul v-if="forceList.length">
          <li v-for="(item, index) in forceList" :key="'rank-force-' + item.id">
            <span class="rank-num">{{index + 1}}</span><span>{{ item.name }}</span>
            <span class="rank-val" title="武力值">武 {{ item.force }}</span>
          </li>
        </ul>
        </p>

        <p>
        <h2>防御榜</h2>
        <ul v-if="defenceList.length">
          <li v-for="(item, index) in defenceList" :key="'rank-defence-' + item.id">
            <span class="rank-num">{{index + 1}}</span><span>{{ item.name }}</span>
            <span class="rank-val" title="防御值">防 {{ item.defence }}</span>
          </li>
        </ul>
        </p>

        <p>
        <h2>敏捷榜</h2>
        <ul v-if="agilityList.length">
          <li v-for="(item, index) in agilityList" :key="'rank-agility-' + item.id">
            <span class="rank-num">{{index + 1}}</span><span>{{ item.name }}</span>
            <span class="rank-val" title="敏捷值">敏 {{ item.agility }}</span>
          </li>
        </ul>
        </p>

        <p>
        <h2>恶人榜</h2>
        <ul v-if="attackList.length">
          <li v-for="(item, index) in attackList" :key="'rank-attack-' + item.id">
            <span class="rank-num">{{index + 1}}</span><span>{{ item.name }}</span>
            <span class="rank-val" title="进攻成功次数">攻 {{ item.times }}</span>
          </li>
        </ul>
        <div v-else style="margin-top: .3rem">暂无</div>
        </p>
      </div>

      <p>
        <span class="button" @click.stop="closePlane">返回</span>
      </p>
    </div>
  </div>
</template>

<script>
import emitter from 'tiny-emitter/instance';

const getRank = (list = [], featrue = ' ') => {
  const ret = list.map((item) => {
    return {
      [featrue]: item[featrue],
      name: item.name,
      id: item.user_id,
    }
  }).sort((a, b) => b[featrue] - a[featrue]);

  return ret.slice(0, 5);
}

const getAttacksList = (list, map) => {
  const ret = list.map((item) => {
    return {
      times: item.times,
      name: map[item.user_id] || ''
    }
  });

  return ret;
}

export default {
  props: ['pets', 'userMap', 'attacks'],
  computed: {
  },
  setup(props) {
    const { pets, attacks, userMap } = props;
    return {
      forceList: getRank(pets, 'force'),
      defenceList: getRank(pets, 'defence'),
      agilityList: getRank(pets, 'agility'),
      attackList: getAttacksList(attacks, userMap)
    }
  },
  methods: {
    closePlane() {
      emitter.emit('index/toggle-plane-state', 'rank', false);
    }
  },
}
</script>

<style lang="sass">
@import './scss/index.scss'
</style>