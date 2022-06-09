import createjs from '@src/js/create'
var stage = {};
var AdobeAn = {};

(function (cjs, an) {

    var p; // shortcut to reference prototypes
    var lib={};var ss={};var img={};
    lib.ssMetadata = [];
    
    
    (lib.AnMovieClip = function(){
        this.actionFrames = [];
        this.ignorePause = false;
        this.gotoAndPlay = function(positionOrLabel){
            cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
        }
        this.play = function(){
            cjs.MovieClip.prototype.play.call(this);
        }
        this.gotoAndStop = function(positionOrLabel){
            cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
        }
        this.stop = function(){
            cjs.MovieClip.prototype.stop.call(this);
        }
    }).prototype = p = new cjs.MovieClip();
    // symbols:
    // helper functions:
    
    (lib.rabbit = function(mode,startPosition,loop,reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
            var props = new Object();
            props.mode = mode;
            props.startPosition = startPosition;
            props.labels = {};
            props.loop = loop;
            props.reversed = reversed;
            cjs.MovieClip.apply(this,[props]);
        
            // 图层_5
            this.shape = new cjs.Shape();
            this.shape.graphics.f("#58C1E0").s().p("AiKDoQgbgNgPgOQgPAHgNABQgSADgEgIQgDgGAFgKIAEgFIADgEQgKABgJgBQgPgCgCgJQgDgJAMgKQAKgHAPgGIgCgCQADiPBkg/IgRgiQgegxgegKIgXAgQgcAdgbgNQgcgNAEgiQADgTARgiQALgWAVgPQAXgQAXADQAcAEAfATQAjAYASAjQAQAhANAjIAFAQQAdgIAcAAQAdAAAcAIIAGgQQAMgjARghQASgjAkgYQAegTAcgEQAXgDAWAQQAWAPALAWQARAiACATQAGAigdANQgbANgdgdIgWggQgeAKgeAxIgSAiQBmA/ACCPIgBACQAOAGAKAHQAMAKgDAJQgCAJgPACQgJABgLgBIAEAEIADAFQAGAKgEAGQgDAIgSgDQgNgBgPgHQgQAOgbANQg+AghMAAQhLAAg/ggg");
            this.shape.setTransform(31.25,20.9763);
        
            this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        
            // 图层_6
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FFFFFF").s().p("ADZA5IghgHIgchNIB2geIASAOQATAQgBAOQgCANgTAKIgTAIIAEAFQADAIgFALQgPAQgcAAIgMgBgAkPAqQgFgLADgIIAEgFIgTgIQgTgKgCgNQgBgOATgQIASgOIB2AeIgcBNIghAHIgMABQgcAAgPgQg");
            this.shape_1.setTransform(31.025,39.8278);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
        
            // 图层_5
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FFFFFF").s().p("AAHEhIgBAAIgGAAQhXAAhJglQgSgJgOgJQgvgnAAgLIAAgaIgBAAQgPgCgCgJQgDgJAMgKIAJgGIAAhdQAAgUAPgOQANgNASgCQAagsAtgdIgRgiQgegxgegKIgXAgQgcAdgbgNQgcgNAEgiQADgTARgiQALgWAVgPQAXgQAXADQAcAEAfATQAjAYASAjQAQAhANAjIAFAQQAdgIAcAAQAdAAAcAIIAGgQQAMgjARghQASgjAkgYQAegTAcgEQAXgDAWAQQAWAPALAWQARAiACATQAGAigdANQgbANgdgdIgWggQgeAKgeAxIgSAiQAuAdAaAtQAPACAMAMQAPAOAAAUIAABbIANAIQAMAKgDAJQgCAJgPACIgFABIAAAXQAAAHgTAWIgUAUQgQALgTAKIgBAAQg2Acg/AHIAAAAIgiACIgDAAg");
            this.shape_2.setTransform(31.25,23.4763);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
        
            // 图层_5
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#FFFFFF").s().p("AiKEBQgbgNgPgOQgPAHgNABQgSADgEgIQgDgGAFgKIAEgFIADgEQgKABgJgBQgPgCgCgJQgBgDABgDQgHgGgFgIQgHgMABgOQAGiIBThIIgFgHQg1Azg2gdQg/gbALhJQACgZAWgrIAAAAQARgiAggWIgBABQAogdApAHQAnAEApAaIAAABQAvAfAXAvQANAYAKAaQAMgCAMAAQAMAAANACQAKgaAMgYQAYgvAvgfIAAgBQAogaAngEQApgHAoAdIAAgBQAfAWARAiIABAAQAVArADAZQAKBJg+AbQg2Adg1gzIgFAHQBTBIAGCIQAAAOgGAMQgFAIgHAGIAAAGQgDAJgOACQgJABgLgBIAEAEIADAFQAGAKgEAGQgEAIgRgDQgNgBgPgHQgQAOgbANQg+AghMAAQhLAAg/ggg");
            this.shape_3.setTransform(31.2505,18.4646);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-4,-10.4,70.5,62.8);
        
        
        (lib.dog = function(mode,startPosition,loop,reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
            var props = new Object();
            props.mode = mode;
            props.startPosition = startPosition;
            props.labels = {};
            props.loop = loop;
            props.reversed = reversed;
            cjs.MovieClip.apply(this,[props]);
        
            // dog_复制
            this.shape = new cjs.Shape();
            this.shape.graphics.f("#F1C66B").s().p("AAKDuIgDABIAAgBIgCAAIhAgEQhOgMgaglIgHAGIgBACIgOAAQgFgPAGgPIgHgFQgHgDgHAKQgDgGgBgIQgCgQAJgKIgYACQANggATgMIAAgFIAAgFIABgKIABgOQAFgmALgTQgUgUgMgoQgXhOAnhcQATACAdAPQA6AdArBAIArgCIAAAAIArACQAshAA5gdQAdgPAVgCQAmBcgYBOQgLAogUAUQAMATAEAmIACAOIAAAKIAAAFIAAAFQASAMAPAgIgYgCQAIAKgCAQQgCAIgDAGQgGgKgHADIgGAFQAFAPgFAPIgOAAIgCgCIgHgGQgYAkhFAMIg3AFIgCAAIAAABg");
            this.shape.setTransform(31.3,21.45);
        
            this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        
            // dog_复制
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FFFFFF").s().p("AAKEHIgDABIAAgBIgCAAIhBgEQhOgMgZglIgHAGIgBACIgOAAQgGgPAGgPIgGgFQgHgDgHAKQgDgGgBgIQgCgQAIgKIgYACQAEgJAEgHIgCgBQgMgIgGgMQgHgNACgOIABgFIABgPQADgZAGgTQgOgXgJgdIABAAQgeheAuhuQAGgQAPgIQAOgJAQACQAcACAnAUQA5AdAuA5IASAAIAAAAIAAAAIABAAIASAAQAtg5A6gdIgBAAQAogUAbgCQARgCAOAJQAOAIAHAQQAuBugeBeQgJAdgNAXQAFATAEAZIgBgBIACAQIAAABIABAEQABAOgGANQgHAMgMAIIgBABIAHAQIgYgCQAJAKgDAQQgBAIgDAGQgGgKgIADIgGAFQAGAPgFAPIgOAAIgCgCIgHgGQgZAkhEAMIg4AFIgCAAIAAABg");
            this.shape_1.setTransform(31.325,18.956);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
        
            // dog
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FFFFFF").s().p("AAMBpIgDAAIAAAAQgQgChCgDQhggPgfgtIgJAHQgJAKgCAHQgFgGgDgJQgHgTAIgSIgIgGQgJgDgIALQgEgGgBgKQgDgTALgMIgeACQARgnAWgPIABgPIAAgEIHfAAIAAAEIAAAPQAXAPARAnIgegCQALAMgDATQgCAKgDAGQgIgLgJADIgIAGQAIASgHATQgDAJgFAGQgCgHgJgKIgJgHQgfArhTAQQg4AEgQACIAAAAg");
            this.shape_2.setTransform(31.275,38.8);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(3.3,-7.4,56,56.8);
        
        
        (lib.cat = function(mode,startPosition,loop,reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
            var props = new Object();
            props.mode = mode;
            props.startPosition = startPosition;
            props.labels = {};
            props.loop = loop;
            props.reversed = reversed;
            cjs.MovieClip.apply(this,[props]);
        
            // 图层_1
            this.shape = new cjs.Shape();
            this.shape.graphics.f("#71C99C").s().p("AgCDMIgCAAQiWgEhJhLQgYgXgNgdQgHgOgBgJIgNgUIAOgFQAHgZAignQgRg1ABg8QAAgeAEgTIAHAAIAAgCQA0gCA2ATQAaAJAQALQANgFAPgDQAYgFAcgCIAAgBIALABIAKgBIAAABQAsACAhAMQAPgJAYgJQAVgHAUgEQAkgJAjACQAFAUABAeQAAA8gRA0QAhApAIAYIAOAEIgMAVQgDAJgGAOQgNAcgXAYQgnAng8AUIg7AOQgiAGgmABIgBAAg");
            this.shape.setTransform(31.2,22.106);
        
            this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        
            // 图层_1
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FFFFFF").s().p("AAAD6IgCAAIgCAAIgBAAQiqgEhVhYIAAAAQgegegQgkQgGgOgDgKIgJgOQgHgMAAgPQABgOAJgLQAGgHAJgFQAJgRARgWQgNgxABg2QAAgkAFgWQAEgQAMgKQAKgJANgCIAKgCQA+gDA/AXIABAAIAeANIANgDQAXgFAcgCIAMgBIAKAAIAKAAIAMABQAhACAcAIIAbgLIABgBQAXgJAYgEIgBAAQArgKApACQAQABAMAKQAMALADAPQAFAXAAAjQABA3gMAxQAQAVAJASQAJAEAHAIQAIALABAOQAAAOgHANIgIANQgDALgHAOQgQAjgeAeIAAABQguAvhHAWIgDABIg7APIgDABQglAGgqABIAAAAg");
            this.shape_1.setTransform(31.1751,22.1074);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-2,-2.9,66.4,50);
        
        
        // stage content:
        (lib.loading = function(mode,startPosition,loop,reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
            var props = new Object();
            props.mode = mode;
            props.startPosition = startPosition;
            props.labels = {};
            props.loop = loop;
            props.reversed = reversed;
            cjs.MovieClip.apply(this,[props]);
        
            // 图层_4
            this.instance = new lib.dog("synched",0);
            this.instance.setTransform(166.2,45,0.6978,0.6978,0,0,0,31.3,20.9);
        
            this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},14).to({startPosition:0},15).to({y:23},15).to({y:45},15).to({y:67},16).to({y:45},15).to({startPosition:0},10).wait(1));
        
            // 图层_5
            this.instance_1 = new lib.rabbit("synched",0);
            this.instance_1.setTransform(103.5,45.05,0.6978,0.6978,0,0,0,31.2,21);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},14).to({y:24.05},15).to({y:45.05},15).to({y:66.05},15).to({y:45.05},16).to({startPosition:0},15).to({startPosition:0},10).wait(1));
        
            // 图层_3
            this.instance_2 = new lib.cat("synched",0);
            this.instance_2.setTransform(40.15,47,0.6978,0.6978,0,0,0,31.2,22.1);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:23},14).to({y:68},30).to({y:47},15).to({startPosition:0},31).to({startPosition:0},10).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new lib.AnMovieClip();
        p.nominalBounds = new cjs.Rectangle(117,47.1,68.69999999999999,40.9);
        // library properties:
        lib.properties = {
            id: 'AA02CAE7823A974B8F0A7EB048F52678',
            width: 200,
            height: 90,
            fps: 60,
            color: "#FFFFFF",
            opacity: 1.00,
            manifest: [],
            preloads: []
        };
        
        
        
        // bootstrap callback support:
        
        (lib.Stage = function(canvas) {
            createjs.Stage.call(this, canvas);
        }).prototype = p = new createjs.Stage();
        
        p.setAutoPlay = function(autoPlay) {
            this.tickEnabled = autoPlay;
        }
        p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
        p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
        p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
        p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }
        
        p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }
        
        an.bootcompsLoaded = an.bootcompsLoaded || [];
        if(!an.bootstrapListeners) {
            an.bootstrapListeners=[];
        }
        
        an.bootstrapCallback=function(fnCallback) {
            an.bootstrapListeners.push(fnCallback);
            if(an.bootcompsLoaded.length > 0) {
                for(var i=0; i<an.bootcompsLoaded.length; ++i) {
                    fnCallback(an.bootcompsLoaded[i]);
                }
            }
        };
        
        an.compositions = an.compositions || {};
        an.compositions['AA02CAE7823A974B8F0A7EB048F52678'] = {
            getStage: function() { return exportRoot.stage; },
            getLibrary: function() { return lib; },
            getSpriteSheet: function() { return ss; },
            getImages: function() { return img; }
        };
        
        an.compositionLoaded = function(id) {
            an.bootcompsLoaded.push(id);
            for(var j=0; j<an.bootstrapListeners.length; j++) {
                an.bootstrapListeners[j](id);
            }
        }
        
        an.getComposition = function(id) {
            return an.compositions[id];
        }
        
        
        an.makeResponsive = function(stage, isResp, respDim, isScale, scaleType, domContainers) {		
            var lastW, lastH, lastS=1;		
            window.addEventListener('resize', resizeCanvas);		
            resizeCanvas();		
            function resizeCanvas() {			
                var w = lib.properties.width, h = lib.properties.height;			
                var iw = window.innerWidth, ih=window.innerHeight;			
                var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
                if(isResp) {                
                    if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                        sRatio = lastS;                
                    }				
                    else if(!isScale) {					
                        if(iw<w || ih<h)						
                            sRatio = Math.min(xRatio, yRatio);				
                    }				
                    else if(scaleType==1) {					
                        sRatio = Math.min(xRatio, yRatio);				
                    }				
                    else if(scaleType==2) {					
                        sRatio = Math.max(xRatio, yRatio);				
                    }			
                }
                domContainers[0].width = w * pRatio * sRatio;			
                domContainers[0].height = h * pRatio * sRatio;
                stage.scaleX = pRatio*sRatio;			
                stage.scaleY = pRatio*sRatio;
                lastW = iw; lastH = ih; lastS = sRatio;            
                stage.tickOnUpdate = false;            
                stage.update();            
                stage.tickOnUpdate = true;		
            }
        }
        an.handleSoundStreamOnTick = function(event) {
            if(!event.paused){
                var stageChild = stage.getChildAt(0);
                if(!stageChild.paused || stageChild.ignorePause){
                    stageChild.syncStreamSounds();
                }
            }
        }
        an.handleFilterCache = function(event) {
            if(!event.paused){
                var target = event.target;
                if(target){
                    if(target.filterCacheList){
                        for(var index = 0; index < target.filterCacheList.length ; index++){
                            var cacheInst = target.filterCacheList[index];
                            if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
                                cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
                            }
                        }
                    }
                }
            }
        }
    
    
    })(createjs, AdobeAn);


export { createjs, AdobeAn };
