<template>
  <div class="mask-bg">
    <div class="work-plane-wrap dialog-base">
      <h1>{{ title }}</h1>
      <p v-if="!isWorking && isShow">
        宝宝每天可打工 1 小时，打工完毕可获得 <em>8 ~ 13</em> 随机金币的奖励（专注模式将额外多赚取 <em>1</em> 金币）。<br>
      <ul>
        <li>「专注模式打工」：打工过程不可刷新 / 关闭 / 隐藏打工页面。</li>
        <li>「普通模式打工」：打工过程可以隐藏打工页面，但不能刷新 / 关闭页面。</li>
      </ul><br>
      <span class="mr-30 button" @click.stop="clickStartToWork(1)">专注模式打工</span>
      <span class="mr-30 button" @click.stop="clickStartToWork(0)">普通模式打工</span>
      <span class="button button-light" @click.stop="closePlane">取消</span>
      </p>
      <p v-if="isWorking">
        {{ getWorkDesc() }}
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

let worker;

const triggerNotification = (title, msg) => {
  if (window.Notification && Notification.permission !== "denied") {
    Notification.requestPermission(function () {
      new Notification(title, { body: msg });
    });
  }
}

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
      workType: 1,  // 1-专注模式打工，0-普通模式打工
      isWorking: false,
      restTime: '',
      isDoneToday: false,
    }
  },
  methods: {
    clickStartToWork(workType) {
      this.workType = workType;
      markEvent({ type: 'startWorking' }, (json) => {
        if (json.code === codes.ok) {
          this.startToWork();
        } else {
          const errMsg = json.err || '打工请求失败，请稍后重试';
          emitter.emit('dialog/alert', errMsg);
        }
      })
    },
    startToWork() {
      this.isWorking = true;
      let restTime = moment("010000", "Hmmss");
      this.restTime = '01:00:00';

      this.startWorker(() => {
        restTime = restTime.subtract(1, 'seconds');
        this.restTime = restTime.format("HH:mm:ss");
        if (this.restTime === '00:00:00') {
          endWorking(this.workType, (json) => {
            if (json.code === codes.ok) {
              localStorage.setItem('last-work-date', moment().format('yyyy-MM-DD'));
              emitter.emit('request/reload');
              emitter.emit('dialog/alert', `打工完成，获得 ${json.coins} 金币奖励！`);
              triggerNotification('宝宝打工完成', `获得了 ${json.coins} 金币奖励！`);
            } else {
              const errMsg = json.err || '打工失败，请截图联系 VJ。';
              triggerNotification('打工失败', errMsg);
              emitter.emit('dialog/alert', errMsg);
            }
          });
          this.closePlane();
        }
      });

      if (this.workType === 1) {
        this.workMonitor();
      }
    },
    getWorkDesc() {
      if (this.workType === 1) {
        return '专注模式打工中，请不要刷新 / 关闭 / 隐藏打工页面，否则会被当作偷懒行为中断打工。'
      } else {
        return '普通模式打工中，打工过程请勿刷新 / 关闭打工页面。'
      }
    },
    checkVisibility() {
      if (document.hidden) {
        this.isWorking = false;
        this.unmountMonitor();
        this.closePlane();
        setTimeout(() => {
          const errMsg = '你离开了打工界面，打工失败';
          triggerNotification('专注模式打工失败', errMsg);
          emitter.emit('dialog/alert', errMsg);
        }, 10);
      }
    },
    workMonitor() {
      document.addEventListener("visibilitychange", this.checkVisibility);
    },
    unmountMonitor() {
      document.removeEventListener("visibilitychange", this.checkVisibility);
    },
    startWorker(callback) {
      const url = new URL('./js/worker.js', import.meta.url).href;
      worker = new Worker(url);
      worker.onmessage = callback;
    },
    stopWorker() {
      if (worker && worker.terminate) {
        worker.terminate();
      }

      worker = null;
    },
    closePlane() {
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
    this.stopWorker();
  }
}
</script>

<style lang="sass">
@import './scss/work-plane.scss'
</style>