<template>
  <div class="chat-wrap" v-show="isShow" :class="{ 'chat-animate': isAnimate }" @click.stop>
    {{ msg }}
  </div>
</template>

<script>
import moment from 'moment';
import { normalChat, morningChat, nightChat, deepNightChat } from '@js/chats';
import { getRandomNum } from '@js/util';

const getRandomMsg = (list = normalChat) => {
  return list[getRandomNum(0, list.length - 1)];
}


const record = {
  get(flag) {
    return localStorage.getItem('chat-' + flag);
  },
  set(flag, data) {
    localStorage.setItem('chat-' + flag, data);
  },
  check(flag, time) {
    return this.get(flag) !== time;
  }
}

export default {
  props: ['initData'],
  computed: {
    time() {
      return this.initData.time || Date.now();
    },
    lastVisitTime() {
      return this.initData.myInfo?.last_visit_time || Date.now();
    }
  },
  data() {
    return {
      isShow: false,
      isAnimate: false,
      msg: ''
    }
  },
  methods: {
    toggleChat(state, callback) {
      if (state) {
        this.isShow = true;
        setTimeout(() => {
          this.isAnimate = true;
        }, 10);
      } else {
        this.isAnimate = false;
        setTimeout(() => {
          this.isShow = false;
          callback && callback();
        }, 600);
      }
    },
    loopChat() {
      this.toggleChat(true);
      setTimeout(() => {
        this.toggleChat(false, () => {
          this.msg = getRandomMsg();
        });

        setTimeout(this.loopChat, 15000);
      }, 8000);
    }
  },
  mounted() {
    const time = this.time;
    const lastVisitTime = this.lastVisitTime;
    const today = moment(time);
    const hour = today.hours();
    const date = today.format('YYYY-MM-DD');
    const timeSpan = time - lastVisitTime;

    let msg = getRandomMsg();

    if (timeSpan > 3600 * 1000 * 24 * 3) {
      msg = timeSpan > 3600 * 1000 * 24 * 9 ? '主人你好久好久没来了，宝宝好想你……' : '主人你好几天没来了，宝宝好想你';
    } else if (hour > 4 && hour < 10 && record.check('morning', date)) {
      msg = getRandomMsg(morningChat);
      record.set('morning', date);
    } else if (hour > 18 && hour < 23 && record.check('night', date)) {
      msg = getRandomMsg(nightChat);
      record.set('night', date);
    } else if (hour > 23 || hour < 4 && record.check('deepNight', date)) {
      msg = getRandomMsg(deepNightChat);
      record.set('deepNight', date);
    }

    this.msg = msg;
    setTimeout(this.loopChat, 800);
  }
}
</script>

<style lang="sass" scoped>
.chat-wrap
  position: absolute
  background: white
  width: 3.6rem
  left: .2rem
  top: .2rem
  box-sizing: border-box
  padding: .2rem .3rem
  font-size: .25rem
  color: #666
  box-shadow: 1px 1px 10px rgba(0,0,0,.3)
  border-radius: .3rem
  transition: opacity .5s
  animation: chat-animate 5s infinite
  opacity: 0
  &::after
    content: ''
    display: block
    position: absolute
    bottom: -.34rem
    left: 1.6rem
    width: 0
    height: 0
    border: solid .2rem transparent
    border-top: solid .15rem white
  &.chat-animate
    opacity: 1
  
  
@keyframes chat-animate
  from
    transform: translateY(0)
  50%
    transform: translateY(.1rem)
  to
    transform: translateY(0)
</style>