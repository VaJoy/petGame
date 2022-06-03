import { createApp } from 'vue'
import Index from './components/index/Index.vue'

(function(doc, win){
    var docEl = doc.documentElement;
    var resizeEvt = 'onorientationchange' in win ? 'orientationchange' : 'resize';
    var recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 2500) + 'px';
  
      win.addEventListener(resizeEvt, recalc, false);
      doc.addEventListener('DOMContentLoaded', recalc, false);
    }
    recalc();
  })(document, window);
  
createApp(Index).mount('#app')
