<template>
  <div class="mask-bg">
    <div class="event-plane-wrap dialog-base">
      <div class="event-wrap">
        <p>
        <h2><span class="iconfont">&#xec95;</span>我的消息</h2>
        <ul v-if="myEvents.length">
          <li v-for="item in myEvents" :key="'my-event-' + item.id">
            <span class="mr-10">{{ getTime(item) }}</span><span>{{ getDesc(item) }}</span>
          </li>
        </ul>
        <div v-else class="none-info">暂无</div>
        </p>
        <p>
        <h2><span class="iconfont">&#xe68e;</span>世界消息</h2>
        <ul v-if="events.length">
          <li v-for="item in events" :key="'my-event-' + item.id">
            <span class="mr-10">{{ getTime(item) }}</span><span>{{ getDesc(item, true) }}</span>
          </li>
        </ul>
        <div v-else class="none-info">暂无</div>
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
import { eventType } from '@config/data.js';
import moment from 'moment';

export default {
  props: ['myEvents', 'events', 'userMap'],
  computed: {
  },
  data() {
    return {
    }
  },
  methods: {
    closePlane() {
      emitter.emit('index/toggle-plane-state', 'event', false);
    },
    getTime(item = {}) {
      return moment(item.c_time).format('MM-DD HH:mm');
    },
    getDesc(item = {}, showNick) {
      let desc = '';
      const myId = showNick || this.userMap.mine;
      const { user_id, target_id, award_num, success } = item;
      const userName = user_id === myId ? '我' : `「${this.userMap[user_id] || ''}」`;
      const targetName = target_id === myId ? '我' : `「${this.userMap[target_id] || ''}」`;

      switch (item.type) {
        case eventType.attack:
          if (success) {  // 攻击成功
            if (award_num > 0) {
              desc = `${userName}攻击并偷走了${targetName} ${award_num} 个金币。`;
            } else {
              desc = `${userName}攻击了${targetName}的宝宝。`;
            }
          } else {  // 攻击失败
            desc = `${userName}攻击${targetName}的宝宝失败，反被毒打了一顿。`;
          }

          break;
        case eventType.startWorking:
          desc = `${userName}的宝宝打工赚取了 ${award_num} 个金币。`;
          break;
      }
      return desc;
    }
  },
}
</script>

<style lang="sass">
@import './scss/index.scss'
</style>