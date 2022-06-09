<template>
  <div class="mask-bg">
    <canvas
        ref="canvas"
        width="200"
        height="90"
        style="display: block; background-color:rgba(255, 255, 255, 0);"
      ></canvas>
  </div>
</template>

<script>
import { createjs, AdobeAn } from './js/canvas';

let stage, exportRoot, fnStartAnimation;

function initAnimate(canvasElm) {
  var comp = AdobeAn.getComposition("AA02CAE7823A974B8F0A7EB048F52678");
  handleComplete(canvasElm, comp);
}

function handleComplete(canvasElm, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  exportRoot = new lib.loading();
  stage = new lib.Stage(canvasElm);
  //Registers the "tick" event listener.
  fnStartAnimation = function () {
    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener("tick", stage);
  }
  //Code to support hidpi screens and responsive scaling.
  AdobeAn.makeResponsive(stage, false, 'both', false, 1, [canvasElm]);
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}

export default {
  components: {  },
  props: [],
  setup() {
    return {
    }
  },
  mounted() {
    initAnimate(this.$refs.canvas);
  },
}
</script>

<style lang="sass" scoped>
  .mask-bg
    z-index: 9999
    position: fixed
    left: 0
    right: 0
    bottom: 0
    top: 0
    background: rgba(0,0,0,.3)
    display: flex
    align-items: center
    justify-content: center
  canvas
    width: 200px
    height: 90px
    z-index: 9999
    
</style>