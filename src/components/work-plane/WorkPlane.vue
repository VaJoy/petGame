<template>
  <div class="mask-bg">
    <div class="work-plane-wrap dialog-base">
      <h1>{{ title }}</h1>
      <p v-if="!isWorking && isShow">欢迎来番茄超市打工，每天打工完毕可获得 10 金币奖励。<br>
        打工过程不可刷新 / 隐藏打工界面，否则会当作偷懒行为中断打工哦。<br>
        <span class="mr-30 button" @click.stop="clickStartToWork">开始打工</span>
        <span class="button button-light" @click.stop="closePlane">取消</span>
      </p>
      <p v-if="isWorking">
        打工过程不可刷新 / 隐藏打工界面，否则会当作偷懒行为中断打工哦。
      </p>
      <p v-if="!isShow">
        {{ isDoneToday ? '你的宝宝今天已打工过了，请明天再来吧。' : '你的宝宝还小，请在 1 级后再来吧。' }}<br>
        <span class="button" @click.stop="closePlane">我知道了</span>
      </p>
    </div>
  </div>
</template>

<script>
import emitter from 'tiny-emitter/instance';
import moment from 'moment';
import { markEvent, endWorking } from '@js/request.js';
import { eventType } from '@config/data.js';
import { codes } from '@config/codes.js';

let timeStamp = null;

export default {
  props: ['myLevel'],
  computed: {
    title() {
      return this.isWorking ? ('打工中，番茄钟倒计时：' + this.restTime) : '番茄钟点工'
    },
    isShow() {
      return this.myLevel >= 1 && !this.isDoneToday;
    },
  },
  data() {
    return {
      isWorking: false,
      restTime: '',
      isDoneToday: false,
    }
  },
  methods: {
    clickStartToWork() {
      markEvent({ type: 'startWorking' }, (json) => {
        if (json.code === codes.ok) {
          this.startToWork();
        } else {
          alert(json.err || '打工请求失败，请稍后重试');
        }
      })
    },
    startToWork() {
      this.isWorking = true;
      let restTime = moment("010000", "Hmmss");
      this.restTime = '01:00:00';
      
      timeStamp = setInterval(() => {
        restTime = restTime.subtract(1, 'seconds');
        this.restTime = restTime.format("HH:mm:ss");
        if (this.restTime === '00:00:00') {
          endWorking((json) => {
            if (json.code === codes.ok) {
              localStorage.setItem('last-work-date', moment().format('yyyy-MM-DD'));
              alert('打工完成，获得 10 金币奖励！');
            } else {
              console.log(json.err);
              alert(json.err || '打工失败，请截图联系 VJ。');
            }
          });
          this.closePlane();
        }
      }, 1000);

      this.workMonitor();
    },
    checkVisibility() {
      if (document.hidden) {
        this.isWorking = false;
        this.unmountMonitor();
        this.closePlane();
        setTimeout(() => {
          alert('你离开了打工界面，打工失败');
        }, 10);
      }
    },
    workMonitor() {
      document.addEventListener("visibilitychange", this.checkVisibility);
    },
    unmountMonitor() {
      document.removeEventListener("visibilitychange", this.checkVisibility);
    },
    closePlane() {
      clearInterval(timeStamp);
      timeStamp = null;
      emitter.emit('index/toggle-plane-state', 'work', false);
    }
  },
  created() {
    const lastWorkDate = localStorage.getItem('last-work-date');
    const today = moment().format('yyyy-MM-DD');
    this.isDoneToday = today === lastWorkDate;
  },
  beforeUnmount() {
    this.unmountMonitor();
  }
}
</script>

<style lang="sass">
@import './scss/work-plane.scss'
</style>