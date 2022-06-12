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
    
    (lib.补间7 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f("#B7AB99").s().p("AmkAuQiugTAAgbQAAgaCugTQCvgTD1AAQD2AACuATQCvATAAAaQAAAbivATQiuATj2AAQj1AAivgTg");
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FFFFFF").s().p("AmkAuQiugTAAgbQAAgaCugTQCvgTD1AAQD3AACuATQCuATAAAaQAAAbiuATQiuATj3AAQj1AAivgTg");
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-59.5,-6.5,119,13);
        
        
        (lib.补间6 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f("#B7AB99").s().p("AmkAuQiugTAAgbQAAgaCugTQCvgTD1AAQD2AACuATQCvATAAAaQAAAbivATQiuATj2AAQj1AAivgTg");
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FFFFFF").s().p("AmkAuQiugTAAgbQAAgaCugTQCvgTD1AAQD3AACuATQCuATAAAaQAAAbiuATQiuATj3AAQj1AAivgTg");
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-59.5,-6.5,119,13);
        
        
        (lib.补间5 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f("#FFFBD1").s().p("ArmCIQk0g4AAhQQAAhKEPg2IAlgHQE0g5GyABQGzgBEzA5IA7ALQD5A1ABBHQAABQk1A4QkzA5mzAAQmyAAk0g5gApvhcQhfAMg9APQhpAZAAAfQAAAvEFAjQEFAiFvAAQFxAAEEgiQEFgjAAgvQAAgdhegYQg/gQhogOQkEgilxgBQlvABkFAig");
        
            this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-105,-19.2,210.1,38.5);
        
        
        (lib.补间4 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f("#FFFBD1").s().p("ArmCIQk0g4AAhQQAAhKEPg2IAlgHQE0g5GyABQGzgBEzA5IA7ALQD5A1ABBHQAABQk1A4QkzA5mzAAQmyAAk0g5gApvhcQhfAMg9APQhpAZAAAfQAAAvEFAjQEFAiFvAAQFxAAEEgiQEFgjAAgvQAAgdhegYQg/gQhogOQkEgilxgBQlvABkFAig");
        
            this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-105,-19.2,210.1,38.5);
        
        
        (lib.补间3 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f("#FFFBD1").s().p("ArmBpQk0g5AAhOQAAhLEPg2IAGgBIAAA/IgGABQhpAZAAAfQAAAvEFAjQEFAiFvAAQFxAAEEgiQEFgjAAgvQAAgchVgXIAAg9QDxA0AABGQAABOk1A5QkzA4mzAAQmyAAk0g4g");
            this.shape.setTransform(0,0.025);
        
            this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-105,-16.1,210.1,32.3);
        
        
        (lib.补间2 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f("#FFFBD1").s().p("ArmBpQk0g5AAhOQAAhLEPg2IAGgBIAAA/IgGABQhpAZAAAfQAAAvEFAjQEFAiFvAAQFxAAEEgiQEFgjAAgvQAAgchVgXIAAg9QDxA0AABGQAABOk1A5QkzA4mzAAQmyAAk0g4g");
            this.shape.setTransform(0,0.025);
        
            this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-105,-16.1,210.1,32.3);
        
        
        (lib.头 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f("#F49A7A").s().p("AiKDoQgbgNgPgOQgPAHgNABQgSADgEgIQgDgGAFgKIAEgFIADgEQgKABgJgBQgPgCgCgJQgDgJAMgKQAKgHAPgGIgCgCQADiPBkg/IgRgiQgegxgegKIgXAgQgcAdgbgNQgcgNAEgiQADgTARgiQALgWAVgPQAXgQAXADQAcAEAfATQAjAYASAjQAQAhANAjIAFAQQAdgIAcAAQAdAAAcAIIAGgQQAMgjARghQASgjAkgYQAegTAcgEQAXgDAWAQQAWAPALAWQARAiACATQAGAigdANQgbANgdgdIgWggQgeAKgeAxIgSAiQBmA/ACCPIgBACQAOAGAKAHQAMAKgDAJQgCAJgPACQgJABgLgBIAEAEIADAFQAGAKgEAGQgDAIgSgDQgNgBgPgHQgQAOgbANQg+AghMAAQhLAAg/ggg");
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
            this.shape_3.graphics.f("#FFFFFF").s().p("AiKEBQgbgNgPgOQgPAHgNABQgSADgEgIQgDgGAFgKIAEgFIADgEQgKABgJgBQgPgCgCgJQgBgDABgDQgHgGgFgIQgHgMABgOQAGiIBThIIgFgHQg1Azg2gdQg/gbALhJQADgZAVgrIAAAAQARgiAggWIgBABQAogdApAHQAnAEApAaIAAABQAvAfAXAvQANAYAKAaQAMgCAMAAQAMAAANACQAKgaAMgYQAYgvAvgfIAAgBQApgaAmgEQApgHAoAdIAAgBQAfAWARAiIABAAQAVArADAZQAKBJg+AbQg2Adg1gzIgFAHQBTBIAGCIQAAAOgGAMQgFAIgHAGIAAAGQgDAJgOACQgJABgLgBIAEAEIADAFQAGAKgEAGQgEAIgRgDQgNgBgPgHQgQAOgbANQg+AghMAAQhLAAg/ggg");
            this.shape_3.setTransform(31.2505,18.4646);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-4,-10.4,70.5,62.8);
        
        
        (lib.蛋 = function(mode,startPosition,loop,reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
            var props = new Object();
            props.mode = mode;
            props.startPosition = startPosition;
            props.labels = {};
            props.loop = loop;
            props.reversed = reversed;
            cjs.MovieClip.apply(this,[props]);
        
            // 头像
            this.instance = new lib.头("synched",0);
            this.instance.setTransform(57.55,-24.45,1,1,0,0,0,31.2,22.1);
        
            this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
        
            // 图层_4
            this.shape = new cjs.Shape();
            this.shape.graphics.f().s("#52888E").ss(3,1,1).p("AKLBDQAAC7ghB4QgkCEhcB6QhZB2iIA4Qh1AwiUAAQiTAAh1gwQiIg4hZh2Qhch6gkiEQghh4AAi7QAAixA1ilQA0ilBgh/QBmiHBnhFQB1hOB/AAQCAAAB1BOQBnBFBmCHQBgB/A0ClQA1ClAACxg");
            this.shape.setTransform(57.5,-34.05);
        
            this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        
            // 图层_6
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgTEdQgmhggEhbQgEhkAKhBQALhMAcACQAeADgCBUQgECGAJA1IAnChQAQBJgYAGIgEABQgcAAgjhZgAgDjfQgQgEgGgZQgFgZAIgfQAIgfARgTQARgSAQAEQAQAEAFAZQAGAZgIAfQgJAfgRATQgOAPgNAAIgFgBg");
            this.shape_1.setTransform(7.7519,-26.3834);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));
        
            // 图层_5
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#71BBC8").s().p("Am5LdIgggOIAGAAQBzgCBRgXQDqhFDKlHQDEk8hxnKQgriqg+iGQBBA6BBBXQA2BJApBUQAfBAAWBGQANAqAKApIAeECIAAADIgSDvQgHAjgIAgQgYBXgxBUQgYApgfApQhZB3iIA3Qh1AxiTgBQiTABh2gxg");
            this.shape_2.setTransform(75.2,-26.9);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#B0DBE5").s().p("AnaKRQhch6gkiDQghh4AAi7QAAixA1ilQA0ilBgh/QBmiHBnhFQB1hOB/AAQCAAAB0BOQBoBFBmCHQBfB/A1ClQANAqAKAsQgKgqgNgpQgXhHgeg/QgphVg2hJQhBhWhCg7QA/CGAqCqQByHKjEE8QjLFHjqBFQhRAYhyABQh3g4hQhrg");
            this.shape_3.setTransform(56.0375,-37.025);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-9,-120.5,133.1,173);
        
        
        // stage content:
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
        
            // 光环顶
            this.instance = new lib.补间2("synched",0);
            this.instance.setTransform(200,348.5);
        
            this.instance_1 = new lib.补间3("synched",0);
            this.instance_1.setTransform(200,348.5);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},59).to({state:[{t:this.instance_1}]},60).wait(1));
            this.timeline.addTween(cjs.Tween.get(this.instance).to({y:326.5},59).to({_off:true,y:348.5},60).wait(1));
        
            // 蛋
            this.instance_2 = new lib.蛋("synched",0);
            this.instance_2.setTransform(200,331.95,1,1,0,0,0,57.5,-34);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:321.45},59).to({y:331.95},60).wait(1));
        
            // 光环_底
            this.instance_3 = new lib.补间4("synched",0);
            this.instance_3.setTransform(200,345.4);
        
            this.instance_4 = new lib.补间5("synched",0);
            this.instance_4.setTransform(200,345.4);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_3}]},59).to({state:[{t:this.instance_4}]},60).wait(1));
            this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:323.4},59).to({_off:true,y:345.4},60).wait(1));
        
            // 影子
            this.instance_5 = new lib.补间6("synched",0);
            this.instance_5.setTransform(200,445.4);
        
            this.instance_6 = new lib.补间7("synched",0);
            this.instance_6.setTransform(200,445.4);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_5}]},59).to({state:[{t:this.instance_6}]},60).wait(1));
            this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.8575,scaleY:0.8575},59).to({_off:true,scaleX:1,scaleY:1},60).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new lib.AnMovieClip();
        p.nominalBounds = new cjs.Rectangle(295,484.9,10.100000000000023,-33);
        // library properties:
        lib.properties = {
            id: 'AA504AE6CDFB074B8B319F65E468829A',
            width: 400,
            height: 500,
            fps: 30,
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
        an.compositions['AA504AE6CDFB074B8B319F65E468829A'] = {
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
