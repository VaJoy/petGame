<template>
  <canvas class="pet-canvas" ref="animateCanvas" width="400" height="500" v-show="!perf"
    style="display: block; background-color:rgba(255, 255, 255, 0);"></canvas>
  <canvas class="pet-canvas" ref="staticCanvas" width="400" height="500" v-show="perf"
    style="display: block; background-color:rgba(255, 255, 255, 0);"></canvas>
</template>

<script>
import { createjs, AdobeAn } from './js/cat1';

let stage, exportRoot, fnStartAnimation;

function initAnimate(canvasElm) {
  var comp = AdobeAn.getComposition("AA504AE6CDFB074B8B319F65E468829A");
  handleComplete(canvasElm, comp);
}

function handleComplete(canvasElm, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  exportRoot = new lib.cat();
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

import { petCompSetup } from '@js/business';

export default {
  props: ['perf'],
  setup: petCompSetup(initAnimate)
}
</script>

<style lang="sass" scoped>
canvas
  width: 4rem
  height: 5rem
</style>

