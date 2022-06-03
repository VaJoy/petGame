<template>
<div>
    <canvas
        ref="canvas"
        width="400"
        height="500"
        style="display: block; background-color:rgba(255, 255, 255, 0);"
      ></canvas>
      <span>待选择</span>
</div>

</template>

<script>
import { shallowReactive } from 'vue';
import { createjs, AdobeAn } from './js/canvas';

let stage, exportRoot, fnStartAnimation;

function initAnimate(canvasElm) {
  var comp = AdobeAn.getComposition("AA504AE6CDFB074B8B319F65E468829A");
  handleComplete(canvasElm, comp);
}

function handleComplete(canvasElm, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  exportRoot = new lib.none();
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
div
  position: relative
  width: 4rem
  height: 5rem
  display: flex
  justify-content: center
  align-items: center
canvas
  position: absolute
  width: 4rem
  height: 5rem
span
  position: relative
  z-index: 2
  display: inline-block
  content: '待选择'
  color: gray
  background: rgba(255,255,255,.5)
  font-size: 0.25rem
  font-weight: bold
  padding: 0.04rem 0.1rem
  border-radius: 0.2rem
  margin-top: 1.6rem
</style>
