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
    
    (lib.补间16 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#F7BCC8").ss(3,1,1).p("AhUgIQAKgaASgKQAVgMAmADQAtAEATAMQAXAPgCAeQgCAggZAKQgVAHgxgEQgtgEgUgQQgUgQAKgZg");
            this.shape.setTransform(0.0413,-0.02);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FFFFFF").s().p("AgJA1QgtgEgUgQQgUgQAKgZQAKgaASgKQAVgMAmADQAtAEATAMQAXAPgCAeQgCAggZAKQgOAFgaAAIgegCg");
            this.shape_1.setTransform(0.0413,-0.02);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-10.3,-7,20.700000000000003,14);
        
        
        (lib.补间15 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#F7BCC8").ss(3,1,1).p("AhUgIQAKgaASgKQAVgMAmADQAtAEATAMQAXAPgCAeQgCAggZAKQgVAHgxgEQgtgEgUgQQgUgQAKgZg");
            this.shape.setTransform(0.0413,-0.02);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FFFFFF").s().p("AgJA1QgtgEgUgQQgUgQAKgZQAKgaASgKQAVgMAmADQAtAEATAMQAXAPgCAeQgCAggZAKQgOAFgaAAIgegCg");
            this.shape_1.setTransform(0.0413,-0.02);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-10.3,-7,20.700000000000003,14);
        
        
        (lib.补间14 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#B2F0F9").ss(3,1,1).p("ABRh+QATAJARAOQANALAKAMQAZAgAAAoQAAA4gwAnQgwAohFAAQhEAAgwgoQgwgnAAg4QAAgoAZggQAJgMAOgLQAPgMARgJABIheQAHAFAHAFQAMAKAJALQAPAWAAAbQAAAogkAdQgkAdgyAAQgyAAgkgdQgkgdAAgoQAAgbAQgWQAIgLAMgKQAGgEAGgE");
            this.shape.setTransform(0.025,12.85);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f().s("#B2F0F9").ss(4,1,1).p("AiLCFQgKgGgJgHQhBgxAAhHQAAhFBBgyQBCgyBcAAQBdAABBAyQBCAyAABFQAABHhCAxQgJAHgJAGABRBaQAAAQgIANQgHAJgJAHQgYATgiAAQgiAAgZgTQgJgHgFgHQgKgOAAgRQAAAAAAgBQAAgZAYgTQAZgSAiAAQAiAAAYASQAXASABAYQAAACAAABgABrCWQgxAUg6AAQg6AAgwgU");
            this.shape_1.setTransform(0,-8.525);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#D3F4F9").s().p("Ah0B1QgwgnAAg4QAAgnAZggQAJgNAOgLQAPgMARgIIAAABQAAARAKANQAFAIAJAHQAZASAiAAQAhAAAZgSQAJgIAGgIQAJgNAAgQQAAAQgJANQgGAIgJAIQgZASghAAQgiAAgZgSQgJgHgFgIQgKgNAAgRIAAgBQAAgaAYgSQAZgTAiAAQAhAAAZATQAXARABAZQATAJARANQANALAKAMQAZAgAAAoQAAA4gwAnQgwAohFAAQhEAAgwgogAhqggQgQAVAAAaQAAApAkAdQAkAdAyAAQAyAAAkgdQAkgdAAgpQAAgagPgVQgxAUg6AAQg6AAgwgUQAIgLAMgKIAMgJIgMAJQgMAKgIALIAAAAgABWg1QAMAKAJALQgJgLgMgKIgOgKIAOAKgAAOh7QgFAAgDAEQgDADgBAIQAAAKABADQACAFAFADQAEAEAEACIAMACQAOAAAFgEQAIgFAAgJQAAgIgIgGIgKgEQgLgDgLgHQABAAAAABQAAAAgBAAQAAABgBAAQgBAAgBAAgABRhcIAAgDIAAADg");
            this.shape_2.setTransform(0.025,9.825);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#EBFCFF").s().p("AhGBgQgFgCgEgEQgEgDgCgFQgBgDAAgKQABgIACgDQADgEAGAAQABAAABAAQABAAAAgBQAAAAAAAAQAAgBAAAAQALAHAKADIALAEQAHAGAAAIQAAAJgHAFQgGAEgOAAIgLgCgAA1A6IgHgLIgHgLQgCgFACgLQAFgRAMgDIAEgBQAGAAAKAJQAMAMgBAIIgEAKIgBAKQgBAIgJAEQgEADgEAAQgGAAgFgFgAAcgYQgPgBgIgGIgKgNQgJgLgOgKQgMgJgBgFQgBgGAFgGQAGgFAHgBQAGAAALABIAJgBQAGAAAEABQAGABAJAIIAQAJQAJAGAJATQAGANgDAFQgDAGgJADQgLACgKAAIgDAAg");
            this.shape_3.setTransform(8.9583,-7.9833);
        
            this.shape_4 = new cjs.Shape();
            this.shape_4.graphics.f("#D3F9F2").s().p("AidCLQhCgyAAhGQAAhGBCgyQBBgyBcAAQBdAABBAyQBCAyAABGQAABGhCAyIgSAMQgJgMgOgLQgRgNgTgJQgBgZgXgRQgZgTghAAQgiAAgZATQgXASgBAaQgRAIgPAMQgOALgIANIgTgNgACSAXQgMAEgGARQgBALACAFIAGALIAIALQAIAIALgGQAIgEACgIIABgKIAEgKQABgIgMgMQgKgKgGAAIgEABgABBhJQgIABgFAFQgFAGABAGQABAFAMAJQAOAKAIALIAMANQAIAGAPABQALAAANgCQAJgDACgGQADgFgFgNQgJgTgJgGIgQgJQgKgIgFgBQgEgBgGAAIgLABIgNgBIgDAAg");
            this.shape_4.setTransform(0,-10.375);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-24.4,-27.5,48.8,54.5);
        
        
        (lib.补间13 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#B2F0F9").ss(3,1,1).p("ABRh+QATAJARAOQANALAKAMQAZAgAAAoQAAA4gwAnQgwAohFAAQhEAAgwgoQgwgnAAg4QAAgoAZggQAJgMAOgLQAPgMARgJABIheQAHAFAHAFQAMAKAJALQAPAWAAAbQAAAogkAdQgkAdgyAAQgyAAgkgdQgkgdAAgoQAAgbAQgWQAIgLAMgKQAGgEAGgE");
            this.shape.setTransform(0.025,12.85);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f().s("#B2F0F9").ss(4,1,1).p("AiLCFQgKgGgJgHQhBgxAAhHQAAhFBBgyQBCgyBcAAQBdAABBAyQBCAyAABFQAABHhCAxQgJAHgJAGABRBaQAAAQgIANQgHAJgJAHQgYATgiAAQgiAAgZgTQgJgHgFgHQgKgOAAgRQAAAAAAgBQAAgZAYgTQAZgSAiAAQAiAAAYASQAXASABAYQAAACAAABgABrCWQgxAUg6AAQg6AAgwgU");
            this.shape_1.setTransform(0,-8.525);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#D3F4F9").s().p("Ah0B1QgwgnAAg4QAAgnAZggQAJgNAOgLQAPgMARgIIAAABQAAARAKANQAFAIAJAHQAZASAiAAQAhAAAZgSQAJgIAGgIQAJgNAAgQQAAAQgJANQgGAIgJAIQgZASghAAQgiAAgZgSQgJgHgFgIQgKgNAAgRIAAgBQAAgaAYgSQAZgTAiAAQAhAAAZATQAXARABAZQATAJARANQANALAKAMQAZAgAAAoQAAA4gwAnQgwAohFAAQhEAAgwgogAhqggQgQAVAAAaQAAApAkAdQAkAdAyAAQAyAAAkgdQAkgdAAgpQAAgagPgVQgxAUg6AAQg6AAgwgUQAIgLAMgKIAMgJIgMAJQgMAKgIALIAAAAgABWg1QAMAKAJALQgJgLgMgKIgOgKIAOAKgAAOh7QgFAAgDAEQgDADgBAIQAAAKABADQACAFAFADQAEAEAEACIAMACQAOAAAFgEQAIgFAAgJQAAgIgIgGIgKgEQgLgDgLgHQABAAAAABQAAAAgBAAQAAABgBAAQgBAAgBAAgABRhcIAAgDIAAADg");
            this.shape_2.setTransform(0.025,9.825);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#EBFCFF").s().p("AhGBgQgFgCgEgEQgEgDgCgFQgBgDAAgKQABgIACgDQADgEAGAAQABAAABAAQABAAAAgBQAAAAAAAAQAAgBAAAAQALAHAKADIALAEQAHAGAAAIQAAAJgHAFQgGAEgOAAIgLgCgAA1A6IgHgLIgHgLQgCgFACgLQAFgRAMgDIAEgBQAGAAAKAJQAMAMgBAIIgEAKIgBAKQgBAIgJAEQgEADgEAAQgGAAgFgFgAAcgYQgPgBgIgGIgKgNQgJgLgOgKQgMgJgBgFQgBgGAFgGQAGgFAHgBQAGAAALABIAJgBQAGAAAEABQAGABAJAIIAQAJQAJAGAJATQAGANgDAFQgDAGgJADQgLACgKAAIgDAAg");
            this.shape_3.setTransform(8.9583,-7.9833);
        
            this.shape_4 = new cjs.Shape();
            this.shape_4.graphics.f("#D3F9F2").s().p("AidCLQhCgyAAhGQAAhGBCgyQBBgyBcAAQBdAABBAyQBCAyAABGQAABGhCAyIgSAMQgJgMgOgLQgRgNgTgJQgBgZgXgRQgZgTghAAQgiAAgZATQgXASgBAaQgRAIgPAMQgOALgIANIgTgNgACSAXQgMAEgGARQgBALACAFIAGALIAIALQAIAIALgGQAIgEACgIIABgKIAEgKQABgIgMgMQgKgKgGAAIgEABgABBhJQgIABgFAFQgFAGABAGQABAFAMAJQAOAKAIALIAMANQAIAGAPABQALAAANgCQAJgDACgGQADgFgFgNQgJgTgJgGIgQgJQgKgIgFgBQgEgBgGAAIgLABIgNgBIgDAAg");
            this.shape_4.setTransform(0,-10.375);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-24.4,-27.5,48.8,54.5);
        
        
        (lib.补间12 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjlIcIgniFQgpiTgMhGQgbilAbiNQAnjMCUiCQBnhbCKgcQCagfA5BWQAmA6gtA/QglA0gxARQhRAdhOBIQhbBWgqBsQgZBCAICHQAFBNAaC1QAIA4gHA0IgIApg");
            this.shape.setTransform(0.0011,-0.0089);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FFFFFF").s().p("AjlIcIgniFQgpiTgMhGQgbilAbiNQAnjMCUiCQBnhbCKgcQCagfA5BWQAmA6gtA/QglA0gxARQhRAdhOBIQhbBWgqBsQgZBCAICHQAFBNAaC1QAIA4gHA0IgIApg");
            this.shape_1.setTransform(0.0011,-0.0089);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-35.5,-59.8,71.1,119.69999999999999);
        
        
        (lib.补间11 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjlIcIgniFQgpiTgMhGQgbilAbiNQAnjMCUiCQBnhbCKgcQCagfA5BWQAmA6gtA/QglA0gxARQhRAdhOBIQhbBWgqBsQgZBCAICHQAFBNAaC1QAIA4gHA0IgIApg");
            this.shape.setTransform(0.0011,-0.0089);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FFFFFF").s().p("AjlIcIgniFQgpiTgMhGQgbilAbiNQAnjMCUiCQBnhbCKgcQCagfA5BWQAmA6gtA/QglA0gxARQhRAdhOBIQhbBWgqBsQgZBCAICHQAFBNAaC1QAIA4gHA0IgIApg");
            this.shape_1.setTransform(0.0011,-0.0089);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-35.5,-59.8,71.1,119.69999999999999);
        
        
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
        
            // 图层_10
            this.instance = new lib.补间13("synched",0);
            this.instance.setTransform(21.3,-11.35);
        
            this.instance_1 = new lib.补间14("synched",0);
            this.instance_1.setTransform(21.3,-10.35,0.8817,0.8817);
            this.instance_1._off = true;
        
            this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:0.8817,scaleY:0.8817,y:-10.35},22).wait(108));
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},22).to({scaleX:1,scaleY:1,y:-11.35},22).to({scaleX:0.8973,scaleY:0.8973,y:-9.35},26).to({scaleX:1,scaleY:1,y:-11.35},26).to({scaleX:0.8973,scaleY:0.8973,y:-9.85},15).to({scaleX:1,scaleY:1,y:-11.35},18).wait(1));
        
            // eyes
            this.shape = new cjs.Shape();
            this.shape.graphics.f("#A27C84").s().p("AAHgvQBbgaApAGIAaAFQAMAEACALQADAOgJAHQgJAJgVAAIg4ABQgoACgvALQgtAJhIAhIg+AeQA7hPB/glg");
            this.shape.setTransform(57.1466,-49.214,1,1,0,0,180);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#A27C84").s().p("AAHgvQBbgaApAGIAaAFQAMAEACALQADAOgJAHQgJAJgVAAIg4ABQgoACgvALQgtAJhIAhIg+AeQA7hPB/glg");
            this.shape_1.setTransform(-15.9466,-49.214);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(130));
        
            // 蝴蝶结
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f().s("#FFCC66").ss(3,1,1).p("ABVAAQAAAXgLATQgGAKgIAIQgZAZgjAAQgJAAgJgCQgXgFgSgSQgZgZAAgjQAAgXAMgTQAFgJAIgIQAZgZAiAAQAMAAAKADQAVAFARARQAZAZAAAig");
            this.shape_2.setTransform(-11.7,-90.75);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f().s("#F577B4").ss(4,1,1).p("AFhhFQARgcgVgTQgrgnhAA7IgagbQgggVgdAZQgfAbADAYQADAQAWATQAOANApAbIAmAaIAZgUQAYgSAOgOQACAHAFAHQAIAKAXAcIAWAYIAUgJQAYgKAMgHQAdgRAHgHQATgQgMgRQgXgjg2AdIgOgYQgKgMgNgBQgJAAgKAFQgbANgCARQgBAHAEAIAkHhcIAVgcQADgDACgDQAMgRAIgEQAHgFANADQAMACAUAdQATAcAJAYQAOApACAHQAIAagEAIIAAABQgKARhOgCAk6BbQgRAmgGAHQgIALgDACQgDADgNgCQgPgDgdgbQgdgcgKgWQgKgXgIgeQgIgdADgHQAAgBAAgPQAAgJAKgCQANgDAeAAIAFAAQAPAAAPAB");
            this.shape_3.setTransform(17.4657,-90.2878);
        
            this.shape_4 = new cjs.Shape();
            this.shape_4.graphics.f("#FFFF66").s().p("AgSBTQgXgFgSgSQgZgZAAgjQAAgXAMgTQAFgJAIgIQAZgZAiAAQAMAAAKADQAVAFARARQAZAZAAAiQAAAXgLATQgGAKgIAIQgZAZgjAAQgJAAgJgCg");
            this.shape_4.setTransform(-11.7,-90.75);
        
            this.shape_5 = new cjs.Shape();
            this.shape_5.graphics.f("#F7A0CA").s().p("AlsCWQgPgDgdgbQgdgcgKgWQgKgXgIgeQgIgdADgHIAAgQQAAgJAKgCQANgDAeAAIAFAAIAeABIASABQgMATAAAYQAAAiAZAZQASASAYAFIgFANQgRAmgGAHIgLANQgBACgFAAIgKgBgAFaAhQgXgcgIgKQgFgHgCgHQgOAOgYASIgZAUIgmgaQgpgbgOgNQgWgTgDgQQgDgYAfgbQAdgZAgAVIAaAbQBAg7ArAnQAVATgRAcIgBAAIgBAAIAAAAIgBAAQgGAAgHADIgDACIAAAAIAAAAQgbANgCARIAAADQAAAFADAHQgDgHAAgFIAAgDQACgRAbgNIAAAAIAAAAIADgCQAHgDAGAAIABAAIAAAAIABAAIABAAQANABAKAMIAOAYQA2gdAXAjQAMARgTAQQgHAHgdARQgMAHgYAKIgUAJgAjZAmQALgTAAgXQAAgjgZgZQgQgQgVgGIAFgGIAVgcIAFgGQAMgRAIgEQAHgFANADQAMACAUAdQATAcAJAYIAQAwQAIAagEAIIAAABQgJAPg8AAIgBAAIAAAAIgHAAIgGAAIgFAAIAFAAIAGAAIAHAAIAAAAIABAAQA8AAAJgPQgFAJgNAHQgMAHgKAAQgiAAgagCgAh1ARIAAAAg");
            this.shape_5.setTransform(17.4657,-90.2878);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(130));
        
            // 图层_5
            this.shape_6 = new cjs.Shape();
            this.shape_6.graphics.f().s("#F7BCC8").ss(4,1,1).p("AI+h7QBTAsAVASQASARAEARQADAOgFASQgFARgVAHQgUAHgVgIIhZgiQAWAiAOAbQAKAVgBANQgBANgPANQgNALgZgCQgWgDgHgGQgFgGhXhDAo9h7QhTAsgVASQgSARgEARQgDAOAFASQAFARAVAHQAUAHAVgIIBZgiQgWAigOAbQgKAVABANQABANAPANQANALAZgCQAWgDAHgGQAFgGBXhD");
            this.shape_6.setTransform(19.175,-4.7277);
        
            this.shape_7 = new cjs.Shape();
            this.shape_7.graphics.f("#FFFFFF").s().p("AIVCoQgWgDgHgGQgFgGhXhDIgpANIh+gDIFWkHIgNBYQBTAsAVASQASARAEAQQADAOgFATQgFARgVAHQgUAHgVgIIhZgjQAWAjAOAbQAKAVgBANQgBANgPANQgLAJgTAAIgIAAgAI4gpIANgFIgJgWgAo6CfQgPgNgBgNQgBgNAKgVQAOgbAWgjIhZAjQgVAIgUgHQgVgHgFgRQgFgTADgOQAEgQASgRQAVgSBTgsIgNhYIFWEHIh+ADIgpgNQhXBDgFAGQgHAGgWADIgIAAQgTAAgLgJgApEguIANAFIgEgbIgJAWg");
            this.shape_7.setTransform(19.175,-9.1027);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(130));
        
            // 图层_4
            this.shape_8 = new cjs.Shape();
            this.shape_8.graphics.f().s("#FFFFFF").ss(4,1,1).p("Ag5gUQAVAGAVAHQAlALAkAR");
            this.shape_8.setTransform(48.825,-90.3375);
        
            this.shape_9 = new cjs.Shape();
            this.shape_9.graphics.f().s("#F7BCC8").ss(4,1,1).p("AFanjQBRAlBGA3QDPCiAADlQAADmjPCiQjNCikkAAQkjAAjOiiQjOiiAAjmQAAjlDOiiQDOiiEjAAQB6AABrAd");
            this.shape_9.setTransform(20.05,-39.9);
        
            this.shape_10 = new cjs.Shape();
            this.shape_10.graphics.f("#FFFFFF").s().p("AnxGIQjNiigBjmQABjkDNiiQDOiiEjAAQB6AABsAcIAqAMQAmANAkAQQBRAlBHA4QDNCiAADkQAADmjNCiQjPCikjAAQkjAAjOiig");
            this.shape_10.setTransform(20.05,-39.9);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(130));
        
            // 右耳
            this.shape_11 = new cjs.Shape();
            this.shape_11.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjlIcIgniFQgpiTgMhGQgbilAbiNQAnjMCUiCQBnhbCKgcQCagfA5BWQAmA6gtA/QglA0gxARQhRAdhOBIQhbBWgqBsQgZBCAICHQAFBNAaC1QAIA4gHA0IgIApg");
            this.shape_11.setTransform(63.1011,-141.9089);
        
            this.shape_12 = new cjs.Shape();
            this.shape_12.graphics.f("#FFFFFF").s().p("AjlIcIgniFQgpiTgMhGQgbilAbiNQAnjMCUiCQBnhbCKgcQCagfA5BWQAmA6gtA/QglA0gxARQhRAdhOBIQhbBWgqBsQgZBCAICHQAFBNAaC1QAIA4gHA0IgIApg");
            this.shape_12.setTransform(63.1011,-141.9089);
        
            this.shape_13 = new cjs.Shape();
            this.shape_13.graphics.f().s("#F7BCC8").ss(4,1,1).p("Ak6h7QAeiiBjhzQAZgdAegaQAhgdAlgWQBOgwBdgPQA5gIAjAFQAjAEAbAPQAgASASAfQAZA0gWAsQgGAMgJAMQglAygwAUQgUAIgVALQg5Ahg2A1QgzAygfA3QgaArgQAwQgQAwABBRQAAAhADAlQADAkAGAuQAHA4AJBNQACATADAVQADAdAAAZQgBAagHAUQgBADgBACQgEAPgFAOQgUgFgTgGQgpgLgpgLQgUgHgVgHQgPgygPgyQgBgEgBgEQgEgMgEgLQgkh+gOhFQgCgLgCgKQgdijAbiMg");
            this.shape_13.setTransform(61.782,-142.0962);
        
            this.shape_14 = new cjs.Shape();
            this.shape_14.graphics.f("#FFFFFF").s().p("AhfI0IhSgWIgpgOIgehkIgCgIIgIgXQgkh+gOhFIgEgVQgdijAbiMIAAgBQAeiiBjhzQAZgdAegaQAhgdAlgWQBOgwBdgPQA5gIAjAFQAjAEAbAPQAgASASAfQAZA0gWAsQgGAMgJAMQglAygwAUQgUAIgVALQg5Ahg2A1QgzAygfA3QgaArgQAwQgQAwABBRQAAAhADAlQADAkAGAuIAQCFIAFAoQADAdAAAZQgBAagHAUIgCAFIgJAdIgngLg");
            this.shape_14.setTransform(61.782,-142.0962);
        
            this.shape_15 = new cjs.Shape();
            this.shape_15.graphics.f().s("#F7BCC8").ss(4,1,1).p("Ak0iAQAeiiBhhyQAZgdAegaQAggcAlgVQBPgwBdgMQA4gGAiAHQAhAGAbASQAeATAQAfQAWA1gXAqQgHAMgJAMQglAxguAWQgUAJgTAMQg5AjgzA1QgwAzgdA4QgXArgNAvQgOAzACBPQABAhADAkQAFAmAFAqQAHA4AIBMQACAUACATQACAegBAYQgBAYgMAPQgBACgBACQgFALgGALQgUgFgSgHQgngNgogMQgTgJgTgIQgPgygQgxQgBgEgBgEQgEgMgDgMQgmh7gPhGQgCgLgBgJQgeijAaiKg");
            this.shape_15.setTransform(60.5408,-142.3583);
        
            this.shape_16 = new cjs.Shape();
            this.shape_16.graphics.f("#FFFFFF").s().p("AhbIwIhPgZIgmgRIgfhjIgCgIIgHgYQgmh7gPhGIgDgUQgeijAaiKIAAgBQAeiiBhhyQAZgdAegaQAggcAlgVQBPgwBdgMQA4gGAiAHQAhAGAbASQAeATAQAfQAWA1gXAqQgHAMgJAMQglAxguAWQgUAJgTAMQg5AjgzA1QgwAzgdA4QgXArgNAvQgOAzACBPIAEBFIAKBQQAHA4AIBMIAEAnQACAegBAYQgBAYgMAPIgCAEIgLAWIgmgMg");
            this.shape_16.setTransform(60.5408,-142.3583);
        
            this.shape_17 = new cjs.Shape();
            this.shape_17.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkviGQAdihBghxQAZgdAegaQAggbAmgVQBQgvBagJQA4gEAhAKQAfAHAbAUQAdAUAOAgQASA0gYAqQgHAMgJALQgmAwgsAYQgTAKgTANQg2AmgwA0QgvA2gZA3QgVArgMAwQgLA0ADBNQACAiAEAiQAFAqAFAlQAIA3AGBMQABATACAUQACAegCAWQgCAXgQAJQgBABgBACQgHAIgHAJQgTgHgSgHQgmgPgngOQgRgKgRgKQgPgygQgwQgBgEgBgEQgEgMgEgLQgmh6gPhGQgCgLgCgJQgfiiAZiJg");
            this.shape_17.setTransform(59.3027,-142.6071);
        
            this.shape_18 = new cjs.Shape();
            this.shape_18.graphics.f("#FFFFFF").s().p("AhYIsIhNgdIgigUIgfhiIgCgIIgIgXQgmh6gPhGIgEgUQgfiiAZiJIAAgBQAdihBghxQAZgdAegaQAggbAmgVQBQgvBagJQA4gEAhAKQAfAHAbAUQAdAUAOAgQASA0gYAqQgHAMgJALQgmAwgsAYQgTAKgTANQg2AmgwA0QgvA2gZA3QgVArgMAwQgLA0ADBNIAGBEIAKBPQAIA3AGBMIADAnQACAegCAWQgCAXgQAJIgCADIgOARIglgOg");
            this.shape_18.setTransform(59.3027,-142.6071);
        
            this.shape_19 = new cjs.Shape();
            this.shape_19.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkpiLQAdihBehwQAYgdAegZQAhgbAlgVQBRguBagGQA3gCAgAMQAdAJAbAXQAcAVAMAhQAOA0gZAoQgHAMgKALQgmAugqAbQgTALgRANQg2ApgsA0QgtA3gXA4QgSArgJAxQgKA0AFBMQADAiAEAgQAHAuAEAgQAIA3AFBLQABAUABASQABAggCAUQgDAVgUADQgBABgCABQgIAGgIAFQgSgHgSgIQglgQglgQQgQgMgPgMQgPgxgQgwQgBgEgCgEQgEgLgDgMQgnh4gQhGQgDgKgCgKQggifAZiKg");
            this.shape_19.setTransform(58.0849,-142.9333);
        
            this.shape_20 = new cjs.Shape();
            this.shape_20.graphics.f("#FFFFFF").s().p("AhUIoIhKggIgfgYQgPgxgQgwIgDgIIgHgXQgnh4gQhGIgFgUQggifAZiKIAAAAQAdihBehwQAYgdAegZQAhgbAlgVQBRguBagGQA3gCAgAMQAdAJAbAXQAcAVAMAhQAOA0gZAoQgHAMgKALQgmAugqAbQgTALgRANQg2ApgsA0QgtA3gXA4QgSArgJAxQgKA0AFBMIAHBCIALBOQAIA3AFBLIACAmQABAggCAUQgDAVgUADIgDACIgQALIgkgPg");
            this.shape_20.setTransform(58.0849,-142.9333);
        
            this.shape_21 = new cjs.Shape();
            this.shape_21.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkkiQQAdihBchuQAZgdAdgZQAggaAmgVQBSguBYgCQA3AAAgAPQAbAKAaAZQAaAXAKAgQALA0gZAoQgIALgKALQgmAugpAcQgSANgRANQg0AsgpA0QgrA4gTA4QgQAqgIAzQgHA1AGBKQAEAiAEAgQAIAwAEAcQAIA2ADBLQABATAAASQABAggEAUQgCASgYgCQgCAAgBABQgKADgJACQgSgIgRgJQgjgSglgRQgNgNgOgOQgPgxgQgvQgCgEgBgEQgEgLgEgLQgnh3gRhGQgCgKgCgJQgiifAYiIg");
            this.shape_21.setTransform(56.8672,-143.275);
        
            this.shape_22 = new cjs.Shape();
            this.shape_22.graphics.f("#FFFFFF").s().p("AhRIkQgjgSglgRIgbgbQgPgxgQgvIgDgIIgIgWQgnh3gRhGIgEgTQgiifAYiIIAAgBQAdihBchuQAZgdAdgZQAggaAmgVQBSguBYgCQA3AAAgAPQAbAKAaAZQAaAXAKAgQALA0gZAoIgSAWQgmAugpAcIgjAaQg0AsgpA0QgrA4gTA4QgQAqgIAzQgHA1AGBKIAIBCIAMBMQAIA2ADBLIABAlQABAggEAUQgCASgYgCIgDABIgTAFIgjgRg");
            this.shape_22.setTransform(56.8672,-143.275);
        
            this.shape_23 = new cjs.Shape();
            this.shape_23.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkeiWQAcihBbhtQAYgdAdgYQAggaAmgVQBTgtBXABQA2ACAgARQAZAMAZAbQAZAZAIAhQAIA0gaAmQgJALgKALQgnAsgnAfQgRAOgQAOQgzAugmA0QgoA6gSA4QgNAqgFAzQgFA2AHBJQAFAiAFAeQAIA0ADAXQAJA2ACBKQABAUAAARQgBAhgEASQgDAQgcgIQgCAAgCAAQgKABgKgBQgSgJgQgKQgigTgkgTQgLgPgMgPQgPgxgRguQgCgEgBgFQgEgLgEgLQgoh0gShGQgCgKgCgKQgjieAYiHg");
            this.shape_23.setTransform(55.6829,-143.4947);
        
            this.shape_24 = new cjs.Shape();
            this.shape_24.graphics.f("#FFFFFF").s().p("AgTIyIgEAAQgKABgKgBQgSgJgQgKQgigTgkgTIgXgeQgPgxgRguIgDgJIgIgWQgoh0gShGIgEgUQgjieAYiHIAAAAQAcihBbhtQAYgdAdgYQAggaAmgVQBTgtBXABQA2ACAgARQAZAMAZAbQAZAZAIAhQAIA0gaAmIgTAWQgnAsgnAfIghAcQgzAugmA0QgoA6gSA4QgNAqgFAzQgFA2AHBJIAKBAQAIA0ADAXQAJA2ACBKIABAlQgBAhgEASQgCALgNAAQgHAAgJgDg");
            this.shape_24.setTransform(55.6829,-143.4947);
        
            this.shape_25 = new cjs.Shape();
            this.shape_25.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkaigQAcigBahsQAXgdAegYQAggaAmgUQBUgsBVAEQA2AEAfAUQAXANAZAeQAYAaAGAhQAEAzgbAmQgKALgKALQgnAqglAiQgRAOgPAPQgxAxgjA0QgnA7gOA4QgLArgDAzQgCA3AIBHQAFAjAFAcQAKA3ADATQAJA2ABBJQAAATAAARQgCAigEAQQgFAPgfgOQgCAAgCgBQgMgCgMgEQgQgKgRgKQgggVgjgVQgJgRgKgQQgPgwgRguQgCgEgCgFQgEgKgEgLQgphzgShHQgCgJgDgKQgjidAWiGg");
            this.shape_25.setTransform(54.5144,-143.3093);
        
            this.shape_26 = new cjs.Shape();
            this.shape_26.graphics.f("#FFFFFF").s().p("AgOIyIgEgBIgYgGIghgUIhDgqIgTghQgPgwgRguIgEgJIgIgVQgphzgShHIgFgTQgjidAWiGQAcigBahsQAXgdAegYQAggaAmgUQBUgsBVAEQA2AEAfAUQAXANAZAeQAYAaAGAhQAEAzgbAmIgUAWQgnAqglAiQgRAOgPAPQgxAxgjA0QgnA7gOA4QgLArgDAzQgCA3AIBHIAKA/IANBKQAJA2ABBJIAAAkQgCAigEAQQgDAIgKAAQgJAAgOgHg");
            this.shape_26.setTransform(54.5144,-143.3093);
        
            this.shape_27 = new cjs.Shape();
            this.shape_27.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkViqQAbigBYhrQAYgdAdgYQAggZAngTQBVgsBUAHQA1AGAeAWQAVAPAZAgQAWAcAEAhQABA0gcAkQgKALgLALQgnApgkAkQgPAPgOAPQgwA0ggA0QglA9gMA3QgIArAAA1QgBA4AJBFQAHAjAFAbQAMA6ACAOQAKA1gBBJQgBAUAAAQQgCAigGAPQgFANgkgTQgCgBgCgBQgNgGgNgGQgQgLgQgLQgfgXghgWQgIgSgJgTQgPgwgRgtQgCgEgCgEQgEgLgDgLQgqhxgThGQgDgKgCgJQglicAWiFg");
            this.shape_27.setTransform(53.3666,-143.1219);
        
            this.shape_28 = new cjs.Shape();
            this.shape_28.graphics.f("#FFFFFF").s().p("AgKIyIgEgCIgagMIgggWQgfgXghgWIgRglQgPgwgRgtIgEgIIgHgWQgqhxgThGIgFgTQglicAWiFIAAAAQAbigBYhrQAYgdAdgYQAggZAngTQBVgsBUAHQA1AGAeAWQAVAPAZAgQAWAcAEAhQABA0gcAkIgVAWIhLBNIgdAeQgwA0ggA0QglA9gMA3QgIArAAA1QgBA4AJBFIAMA+IAOBIQAKA1gBBJIgBAkQgCAigGAPQgCAFgHAAQgLAAgVgLg");
            this.shape_28.setTransform(53.3666,-143.1219);
        
            this.shape_29 = new cjs.Shape();
            this.shape_29.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkQi0QAbigBWhqQAvg6BMgmQBdgvBaAQQAmAHAeAYQATARAYAiQAZAigCAoQgCAogdAkQhGBDg1BAQhnB6gQBlQgNBbAVCCQAZB3ADANQAKA1gDBIQgCBBgIATQgHAMgsgdQgegSgdgXQgegZgggXQgUhFgZg/QgCgEgCgFQgxh+gVhNQgtimAXiLg");
            this.shape_29.setTransform(52.2445,-142.9004);
        
            this.shape_30 = new cjs.Shape();
            this.shape_30.graphics.f("#FFFFFF").s().p("AgKIuQgegSgdgXQgegZgggXQgUhFgZg/IgEgJQgxh+gVhNQgtimAXiLQAbigBWhqQAvg6BMgmQBdgvBaAQQAmAHAeAYQATAQAYAjQAZAigCAoQgCAogdAkQhGBDg1BAQhnB6gQBlQgNBbAVCCIAcCEQAKA1gDBIQgCBBgIATQgCADgGAAQgMAAgfgUg");
            this.shape_30.setTransform(52.2445,-142.9004);
        
            this.shape_31 = new cjs.Shape();
            this.shape_31.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkLi7QAYiSBMhoQA+hNBLgkQAWgKAWgHQBHgVBCARQAmAJAaAZQASASAWAiQAGAIAEAKQAMAbgDAdQAAALgDAKQgIAdgVAaQgGAGgGAHQg+A+gtA8QgCACgCADQhMBhgTBbQgEARgCARQgJBVAQBxQABALACAMQATBbAIAfQABAIABADQAGAaACAeQAAAdgEAiQgFA7gLARQgIALgrgcQgNgIgLgKQgQgMgPgOQgNgMgOgLQgQgOgQgNQgUhGgag/QgCgEgCgFQgFgPgGgOQgphpgVhFQguinAWiMg");
            this.shape_31.setTransform(51.0632,-143.1429);
        
            this.shape_32 = new cjs.Shape();
            this.shape_32.graphics.f("#FFFFFF").s().p("AgGIvIgYgSQgQgMgPgOIgbgXIgggbQgUhGgag/IgEgJIgLgdQgphpgVhFQguinAWiMQAYiSBMhoQA+hNBLgkQAWgKAWgHQBHgVBCARQAmAJAaAZQASASAWAiQAGAIAEAKQAMAbgDAdQAAALgDAKQgIAdgVAaIgMANQg+A+gtA8IgEAFQhMBhgTBbQgEARgCARQgJBVAQBxIADAXQATBbAIAfIACALQAGAaACAeQAAAdgEAiQgFA7gLARQgCADgFAAQgNAAgfgUg");
            this.shape_32.setTransform(51.0632,-143.1429);
        
            this.shape_33 = new cjs.Shape();
            this.shape_33.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkGjAQAYiSBMhqQBAhQBKghQAXgKAVgFQBIgRA/AUQAkAMAZAaQAQASAVAjQAFAJADAJQALAbgEAeQgBALgDAJQgJAegUAaQgGAGgGAGQg9BBgqA9QgCACgCADQhGBggOBeQgDASgBARQgFBZAPBuQABAMACAMQASBZAJAhQACAIAAAEQAGAaAEAdQgDAbgHAeQgHA2gOAPQgJAJgrgbQgLgJgLgKQgPgNgOgOQgMgNgNgMQgPgOgQgOQgThGgahAQgCgEgCgEQgGgQgGgOQgqhogWhGQgxioAWiMg");
            this.shape_33.setTransform(49.9018,-143.4265);
        
            this.shape_34 = new cjs.Shape();
            this.shape_34.graphics.f("#FFFFFF").s().p("AgDIxIgWgTIgdgbIgZgZIgfgcQgThGgahAIgEgIIgMgeQgqhogWhGQgxioAWiMQAYiSBMhqQBAhQBKghQAXgKAVgFQBIgRA/AUQAkAMAZAaQAQASAVAjIAIASQALAbgEAeQgBALgDAJQgJAegUAaIgMAMQg9BBgqA9IgEAFQhGBggOBeIgEAjQgFBZAPBuIADAYQASBZAJAhIACAMQAGAaAEAdQgDAbgHAeQgHA2gOAPQgCACgFAAQgNAAgggUg");
            this.shape_34.setTransform(49.9018,-143.4265);
        
            this.shape_35 = new cjs.Shape();
            this.shape_35.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkBjFQAXiSBOhrQBBhSBJggQAWgJAXgEQBIgOA9AZQAiAOAXAbQAPAUASAiQAFAJADAKQAJAbgFAeQgBALgDAKQgKAdgUAaQgGAGgGAHQg9BBgmA/QgCADgCACQhABfgIBjQgCASgBASQgBBbAOBrQABAMACAMQARBYAKAkQACAIABAEQAHAaAEAdQgGAXgJAcQgKAwgQAMQgLAIgqgZQgKgKgKgKQgNgOgOgPQgLgNgMgNQgOgPgPgOQgThIgbg/QgCgEgCgFQgGgPgGgOQgshngXhIQgzioAViNg");
            this.shape_35.setTransform(48.7227,-143.7769);
        
            this.shape_36 = new cjs.Shape();
            this.shape_36.graphics.f("#FFFFFF").s().p("AABI0IgUgUIgbgdIgXgaIgdgdQgThIgbg/IgEgJIgMgdQgshngXhIQgzioAViNQAXiSBOhrQBBhSBJggQAWgJAXgEQBIgOA9AZQAiAOAXAbQAPAUASAiQAFAJADAKQAJAbgFAeQgBALgDAKQgKAdgUAaIgMANQg9BBgmA/IgEAFQhABfgIBjQgCASgBASQgBBbAOBrIADAYQARBYAKAkIADAMQAHAaAEAdIgPAzQgKAwgQAMQgCACgFAAQgOAAgggTg");
            this.shape_36.setTransform(48.7227,-143.7769);
        
            this.shape_37 = new cjs.Shape();
            this.shape_37.graphics.f().s("#F7BCC8").ss(4,1,1).p("Aj8jJQAXiSBPhuQBBhUBJgdQAWgJAXgDQBJgKA6AdQAgAQAVAcQAOAVAQAjQAFAJACAJQAIAcgGAfQgCAKgDAKQgLAdgTAaQgHAHgFAGQg9BDgiBAQgCADgCADQg6BcgCBpQgCASAAASQADBfANBoQABAMACAMQAQBWALAnQACAIABAEQAHAaAFAdQgIAUgLAYQgNAsgTAJQgMAGgqgXQgIgLgJgLQgNgOgMgPQgLgOgLgOQgNgQgOgPQgThIgbhAQgCgEgCgEQgGgPgHgPQgthmgYhIQg2iqAViMg");
            this.shape_37.setTransform(47.5745,-144.1422);
        
            this.shape_38 = new cjs.Shape();
            this.shape_38.graphics.f("#FFFFFF").s().p("AAEI3IgRgWIgZgdIgWgcIgbgfQgThIgbhAIgEgIIgNgeQgthmgYhIQg2iqAViMQAXiSBPhuQBBhUBJgdQAWgJAXgDQBJgKA6AdQAgAQAVAcQAOAVAQAjQAFAJACAJQAIAcgGAfIgFAUQgLAdgTAaIgMANQg9BDgiBAIgEAGQg6BcgCBpIgCAkQADBfANBoIADAYQAQBWALAnIADAMQAHAaAFAdIgTAsQgNAsgTAJIgGACQgPAAghgTg");
            this.shape_38.setTransform(47.5745,-144.1422);
        
            this.shape_39 = new cjs.Shape();
            this.shape_39.graphics.f().s("#F7BCC8").ss(4,1,1).p("Aj3jOQAWiSBQhvQBDhWBIgcQAWgIAYgCQBJgGA3AhQAfASATAeQANAWAOAjQADAJACAKQAHAcgHAeQgCAKgEAKQgMAegTAaQgGAGgGAHQg7BEggBCQgBADgCADQg1BbAEBuQgBASABARQAHBiAMBmQABAMABAMQAQBUAMArQACAHACAEQAHAaAFAdQgKASgNAUQgRAmgUAIQgPAEgogWQgIgLgIgMQgLgPgMgQQgJgOgLgOQgMgRgNgQQgThJgchAQgCgEgCgEQgGgPgHgPQguhlgZhJQg5irAViNg");
            this.shape_39.setTransform(46.422,-144.5337);
        
            this.shape_40 = new cjs.Shape();
            this.shape_40.graphics.f("#FFFFFF").s().p("AAII6IgQgXIgXgfQgJgOgLgOIgZghQgThJgchAIgEgIIgNgeQguhlgZhJQg5irAViNQAWiSBQhvQBDhWBIgcQAWgIAYgCQBJgGA3AhQAfASATAeQANAWAOAjIAFATQAHAcgHAeIgGAUQgMAegTAaIgMANQg7BEggBCIgDAGQg1BbAEBuQgBASABARQAHBiAMBmIACAYQAQBUAMArIAEALQAHAaAFAdIgXAmQgRAmgUAIIgGABQgPAAgigTg");
            this.shape_40.setTransform(46.422,-144.5337);
        
            this.shape_41 = new cjs.Shape();
            this.shape_41.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjyjRQAWiSBQhyQBFhYBHgZQAXgIAXgBQBKgCA0AlQAdAUARAfQAMAXAMAjQADAKABAKQAFAcgHAeQgDALgEAJQgNAfgSAZQgGAHgGAGQg7BGgcBEQgCADgBADQgvBZAJByQAAATACARQAKBmALBjQABAMACAMQAPBSANAtQADAIABAEQAIAbAGAcQgNAPgQARQgTAggXAGQgQADgngWQgIgLgGgMQgLgQgKgRQgJgPgKgOQgLgSgNgQQgShKgchAQgCgEgCgEQgGgQgIgOQgvhkgahLQg7isAUiMg");
            this.shape_41.setTransform(45.2857,-144.9645);
        
            this.shape_42 = new cjs.Shape();
            this.shape_42.graphics.f("#FFFFFF").s().p("AAMI9IgOgXIgVghIgTgdIgYgiQgShKgchAIgEgIIgOgeQgvhkgahLQg7isAUiMQAWiSBQhyQBFhYBHgZQAXgIAXgBQBKgCA0AlQAdAUARAfQAMAXAMAjQADAKABAKQAFAcgHAeQgDALgEAJQgNAfgSAZIgMANQg7BGgcBEIgDAGQgvBZAJByQAAATACARIAVDJIADAYQAPBSANAtIAEAMQAIAbAGAcIgdAgQgTAggXAGIgFAAQgQAAgigTg");
            this.shape_42.setTransform(45.2857,-144.9645);
        
            this.shape_43 = new cjs.Shape();
            this.shape_43.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjtjVQAViSBRhzQBGhaBFgYQAYgHAYAAQBKABAxAqQAcAWAPAgQALAZAJAjQADAJABAKQAEAdgJAfQgDAKgEAJQgOAfgSAZQgGAHgGAGQg7BHgYBGQgBADgBADQgqBYAPB3QABATACARQAPBpAKBgQABAMABANQAOBQAPAwQACAIACAEQAIAbAHAcQgQAMgSANQgWAcgZADQgSABgmgUQgHgMgGgNQgJgQgJgRQgIgQgJgPQgLgTgLgRQgShLgdhAQgCgDgCgEQgGgQgIgPQgwhjgchLQg+itAViNg");
            this.shape_43.setTransform(44.1553,-145.4214);
        
            this.shape_44 = new cjs.Shape();
            this.shape_44.graphics.f("#FFFFFF").s().p("AAPJBIgNgZIgSghIgRgfQgLgTgLgRQgShLgdhAIgEgHQgGgQgIgPQgwhjgchLQg+itAViNQAViSBRhzQBGhaBFgYQAYgHAYAAQBKABAxAqQAcAWAPAgQALAZAJAjQADAJABAKQAEAdgJAfQgDAKgEAJQgOAfgSAZIgMANQg7BHgYBGIgCAGQgqBYAPB3IADAkQAPBpAKBgIACAZQAOBQAPAwIAEAMQAIAbAHAcIgiAZQgWAcgZADIgDAAQgRAAgkgTg");
            this.shape_44.setTransform(44.1553,-145.4214);
        
            this.shape_45 = new cjs.Shape();
            this.shape_45.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjpjZQAViSBTh1QBGhcBFgWQAYgGAYACQBLAEAvAuQAZAYAOAiQAJAZAIAjQACAKAAAKQACAdgJAfQgDAKgFAKQgPAfgSAYQgGAHgFAGQg6BJgVBIQgCADgBADQgjBWAVB8QABATADASQASBrAJBeQABAMACANQANBPAQAyQACAHACAFQAJAbAHAcQgSAIgUALQgZAWgcAAQgTAAglgSQgGgNgGgNQgHgRgIgSQgIgQgIgRQgKgSgKgTQgShLgdhAQgCgEgCgEQgHgPgIgPQgyhjgchMQhAiuATiNg");
            this.shape_45.setTransform(43.0397,-145.8985);
        
            this.shape_46 = new cjs.Shape();
            this.shape_46.graphics.f("#FFFFFF").s().p("AATJFIgMgaIgPgjIgQghIgUglQgShLgdhAIgEgIIgPgeQgyhjgchMQhAiuATiNQAViSBTh1QBGhcBFgWQAYgGAYACQBLAEAvAuQAZAYAOAiQAJAZAIAjIACAUQACAdgJAfIgIAUQgPAfgSAYIgLANQg6BJgVBIIgDAGQgjBWAVB8IAEAlQASBrAJBeIADAZQANBPAQAyIAEAMQAJAbAHAcQgSAIgUALQgZAWgcAAQgTAAglgSg");
            this.shape_46.setTransform(43.0397,-145.8985);
        
            this.shape_47 = new cjs.Shape();
            this.shape_47.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjkjcQAUiSBUh3QBHheBFgUQAYgGAYADQBLAIAsAyQAYAaAMAjQAIAbAFAjQACAKAAAKQABAegLAfQgDAJgFAKQgQAggSAXQgGAIgFAGQg6BKgRBKQgBADgBADQgeBUAbCCQACASADASQAXBvAIBbQABAMABANQAMBNASA2QACAHACAFQAJAaAIAdQgVAFgWAHQgcARgegCQgVgCgkgRQgFgNgFgOQgHgSgGgSQgHgRgIgRQgIgUgKgTQgShMgdhAQgCgEgCgDQgHgQgIgPQgzhigehNQhDivAUiNg");
            this.shape_47.setTransform(41.9331,-146.3642);
        
            this.shape_48 = new cjs.Shape();
            this.shape_48.graphics.f("#FFFFFF").s().p("ABPJcQgVgCgkgRIgKgbIgNgkIgPgiIgSgnQgShMgdhAIgEgHIgPgfQgzhigehNQhDivAUiNQAUiSBUh3QBHheBFgUQAYgGAYADQBLAIAsAyQAYAaAMAjQAIAbAFAjIACAUQABAegLAfIgIATQgQAggSAXIgLAOQg6BKgRBKIgCAGQgeBUAbCCIAFAkQAXBvAIBbIACAZQAMBNASA2IAEAMQAJAaAIAdQgVAFgWAHQgZAPgbAAIgGAAg");
            this.shape_48.setTransform(41.9331,-146.3642);
        
            this.shape_49 = new cjs.Shape();
            this.shape_49.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjgjgQATiRBVh5QBJhhBDgRQAZgGAYAEQBMAMApA2QAWAcAKAlQAHAbADAkQABAKAAAKQgBAegLAfQgEAKgFAJQgRAggRAXQgGAIgFAGQg6BMgOBLQgBADAAADQgYBTAgCGQADATAEASQAaByAHBYQABANACANQALBLATA4QACAHACAGQAKAbAJAcQgYACgZAEQgeALghgEQgWgDgjgRQgEgNgEgPQgGgSgHgTQgFgSgGgRQgIgVgJgTQgRhNgehAQgCgEgCgEQgIgQgIgOQg0hhgfhPQhFivATiOg");
            this.shape_49.setTransform(40.8532,-146.8181);
        
            this.shape_50 = new cjs.Shape();
            this.shape_50.graphics.f("#FFFFFF").s().p("ABSJgQgWgDgjgRIgIgcIgNglIgLgjIgRgoQgRhNgehAIgEgIIgQgeQg0hhgfhPQhFivATiOQATiRBVh5QBJhhBDgRQAZgGAYAEQBMAMApA2QAWAcAKAlQAHAbADAkQABAKAAAKQgBAegLAfQgEAKgFAJQgRAggRAXIgLAOQg6BMgOBLIgBAGQgYBTAgCGIAHAlQAaByAHBYIADAaQALBLATA4IAEANIATA3QgYACgZAEQgWAIgYAAIgRgBg");
            this.shape_50.setTransform(40.8532,-146.8181);
        
            this.shape_51 = new cjs.Shape();
            this.shape_51.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjcjkQATiSBVh6QBLhjBCgQQAZgFAZAGQBMAPAmA6QAVAfAIAlQAFAdACAkQAAAKgBALQgCAdgNAfQgDAKgGAKQgSAggRAXQgFAIgFAGQg5BNgLBNQgBADAAADQgTBRAmCMQAEATAFASQAeB1AGBVQABANABANQAKBKAVA7QACAHADAFQAKAbAJAcQgagBgbABQgiAFgjgGQgXgEgigQQgDgOgEgPQgFgTgFgUQgFgSgGgSQgGgVgIgUQgRhOgfhAQgCgEgCgEQgHgQgJgOQg1hgghhQQhHiwATiOg");
            this.shape_51.setTransform(39.8088,-147.2125);
        
            this.shape_52 = new cjs.Shape();
            this.shape_52.graphics.f("#FFFFFF").s().p("ABVJjQgXgEgigQIgHgdIgKgnIgLgkIgOgpQgRhOgfhAIgEgIQgHgQgJgOQg1hgghhQQhHiwATiOQATiSBVh6QBLhjBCgQQAZgFAZAGQBMAPAmA6QAVAfAIAlQAFAdACAkIgBAVQgCAdgNAfQgDAKgGAKQgSAggRAXIgKAOQg5BNgLBNIgBAGQgTBRAmCMIAJAlQAeB1AGBVIACAaQAKBKAVA7IAFAMIATA3QgagBgbABQgQACgQAAQgSAAgTgDg");
            this.shape_52.setTransform(39.8088,-147.2125);
        
            this.shape_53 = new cjs.Shape();
            this.shape_53.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjYjtQASiSBXh9QBLhkBCgOQAZgEAZAGQBNATAjA/QATAgAGAnQAEAeAAAkQgBAKgBALQgDAegOAfQgEAKgFAJQgUAhgQAXQgGAIgEAGQg5BOgIBPQAAADAAAEQgNBOAsCRQAFATAEASQAjB5AFBTQABAMABANQAJBIAWA+QACAHADAGQAKAbAKAbQgcgDgdgDQglAAgmgIQgYgGghgPQgDgOgCgQQgEgUgFgUQgEgTgFgSQgGgWgGgVQgRhPgfhAQgCgEgCgDQgIgRgIgOQg3hfgihRQhKiyATiNg");
            this.shape_53.setTransform(38.7678,-147.142);
        
            this.shape_54 = new cjs.Shape();
            this.shape_54.graphics.f("#FFFFFF").s().p("ACjJqQglAAgmgIQgYgGghgPIgFgeIgJgoQgEgTgFgSIgMgrQgRhPgfhAIgEgHQgIgRgIgOQg3hfgihRQhKiyATiNQASiSBXh9QBLhkBCgOQAZgEAZAGQBNATAjA/QATAgAGAnQAEAeAAAkIgCAVQgDAegOAfIgJATIgkA4IgKAOQg5BOgIBPIAAAHQgNBOAsCRIAJAlQAjB5AFBTIACAZQAJBIAWA+IAFANIAUA2Ig5gGg");
            this.shape_54.setTransform(38.7678,-147.142);
        
            this.shape_55 = new cjs.Shape();
            this.shape_55.graphics.f().s("#F7BCC8").ss(4,1,1).p("Ajdj4QASiRBYh/QBMhmBCgMQAZgEAZAIQBNAWAhBDQARAjAEAoQADAfgDAkQAAAKgCALQgFAegPAgQgEAJgGAKQgUAhgQAWQgGAIgEAHQg5BPgDBRQgBADAAAEQgHBMAyCXQAFATAGASQAmB7AEBRQABAMABANQAIBHAXBBQADAGADAGQALAbAKAcQgfgHgfgGQgogFgogLQgagIgggMQgCgQgBgQQgDgUgEgVQgDgTgFgUQgFgXgFgVQgRhQgfhAQgCgEgCgDQgIgQgJgPQg4hegjhSQhMizASiOg");
            this.shape_55.setTransform(38.5612,-146.9446);
        
            this.shape_56 = new cjs.Shape();
            this.shape_56.graphics.f("#FFFFFF").s().p("ACjJvQgogFgogLQgagIgggMIgDggIgHgpQgDgTgFgUIgKgsQgRhQgfhAIgEgHQgIgQgJgPQg4hegjhSQhMizASiOQASiRBYh/QBMhmBCgMQAZgEAZAIQBNAWAhBDQARAjAEAoQADAfgDAkIgCAVQgFAegPAgIgKATIgkA3IgKAPQg5BPgDBRIgBAHQgHBMAyCXIALAlQAmB7AEBRIACAZQAIBHAXBBIAGAMIAVA3Ig+gNg");
            this.shape_56.setTransform(38.5612,-146.9446);
        
            this.shape_57 = new cjs.Shape();
            this.shape_57.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjikBQASiSBYiAQBPhpBAgKQAagDAZAJQBNAaAfBHQAPAlACApQACAggFAkQgBALgDALQgGAegPAgQgFAKgGAJQgWAhgPAWQgFAJgFAGQg4BRAABSQgBAEAAADQAABLA2CbQAHAUAGASQAqB/ADBNQABANABANQAIBFAYBDQADAHACAGQAMAcALAbQghgKgigKQgqgKgrgNQgcgJgfgMQAAgQgBgQQgCgWgDgVQgCgUgEgUQgEgXgFgXQgQhQgghAQgCgEgCgDQgIgRgJgPQg5hdgkhTQhPizARiOg");
            this.shape_57.setTransform(38.3913,-146.774);
        
            this.shape_58 = new cjs.Shape();
            this.shape_58.graphics.f("#FFFFFF").s().p("ACjJ0QgqgKgrgNIg7gVIgBggQgCgWgDgVIgGgoIgJguQgQhQgghAIgEgHQgIgRgJgPQg5hdgkhTQhPizARiOQASiSBYiAQBPhpBAgKQAagDAZAJQBNAaAfBHQAPAlACApQACAggFAkIgEAWQgGAegPAgIgLATIglA3IgKAPQg4BRAABSIgBAHQAABLA2CbIANAmQAqB/ADBNIACAaQAIBFAYBDIAFANIAXA3IhDgUg");
            this.shape_58.setTransform(38.3913,-146.774);
        
            this.shape_59 = new cjs.Shape();
            this.shape_59.graphics.f().s("#F7BCC8").ss(4,1,1).p("AANJFIAAghQgBgqgGgrQgRiKg8heQi4kiAYjRQARiRBaiCQBjiRBfAlQBQAfAbBNQAZBIgYBiQgJAogaAqQggAugPAYQg6BWAFBXQAFBKA9CgQA7CcADBWQADBQAfBUIAeBDg");
            this.shape_59.setTransform(38.2314,-146.5771);
        
            this.shape_60 = new cjs.Shape();
            this.shape_60.graphics.f("#FFFFFF").s().p("AANJFIAAghQgBgqgGgrQgRiKg8heQi4kiAYjRQARiRBaiCQBjiRBfAlQBQAfAbBNQAZBIgYBiQgJAogaAqIgvBGQg6BWAFBXQAFBKA9CgQA7CcADBWQADBQAfBUIAeBDg");
            this.shape_60.setTransform(38.2314,-146.5771);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12},{t:this.shape_11}]},105).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).wait(1));
        
            // 右耳
            this.shape_61 = new cjs.Shape();
            this.shape_61.graphics.f().s("#F7BCC8").ss(4,1,1).p("AANJFIAAghQgBgqgGgrQgRiKg8heQi4kiAYjRQARiRBaiCQBjiRBfAlQBQAfAbBNQAZBIgYBiQgJAogaAqQggAugPAYQg6BWAFBXQAFBKA9CgQA7CcADBWQADBQAfBUIAeBDg");
            this.shape_61.setTransform(38.2314,-146.5771);
        
            this.shape_62 = new cjs.Shape();
            this.shape_62.graphics.f("#FFFFFF").s().p("AANJFIAAghQgBgqgGgrQgRiKg8heQi4kiAYjRQARiRBaiCQBjiRBfAlQBQAfAbBNQAZBIgYBiQgJAogaAqIgvBGQg6BWAFBXQAFBKA9CgQA7CcADBWQADBQAfBUIAeBDg");
            this.shape_62.setTransform(38.2314,-146.5771);
        
            this.shape_63 = new cjs.Shape();
            this.shape_63.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjkkLQARiRBZiCQBmiPBdAkQBTAoAWBEQADAHACAIQAPA7gQBOQgBAJgCAJQgHAdgQAfQgGAKgGALQgZAkgPAXQgEAGgDAFQg5BWAFBXQABANACAQQALBJAxCDQAGARAGAQQAuCDAEBPQAAAPACAPQAHBBAYBEIAdBBIjbhMIgBghQAAgegEgfQgCgMgBgMQgQh5guhWQgHgMgIgMQhLh7gohqQg4iVAPh5g");
            this.shape_63.setTransform(38.2509,-146.736);
        
            this.shape_64 = new cjs.Shape();
            this.shape_64.graphics.f("#FFFFFF").s().p("AANJFIgBghQAAgegEgfIgDgYQgQh5guhWIgPgYQhLh7gohqQg4iVAPh5QARiRBZiCQBmiPBdAkQBTAoAWBEIAFAPQAPA7gQBOIgDASQgHAdgQAfIgMAVIgoA7IgHALQg5BWAFBXIADAdQALBJAxCDIAMAhQAuCDAEBPIACAeQAHBBAYBEIAdBBg");
            this.shape_64.setTransform(38.2509,-146.736);
        
            this.shape_65 = new cjs.Shape();
            this.shape_65.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjikLQARiRBaiBQBliPBdAjQBTAoAWBEQADAIABAHQAPA6gQBPQgBAJgCAJQgHAdgQAfQgGAKgGALQgZAkgPAXQgDAGgEAFQg5BWAFBXQABANACAPQALBKAvCDQAHARAFAQQAtCAAEBRQABAPACAPQAHBCAYBDIAcBCIirg5IgvgUIgBghQgBgegDgfQgCgMgBgMQgRh5gthVQgHgMgHgMQhLh8gnhqQg2iUAOh5g");
            this.shape_65.setTransform(38.3069,-146.7701);
        
            this.shape_66 = new cjs.Shape();
            this.shape_66.graphics.f("#FFFFFF").s().p("AA7JYIgvgUIgBghQgBgegDgfIgDgYQgRh5gthVIgOgYQhLh8gnhqQg2iUAOh5QARiRBaiBQBliPBdAjQBTAoAWBEIAEAPQAPA6gQBPIgDASQgHAdgQAfIgMAVIgoA7IgHALQg5BWAFBXIADAcQALBKAvCDIAMAhQAtCAAEBRIADAeQAHBCAYBDIAcBCg");
            this.shape_66.setTransform(38.3069,-146.7701);
        
            this.shape_67 = new cjs.Shape();
            this.shape_67.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjgkMQARiQBaiBQBmiOBcAjQBTAnAWBFQACAHACAIQAOA5gQBQQgCAIgCAJQgHAdgQAgQgFAKgGAKQgZAlgOAWQgEAGgEAFQg4BWAEBXQABANACAPQALBLAuCBQAGARAFAQQAsB+AFBUQABAPABAPQAIBBAXBDIAcBCIirg4IgugVIgBgiQgBgdgEgfQgBgMgCgMQgRh5gshUQgHgNgHgMQhJh8gmhqQg2iUAOh5g");
            this.shape_67.setTransform(38.3715,-146.822);
        
            this.shape_68 = new cjs.Shape();
            this.shape_68.graphics.f("#FFFFFF").s().p("AA5JYIgugVIgBgiQgBgdgEgfIgDgYQgRh5gshUIgOgZQhJh8gmhqQg2iUAOh5QARiQBaiBQBmiOBcAjQBTAnAWBFIAEAPQAOA5gQBQIgEARQgHAdgQAgIgLAUIgnA7IgIALQg4BWAEBXIADAcQALBLAuCBIALAhQAsB+AFBUIACAeQAIBBAXBDIAcBCg");
            this.shape_68.setTransform(38.3715,-146.822);
        
            this.shape_69 = new cjs.Shape();
            this.shape_69.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjdkMQARiQBaiBQBliNBdAjQBTAnAVBEQACAIACAHQANA4gQBRQgCAIgCAJQgHAdgQAgQgFAKgHAKQgYAlgOAWQgEAGgDAFQg4BXAEBWQAAANACAPQAKBLAtCBQAGARAGAQQAqB8AGBWQAAAOACAPQAHBBAYBEIAbBBIirg3IgsgWIgBgiQgCgdgEgfQgCgMgBgLQgSh6grhUQgHgMgHgMQhIh8glhqQg1iUAPh5g");
            this.shape_69.setTransform(38.4431,-146.8641);
        
            this.shape_70 = new cjs.Shape();
            this.shape_70.graphics.f("#FFFFFF").s().p("AA3JYIgsgWIgBgiQgCgdgEgfIgDgXQgSh6grhUIgOgYQhIh8glhqQg1iUAPh5QARiQBaiBQBliNBdAjQBTAnAVBEIAEAPQANA4gQBRIgEARQgHAdgQAgIgMAUIgmA7IgHALQg4BXAEBWIACAcQAKBLAtCBIAMAhQAqB8AGBWIACAdQAHBBAYBEIAbBBg");
            this.shape_70.setTransform(38.4431,-146.8641);
        
            this.shape_71 = new cjs.Shape();
            this.shape_71.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjbkNQARiPBaiAQBmiMBcAhQBTAnAUBFQADAHABAIQANA3gRBRQgBAJgCAJQgHAdgQAfQgGAKgGAKQgYAlgOAWQgEAGgDAGQg3BWADBVQABAOACAPQAJBMArB/QAGARAGARQAoB5AHBYQABAPACAPQAHBBAXBDIAaBBIiqg2IgrgYIgBghQgCgdgEgfQgCgLgBgMQgTh7gqhSQgHgMgHgNQhGh8glhqQgziUAOh4g");
            this.shape_71.setTransform(38.4907,-146.9234);
        
            this.shape_72 = new cjs.Shape();
            this.shape_72.graphics.f("#FFFFFF").s().p("AA1JYIgrgYIgBghQgCgdgEgfIgDgXQgTh7gqhSIgOgZQhGh8glhqQgziUAOh4IAAgBQARiPBaiAQBmiMBcAhQBTAnAUBFIAEAPQANA3gRBRIgDASQgHAdgQAfIgMAUIgmA7IgHAMQg3BWADBVIADAdQAJBMArB/IAMAiQAoB5AHBYIADAeQAHBBAXBDIAaBBg");
            this.shape_72.setTransform(38.4907,-146.9234);
        
            this.shape_73 = new cjs.Shape();
            this.shape_73.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjZkNQARiPBbiAQBliLBcAhQBTAmAUBFQACAIACAHQAMA3gRBRQgBAJgDAJQgHAdgQAfQgFAKgGAKQgYAlgOAXQgEAGgDAFQg2BWACBVQABANACAQQAJBMAqB/QAFARAGAQQAnB3AIBbQABAOABAPQAIBBAXBDIAZBBIiqg1IgqgZIgBghQgCgdgEgfQgCgLgBgMQgUh7gphRQgHgNgGgMQhGh9gjhpQgziVAOh4g");
            this.shape_73.setTransform(38.5481,-146.9907);
        
            this.shape_74 = new cjs.Shape();
            this.shape_74.graphics.f("#FFFFFF").s().p("AAzJYIgqgZIgBghQgCgdgEgfIgDgXQgUh7gphRIgNgZQhGh9gjhpQgziVAOh4QARiPBbiAQBliLBcAhQBTAmAUBFIAEAPQAMA3gRBRIgEASQgHAdgQAfIgLAUIgmA8IgHALQg2BWACBVIADAdQAJBMAqB/IALAhQAnB3AIBbIACAdQAIBBAXBDIAZBBg");
            this.shape_74.setTransform(38.5481,-146.9907);
        
            this.shape_75 = new cjs.Shape();
            this.shape_75.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjXkNQARiPBbiAQBliKBcAgQBTAmATBGQACAHACAIQAMA1gSBTQgBAIgCAJQgIAdgPAfQgGAKgGAKQgXAlgOAXQgEAGgDAFQg2BWACBVQABANABAPQAJBNApB+QAFARAFARQAmB0AJBdQABAPACAPQAIBAAWBDIAZBCIiqg2IgpgZIgCghQgCgdgEgeQgBgMgCgMQgUh7gphRQgGgMgHgMQhEh+gjhoQgxiVAOh4g");
            this.shape_75.setTransform(38.6194,-147.0338);
        
            this.shape_76 = new cjs.Shape();
            this.shape_76.graphics.f("#FFFFFF").s().p("AAxJXIgpgZIgCghQgCgdgEgeIgDgYQgUh7gphRIgNgYQhEh+gjhoQgxiVAOh4QARiPBbiAQBliKBcAgQBTAmATBGIAEAPQAMA1gSBTIgDARQgIAdgPAfIgMAUIglA8IgHALQg2BWACBVIACAcQAJBNApB+IAKAiQAmB0AJBdIADAeQAIBAAWBDIAZBCg");
            this.shape_76.setTransform(38.6194,-147.0338);
        
            this.shape_77 = new cjs.Shape();
            this.shape_77.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjUkNQAQiPBch/QBliKBbAgQBUAmASBGQACAHABAHQAMA1gSBTQgBAJgDAJQgHAcgQAfQgFALgGAKQgXAlgOAWQgEAGgDAGQg1BWACBUQAAAOACAPQAHBNAoB+QAFAQAFARQAlByAKBfQABAPABAOQAJBBAVBDIAZBBIiqg0IgogbIgCggQgCgegDgeQgCgLgCgMQgVh7gohRQgGgMgGgMQhDh/gihnQgxiVAPh4g");
            this.shape_77.setTransform(38.6831,-147.1012);
        
            this.shape_78 = new cjs.Shape();
            this.shape_78.graphics.f("#FFFFFF").s().p("AAvJYIgogbIgCggQgCgegDgeIgEgXQgVh7gohRIgMgYQhDh/gihnQgxiVAPh4IAAAAQAQiPBch/QBliKBbAgQBUAmASBGIADAOQAMA1gSBTIgEASQgHAcgQAfIgLAVIglA7IgHAMQg1BWACBUQAAAOACAPQAHBNAoB+IAKAhQAlByAKBfIACAdQAJBBAVBDIAZBBg");
            this.shape_78.setTransform(38.6831,-147.1012);
        
            this.shape_79 = new cjs.Shape();
            this.shape_79.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjSkOQAQiOBch/QBliJBbAgQBTAlASBGQACAHACAHQALA0gTBUQgBAJgDAJQgHAcgQAfQgFAKgGAKQgXAlgOAXQgDAGgEAFQgzBWABBVQAAANABAPQAHBOAnB9QAFAQAFARQAjBvALBiQABAPACAOQAIBBAVBCIAYBCIiqg0IgmgbIgCghQgDgdgDgeQgCgMgCgLQgWh8gmhPQgGgNgHgMQhBh/ghhoQgwiUAPh4g");
            this.shape_79.setTransform(38.7554,-147.1194);
        
            this.shape_80 = new cjs.Shape();
            this.shape_80.graphics.f("#FFFFFF").s().p("AAsJXIgmgbIgCghQgDgdgDgeIgEgXQgWh8gmhPIgNgZQhBh/ghhoQgwiUAPh4IAAAAQAQiOBch/QBliJBbAgQBTAlASBGIAEAOQALA0gTBUIgEASQgHAcgQAfIgLAUIglA8IgHALQgzBWABBVIABAcQAHBOAnB9IAKAhQAjBvALBiIADAdQAIBBAVBCIAYBCg");
            this.shape_80.setTransform(38.7554,-147.1194);
        
            this.shape_81 = new cjs.Shape();
            this.shape_81.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjQkOQARiOBbh+QBkiJBdAfQBTAlARBGQACAHABAIQALAzgTBVQgCAIgCAJQgHAcgQAfQgFAKgGAKQgXAlgOAXQgDAGgDAFQg0BXABBUQAAANABAPQAHBOAlB8QAFARAFAQQAiBuALBkQABAOACAPQAJBBAVBCIAXBBIiqgzIgkgcIgDghQgDgdgEgeQgCgMgBgLQgXh8glhPQgGgMgGgMQhBiAgghnQguiVAOh3g");
            this.shape_81.setTransform(38.8117,-147.1869);
        
            this.shape_82 = new cjs.Shape();
            this.shape_82.graphics.f("#FFFFFF").s().p("AAqJXIgkgcIgDghQgDgdgEgeIgDgXQgXh8glhPIgMgYQhBiAgghnQguiVAOh3QARiOBbh+QBkiJBdAfQBTAlARBGIADAPQALAzgTBVIgEARQgHAcgQAfIgLAUIglA8IgGALQg0BXABBUIABAcQAHBOAlB8IAKAhQAiBuALBkIADAdQAJBBAVBCIAXBBg");
            this.shape_82.setTransform(38.8117,-147.1869);
        
            this.shape_83 = new cjs.Shape();
            this.shape_83.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjOkPQARiNBch+QBkiIBcAfQBTAkARBHQABAHACAHQAKAygTBWQgCAIgCAJQgHAcgQAfQgFAKgGALQgXAlgNAWQgEAGgDAGQgzBWAABTQAAAOACAPQAGBPAkB7QAEAQAFARQAhBrAMBnQABAOACAOQAJBBAUBCIAXBCIiqgzIgjgeIgDggQgCgdgFgeQgCgLgCgMQgXh8gkhOQgGgNgGgMQg/iAgghnQgtiUAOh3g");
            this.shape_83.setTransform(38.8839,-147.2302);
        
            this.shape_84 = new cjs.Shape();
            this.shape_84.graphics.f("#FFFFFF").s().p("AAoJXIgjgeIgDggQgCgdgFgeIgEgXQgXh8gkhOIgMgZQg/iAgghnQgtiUAOh3IAAgBQARiNBch+QBkiIBcAfQBTAkARBHIADAOQAKAygTBWIgEARQgHAcgQAfIgLAVIgkA7IgHAMQgzBWAABTIACAdQAGBPAkB7IAJAhQAhBrAMBnIADAcQAJBBAUBCIAXBCg");
            this.shape_84.setTransform(38.8839,-147.2302);
        
            this.shape_85 = new cjs.Shape();
            this.shape_85.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjMkPQARiNBch+QBkiGBcAdQBTAlAQBGQACAHABAIQAJAxgTBWQgCAIgCAJQgHAcgQAfQgFAKgGALQgWAlgOAWQgDAGgDAGQgyBWgBBTQAAAOABAOQAGBQAiB6QAFARAFAQQAfBpANBpQABAOACAPQAJBAAUBCIAXBCIiqgyIgigfIgDggQgDgdgFgeQgCgLgCgMQgXh9gkhMQgGgNgFgMQg+iBgfhnQgsiUAOh3g");
            this.shape_85.setTransform(38.9546,-147.2903);
        
            this.shape_86 = new cjs.Shape();
            this.shape_86.graphics.f("#FFFFFF").s().p("AAmJXIgigfIgDggIgIg7IgEgXQgXh9gkhMIgLgZQg+iBgfhnQgsiUAOh3IAAAAQARiNBch+QBkiGBcAdQBTAlAQBGIADAPQAJAxgTBWIgEARQgHAcgQAfIgLAVIgkA7IgGAMQgyBWgBBTIABAcQAGBQAiB6IAKAhQAfBpANBpIADAdQAJBAAUBCIAXBCg");
            this.shape_86.setTransform(38.9546,-147.2903);
        
            this.shape_87 = new cjs.Shape();
            this.shape_87.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjKkPQARiNBch9QBkiGBcAdQBTAkAQBHQABAHABAIQAJAwgTBXQgCAIgCAJQgIAbgPAgQgGAKgFAKQgWAlgOAXQgDAGgDAFQgyBXgBBTQAAANABAPQAGBQAhB5QAEARAFAQQAeBnAOBrQABAOACAPQAJBAAUBCIAWBBIiqgxIghgfIgDghQgDgdgFgdQgCgMgCgLQgYh9gjhMQgFgNgGgMQg9iBgehnQgriUAOh3g");
            this.shape_87.setTransform(39.0031,-147.358);
        
            this.shape_88 = new cjs.Shape();
            this.shape_88.graphics.f("#FFFFFF").s().p("AAkJXIghgfIgDghIgIg6IgEgXQgYh9gjhMIgLgZQg9iBgehnQgriUAOh3QARiNBch9QBkiGBcAdQBTAkAQBHIACAPQAJAwgTBXIgEARQgIAbgPAgIgLAUIgkA8IgGALQgyBXgBBTIABAcQAGBQAhB5IAJAhQAeBnAOBrIADAdQAJBAAUBCIAWBBg");
            this.shape_88.setTransform(39.0031,-147.358);
        
            this.shape_89 = new cjs.Shape();
            this.shape_89.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjIkPQARiNBch8QBkiGBcAdQBTAkAPBHQABAHABAHQAJAvgUBYQgCAIgCAJQgHAbgQAgQgFAKgGAKQgWAlgNAXQgEAGgDAGQgwBWgCBSQAAAOABAPQAFBQAgB5QAEAQAEARQAdBkAPBuQABAOACAOQAKBBATBBIAVBCIiqgxIgfghIgDggQgDgdgGgdQgCgLgCgMQgZh9ghhMQgGgMgFgMQg8iCgdhmQgqiUAOh3g");
            this.shape_89.setTransform(39.104,-147.4007);
        
            this.shape_90 = new cjs.Shape();
            this.shape_90.graphics.f("#FFFFFF").s().p("AAhJXIgfghIgDggQgDgdgGgdIgEgXQgZh9ghhMIgLgYQg8iCgdhmQgqiUAOh3IAAAAQARiNBch8QBkiGBcAdQBTAkAPBHIACAOQAJAvgUBYIgEARQgHAbgQAgIgLAUIgjA8IgHAMQgwBWgCBSIABAdQAFBQAgB5IAIAhQAdBkAPBuIADAcQAKBBATBBIAVBCg");
            this.shape_90.setTransform(39.104,-147.4007);
        
            this.shape_91 = new cjs.Shape();
            this.shape_91.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjHkQQARiNBch8QBkiEBcAcQBTAjAOBHQACAIABAHQAHAvgUBYQgBAIgDAJQgHAbgQAgQgFAKgGAKQgWAlgMAXQgEAGgDAFQgwBXgCBSQAAANABAPQAEBRAeB4QAFARAEAQQAbBiAQBwQABAOACAOQAKBAATBCIAUBBIipgwIgeghIgDghQgEgcgFgdQgDgMgCgLQgZh+ghhKQgFgNgGgMQg6iDgchmQgpiUAOh2g");
            this.shape_91.setTransform(39.3475,-147.445);
        
            this.shape_92 = new cjs.Shape();
            this.shape_92.graphics.f("#FFFFFF").s().p("AAeJWIgeghIgDghIgJg5IgFgXQgZh+ghhKIgLgZQg6iDgchmQgpiUAOh2IAAAAQARiNBch8QBkiEBcAcQBTAjAOBHIADAPQAHAvgUBYIgEARQgHAbgQAgIgLAUIgiA8IgHALQgwBXgCBSIABAcQAEBRAeB4IAJAhQAbBiAQBwIADAcQAKBAATBCIAUBBg");
            this.shape_92.setTransform(39.3475,-147.445);
        
            this.shape_93 = new cjs.Shape();
            this.shape_93.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjGkRQAQiMBdh7QBjiEBcAcQBTAjAOBHQABAHABAIQAHAtgUBZQgCAIgCAJQgHAbgQAgQgFAKgGAKQgWAlgMAXQgEAGgDAGQgvBWgCBRQgBAOABAPQADBSAeB2QAEARAEARQAaBfAQByQACAOACAPQAKBAASBBIAUBCIipgwIgcgjIgEggQgEgcgGgdQgCgLgCgMQgah+gghKQgFgMgFgNQg5iDgchlQgniUAOh2g");
            this.shape_93.setTransform(39.5826,-147.4878);
        
            this.shape_94 = new cjs.Shape();
            this.shape_94.graphics.f("#FFFFFF").s().p("AAaJWIgcgjIgEggIgKg5IgEgXQgah+gghKIgKgZQg5iDgchlQgniUAOh2IAAgBQAQiMBdh7QBjiEBcAcQBTAjAOBHIACAPQAHAtgUBZIgEARQgHAbgQAgIgLAUIgiA8IgHAMQgvBWgCBRIAAAdQADBSAeB2IAIAiQAaBfAQByIAEAdQAKBAASBBIAUBCg");
            this.shape_94.setTransform(39.5826,-147.4878);
        
            this.shape_95 = new cjs.Shape();
            this.shape_95.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjGkQQARiMBdh7QBjiDBcAbQBTAiANBIQABAHABAIQAHAsgVBaQgBAIgDAJQgHAbgQAfQgFALgGAJQgVAmgNAXQgDAGgDAFQgvBWgDBSQAAANABAPQADBSAcB2QADARAEARQAZBcASB1QABAOACAPQALBAARBAIAUBCIipguIgbgkIgFggQgEgdgFgdQgDgLgCgLQgah/gfhJQgFgMgGgMQg3iEgbhlQgniUAOh2g");
            this.shape_95.setTransform(39.7933,-147.5557);
        
            this.shape_96 = new cjs.Shape();
            this.shape_96.graphics.f("#FFFFFF").s().p("AAXJXIgbgkIgFggIgJg6IgFgWQgah/gfhJIgLgYQg3iEgbhlQgniUAOh2IAAAAQARiMBdh7QBjiDBcAbQBTAiANBIIACAPQAHAsgVBaIgEARQgHAbgQAfIgLAUIgiA9IgGALQgvBWgDBSIABAcQADBSAcB2IAHAiQAZBcASB1IADAdQALBAARBAIAUBCg");
            this.shape_96.setTransform(39.7933,-147.5557);
        
            this.shape_97 = new cjs.Shape();
            this.shape_97.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjFkRQAQiLBdh7QBkiCBbAaQBTAjANBHQABAIABAHQAGAsgVBaQgCAIgCAJQgIAbgPAfQgGALgFAJQgVAmgNAXQgDAGgDAFQguBXgDBRQgBANABAPQACBTAbB1QAEARADAQQAYBbASB3QACAOACAOQALBAARBBIATBBIipgtIgaglIgFggQgEgdgGgdQgCgLgCgLQgbh/gehIQgFgMgFgNQg3iEgahlQgliUAOh1g");
            this.shape_97.setTransform(40.0276,-147.6167);
        
            this.shape_98 = new cjs.Shape();
            this.shape_98.graphics.f("#FFFFFF").s().p("AATJXIgaglIgFggIgKg6IgEgWQgbh/gehIIgKgZQg3iEgahlQgliUAOh1IAAgBQAQiLBdh7QBkiCBbAaQBTAjANBHIACAPQAGAsgVBaIgEARQgIAbgPAfIgLAUIgiA9IgGALQguBXgDBRIAAAcQACBTAbB1IAHAhQAYBbASB3IAEAcQALBAARBBIATBBg");
            this.shape_98.setTransform(40.0276,-147.6167);
        
            this.shape_99 = new cjs.Shape();
            this.shape_99.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjFkRQAQiLBeh7QBjiBBbAaQBUAiAMBIQABAHAAAIQAGAqgVBbQgCAJgDAJQgHAagQAfQgFALgFAKQgVAlgMAXQgEAGgDAGQgtBWgEBQQgBAOABAPQACBTAZB0QAEARAEARQAWBYATB6QACANACAPQAKA/ARBBIATBCIipguIgZgmIgEgfQgFgdgGgcQgCgLgDgLQgbiAgdhHQgFgNgFgMQg1iFgZhlQgliTAOh1g");
            this.shape_99.setTransform(40.263,-147.6604);
        
            this.shape_100 = new cjs.Shape();
            this.shape_100.graphics.f("#FFFFFF").s().p("AAPJWIgZgmIgEgfIgLg5IgFgWQgbiAgdhHIgKgZQg1iFgZhlQgliTAOh1IAAgBQAQiLBeh7QBjiBBbAaQBUAiAMBIIABAPQAGAqgVBbIgFASQgHAagQAfIgKAVIghA8IgHAMQgtBWgEBQQgBAOABAPQACBTAZB0IAIAiQAWBYATB6IAEAcQAKA/ARBBIATBCg");
            this.shape_100.setTransform(40.263,-147.6604);
        
            this.shape_101 = new cjs.Shape();
            this.shape_101.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjEkRQAQiLBeh6QBjiBBbAZQBUAiALBIQABAIAAAHQAFAqgVBcQgCAIgCAJQgIAagPAfQgGALgFAKQgVAlgMAXQgDAGgDAGQgtBWgEBQQgBAOABAOQABBUAYB0QAEARADAQQAVBWAUB8QACAOACAOQALBAAQBAIASBCIipgtIgXgnIgFgfQgFgdgGgcQgCgLgCgLQgdiAgchHQgFgMgEgMQg0iGgZhkQgjiUAOh1g");
            this.shape_101.setTransform(40.4852,-147.7286);
        
            this.shape_102 = new cjs.Shape();
            this.shape_102.graphics.f("#FFFFFF").s().p("AALJWIgXgnIgFgfIgLg5IgEgWQgdiAgchHIgJgYQg0iGgZhkQgjiUAOh1IAAAAQAQiLBeh6QBjiBBbAZQBUAiALBIIABAPQAFAqgVBcIgEARQgIAagPAfIgLAVIghA8IgGAMQgtBWgEBQIAAAcQABBUAYB0IAHAhQAVBWAUB8IAEAcQALBAAQBAIASBCg");
            this.shape_102.setTransform(40.4852,-147.7286);
        
            this.shape_103 = new cjs.Shape();
            this.shape_103.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjEkSQARiLBdh5QBkiABbAZQBTAhAKBIQACAIAAAHQAEApgVBdQgCAIgDAJQgHAZgQAgQgFAKgFAKQgVAmgMAXQgDAGgDAFQgsBXgFBQQAAANAAAPQABBUAWBzQAEARADAQQAUBUAUB+QACAOADAOQALBAAQBAIARBCIipgsIgVgoIgGggQgFgcgGgdQgDgLgCgLQgdiAgbhFQgFgNgEgMQgziGgXhlQgiiTANh1g");
            this.shape_103.setTransform(40.7395,-147.7475);
        
            this.shape_104 = new cjs.Shape();
            this.shape_104.graphics.f("#FFFFFF").s().p("AAHJWIgVgoIgGggIgLg5IgFgWQgdiAgbhFIgJgZQgziGgXhlQgiiTANh1IAAAAQARiLBdh5QBkiABbAZQBTAhAKBIIACAPQAEApgVBdIgFARQgHAZgQAgIgKAUIghA9IgGALQgsBXgFBQIAAAcQABBUAWBzIAHAhQAUBUAUB+IAFAcQALBAAQBAIARBCg");
            this.shape_104.setTransform(40.7395,-147.7475);
        
            this.shape_105 = new cjs.Shape();
            this.shape_105.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjDkSQAQiKBeh5QBjh/BbAYQBTAhAKBIQABAHABAIQAEAogWBdQgCAIgDAJQgHAagQAgQgFAKgFAKQgVAlgMAXQgDAGgDAGQgrBWgFBQQgBAOAAAOQAABVAWByQADARADAQQATBRAVCBQACAOACAOQAMBAAPA/IARBCIipgrIgUgpIgGggQgFgcgGgcQgDgLgCgLQgeiBgahEQgEgNgFgMQgxiHgXhkQghiTAOh0g");
            this.shape_105.setTransform(40.9745,-147.8157);
        
            this.shape_106 = new cjs.Shape();
            this.shape_106.graphics.f("#FFFFFF").s().p("AADJWIgUgpIgGggIgLg4IgFgWQgeiBgahEIgJgZQgxiHgXhkQghiTAOh0IAAgBQAQiKBeh5QBjh/BbAYQBTAhAKBIIACAPQAEAogWBdIgFARQgHAagQAgIgKAUIghA8IgGAMQgrBWgFBQQgBAOAAAOQAABVAWByIAGAhQATBRAVCBIAEAcQAMBAAPA/IARBCg");
            this.shape_106.setTransform(40.9745,-147.8157);
        
            this.shape_107 = new cjs.Shape();
            this.shape_107.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjDkTQAQiJBfh5QBjh+BaAXQBUAhAJBJQABAHAAAHQAEAngXBfQgCAIgCAJQgIAZgPAgQgFAKgFAKQgVAmgLAWQgEAGgCAGQgrBXgGBPQgBAOAAAOQAABWAUBxQADAQADARQARBPAXCDQACANACAOQAMBAAPBAIAQBCIiogrIgUgqIgGggQgFgcgHgcQgCgLgDgLQgeiBgZhEQgEgMgFgNQgwiHgWhjQggiTAOh1g");
            this.shape_107.setTransform(41.2105,-147.8597);
        
            this.shape_108 = new cjs.Shape();
            this.shape_108.graphics.f("#FFFFFF").s().p("AAAJWIgUgqIgGggIgMg4IgFgWQgeiBgZhEIgJgZQgwiHgWhjQggiTAOh1IAAgBQAQiJBfh5QBjh+BaAXQBUAhAJBJIABAOQAEAngXBfIgEARQgIAZgPAgIgKAUIggA8IgGAMQgrBXgGBPIgBAcQAABWAUBxIAGAhQARBPAXCDIAEAbQAMBAAPBAIAQBCg");
            this.shape_108.setTransform(41.2105,-147.8597);
        
            this.shape_109 = new cjs.Shape();
            this.shape_109.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjCkTQAQiJBfh5QBjh9BaAXQBUAgAIBJQABAHAAAIQADAmgWBfQgCAIgDAJQgIAZgPAgQgFAKgFAKQgUAmgMAXQgDAGgDAFQgqBXgGBPQgBANAAAPQgBBWATBwQADARADAQQAQBNAXCFQACAOACAOQAMA/APBAIAQBCIiogqIgTgrIgGggQgGgcgGgcQgDgLgCgKQgfiCgYhDQgFgNgEgMQgviIgVhjQgfiTAOh0g");
            this.shape_109.setTransform(41.4379,-147.9281);
        
            this.shape_110 = new cjs.Shape();
            this.shape_110.graphics.f("#FFFFFF").s().p("AgDJWIgTgrIgGggIgMg4IgFgVQgfiCgYhDIgJgZQgviIgVhjQgfiTAOh0IAAgBQAQiJBfh5QBjh9BaAXQBUAgAIBJIABAPQADAmgWBfIgFARQgIAZgPAgIgKAUIggA9IgGALQgqBXgGBPIgBAcQgBBWATBwIAGAhQAQBNAXCFIAEAcQAMA/APBAIAQBCg");
            this.shape_110.setTransform(41.4379,-147.9281);
        
            this.shape_111 = new cjs.Shape();
            this.shape_111.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjCkTQAQiKBfh3QBjh9BaAWQBUAgAIBKQABAHAAAHQACAmgXBfQgCAIgDAJQgHAZgQAgQgFAKgEAKQgUAmgMAXQgDAGgDAGQgpBWgHBOQgBAOAAAPQgBBWARBwQADAQADARQAOBKAYCIQADANACAOQAMBAAOA/IAPBCIingpIgSgtIgGgfQgGgcgHgcQgCgKgDgLQgfiCgXhCQgFgNgEgMQgtiJgUhjQgeiTANhzg");
            this.shape_111.setTransform(41.6778,-147.9902);
        
            this.shape_112 = new cjs.Shape();
            this.shape_112.graphics.f("#FFFFFF").s().p("AgHJWIgSgtIgGgfIgNg4IgFgVQgfiCgXhCIgJgZQgtiJgUhjQgeiTANhzIAAgBQAQiKBfh3QBjh9BaAWQBUAgAIBKIABAOQACAmgXBfIgFARQgHAZgQAgIgJAUIggA9IgGAMQgpBWgHBOIgBAdQgBBWARBwIAGAhQAOBKAYCIIAFAbQAMBAAOA/IAPBCg");
            this.shape_112.setTransform(41.6778,-147.9902);
        
            this.shape_113 = new cjs.Shape();
            this.shape_113.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjBkUQAQiJBfh3QBjh8BaAWQBTAgAIBJQAAAHAAAIQACAkgXBgQgCAIgDAJQgHAZgQAgQgFAKgFAKQgTAmgMAXQgDAGgCAGQgpBWgHBOQgCAOAAAOQgCBYARBuQACARADARQANBHAZCLQACANADAOQAMA/AOA/IAOBCIingoIgQguIgHgfQgGgcgHgcQgDgKgCgLQggiCgWhCQgFgMgDgNQgtiIgThjQgdiTAOh0g");
            this.shape_113.setTransform(41.916,-148.0338);
        
            this.shape_114 = new cjs.Shape();
            this.shape_114.graphics.f("#FFFFFF").s().p("AgLJWIgQguIgHgfIgNg4IgFgVQggiCgWhCIgIgZQgtiIgThjQgdiTAOh0IAAgBQAQiJBfh3QBjh8BaAWQBTAgAIBJIAAAPQACAkgXBgIgFARQgHAZgQAgIgKAUIgfA9IgFAMQgpBWgHBOQgCAOAAAOQgCBYARBuIAFAiIAmDSIAFAbQAMA/AOA/IAOBCg");
            this.shape_114.setTransform(41.916,-148.0338);
        
            this.shape_115 = new cjs.Shape();
            this.shape_115.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjBkUQAQiJBfh3QBjh7BaAWQBUAfAGBKQABAHAAAHQABAkgXBhQgCAIgDAJQgIAYgPAgQgFALgFAJQgTAmgLAXQgEAGgCAGQgoBWgIBOQgBAOgBAOQgCBYAPBuQACAQADARQAMBFAaCNQACANACAOQANA/ANA/IAOBCIingoIgWhNQgGgcgHgbQgDgLgDgLQggiCgVhBQgEgNgEgMQgriJgThjQgciTAOhzg");
            this.shape_115.setTransform(42.1687,-148.0849);
        
            this.shape_116 = new cjs.Shape();
            this.shape_116.graphics.f("#FFFFFF").s().p("AgPJVIgWhNIgNg3IgGgWQggiCgVhBIgIgZQgriJgThjQgciTAOhzIAAgBQAQiJBfh3QBjh7BaAWQBUAfAGBKIABAOQABAkgXBhIgFARQgIAYgPAgIgKAUIgeA9IgGAMQgoBWgIBOIgCAcQgCBYAPBuIAFAhQAMBFAaCNIAEAbIAaB+IAOBCg");
            this.shape_116.setTransform(42.1687,-148.0849);
        
            this.shape_117 = new cjs.Shape();
            this.shape_117.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjAkUQAQiJBfh2QBjh6BaAUQBTAfAHBKQAAAHAAAIQABAigYBiQgCAIgDAJQgHAYgQAgQgFALgFAJQgTAmgLAXQgDAGgCAGQgoBXgIBNQgCAOAAAOQgDBYAOBtQACARADARQAKBDAbCPQACANADAOQAMA/ANA/IAOBCIiogoIgUhOQgHgcgHgbQgDgLgCgKQgiiEgUg/QgEgNgDgMQgqiKgShjQgbiSAOhzg");
            this.shape_117.setTransform(42.3977,-148.1225);
        
            this.shape_118 = new cjs.Shape();
            this.shape_118.graphics.f("#FFFFFF").s().p("AgTJVIgUhOIgOg3IgFgVQgiiEgUg/IgHgZQgqiKgShjQgbiSAOhzIAAgBQAQiJBfh2QBjh6BaAUQBTAfAHBKIAAAPQABAigYBiIgFARQgHAYgQAgIgKAUIgeA9IgFAMQgoBXgIBNQgCAOAAAOQgDBYAOBtIAFAiQAKBDAbCPIAFAbIAZB+IAOBCg");
            this.shape_118.setTransform(42.3977,-148.1225);
        
            this.shape_119 = new cjs.Shape();
            this.shape_119.graphics.f().s("#F7BCC8").ss(4,1,1).p("AgXJWIghiHQgmiTgVhEQguibgThrQgZiTANhzQARiLBjh4QBpiBBiAmQBHAbAABXQAAAhgYBjQgHAdgVAsQgaA0gOAdQgzBtgEBeQgEBnASCAQAKBGAfCnIAnC/g");
            this.shape_119.setTransform(42.6413,-148.2073);
        
            this.shape_120 = new cjs.Shape();
            this.shape_120.graphics.f("#FFFFFF").s().p("AgXJWIghiHQgmiTgVhEQguibgThrQgZiTANhzQARiLBjh4QBpiBBiAmQBHAbAABXQAAAhgYBjQgHAdgVAsIgoBRQgzBtgEBeQgEBnASCAQAKBGAfCnIAnC/g");
            this.shape_120.setTransform(42.6413,-148.2073);
        
            this.shape_121 = new cjs.Shape();
            this.shape_121.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjEkPQARiMBlh5QBpiABkAkQBJAZACBXQABAigYBhQgIAegWArQgcA0gQAeQg0BtgGBeQgFBlASCBQAJBGAgCnQATBfASBeIiigkIgmiDQgliRgVhEQguiagThqQgZiTAOh1g");
            this.shape_121.setTransform(43.3062,-148.0116);
        
            this.shape_122 = new cjs.Shape();
            this.shape_122.graphics.f("#FFFFFF").s().p("AgYJVIgmiDQgliRgVhEQguiagThqQgZiTAOh1QARiMBlh5QBpiABkAkQBJAZACBXQABAigYBhQgIAegWArIgsBSQg0BtgGBeQgFBlASCBQAJBGAgCnIAlC9g");
            this.shape_122.setTransform(43.3062,-148.0116);
        
            this.shape_123 = new cjs.Shape();
            this.shape_123.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjJkJQATiPBmh5QBph+BlAhQBMAXAEBXQADAjgaBgQgJAfgXAqQgdAygSAgQg2BsgHBfQgFBkARCBQAJBHAfCnQATBdARBdIicghIgriAQgliOgUhEQguiagShpQgaiUAOh1g");
            this.shape_123.setTransform(44.0131,-147.8268);
        
            this.shape_124 = new cjs.Shape();
            this.shape_124.graphics.f("#FFFFFF").s().p("AgZJVIgriAQgliOgUhEQguiagShpQgaiUAOh1QATiPBmh5QBph+BlAhQBMAXAEBXQADAjgaBgQgJAfgXAqIgvBSQg2BsgHBfQgFBkARCBQAJBHAfCnQATBdARBdg");
            this.shape_124.setTransform(44.0131,-147.8268);
        
            this.shape_125 = new cjs.Shape();
            this.shape_125.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjMkDQASiRBoh6QBqh9BmAfQBPAWAGBWQAEAkgaBfQgKAfgYAqQggAxgUAiQg3BrgIBfQgHBjARCBQAJBHAfCoQATBcAQBbIiXgfIgvh8QgkiLgVhEQguiagShoQgZiUAPh2g");
            this.shape_125.setTransform(44.6989,-147.641);
        
            this.shape_126 = new cjs.Shape();
            this.shape_126.graphics.f("#FFFFFF").s().p("AgaJUIgvh8QgkiLgVhEQguiagShoQgZiUAPh2QASiRBoh6QBqh9BmAfQBPAWAGBWQAEAkgaBfQgKAfgYAqQggAxgUAiQg3BrgIBfQgHBjARCBQAJBHAfCoQATBcAQBbg");
            this.shape_126.setTransform(44.6989,-147.641);
        
            this.shape_127 = new cjs.Shape();
            this.shape_127.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjRj9QAUiTBqh6QBph8BnAdQBSATAIBXQAFAlgbBdQgLAggZApQghAwgXAjQg4BrgJBgQgHBhAQCBQAJBHAfCpQASBaAPBaIiRgcIg0h5QgkiIgUhEQguiagRhmQgaiVAPh3g");
            this.shape_127.setTransform(45.3996,-147.4748);
        
            this.shape_128 = new cjs.Shape();
            this.shape_128.graphics.f("#FFFFFF").s().p("AgbJUIg0h5QgkiIgUhEQguiagRhmQgaiVAPh3QAUiTBqh6QBph8BnAdQBSATAIBXQAFAlgbBdQgLAggZApQgiAwgWAjQg4BrgJBgQgHBhAQCBQAJBHAfCpQASBaAPBag");
            this.shape_128.setTransform(45.3996,-147.4748);
        
            this.shape_129 = new cjs.Shape();
            this.shape_129.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjVj3QAUiWBsh6QBph7BpAbQBUARAKBXQAHAlgcBdQgMAhgaAnQgjAwgZAlQg6BpgKBgQgIBhAQCBQAJBIAeCpQASBZAPBYIiMgZIg5h2QgjiGgUhDQguiagRhlQgaiVAQh4g");
            this.shape_129.setTransform(46.0824,-147.2857);
        
            this.shape_130 = new cjs.Shape();
            this.shape_130.graphics.f("#FFFFFF").s().p("AgcJUIg5h2QgjiGgUhDQguiagRhlQgaiVAQh4QAUiWBsh6QBph7BpAbQBUARAKBXQAHAlgcBdQgMAhgaAnQgjAwgZAlQg6BpgKBgQgIBhAQCBQAJBIAeCpQASBZAPBYg");
            this.shape_130.setTransform(46.0824,-147.2857);
        
            this.shape_131 = new cjs.Shape();
            this.shape_131.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjajyQAWiYBth6QBph5BqAYQBYAPALBXQAIAmgcBcQgNAhgbAnQglAvgbAmQg8BpgLBgQgJBfAQCCQAJBIAeCpQARBYAOBXIiHgXIg9hyQgiiDgUhEQguiZgRhkQgaiWAQh5g");
            this.shape_131.setTransform(46.7805,-147.0813);
        
            this.shape_132 = new cjs.Shape();
            this.shape_132.graphics.f("#FFFFFF").s().p("AgeJTIg9hyQgiiDgUhEQguiZgRhkQgaiWAQh5QAWiYBth6QBph5BqAYQBYAPALBXQAIAmgcBcQgNAhgbAnQglAvgbAmQg8BpgLBgQgJBfAQCCQAJBIAeCpQARBYAOBXg");
            this.shape_132.setTransform(46.7805,-147.0813);
        
            this.shape_133 = new cjs.Shape();
            this.shape_133.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjejrQAWibBvh7QBph3BrAWQBbANAOBXQAJAngdBaQgOAigcAmQgnAugeAoQg8BogNBhQgKBeAQCBQAIBIAeCqQARBXANBVIiBgUIhChvQghiAgVhEQgtiYgRhjQgaiXARh5g");
            this.shape_133.setTransform(47.4863,-146.921);
        
            this.shape_134 = new cjs.Shape();
            this.shape_134.graphics.f("#FFFFFF").s().p("AgfJTIhChvQghiAgVhEQgtiYgRhjQgaiXARh5QAWibBvh7QBph3BrAWQBbANAOBXQAJAngdBaQgOAigcAmQgnAugeAoQg8BogNBhQgKBeAQCBQAIBIAeCqQARBXANBVg");
            this.shape_134.setTransform(47.4863,-146.921);
        
            this.shape_135 = new cjs.Shape();
            this.shape_135.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjijmQAWicBxh7QBoh3BuAUQBdALAQBXQAKAogdBZQgQAjgcAlQgpAtggApQg+BngPBiQgJBcAPCCQAIBIAeCrQAQBVAMBUIh7gRIhHhsQghh9gUhEQgtiYgRhiQgaiXASh7g");
            this.shape_135.setTransform(48.1858,-146.7378);
        
            this.shape_136 = new cjs.Shape();
            this.shape_136.graphics.f("#FFFFFF").s().p("AggJTIhHhsQghh9gUhEQgtiYgRhiQgaiXASh7QAWicBxh7QBoh3BuAUQBdALAQBXQAKAogdBZQgQAjgcAlQgpAtggApQg+BngPBiQgJBcAPCCQAIBIAeCrQAQBVAMBUg");
            this.shape_136.setTransform(48.1858,-146.7378);
        
            this.shape_137 = new cjs.Shape();
            this.shape_137.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjnjgQAYieByh8QBoh1BvARQBgAKASBWQAMApgfBYQgQAkgeAkQgrAtghAqQhABmgQBiQgKBcAOCCQAJBIAeCrQAPBUAMBSIh2gOIhMhpQggh6gUhEQgtiYgQhgQgbiYASh8g");
            this.shape_137.setTransform(48.8934,-146.5884);
        
            this.shape_138 = new cjs.Shape();
            this.shape_138.graphics.f("#FFFFFF").s().p("AghJTIhMhpQggh6gUhEQgtiYgQhgQgbiYASh8QAYieByh8QBoh1BvARQBgAKASBWQAMApgfBYQgQAkgeAkQgrAtghAqQhABmgQBiQgKBcAOCCQAJBIAeCrQAPBUAMBSg");
            this.shape_138.setTransform(48.8934,-146.5884);
        
            this.shape_139 = new cjs.Shape();
            this.shape_139.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjrjaQAYihB0h8QBoh0BxAQQBjAHATBWQANAqgfBXQgRAkgfAjQgtAsgkAsQhBBlgRBjQgLBaAOCDQAJBIAdCsQAQBSAKBRIhwgMIhRhlQgfh4gUhDQgtiYgQhfQgaiYASh9g");
            this.shape_139.setTransform(49.5989,-146.3913);
        
            this.shape_140 = new cjs.Shape();
            this.shape_140.graphics.f("#FFFFFF").s().p("AgiJSIhRhlQgfh4gUhDQgtiYgQhfQgaiYASh9QAYihB0h8QBoh0BxAQQBjAHATBWQANAqgfBXQgRAkgfAjQgtAsgkAsQhBBlgRBjQgLBaAOCDQAJBIAdCsQAQBSAKBRg");
            this.shape_140.setTransform(49.5989,-146.3913);
        
            this.shape_141 = new cjs.Shape();
            this.shape_141.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjwjUQAZijB2h8QBohzBxANQBmAGAWBWQAOArggBVQgSAlggAiQguAsgmAtQhDBkgSBkQgLBZANCCQAIBJAdCsQAPBRAKBPIhrgJIhVhiQgfh0gUhEQgtiYgPhdQgbiZATh+g");
            this.shape_141.setTransform(50.3078,-146.2413);
        
            this.shape_142 = new cjs.Shape();
            this.shape_142.graphics.f("#FFFFFF").s().p("AgkJSIhVhiQgfh0gUhEQgtiYgPhdQgbiZATh+QAZijB2h8QBohzBxANQBmAGAWBWQAOArggBVQgSAlggAiQguAsgmAtQhDBkgSBkQgLBZANCCQAIBJAdCsQAPBRAKBPg");
            this.shape_142.setTransform(50.3078,-146.2413);
        
            this.shape_143 = new cjs.Shape();
            this.shape_143.graphics.f().s("#F7BCC8").ss(4,1,1).p("Aj1jNQAaimB4h9QBohxBzALQBpADAXBXQAQArghBUQgTAmghAhQgwArgpAvQhEBjgTBkQgMBYANCCQAIBKAdCsQAOBQAJBNIhlgGIhaheQgehygUhEQgtiXgPhcQgbiaATh+g");
            this.shape_143.setTransform(51.0036,-146.0696);
        
            this.shape_144 = new cjs.Shape();
            this.shape_144.graphics.f("#FFFFFF").s().p("AglJSIhaheQgehygUhEQgtiXgPhcQgbiaATh+QAaimB4h9QBohxBzALQBpADAXBXQAQArghBUQgTAmghAhQgwArgpAvQhEBjgTBkQgMBYANCCQAIBKAdCsQAOBQAJBNg");
            this.shape_144.setTransform(51.0036,-146.0696);
        
            this.shape_145 = new cjs.Shape();
            this.shape_145.graphics.f().s("#F7BCC8").ss(4,1,1).p("Aj5jIQAbinB5h9QBohwB0AIQBsABAZBXQARAsghBTQgUAngiAgQgyAqgrAwQhFBjgUBkQgOBWAOCDQAGBKAdCtQAPBOAHBMIhggDIhehbQgdhwgUhDQgtiXgPhbQgaiaATiAg");
            this.shape_145.setTransform(51.7211,-145.88);
        
            this.shape_146 = new cjs.Shape();
            this.shape_146.graphics.f("#FFFFFF").s().p("AgnJSIhehbQgdhwgUhDQgtiXgPhbQgaiaATiAQAbinB5h9QBohwB0AIQBsABAZBXQARAsghBTQgUAngiAgQgyAqgrAwQhFBjgUBkQgOBWAOCDQAGBKAdCtQAPBOAHBMg");
            this.shape_146.setTransform(51.7211,-145.88);
        
            this.shape_147 = new cjs.Shape();
            this.shape_147.graphics.f().s("#F7BCC8").ss(4,1,1).p("Aj9jCQAbipB7h+QBohuB2AGQBugBAcBWQASAugiBRQgVAogjAfQg0ApgtAyQhHBigVBlQgPBVAOCDQAGBJAdCuQAOBNAGBKIhaAAIhjhYQgdhtgUhDQgsiXgPhZQgaibAUiBg");
            this.shape_147.setTransform(52.4314,-145.7405);
        
            this.shape_148 = new cjs.Shape();
            this.shape_148.graphics.f("#FFFFFF").s().p("AgoJSIhjhYQgdhtgUhDQgsiXgPhZQgaibAUiBQAbipB7h+QBohuB2AGQBugBAcBWQASAugiBRQgVAogjAfQg0ApgtAyQhHBigVBlQgPBVAOCDQAGBJAdCuQAOBNAGBKg");
            this.shape_148.setTransform(52.4314,-145.7405);
        
            this.shape_149 = new cjs.Shape();
            this.shape_149.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkCi8QAcitB9h9QBphuB2AEQBxgCAeBWQAUAugjBQQgXApgjAeQg3AogvA0QhIBhgWBlQgPBUAMCDQAIBKAbCuQAOBMAGBJIhVACIhnhVQgdhpgUhEQgsiWgPhZQgaibAUiBg");
            this.shape_149.setTransform(53.1416,-145.457);
        
            this.shape_150 = new cjs.Shape();
            this.shape_150.graphics.f("#FFFFFF").s().p("AiQH8QgdhpgUhEQgsiWgPhZQgaibAUiBQAcitB9h9QBphuB2AEQBxgCAeBWQAUAugjBQQgXApgjAeQg3AogvA0QhIBhgWBlQgPBUAMCDQAIBKAbCuQAOBMAGBJIhVACg");
            this.shape_150.setTransform(53.1416,-145.457);
        
            this.shape_151 = new cjs.Shape();
            this.shape_151.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkHi4QAdiuB+h+QBphsB4ABQB0gEAgBWQAVAvgkBPQgXAqglAdQg4AngxA1QhKBggYBmQgQBTANCDQAHBKAbCvQANBKAFBHIhPAGIhshSQgchngUhDQgriWgPhXQgbidAViCg");
            this.shape_151.setTransform(53.8525,-145.1861);
        
            this.shape_152 = new cjs.Shape();
            this.shape_152.graphics.f("#FFFFFF").s().p("AiXH+QgchngUhDQgriWgPhXQgbidAViCQAdiuB+h+QBphsB4ABQB0gEAgBWQAVAvgkBPQgXAqglAdQg4AngxA1QhKBggYBmQgQBTANCDQAHBKAbCvQANBKAFBHIhPAGg");
            this.shape_152.setTransform(53.8525,-145.1861);
        
            this.shape_153 = new cjs.Shape();
            this.shape_153.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkLizQAeiwB/h+QBphrB5gBQB3gHAiBXQAWAvgkBOQgZArglAcQg6Ang0A2QhLBfgZBmQgQBSAMCEQAHBKAbCvQANBJAEBGIhKAIIhxhPQgbhkgUhDQgriWgPhWQgaicAViEg");
            this.shape_153.setTransform(54.5725,-144.9012);
        
            this.shape_154 = new cjs.Shape();
            this.shape_154.graphics.f("#FFFFFF").s().p("AidIAQgbhkgUhDQgriWgPhWQgaicAViEQAeiwB/h+QBphrB5gBQB3gHAiBXQAWAvgkBOQgZArglAcQg6Ang0A2QhLBfgZBmQgQBSAMCEQAHBKAbCvQANBJAEBGIhKAIg");
            this.shape_154.setTransform(54.5725,-144.9012);
        
            this.shape_155 = new cjs.Shape();
            this.shape_155.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkPiuQAeizCBh+QBphqB7gDQB6gJAjBXQAYAwglBNQgaArgmAcQg8Alg2A4QhNBfgaBmQgRBQAMCFQAHBKAaCwQANBHADBFIhEAKIh2hLQgahhgUhDQgriWgPhUQgaieAWiEg");
            this.shape_155.setTransform(55.2732,-144.6424);
        
            this.shape_156 = new cjs.Shape();
            this.shape_156.graphics.f("#FFFFFF").s().p("AijICIguikQgriWgPhUQgaieAWiEQAeizCBh+QBphqB7gDQB6gJAjBXQAYAwglBNQgaArgmAcQg8Alg2A4QhNBfgaBmQgRBQAMCFQAHBKAaCwQANBHADBFIhEAKg");
            this.shape_156.setTransform(55.2732,-144.6424);
        
            this.shape_157 = new cjs.Shape();
            this.shape_157.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkUipQAfi1CEh/QBohoB8gFQB9gLAlBXQAZAxgmBLQgaAsgoAbQg9Alg4A5QhOBegcBnQgSBPAMCEQAGBLAbCwQAMBGACBDIg/ANIh5hIQgahegUhDQgriWgOhTQgbieAWiFg");
            this.shape_157.setTransform(55.9847,-144.3818);
        
            this.shape_158 = new cjs.Shape();
            this.shape_158.graphics.f("#FFFFFF").s().p("AioIEQgahegUhDQgriWgOhTQgbieAWiFQAfi1CEh/QBohoB8gFQB9gLAlBXQAZAxgmBLQgaAsgoAbQg9Alg4A5QhOBegcBnQgSBPAMCEQAGBLAbCwQAMBGACBDIg/ANg");
            this.shape_158.setTransform(55.9847,-144.3818);
        
            this.shape_159 = new cjs.Shape();
            this.shape_159.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkYijQAgi4CFh/QBohnB9gHQCAgNAnBWQAbAygnBLQgbAsgpAaQg/Akg7A7QhPBdgdBnQgTBOAMCEQAGBLAbCxQALBFABBBIg5AQIh+hEQgahcgThDQgriVgOhSQgbifAXiFg");
            this.shape_159.setTransform(56.6986,-144.1099);
        
            this.shape_160 = new cjs.Shape();
            this.shape_160.graphics.f("#FFFFFF").s().p("AiuIHIgtifQgriVgOhSQgbifAXiFQAgi4CFh/QBohnB9gHQCAgNAnBWQAbAygnBLQgbAsgpAaQg/Akg7A7QhPBdgdBnQgTBOAMCEQAGBLAbCxQALBFABBBIg5AQg");
            this.shape_160.setTransform(56.6986,-144.1099);
        
            this.shape_161 = new cjs.Shape();
            this.shape_161.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkdieQAhi6CGiAQBphlB+gKQCDgPApBXQAcAzgoBJQgcAtgqAZQhBAjg9A8QhPBdgfBoQgUBMALCFQAGBLAbCxQALBDAABAIgzATIiEhBQgYhZgUhDQgriVgNhQQgbigAXiGg");
            this.shape_161.setTransform(57.4104,-143.8608);
        
            this.shape_162 = new cjs.Shape();
            this.shape_162.graphics.f("#FFFFFF").s().p("Ai1IJQgYhZgUhDQgriVgNhQQgbigAXiGQAhi6CGiAQBphlB+gKQCDgPApBXQAcAzgoBJQgcAtgqAZQhBAjg9A8QhPBdgfBoQgUBMALCFQAGBLAbCxQALBDAABAIgzATg");
            this.shape_162.setTransform(57.4104,-143.8608);
        
            this.shape_163 = new cjs.Shape();
            this.shape_163.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkhiZQAhi8CIiAQBohkCBgMQCFgRArBWQAdA0goBIQgdAugrAYQhDAjg/A9QhRBbghBpQgUBLALCFQAGBMAbCxQALBCgBA/IgvAVIiIg+QgYhWgThCQgriVgNhPQgbigAYiIg");
            this.shape_163.setTransform(58.1197,-143.6146);
        
            this.shape_164 = new cjs.Shape();
            this.shape_164.graphics.f("#FFFFFF").s().p("Ai7ILIgriYQgriVgNhPQgbigAYiIQAhi8CIiAQBohkCBgMQCFgRArBWQAdA0goBIQgdAugrAYQhDAjg/A9QhRBbghBpQgUBLALCFQAGBMAbCxQALBCgBA/IgvAVg");
            this.shape_164.setTransform(58.1197,-143.6146);
        
            this.shape_165 = new cjs.Shape();
            this.shape_165.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkmiUQAii+CKiAQBohjCCgPQCIgSAuBWQAeA1gpBGQgeAvgsAXQhFAihBA/QhTBagiBqQgVBKALCFQAGBLAbCyQAKBBgBA9IgqAYIiMg6QgYhTgUhDQgqiVgNhOQgbigAYiJg");
            this.shape_165.setTransform(58.8316,-143.363);
        
            this.shape_166 = new cjs.Shape();
            this.shape_166.graphics.f("#FFFFFF").s().p("AjAIOIgsiWQgqiVgNhOQgbigAYiJQAii+CKiAQBohjCCgPQCIgSAuBWQAeA1gpBGQgeAvgsAXQhFAihBA/QhTBagiBqQgVBKALCFQAGBLAbCyQAKBBgBA9IgqAYg");
            this.shape_166.setTransform(58.8316,-143.363);
        
            this.shape_167 = new cjs.Shape();
            this.shape_167.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkqiPQAjjACLiBQBohhCDgRQCMgVAvBXQAfA1gpBGQggAvgsAWQhHAhhEBBQhUBZgjBqQgVBJAKCFQAGBMAaCyQAKBAgCA7IgkAbIiRg3QgXhQgUhDQgqiUgNhNQgbihAZiKg");
            this.shape_167.setTransform(59.5469,-143.1051);
        
            this.shape_168 = new cjs.Shape();
            this.shape_168.graphics.f("#FFFFFF").s().p("AjGIQIgriTQgqiUgNhNQgbihAZiKQAjjACLiBQBohhCDgRQCMgVAvBXQAfA1gpBGQggAvgsAWQhHAhhEBBQhUBZgjBqQgVBJAKCFQAGBMAaCyQAKBAgCA7IgkAbg");
            this.shape_168.setTransform(59.5469,-143.1051);
        
            this.shape_169 = new cjs.Shape();
            this.shape_169.graphics.f().s("#F7BCC8").ss(4,1,1).p("AkviKQAkjCCNiBQBohgCEgTQCOgXAxBWQAhA2gqBFQggAwguAVQhJAhhFBCQhWBYgkBqQgXBIAKCGQAGBMAaCzQAKA+gDA6IgfAdIiWg0QgWhNgThDQgriUgMhLQgbijAZiKg");
            this.shape_169.setTransform(60.25,-142.8666);
        
            this.shape_170 = new cjs.Shape();
            this.shape_170.graphics.f("#FFFFFF").s().p("AjNISIgpiQQgqiUgNhLQgbijAZiKQAkjCCNiBQBohgCEgTQCPgXAwBWQAiA2grBFQggAwgtAVQhJAhhGBCQhWBYgkBqQgXBIALCGQAFBMAaCzQAKA+gDA6IgeAdg");
            this.shape_170.setTransform(60.25,-142.8666);
        
            this.shape_171 = new cjs.Shape();
            this.shape_171.graphics.f().s("#F7BCC8").ss(4,1,1).p("Ak0iEQAljFCPiCQBoheCGgWQCRgZAzBXQAiA3grBDQgiAxguAUQhLAghIBDQhXBYglBrQgXBGAJCGQAGBMAaC0QAJA8gEA5IgZAgIibgwQgVhLgUhDQgqiUgMhJQgbikAZiKg");
            this.shape_171.setTransform(60.9622,-142.6303);
        
            this.shape_172 = new cjs.Shape();
            this.shape_172.graphics.f("#FFFFFF").s().p("AjTIVIgpiOQgqiUgMhJQgbikAZiKQAljFCPiCQBoheCGgWQCRgZAzBXQAiA3grBDQgiAxguAUQhLAghIBDQhXBYglBrQgXBGAJCGQAGBMAaC0QAJA8gEA5IgZAgg");
            this.shape_172.setTransform(60.9622,-142.6303);
        
            this.shape_173 = new cjs.Shape();
            this.shape_173.graphics.f().s("#F7BCC8").ss(4,1,1).p("Ak4h/QAljHCRiCQBoheCHgXQCUgbA1BXQAjA3grBCQgjAygvAUQhNAehKBFQhYBXgnBrQgYBFAJCGQAFBNAaC0QAJA7gFA3IgTAjIifgtQgVhIgUhDQgqiTgMhJQgbikAaiLg");
            this.shape_173.setTransform(61.6724,-142.3857);
        
            this.shape_174 = new cjs.Shape();
            this.shape_174.graphics.f("#FFFFFF").s().p("AjYIXIgpiLQgqiTgMhJQgbikAaiLQAljHCRiCQBoheCHgXQCUgbA1BXQAjA3grBCQgjAygvAUQhNAehKBFQhYBXgnBrQgYBFAJCGQAFBNAaC0QAJA7gFA3IgTAjg");
            this.shape_174.setTransform(61.6724,-142.3857);
        
            this.shape_175 = new cjs.Shape();
            this.shape_175.graphics.f().s("#F7BCC8").ss(4,1,1).p("Ak8h6QAmjJCSiCQBohdCIgZQCXgdA3BWQAlA5gtBBQgjAygxATQhOAdhMBHQhaBWgoBsQgZBEAJCGQAFBNAaC0QAIA6gGA1IgOAmIijgqQgVhFgThCQgqiUgLhHQgcilAbiMg");
            this.shape_175.setTransform(62.3971,-142.1391);
        
            this.shape_176 = new cjs.Shape();
            this.shape_176.graphics.f("#FFFFFF").s().p("AjeIZIgoiHQgqiUgLhHQgcilAbiMQAmjJCSiCQBohdCIgZQCXgdA3BWQAlA5gtBBQgjAygxATQhOAdhMBHQhaBWgoBsQgZBEAJCGQAFBNAaC0QAIA6gGA1IgOAmg");
            this.shape_176.setTransform(62.3971,-142.1391);
        
            this.shape_177 = new cjs.Shape();
            this.shape_177.graphics.f().s("#F7BCC8").ss(4,1,1).p("AjlIcIgniFQgpiTgMhGQgbilAbiNQAnjMCUiCQBnhbCKgcQCagfA5BWQAmA6gtA/QglA0gxARQhRAdhOBIQhbBWgqBsQgZBCAICHQAFBNAaC1QAIA4gHA0IgIApg");
            this.shape_177.setTransform(63.1011,-141.9089);
        
            this.shape_178 = new cjs.Shape();
            this.shape_178.graphics.f("#FFFFFF").s().p("AjlIcIgniFQgpiTgMhGQgbilAbiNQAnjMCUiCQBnhbCKgcQCagfA5BWQAmA6gtA/QglA0gxARQhRAdhOBIQhbBWgqBsQgZBCAICHQAFBNAaC1QAIA4gHA0IgIApg");
            this.shape_178.setTransform(63.1011,-141.9089);
        
            this.instance_2 = new lib.补间11("synched",0);
            this.instance_2.setTransform(44.1,-85.9,1,1,0,0,0,-19,56);
            this.instance_2._off = true;
        
            this.instance_3 = new lib.补间12("synched",0);
            this.instance_3.setTransform(38.2,-86.95,1,1.0348,15.8184,0,0,-19.9,56.9);
            this.instance_3._off = true;
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62},{t:this.shape_61}]}).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_142},{t:this.shape_141}]},1).to({state:[{t:this.shape_144},{t:this.shape_143}]},1).to({state:[{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_148},{t:this.shape_147}]},1).to({state:[{t:this.shape_150},{t:this.shape_149}]},1).to({state:[{t:this.shape_152},{t:this.shape_151}]},1).to({state:[{t:this.shape_154},{t:this.shape_153}]},1).to({state:[{t:this.shape_156},{t:this.shape_155}]},1).to({state:[{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_160},{t:this.shape_159}]},1).to({state:[{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_164},{t:this.shape_163}]},1).to({state:[{t:this.shape_166},{t:this.shape_165}]},1).to({state:[{t:this.shape_168},{t:this.shape_167}]},1).to({state:[{t:this.shape_170},{t:this.shape_169}]},1).to({state:[{t:this.shape_172},{t:this.shape_171}]},1).to({state:[{t:this.shape_174},{t:this.shape_173}]},1).to({state:[{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_178},{t:this.shape_177}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_3}]},21).to({state:[]},1).wait(25));
            this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({_off:true,regX:-19.9,regY:56.9,scaleY:1.0348,rotation:15.8184,x:38.2,y:-86.95},24).wait(47));
            this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},24).to({regX:-23,regY:59,scaleY:1,rotation:0,x:39.4,y:-83.6},21).to({_off:true},1).wait(25));
        
            // 左耳
            this.shape_179 = new cjs.Shape();
            this.shape_179.graphics.f().s("#F7BCC8").ss(4,1,1).p("AHojxIgPgpQgVgwgigkQhrhzi8AyQiAAihlBrQgkAmgoA4QgsA+gUAcQhaBsg5BWQhsCkAPBbQARBfBMAJQAuAFBMgdQAzgUAsghQAvgkASgkQAbg1AOgtQAXhHAGhWQAHhcBchgQBYhbBDAAQA2AAAnAeQAMAJAeAkQAQATBAgwQAggYAcgbg");
            this.shape_179.setTransform(-50.7973,-66.2208);
        
            this.shape_180 = new cjs.Shape();
            this.shape_180.graphics.f("#FFFFFF").s().p("AmJG/QhMgJgRhfQgPhbBsikQA5hWBahsIBAhaQAog4AkgmQBlhrCAgiQC8gyBrBzQAiAkAVAwIAPApQgcAbggAYQhAAwgQgTQgegkgMgJQgngeg2AAQhDAAhYBbQhcBggHBcQgGBWgXBHQgOAtgbA1QgSAkgvAkQgsAhgzAUQhAAYgsAAIgOAAg");
            this.shape_180.setTransform(-50.7973,-66.2208);
        
            this.shape_181 = new cjs.Shape();
            this.shape_181.graphics.f().s("#F7BCC8").ss(4,1,1).p("AnpFJQgKg+AvhfQAWgtAjgzQApg7A6hFQAYgeAcggQAOgRAXggQANgRAPgUQAQgVAPgTQAYgcAWgWQBlhmCBgdQA/gPA3ADQBoAGBHBMQATAUAPAZQAMASAJAVIAPApQgfAdgdAWQgLAIgJAGQguAegOgPQgPgQgKgLQg2gvgzgCQgCAAgCAAQg2gBhFA6QgPAMgQAQQhcBZgKBYQgJBRgYBFQgNAjgTApQgFAKgFAKQgPAegjAeQgHAGgIAGQgfAYgiAQQgPAHgPAGQgkAOgfAFQggAGgYgCQgWgDgQgKQgqgYgMhEg");
            this.shape_181.setTransform(-51.0885,-67.7382);
        
            this.shape_182 = new cjs.Shape();
            this.shape_182.graphics.f("#FFFFFF").s().p("AmNGyQgWgDgQgKQgqgYgMhEQgKg+AvhfQAWgtAjgzQApg7A6hFIA0g+IAlgxIAcglIAfgoQAYgcAWgWQBlhmCBgdQA/gPA3ADQBoAGBHBMQATAUAPAZQAMASAJAVIAPApQgfAdgdAWIgUAOQguAegOgPIgZgbQg2gvgzgCIgEAAQg2gBhFA6QgPAMgQAQQhcBZgKBYQgJBRgYBFQgNAjgTApIgKAUQgPAegjAeIgPAMQgfAYgiAQQgPAHgPAGQgkAOgfAFQgWAFgTAAIgPgBg");
            this.shape_182.setTransform(-51.0885,-67.7382);
        
            this.shape_183 = new cjs.Shape();
            this.shape_183.graphics.f().s("#F7BCC8").ss(4,1,1).p("AnrE8QgKg+AuhfQAWgtAkgzQAqg6A7hCQAZgdAcgfQAOgRAYgfQANgQAPgTQARgVAQgRQAYgcAWgUQBkhgCCgZQA/gOA3AFQBnAJBGBLQATAUAQAZQALASAJAVIAQAoQgfAegdAWQgLAHgJAGQguAegNgOQgQgPgKgLQg3gvgxgDQgCAAgCAAQg2gEhEA3QgPAMgQAOQhdBUgLBTQgMBNgaBDQgOAhgUAoQgEAKgFAKQgQAdgiAfQgHAGgIAGQgfAYgjARQgOAGgPAGQgkAOgfAFQggAGgYgDQgWgDgRgKQgpgZgLhDg");
            this.shape_183.setTransform(-51.3885,-69.2426);
        
            this.shape_184 = new cjs.Shape();
            this.shape_184.graphics.f("#FFFFFF").s().p("AmQGlQgWgDgRgKQgpgZgLhDQgKg+AuhfQAWgtAkgzQAqg6A7hCIA1g8IAmgwIAcgjIAhgmQAYgcAWgUQBkhgCCgZQA/gOA3AFQBnAJBGBLQATAUAQAZQALASAJAVIAQAoQgfAegdAWIgUANQguAegNgOIgagaQg3gvgxgDIgEAAQg2gEhEA3QgPAMgQAOQhdBUgLBTQgMBNgaBDQgOAhgUAoIgJAUQgQAdgiAfIgPAMQgfAYgjARIgdAMQgkAOgfAFQgVAEgSAAIgRgBg");
            this.shape_184.setTransform(-51.3885,-69.2426);
        
            this.shape_185 = new cjs.Shape();
            this.shape_185.graphics.f().s("#F7BCC8").ss(4,1,1).p("AnuEvQgKg+AvhfQAWgtAkgyQAqg4A9hBQAagdAcgdQAPgRAZgdQANgQAPgSQASgUAPgQQAYgaAYgTQBkhbCBgVQA/gLA3AGQBmAKBFBMQATAUAQAYQAMATAJAUIAQApQgfAdgdAWQgKAIgKAGQgtAdgOgNQgRgOgJgLQg3gxgwgDQgCAAgCAAQg2gFhDAzQgQALgQANQhcBOgOBPQgPBIgbBAQgOAhgVAnQgEAKgGAKQgPAdgiAfQgIAGgIAGQgeAYgjAQQgOAHgPAGQgkANgfAFQggAFgYgDQgWgDgRgKQgpgZgLhDg");
            this.shape_185.setTransform(-51.6877,-70.7749);
        
            this.shape_186 = new cjs.Shape();
            this.shape_186.graphics.f("#FFFFFF").s().p("AmTGYQgWgDgRgKQgpgZgLhDIAAAAQgKg+AvhfQAWgtAkgyQAqg4A9hBQAagdAcgdIAoguIAcgiIAhgkQAYgaAYgTQBkhbCBgVQA/gLA3AGQBmAKBFBMQATAUAQAYQAMATAJAUIAQApQgfAdgdAWIgUAOQgtAdgOgNQgRgOgJgLQg3gxgwgDIgEAAQg2gFhDAzQgQALgQANQhcBOgOBPQgPBIgbBAQgOAhgVAnIgKAUQgPAdgiAfIgQAMQgeAYgjAQQgOAHgPAGQgkANgfAFQgVADgRAAIgSgBg");
            this.shape_186.setTransform(-51.6877,-70.7749);
        
            this.shape_187 = new cjs.Shape();
            this.shape_187.graphics.f().s("#F7BCC8").ss(4,1,1).p("AnxEhQgKg+AvhfQAWgtAmgwQAqg3A+hAQAagbAdgdQAQgQAZgcQANgPAQgSQASgSAPgQQAZgZAYgRQBkhWCBgQQA/gJA2AHQBmANBFBLQATAUAPAYQAMATAJAUIARAoQgfAegdAVQgKAIgKAGQgtAegOgNQgRgNgJgLQg3gxgvgEQgCAAgBAAQg2gHhDAvQgQAKgQANQhcBIgRBKQgSBEgbA+QgQAfgVAmQgFAKgFAKQgQAcgiAgQgHAGgIAGQgfAZgiAQQgOAHgQAFQgjANggAEQggAGgYgEQgVgDgRgKQgpgagLhCg");
            this.shape_187.setTransform(-51.9799,-72.2974);
        
            this.shape_188 = new cjs.Shape();
            this.shape_188.graphics.f("#FFFFFF").s().p("AmXGLQgVgDgRgKQgpgagLhCIAAgBQgKg+AvhfQAWgtAmgwQAqg3A+hAIA3g4QAQgQAZgcIAdghIAhgiQAZgZAYgRQBkhWCBgQQA/gJA2AHQBmANBFBLQATAUAPAYQAMATAJAUIARAoQgfAegdAVIgUAOQgtAegOgNQgRgNgJgLQg3gxgvgEIgDAAQg2gHhDAvQgQAKgQANQhcBIgRBKQgSBEgbA+IglBFIgKAUQgQAcgiAgIgPAMQgfAZgiAQQgOAHgQAFQgjANggAEQgTAEgRAAIgUgCg");
            this.shape_188.setTransform(-51.9799,-72.2974);
        
            this.shape_189 = new cjs.Shape();
            this.shape_189.graphics.f().s("#F7BCC8").ss(4,1,1).p("An0EVQgJg+AuhfQAXgtAmgwQArg2BAg9QAagbAegbQAQgPAZgcQAOgOAQgRQASgRAQgQQAZgXAYgQQBkhRCCgKQA9gJA3AJQBkAPBFBLQATAUAQAYQALATAKAUIAQAoQgeAegdAVQgKAIgKAGQgsAdgPgMQgRgMgKgLQg2gygugEQgCAAgBgBQg2gIhCAsQgQAJgQALQhdBDgTBFQgUBAgdA7QgRAdgVAnQgFAJgGAKQgPAcgiAgQgHAGgIAGQgfAZgiAQQgOAHgQAFQgjANggAEQggAFgYgEQgWgDgQgKQgpgbgLhCg");
            this.shape_189.setTransform(-52.2806,-73.8549);
        
            this.shape_190 = new cjs.Shape();
            this.shape_190.graphics.f("#FFFFFF").s().p("AmaF/QgWgDgQgKQgpgbgLhCQgJg+AuhfQAXgtAmgwQArg2BAg9IA4g2QAQgPAZgcIAegfIAighQAZgXAYgQQBkhRCCgKQA9gJA3AJQBkAPBFBLQATAUAQAYQALATAKAUIAQAoQgeAegdAVIgUAOQgsAdgPgMQgRgMgKgLQg2gygugEIgDgBQg2gIhCAsQgQAJgQALQhdBDgTBFQgUBAgdA7IgmBEIgLATQgPAcgiAgIgPAMQgfAZgiAQQgOAHgQAFQgjANggAEQgSADgPAAQgMAAgLgCg");
            this.shape_190.setTransform(-52.2806,-73.8549);
        
            this.shape_191 = new cjs.Shape();
            this.shape_191.graphics.f().s("#F7BCC8").ss(4,1,1).p("An3EIQgJg+AvhfQAWgtAngvQAsg1BBg7QAbgaAegaQARgPAZgaQAPgNAPgRQATgQAQgPQAZgVAZgPQBkhMCCgGQA9gGA2AKQBkARBFBKQATAVAPAYQAMASAKAUIAQAoQgeAegdAVQgKAIgKAGQgsAdgPgLQgSgLgJgLQg2gzgtgFQgCAAgBAAQg1gLhCApQgQAIgQAKQhdA9gWBBQgXA7geA5QgSAcgVAmQgFAJgGAKQgQAcgiAfQgHAHgHAGQgfAZgiAQQgOAHgQAFQgjAMggAEQggAEgYgDQgWgEgQgKQgpgcgLhBg");
            this.shape_191.setTransform(-52.573,-75.4214);
        
            this.shape_192 = new cjs.Shape();
            this.shape_192.graphics.f("#FFFFFF").s().p("AmdFzQgWgEgQgKQgpgcgLhBQgJg+AvhfQAWgtAngvQAsg1BBg7IA5g0QARgPAZgaQAPgNAPgRIAjgfQAZgVAZgPQBkhMCCgGQA9gGA2AKQBkARBFBKQATAVAPAYQAMASAKAUIAQAoQgeAegdAVIgUAOQgsAdgPgLQgSgLgJgLQg2gzgtgFIgDAAQg1gLhCApQgQAIgQAKQhdA9gWBBQgXA7geA5QgSAcgVAmIgLATQgQAcgiAfIgOANQgfAZgiAQQgOAHgQAFQgjAMggAEQgRACgPAAQgNAAgLgBg");
            this.shape_192.setTransform(-52.573,-75.4214);
        
            this.shape_193 = new cjs.Shape();
            this.shape_193.graphics.f().s("#F7BCC8").ss(4,1,1).p("An6D7QgJg+AvhfQAXgtAnguQAtg0BCg5QAcgZAegZQASgOAZgZQAPgNAQgQQAUgPAQgOQAZgUAZgOQBkhGCCgBQA9gFA2AMQBjASBEBLQATAVAQAXQALATAKAUIARAoQgeAdgdAVQgKAIgKAGQgrAdgQgKQgSgKgJgLQg2g0gsgGQgCAAgBAAQg1gNhBAmQgQAHgQAJQhdA3gYA9QgaA2ggA2QgTAbgVAlQgFAJgGAKQgQAcgiAgQgHAGgIAHQgeAZgiAQQgPAHgPAFQgjAMghADQggAEgYgEQgVgEgQgKQgqgcgKhBg");
            this.shape_193.setTransform(-52.8723,-76.9883);
        
            this.shape_194 = new cjs.Shape();
            this.shape_194.graphics.f("#FFFFFF").s().p("AmhFmQgVgEgQgKQgqgcgKhBQgJg+AvhfQAXgtAnguQAtg0BCg5QAcgZAegZQASgOAZgZQAPgNAQgQIAkgdQAZgUAZgOQBkhGCCgBQA9gFA2AMQBjASBEBLQATAVAQAXQALATAKAUIARAoQgeAdgdAVIgUAOQgrAdgQgKQgSgKgJgLQg2g0gsgGIgDAAQg1gNhBAmQgQAHgQAJQhdA3gYA9QgaA2ggA2QgTAbgVAlIgLATQgQAcgiAgIgPANQgeAZgiAQQgPAHgPAFQgjAMghADQgQACgOAAQgOAAgMgCg");
            this.shape_194.setTransform(-52.8723,-76.9883);
        
            this.shape_195 = new cjs.Shape();
            this.shape_195.graphics.f().s("#F7BCC8").ss(4,1,1).p("An8DvQgJg/AvheQAWgsApgtQAtg0BDg3QAdgYAegZQATgNAZgYQAQgMAQgOQAUgPAQgNQAZgTAagMQBkhBCDADQA7gDA2ANQBjAVBEBLQASAUAQAYQAMASAKAUIARAoQgdAegeAVQgKAHgKAGQgrAdgQgJQgSgKgJgKQg3g1gqgGQgBgBgCAAQg1gOhAAhQgQAHgQAJQhfAxgZA3QgdAzghAzQgUAagVAkQgFAJgHAKQgQAbghAhQgHAGgIAGQgeAagiAQQgPAHgPAFQgjALghADQggAEgYgFQgWgEgPgKQgqgdgJhAg");
            this.shape_195.setTransform(-53.1723,-78.6016);
        
            this.shape_196 = new cjs.Shape();
            this.shape_196.graphics.f("#FFFFFF").s().p("AmkFaQgWgEgPgKQgqgdgJhAQgJg/AvheQAWgsApgtQAtg0BDg3IA7gxQATgNAZgYQAQgMAQgOIAkgcQAZgTAagMQBkhBCDADQA7gDA2ANQBjAVBEBLQASAUAQAYQAMASAKAUIARAoQgdAegeAVIgUANQgrAdgQgJQgSgKgJgKQg3g1gqgGIgDgBQg1gOhAAhQgQAHgQAJQhfAxgZA3QgdAzghAzQgUAagVAkIgMATQgQAbghAhIgPAMQgeAagiAQQgPAHgPAFQgjALghADIgbACQgQAAgNgDg");
            this.shape_196.setTransform(-53.1723,-78.6016);
        
            this.shape_197 = new cjs.Shape();
            this.shape_197.graphics.f().s("#F7BCC8").ss(4,1,1).p("An/DjQgJg/AvheQAXgsApgsQAugzBFg1QAcgXAggYQASgMAagXQAQgLARgOQAUgOAQgMQAagSAagKQBkg8CDAIQA7gBA2AOQBhAXBEBKQATAVAQAYQALASAKAUIASAnQgdAegeAVQgKAHgJAGQgsAdgPgJQgTgIgJgKQg3g2gpgHQgBgBgCAAQg0gQhAAeQgQAGgQAIQhfArgcAzQggAughAxQgWAYgVAkQgGAIgGAKQgQAcgiAgQgHAHgHAGQgeAagiAQQgPAHgPAEQgjAMghACQghADgXgEQgWgEgQgLQgpgdgJg/g");
            this.shape_197.setTransform(-53.4651,-80.257);
        
            this.shape_198 = new cjs.Shape();
            this.shape_198.graphics.f("#FFFFFF").s().p("AmnFPQgWgEgQgLQgpgdgJg/IAAgBQgJg/AvheQAXgsApgsQAugzBFg1IA8gvQASgMAagXQAQgLARgOIAkgaQAagSAagKQBkg8CDAIQA7gBA2AOQBhAXBEBKQATAVAQAYQALASAKAUIASAnQgdAegeAVIgTANQgsAdgPgJQgTgIgJgKQg3g2gpgHIgDgBQg0gQhAAeQgQAGgQAIQhfArgcAzIhBBfQgWAYgVAkIgMASQgQAcgiAgIgOANQgeAagiAQQgPAHgPAEQgjAMghACIgZABQgRAAgOgCg");
            this.shape_198.setTransform(-53.4651,-80.257);
        
            this.shape_199 = new cjs.Shape();
            this.shape_199.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoCDYQgIg/AvheQAWgtAqgrQAvgyBGgzQAdgWAggWQATgMAagWQARgKAQgOQAVgNARgKQAagRAagJQBkg2CDAMQA7ABA2APQBgAZBDBKQATAVAQAYQAMASAKAUIASAnQgdAdgeAVQgKAIgJAGQgrAbgQgGQgUgIgIgKQg3g3gogHQgBgBgCAAQg0gSg/AbQgQAEgQAHQhgAmgeAuQgiAqgjAuQgXAXgWAjQgFAJgGAKQgRAaghAhQgHAHgHAGQgfAbgiAPQgOAHgQAFQgiALgiACQggADgYgFQgVgFgQgKQgpgegJg/g");
            this.shape_199.setTransform(-53.7582,-81.9528);
        
            this.shape_200 = new cjs.Shape();
            this.shape_200.graphics.f("#FFFFFF").s().p("AmrFEQgVgFgQgKQgpgegJg/IAAAAQgIg/AvheQAWgtAqgrQAvgyBGgzIA9gsQATgMAagWQARgKAQgOIAmgXQAagRAagJQBkg2CDAMQA7ABA2APQBgAZBDBKQATAVAQAYQAMASAKAUIASAnQgdAdgeAVIgTAOQgrAbgQgGQgUgIgIgKQg3g3gogHIgDgBQg0gSg/AbQgQAEgQAHQhgAmgeAuQgiAqgjAuQgXAXgWAjIgLATQgRAaghAhIgOANQgfAbgiAPQgOAHgQAFQgiALgiACIgXABQgSAAgPgDg");
            this.shape_200.setTransform(-53.7582,-81.9528);
        
            this.shape_201 = new cjs.Shape();
            this.shape_201.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoFDMQgIg/AvhdQAXgtAqgqQAwgxBHgxQAegWAggVQAUgLAagUQARgLARgMQAWgMAQgKQAagPAcgIQBjgxCDARQA7ACA1ARQBgAbBDBKQATAVAPAYQAMASAKATIASAoQgcAdgdAVQgLAIgJAGQgrAagQgGQgUgGgJgKQg2g3gngJQgBAAgCgBQg0gTg+AXQgQAEgQAGQhgAfghAqQglAlgkAsQgXAWgXAiQgFAJgHAKQgQAaghAiQgHAGgIAHQgeAagiAQQgOAGgQAFQgiAKgiACQggADgYgFQgWgFgPgLQgpgegJg+g");
            this.shape_201.setTransform(-54.0645,-83.6928);
        
            this.shape_202 = new cjs.Shape();
            this.shape_202.graphics.f("#FFFFFF").s().p("AmuE5QgWgFgPgLQgpgegJg+IAAgBQgIg/AvhdQAXgtAqgqQAwgxBHgxQAegWAggVQAUgLAagUIAigXIAmgWQAagPAcgIQBjgxCDARQA7ACA1ARQBgAbBDBKQATAVAPAYQAMASAKATIASAoQgcAdgdAVIgUAOQgrAagQgGQgUgGgJgKQg2g3gngJIgDgBQg0gTg+AXQgQAEgQAGQhgAfghAqQglAlgkAsQgXAWgXAiIgMATQgQAaghAiIgPANQgeAagiAQQgOAGgQAFQgiAKgiACIgVABQgTAAgQgDg");
            this.shape_202.setTransform(-54.0645,-83.6928);
        
            this.shape_203 = new cjs.Shape();
            this.shape_203.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoIDCQgIg/AwheQAWgrArgrQAxgwBIgvQAfgUAggUQAVgLAagTQASgKARgLQAWgMARgJQAagNAcgHQBjgrCEAVQA5AEA2ATQBeAdBDBJQATAVAQAYQAMASAKATIASAnQgcAegdAVQgLAGgJAGQgqAcgRgGQgUgFgJgKQg2g4gmgJQgBAAgCgBQgzgVg+AUQgQACgQAFQhgAagjAmQgoAggmApQgYAVgXAiQgFAIgHAKQgRAaghAiQgHAGgHAHQgeAbgiAPQgOAHgQAEQgiAKgiACQghACgXgFQgWgFgPgLQgpgfgJg+g");
            this.shape_203.setTransform(-54.3577,-85.4528);
        
            this.shape_204 = new cjs.Shape();
            this.shape_204.graphics.f("#FFFFFF").s().p("AmxEvQgWgFgPgLQgpgfgJg+IAAAAQgIg/AwheQAWgrArgrQAxgwBIgvIA/goQAVgLAagTQASgKARgLIAngVQAagNAcgHQBjgrCEAVQA5AEA2ATQBeAdBDBJQATAVAQAYQAMASAKATIASAnQgcAegdAVIgUAMQgqAcgRgGQgUgFgJgKQg2g4gmgJIgDgBQgzgVg+AUQgQACgQAFQhgAagjAmQgoAggmApQgYAVgXAiIgMASQgRAaghAiIgOANQgeAbgiAPQgOAHgQAEQgiAKgiACIgUAAQgUAAgQgDg");
            this.shape_204.setTransform(-54.3577,-85.4528);
        
            this.shape_205 = new cjs.Shape();
            this.shape_205.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoLC3QgHg/AvhdQAXgsAsgpQAwgvBLgtQAfgUAhgTQAVgKAagSQASgJASgLQAWgKARgIQAbgMAcgGQBjgmCEAaQA5AGA1AUQBeAfBDBKQASAUAQAYQAMASAKATIATAnQgcAegdATQgKAIgKAGQgqAbgRgFQgVgEgIgKQg2g5glgJQgBgBgCAAQgzgYg9ARQgQACgRAEQhgAUglAhQgrAcgnAnQgZATgXAhQgFAIgHAKQgRAaghAiQgHAGgHAHQgeAbgiAPQgOAHgQAEQgiAKgjABQggACgYgFQgVgFgPgLQgpgggJg9g");
            this.shape_205.setTransform(-54.6511,-87.2603);
        
            this.shape_206 = new cjs.Shape();
            this.shape_206.graphics.f("#FFFFFF").s().p("Am1ElQgVgFgPgLQgpgggJg9IAAgBQgHg/AvhdQAXgsAsgpQAwgvBLgtIBAgnQAVgKAagSQASgJASgLIAngSQAbgMAcgGQBjgmCEAaQA5AGA1AUQBeAfBDBKQASAUAQAYQAMASAKATIATAnQgcAegdATIgUAOQgqAbgRgFQgVgEgIgKQg2g5glgJIgDgBQgzgYg9ARQgQACgRAEQhgAUglAhQgrAcgnAnQgZATgXAhIgMASQgRAaghAiIgOANQgeAbgiAPQgOAHgQAEQgiAKgjABIgRABQgVAAgSgEg");
            this.shape_206.setTransform(-54.6511,-87.2603);
        
            this.shape_207 = new cjs.Shape();
            this.shape_207.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoNCtQgIg/AwhdQAWgrAtgpQAxguBMgrQAfgTAigSQAWgKAagQQATgIARgKQAXgKARgHQAbgLAdgEQBjghCEAeQA5AIA1AVQBdAiBCBJQATAVAQAXQAMASAKAUIATAmQgcAdgdAVQgKAHgKAGQgpAbgSgEQgVgDgIgKQg3g6gjgKQgBgBgCAAQgygZg9ANQgQABgRADQhgAOgoAcQgtAYgoAkQgbATgXAgQgGAIgHAKQgRAZghAiQgGAHgHAHQgeAbgiAPQgOAHgQAEQgiAKgjAAQggACgYgGQgWgFgOgLQgpgggIg9g");
            this.shape_207.setTransform(-54.9511,-89.1039);
        
            this.shape_208 = new cjs.Shape();
            this.shape_208.graphics.f("#FFFFFF").s().p("Am4EbQgWgFgOgLQgpgggIg9IAAgBQgIg/AwhdQAWgrAtgpQAxguBMgrIBBglQAWgKAagQQATgIARgKIAogRQAbgLAdgEQBjghCEAeQA5AIA1AVQBdAiBCBJQATAVAQAXQAMASAKAUIATAmQgcAdgdAVIgUANQgpAbgSgEQgVgDgIgKQg3g6gjgKIgDgBQgygZg9ANQgQABgRADQhgAOgoAcQgtAYgoAkQgbATgXAgIgNASQgRAZghAiIgNAOQgeAbgiAPQgOAHgQAEQgiAKgjAAIgOAAQgYAAgSgEg");
            this.shape_208.setTransform(-54.9511,-89.1039);
        
            this.shape_209 = new cjs.Shape();
            this.shape_209.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoQCkQgIhAAwhdQAXgrAtgoQAygtBNgpQAggSAigRQAWgJAcgPQATgIARgJQAYgJARgGQAbgKAdgCQBkgcCEAjQA3AKA2AWQBcAjBBBKQATAVAQAXQAMASALATIATAmQgcAdgdAVQgKAHgKAGQgpAbgRgDQgWgCgIgKQg3g8gigLQgBAAgCgBQgygag8AKQgRAAgQACQhgAIgrAYQgwATgpAiQgcARgXAgQgGAHgHAKQgSAZggAjQgHAHgHAGQgeAcghAPQgPAHgQAEQghAJgjABQghABgXgGQgWgGgPgLQgpgggHg9g");
            this.shape_209.setTransform(-55.2511,-90.9602);
        
            this.shape_210 = new cjs.Shape();
            this.shape_210.graphics.f("#FFFFFF").s().p("Am7ESQgWgGgPgLQgpgggHg9IAAAAQgIhAAwhdQAXgrAtgoQAygtBNgpQAggSAigRQAWgJAcgPQATgIARgJIApgPQAbgKAdgCQBkgcCEAjQA3AKA2AWQBcAjBBBKQATAVAQAXIAXAlIATAmQgcAdgdAVIgUANQgpAbgRgDQgWgCgIgKQg3g8gigLIgDgBQgygag8AKQgRAAgQACQhgAIgrAYQgwATgpAiQgcARgXAgIgNARQgSAZggAjIgOANQgeAcghAPQgPAHgQAEQghAJgjABIgKAAQgaAAgUgFg");
            this.shape_210.setTransform(-55.2511,-90.9602);
        
            this.shape_211 = new cjs.Shape();
            this.shape_211.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoTCaQgHg/AvhcQAYgsAtgoQAzgsBOgnQAhgRAigPQAXgJAcgOQATgHASgIQAYgIARgGQAcgIAdgBQBkgXCEAoQA3ALA1AYQBbAmBCBJQATAVAQAXQALASALATIATAlQgbAegdAVQgKAHgKAGQgoAagSgCQgWgBgJgKQg2g8ghgMQgBgBgCgBQgygbg7AFQgRgBgQABQhhADgtAUQgzAPgqAfQgdAQgXAfQgGAHgIAKQgRAZggAjQgHAHgHAHQgeAbghAQQgPAGgQAEQghAJgkAAQggABgXgGQgWgGgPgLQgpghgHg8g");
            this.shape_211.setTransform(-55.5511,-92.8781);
        
            this.shape_212 = new cjs.Shape();
            this.shape_212.graphics.f("#FFFFFF").s().p("Am+EJQgWgGgPgLQgpghgHg8IAAgBQgHg/AvhcQAYgsAtgoQAzgsBOgnQAhgRAigPQAXgJAcgOQATgHASgIIApgOQAcgIAdgBQBkgXCEAoQA3ALA1AYQBbAmBCBJQATAVAQAXIAWAlIATAlQgbAegdAVIgUANQgoAagSgCQgWgBgJgKQg2g8ghgMIgDgCQgygbg7AFQgRgBgQABQhhADgtAUQgzAPgqAfQgdAQgXAfIgOARQgRAZggAjIgOAOQgeAbghAQQgPAGgQAEQghAJgkAAIgFAAQgdAAgVgFg");
            this.shape_212.setTransform(-55.5511,-92.8781);
        
            this.shape_213 = new cjs.Shape();
            this.shape_213.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoWCRQgHg/AvhcQAYgsAugnQAzgrBQglQAhgQAjgOQAYgIAbgNQAUgHASgHQAZgHARgFQAcgHAeAAQBjgRCFAtQA2ANA1AZQBbAnBBBKQASAUARAXQALATALASIAUAmQgbAdgeAVQgJAHgKAGQgoAagTgBQgWAAgIgKQg3g+gfgMQgCgBgBAAQgygfg7ADQgQgCgRAAQhhgDgvAQQg2AKgrAdQgeAOgYAfQgGAHgHAKQgSAZggAjQgHAHgHAGQgdAcgiAPQgOAHgQAEQghAJglgBQggAAgXgGQgWgGgOgLQgpgigHg7g");
            this.shape_213.setTransform(-55.845,-94.8336);
        
            this.shape_214 = new cjs.Shape();
            this.shape_214.graphics.f("#FFFFFF").s().p("AmLEGQggAAgXgGQgWgGgOgLQgpgigHg7IAAgBQgHg/AvhcQAYgsAugnQAzgrBQglQAhgQAjgOQAYgIAbgNQAUgHASgHIAqgMQAcgHAeAAQBjgRCFAtQA2ANA1AZQBbAnBBBKQASAUARAXIAWAlIAUAmQgbAdgeAVIgTANQgoAagTgBQgWAAgIgKQg3g+gfgMIgDgBQgygfg7ADQgQgCgRAAQhhgDgvAQQg2AKgrAdQgeAOgYAfIgNARQgSAZggAjIgOANQgdAcgiAPQgOAHgQAEQgfAIgjAAIgEAAg");
            this.shape_214.setTransform(-55.845,-94.8336);
        
            this.shape_215 = new cjs.Shape();
            this.shape_215.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoZCJQgHhAAwhbQAXgtAvglQA0gqBRgjQAigPAjgOQAYgHAcgMQAVgGASgHQAZgGARgDQAdgGAeACQBjgMCFAxQA2APA1AaQBZAqBBBJQATAUAQAXQAMASALATIAUAlQgbAegeAUQgJAHgKAGQgoAagSAAQgYABgHgKQg3g+gegNQgCgBgBgBQgxggg7gBQgQgCgRgBQhhgJgyALQg4AGgtAaQgfANgYAeQgGAHgIAKQgSAYggAkQgGAHgHAGQgeAdghAPQgOAGgRAEQggAJglgBQggAAgYgHQgVgGgPgLQgogjgHg7g");
            this.shape_215.setTransform(-56.1391,-96.8128);
        
            this.shape_216 = new cjs.Shape();
            this.shape_216.graphics.f("#FFFFFF").s().p("AmOD/QggAAgYgHQgVgGgPgLQgogjgHg7IAAAAQgHhAAwhbQAXgtAvglQA0gqBRgjQAigPAjgOQAYgHAcgMQAVgGASgHIAqgJQAdgGAeACQBjgMCFAxQA2APA1AaQBZAqBBBJQATAUAQAXIAXAlIAUAlQgbAegeAUIgTANQgoAagSAAQgYABgHgKQg3g+gegNIgDgCQgxggg7gBQgQgCgRgBQhhgJgyALQg4AGgtAaQgfANgYAeIgOARQgSAYggAkIgNANQgeAdghAPQgOAGgRAEQgdAIggAAIgIAAg");
            this.shape_216.setTransform(-56.1391,-96.8128);
        
            this.shape_217 = new cjs.Shape();
            this.shape_217.graphics.f().s("#F7BCC8").ss(4,1,1).p("AocCBQgHhAAwhbQAYgsAwglQA0gpBTghQAigPAkgMQAYgHAcgKQAVgGATgFQAZgGASgDQAcgEAfADQBjgGCFA1QA2ARA0AcQBZArBBBJQASAVAQAWQAMASALATIAUAmQgaAdgdAVQgKAHgKAGQgnAZgTABQgYACgIgKQg2g/gdgOQgCgBgBgBQgxghg6gFQgQgDgRgCQhhgPg1AHQg7ABguAYQggAMgYAdQgGAHgIAKQgSAYggAkQgGAHgHAGQgeAdghAPQgPAGgQAEQggAIglgBQghgBgXgGQgWgHgOgLQgpgjgGg7g");
            this.shape_217.setTransform(-56.4445,-98.8837);
        
            this.shape_218 = new cjs.Shape();
            this.shape_218.graphics.f("#FFFFFF").s().p("AmRD4QghgBgXgGQgWgHgOgLQgpgjgGg7IAAAAQgHhAAwhbQAYgsAwglQA0gpBTghQAigPAkgMQAYgHAcgKIAogLIArgJQAcgEAfADQBjgGCFA1QA2ARA0AcQBZArBBBJQASAVAQAWIAXAlIAUAmQgaAdgdAVIgUANQgnAZgTABQgYACgIgKQg2g/gdgOIgDgCQgxghg6gFIghgFQhhgPg1AHQg7ABguAYQggAMgYAdIgOARQgSAYggAkIgNANQgeAdghAPQgPAGgQAEQgcAHghAAIgIAAg");
            this.shape_218.setTransform(-56.4445,-98.8837);
        
            this.shape_219 = new cjs.Shape();
            this.shape_219.graphics.f().s("#F7BCC8").ss(4,1,1).p("AofB6QgGg/AwhbQAXgtAxgkQA1goBUgfQAjgNAkgLQAZgHAcgJQAWgFASgFQAagEASgCQAdgDAfAEQBjgBCGA6QA0ATA1AdQBYAuBABIQATAUAQAXQAMASALATIAUAlQgaAegdAUQgKAHgKAGQgnAZgTACQgYADgIgKQg2hAgcgOQgCgBgBgBQgxgkg5gHQgQgFgRgDQhigUg3ACQg9gDgwAVQghALgZAcQgFAHgIAKQgTAXgfAlQgHAHgGAGQgeAdgiAPQgOAGgQAEQggAIgmgCQggAAgXgHQgWgHgOgMQgpgjgGg6g");
            this.shape_219.setTransform(-56.7388,-101.0606);
        
            this.shape_220 = new cjs.Shape();
            this.shape_220.graphics.f("#FFFFFF").s().p("AmVDyQggAAgXgHQgWgHgOgMQgpgjgGg6IAAgBQgGg/AwhbQAXgtAxgkQA1goBUgfQAjgNAkgLQAZgHAcgJIAogKIAsgGQAdgDAfAEQBjgBCGA6QA0ATA1AdQBYAuBABIQATAUAQAXIAXAlIAUAlQgaAegdAUIgUANQgnAZgTACQgYADgIgKQg2hAgcgOIgDgCQgxgkg5gHIghgIQhigUg3ACQg9gDgwAVQghALgZAcIgNARIgyA8IgNANQgeAdgiAPQgOAGgQAEQgbAGgeAAIgNAAg");
            this.shape_220.setTransform(-56.7388,-101.0606);
        
            this.shape_221 = new cjs.Shape();
            this.shape_221.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoiB0QgGhAAwhbQAYgsAxgjQA2gnBVgdQAjgNAlgKQAagGAdgIQAVgEATgEQAbgEASgBQAdgBAfAGQBkAECFA+QA0AVA1AeQBWAwBABHQATAVAQAXQAMASALATIAVAlQgaAdgdAVQgKAHgKAGQgmAZgUACQgYAEgIgJQg2hBgbgPQgCgBgBgBQgwgmg5gLQgRgFgQgEQhigag6gDQhAgHgwASQgjAKgZAbQgGAHgIAKQgSAXggAlQgGAHgHAHQgdAdgiAPQgOAGgQADQggAIgmgCQgggBgYgHQgVgHgOgMQgpgkgGg5g");
            this.shape_221.setTransform(-57.0333,-103.2689);
        
            this.shape_222 = new cjs.Shape();
            this.shape_222.graphics.f("#FFFFFF").s().p("AmYDtQgggBgYgHQgVgHgOgMQgpgkgGg5IAAgBQgGhAAwhbQAYgsAxgjQA2gnBVgdQAjgNAlgKIA3gOIAogIQAbgEASgBQAdgBAfAGQBkAECFA+QA0AVA1AeQBWAwBABHQATAVAQAXIAXAlIAVAlQgaAdgdAVIgUANQgmAZgUACQgYAEgIgJQg2hBgbgPIgDgCQgwgmg5gLIghgJQhigag6gDQhAgHgwASQgjAKgZAbIgOARIgyA8IgNAOQgdAdgiAPQgOAGgQADQgZAGgdAAIgQAAg");
            this.shape_222.setTransform(-57.0333,-103.2689);
        
            this.shape_223 = new cjs.Shape();
            this.shape_223.graphics.f().s("#F7BCC8").ss(4,1,1).p("AokBrQgGhAAwhbQAXgsAygjQA3gmBWgaQAkgMAlgJQAbgFAdgHQAWgDATgEQAbgDASAAQAdAAAgAHQBkAKCFBDQA0AWA0AgQBWAyBABHQASAVARAXQAMASALASIAVAlQgZAegeAUQgKAHgKAGQgmAZgUADQgZAFgHgKQg3hCgZgPQgBgBgCgBQgwgng4gPQgRgGgQgFQhjggg8gHQhDgMgxAQQgkAIgZAbQgGAHgIAKQgTAXgfAkQgGAIgHAGQgdAegiAOQgOAHgQADQggAHgmgCQghgCgXgHQgWgHgNgMQgpgkgFg5g");
            this.shape_223.setTransform(-57.3333,-105.2277);
        
            this.shape_224 = new cjs.Shape();
            this.shape_224.graphics.f("#FFFFFF").s().p("AGBDkQg3hCgZgPIgDgCQgwgng4gPIghgLQhjggg8gHQhDgMgxAQQgkAIgZAbIgOARIgyA7IgNAOQgdAegiAOQgOAHgQADQggAHgmgCQghgCgXgHQgWgHgNgMQgpgkgFg5IAAgBQgGhAAwhbQAXgsAygjQA3gmBWgaQAkgMAlgJIA4gMIApgHQAbgDASAAQAdAAAgAHQBkAKCFBDQA0AWA0AgQBWAyBABHQASAVARAXIAXAkIAVAlQgZAegeAUIgUANQgmAZgUADIgOACQgNAAgFgHg");
            this.shape_224.setTransform(-57.3333,-105.2277);
        
            this.shape_225 = new cjs.Shape();
            this.shape_225.graphics.f().s("#F7BCC8").ss(4,1,1).p("AonBXQgGhAAwhbQAYgsAygiQA4glBYgYQAkgLAmgIQAbgFAdgFQAWgDAUgDQAbgCASABQAeABAhAJQBjAPCFBHQA0AYA0AiQBVAzA/BIQATAVAQAWQAMASALATIAWAlQgZAdgeAUQgKAHgKAGQgmAZgUAEQgZAGgHgKQg3hDgYgQQgBgBgCgBQgwgpg3gSQgRgHgQgGQhjgmg/gLQhFgRgzAOQgkAHgaAaQgGAGgJAKQgSAXgfAlQgHAHgGAHQgeAeghAOQgOAHgRADQgfAHgngDQgggCgXgIQgWgHgNgMQgpglgFg4g");
            this.shape_225.setTransform(-57.633,-106.0755);
        
            this.shape_226 = new cjs.Shape();
            this.shape_226.graphics.f("#FFFFFF").s().p("AGEDuQg3hDgYgQIgDgCQgwgpg3gSIghgNQhjgmg/gLQhFgRgzAOQgkAHgaAaIgPAQIgxA8IgNAOQgeAeghAOQgOAHgRADQgfAHgngDQgggCgXgIQgWgHgNgMQgpglgFg4IAAgBQgGhAAwhbQAYgsAygiQA4glBYgYQAkgLAmgIIA4gKIAqgGQAbgCASABQAeABAhAJQBjAPCFBHQA0AYA0AiQBVAzA/BIQATAVAQAWIAXAlIAWAlQgZAdgeAUIgUANQgmAZgUAEQgJACgHAAQgMAAgEgGg");
            this.shape_226.setTransform(-57.633,-106.0755);
        
            this.shape_227 = new cjs.Shape();
            this.shape_227.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoqBDQgGhAAxhaQAXgsA0ghQA4gkBZgXQAlgKAmgHQAcgEAdgEQAXgCATgCQAcgBATACQAdACAiAKQBjAUCGBMQAyAaA0AjQBVA2A/BHQASAVARAWQAMASALATIAWAkQgZAegeAUQgKAHgKAGQglAYgVAFQgZAHgHgJQg3hEgXgRQgBgBgCgBQgvgrg3gWQgRgIgQgGQhjgshCgQQhIgVg0ALQglAGgaAZQgGAHgJAKQgTAWgfAlQgGAHgGAHQgeAeghAPQgOAGgRADQgfAHgngEQgggCgYgIQgVgHgNgMQgpgmgFg4g");
            this.shape_227.setTransform(-57.928,-106.9554);
        
            this.shape_228 = new cjs.Shape();
            this.shape_228.graphics.f("#FFFFFF").s().p("AGHD5Qg3hEgXgRIgDgCQgvgrg3gWIghgOQhjgshCgQQhIgVg0ALQglAGgaAZIgPARIgyA7IgMAOQgeAeghAPQgOAGgRADQgfAHgngEQgggCgYgIQgVgHgNgMQgpgmgFg4IAAgBQgGhAAxhaQAXgsA0ghQA4gkBZgXQAlgKAmgHIA5gIIAqgEQAcgBATACQAdACAiAKQBjAUCGBMQAyAaA0AjQBVA2A/BHQASAVARAWIAXAlIAWAkQgZAegeAUIgUANQglAYgVAFQgKADgIAAQgKAAgEgFg");
            this.shape_228.setTransform(-57.928,-106.9554);
        
            this.shape_229 = new cjs.Shape();
            this.shape_229.graphics.f().s("#F7BCC8").ss(4,1,1).p("AotAwQgFhAAwhbQAYgsA0ggQA5gjBagVQAmgJAmgGQAcgDAegDQAYgCATgBQAdAAASADQAeAEAiALQBjAZCGBRQAyAbA0AkQBTA4A/BHQATAVAQAXQAMASAMASIAVAlQgYAdgeAUQgKAHgKAGQglAYgUAGQgbAIgHgKQg2hEgWgSQgBgBgCgBQgvgtg2gZQgRgJgQgHQhkgyhEgVQhKgYg2AJQgmADgaAZQgGAGgJAKQgTAWgfAmQgGAHgHAHQgdAeghAPQgOAGgRADQgfAGgngDQghgDgXgIQgWgIgNgMQgogmgFg4g");
            this.shape_229.setTransform(-58.2283,-107.8421);
        
            this.shape_230 = new cjs.Shape();
            this.shape_230.graphics.f("#FFFFFF").s().p("AGJECQg2hEgWgSIgDgCQgvgtg2gZIghgQQhkgyhEgVQhKgYg2AJQgmADgaAZIgPAQIgyA8IgNAOQgdAeghAPQgOAGgRADQgfAGgngDQghgDgXgIQgWgIgNgMQgogmgFg4IAAAAQgFhAAwhbQAYgsA0ggQA5gjBagVQAmgJAmgGIA6gGIArgDQAdAAASADQAeAEAiALQBjAZCGBRQAyAbA0AkQBTA4A/BHQATAVAQAXIAYAkIAVAlQgYAdgeAUIgUANQglAYgUAGQgMAEgIAAQgKAAgEgGg");
            this.shape_230.setTransform(-58.2283,-107.8421);
        
            this.shape_231 = new cjs.Shape();
            this.shape_231.graphics.f().s("#F7BCC8").ss(4,1,1).p("AowAdQgFhAAwhbQAYgsA1gfQA6giBbgTQAmgIAngFQAdgCAegDQAYAAAUgBQAdABATADQAeAGAhAMQBkAfCGBWQAyAdAzAlQBTA6A/BHQASAVAQAWQAMASAMASIAWAlQgYAdgeAUQgKAHgKAGQgkAYgVAHQgbAIgHgJQg2hFgVgSQgBgCgBgBQgvgug2gdQgRgKgQgIQhkg3hGgaQhOgcg2AGQgoACgaAYQgHAGgJAKQgTAVgfAmQgGAIgGAHQgdAeghAPQgOAGgRADQgfAFgogDQgggDgXgJQgWgIgNgMQgogngFg3g");
            this.shape_231.setTransform(-58.5236,-108.7686);
        
            this.shape_232 = new cjs.Shape();
            this.shape_232.graphics.f("#FFFFFF").s().p("AGMENQg2hFgVgSIgCgDQgvgug2gdIghgSQhkg3hGgaQhOgcg2AGQgoACgaAYIgQAQIgyA7IgMAPQgdAeghAPQgOAGgRADQgfAFgogDQgggDgXgJQgWgIgNgMQgogngFg3IAAAAQgFhAAwhbQAYgsA1gfQA6giBbgTQAmgIAngFIA7gFIAsgBQAdABATADQAeAGAhAMQBkAfCGBWQAyAdAzAlQBTA6A/BHQASAVAQAWIAYAkIAWAlQgYAdgeAUIgUANQgkAYgVAHQgNAEgIAAQgJAAgEgFg");
            this.shape_232.setTransform(-58.5236,-108.7686);
        
            this.shape_233 = new cjs.Shape();
            this.shape_233.graphics.f().s("#F7BCC8").ss(4,1,1).p("AozAJQgFg/AxhbQAYgsA1gfQA6ghBegQQAmgIAogDQAdgCAegBQAZgBAUABQAdACATAEQAeAHAiANQBkAkCHBbQAwAfA0AmQBSA8A+BHQASAVARAWQAMASAMASIAWAlQgYAdgeAUQgJAHgKAGQglAXgVAIQgbAKgHgJQg2hHgUgTQgBgBgBgCQgvgvg1ghQgRgKgRgKQhjg9hJgdQhRgig3AEQgpABgaAYQgHAGgJAJQgTAVgfAnQgGAHgGAHQgdAfghAOQgPAGgQADQgfAFgogEQghgDgXgJQgVgIgNgMQgpgngEg3g");
            this.shape_233.setTransform(-58.8234,-109.6993);
        
            this.shape_234 = new cjs.Shape();
            this.shape_234.graphics.f("#FFFFFF").s().p("AGPEYQg2hHgUgTIgCgDQgvgvg1ghIgigUQhjg9hJgdQhRgig3AEQgpABgaAYIgQAPQgTAVgfAnIgMAOQgdAfghAOQgPAGgQADQgfAFgogEQghgDgXgJQgVgIgNgMQgpgngEg3IAAgBQgFg/AxhbQAYgsA1gfQA6ghBegQQAmgIAogDIA7gDIAtAAQAdACATAEQAeAHAiANQBkAkCHBbQAwAfA0AmQBSA8A+BHQASAVARAWIAYAkIAWAlQgYAdgeAUIgTANQglAXgVAIQgOAFgJAAQgIAAgDgEg");
            this.shape_234.setTransform(-58.8234,-109.6993);
        
            this.shape_235 = new cjs.Shape();
            this.shape_235.graphics.f().s("#F7BCC8").ss(4,1,1).p("Ao1gIQgFhBAwhaQAYgsA3geQA6ggBfgPQAngGAogDQAegBAeAAQAZAAAUACQAeACATAFQAfAIAiAQQBkApCHBfQAwAgA0ApQBRA9A9BHQATAVAQAWQAMASAMASIAXAkQgYAegeAUQgJAGgKAGQgkAXgWAJQgbALgHgJQg3hIgSgTQgBgBgBgCQgvgyg0gjQgRgMgRgKQhkhDhLghQhTgng5ABQgqAAgbAXQgGAGgJAKQgUAUgeAnQgGAHgGAHQgeAfghAOQgOAGgRADQgeAFgogEQghgEgXgJQgVgIgNgMQgpgogDg1g");
            this.shape_235.setTransform(-59.1234,-110.6923);
        
            this.shape_236 = new cjs.Shape();
            this.shape_236.graphics.f("#FFFFFF").s().p("AGSEjQg3hIgSgTIgCgDQgvgyg0gjIgigWQhkhDhLghQhTgng5ABQgqAAgbAXIgPAQQgUAUgeAnIgMAOQgeAfghAOQgOAGgRADQgeAFgogEQghgEgXgJQgVgIgNgMQgpgogDg1IAAgBQgFhBAwhaQAYgsA3geQA6ggBfgPQAngGAogDQAegBAeAAIAtACQAeACATAFQAfAIAiAQQBkApCHBfQAwAgA0ApQBRA9A9BHQATAVAQAWIAYAkIAXAkQgYAegeAUIgTAMQgkAXgWAJQgPAGgIAAQgIAAgDgEg");
            this.shape_236.setTransform(-59.1234,-110.6923);
        
            this.shape_237 = new cjs.Shape();
            this.shape_237.graphics.f().s("#F7BCC8").ss(4,1,1).p("AI8DUIg0hPQhJhfhnhSQj7jKiVguQgggKg/gDQhIgDhFAKQi5AYgyBcQgwBbAEBAQADA1ApApQAaAaBAAIQA/AIAngQQAogRAigrQAtg5AVgRQBkhUFFDxQA2AoAuA2QAUAXA0BFQAMAQBQgzQApgaAlgdg");
            this.shape_237.setTransform(-59.1691,-111.6964);
        
            this.shape_238 = new cjs.Shape();
            this.shape_238.graphics.f("#FFFFFF").s().p("AGSEuQg0hFgUgXQgug2g2goQlFjxhkBUQgVARgtA5QgiArgoARQgnAQg/gIQhAgIgagaQgpgpgDg1QgEhAAwhbQAyhcC5gYQBFgKBIADQA/ADAgAKQCVAuD7DKQBnBSBJBfIA0BPQglAdgpAaQg9AngVAAQgHAAgDgEg");
            this.shape_238.setTransform(-59.1691,-111.6964);
        
            this.shape_239 = new cjs.Shape();
            this.shape_239.graphics.f().s("#F7BCC8").ss(4,1,1).p("Ao5grQgEhDAxhYQA6hGBSgWQAqgMA2gEQAkgEAlAAQAhAAAhACQA+AEAgALQAFACAFABQA/AYBPAxQAwAeA4AoQBBAuBLA9QAeAYAcAYQBDA9A0BFQAIALAIALIAlA5QgNALgNAKQgZASgZAQQgOAJgLAHQg5AhgKgNQgIgJgGgIQgog2gTgUQgCgDgCgCQgvgzgygmQhRg9hGgpQhqg/hLgNQg7gKgjAZQgVAPguA1QgCACgCADQghAkglAOQgnAOg+gJQgggFgXgKQgUgJgMgNQgIgHgGgIQgbgkgCgrg");
            this.shape_239.setTransform(-59.115,-112.2533);
        
            this.shape_240 = new cjs.Shape();
            this.shape_240.graphics.f("#FFFFFF").s().p("AGTE0IgOgRQgog2gTgUIgEgFQgvgzgygmQhRg9hGgpQhqg/hLgNQg7gKgjAZQgVAPguA1IgEAFQghAkglAOQgnAOg+gJQgggFgXgKQgUgJgMgNIgOgPQgbgkgCgrQgEhDAxhYQA6hGBSgWQAqgMA2gEQAkgEAlAAQAhAAAhACQA+AEAgALIAKADQA/AYBPAxQAwAeA4AoQBBAuBLA9QAeAYAcAYQBDA9A0BFIAQAWIAlA5IgaAVIgyAiIgZAQQgpAXgRAAQgGAAgDgDg");
            this.shape_240.setTransform(-59.115,-112.2533);
        
            this.shape_241 = new cjs.Shape();
            this.shape_241.graphics.f().s("#F7BCC8").ss(4,1,1).p("Ao4g8QgDhEAyhWQA7hEBSgUQAqgKA1gCQAkgDAlABQAgABAhAEQA9AGAgAMQAEABAFACQA/AbBNAwQAwAfA4AoQA/AvBNA+QAdAYAcAYQBDA9A1BFQAIALAHALIAmA5QgMALgMALQgZARgZAQQgOAJgLAHQg4AhgLgMQgIgIgHgIQgng1gUgWQgCgCgDgDQgvgzgxglIAAAAQhQg8hIgrQhog9hNgQQg7gLgkAWQgVAOguAxQgCACgCACQghAhglAMQgnALg8gKQgggGgXgKQgUgJgMgOQgHgHgFgIQgbgkgCgsg");
            this.shape_241.setTransform(-59.0364,-112.856);
        
            this.shape_242 = new cjs.Shape();
            this.shape_242.graphics.f("#FFFFFF").s().p("AGTE6IgPgQQgng1gUgWIgFgFQgvgzgxglIAAAAQhQg8hIgrQhog9hNgQQg7gLgkAWQgVAOguAxIgEAEQghAhglAMQgnALg8gKQgggGgXgKQgUgJgMgOIgMgPQgbgkgCgsQgDhEAyhWQA7hEBSgUQAqgKA1gCQAkgDAlABQAgABAhAEQA9AGAgAMIAJADQA/AbBNAwQAwAfA4AoQA/AvBNA+QAdAYAcAYQBDA9A1BFIAPAWIAmA5IgYAWQgZARgZAQIgZAQQgpAYgRAAQgGAAgDgDg");
            this.shape_242.setTransform(-59.0364,-112.856);
        
            this.shape_243 = new cjs.Shape();
            this.shape_243.graphics.f().s("#F7BCC8").ss(4,1,1).p("Ao2hMQgDhGAzhTQA9hDBRgRQAqgJA1AAQAjgBAlACQAgADAgAEQA8AIAgANQAEABAFACQBAAdBKAwQAvAhA3AoQA/AvBNA/QAeAYAcAYQBCA8A2BGQAIALAIALIAmA5QgLALgLALQgZASgaAQQgNAJgMAHQg3AhgMgLQgIgIgHgIQgmg0gWgWQgCgDgCgCQgxg0gwgkIAAgBQhPg7hKgsQhmg8hPgTQg6gLglATQgWAMgtAtQgCABgCACQgiAegkAKQgoAJg7gLQgfgHgWgLQgUgJgLgOQgHgIgGgIQgZgkgCgsg");
            this.shape_243.setTransform(-58.9583,-113.5268);
        
            this.shape_244 = new cjs.Shape();
            this.shape_244.graphics.f("#FFFFFF").s().p("AGTFBQgIgIgHgIQgmg0gWgWIgEgFQgxg0gwgkIAAgBQhPg7hKgsQhmg8hPgTQg6gLglATQgWAMgtAtIgEADQgiAegkAKQgoAJg7gLQgfgHgWgLQgUgJgLgOIgNgQQgZgkgCgsQgDhGAzhTQA9hDBRgRQAqgJA1AAQAjgBAlACQAgADAgAEQA8AIAgANIAJADQBAAdBKAwQAvAhA3AoQA/AvBNA/QAeAYAcAYQBCA8A2BGIAQAWIAmA5IgWAWQgZASgaAQIgZAQQgqAZgQAAQgGAAgDgDg");
            this.shape_244.setTransform(-58.9583,-113.5268);
        
            this.shape_245 = new cjs.Shape();
            this.shape_245.graphics.f().s("#F7BCC8").ss(4,1,1).p("Ao1hcQgChHA0hRQA/hBBRgOQApgIA0ACQAkAAAkAEQAfADAgAGQA8AKAfANQAEACAFACQBAAfBIAwQAuAhA3AqQA+AvBOA/QAdAYAdAZQBCA8A2BGQAIALAIALIAmA5QgKALgKALQgYASgaAQQgNAJgMAHQg3AhgMgKQgJgHgGgIQgngzgXgXQgCgDgCgCQgyg1gvgjIAAgBQhOg7hLgtQhlg7hRgVQg5gMgmAQQgXAKgtApQgCABgCACQgiAbgkAIQgoAHg5gNQgfgHgWgMQgSgJgMgPQgHgHgFgIQgZglgCgtg");
            this.shape_245.setTransform(-58.9057,-114.2301);
        
            this.shape_246 = new cjs.Shape();
            this.shape_246.graphics.f("#FFFFFF").s().p("AGUFIQgJgHgGgIQgngzgXgXIgEgFQgyg1gvgjIAAgBQhOg7hLgtQhlg7hRgVQg5gMgmAQQgXAKgtApIgEADQgiAbgkAIQgoAHg5gNQgfgHgWgMQgSgJgMgPIgMgPQgZglgCgtIAAAAQgChHA0hRQA/hBBRgOQApgIA0ACQAkAAAkAEQAfADAgAGQA8AKAfANIAJAEQBAAfBIAwQAuAhA3AqQA+AvBOA/IA6AxQBCA8A2BGIAQAWIAmA5IgUAWQgYASgaAQIgZAQQgrAZgRAAQgFAAgCgCg");
            this.shape_246.setTransform(-58.9057,-114.2301);
        
            this.shape_247 = new cjs.Shape();
            this.shape_247.graphics.f().s("#F7BCC8").ss(4,1,1).p("AozhrQgDhIA1hPQBCg/BPgMQApgGA1AEQAiABAkAGQAfAEAfAHQA7ALAfAOQAFACAEACQBAAjBGAvQAuAiA3AqQA9AvBOBAQAeAYAcAZQBCA8A3BHQAIALAIALIAmA5QgJALgIALQgZASgaARQgNAIgMAIQg3AggNgJQgJgGgGgJQglgxgZgYQgCgDgCgCQg0g1gugjIAAgBQhMg6hOguQhig6hUgYQg4gMgmANQgYAHgtAlQgCACgCABQgiAYgkAGQgoAEg4gNQgfgJgVgMQgSgKgLgOQgHgIgFgIQgYgmgBgsg");
            this.shape_247.setTransform(-58.8306,-115.0036);
        
            this.shape_248 = new cjs.Shape();
            this.shape_248.graphics.f("#FFFFFF").s().p("AGTFQQgJgGgGgJQglgxgZgYIgEgFQg0g1gugjIAAgBQhMg6hOguQhig6hUgYQg4gMgmANQgYAHgtAlIgEADQgiAYgkAGQgoAEg4gNQgfgJgVgMQgSgKgLgOIgMgQQgYgmgBgsIAAgBQgDhIA1hPQBCg/BPgMQApgGA1AEQAiABAkAGQAfAEAfAHQA7ALAfAOIAJAEQBAAjBGAvIBlBMQA9AvBOBAQAeAYAcAZQBCA8A3BHIAQAWIAmA5IgRAWQgZASgaARIgZAQQgrAZgRAAQgFAAgDgCg");
            this.shape_248.setTransform(-58.8306,-115.0036);
        
            this.shape_249 = new cjs.Shape();
            this.shape_249.graphics.f().s("#F7BCC8").ss(4,1,1).p("Aoyh5QgBhKA1hNQBEg9BPgKQApgEA0AGQAiACAjAHQAfAGAfAHQA5AOAfAPQAEACAFACQBAAlBEAvQAtAjA3ArQA8AvBPBBQAdAXAdAaQBBA7A4BIQAIALAIALIAnA5QgIALgIAMQgYASgaAQQgOAJgLAHQg3AggNgIQgKgGgGgIQglgxgZgZQgCgCgDgDQg1g1gsgiIgBgBQhLg6hPgvQhhg6hWgZQg3gNgnAKQgYAGgtAhQgCABgDABQgiAVgjAEQgpACg2gPQgegJgVgNQgSgJgLgQQgGgIgFgIQgYgngBgsg");
            this.shape_249.setTransform(-58.777,-115.8174);
        
            this.shape_250 = new cjs.Shape();
            this.shape_250.graphics.f("#FFFFFF").s().p("AGUFYQgKgGgGgIQglgxgZgZIgFgFQg1g1gsgiIgBgBQhLg6hPgvQhhg6hWgZQg3gNgnAKQgYAGgtAhIgFACQgiAVgjAEQgpACg2gPQgegJgVgNQgSgJgLgQQgGgIgFgIQgYgngBgsQgBhKA1hNQBEg9BPgKQApgEA0AGQAiACAjAHIA+ANQA5AOAfAPIAJAEQBAAlBEAvIBkBOQA8AvBPBBIA6AxQBBA7A4BIIAQAWIAnA5IgQAXQgYASgaAQIgZAQQgsAagRAAQgFAAgCgCg");
            this.shape_250.setTransform(-58.777,-115.8174);
        
            this.shape_251 = new cjs.Shape();
            this.shape_251.graphics.f().s("#F7BCC8").ss(4,1,1).p("AowiIQgBhLA2hKQBGg8BOgHQApgDAzAIQAiAEAjAIQAfAHAeAJQA5APAeAQQAEACAFACQBAAnBCAwQAsAkA2ArQA8AvBPBCQAeAXAcAaQBBA7A5BIQAIALAIALIAnA5QgGALgHAMQgZASgaARQgNAIgMAIQg2AggOgHQgKgFgGgIQgkgxgbgZQgCgDgCgCQg3g2grgiQgBAAAAgBQhKg5hRgwQhfg5hYgbQg2gOgoAHQgZAEgsAdQgDABgCAAQgiASgkADQgogBg1gQQgegLgUgLQgSgLgLgQQgGgIgFgJQgWgngBgsg");
            this.shape_251.setTransform(-58.7259,-116.6579);
        
            this.shape_252 = new cjs.Shape();
            this.shape_252.graphics.f("#FFFFFF").s().p("AGUFhQgKgFgGgIQgkgxgbgZIgEgFQg3g2grgiIgBgBQhKg5hRgwQhfg5hYgbQg2gOgoAHQgZAEgsAdIgFABQgiASgkADQgogBg1gQQgegLgUgLQgSgLgLgQIgLgRQgWgngBgsIAAgBQgBhLA2hKQBGg8BOgHQApgDAzAIQAiAEAjAIQAfAHAeAJQA5APAeAQIAJAEQBAAnBCAwIBiBPQA8AvBPBCQAeAXAcAaQBBA7A5BIIAQAWIAnA5IgNAXQgZASgaARIgZAQQgsAagRAAQgEAAgDgBg");
            this.shape_252.setTransform(-58.7259,-116.6579);
        
            this.shape_253 = new cjs.Shape();
            this.shape_253.graphics.f().s("#F7BCC8").ss(4,1,1).p("AouiWQgBhNA3hIQBIg6BOgEQAogCAzAKQAhAFAjAKQAeAJAeAJQA4ARAeARQAEACAEACQBBAqA/AvQAsAlA2AsQA7AvBQBCQAdAYAdAaQBBA6A6BJQAIALAIALIAnA5QgGAMgFAMQgZASgaARQgNAIgMAIQg2AggOgHQgLgEgGgIQgjgvgcgbQgDgCgCgDQg4g2gqgiQgBAAAAAAQhIg5hUgxQhdg4hageQg1gOgpAEQgZACgtAZQgCAAgDABQgiAPgkAAQgogDg0gRQgdgLgUgNQgRgLgKgQQgGgJgFgJQgWgnAAgsg");
            this.shape_253.setTransform(-58.6509,-117.5118);
        
            this.shape_254 = new cjs.Shape();
            this.shape_254.graphics.f("#FFFFFF").s().p("AGVFpQgLgEgGgIQgjgvgcgbIgFgFQg4g2gqgiIgBAAQhIg5hUgxQhdg4hageQg1gOgpAEQgZACgtAZIgFABQgiAPgkAAQgogDg0gRQgdgLgUgNQgRgLgKgQIgLgSQgWgnAAgsIAAgBQgBhNA3hIQBIg6BOgEQAogCAzAKQAhAFAjAKIA8ASQA4ARAeARIAIAEQBBAqA/AvIBiBRQA7AvBQBCQAdAYAdAaQBBA6A6BJIAQAWIAnA5IgLAYQgZASgaARIgZAQQgtAagRAAIgGgBg");
            this.shape_254.setTransform(-58.6509,-117.5118);
        
            this.shape_255 = new cjs.Shape();
            this.shape_255.graphics.f().s("#F7BCC8").ss(4,1,1).p("AotijQAAhPA3hGQBKg4BOgCQAoAAAyAMQAhAGAiAMQAfAKAdAKQA2ATAeARQAEACAFADQBBAsA9AvQArAmA2AsQA6AwBQBCQAdAYAeAbQBAA6A6BJQAIALAIALIAoA5QgFAMgEAMQgZASgaARQgNAJgMAHQg1AggPgGQgLgEgGgHQgjgvgdgbQgDgDgCgCQg5g3gqghQAAAAgBAAQhHg4hVgzQhbg2hcghQg0gPgrABQgZAAgtAVQgCAAgDABQgjAMgjgCQgogFgzgRQgcgNgUgOQgQgLgLgRQgFgJgFgJQgVgoAAgsg");
            this.shape_255.setTransform(-58.575,-118.4106);
        
            this.shape_256 = new cjs.Shape();
            this.shape_256.graphics.f("#FFFFFF").s().p("AGVFyQgLgEgGgHQgjgvgdgbIgFgFQg5g3gqghIgBAAQhHg4hVgzQhbg2hcghQg0gPgrABQgZAAgtAVIgFABQgjAMgjgCQgogFgzgRQgcgNgUgOQgQgLgLgRIgKgSQgVgoAAgsQAAhPA3hGQBKg4BOgCQAoAAAyAMQAhAGAiAMIA8AUQA2ATAeARIAJAFQBBAsA9AvQArAmA2AsICKByQAdAYAeAbQBAA6A6BJIAQAWIAoA5IgJAYQgZASgaARIgZAQQgtAbgSAAIgFgBg");
            this.shape_256.setTransform(-58.575,-118.4106);
        
            this.shape_257 = new cjs.Shape();
            this.shape_257.graphics.f().s("#F7BCC8").ss(4,1,1).p("AosiyQABhQA4hDQBMg3BNABQAoABAyAOQAgAIAiANQAeALAdALQA2AVAdASQAEACAEADQBCAvA7AvQAqAnA1AsQA6AwBRBDQAdAYAdAbQBAA5A7BKQAJALAIALIAoA5QgEAMgEAMQgYATgbARQgNAIgMAIQg0AggQgFQgLgDgGgIQgigugfgcQgCgCgDgDQg6g3gpggQAAgBgBAAQhFg3hXg0Qhag1hegkQg0gPgrgCQgagCgsARQgDAAgDAAQgiAJgjgDQgpgIgxgTQgcgNgTgPQgQgLgKgSQgGgIgEgJQgVgpAAgsg");
            this.shape_257.setTransform(-58.525,-119.2932);
        
            this.shape_258 = new cjs.Shape();
            this.shape_258.graphics.f("#FFFFFF").s().p("AGVF7QgLgDgGgIQgigugfgcIgFgFQg6g3gpggIgBgBQhFg3hXg0Qhag1hegkQg0gPgrgCQgagCgsARIgGAAQgiAJgjgDQgpgIgxgTQgcgNgTgPQgQgLgKgSIgKgRQgVgpAAgsIAAgBQABhQA4hDQBMg3BNABQAoABAyAOQAgAIAiANIA7AWQA2AVAdASIAIAFQBCAvA7AvQAqAnA1AsICLBzIA6AzQBAA5A7BKIARAWIAoA5IgIAYQgYATgbARIgZAQQgtAcgSAAIgFgBg");
            this.shape_258.setTransform(-58.525,-119.2932);
        
            this.shape_259 = new cjs.Shape();
            this.shape_259.graphics.f().s("#F7BCC8").ss(4,1,1).p("Aoqi/QABhSA5hBQBOg1BNAEQAnACAyAQQAgAJAhAOQAeANAcAMQA1AWAdAUQAEACAEACQBCAyA4AvQAqAoA1AtQA5AvBRBEQAdAZAeAaQBAA6A8BKQAIALAIALIAoA5QgCAMgDANQgZASgaARQgNAJgMAHQg0AggQgEQgMgDgGgIQghgsgggdQgDgCgCgDQg8g4gogfQAAgBgBAAQhEg3hZg0QhYg1hggmQgzgPgsgGQgbgEgsANQgCAAgDAAQgjAGgjgFQgpgKgvgUQgcgPgTgPQgPgLgKgTQgFgIgFgKQgTgoAAgtg");
            this.shape_259.setTransform(-58.4506,-120.1915);
        
            this.shape_260 = new cjs.Shape();
            this.shape_260.graphics.f("#FFFFFF").s().p("AGWGEQgMgDgGgIQghgsgggdIgFgFQg8g4gogfIgBgBQhEg3hZg0QhYg1hggmQgzgPgsgGQgbgEgsANIgFAAQgjAGgjgFQgpgKgvgUQgdgPgSgPQgPgLgKgTIgKgSQgTgoAAgtIAAAAQABhSA5hBQBOg1BNAEQAnACAyAQQAgAJAhAOIA6AZQA1AWAdAUIAIAEQBCAyA4AvQAqAoA1AtICKBzIA7AzQBAA6A8BKIAQAWIAoA5IgFAZQgZASgaARIgZAQQgvAcgRAAIgEAAg");
            this.shape_260.setTransform(-58.4506,-120.1915);
        
            this.shape_261 = new cjs.Shape();
            this.shape_261.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoojNQABhTA6g/QBRg0BLAHQAnAEAyASQAfAKAhAQQAeAOAbANQA0AYAdAUQAEADAEACQBCA0A2AvQApApA1AuQA4AvBSBFQAdAYAeAbQA/A5A9BLQAIALAIALIApA5QgCAMgBANQgZATgaARQgNAIgNAIQgzAfgRgDQgMgCgGgIQgggrgigeQgCgCgDgDQg9g4gngfQAAgBgBAAQhDg2hbg2QhVgzhjgpQgygRgsgHQgcgGgsAJQgDAAgDAAQgjACgigGQgpgNgugWQgcgPgSgQQgPgLgKgTQgFgJgEgKQgTgpABgsg");
            this.shape_261.setTransform(-58.4006,-121.0788);
        
            this.shape_262 = new cjs.Shape();
            this.shape_262.graphics.f("#FFFFFF").s().p("AGWGNQgMgCgGgIQgggrgigeIgFgFQg9g4gngfIgBgBQhDg2hbg2QhVgzhjgpQgygRgsgHQgcgGgsAJIgGAAQgjACgigGQgpgNgugWQgcgPgSgQQgPgLgKgTIgJgTQgTgpABgsIAAgBQABhTA6g/QBRg0BLAHQAnAEAyASQAfAKAhAQIA5AbQA0AYAdAUIAIAFQBCA0A2AvQApApA1AuICKB0IA7AzQA/A5A9BLIAQAWIApA5IgDAZQgZATgaARIgaAQQgvAdgSAAIgDgBg");
            this.shape_262.setTransform(-58.4006,-121.0788);
        
            this.shape_263 = new cjs.Shape();
            this.shape_263.graphics.f().s("#F7BCC8").ss(4,1,1).p("AonjaQAChVA7g9QBTgyBKAKQAnAFAyAVQAeALAhARQAdAPAbAOQAzAaAdAVQAEADAEACQBCA3A0AuQAoAqA1AvQA3AvBTBGQAdAYAdAbQBAA4A9BMQAIALAJALIAoA5QAAANgBAMQgZATgaARQgNAJgMAHQgzAggSgCQgMgCgGgHQgggrgjgfQgCgCgDgDQg/g4glgfQAAAAgBgBQhCg2hcg2QhUgyhmgsQgwgRgtgMQgdgGgsAGQgDgBgCAAQgkgBgigJQgpgPgtgXQgbgQgSgRQgOgLgJgUQgFgJgEgJQgSgqAAgtg");
            this.shape_263.setTransform(-58.3507,-122.0199);
        
            this.shape_264 = new cjs.Shape();
            this.shape_264.graphics.f("#FFFFFF").s().p("AGWGXQgMgCgGgHQgggrgjgfIgFgFQg/g4glgfIgBgBQhCg2hcg2QhUgyhmgsQgwgRgtgMQgdgGgsAGIgFgBQgkgBgigJQgpgPgtgXQgbgQgSgRQgOgLgJgUIgJgSQgSgqAAgtIAAAAQAChVA7g9QBTgyBKAKQAnAFAyAVQAeALAhARIA4AdQAzAaAdAVIAIAFQBCA3A0AuQAoAqA1AvICKB1IA6AzQBAA4A9BMIARAWIAoA5IgBAZQgZATgaARIgZAQQgwAegTAAIgCAAg");
            this.shape_264.setTransform(-58.3507,-122.0199);
        
            this.shape_265 = new cjs.Shape();
            this.shape_265.graphics.f().s("#F7BCC8").ss(4,1,1).p("AomjoQAChXA8g6QBVgwBKAMQAmAGAxAYQAfAMAgATQAdAQAaAPQAyAbAdAWQAEADADACQBDA6AyAuQAoArA0AvQA2AwBTBGQAdAZAeAaQA/A5A+BMQAIALAJALIApA5QAAANABANQgZASgaASQgNAIgNAIQgyAfgSgBQgNgBgGgIQgfgpgkggQgDgCgCgDQhBg5gkgeQAAAAgBgBQhBg1heg4QhSgwhogvQgvgSgugOQgdgJgsACQgDgBgDAAQgkgEghgLQgqgSgrgXQgbgSgRgRQgOgMgJgUQgFgJgEgKQgRgqABgsg");
            this.shape_265.setTransform(-58.2028,-122.9434);
        
            this.shape_266 = new cjs.Shape();
            this.shape_266.graphics.f("#FFFFFF").s().p("AGWGgQgNgBgGgIQgfgpgkggIgFgFQhBg5gkgeIgBgBQhBg1heg4QhSgwhogvQgvgSgugOQgdgJgsACIgGgBQgkgEghgLQgqgSgrgXQgbgSgRgRQgOgMgJgUIgJgTQgRgqABgsIAAgBQAChXA8g6QBVgwBKAMQAmAGAxAYQAfAMAgATIA3AfQAyAbAdAWIAHAFQBDA6AyAuQAoArA0AvICJB2IA7AzQA/A5A+BMIARAWIApA5IABAaIgzAkIgaAQQgxAegSAAIgBAAg");
            this.shape_266.setTransform(-58.2028,-122.9434);
        
            this.shape_267 = new cjs.Shape();
            this.shape_267.graphics.f().s("#F7BCC8").ss(4,1,1).p("Aolj1QAChYA9g4QBXgvBJAPQAmAIAxAZQAeAOAgAUQAcARAaAQQAyAeAcAWQAEADADADQBEA8AvAtQAnAsA0AwQA1AwBUBHQAdAZAeAbQA/A3A+BNQAJALAIALIAqA5QABANACANQgZATgbARQgNAJgMAIQgyAfgTgBQgNAAgGgHQgegpgmggQgCgDgDgCQhCg6gjgdQAAgBgBgBQg/g0hhg5QhQgvhqgyQgugSgvgSQgegKgsgCQgDgBgCgBQgkgGgigNQgqgVgpgYQgbgTgRgRQgNgNgJgUQgEgJgEgKQgQgrABgsg");
            this.shape_267.setTransform(-58.0529,-123.8825);
        
            this.shape_268 = new cjs.Shape();
            this.shape_268.graphics.f("#FFFFFF").s().p("AGVGpQgNAAgGgHQgegpgmggIgFgFQhCg6gjgdIgBgCQg/g0hhg5QhQgvhqgyIhdgkQgegKgsgCIgFgCQgkgGgigNQgqgVgpgYQgbgTgRgRQgNgNgJgUIgIgTQgQgrABgsIAAgBQAChYA9g4QBXgvBJAPQAmAIAxAZQAeAOAgAUIA2AhQAyAeAcAWIAHAGQBEA8AvAtQAnAsA0AwICJB3IA7A0QA/A3A+BNIARAWIAqA5IADAaQgZATgbARIgZARQgyAegSAAIgBAAg");
            this.shape_268.setTransform(-58.0529,-123.8825);
        
            this.shape_269 = new cjs.Shape();
            this.shape_269.graphics.f().s("#F7BCC8").ss(4,1,1).p("AolkCQAEhaA9g2QBZgsBJARQAmAJAwAbQAdAPAgAWQAcASAaARQAwAgAcAXQADADAEADQBEA+AtAuQAmAtA0AwQA0AwBVBIQAcAZAfAbQA+A3A/BOQAJAKAIALIAqA5QADAOACANQgZATgaARQgNAJgNAHQgxAfgTABQgOAAgGgHQgdgognghQgDgDgDgCQhDg6gigdQAAgBgBAAQg+g0hig6QhPguhsg0QgtgTgwgVQgfgNgrgFQgDgBgDgBQgkgKghgPQgqgXgpgaQgZgTgRgSQgNgMgJgWQgEgJgDgKQgQgrABgtg");
            this.shape_269.setTransform(-57.9064,-124.8334);
        
            this.shape_270 = new cjs.Shape();
            this.shape_270.graphics.f("#FFFFFF").s().p("AGBGsQgdgognghIgGgFIhlhXIgBgBQg+g0hig6QhPguhsg0IhdgoQgfgNgrgFIgGgCQgkgKghgPQgqgXgpgaQgZgTgRgSQgNgMgJgWIgHgTQgQgrABgtIAAAAQAEhaA9g2QBZgsBJARQAmAJAwAbQAdAPAgAWIA2AjQAwAgAcAXIAHAGQBEA+AtAuQAmAtA0AwQA0AwBVBIIA7A0QA+A3A/BOIARAVIAqA5IAFAbQgZATgaARIgaAQQgxAfgTABIgCAAQgNAAgFgHg");
            this.shape_270.setTransform(-57.9064,-124.8334);
        
            this.shape_271 = new cjs.Shape();
            this.shape_271.graphics.f().s("#F7BCC8").ss(4,1,1).p("AokkPQADhcA/gzQBagrBJAUQAlAKAwAeQAdAQAgAXQAbAUAZARQAvAiAcAYQAEADADADQBEBBArAtQAlAuA0AxQA0AwBVBJQAcAZAfAbQA+A3BABOQAJALAIALIAqA5QAEANAEANQgaAUgaARQgNAJgNAHQgxAfgTABQgPABgFgHQgdgngogiQgDgCgDgDQhEg6ghgcQgBgBAAgBQg9gzhlg7QhMgthug3QgtgTgxgYQgfgPgrgJQgDgCgDgBQglgNgggQQgrgagngbQgZgUgQgTQgMgMgJgWQgEgJgDgLQgPgrACgtg");
            this.shape_271.setTransform(-57.7118,-125.7866);
        
            this.shape_272 = new cjs.Shape();
            this.shape_272.graphics.f("#FFFFFF").s().p("AGAG2QgdgngogiIgGgFIhlhWIgBgCQg9gzhlg7QhMgthug3QgtgTgxgYQgfgPgrgJIgGgDQglgNgggQQgrgagngbQgZgUgQgTQgMgMgJgWIgHgUQgPgrACgtIAAAAQADhcA/gzQBagrBJAUQAlAKAwAeQAdAQAgAXIA0AlQAvAiAcAYIAHAGQBEBBArAtQAlAuA0AxQA0AwBVBJIA7A0QA+A3BABOIARAWIAqA5IAIAaQgaAUgaARIgaAQQgxAfgTABIgEAAQgMAAgEgGg");
            this.shape_272.setTransform(-57.7118,-125.7866);
        
            this.shape_273 = new cjs.Shape();
            this.shape_273.graphics.f().s("#F7BCC8").ss(4,1,1).p("AokkdQAEhdBAgwQBcgqBIAXQAlALAwAgQAcASAgAYQAbAVAYATQAvAjAbAZQAEADADADQBEBEApAtQAlAvAzAxQAzAvBVBLQAdAZAfAbQA+A3BABOQAJALAJALIAqA5QAFAOAEANQgZATgbASQgMAIgNAIQgxAfgUACQgPACgFgIQgcgmgqgiQgDgDgCgCQhGg7gggcQgBgBAAAAQg8gzhmg8QhLgshwg5QgsgUgygbQgfgRgrgNQgEgCgDgBQgkgQghgTQgqgbgmgdQgZgVgPgTQgMgNgIgWQgEgKgEgKQgOgsACgtg");
            this.shape_273.setTransform(-57.5625,-126.7245);
        
            this.shape_274 = new cjs.Shape();
            this.shape_274.graphics.f("#FFFFFF").s().p("AF/HAQgcgmgqgiIgFgFIhmhXIgBgBQg8gzhmg8QhLgshwg5QgsgUgygbQgfgRgrgNIgHgDQgkgQghgTQgqgbgmgdQgZgVgPgTQgMgNgIgWIgIgUQgOgsACgtIAAgBQAEhdBAgwQBcgqBIAXQAlALAwAgQAcASAgAYIAzAoQAvAjAbAZIAHAGQBEBEApAtQAlAvAzAxQAzAvBVBLIA8A0QA+A3BABOIASAWIAqA5IAJAbQgZATgbASIgZAQQgxAfgUACIgGAAQgKAAgEgGg");
            this.shape_274.setTransform(-57.5625,-126.7245);
        
            this.shape_275 = new cjs.Shape();
            this.shape_275.graphics.f().s("#F7BCC8").ss(4,1,1).p("AojkqQAFheA/gvQBfgoBIAZQAlAOAvAhQAcATAeAaQAcAWAYAUQAtAlAbAaQADADAEADQBEBGAnAtQAkAwAzAyQAyAvBWBMQAcAYAfAcQA+A2BBBQQAJAKAJALIAqA5QAGAOAGAOQgZATgbASQgNAIgMAIQgxAegUADQgQADgFgHQgcgmgqgjQgDgDgDgCQhHg8gfgbQgBAAgBgBQg6gyhog9QhJgrhyg8QgrgUgzgeQgggTgrgRQgDgCgDgCQglgTghgUQgqgegkgeQgYgWgQgUQgLgNgIgXQgEgJgDgLQgNgtACgsg");
            this.shape_275.setTransform(-57.4129,-127.6979);
        
            this.shape_276 = new cjs.Shape();
            this.shape_276.graphics.f("#FFFFFF").s().p("AF+HLQgcgmgqgjIgGgFQhHg8gfgbIgCgBQg6gyhog9QhJgrhyg8QgrgUgzgeQgggTgrgRIgGgEQglgTghgUQgqgegkgeQgYgWgQgUQgLgNgIgXIgHgUQgNgtACgsIAAgBQAFheA/gvQBfgoBIAZQAlAOAvAhQAcATAeAaIA0AqQAtAlAbAaIAHAGQBEBGAnAtQAkAwAzAyQAyAvBWBMIA7A0QA+A2BBBQIASAVIAqA5IAMAcQgZATgbASIgZAQQgxAegUADIgIABQgJAAgEgFg");
            this.shape_276.setTransform(-57.4129,-127.6979);
        
            this.shape_277 = new cjs.Shape();
            this.shape_277.graphics.f().s("#F7BCC8").ss(4,1,1).p("Aojk2QAFhhBBgsQBhgmBGAcQAlAOAvAkQAbAUAfAcQAbAXAXAVQAsAmAbAcQAEADADACQBFBKAkAsQAjAxAzAzQAyAvBWBMQAdAZAfAbQA9A2BCBRQAJAKAJALIAqA5QAHAOAHAOQgZATgbASQgNAJgMAHQgwAfgWADQgPADgGgHQgagkgsgkQgDgDgDgCQhJg8gdgbQgBAAgBgBQg5gyhqg+QhHgqh1g+QgpgVg0ghQghgVgrgVQgDgCgDgCQglgWghgWQgqghgjgeQgYgYgPgUQgLgNgHgYQgEgJgDgLQgMgtACgtg");
            this.shape_277.setTransform(-57.2208,-128.6695);
        
            this.shape_278 = new cjs.Shape();
            this.shape_278.graphics.f("#FFFFFF").s().p("AF8HVQgagkgsgkIgGgFQhJg8gdgbIgCgBQg5gyhqg+QhHgqh1g+QgpgVg0ghQghgVgrgVIgGgEQglgWghgWQgqghgjgeQgYgYgPgUQgLgNgHgYIgHgUQgMgtACgtIAAAAQAFhhBBgsQBhgmBGAcQAlAOAvAkQAbAUAfAcIAyAsQAsAmAbAcIAHAFQBFBKAkAsQAjAxAzAzQAyAvBWBMIA8A0QA9A2BCBRIASAVIAqA5IAOAcQgZATgbASIgZAQQgwAfgWADIgIABQgJAAgEgFg");
            this.shape_278.setTransform(-57.2208,-128.6695);
        
            this.shape_279 = new cjs.Shape();
            this.shape_279.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoilEQAFhhBCgqQBjglBGAfQAkAQAvAmQAbAVAeAdQAaAYAXAWQAsApAaAbQAEAEADADQBFBLAiAtQAiAxAzA0QAxAvBXBNQAcAZAgAcQA8A1BDBRQAJAKAJALIArA5QAIAOAIAOQgaAUgaASQgNAIgNAIQgvAegWAFQgQAEgFgHQgbgkgtglQgDgCgDgDQhKg8gcgaQgBgBgBgBQg4gxhsg/QhFgph3hAQgogWg1gkQghgXgrgZQgEgCgDgDQglgYgggZQgrgjghgfQgYgZgOgUQgKgOgIgYQgDgKgDgLQgMgtADgtg");
            this.shape_279.setTransform(-57.0723,-129.6109);
        
            this.shape_280 = new cjs.Shape();
            this.shape_280.graphics.f("#FFFFFF").s().p("AF8HgQgbgkgtglIgGgFQhKg8gcgaIgCgCQg4gxhsg/QhFgph3hAQgogWg1gkQghgXgrgZIgHgFQglgYgggZQgrgjghgfQgYgZgOgUQgKgOgIgYIgGgVQgMgtADgtIAAgBQAFhhBCgqQBjglBGAfQAkAQAvAmQAbAVAeAdIAxAuQAsApAaAbIAHAHQBFBLAiAtQAiAxAzA0QAxAvBXBNIA8A1QA8A1BDBRIASAVIArA5IAQAcQgaAUgaASIgaAQQgvAegWAFIgKABQgIAAgDgEg");
            this.shape_280.setTransform(-57.0723,-129.6109);
        
            this.shape_281 = new cjs.Shape();
            this.shape_281.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoilRQAGhjBDgoQBlgjBFAiQAkARAvAoQAaAWAeAfQAaAaAWAWQArArAaAcQAEAEACADQBGBOAgAsQAhAzAzA0QAwAvBXBOQAdAZAfAcQA9A1BDBRQAJALAJALIAsA5QAJAOAIAOQgZAUgbASQgMAIgNAIQgvAegXAGQgQAEgFgHQgagjgvglQgDgDgCgCQhMg9gbgaQgBgBgBAAQg3gxhthAQhEgoh5hDQgogWg1gnQgigZgrgdQgDgDgEgCQglgcgggaQgrgmggghQgXgZgOgVQgJgOgIgYQgDgKgDgLQgLguADgtg");
            this.shape_281.setTransform(-56.9321,-130.5964);
        
            this.shape_282 = new cjs.Shape();
            this.shape_282.graphics.f("#FFFFFF").s().p("AF7HqQgagjgvglIgFgFQhMg9gbgaIgCgBQg3gxhthAQhEgoh5hDQgogWg1gnIhNg2IgHgFQglgcgggaQgrgmggghQgXgZgOgVQgJgOgIgYIgGgVQgLguADgtIAAgBQAGhjBDgoQBlgjBFAiQAkARAvAoQAaAWAeAfIAwAwQArArAaAcIAGAHQBGBOAgAsQAhAzAzA0QAwAvBXBOIA8A1QA9A1BDBRIASAWIAsA5IARAcQgZAUgbASIgZAQQgvAegXAGIgKABQgIAAgDgEg");
            this.shape_282.setTransform(-56.9321,-130.5964);
        
            this.shape_283 = new cjs.Shape();
            this.shape_283.graphics.f().s("#F7BCC8").ss(4,1,1).p("AohleQAGhkBDgmQBnghBFAkQAkATAuAqQAaAYAdAfQAaAbAWAYQAqAsAaAeQADADACADQBHBRAdAsQAhA0AyA0QAvAwBZBOQAcAZAgAcQA8A1BEBSQAJAKAJALIAsA5QAKAPAKAOQgaAUgbASQgMAIgNAIQgvAegXAHQgRAFgFgIQgZghgwgnQgDgCgDgDQhMg9gbgZQgBgBgBgBQg1gvhwhCQhBgmh7hGQgngXg3gqQgigbgrghQgDgCgEgDQglgfgggcQgrgogegiQgXgagOgWQgJgOgHgZQgDgKgCgMQgLguAEgtg");
            this.shape_283.setTransform(-56.7437,-131.5699);
        
            this.shape_284 = new cjs.Shape();
            this.shape_284.graphics.f("#FFFFFF").s().p("AF5H0QgZghgwgnIgGgFQhMg9gbgZIgCgCQg1gvhwhCQhBgmh7hGQgngXg3gqIhNg8IgHgFQglgfgggcQgrgogegiQgXgagOgWQgJgOgHgZIgFgWQgLguAEgtIAAgBQAGhkBDgmQBnghBFAkQAkATAuAqQAaAYAdAfIAwAzIBEBKIAFAGQBHBRAdAsQAhA0AyA0QAvAwBZBOIA8A1QA8A1BEBSIASAVIAsA5IAUAdQgaAUgbASIgZAQQgvAegXAHQgGACgFAAQgIAAgDgFg");
            this.shape_284.setTransform(-56.7437,-131.5699);
        
            this.shape_285 = new cjs.Shape();
            this.shape_285.graphics.f().s("#F7BCC8").ss(4,1,1).p("AIiGnIhChWQhPhhhEg7QiGh2g9g/Qgyg0ggg1QgbgshHhTQgogwhPhYQhPhbg4ggQhFgmhMAUQhfAagJB7QgDAtAJAvQAJApAMAVQArBICGB3QByBkBAAoQB9BIBAAmQBzBDA0AwQAaAYBOA+QA2ArAZAiQAMAQBQgzQApgaAlgdg");
            this.shape_285.setTransform(-56.5971,-132.7665);
        
            this.shape_286 = new cjs.Shape();
            this.shape_286.graphics.f("#FFFFFF").s().p("AF4IBQgZgig2grQhOg+gagYQg0gwhzhDIi9huQhAgohyhkQiGh3grhIQgMgVgJgpQgJgvADgtQAJh7BfgaQBMgUBFAmQA4AgBPBbQBPBYAoAwQBHBTAbAsQAgA1AyA0QA9A/CGB2QBEA7BPBhIBCBWQglAdgpAaQg9AngVAAQgHAAgDgEg");
            this.shape_286.setTransform(-56.5971,-132.7665);
        
            this.shape_287 = new cjs.Shape();
            this.shape_287.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoclmQADg1AUgkQAaguA1gPQAwgOAvALQAZAGAYANQAiASAqAoQAcAbAgAkQAiAnAcAfQAiAoAXAbQAjApAXAfQAZAhAOAWQAZAnAgAnQAMAOANAOQAcAdAsApQAyAvBIBAQAjAeAlAoQAkAmAnAwQAeAnAeAnQgdAmgnAaQhIAugRgIQgSgVgYgVQgGgFgHgGQgMgLgPgMQgIgHgIgGQgigbgWgSQgVgSgLgLQgcgagtgfQgogbg1ggQgggTgvgcQgwgbg+gkQgggUgtgjQgsgjg5gyQglghgegeQhOhMggg1QgMgUgJgpQgDgOgCgOQgEggACggg");
            this.shape_287.setTransform(-56.8946,-132.8597);
        
            this.shape_288 = new cjs.Shape();
            this.shape_288.graphics.f("#FFFFFF").s().p("AGAIEQgSgVgYgVIgNgLIgbgXIgQgNIg4gtQgVgSgLgLQgcgagtgfQgogbg1ggIhPgvIhug/QgggUgtgjQgsgjg5gyQglghgegeQhOhMggg1QgMgUgJgpIgFgcQgEggACggQADg1AUgkQAaguA1gPQAwgOAvALQAZAGAYANQAiASAqAoQAcAbAgAkIA+BGIA5BDQAjApAXAfQAZAhAOAWQAZAnAgAnIAZAcQAcAdAsApQAyAvBIBAQAjAeAlAoQAkAmAnAwIA8BOQgdAmgnAaQg9AngWAAIgGgBg");
            this.shape_288.setTransform(-56.8946,-132.8597);
        
            this.shape_289 = new cjs.Shape();
            this.shape_289.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoZlkQACg1ATgkQAaguA0gQQAwgPAuAKQAaAGAYAMQAiASAqAoQAcAaAgAlQAjAmAbAgQAiAoAXAaQAjAqAXAfQAZAgAOAXQAZAnAgAnQALAOAOAOQAbAdArApQAzAwBIBAQAiAeAlAoQAkAmAnAwQAeAnAeAnQgbAmgkAbQhHAtgSgGQgTgUgXgUQgHgFgGgGQgMgLgQgMQgIgHgHgGQgigbgWgSQgVgSgLgKQgdgbgsgfQgogbg1ggQghgUgugcQgvgbg+gkQghgUgsgjQgsgjg5gzQglgggegeQhOhNggg0QgNgVgJgoQgDgOgCgOQgEggACggg");
            this.shape_289.setTransform(-56.9083,-132.9555);
        
            this.shape_290 = new cjs.Shape();
            this.shape_290.graphics.f("#FFFFFF").s().p("AGDIFQgTgUgXgUIgNgLIgcgXIgPgNIg4gtIgggcQgdgbgsgfQgogbg1ggIhPgwIhtg/QghgUgsgjQgsgjg5gzQglgggegeQhOhNggg0QgNgVgJgoIgFgcQgEggACggQACg1ATgkQAaguA0gQQAwgPAuAKQAaAGAYAMQAiASAqAoQAcAaAgAlQAjAmAbAgIA5BCQAjAqAXAfQAZAgAOAXQAZAnAgAnIAZAcQAbAdArApQAzAwBIBAQAiAeAlAoQAkAmAnAwIA8BOQgbAmgkAbQg+AngWAAIgFAAg");
            this.shape_290.setTransform(-56.9083,-132.9555);
        
            this.shape_291 = new cjs.Shape();
            this.shape_291.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoYliQADg1ATgkQAYguA0gRQAugQAvAJQAaAGAYAMQAjARAqAnQAcAaAgAlQAiAmAcAgQAiAoAXAbQAjAqAWAeQAZAhAPAXQAZAoAfAmQALAOAOAOQAbAeArApQAyAvBIBBQAiAeAlAoQAkAmAnAwQAeAnAeAoQgZAmgiAbQhFAsgTgFQgUgSgXgTQgHgFgGgFQgMgMgPgMQgIgGgIgHQgjgbgVgSQgVgRgLgLQgegcgrgeQgngbg1ghQghgUgugbQgvgbg+glQghgVgsgiQgsgjg5gzQgkgggfgeQhNhNghg0QgNgWgJgnQgEgOgCgOQgEgfABghg");
            this.shape_291.setTransform(-56.9187,-133.0517);
        
            this.shape_292 = new cjs.Shape();
            this.shape_292.graphics.f("#FFFFFF").s().p("AGGIFIgrglIgNgKQgMgMgPgMIgQgNIg4gtIgggcQgegcgrgeQgngbg1ghIhPgvIhthAQghgVgsgiQgsgjg5gzQgkgggfgeQhNhNghg0QgNgWgJgnIgGgcQgEgfABghQADg1ATgkQAYguA0gRQAugQAvAJQAaAGAYAMQAjARAqAnQAcAaAgAlIA+BGIA5BDQAjAqAWAeQAZAhAPAXQAZAoAfAmIAZAcQAbAeArApQAyAvBIBBQAiAeAlAoQAkAmAnAwIA8BPQgZAmgiAbQg+AogWAAIgEgBg");
            this.shape_292.setTransform(-56.9187,-133.0517);
        
            this.shape_293 = new cjs.Shape();
            this.shape_293.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoWlgQADg1ASgkQAYgvAygSQAugQAwAIQAZAFAYAMQAjARArAmQAcAaAgAlQAiAmAbAgQAjAoAWAbQAjAqAXAfQAZAhAOAWQAZAoAfAmQALAOANAPQAcAeAqAoQAxAwBJBBQAiAeAlAoQAkAmAnAxQAeAnAeAnQgXAngfAbQhFAsgUgEQgVgQgWgTQgHgEgGgGQgMgLgPgMQgIgHgIgGQgjgbgVgSQgVgSgLgLQgfgcgqgdQgmgcg2ghQgggUgugcQgugbg/glQgggVgtgiQgsgig5gzQgkghgfgeQhNhNghg0QgNgWgKgmQgDgPgCgNQgFgfABghg");
            this.shape_293.setTransform(-56.9423,-133.1486);
        
            this.shape_294 = new cjs.Shape();
            this.shape_294.graphics.f("#FFFFFF").s().p("AGIIFIgrgjQgHgEgGgGIgbgXIgQgNIg4gtIgggdQgfgcgqgdQgmgcg2ghIhOgwIhthAQgggVgtgiQgsgig5gzQgkghgfgeQhNhNghg0QgNgWgKgmIgFgcQgFgfABghIAAAAQADg1ASgkQAYgvAygSQAugQAwAIQAZAFAYAMQAjARArAmQAcAaAgAlIA9BGIA5BDQAjAqAXAfQAZAhAOAWQAZAoAfAmIAYAdQAcAeAqAoQAxAwBJBBQAiAeAlAoQAkAmAnAxIA8BOQgXAngfAbQg+AogWAAIgFAAg");
            this.shape_294.setTransform(-56.9423,-133.1486);
        
            this.shape_295 = new cjs.Shape();
            this.shape_295.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoUleQACg1ASgkQAXgwAygSQAtgRAwAHQAZAFAYAMQAkAQAqAmQAcAaAhAlQAhAlAcAhQAiAoAXAbQAjAqAWAfQAZAgAPAXQAZApAeAlQAMAPAMAOQAcAeAqApQAwAvBJBCQAhAfAmAnQAkAmAnAxQAeAmAeAoQgVAngdAcQhEAsgUgEQgWgOgWgSQgHgDgGgGQgMgLgPgNQgIgGgIgHQgjgbgVgSQgUgRgMgLQgfgdgpgeQgmgbg2giQgggUgugcQgugbg/glQgggVgsgiQgsgig6g0QgjgggfgfQhNhMgig0QgNgWgKgmQgEgPgCgNQgFgfABghg");
            this.shape_295.setTransform(-56.9411,-133.2495);
        
            this.shape_296 = new cjs.Shape();
            this.shape_296.graphics.f("#FFFFFF").s().p("AGLIFQgWgOgWgSQgHgDgGgGIgbgYIgQgNQgjgbgVgSIgggcQgfgdgpgeQgmgbg2giIhOgwIhthAQgggVgsgiQgsgig6g0QgjgggfgfQhNhMgig0QgNgWgKgmQgEgPgCgNQgFgfABghQACg1ASgkQAXgwAygSQAtgRAwAHQAZAFAYAMQAkAQAqAmQAcAaAhAlIA9BGIA5BDQAjAqAWAfQAZAgAPAXQAZApAeAlIAYAdQAcAeAqApQAwAvBJBCQAhAfAmAnQAkAmAnAxIA8BOQgVAngdAcQg/ApgWAAIgDgBg");
            this.shape_296.setTransform(-56.9411,-133.2495);
        
            this.shape_297 = new cjs.Shape();
            this.shape_297.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoSlcQACg0ARglQAXgwAwgTQAtgSAwAHQAZAEAYALQAlAQAqAmQAcAZAhAlQAhAlAcAiQAiAoAXAbQAiAqAXAfQAZAgAOAXQAaApAdAlQAMAPAMAOQAbAfAqAoQAwAwBJBCQAhAfAmAnQAkAmAnAxQAeAmAeAoQgTAogbAcQhCArgWgCQgXgNgVgRQgHgDgGgGQgLgLgQgNQgIgGgIgGQgjgcgVgRQgUgSgMgLQgggegogdQgmgcg1ghQghgVgtgcQgugbg/glQgggVgsgiQgsgig5g0QgkgggfgfQhNhMgig1QgNgWgKglQgEgPgDgNQgFgeABghg");
            this.shape_297.setTransform(-56.9333,-133.3392);
        
            this.shape_298 = new cjs.Shape();
            this.shape_298.graphics.f("#FFFFFF").s().p("AGNIGQgXgNgVgRQgHgDgGgGQgLgLgQgNIgQgMIg4gtQgUgSgMgLQgggegogdQgmgcg1ghIhOgxIhthAQgggVgsgiQgsgig5g0IhDg/QhNhMgig1QgNgWgKglIgHgcQgFgeABghIAAgBQACg0ARglQAXgwAwgTQAtgSAwAHQAZAEAYALQAlAQAqAmQAcAZAhAlQAhAlAcAiIA5BDQAiAqAXAfQAZAgAOAXQAaApAdAlIAYAdQAbAfAqAoQAwAwBJBCQAhAfAmAnQAkAmAnAxIA8BOQgTAogbAcQg/ApgWAAIgDAAg");
            this.shape_298.setTransform(-56.9333,-133.3392);
        
            this.shape_299 = new cjs.Shape();
            this.shape_299.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoQlaQACg0ARglQAWgxAvgTQAtgTAvAGQAaAEAYALQAlAPAqAlQAcAaAhAlQAhAlAcAhQAiAoAXAcQAiAqAXAfQAYAgAPAXQAaApAdAlQALAPANAOQAbAfApApQAwAvBIBDQAiAfAlAnQAkAmAnAxQAeAmAeAoQgRAogYAdQhBAqgXgBQgXgLgVgQQgIgDgGgGQgLgLgQgMQgHgHgIgGQgkgcgUgRQgVgSgLgLQghgegngdQglgcg2giQgggUgugdQgtgbg/gmQghgVgsghQgrgig6g0QgjgggfgfQhNhMgig1QgOgXgKgkQgEgPgDgNQgFgeAAghg");
            this.shape_299.setTransform(-56.9771,-133.4301);
        
            this.shape_300 = new cjs.Shape();
            this.shape_300.graphics.f("#FFFFFF").s().p("AGQIGQgXgLgVgQQgIgDgGgGQgLgLgQgMIgPgNIg4gtQgVgSgLgLQghgegngdQglgcg2giIhOgxIhshBQghgVgsghQgrgig6g0IhCg/QhNhMgig1QgOgXgKgkIgHgcQgFgeAAghIAAgBQACg0ARglQAWgxAvgTQAtgTAvAGQAaAEAYALQAlAPAqAlQAcAaAhAlIA9BGIA5BEQAiAqAXAfQAYAgAPAXQAaApAdAlIAYAdQAbAfApApQAwAvBIBDQAiAfAlAnQAkAmAnAxIA8BOQgRAogYAdQhAApgXAAIgBAAg");
            this.shape_300.setTransform(-56.9771,-133.4301);
        
            this.shape_301 = new cjs.Shape();
            this.shape_301.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoOlXQABg0ARgmQAVgxAvgUQAsgUAvAGQAaADAYAKQAmAPAqAlQAcAZAhAlQAhAlAcAiQAiAoAWAcQAjAqAWAeQAZAhAPAXQAaApAcAlQALAPANAOQAaAfApApQAwAwBIBDQAiAfAlAnQAkAmAnAxQAeAmAeApQgPAogWAdQhAAqgXAAQgZgKgUgPQgIgCgGgGQgKgLgQgNQgIgHgIgGQgkgcgUgRQgUgRgMgMQghgegngdQglgcg1giQghgVgtgcQgtgcg/gmQghgVgsghQgrgig5g0QgkgggfggQhMhLgjg2QgOgWgKgkQgFgOgCgOQgGgdAAgig");
            this.shape_301.setTransform(-56.9769,-133.5192);
        
            this.shape_302 = new cjs.Shape();
            this.shape_302.graphics.f("#FFFFFF").s().p("AFmHuQgIgCgGgGQgKgLgQgNIgQgNIg4gtIgggdQghgegngdQglgcg1giIhOgxIhshCQghgVgsghQgrgig5g0QgkgggfggQhMhLgjg2QgOgWgKgkQgFgOgCgOQgGgdAAgiIAAAAQABg0ARgmQAVgxAvgUQAsgUAvAGQAaADAYAKQAmAPAqAlQAcAZAhAlIA9BHIA4BEIA5BIQAZAhAPAXQAaApAcAlIAYAdQAaAfApApQAwAwBIBDQAiAfAlAnQAkAmAnAxIA8BPQgPAogWAdQhAAqgXAAQgZgKgUgPg");
            this.shape_302.setTransform(-56.9769,-133.5192);
        
            this.shape_303 = new cjs.Shape();
            this.shape_303.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoLlVQABg0APgmQAVgxAugVQArgVAwAFQAaADAYAKQAmAOAqAkQAcAZAiAmQAgAkAcAjQAiAnAWAdQAjAqAWAeQAZAhAPAXQAaAqAcAkQALAPAMAOQAbAgAoApQAvAvBIBEQAiAfAlAnQAkAmAnAxQAeAmAeApQgMAogUAeQg/ApgYABQgagIgTgOQgIgCgGgGQgLgLgQgNQgIgGgIgHQgkgcgUgRQgUgRgMgMQgigfglgcQgkgcg2gjQgggVgtgcQgtgbg/gnQghgVgsghQgrgig6g1QgjgfgfggQhMhMgjg1QgPgXgKgjQgFgOgCgOQgHgdABgig");
            this.shape_303.setTransform(-57.0018,-133.6231);
        
            this.shape_304 = new cjs.Shape();
            this.shape_304.graphics.f("#FFFFFF").s().p("AFpHxQgIgCgGgGQgLgLgQgNIgQgNIg4gtIgggdQgigfglgcQgkgcg2gjQgggVgtgcIhshCQghgVgsghQgrgig6g1QgjgfgfggQhMhMgjg1QgPgXgKgjQgFgOgCgOQgHgdABgiIAAAAQABg0APgmQAVgxAugVQArgVAwAFQAaADAYAKQAmAOAqAkQAcAZAiAmIA8BHIA4BEQAjAqAWAeQAZAhAPAXQAaAqAcAkIAXAdQAbAgAoApQAvAvBIBEQAiAfAlAnQAkAmAnAxIA8BPQgMAogUAeQg/ApgYABQgagIgTgOg");
            this.shape_304.setTransform(-57.0018,-133.6231);
        
            this.shape_305 = new cjs.Shape();
            this.shape_305.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoKlTQABg0APgmQAUgyAtgVQAqgWAwAEQAaADAZAJQAmAOArAkQAcAZAhAlQAgAkAdAjQAhAoAXAcQAiArAWAeQAZAhAPAXQAbAqAbAkQALAPAMAPQAbAfAnApQAvAwBIBEQAiAfAlAnQAkAmAnAxQAeAmAeApQgKApgSAeQg9ApgZACQgbgHgTgNQgIgBgGgHQgKgKgRgOQgIgGgIgHQglgcgTgQQgUgSgMgMQgigfgkgcQglgcg1gjQghgWgsgcQgtgbg/gnQgigWgrggQgrgig6g1QgjgfggggQhLhMgjg1QgPgXgLgjQgFgOgDgOQgGgcAAgig");
            this.shape_305.setTransform(-57,-133.7132);
        
            this.shape_306 = new cjs.Shape();
            this.shape_306.graphics.f("#FFFFFF").s().p("AFqH0QgIgBgFgHQgKgKgRgOIgQgNIg4gsIgggeQgjgfgjgcQglgcg1gjIhNgyIhshCQgigWgrggQgrgig6g1QgigfggggQhLhMgkg1QgPgXgLgjIgHgcQgHgcAAgiIAAgBQABg0APgmQAVgyAsgVQArgWAvAEQAaADAZAJQAmAOArAkQAcAZAhAlQAgAkAdAjIA4BEQAjArAWAeQAYAhAPAXQAbAqAaAkIAYAeQAaAfAoApQAvAwBIBEQAhAfAmAnQAkAmAnAxIA7BPQgKApgSAeQg9ApgYACQgbgHgUgNg");
            this.shape_306.setTransform(-57,-133.7132);
        
            this.shape_307 = new cjs.Shape();
            this.shape_307.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoIlRQABgzAPgnQATgyAsgWQAqgXAwAEQAaACAZAJQAmANArAkQAcAYAhAmQAgAkAdAjQAhAoAXAcQAiArAWAeQAYAgAQAYQAbAqAaAkQALAPAMAPQAbAgAnAoQAuAwBJBFQAhAfAlAnQAlAmAnAxQAdAmAeApQgIApgPAfQg8AogaADQgcgFgTgMQgIgBgGgGQgKgLgRgNQgHgHgIgGQglgdgUgQQgTgSgNgLQgjghgjgbQgkgdg1gjQghgWgsgcQgtgbg/gnQghgWgsghQgqghg6g1QgjgfggghQhLhLgjg2QgQgXgLgiQgFgOgDgNQgGgdgBgig");
            this.shape_307.setTransform(-57.05,-133.8236);
        
            this.shape_308 = new cjs.Shape();
            this.shape_308.graphics.f("#FFFFFF").s().p("AFtH3QgIgBgGgGQgKgLgQgNIgQgNIg4gtIghgdQgighgkgbQgjgdg2gjIhNgyIhshCQghgWgsghQgqghg6g1QgjgfgfghQhLhLgkg2QgQgXgLgiQgEgOgDgNQgHgdAAgiIAAgBQAAgzAPgnQATgyAtgWQApgXAxAEQAZACAZAJQAnANApAkQAdAYAhAmQAgAkAdAjIA4BEQAjArAVAeQAYAgAQAYQAbAqAbAkIAWAeQAbAgAnAoQAuAwBJBFQAhAfAlAnQAlAmAnAxIA6BPQgHApgPAfQg9AogaADQgbgFgTgMg");
            this.shape_308.setTransform(-57.05,-133.8236);
        
            this.shape_309 = new cjs.Shape();
            this.shape_309.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoGlPQAAgzAPgnQATgzArgWQApgYAxADQAZACAZAJQAnAMArAjQAcAZAhAlQAgAkAdAkQAhAnAXAdQAiArAWAeQAYAgAQAYQAbArAaAjQAKAPAMAPQAbAgAnApQAtAwBJBFQAhAfAlAnQAkAmAnAxQAeAmAeApQgGAqgNAfQg7AngbAEQgcgDgSgLQgJgBgGgGQgJgLgRgNQgIgHgIgGQgmgdgSgQQgUgRgMgMQgkghgigbQgkgdg1gkQgggVgtgdQgsgbg/goQghgVgsghQgrghg6g2QgigeggghQhLhLgkg2QgQgYgLghQgFgOgDgNQgHgcgBgjg");
            this.shape_309.setTransform(-57.05,-133.937);
        
            this.shape_310 = new cjs.Shape();
            this.shape_310.graphics.f("#FFFFFF").s().p("AFvH6QgIgBgGgGQgJgLgRgNIgRgNIg3gtIghgdQgjghgigbQgkgdg1gkIhNgyIhshDQgggVgsghQgrghg6g2QgigeghghQhKhLgkg2QgQgYgLghQgFgOgDgNQgHgcgBgjIAAgBQAAgzAPgnQATgzArgWQApgYAwADQAaACAZAJQAnAMAqAjQAdAZAhAlQAgAkAdAkIA4BEIA4BJQAYAgAQAYQAbArAaAjIAWAeQAaAgAnApQAuAwBIBFQAiAfAlAnQAkAmAnAxIA7BPQgFAqgOAfQg6AngbAEQgcgDgTgLg");
            this.shape_310.setTransform(-57.05,-133.937);
        
            this.shape_311 = new cjs.Shape();
            this.shape_311.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoDlNQgBgzAOgnQATgzAqgYQAogYAxACQAaACAYAIQAoAMAqAjQAdAYAhAmQAgAjAdAkQAhAoAXAdQAiArAWAeQAYAgAPAYQAcArAZAjQAKAPAMAPQAaAhAnAoQAtAwBJBGQAhAfAlAnQAkAmAnAxQAeAmAeApQgEAqgLAgQg5AngcAFQgegCgRgKQgJAAgGgHQgJgKgRgOQgIgGgIgHQgmgdgSgQQgUgRgMgMQgkgigigaQgjgdg1gkQghgWgsgdQgsgbg/goQghgWgsggQgqghg6g2QgigeghghQhKhLglg2QgQgYgLghQgFgOgEgNQgGgcgBgjg");
            this.shape_311.setTransform(-57.0509,-134.0327);
        
            this.shape_312 = new cjs.Shape();
            this.shape_312.graphics.f("#FFFFFF").s().p("AFyH9QgJAAgGgHQgJgKgRgOIgQgNIg4gtIgggdQgkgigigaQgjgdg1gkIhNgzIhrhDQghgWgsggQgqghg6g2QgigeghghQhKhLglg2QgQgYgLghIgJgbQgGgcgBgjIAAgBQgBgzAOgnQATgzAqgYQAogYAxACQAaACAYAIQAoAMAqAjQAdAYAhAmQAgAjAdAkIA4BFIA4BJQAYAgAPAYQAcArAZAjIAWAeQAaAhAnAoQAtAwBJBGQAhAfAlAnQAkAmAnAxIA8BPQgEAqgLAgQg5AngcAFQgegCgRgKg");
            this.shape_312.setTransform(-57.0509,-134.0327);
        
            this.shape_313 = new cjs.Shape();
            this.shape_313.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoBlKQgBgzANgoQASg0ApgYQAogZAxACQAaABAZAIQAoALAqAjQAdAYAhAlQAgAjAdAlQAgAoAXAdQAiArAWAeQAYAgAQAYQAcArAYAjQAKAPAMAPQAaAhAmApQAtAwBJBGQAhAfAlAnQAkAmAnAxQAdAmAeApQgBArgJAgQg4AmgdAGQgeAAgRgJQgJAAgGgGQgJgLgRgOQgIgGgIgHQgmgdgSgPQgTgSgNgMQglgigggaQgjgdg1glQghgWgsgdQgsgbg/goQghgWgsggQgqghg6g2QgigeghgiQhKhLgkg2QgRgYgLggQgGgOgDgNQgHgbgBgjg");
            this.shape_313.setTransform(-57.0784,-134.1292);
        
            this.shape_314 = new cjs.Shape();
            this.shape_314.graphics.f("#FFFFFF").s().p("AF0IAQgJAAgGgGQgJgLgRgOIgQgNIg4gsIgggeQglgigggaQgjgdg1glQghgWgsgdIhrhDQghgWgsggQgqghg6g2QgigeghgiQhKhLgkg2QgRgYgLggQgGgOgDgNQgHgbgBgjIAAgBQgBgzANgoQASg0ApgYQAogZAxACQAaABAZAIQAoALAqAjQAdAYAhAlQAgAjAdAlIA3BFIA4BJQAYAgAQAYQAcArAYAjIAWAeQAaAhAmApQAtAwBJBGQAhAfAlAnQAkAmAnAxIA7BPQgBArgJAgQg4AmgdAGQgeAAgRgJg");
            this.shape_314.setTransform(-57.0784,-134.1292);
        
            this.shape_315 = new cjs.Shape();
            this.shape_315.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoAlIQAAgzANgoQARg0AogZQAngaAxABQAaAAAZAIQAoAMArAhQAcAYAiAmQAfAjAeAlQAgAnAXAdQAiArAVAfQAYAgAQAYQAdArAXAjQALAPALAPQAaAiAmAoQAsAwBJBGQAgAgAmAnQAkAmAnAxQAdAmAeApQABArgHAhQg3AlgdAIQgfACgRgJQgJAAgFgGQgKgLgRgNQgHgHgJgGQgmgegSgPQgTgRgNgNQgmgjgfgZQgigeg1gkQghgXgsgdQgrgbhAgoQghgWgrggQgrggg6g3QghgfghghQhKhLglg2QgRgZgMggQgFgNgEgNQgHgagCgkg");
            this.shape_315.setTransform(-57.0991,-134.2323);
        
            this.shape_316 = new cjs.Shape();
            this.shape_316.graphics.f("#FFFFFF").s().p("AF2IDQgJAAgFgGQgKgLgRgNIgQgNQgmgegSgPIgggeQgmgjgfgZQgigeg1gkIhNg0IhrhDQghgWgrggQgrggg6g3QghgfghghQhKhLglg2QgRgZgMggIgJgaQgHgagCgkIAAgBQAAgzANgoQARg0AogZQAngaAxABQAaAAAZAIQAoAMArAhQAcAYAiAmQAfAjAeAlIA3BEQAiArAVAfQAYAgAQAYIA0BOIAWAeQAaAiAmAoQAsAwBJBGIBGBHQAkAmAnAxQAdAmAeApQABArgHAhQg3AlgdAIIgLAAQgXAAgOgHg");
            this.shape_316.setTransform(-57.0991,-134.2323);
        
            this.shape_317 = new cjs.Shape();
            this.shape_317.graphics.f().s("#F7BCC8").ss(4,1,1).p("An+lGQgBgzANgoQARg1AngZQAmgbAxAAQAaAAAZAHQApALAqAhQAdAYAiAmQAfAiAdAmQAgAnAXAeQAjArAVAeQAYAgAQAYQAcAsAYAiQAKAQALAPQAaAiAlAoQAsAwBJBHQAgAgAlAmQAlAmAnAyQAdAlAeAqQADArgEAhQg2AlgfAJQggADgQgIQgJABgFgGQgJgLgSgOQgHgGgJgHQgngdgRgPQgTgSgNgMQgmgkgegZQgjgdg1glQgggXgsgdQgrgbhAgpQghgWgrggQgqggg6g3QgigeghgiQhJhLgmg2QgRgZgMgfQgFgOgEgMQgIgagCgkg");
            this.shape_317.setTransform(-57.0644,-134.2967);
        
            this.shape_318 = new cjs.Shape();
            this.shape_318.graphics.f("#FFFFFF").s().p("AF4IFQgJABgFgGQgJgLgSgOIgQgNQgngdgRgPIgggeQgmgkgegZQgjgdg1glQgggXgsgdIhrhEQghgWgrggQgqggg6g3QgigeghgiQhJhLgmg2QgRgZgMgfIgJgaQgIgagCgkIAAgBQgBgzANgoQARg1AngZQAmgbAxAAQAaAAAZAHQApALAqAhQAdAYAiAmQAfAiAdAmIA3BFQAjArAVAeQAYAgAQAYIA0BOQAKAQALAPQAaAiAlAoQAsAwBJBHIBFBGQAlAmAnAyQAdAlAeAqQADArgEAhQg2AlgfAJIgSABQgTAAgLgGg");
            this.shape_318.setTransform(-57.0644,-134.2967);
        
            this.shape_319 = new cjs.Shape();
            this.shape_319.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9lFQgBgyAMgpQAQg1AmgaQAmgcAxAAQAagBAZAHQAqALAqAhQAdAXAiAmQAfAiAdAmQAgAoAXAdQAiArAVAeQAYAgAQAZQAdAsAXAiQAKAPALAQQAZAiAlAoQAsAwBJBHQAgAgAlAnQAlAmAnAxQAdAmAeAqQAFArgCAiQg1AkgfAKQghAFgQgHQgJABgFgGQgJgLgRgOQgIgGgJgHQgngegRgPQgTgRgNgMQgnglgdgYQgigeg1glQghgYgsgcQgqgchAgoQghgXgrgfQgqggg6g3QghgfgigiQhJhKgmg3QgRgZgMgfQgGgNgEgNQgIgZgCglg");
            this.shape_319.setTransform(-56.9548,-134.3475);
        
            this.shape_320 = new cjs.Shape();
            this.shape_320.graphics.f("#FFFFFF").s().p("AF5IIQgJABgFgGQgJgLgRgOIgRgNQgngegRgPIgggdQgnglgdgYQgigeg1glQghgYgsgcIhqhEQghgXgrgfQgqggg6g3IhDhBQhJhKgmg3QgRgZgMgfIgKgaQgIgZgCglIAAgBQgBgyAMgpQAQg1AmgaQAmgcAxAAQAagBAZAHQAqALAqAhQAdAXAiAmQAfAiAdAmIA3BFQAiArAVAeQAYAgAQAZIA0BOIAVAfQAZAiAlAoQAsAwBJBHIBFBHQAlAmAnAxQAdAmAeAqQAFArgCAiQg1AkgfAKQgOACgLAAQgPAAgJgEg");
            this.shape_320.setTransform(-56.9548,-134.3475);
        
            this.shape_321 = new cjs.Shape();
            this.shape_321.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9lDQgCgyAMgpQAQg1AlgbQAlgdAxgBQAbgBAYAHQAqAKArAgQAdAXAiAnQAeAhAeAnQAgAnAXAeQAiArAVAeQAYAgAQAZQAdAsAWAiQAKAPALAQQAZAiAlApQArAvBJBIQAgAgAlAnQAkAmAnAxQAeAmAeAqQAHArAAAjQgzAkghAKQgiAHgOgGQgKACgFgHQgJgKgRgPQgIgGgJgHQgngegRgOQgTgRgNgNQgnglgdgYQghgeg1gmQghgXgsgdQgqgcg/gpQgigWgrgfQgqggg6g4QghgegigiQhIhKgng3QgRgZgNgfQgFgNgFgNQgIgZgCgkg");
            this.shape_321.setTransform(-56.7898,-134.4078);
        
            this.shape_322 = new cjs.Shape();
            this.shape_322.graphics.f("#FFFFFF").s().p("AF6ILQgKACgFgHQgJgKgRgPIgRgNQgngegRgOIgggeQgnglgdgYQghgeg1gmQghgXgsgdIhphFQgigWgrgfQgqggg6g4QghgegigiQhIhKgng3QgRgZgNgfIgKgaQgIgZgCgkIAAgCQgCgyAMgpQAQg1AlgbQAlgdAxgBQAbgBAYAHQAqAKArAgQAdAXAiAnQAeAhAeAnIA3BFIA3BJQAYAgAQAZIAzBOIAVAfQAZAiAlApQArAvBJBIIBFBHQAkAmAnAxQAeAmAeAqQAHArAAAjQgzAkghAKQgRADgNAAQgLAAgHgCg");
            this.shape_322.setTransform(-56.7898,-134.4078);
        
            this.shape_323 = new cjs.Shape();
            this.shape_323.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9lBQgCgzALgpQAPg2AkgbQAlgdAxgDQAbgBAZAHQAqAJAqAgQAdAXAjAmQAeAiAeAmQAfAoAXAeQAiArAVAeQAYAgAQAYQAeAtAVAiQAKAPALAQQAZAkAkAnQArAwBJBIQAgAgAlAnQAkAlAnAyQAdAmAeAqQAJAsADAjQgyAjghALQgjAJgOgFQgKACgFgHQgJgKgRgOQgIgHgJgGQgngfgRgOQgSgRgOgNQgogmgbgXQghgfg1gmQghgXgsgdQgpgchAgpQgigWgrggQgpgfg7g4QgggegigjQhJhKgmg2QgTgagMgeQgGgNgEgMQgJgZgCglg");
            this.shape_323.setTransform(-56.5898,-134.4391);
        
            this.shape_324 = new cjs.Shape();
            this.shape_324.graphics.f("#FFFFFF").s().p("AF6INQgKACgFgHQgJgKgRgOIgRgNQgngfgRgOIgggeQgogmgbgXQghgfg1gmQghgXgsgdIhphFQgigWgrggQgpgfg7g4QgggegigjQhJhKgmg2QgTgagMgeIgKgZQgJgZgCglIAAgBQgCgzALgpQAPg2AkgbQAlgdAxgDQAbgBAZAHQAqAJAqAgQAdAXAjAmQAeAiAeAmIA2BGIA3BJQAYAgAQAYIAzBPIAVAfQAZAkAkAnQArAwBJBIIBFBHQAkAlAnAyQAdAmAeAqQAJAsADAjQgyAjghALQgWAGgOAAQgIAAgFgCg");
            this.shape_324.setTransform(-56.5898,-134.4391);
        
            this.shape_325 = new cjs.Shape();
            this.shape_325.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9lAQgDgyALgpQAPg3AjgcQAkgeAxgDQAbgBAZAGQArAIAqAgQAdAXAiAmQAfAhAeAnQAfAoAXAeQAiAsAVAeQAXAfARAZQAeAtAUAhQAKAQALAQQAZAkAjAnQArAwBJBJQAgAgAlAmQAkAmAnAyQAdAlAeAqQALAtAFAjQgwAjgjAMQgjAKgOgEQgKADgFgHQgIgKgSgPQgIgGgJgHQgogegQgOQgSgRgOgNQgogngbgXQghgeg0gnQghgXgsgeQgpgbhAgqQgigWgrgfQgpggg6g3QghgegigjQhIhKgng3QgTgagMgdQgGgOgFgMQgIgYgDglg");
            this.shape_325.setTransform(-56.3981,-134.4579);
        
            this.shape_326 = new cjs.Shape();
            this.shape_326.graphics.f("#FFFFFF").s().p("AF6IPQgKADgFgHQgIgKgSgPIgRgNQgogegQgOIgggeQgogngbgXQghgeg0gnIhNg1IhphFQgigWgrgfQgpggg6g3IhDhBQhIhKgng3QgTgagMgdIgLgaQgIgYgDglIAAgCQgDgyALgpQAPg3AjgcQAkgeAxgDQAbgBAZAGQArAIAqAgQAdAXAiAmQAfAhAeAnIA2BGIA3BKQAXAfARAZIAyBOIAVAgQAZAkAjAnQArAwBJBJIBFBGQAkAmAnAyQAdAlAeAqQALAtAFAjQgwAjgjAMQgZAHgOAAIgKgBg");
            this.shape_326.setTransform(-56.3981,-134.4579);
        
            this.shape_327 = new cjs.Shape();
            this.shape_327.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9k/QgDgyAKgpQAOg3AjgdQAigfAygEQAbgBAZAFQArAIArAgQAdAWAiAnQAeAhAeAnQAfAoAYAeQAiAsAUAeQAYAfAQAZQAeAuAUAgQAKAQALAQQAZAkAjAnQAqAwBJBKQAfAgAmAmQAkAmAnAyQAdAlAeAqQANAtAIAkQgwAigjAOQglALgNgDQgKADgFgHQgIgKgSgOQgIgHgJgHQgogegQgOQgSgRgOgNQgpgngZgXQghgeg1gnQgggYgsgeQgpgbhAgqQgigXgqgeQgqgfg6g5QgggdgjgkQhHhKgog2QgTgbgNgcQgGgOgFgMQgIgYgDglg");
            this.shape_327.setTransform(-56.175,-134.4711);
        
            this.shape_328 = new cjs.Shape();
            this.shape_328.graphics.f("#FFFFFF").s().p("AFrINQgIgKgSgOIgRgOQgogegQgOIgggeIhCg+Qghgeg1gnQgggYgsgeIhphFIhMg1Qgqgfg6g5QgggdgjgkQhHhKgog2QgTgbgNgcIgLgaQgIgYgDglIAAgCQgDgyAKgpQAOg3AjgdQAigfAygEQAbgBAZAFQArAIArAgQAdAWAiAnQAeAhAeAnIA3BGQAiAsAUAeQAYAfAQAZIAyBOIAVAgQAZAkAjAnQAqAwBJBKIBFBGQAkAmAnAyQAdAlAeAqQANAtAIAkQgwAigjAOQglALgNgDIgGABQgGAAgDgFg");
            this.shape_328.setTransform(-56.175,-134.4711);
        
            this.shape_329 = new cjs.Shape();
            this.shape_329.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9k+QgDgyAJgqQAOg3AhgeQAigfAygFQAbgCAZAFQAsAIAqAfQAeAWAiAnQAeAgAeAoQAfAoAXAeQAiAsAWAeQAWAfARAZQAeAuAUAgQAJAQALAQQAYAlAjAnQAqAwBIBKQAgAgAlAnQAlAlAnAzQAdAlAeAqQAPAtAKAlQguAhgkAPQgmANgNgCQgKADgFgHQgIgKgSgPQgIgGgJgHQgogfgQgNQgSgRgOgNQgqgogYgWQgggfg1gnQghgZgrgdQgpgbhAgqQgigXgqgfQgpgfg7g4QgggegjgkQhHhJgog3QgTgbgNgcQgGgNgFgMQgJgYgDglg");
            this.shape_329.setTransform(-55.986,-134.4452);
        
            this.shape_330 = new cjs.Shape();
            this.shape_330.graphics.f("#FFFFFF").s().p("AFrIPQgIgKgSgPIgRgNQgogfgQgNIgggeIhCg+Qgggfg1gnQghgZgrgdIhphFIhMg2Qgpgfg7g4QgggegjgkQhHhJgog3QgTgbgNgcIgLgZQgJgYgDglIAAgCQgDgyAJgqQAOg3AhgeQAigfAygFQAbgCAZAFQAsAIAqAfQAeAWAiAnQAeAgAeAoIA2BGIA4BKQAWAfARAZQAeAuAUAgQAJAQALAQQAYAlAjAnQAqAwBIBKIBFBHQAlAlAnAzQAdAlAeAqQAPAtAKAlQguAhgkAPQgmANgNgCIgGABQgGAAgDgFg");
            this.shape_330.setTransform(-55.986,-134.4452);
        
            this.shape_331 = new cjs.Shape();
            this.shape_331.graphics.f().s("#F7BCC8").ss(4,1,1).p("An+k9QgDgxAKgrQAMg3AhgfQAhggAygFQAbgDAaAFQAsAHAqAeQAdAWAjAnQAdAhAfAoQAfAnAXAfQAiAsAVAeQAWAfARAZQAfAvATAfQAJAQALAQQAYAlAjAoQApAwBIBKQAgAgAlAnQAlAlAnAzQAcAlAeAqQASAuAMAlQgtAgglAQQgmAPgNgBQgKADgFgHQgIgKgSgOQgHgHgKgHQgpgfgPgNQgSgRgOgNQgqgogYgWQgfgfg1goQghgYgrgeQgpgbhAgrQgigXgqgeQgpgfg7g4QgggegigkQhHhKgog3QgUgbgNgbQgHgNgFgMQgJgXgEgmg");
            this.shape_331.setTransform(-55.786,-134.4363);
        
            this.shape_332 = new cjs.Shape();
            this.shape_332.graphics.f("#FFFFFF").s().p("AFrIRQgIgKgSgOIgRgOQgpgfgPgNIgggeIhCg+Qgfgfg1goQghgYgrgeIhphGIhMg1Qgpgfg7g4QgggegigkQhHhKgog3QgUgbgNgbIgMgZQgJgXgEgmIAAgCQgDgxAKgrQAMg3AhgfQAhggAygFQAbgDAaAFQAsAHAqAeQAdAWAjAnQAdAhAfAoIA2BGIA3BKIAnA4QAfAvATAfQAJAQALAQQAYAlAjAoQApAwBIBKIBFBHQAlAlAnAzQAcAlAeAqQASAuAMAlQgtAgglAQQgmAPgNgBIgGABQgGAAgDgFg");
            this.shape_332.setTransform(-55.786,-134.4363);
        
            this.shape_333 = new cjs.Shape();
            this.shape_333.graphics.f().s("#F7BCC8").ss(4,1,1).p("An+k8QgDgxAJgrQAMg4AfgfQAhghAygGQAbgDAaAEQAsAHArAeQAdAWAjAnQAdAgAfAoQAeAoAYAfQAhAsAWAeQAWAfARAZQAfAvASAfQAJAQALARQAYAlAiAnQApAwBIBLQAgAgAlAnQAlAlAnAzQAcAlAeAqQAUAuAOAmQgrAggmARQgoAQgMAAQgKAEgFgHQgHgKgTgPQgHgHgKgGQgpgggPgNQgSgRgOgNQgrgpgWgVQggggg0gnQghgZgrgeQgogbhBgrQgigXgqgeQgpgfg6g4QgggegjgkQhHhKgog3QgUgbgOgbQgGgNgGgMQgJgXgEgmg");
            this.shape_333.setTransform(-55.599,-134.4166);
        
            this.shape_334 = new cjs.Shape();
            this.shape_334.graphics.f("#FFFFFF").s().p("AFrIUQgHgKgTgPIgRgNQgpgggPgNIgggeIhBg+Qggggg0gnQghgZgrgeIhphGIhMg1Qgpgfg6g4QgggegjgkQhHhKgog3QgUgbgOgbIgMgZQgJgXgEgmIAAgCQgDgxAJgrQAMg4AfgfQAhghAygGQAbgDAaAEQAsAHArAeQAdAWAjAnQAdAgAfAoIA2BHIA3BKIAnA4QAfAvASAfIAUAhQAYAlAiAnQApAwBIBLIBFBHQAlAlAnAzQAcAlAeAqQAUAuAOAmQgrAggmARQgoAQgMAAIgGABQgGAAgDgEg");
            this.shape_334.setTransform(-55.599,-134.4166);
        
            this.shape_335 = new cjs.Shape();
            this.shape_335.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9k6QgEgyAIgrQAMg4AeggQAhgiAygHQAbgDAZAEQAuAGAqAeQAdAVAjAnQAdAgAfApQAeAoAYAfQAhAsAWAeQAWAfARAZQAfAvASAfQAJARAKAQQAYAlAiAoQAoAvBJBMQAfAhAlAmQAlAlAnAzQAdAkAeArQAWAvAQAmQgrAfgmASQgpASgLABQgLAEgFgHQgHgKgSgPQgIgGgJgHQgqgggOgNQgSgQgOgOQgsgpgVgWQgfgfg1goQghgZgrgeQgogbhAgrQgigXgqgeQgpgfg7g5QgfgdgjglQhHhJgpg3QgUgcgNgaQgHgNgGgMQgJgWgEgng");
            this.shape_335.setTransform(-55.414,-134.4186);
        
            this.shape_336 = new cjs.Shape();
            this.shape_336.graphics.f("#FFFFFF").s().p("AFrIWQgHgKgSgPIgRgNQgqgggOgNIgggeIhBg/Qgfgfg1goQghgZgrgeIhohGIhMg1Qgpgfg7g5QgfgdgjglQhHhJgpg3QgUgcgNgaIgNgZQgJgWgEgnIAAgBQgEgyAIgrQAMg4AeggQAhgiAygHQAbgDAZAEQAuAGAqAeQAdAVAjAnQAdAgAfApIA2BHIA3BKQAWAfARAZQAfAvASAfQAJARAKAQQAYAlAiAoQAoAvBJBMIBEBHQAlAlAnAzQAdAkAeArQAWAvAQAmQgrAfgmASQgpASgLABIgIABQgFAAgDgEg");
            this.shape_336.setTransform(-55.414,-134.4186);
        
            this.shape_337 = new cjs.Shape();
            this.shape_337.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9k6QgFgxAIgrQALg5AeggQAggjAygIQAbgEAaAEQAtAGArAdQAdAVAjAnQAdAgAfApQAeAoAXAfQAiAsAVAeQAWAfARAZQAgAwARAfQAJAQAKAQQAYAmAhAnQAoAwBJBMQAfAhAlAmQAlAlAnAzQAcAlAeArQAYAvATAmQgpAfgoATQgpAUgLABQgLAFgFgHQgGgKgTgPQgIgHgJgGQgqgggOgNQgSgRgOgNQgsgqgVgVQgfggg0goQghgZgrgeQgngchBgrQgigXgqgeQgpgeg6g5QgggegjglQhGhJgpg3QgVgcgOgZQgHgNgFgMQgKgWgEgng");
            this.shape_337.setTransform(-55.206,-134.4);
        
            this.shape_338 = new cjs.Shape();
            this.shape_338.graphics.f("#FFFFFF").s().p("AFrIYQgGgJgTgQIgRgNQgqgggOgMIgggfQgsgqgVgVQgfggg0goQghgZgrgeIhohHIhMg1Qgpgeg6g5QgggdgjgmQhGhJgpg3QgVgcgOgZIgMgZQgKgWgEgnIAAgCQgFgwAIgsQALg5AeggQAggjAygIQAbgDAaADQAtAGArAdQAdAVAjAoQAdAfAfApIA1BHIA3BKIAnA4QAgAwARAfIATAhQAYAlAhAnQAoAwBJBMIBEBHQAlAmAnAzQAcAkAeArIArBVQgpAfgoATQgpAUgLABQgFACgDAAQgFAAgDgEg");
            this.shape_338.setTransform(-55.206,-134.4);
        
            this.shape_339 = new cjs.Shape();
            this.shape_339.graphics.f().s("#F7BCC8").ss(4,1,1).p("An+k5QgEgwAIgsQAKg5AdgiQAegjAzgIQAbgFAaAEQAuAFAqAcQAeAVAjAoQAcAfAgAqQAeAnAXAgQAiAsAVAeQAVAfASAZQAgAwAQAfQAJAQAKAQQAYAnAhAnQAnAwBJBMQAfAhAlAmQAlAlAnAzQAcAlAeArQAaAvAVAnQgoAegoAUQgqAWgLACQgLAFgFgHQgGgKgTgPQgHgGgKgHQgqgggOgNQgSgQgOgOQgtgrgUgUQgeggg0gpQghgZgrgeQgngbhBgsQgigYgqgdQgogeg7g5QgfgegkglQhFhJgqg4QgVgcgOgYQgHgNgGgMQgKgWgFgng");
            this.shape_339.setTransform(-55.0196,-134.3974);
        
            this.shape_340 = new cjs.Shape();
            this.shape_340.graphics.f("#FFFFFF").s().p("AFrIaQgGgKgTgPIgRgNQgqgggOgNIgggeQgtgrgUgUQgeggg0gpQghgZgrgeIhohHIhMg1Qgogeg7g5QgfgegkglQhFhJgqg4QgVgcgOgYIgNgZQgKgWgFgnIAAgCQgEgwAIgsQAKg5AdgiQAegjAzgIQAbgFAaAEQAuAFAqAcQAeAVAjAoQAcAfAgAqIA1BHIA3BKIAnA4QAgAwAQAfIATAgQAYAnAhAnQAnAwBJBMIBEBHQAlAlAnAzQAcAlAeArIAvBWQgoAegoAUQgqAWgLACQgFADgDAAQgFAAgDgFg");
            this.shape_340.setTransform(-55.0196,-134.3974);
        
            this.shape_341 = new cjs.Shape();
            this.shape_341.graphics.f().s("#F7BCC8").ss(4,1,1).p("An+k3QgEgxAHgsQAJg6AcgiQAegkAzgJQAcgFAZADQAvAFAqAcQAeAVAjAnQAcAfAfArQAeAnAYAfQAhAtAVAeQAWAfARAZQAgAwAQAfQAJAQAKARQAXAmAhAnQAnAwBJBNQAfAhAlAmQAkAlAnAzQAdAlAeArQAcAwAYAnQgnAegqAVQgrAXgJADQgMAGgFgIQgGgJgTgQQgHgGgKgHQgqgggOgMQgRgRgPgOQgugrgSgUQgeggg1gpQghgagqgeQgngbhAgsQgjgYgqgdQgogeg7g6QgfgdgkglQhFhJgqg4QgVgcgOgYQgIgNgGgMQgKgVgFgng");
            this.shape_341.setTransform(-54.813,-134.3937);
        
            this.shape_342 = new cjs.Shape();
            this.shape_342.graphics.f("#FFFFFF").s().p("AFrIcQgGgJgTgQIgRgNQgqgggOgMIgggfQgugrgSgUQgeggg1gpQghgagqgeIhnhHIhNg1Qgogeg7g6QgfgdgkglQhFhJgqg4QgVgcgOgYIgOgZQgKgVgFgnIAAgCQgEgxAHgsQAJg6AcgiQAegkAzgJQAcgFAZADQAvAFAqAcQAeAVAjAnQAcAfAfArIA2BGIA2BLIAnA4QAgAwAQAfIATAhQAXAmAhAnQAnAwBJBNIBEBHQAkAlAnAzQAdAlAeArIA0BXQgnAegqAVQgrAXgJADQgFADgEAAQgFAAgDgFg");
            this.shape_342.setTransform(-54.813,-134.3937);
        
            this.shape_343 = new cjs.Shape();
            this.shape_343.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9mTQASh6BigSQBNgOBCAsQA0AkBIBhQBIBfAkAzQA/BZAXAuQAdA3AtA4QA3BEB9CAQA+BABIBoIA6BbQgoAagqAWQgsAZgJAEQgMAGgFgHQgIgOgigZQgrgggNgMQhJhFgXgZQgwg1hthNQg8gqh4hSQg8gthphuQh8iBglhMQgLgVgFgpQgFgxAHgsg");
            this.shape_343.setTransform(-54.5337,-134.3871);
        
            this.shape_344 = new cjs.Shape();
            this.shape_344.graphics.f("#FFFFFF").s().p("AFqIfQgIgOgigZQgrgggNgMQhJhFgXgZQgwg1hthNIi0h8Qg8gthphuQh8iBglhMQgLgVgFgpQgFgxAHgsQASh6BigSQBNgOBCAsQA0AkBIBhQBIBfAkAzQA/BZAXAuQAdA3AtA4QA3BEB9CAQA+BABIBoIA6BbQgoAagqAWIg1AdQgFADgEAAQgFAAgDgEg");
            this.shape_344.setTransform(-54.5337,-134.3871);
        
            this.shape_345 = new cjs.Shape();
            this.shape_345.graphics.f().s("#F7BCC8").ss(4,1,1).p("An+k3QgEgxAHgsQAJg6AcgiQAegkAzgJQAcgFAZADQAvAFAqAcQAeAVAjAnQAcAgAfAqQAeAnAYAgQAhAsAVAeQAWAfARAZQAgAxAQAeQAJAQAKARQAYAmAgAnQAnAwBJBNQAfAhAlAmQAkAlAnAzQAdAlAeArQAcAwAXAnQgmAegqAVQgrAXgJADQgMAGgFgIQgGgJgTgQQgHgGgKgHQgrgggNgNQgSgQgOgOQgugrgSgUQgeggg1gpQghgagqgeQgngbhBgsQgigYgqgdQgogeg7g6QgfgdgkglQhFhJgqg4QgVgcgPgYQgHgNgGgMQgKgVgFgog");
            this.shape_345.setTransform(-54.838,-134.3937);
        
            this.shape_346 = new cjs.Shape();
            this.shape_346.graphics.f("#FFFFFF").s().p("AFrIcQgGgJgTgQIgRgNQgrgggNgNIgggeQgugrgSgUQgeggg1gpQghgagqgeIhohHIhMg1Qgogeg7g6IhDhCQhFhJgqg4QgVgcgPgYIgNgZQgKgVgFgoIAAgBQgEgxAHgsQAJg6AcgiQAegkAzgJQAcgFAZADQAvAFAqAcQAeAVAjAnQAcAgAfAqIA2BHIA2BKIAnA4QAgAxAQAeIATAhQAYAmAgAnQAnAwBJBNIBEBHQAkAlAnAzQAdAlAeArIAzBXQgmAegqAVQgrAXgJADQgFADgEAAQgFAAgDgFg");
            this.shape_346.setTransform(-54.838,-134.3937);
        
            this.shape_347 = new cjs.Shape();
            this.shape_347.graphics.f().s("#F7BCC8").ss(4,1,1).p("An+k4QgEgxAHgsQALg5AdghQAegkAzgIQAbgEAaADQAuAFAqAdQAeAVAjAnQAcAgAgAqQAeAnAXAfQAiAtAVAeQAWAfARAZQAgAwAQAfQAJAQAKAQQAYAmAhAoQAnAwBJBMQAfAhAlAmQAlAlAnAzQAcAkAeAsQAaAvAVAnQgoAegoAUQgrAVgKADQgLAFgFgIQgGgJgTgPQgIgHgJgHQgqgggOgMQgSgRgOgOQgtgqgUgVQgegfg1gpQgggagrgeQgngbhBgrQgigYgqgeQgpgdg6g6QgfgdgkgmQhGhIgpg4QgVgcgOgZQgHgNgGgMQgKgVgFgng");
            this.shape_347.setTransform(-55.0344,-134.4016);
        
            this.shape_348 = new cjs.Shape();
            this.shape_348.graphics.f("#FFFFFF").s().p("AFrIaQgGgJgTgPIgRgOQgqgggOgMIgggfQgtgqgUgVQgegfg1gpQgggagrgeIhohGIhMg2Qgpgdg6g6QgfgdgkgmQhGhIgpg4QgVgcgOgZIgNgZQgKgVgFgnIAAgCQgEgxAHgsQALg5AdghQAegkAzgIQAbgEAaADQAuAFAqAdQAeAVAjAnQAcAgAgAqIA1BGIA3BLQAWAfARAZQAgAwAQAfIATAgQAYAmAhAoQAnAwBJBMIBEBHQAlAlAnAzQAcAkAeAsIAvBWQgoAegoAUQgrAVgKADQgEACgEAAQgFAAgDgFg");
            this.shape_348.setTransform(-55.0344,-134.4016);
        
            this.shape_349 = new cjs.Shape();
            this.shape_349.graphics.f().s("#F7BCC8").ss(4,1,1).p("An+k6QgEgxAIgrQALg5AeggQAggjAygIQAbgDAaADQAtAGArAdQAdAVAjAoQAdAfAfAqQAeAnAXAfQAiAtAVAdQAWAgARAZQAgAvARAfQAJAQAKARQAYAmAhAnQAoAwBJBMQAfAgAmAnQAkAlAnAyQAdAlAeArQAXAvATAmQgpAfgoATQgpATgLACQgLAFgFgHQgHgKgSgPQgIgHgJgHQgqgggOgMQgSgRgOgOQgtgqgUgUQgfggg0goQghgZgrgeQgogchAgrQgigXgrgeQgogeg7g5QgfgegjglQhGhJgqg3QgUgcgOgZQgHgNgGgMQgJgWgFgng");
            this.shape_349.setTransform(-55.2417,-134.3995);
        
            this.shape_350 = new cjs.Shape();
            this.shape_350.graphics.f("#FFFFFF").s().p("AFrIYQgHgKgSgPIgRgOQgqgggOgMIgggfIhBg+Qgfggg0goQghgZgrgeIhohHIhNg1Qgogeg7g5QgfgegjglQhGhJgqg3QgUgcgOgZIgNgZQgJgWgFgnIAAgCQgEgwAIgsQALg5AeggQAggjAygIQAbgDAaADQAtAGArAdQAdAWAjAnQAdAfAfAqIA1BGQAiAtAVAdIAnA5QAgAvARAfIATAhQAYAmAhAnQAoAwBJBMIBFBHQAkAlAnAyQAdAlAeArIAqBVQgpAfgoATQgpATgLACQgEACgEAAQgFAAgDgEg");
            this.shape_350.setTransform(-55.2417,-134.3995);
        
            this.shape_351 = new cjs.Shape();
            this.shape_351.graphics.f().s("#F7BCC8").ss(4,1,1).p("An+k7QgDgxAIgrQAMg4AeggQAhgiAygGQAbgEAaAEQAtAGAqAeQAdAWAjAnQAdAgAfApQAeAnAYAfQAhAsAWAeQAWAfARAZQAfAwASAfQAJAQAKAQQAYAmAiAnQAoAwBJBLQAgAhAlAmQAkAlAnAzQAdAlAeArQAWAuAQAmQgrAfgnASQgoASgLABQgLAEgFgHQgHgKgSgPQgIgHgJgGQgqgggOgNQgSgRgOgNQgsgqgWgVQgfgfg0goQghgZgrgeQgogbhAgrQgigYgrgdQgogfg7g5QgggdgjglQhGhJgpg3QgUgcgOgaQgHgNgFgMQgKgXgEgmg");
            this.shape_351.setTransform(-55.426,-134.4089);
        
            this.shape_352 = new cjs.Shape();
            this.shape_352.graphics.f("#FFFFFF").s().p("AFrIWQgHgKgSgPIgRgNQgqgggOgNIgggeIhCg/Qgfgfg0goQghgZgrgeIhohGIhNg1Qgogfg7g5QgggdgjglQhGhJgpg3QgUgcgOgaIgMgZQgKgXgEgmIAAgCQgDgxAIgrQAMg4AeggQAhgiAygGQAbgEAaAEQAtAGAqAeQAdAWAjAnQAdAgAfApIA2BGIA3BKIAnA4QAfAwASAfIATAgQAYAmAiAnQAoAwBJBLIBFBHQAkAlAnAzQAdAlAeArQAWAuAQAmQgrAfgnASQgoASgLABIgHABQgGAAgDgEg");
            this.shape_352.setTransform(-55.426,-134.4089);
        
            this.shape_353 = new cjs.Shape();
            this.shape_353.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9k8QgEgxAJgrQAMg4AggfQAhghAygGQAbgDAZAFQAtAHAqAeQAeAVAiAnQAeAhAeAoQAfAoAXAeQAiAtAVAdQAWAgARAZQAfAuATAgQAJAQAKAQQAZAlAiAoQAoAvBJBLQAgAhAlAmQAkAlAnAzQAdAlAeArQAUAuANAlQgsAgglARQgoAQgLgBQgLAEgFgHQgHgKgTgOQgHgHgJgHQgqgfgOgNQgTgRgNgOQgsgogWgWQgggfg0goQghgYgsgeQgngbhBgrQgigXgqgeQgpgfg7g5QgfgdgjglQhHhJgog3QgUgbgOgbQgGgNgFgMQgKgXgDgmg");
            this.shape_353.setTransform(-55.626,-134.4373);
        
            this.shape_354 = new cjs.Shape();
            this.shape_354.graphics.f("#FFFFFF").s().p("AFrITQgHgKgTgOIgQgOQgqgfgOgNIgggfIhCg+Qgggfg0goQghgYgsgeIhohGIhMg1Qgpgfg7g5QgfgdgjglQhHhJgog3QgUgbgOgbIgLgZQgKgXgDgmIAAgCQgEgxAJgrQAMg4AggfQAhghAygGQAbgDAZAFQAtAHAqAeQAeAVAiAnQAeAhAeAoIA2BGIA3BKIAnA5QAfAuATAgQAJAQAKAQQAZAlAiAoQAoAvBJBLIBFBHQAkAlAnAzQAdAlAeArQAUAuANAlQgsAgglARQgoAQgLgBIgHACQgGAAgDgFg");
            this.shape_354.setTransform(-55.626,-134.4373);
        
            this.shape_355 = new cjs.Shape();
            this.shape_355.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9k9QgEgyAKgqQANg3AggfQAiggAygFQAbgDAZAFQAsAIArAeQAdAWAjAnQAdAgAfApQAeAnAXAfQAiAsAWAeQAWAfARAZQAfAuASAgQAKAQAKAQQAZAlAiAnQAqAwBIBKQAgAhAlAmQAlAmAnAyQAcAlAeArQASAtALAlQgtAhglAPQgmAPgNgCQgKAEgFgHQgIgKgSgPQgHgGgJgHQgpgfgPgOQgTgQgNgOQgrgogYgWQgfgfg1gnQghgZgsgdQgogbhAgrQgigXgqgeQgpgfg7g4QgggegigkQhIhKgog3QgTgbgNgbQgHgNgFgMQgJgYgDglg");
            this.shape_355.setTransform(-55.8221,-134.4479);
        
            this.shape_356 = new cjs.Shape();
            this.shape_356.graphics.f("#FFFFFF").s().p("AFrIRQgIgKgSgPIgQgNQgpgfgPgOIgggeIhDg+Qgfgfg1gnQghgZgsgdIhohGIhMg1Qgpgfg7g4QgggegigkQhIhKgog3QgTgbgNgbIgMgZQgJgYgDglIAAgCQgEgyAKgqQANg3AggfQAiggAygFQAbgDAZAFQAsAIArAeQAdAWAjAnQAdAgAfApIA1BGQAiAsAWAeQAWAfARAZQAfAuASAgIAUAgQAZAlAiAnQAqAwBIBKIBFBHQAlAmAnAyQAcAlAeArQASAtALAlQgtAhglAPQgmAPgNgCIgGACQgGAAgDgFg");
            this.shape_356.setTransform(-55.8221,-134.4479);
        
            this.shape_357 = new cjs.Shape();
            this.shape_357.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9k+QgDgyAKgqQANg3AigdQAiggAygEQAbgCAZAFQAsAIAqAfQAdAWAjAnQAdAgAfAoQAfAoAXAeQAiAsAVAeQAXAfAQAZQAfAuATAgQAKAQALAQQAYAlAjAnQAqAwBJBKQAfAgAmAmQAkAmAnAyQAdAlAeArQAPAtAJAkQgvAigkAOQglANgNgDQgKAEgFgHQgIgKgSgPQgIgHgJgGQgogfgQgOQgSgRgOgNQgpgngZgXQgggfg1gnQghgYgsgdQgogchAgqQgigXgrgeQgpgfg6g4QgggegjgkQhHhJgog3QgTgbgNgcQgGgNgFgMQgJgYgDgmg");
            this.shape_357.setTransform(-56.0346,-134.4452);
        
            this.shape_358 = new cjs.Shape();
            this.shape_358.graphics.f("#FFFFFF").s().p("AFrIPQgIgKgSgPIgRgNQgogfgQgOIgggeIhCg+Qgggfg1gnQghgYgsgdIhohGIhNg1Qgpgfg6g4IhDhCQhHhJgog3QgTgbgNgcIgLgZQgJgYgDgmIAAgBQgDgyAKgqQANg3AigdQAiggAygEQAbgCAZAFQAsAIAqAfQAdAWAjAnQAdAgAfAoIA2BGIA3BKQAXAfAQAZQAfAuATAgIAVAgQAYAlAjAnQAqAwBJBKIBFBGQAkAmAnAyQAdAlAeArQAPAtAJAkQgvAigkAOQglANgNgDIgGACQgGAAgDgFg");
            this.shape_358.setTransform(-56.0346,-134.4452);
        
            this.shape_359 = new cjs.Shape();
            this.shape_359.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9k/QgDgyAKgqQAPg2AjgdQAjgfAxgDQAbgCAZAGQArAIAqAgQAdAWAjAnQAeAhAeAnQAgAoAWAeQAiAsAWAdQAWAgARAZQAeAtAVAhQAJAQALAPQAZAlAjAnQAqAwBJBJQAgAgAlAnQAlAlAnAzQAdAlAeAqQAMAtAHAkQgwAigjANQgkALgOgDQgKADgFgHQgIgKgSgPQgHgGgJgHQgpgfgPgOQgTgRgNgNQgpgmgbgXQgggfg1gnQgggYgsgdQgpgbhAgqQgigXgqgfQgqgfg6g4QghgegigjQhIhKgng3QgTgagNgcQgGgOgEgMQgJgYgDgmg");
            this.shape_359.setTransform(-56.25,-134.4711);
        
            this.shape_360 = new cjs.Shape();
            this.shape_360.graphics.f("#FFFFFF").s().p("AFrINQgIgKgSgPIgRgNQgogfgPgOIghgeIhCg9Qghgfg1gnQghgYgrgdIhphFQgigXgqgfQgqgfg6g4IhDhBQhIhKgng3QgTgagNgcIgLgaQgIgYgDgmIAAgBQgDgyALgqQAOg2AigdQAjgfAygDQAbgCAZAGQArAIArAgQAdAWAiAnQAeAhAeAnIA3BGIA3BJIAnA5IAzBOQAJAQALAPQAYAlAkAnQAqAwBJBJIBFBHQAkAlAoAzQAdAlAdAqQANAtAGAkQgvAigjANQglALgNgDIgGABQgFAAgEgFg");
            this.shape_360.setTransform(-56.25,-134.4711);
        
            this.shape_361 = new cjs.Shape();
            this.shape_361.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9lAQgDgyALgqQAPg2AkgcQAjgeAygCQAbgCAZAGQAqAJArAgQAdAXAiAmQAeAiAeAmQAfAoAYAeQAiAsAVAeQAXAfAQAZQAeAtAVAhQAKAQALAPQAZAkAkAoQAqAwBJBIQAgAgAlAnQAkAmAnAyQAdAlAeAqQALAsAEAkQgxAigiANQgjAJgOgEQgKACgGgHQgIgKgRgOQgIgHgJgGQgogfgQgOQgSgRgOgNQgogmgbgXQghgfg1gmQghgYgsgdQgpgbhAgqQghgXgrgeQgqggg6g4QghgegigjQhIhKgng2QgSgagNgdQgGgOgEgMQgJgZgCglg");
            this.shape_361.setTransform(-56.4481,-134.4535);
        
            this.shape_362 = new cjs.Shape();
            this.shape_362.graphics.f("#FFFFFF").s().p("AF6IPQgKACgGgHQgIgKgRgOIgRgNQgogfgQgOIgggeQgogmgbgXQghgfg1gmIhNg1IhphFIhMg1Qgqggg6g4QghgegigjQhIhKgng2QgSgagNgdIgKgaQgJgZgCglIAAgBQgDgyALgqQAPg2AkgcQAjgeAygCQAbgCAZAGQAqAJArAgQAdAXAiAmQAeAiAeAmIA3BGIA3BKQAXAfAQAZIAzBOIAVAfQAZAkAkAoQAqAwBJBIIBFBHQAkAmAnAyQAdAlAeAqQALAsAEAkQgxAigiANQgYAGgOAAIgLgBg");
            this.shape_362.setTransform(-56.4481,-134.4535);
        
            this.shape_363 = new cjs.Shape();
            this.shape_363.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9lCQgCgyAMgpQAPg2AlgbQAkgdAxgCQAbgBAZAGQAqAKAqAgQAdAXAjAmQAeAiAeAmQAfAoAYAeQAiArAVAeQAXAgAQAZQAeAsAVAiQAKAPALAQQAZAkAlAnQArAwBIBIQAhAgAlAnQAkAlAnAyQAdAmAeApQAIAsACAjQgyAkghALQgjAHgOgFQgKACgFgHQgIgKgSgOQgIgHgJgGQgngfgRgOQgSgRgOgNQgnglgcgYQghgeg1gmQghgYgsgdQgqgbg/gpQgigXgrgfQgqggg6g3QghgegigjQhIhKgmg3QgTgZgMgeQgGgNgEgNQgIgZgDglg");
            this.shape_363.setTransform(-56.6648,-134.4269);
        
            this.shape_364 = new cjs.Shape();
            this.shape_364.graphics.f("#FFFFFF").s().p("AF6IMQgKACgFgHQgIgKgSgOIgRgNIg4gtIgggeQgnglgcgYQghgeg1gmQghgYgsgdIhphEQgigXgrgfQgqggg6g3QghgegigjQhIhKgmg3QgTgZgMgeIgKgaQgIgZgDglIAAgBQgCgyAMgpQAPg2AlgbQAkgdAxgCQAbgBAZAGQAqAKAqAgQAdAXAjAmQAeAiAeAmIA3BGIA3BJQAXAgAQAZIAzBOIAVAfQAZAkAlAnQArAwBIBIQAhAgAlAnQAkAlAnAyQAdAmAeApQAIAsACAjQgyAkghALQgVAEgOAAQgJAAgFgCg");
            this.shape_364.setTransform(-56.6648,-134.4269);
        
            this.shape_365 = new cjs.Shape();
            this.shape_365.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9lEQgBgyALgpQAQg1AmgbQAlgcAxgBQAbAAAZAGQApAKArAhQAdAXAiAmQAeAiAeAmQAgAoAXAeQAiArAVAeQAYAgAQAYQAdAtAWAhQAKAQALAPQAaAjAkAoQAsAwBIBIQAhAfAlAnQAkAmAnAyQAdAlAeAqQAHAsgBAiQg0AkggAKQghAGgPgGQgKABgFgHQgJgKgRgOQgIgGgJgHQgngegRgPQgSgRgOgMQgnglgdgYQghgeg1gmQghgXgsgdQgqgchAgoQghgXgrgfQgqggg6g3QghgfgigiQhJhKgmg3QgSgZgMgeQgFgOgFgNQgIgZgCgkg");
            this.shape_365.setTransform(-56.8569,-134.3768);
        
            this.shape_366 = new cjs.Shape();
            this.shape_366.graphics.f("#FFFFFF").s().p("AF6IKQgKABgFgHQgJgKgRgOIgRgNQgngegRgPIgggdQgnglgdgYQghgeg1gmQghgXgsgdIhqhEQghgXgrgfQgqggg6g3QghgfgigiQhJhKgmg3QgSgZgMgeIgKgbQgIgZgCgkIAAgCQgBgyALgpQAQg1AmgbQAlgcAxgBQAbAAAZAGQApAKArAhQAdAXAiAmQAeAiAeAmIA3BGIA3BJQAYAgAQAYIAzBOIAVAfQAaAjAkAoQAsAwBIBIQAhAfAlAnQAkAmAnAyQAdAlAeAqQAHAsgBAiQg0AkggAKQgRADgMAAQgMAAgHgDg");
            this.shape_366.setTransform(-56.8569,-134.3768);
        
            this.shape_367 = new cjs.Shape();
            this.shape_367.graphics.f().s("#F7BCC8").ss(4,1,1).p("An9lFQgBgzAMgoQAQg1AngaQAmgbAxgBQAaAAAZAHQApALArAhQAcAXAiAnQAfAiAeAlQAgAoAXAdQAiAsAVAeQAYAgAQAYQAdAsAXAiQAKAPALAQQAZAiAmAoQArAwBJBHQAhAgAlAnQAkAlAnAyQAdAmAeApQAEAsgDAhQg1AlgfAJQggAEgQgHQgJABgGgGQgJgLgRgOQgIgGgIgHQgngegRgPQgTgRgNgMQgngkgegZQgigeg0glQghgXgsgdQgrgbg/gpQgigWgrggQgqggg6g3QghgegigiQhJhLgmg2QgRgZgMgfQgGgOgEgMQgHgagCgkg");
            this.shape_367.setTransform(-57.0146,-134.337);
        
            this.shape_368 = new cjs.Shape();
            this.shape_368.graphics.f("#FFFFFF").s().p("AF5IHQgJABgGgGQgJgLgRgOIgQgNQgngegRgPIgggdQgngkgegZQgigeg0glQghgXgsgdIhqhEQgigWgrggQgqggg6g3IhDhAQhJhLgmg2QgRgZgMgfIgKgaQgHgagCgkIAAgBQgBgzAMgoQAQg1AngaQAmgbAxgBQAaAAAZAHQApALArAhQAcAXAiAnQAfAiAeAlIA3BFIA3BKQAYAgAQAYIA0BOIAVAfQAZAiAmAoQArAwBJBHQAhAgAlAnQAkAlAnAyQAdAmAeApQAEAsgDAhQg1AlgfAJQgNACgKAAQgQAAgJgFg");
            this.shape_368.setTransform(-57.0146,-134.337);
        
            this.shape_369 = new cjs.Shape();
            this.shape_369.graphics.f().s("#F7BCC8").ss(4,1,1).p("An/lHQgBgzANgoQARg0AogZQAmgbAxABQAbAAAYAHQApALAqAiQAdAYAiAmQAfAiAeAlQAgAoAXAdQAiArAVAfQAYAfAQAZQAdArAXAjQAKAPAMAPQAZAiAmAoQAsAwBJBHQAgAfAlAnQAlAmAnAyQAdAlAeAqQACArgFAhQg3AlgeAIQggADgPgIQgKAAgFgGQgJgLgSgOQgHgGgJgHQgmgdgSgPQgTgSgNgMQgmgjgfgZQgigeg1glQghgXgrgdQgsgbg/goQgigWgrggQgqggg6g3QghgfgighQhJhLglg2QgSgZgLgfQgGgOgEgNQgHgagCgkg");
            this.shape_369.setTransform(-57.1,-134.2596);
        
            this.shape_370 = new cjs.Shape();
            this.shape_370.graphics.f("#FFFFFF").s().p("AF4IFQgKAAgFgGQgJgLgSgOIgQgNQgmgdgSgPIgfgeQgngjgfgZQgigeg1glIhMg0IhrhDQghgWgsggQgpggg7g3IhChAQhKhLglg2QgRgZgMgfIgKgbQgHgagCgkIAAgBQAAgzANgoQAQg0AogZQAmgbAyABQAaAAAYAHQApALAqAiQAeAYAhAmQAfAiAeAlIA3BFIA4BKQAXAfAQAZIA0BOIAWAeQAaAiAlAoQAsAwBJBHQAgAfAmAnQAkAmAnAyQAdAlAeAqQACArgFAhQg3AlgeAIIgQAAQgUAAgLgFg");
            this.shape_370.setTransform(-57.1,-134.2596);
        
            this.shape_371 = new cjs.Shape();
            this.shape_371.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoAlJQgBgzANgoQASg0AogYQAogaAwABQAbABAYAIQApAMAqAiQAdAXAhAmQAgAjAdAlQAgAoAXAdQAiArAWAeQAYAgAQAYQAcArAYAjQAKAPAMAPQAaAiAmAoQAsAwBJBGQAhAgAlAnQAkAlAnAyQAdAmAeApQAAAqgIAhQg3AmgdAHQgfABgRgJQgJAAgFgHQgKgKgRgOQgHgGgJgHQgmgdgSgQQgTgRgNgMQglgjgggZQgjgeg1gkQgggXgsgdQgsgbg/goQgigWgrggQgqggg6g3QgigeghgiQhKhLglg2QgQgYgMggQgFgOgEgNQgHgbgBgjg");
            this.shape_371.setTransform(-57.0784,-134.1719);
        
            this.shape_372 = new cjs.Shape();
            this.shape_372.graphics.f("#FFFFFF").s().p("AF1ICQgJAAgFgHQgKgKgRgOIgQgNQgmgdgSgQIgggdQglgjgggZQgjgeg1gkQgggXgsgdIhrhDQgigWgrggQgqggg6g3QgigeghgiQhKhLglg2QgQgYgMggIgJgbQgHgbgBgjIAAgBQgBgzANgoQASg0AogYQAogaAwABQAbABAYAIQApAMAqAiQAdAXAhAmQAgAjAdAlIA3BFIA4BJQAYAgAQAYQAcArAYAjIAWAeQAaAiAmAoQAsAwBJBGQAhAgAlAnQAkAlAnAyIA7BPQAAAqgIAhQg3AmgdAHIgGAAQgbAAgPgIg");
            this.shape_372.setTransform(-57.0784,-134.1719);
        
            this.shape_373 = new cjs.Shape();
            this.shape_373.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoClLQgBg0AOgnQASgzAqgYQAogZAwACQAaABAZAJQAoAMAqAiQAdAYAhAmQAgAjAdAkQAgAoAXAdQAjArAVAeQAYAgAQAYQAcArAZAjQAKAPAMAPQAaAhAmApQAtAvBJBGQAhAgAlAnQAkAlAnAyQAeAmAeApQgDAqgKAgQg5AmgcAGQgegBgRgKQgJAAgGgGQgJgLgRgNQgIgHgIgGQgmgegSgPQgUgRgMgNQglgigggaQgkgdg1gkQgggWgtgdQgrgbhAgoQghgWgrggQgrghg6g2QgigegggiQhKhLglg1QgQgZgMghQgFgNgDgNQgHgbgBgkg");
            this.shape_373.setTransform(-57.0509,-134.0793);
        
            this.shape_374 = new cjs.Shape();
            this.shape_374.graphics.f("#FFFFFF").s().p("AFzH+QgJAAgGgGQgJgLgRgNIgQgNQgmgegSgPIgggeQglgigggaQgkgdg1gkQgggWgtgdIhrhDQghgWgrggQgrghg6g2QgigegggiQhKhLglg1QgQgZgMghIgIgaQgHgbgBgkIAAAAQgBg0AOgnQASgzAqgYQAogZAwACQAaABAZAJQAoAMAqAiQAdAYAhAmQAgAjAdAkIA3BFIA4BJIAoA4QAcArAZAjQAKAPAMAPQAaAhAmApQAtAvBJBGQAhAgAlAnQAkAlAnAyIA8BPQgDAqgKAgQg5AmgcAGQgegBgRgKg");
            this.shape_374.setTransform(-57.0509,-134.0793);
        
            this.shape_375 = new cjs.Shape();
            this.shape_375.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoElOQgBgzAPgnQATgzAqgXQApgYAwADQAaABAZAJQAnANAqAiQAdAZAiAlQAfAkAdAkQAhAnAXAdQAiArAWAeQAYAgAQAYQAbArAZAjQALAPAMAPQAaAhAnAoQAuAwBIBFQAhAgAlAnQAkAmAnAxQAeAmAeApQgFApgMAgQg6AngcAFQgdgDgRgLQgJAAgGgHQgJgKgRgOQgIgGgIgHQgmgdgSgPQgUgSgMgMQgkghgigbQgjgdg2gjQgggWgtgdQgsgbg/goQghgVgsghQgqghg6g2QgigeghghQhKhLgkg2QgQgYgMgiQgEgNgEgNQgHgcAAgjg");
            this.shape_375.setTransform(-57.0508,-133.962);
        
            this.shape_376 = new cjs.Shape();
            this.shape_376.graphics.f("#FFFFFF").s().p("AFxH7QgJAAgGgHQgJgKgRgOIgQgNIg4gsIgggeQgkghgigbQgjgdg2gjIhNgzIhrhDQghgVgsghQgqghg6g2QgigeghghQhKhLgkg2QgQgYgMgiIgIgaQgHgcAAgjIAAgBQgBgzAPgnQATgzAqgXQApgYAwADQAaABAZAJQAnANAqAiQAdAZAiAlQAfAkAdAkIA4BEQAiArAWAeQAYAgAQAYQAbArAZAjIAXAeQAaAhAnAoQAuAwBIBFQAhAgAlAnQAkAmAnAxIA8BPQgFApgMAgQg6AngcAFQgdgDgRgLg");
            this.shape_376.setTransform(-57.0508,-133.962);
        
            this.shape_377 = new cjs.Shape();
            this.shape_377.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoHlQQAAgzAPgnQAUgzArgWQApgXAxADQAaACAYAKQAnANAqAjQAdAYAhAmQAgAkAdAjQAhAoAXAcQAiArAWAeQAYAhAQAXQAbArAaAjQAKAPANAPQAaAgAnApQAuAwBJBEQAhAgAlAnQAkAmAnAxQAeAmAeApQgIApgOAfQg7AogbADQgcgEgSgMQgJgBgFgGQgKgLgRgNQgIgHgIgGQglgdgTgQQgUgRgMgMQgjghgjgbQgkgdg1gjQghgWgsgcQgtgbg/goQghgVgrghQgrghg6g2QgigeghghQhKhLgkg2QgQgXgLgjQgFgNgDgNQgGgcgBgjg");
            this.shape_377.setTransform(-57.025,-133.8673);
        
            this.shape_378 = new cjs.Shape();
            this.shape_378.graphics.f("#FFFFFF").s().p("AFuH4QgJgBgFgGQgKgLgRgNIgQgNQglgdgTgQIgggdQgjghgjgbQgkgdg1gjIhNgyIhshDQghgVgrghQgrghg6g2QgigeghghQhKhLgkg2QgQgXgLgjQgFgNgDgNQgGgcgBgjIAAgBQAAgzAPgnQAUgzArgWQApgXAxADQAaACAYAKQAnANAqAjQAdAYAhAmQAgAkAdAjIA4BEQAiArAWAeQAYAhAQAXQAbArAaAjQAKAPANAPQAaAgAnApQAuAwBJBEQAhAgAlAnQAkAmAnAxIA8BPQgIApgOAfQg7AogbADQgcgEgSgMg");
            this.shape_378.setTransform(-57.025,-133.8673);
        
            this.shape_379 = new cjs.Shape();
            this.shape_379.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoJlSQABg0APgmQAUgyAsgWQAqgWAxAEQAZACAZAKQAmAOArAjQAcAZAhAmQAgAjAdAkQAhAnAXAdQAiAqAWAfQAZAgAPAXQAbArAbAjQAKAPANAPQAaAgAoApQAuAvBJBEQAhAgAlAnQAkAmAnAxQAeAmAeApQgJApgRAeQg9AogZADQgbgGgTgNQgJgBgFgGQgLgLgQgNQgIgHgIgGQglgdgTgQQgUgRgMgMQgjgggjgcQglgcg1gjQgggWgtgcQgtgbg/gnQghgWgsghQgqghg6g1QgjgfggghQhLhLgkg1QgPgYgLgjQgEgOgDgNQgHgcAAgig");
            this.shape_379.setTransform(-57.025,-133.7558);
        
            this.shape_380 = new cjs.Shape();
            this.shape_380.graphics.f("#FFFFFF").s().p("AFsH1QgJgBgFgGQgLgLgQgNIgQgNQglgdgTgQQgUgRgMgMQgjgggjgcQglgcg1gjIhNgyIhshCQghgWgsghQgqghg6g1QgjgfggghQhLhLgkg1QgPgYgLgjIgHgbQgHgcAAgiIAAgBQABg0APgmQAUgyAsgWQAqgWAxAEQAZACAZAKQAmAOArAjQAcAZAhAmQAgAjAdAkIA4BEQAiAqAWAfQAZAgAPAXQAbArAbAjQAKAPANAPQAaAgAoApQAuAvBJBEQAhAgAlAnQAkAmAnAxIA8BPQgJApgRAeQg9AogZADQgbgGgTgNg");
            this.shape_380.setTransform(-57.025,-133.7558);
        
            this.shape_381 = new cjs.Shape();
            this.shape_381.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoLlUQABg0APgmQAVgyAtgVQAsgVAvAFQAaADAYAKQAmAOArAkQAcAZAhAlQAgAkAdAjQAhAoAXAcQAiAqAWAfQAZAgAPAYQAbApAcAkQAKAPANAPQAaAgAoAoQAvAwBJBEQAhAfAmAnQAkAmAnAxQAdAmAeApQgLAogUAeQg+ApgYABQgagHgUgOQgIgCgFgGQgLgLgQgNQgIgGgIgHQglgcgTgQQgUgSgMgMQgigfglgcQglgcg1gjQgggVgugcQgtgcg+gmQghgVgsgiQgrghg6g1QgjgfggggQhLhMgjg1QgPgXgLgkQgEgOgDgNQgGgdAAgig");
            this.shape_381.setTransform(-57,-133.6647);
        
            this.shape_382 = new cjs.Shape();
            this.shape_382.graphics.f("#FFFFFF").s().p("AFpHyQgIgCgFgGQgLgLgQgNIgRgNQgkgcgTgQIghgeQghgfglgcQglgcg1gjQghgVgsgcIhshCQgigVgrgiQgrghg6g1QgigfggggQhMhMgjg1QgPgXgLgkIgHgbQgGgdAAgiIAAAAQABg0AQgmQAUgyAtgVQAsgVAvAFQAaADAZAKQAmAOAqAkQAcAZAhAlQAgAkAdAjIA4BEQAjAqAWAfQAYAgAPAYQAbApAbAkQALAPANAPQAaAgAoAoQAvAwBJBEQAhAfAlAnQAlAmAnAxIA7BPQgLAogUAeQg+ApgZABQgagHgTgOg");
            this.shape_382.setTransform(-57,-133.6647);
        
            this.shape_383 = new cjs.Shape();
            this.shape_383.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoNlXQABg0ARgmQAVgxAugUQAsgUAwAFQAZADAZALQAlAOAqAlQAdAZAhAlQAgAlAdAiQAhAoAXAcQAiAqAWAfQAZAgAPAXQAbAqAbAkQALAPANAPQAbAfAoAoQAwAwBIBDQAhAfAmAoQAkAmAnAwQAdAnAeAoQgNAogWAeQg/ApgYABQgZgKgUgOQgIgDgGgGQgKgLgQgNQgIgGgIgGQgkgdgUgQQgUgSgMgLQgigfglgcQglgdg2giQgggVgtgcQgugbg/gnQgggVgsghQgrgig6g0QgjgggggfQhMhMgig1QgPgXgKgkQgEgOgDgNQgGgeAAghg");
            this.shape_383.setTransform(-57.0019,-133.5343);
        
            this.shape_384 = new cjs.Shape();
            this.shape_384.graphics.f("#FFFFFF").s().p("AFnHvQgIgDgGgGQgKgLgQgNIgQgMIg4gtIgggdQgigfglgcQglgdg2giIhNgxIhthCQgggVgsghQgrgig6g0QgjgggggfQhMhMgig1QgPgXgKgkIgHgbQgGgeAAghIAAgBQABg0ARgmQAVgxAugUQAsgUAwAFQAZADAZALQAlAOAqAlQAdAZAhAlQAgAlAdAiIA4BEQAiAqAWAfQAZAgAPAXQAbAqAbAkIAYAeQAbAfAoAoQAwAwBIBDQAhAfAmAoQAkAmAnAwIA7BPQgNAogWAeQg/ApgYABQgZgKgUgOg");
            this.shape_384.setTransform(-57.0019,-133.5343);
        
            this.shape_385 = new cjs.Shape();
            this.shape_385.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoPlZQABg0ARgmQAWgwAvgUQAsgTAwAGQAaADAYALQAlAPAqAlQAcAaAhAlQAhAlAcAiQAiAnAXAcQAiAqAXAfQAYAgAPAYQAaApAdAkQALAPANAPQAaAeApApQAwAwBJBCQAhAfAmAoQAkAmAnAxQAdAmAeAoQgQAogYAdQhAAqgXgBQgYgLgVgPQgHgDgGgGQgLgLgQgNQgIgGgIgHQgkgcgUgQQgUgSgMgLQgggfgngcQgmgcg1giQghgVgtgcQgtgbg/gmQghgVgsgiQgrgig6g0QgjgggggfQhMhMgig1QgOgWgKglQgEgOgDgOQgGgdABgig");
            this.shape_385.setTransform(-56.9771,-133.4444);
        
            this.shape_386 = new cjs.Shape();
            this.shape_386.graphics.f("#FFFFFF").s().p("AGRIGQgYgLgVgPQgHgDgGgGQgLgLgQgNIgQgNIg4gsIgggdQgggfgngcQgmgcg1giIhOgxIhshBQghgVgsgiQgrgig6g0QgjgggggfQhMhMgig1QgOgWgKglIgHgcQgGgdABgiIAAAAQABg0ARgmQAWgwAvgUQAsgTAwAGQAaADAYALQAlAPAqAlQAcAaAhAlQAhAlAcAiIA5BDIA5BJQAYAgAPAYQAaApAdAkIAYAeQAaAeApApQAwAwBJBCQAhAfAmAoQAkAmAnAxIA7BOQgQAogYAdQg/ApgXAAIgBAAg");
            this.shape_386.setTransform(-56.9771,-133.4444);
        
            this.shape_387 = new cjs.Shape();
            this.shape_387.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoRlbQACg0ARglQAWgxAxgSQAtgTAvAHQAaAEAYALQAkAQAqAlQAdAaAgAlQAiAlAbAhQAiAoAXAcQAjAqAWAeQAZAhAPAXQAZApAeAlQALAOANAPQAbAfApAoQAwAwBJBCQAhAfAmAnQAkAmAnAxQAeAnAeAnQgTAogaAcQhCArgWgCQgXgMgVgRQgHgDgGgGQgLgLgQgNQgIgGgIgGQgkgcgUgRQgUgSgMgLQgggegogdQgmgcg1ghQghgVgtgcQgugbg/gmQgggVgsghQgsgjg5gzQgkgggfgfQhMhMgig1QgOgWgKgmQgEgOgDgNQgFgeABgig");
            this.shape_387.setTransform(-56.9523,-133.3648);
        
            this.shape_388 = new cjs.Shape();
            this.shape_388.graphics.f("#FFFFFF").s().p("AGOIGQgXgMgVgRQgHgDgGgGQgLgLgQgNIgQgMIg4gtIgggdQgggegogdQgmgcg1ghIhOgxIhthBQgggVgsghQgsgjg5gzQgkgggfgfQhMhMgig1QgOgWgKgmIgHgbQgFgeABgiQACg0ARglQAWgxAxgSQAtgTAvAHQAaAEAYALQAkAQAqAlQAdAaAgAlQAiAlAbAhIA5BEIA5BIQAZAhAPAXQAZApAeAlQALAOANAPQAbAfApAoQAwAwBJBCQAhAfAmAnQAkAmAnAxIA8BOQgTAogaAcQg/ApgXAAIgCAAg");
            this.shape_388.setTransform(-56.9523,-133.3648);
        
            this.shape_389 = new cjs.Shape();
            this.shape_389.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoTldQACg1ASgkQAXgwAxgSQAugSAvAIQAZAEAZAMQAkAQAqAmQAcAaAhAlQAhAlAcAhQAiAoAWAbQAjAqAXAfQAZAgAOAXQAaApAdAlQAMAOANAPQAbAeAqApQAxAwBIBBQAiAfAlAnQAkAnAnAwQAeAnAeAnQgVAngcAcQhDAsgVgDQgWgOgWgSQgHgDgGgGQgMgLgPgNQgIgHgIgGQgjgbgVgSQgUgRgMgLQgfgdgpgeQgmgcg2ghQgggUgugcQgugbg/gmQgggUgsgiQgsgjg5gzQgkgggfgfQhNhMgig1QgNgWgKgmQgEgOgCgNQgFgfABghg");
            this.shape_389.setTransform(-56.9583,-133.2634);
        
            this.shape_390 = new cjs.Shape();
            this.shape_390.graphics.f("#FFFFFF").s().p("AGMIGQgWgOgWgSQgHgDgGgGIgbgYIgQgNIg4gtIgggcQgfgdgpgeQgmgcg2ghIhOgwIhthBQgggUgsgiQgsgjg5gzQgkgggfgfQhNhMgig1QgNgWgKgmIgGgbQgFgfABghIAAAAQACg1ASgkQAXgwAxgSQAugSAvAIQAZAEAZAMQAkAQAqAmQAcAaAhAlIA9BGIA4BDQAjAqAXAfQAZAgAOAXQAaApAdAlIAZAdQAbAeAqApQAxAwBIBBQAiAfAlAnQAkAnAnAwIA8BOQgVAngcAcQg/ApgXAAIgCAAg");
            this.shape_390.setTransform(-56.9583,-133.2634);
        
            this.shape_391 = new cjs.Shape();
            this.shape_391.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoVlfQACg1ASglQAYgvAygRQAugRAvAIQAaAFAYAMQAjARAqAmQAdAaAgAlQAiAmAbAgQAjAoAWAcQAjApAXAfQAZAhAOAXQAZAnAfAmQALAPANAOQAcAeAqApQAxAvBIBBQAiAfAmAnQAkAnAnAwQAeAnAeAnQgXAngfAcQhEAsgUgFQgWgPgWgTQgHgEgGgGQgLgLgQgMQgIgHgIgGQgjgbgVgSQgUgSgMgLQgegcgqgeQgngbg1ghQghgUgugcQgugbg/glQgggVgsgiQgsgjg5gzQgkgggfgfQhNhMghg1QgOgVgJgnQgEgOgCgOQgFgeACghg");
            this.shape_391.setTransform(-56.9173,-133.1708);
        
            this.shape_392 = new cjs.Shape();
            this.shape_392.graphics.f("#FFFFFF").s().p("AGJIFQgWgPgWgTQgHgEgGgGQgLgLgQgMIgQgNIg4gtIgggdQgegcgqgeQgngbg1ghIhPgwIhthAQgggVgsgiQgsgjg5gzQgkgggfgfQhNhMghg1QgOgVgJgnIgGgcQgFgeACghQACg1ASglQAYgvAygRQAugRAvAIQAaAFAYAMQAjARAqAmQAdAaAgAlIA9BGIA5BEQAjApAXAfQAZAhAOAXQAZAnAfAmIAYAdQAcAeAqApQAxAvBIBBQAiAfAmAnQAkAnAnAwIA8BOQgXAngfAcQg+AogWAAIgEgBg");
            this.shape_392.setTransform(-56.9173,-133.1708);
        
            this.shape_393 = new cjs.Shape();
            this.shape_393.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoXliQACg1ATgkQAYguAzgRQAvgQAvAJQAaAFAYANQAjARAqAnQAcAaAgAlQAiAmAcAgQAiAoAXAbQAiApAXAfQAZAhAPAXQAZAnAfAmQALAPANAOQAcAdArApQAxAwBIBAQAjAfAlAnQAkAnAnAwQAeAnAeAnQgZAnghAbQhGAsgTgFQgUgRgXgUQgHgEgGgGQgMgLgPgNQgIgGgIgGQgigbgWgSQgUgSgMgLQgegbgrgfQgngbg1ghQghgUgugbQgugbg/glQgggVgsgiQgsgjg6gzQgkgggfgeQhNhNghg0QgNgWgJgnQgDgOgCgOQgFgfACggg");
            this.shape_393.setTransform(-56.9286,-133.0717);
        
            this.shape_394 = new cjs.Shape();
            this.shape_394.graphics.f("#FFFFFF").s().p("AGGIFIgrglQgHgEgGgGIgbgYIgQgMIg4gtIgggdQgegbgrgfQgngbg1ghIhPgvIhthAQgggVgsgiQgsgjg6gzQgkgggfgeQhNhNghg0QgNgWgJgnIgFgcQgFgfACggIAAgBQACg1ATgkQAYguAzgRQAvgQAvAJQAaAFAYANQAjARAqAnQAcAaAgAlIA+BGIA5BDQAiApAXAfQAZAhAPAXQAZAnAfAmIAYAdQAcAdArApQAxAwBIBAQAjAfAlAnQAkAnAnAwIA8BOQgZAnghAbQg/AngVAAIgFAAg");
            this.shape_394.setTransform(-56.9286,-133.0717);
        
            this.shape_395 = new cjs.Shape();
            this.shape_395.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoZlkQADg1ATgkQAZguA0gQQAwgPAuAKQAaAGAYAMQAiASAqAnQAcAbAgAlQAjAmAbAfQAiAoAXAbQAjApAXAfQAZAhAOAXQAZAnAgAmQALAPAOAOQAbAdArApQAyAvBJBBQAiAeAlAoQAkAmAnAwQAeAnAeAnQgbAmgkAbQhHAtgSgGQgTgUgXgUQgHgFgGgFQgMgMgPgMQgIgHgIgGQgigbgWgSQgVgSgLgKQgdgbgsgfQgogbg1ggQghgUgugbQgvgcg+gkQgggUgtgjQgsgjg5gzQglgggegeQhOhNggg0QgNgVgJgoQgDgOgCgOQgEggACggg");
            this.shape_395.setTransform(-56.9058,-132.9608);
        
            this.shape_396 = new cjs.Shape();
            this.shape_396.graphics.f("#FFFFFF").s().p("AGDIFQgTgUgXgUIgNgKIgbgYIgQgNIg4gtIgggcQgdgbgsgfQgogbg1ggIhPgvIhthAQgggUgtgjQgsgjg5gzQglgggegeQhOhNggg0QgNgVgJgoQgDgOgCgOQgEggACggQADg1ATgkQAZguA0gQQAwgPAuAKQAaAGAYAMQAiASAqAnQAcAbAgAlIA+BFIA5BDQAjApAXAfQAZAhAOAXQAZAnAgAmQALAPAOAOQAbAdArApQAyAvBJBBQAiAeAlAoQAkAmAnAwIA8BOQgbAmgkAbQg/AngVAAIgFAAg");
            this.shape_396.setTransform(-56.9058,-132.9608);
        
            this.shape_397 = new cjs.Shape();
            this.shape_397.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoblmQADg1ATgkQAaguA1gPQAxgOAuALQAZAGAYANQAiASAqAoQAcAbAhAkQAiAmAbAgQAjAoAWAaQAjAqAXAfQAaAgAOAXQAYAnAgAnQAMAOAOAOQAbAdAsApQAzAvBIBAQAiAeAlAoQAlAmAnAwQAdAnAeAnQgdAmgmAaQhIAugRgIQgTgVgYgVQgGgFgGgGQgMgLgQgMQgIgHgHgGQgigbgWgSQgVgSgLgKQgdgbgtgfQgngbg2ggQgggTgvgcQgvgbg+gkQghgUgsgjQgsgjg5gyQglghgegeQhPhMgfg1QgNgUgIgpQgEgOgBgOQgFggADggg");
            this.shape_397.setTransform(-56.9196,-132.8597);
        
            this.shape_398 = new cjs.Shape();
            this.shape_398.graphics.f("#FFFFFF").s().p("AGBIEQgTgVgYgVIgMgLQgMgLgQgMIgPgNIg4gtIgggcQgdgbgtgfQgngbg2ggIhPgvIhtg/QghgUgsgjQgsgjg5gyQglghgegeQhPhMgfg1QgNgUgIgpQgEgOgBgOQgFggADggIAAAAQADg1ATgkQAaguA1gPQAxgOAuALQAZAGAYANQAiASAqAoQAcAbAhAkIA9BGIA5BCQAjAqAXAfQAaAgAOAXQAYAnAgAnIAaAcQAbAdAsApQAzAvBIBAQAiAeAlAoQAlAmAnAwIA7BOQgdAmgmAaQg+AngVAAIgGgBg");
            this.shape_398.setTransform(-56.9196,-132.8597);
        
            this.shape_399 = new cjs.Shape();
            this.shape_399.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoilLQAGhjBCgpQBkgjBGAgQAkARAuAnQAbAWAeAeQAaAZAXAWQArAqAaAdQADADADADQBGBNAgAsQAjAzAyAzQAwAwBYBNQAcAZAfAcQA9A1BDBRQAJALAJALIArA5QAJAOAIAOQgZAUgbARQgMAJgNAIQgvAegXAFQgQAEgFgHQgagjguglQgDgDgDgCQhLg9gcgaQgBAAAAgBQg4gxhshAQhEgoh5hCQgogWg1gmQgigYgrgbQgDgDgDgCQgmgbgfgZQgrglghggQgXgZgOgVQgKgOgIgYQgDgKgDgLQgLguADgsg");
            this.shape_399.setTransform(-56.9821,-130.2071);
        
            this.shape_400 = new cjs.Shape();
            this.shape_400.graphics.f("#FFFFFF").s().p("AF7HmQgagjguglIgGgFQhLg9gcgaIgBgBQg4gxhshAQhEgoh5hCQgogWg1gmQgigYgrgbIgGgFQgmgbgfgZQgrglghggQgXgZgOgVQgKgOgIgYIgGgVQgLguADgsIAAgBQAGhjBCgpQBkgjBGAgQAkARAuAnQAbAWAeAeIAxAvQArAqAaAdIAGAGQBGBNAgAsQAjAzAyAzQAwAwBYBNIA7A1QA9A1BDBRIASAWIArA5IARAcQgZAUgbARIgZARQgvAegXAFIgKABQgIAAgDgEg");
            this.shape_400.setTransform(-56.9821,-130.2071);
        
            this.shape_401 = new cjs.Shape();
            this.shape_401.graphics.f().s("#F7BCC8").ss(4,1,1).p("AojksQAFhfBAguQBfgoBHAaQAlANAvAjQAcATAfAaQAbAWAYAUQAtAlAbAbQADADADADQBFBHAmAtQAkAvAzAzQAyAvBWBLQAdAZAfAcQA9A2BCBPQAIALAJALIArA5QAGAOAGANQgaAUgaASQgNAIgNAIQgwAegVADQgPADgFgHQgcglgrgkQgDgCgDgDQhHg8gfgaQAAgBgBgBQg6gyhpg9QhIgrhzg8QgqgVg0geQgggUgrgRQgDgCgDgCQglgUgggUQgrgfgkgeQgYgWgPgUQgLgNgJgXQgDgKgDgKQgNgtACgtg");
            this.shape_401.setTransform(-57.3633,-127.8923);
        
            this.shape_402 = new cjs.Shape();
            this.shape_402.graphics.f("#FFFFFF").s().p("AF+HNQgcglgrgkIgGgFIhmhWIgBgCQg6gyhpg9QhIgrhzg8QgqgVg0geQgggUgrgRIgGgEQglgUgggUQgrgfgkgeQgYgWgPgUQgLgNgJgXIgGgUQgNgtACgtIAAAAQAFhfBAguQBfgoBHAaQAlANAvAjQAcATAfAaIAzAqQAtAlAbAbIAGAGQBFBHAmAtQAkAvAzAzQAyAvBWBLIA8A1QA9A2BCBPIARAWIArA5IAMAbQgaAUgaASIgaAQQgwAegVADIgHABQgKAAgDgFg");
            this.shape_402.setTransform(-57.3633,-127.8923);
        
            this.shape_403 = new cjs.Shape();
            this.shape_403.graphics.f().s("#F7BCC8").ss(4,1,1).p("AokkNQADhbA+g0QBagrBJATQAmAKAwAdQAdAQAfAXQAcAUAZARQAwAhAbAZQAEACADADQBEBBAsAtQAlAuA0AxQA0AwBVBIQAcAZAfAbQA+A3BABOQAIALAJALIAqA5QADANAEAOQgZATgbARQgNAJgMAHQgyAfgTABQgOABgGgHQgdgngogiQgCgCgDgDQhEg6ghgdQgBAAgBgBQg9gzhkg7QhNguhtg1QgtgUgxgXQgfgPgrgIQgDgBgDgCQglgMghgQQgqgZgngbQgZgUgRgSQgMgNgIgWQgEgJgEgKQgPgsACgsg");
            this.shape_403.setTransform(-57.7618,-125.5959);
        
            this.shape_404 = new cjs.Shape();
            this.shape_404.graphics.f("#FFFFFF").s().p("AGAG0QgdgngogiIgFgFIhlhXIgCgBQg9gzhkg7QhNguhtg1QgtgUgxgXQgfgPgrgIIgGgDQglgMghgQQgqgZgngbQgZgUgRgSQgMgNgIgWIgIgTQgPgsACgsIAAgBQADhbA+g0QBagrBJATQAmAKAwAdQAdAQAfAXIA1AlQAwAhAbAZIAHAFQBEBBAsAtQAlAuA0AxQA0AwBVBIIA7A0QA+A3BABOIARAWIAqA5IAHAbQgZATgbARIgZAQQgyAfgTABIgEABQgLAAgFgHg");
            this.shape_404.setTransform(-57.7618,-125.5959);
        
            this.shape_405 = new cjs.Shape();
            this.shape_405.graphics.f().s("#F7BCC8").ss(4,1,1).p("AomjtQADhXA8g5QBVgwBKANQAnAHAxAYQAeANAgATQAdARAaAPQAyAcAcAXQAEACADADQBEA7AwAtQAnAsA1AvQA2AwBTBGQAdAZAeAbQA/A4A+BNQAIAKAJALIApA5QABANABANQgZATgaARQgNAJgNAHQgyAggSgBQgOgBgFgHQgfgqglgfQgCgDgDgCQhBg6gjgdQgBgBgBgBQhAg0hfg5QhRgwhpgvQgvgSgvgQQgdgKgrABQgDgBgDgBQgkgFgigLQgpgTgrgYQgagSgSgRQgNgMgJgVQgFgJgEgJQgRgrABgsg");
            this.shape_405.setTransform(-58.1528,-123.3131);
        
            this.shape_406 = new cjs.Shape();
            this.shape_406.graphics.f("#FFFFFF").s().p("AGWGkQgOgBgFgHQgfgqglgfIgFgFQhBg6gjgdIgCgCQhAg0hfg5QhRgwhpgvQgvgSgvgQQgdgKgrABIgGgCQgkgFgigLQgpgTgrgYQgagSgSgRQgNgMgJgVIgJgSQgRgrABgsIAAgBQADhXA8g5QBVgwBKANQAnAHAxAYQAeANAgATIA3AgQAyAcAcAXIAHAFQBEA7AwAtQAnAsA1AvICJB2IA7A0QA/A4A+BNIARAVIApA5IACAaQgZATgaARIgaAQQgxAfgSAAIgBAAg");
            this.shape_406.setTransform(-58.1528,-123.3131);
        
            this.shape_407 = new cjs.Shape();
            this.shape_407.graphics.f().s("#F7BCC8").ss(4,1,1).p("AosisQAAhQA4hEQBLg4BNABQAoAAAyAOQAhAHAiAMQAeAKAdALQA2AUAeASQAEADAEACQBBAuA8AvQArAmA2AtQA5AvBQBDQAeAYAdAbQBBA6A6BJQAIALAJALIAnA5QgEAMgEAMQgYATgbARQgNAIgMAIQg0AfgQgFQgLgDgGgIQgjgugegcQgCgCgCgDQg6g3gqggQAAAAAAgBQhHg4hVgyQhbg2hegkQgzgOgrgBQgagBgtATQgCAAgDAAQgiAKgjgCQgpgHgygSQgcgNgTgPQgQgLgLgRQgFgJgFgJQgUgoAAgtg");
            this.shape_407.setTransform(-58.55,-118.941);
        
            this.shape_408 = new cjs.Shape();
            this.shape_408.graphics.f("#FFFFFF").s().p("AGVF3QgLgDgGgIQgjgugdgcIgGgFQg6g3gpggIAAgBQhGg4hWgyQhbg2hegkQgzgOgqgBQgbgBgtATIgFAAQgiAKgjgCQgpgHgxgSQgdgNgTgPQgQgLgLgRIgKgSQgUgoAAgtIAAAAQAAhQA4hEQBMg4BMABQAoAAAyAOQAhAHAiAMIA7AVQA2AUAeASIAIAFQBBAuA8AvQArAmA1AtICKByQAeAYAdAbQBBA6A6BJIAQAWIAoA5IgIAYQgYATgbARIgZAQQgtAbgSAAIgFgBg");
            this.shape_408.setTransform(-58.55,-118.941);
        
            this.shape_409 = new cjs.Shape();
            this.shape_409.graphics.f().s("#F7BCC8").ss(4,1,1).p("AowiLQgBhMA3hJQBGg8BOgGQApgDAzAJQAiAEAjAIQAeAIAeAIQA5AQAeAQQAFACAEACQBBAoBAAvQAtAlA2ArQA8AvBPBCQAdAXAdAaQBBA7A5BIQAIALAIALIAnA5QgGAMgHALQgZATgaAQQgNAJgMAHQg1AggOgHQgLgFgGgIQgkgwgbgaQgCgCgCgDQg3g2gsghQAAgBAAAAQhJg5hSgwQhfg5hYgcQg2gOgoAGQgZAEgtAcQgCABgDABQgiARgjACQgpgBg1gQQgdgLgUgMQgSgLgLgQQgGgIgEgJQgXgngBgsg");
            this.shape_409.setTransform(-58.7009,-116.8263);
        
            this.shape_410 = new cjs.Shape();
            this.shape_410.graphics.f("#FFFFFF").s().p("AGVFiQgLgFgGgIQgkgwgbgaIgEgFQg3g2gsghIAAgBQhJg5hSgwQhfg5hYgcQg2gOgoAGQgZAEgtAcIgFACQgiARgjACQgpgBg1gQQgdgLgUgMQgSgLgLgQIgKgRQgXgngBgsIAAgBQgBhMA3hJQBGg8BOgGQApgDAzAJQAiAEAjAIIA8AQQA5AQAeAQIAJAEQBBAoBAAvIBjBQQA8AvBPBCIA6AxQBBA7A5BIIAQAWIAnA5IgNAXQgZATgaAQIgZAQQgsAbgRAAIgGgCg");
            this.shape_410.setTransform(-58.7009,-116.8263);
        
            this.shape_411 = new cjs.Shape();
            this.shape_411.graphics.f().s("#F7BCC8").ss(4,1,1).p("AozhoQgDhIA1hQQBBg/BQgMQApgHA0ADQAjABAkAGQAfAEAfAGQA7AMAfAOQAFACAEABQBAAiBHAwQAuAiA2AqQA+AvBOBAQAdAXAdAZQBBA8A4BHQAIALAHALIAnA5QgJALgJAMQgZASgaAQQgNAIgMAIQg3AggMgJQgJgGgHgJQglgygYgYQgCgCgCgDQg0g0gugkQAAAAAAAAQhNg7hNgtQhjg6hTgYQg4gMgmAOQgYAIgtAlQgCACgCABQgiAZgkAGQgoAFg4gNQgfgJgVgMQgTgJgLgOQgGgIgGgJQgYglgBgtg");
            this.shape_411.setTransform(-58.8557,-114.8498);
        
            this.shape_412 = new cjs.Shape();
            this.shape_412.graphics.f("#FFFFFF").s().p("AGUFPQgJgHgHgJQglgygYgXIgEgGQg0g0gugkIAAAAQhNg7hNgtQhjg6hTgXQg4gNgmAOQgYAIgtAlIgEADQgiAZgkAHQgoAEg4gNQgfgJgVgMQgTgJgLgOIgMgRQgYglgBgtIAAAAQgDhIA1hQQBBg/BQgMQApgGA0ACQAjABAkAGQAfAFAfAFQA7AMAfAOIAJADQBAAiBHAwIBkBMQA+AvBOBAQAdAXAdAaQBBA7A4BHIAPAWIAnA5IgSAXQgZASgaAQIgZAQQgrAZgRAAQgFAAgCgBg");
            this.shape_412.setTransform(-58.8557,-114.8498);
        
            this.shape_413 = new cjs.Shape();
            this.shape_413.graphics.f().s("#F7BCC8").ss(4,1,1).p("Ao3hDQgDhEAyhVQA9hDBRgTQApgKA2gCQAjgCAlACQAgACAhAEQA9AGAfAMQAFACAFACQA/AcBMAwQAvAfA4ApQA/AuBNA+QAeAZAcAYQBCA8A2BGQAHALAIALIAmA5QgMALgLALQgZARgaARQgNAIgMAHQg4AhgLgLQgIgIgGgIQgog1gUgWQgDgCgCgDQgwgzgwglQAAAAgBAAQhPg8hJgrQhng9hOgRQg6gLgkAVQgWAMgtAwQgDACgCACQghAfglAMQgnAKg8gKQgggHgWgKQgTgJgMgOQgHgIgGgHQgagkgCgtg");
            this.shape_413.setTransform(-59.0084,-113.1264);
        
            this.shape_414 = new cjs.Shape();
            this.shape_414.graphics.f("#FFFFFF").s().p("AGTE9QgIgIgGgIQgog1gUgWIgFgFQgwgzgwglIgBAAQhPg8hJgrQhng9hOgRQg6gLgkAVQgWAMgtAwIgFAEQghAfglAMQgnAKg8gKQgggHgWgKQgTgJgMgOIgNgPQgagkgCgtQgDhEAyhVQA9hDBRgTQApgKA2gCQAjgCAlACQAgACAhAEQA9AGAfAMIAKAEQA/AcBMAwQAvAfA4ApQA/AuBNA+QAeAZAcAYQBCA8A2BGIAPAWIAmA5IgXAWIgzAiIgZAPQgpAZgRAAQgGAAgDgDg");
            this.shape_414.setTransform(-59.0084,-113.1264);
        
            this.shape_415 = new cjs.Shape();
            this.shape_415.graphics.f().s("#F7BCC8").ss(4,1,1).p("AovAhQgFg/AwhbQAYgsA1ggQA5giBcgTQAlgJAngFQAdgDAegCQAYgBAUAAQAcAAATADQAeAFAiANQBjAdCHBVQAxAcA0AmQBTA5A+BHQATAVAQAWQAMASAMASIAWAlQgZAdgdAUQgKAHgKAGQglAYgVAGQgaAJgHgJQg3hGgVgRQgBgCgBgBQgvgug2gcQgRgJgQgJQhkg2hGgYQhNgcg2AHQgnADgaAYQgHAGgJAKQgTAVgfAmQgGAIgGAHQgdAeghAOQgPAHgQACQgfAGgogDQgggDgXgIQgWgIgNgMQgpgngEg3g");
            this.shape_415.setTransform(-58.453,-108.5561);
        
            this.shape_416 = new cjs.Shape();
            this.shape_416.graphics.f("#FFFFFF").s().p("AGMELQg3hGgVgRIgCgDQgvgug2gcIghgSQhkg2hGgYQhNgcg2AHQgnADgaAYIgQAQIgyA7IgMAPQgdAeghAOQgPAHgQACQgfAGgogDQgggDgXgIQgWgIgNgMQgpgngEg3IAAgBQgFg/AwhbQAYgsA1ggQA5giBcgTQAlgJAngFIA7gFIAsgBQAcAAATADQAeAFAiANQBjAdCHBVQAxAcA0AmQBTA5A+BHQATAVAQAWIAYAkIAWAlQgZAdgdAUIgUANQglAYgVAGQgNAEgIAAQgJAAgDgEg");
            this.shape_416.setTransform(-58.453,-108.5561);
        
            this.shape_417 = new cjs.Shape();
            this.shape_417.graphics.f().s("#F7BCC8").ss(4,1,1).p("AomBgQgGhAAxhbQAXgsAzgiQA3gmBXgZQAkgMAlgIQAbgFAdgGQAXgDATgDQAbgCASAAQAeABAgAHQBjANCGBGQAzAXA0AgQBWAzBABIQASAUAQAXQAMASAMATIAVAlQgZAdgeAUQgKAHgKAGQgmAZgUAEQgZAFgHgJQg3hDgZgQQgBgBgBgBQgwgog4gRQgRgGgQgGQhjgjg+gJQhEgPgyAPQgkAHgZAbQgGAGgJAKQgSAXggAlQgGAHgGAHQgeAeghAOQgOAGgRAEQggAHgmgDQgggCgXgHQgWgHgOgMQgoglgGg5g");
            this.shape_417.setTransform(-57.508,-105.6992);
        
            this.shape_418 = new cjs.Shape();
            this.shape_418.graphics.f("#FFFFFF").s().p("AGDDqQg3hDgZgQIgCgCQgwgog4gRIghgMQhjgjg+gJQhEgPgyAPQgkAHgZAbIgPAQIgyA8IgMAOQgeAeghAOQgOAGgRAEQggAHgmgDQgggCgXgHQgWgHgOgMQgoglgGg5IAAAAQgGhAAxhbQAXgsAzgiQA3gmBXgZQAkgMAlgIQAbgFAdgGIAqgGQAbgCASAAQAeABAgAHQBjANCGBGQAzAXA0AgQBWAzBABIQASAUAQAXIAYAlIAVAlQgZAdgeAUIgUANQgmAZgUAEQgJACgHAAQgMAAgEgGg");
            this.shape_418.setTransform(-57.508,-105.6992);
        
            this.shape_419 = new cjs.Shape();
            this.shape_419.graphics.f().s("#F7BCC8").ss(4,1,1).p("AodB/QgGhAAvhbQAYgsAwglQA1gpBTggQAigOAkgMQAZgHAcgKQAVgFATgFQAZgFASgDQAcgEAfAEQBkgFCFA3QA1ARA1AdQBYAsBABJQATAVAQAVQAMATALASIAUAmQgaAdgdAVQgKAHgKAGQgnAZgTABQgYADgIgKQg2hAgdgNQgBgBgCgBQgxgjg5gFQgRgEgQgCQhigRg2AFQg7AAguAXQghAMgYAcQgGAHgIAKQgSAYggAkQgHAHgGAHQgeAdghAOQgPAHgQADQggAIglgBQghAAgXgHQgWgHgOgLQgpgjgGg7g");
            this.shape_419.setTransform(-56.5391,-99.6011);
        
            this.shape_420 = new cjs.Shape();
            this.shape_420.graphics.f("#FFFFFF").s().p("AmSD2QghAAgXgHQgWgHgOgLQgpgjgGg7IAAAAQgGhAAvhbQAYgsAwglQA1gpBTggQAigOAkgMQAZgHAcgKIAogKIArgIQAcgEAfAEQBkgFCFA3QA1ARA1AdQBYAsBABJQATAVAQAVIAXAlIAUAmQgaAdgdAVIgUANQgnAZgTABQgYADgIgKQg2hAgdgNIgDgCQgxgjg5gFIghgGQhigRg2AFQg7AAguAXQghAMgYAcIgOARQgSAYggAkIgNAOQgeAdghAOQgPAHgQADQgdAHggAAIgIAAg");
            this.shape_420.setTransform(-56.5391,-99.6011);
        
            this.shape_421 = new cjs.Shape();
            this.shape_421.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoUCZQgHg/AwhcQAXgtAugnQAzgsBOgmQAhgRAigQQAXgIAcgOQATgHASgJQAYgHARgGQAcgIAdgBQBkgWCEApQA3ALA1AYQBbAmBCBJQATAVAQAXQALASALATIATAlQgbAegdAUQgKAIgKAGQgoAagSgCQgWgBgJgKQg2g8ghgMQgBgBgCgBQgygbg7AEQgQAAgRAAQhhADgtATQgzAPgqAfQgdAPgYAfQgGAHgHAKQgSAZggAjQgHAHgHAHQgdAcgiAPQgOAGgQAEQgiAJgjAAQghABgXgGQgWgGgOgLQgpgigIg8g");
            this.shape_421.setTransform(-55.595,-93.0853);
        
            this.shape_422 = new cjs.Shape();
            this.shape_422.graphics.f("#FFFFFF").s().p("Am/EIQgWgGgOgLQgpgigIg8IAAAAQgHg/AwhcQAXgtAugnQAzgsBOgmQAhgRAigQQAXgIAcgOQATgHASgJIApgNQAcgIAdgBQBkgWCEApQA3ALA1AYQBbAmBCBJQATAVAQAXIAWAlIATAlQgbAegdAUIgUAOQgoAagSgCQgWgBgJgKQg2g8ghgMIgDgCQgygbg7AEIghAAQhhADgtATQgzAPgqAfQgdAPgYAfIgNARQgSAZggAjIgOAOQgdAcgiAPQgOAGgQAEQgiAJgjAAIgFAAQgdAAgWgFg");
            this.shape_422.setTransform(-55.595,-93.0853);
        
            this.shape_423 = new cjs.Shape();
            this.shape_423.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoKC5QgIhAAvhdQAXgrAsgqQAwgvBKguQAfgTAhgTQAVgLAbgSQASgJARgKQAXgLAQgIQAbgNAcgFQBkgnCDAZQA5AGA2AUQBeAfBCBKQATAUAQAYQAMASAKATIATAnQgcAegeAUQgKAHgKAGQgpAbgRgFQgVgEgIgKQg3g5gkgJQgCgBgBAAQgzgXg+ARQgQABgQAFQhgAUgmAiQgqAcgnAnQgZAUgXAhQgFAIgHAKQgRAaghAiQgHAGgHAHQgeAbgiAPQgOAHgQAEQgiAKgjABQggACgXgFQgWgFgPgLQgpgfgIg+g");
            this.shape_423.setTransform(-54.6077,-87.0655);
        
            this.shape_424 = new cjs.Shape();
            this.shape_424.graphics.f("#FFFFFF").s().p("Am0EmQgWgFgPgLQgpgfgIg+IAAAAQgIhAAvhdQAXgrAsgqQAwgvBKguIBAgmQAVgLAbgSQASgJARgKIAngTQAbgNAcgFQBkgnCDAZQA5AGA2AUQBeAfBCBKQATAUAQAYQAMASAKATIATAnQgcAegeAUIgUANQgpAbgRgFQgVgEgIgKQg3g5gkgJIgDgBQgzgXg+ARQgQABgQAFQhgAUgmAiQgqAcgnAnQgZAUgXAhIgMASQgRAaghAiIgOANQgeAbgiAPQgOAHgQAEQgiAKgjABIgQABQgWAAgRgEg");
            this.shape_424.setTransform(-54.6077,-87.0655);
        
            this.shape_425 = new cjs.Shape();
            this.shape_425.graphics.f().s("#F7BCC8").ss(4,1,1).p("AoBDbQgJg/AwhdQAWgtAqgrQAugzBGg0QAdgWAfgXQAUgMAZgWQARgLAQgNQAVgOARgLQAagQAagKQBkg4CDAKQA7ABA1APQBhAYBEBKQASAVAQAYQAMASAKAUIASAnQgdAegeAVQgKAHgJAGQgrAcgQgHQgUgIgIgKQg3g3gogHQgCgBgBAAQg0gRhAAcQgQAEgQAIQhfAngeAwQghArgjAvQgWAYgWAjQgFAJgGAKQgRAaghAhQgHAHgHAGQgfAagiAQQgOAHgQAFQgiALgiACQggADgXgFQgWgEgQgLQgpgdgJg/g");
            this.shape_425.setTransform(-53.6645,-81.3979);
        
            this.shape_426 = new cjs.Shape();
            this.shape_426.graphics.f("#FFFFFF").s().p("AmpFHQgWgEgQgLQgpgdgJg/IAAgBQgJg/AwhdQAWgtAqgrQAugzBGg0QAdgWAfgXQAUgMAZgWQARgLAQgNIAmgZQAagQAagKQBkg4CDAKQA7ABA1APQBhAYBEBKQASAVAQAYQAMASAKAUIASAnQgdAegeAVIgTANQgrAcgQgHQgUgIgIgKQg3g3gogHIgDgBQg0gRhAAcQgQAEgQAIQhfAngeAwIhEBaQgWAYgWAjIgLATQgRAaghAhIgOANQgfAagiAQQgOAHgQAFQgiALgiACIgYABQgRAAgOgDg");
            this.shape_426.setTransform(-53.6645,-81.3979);
        
            this.shape_427 = new cjs.Shape();
            this.shape_427.graphics.f().s("#F7BCC8").ss(4,1,1).p("An4ECQgJg+AuhfQAXgsAngvQAsg1BCg6QAbgZAegaQARgPAZgZQAPgNAQgQQATgRAQgNQAZgWAZgOQBkhJCDgEQA8gGA3ALQBjASBEBKQATAVAQAYQAMASAJAUIARAoQgeAegdAVQgKAIgKAGQgsAdgPgLQgSgLgJgKQg2g0gsgFQgCAAgCgBQg1gLhBAnQgQAIgQAKQhdA6gXA/QgYA5gfA4QgTAbgVAmQgFAJgGAKQgQAcghAgQgIAGgHAGQgfAZgiAQQgOAHgQAFQgjAMggAEQggAEgYgEQgWgEgQgKQgpgcgKhAg");
            this.shape_427.setTransform(-52.698,-76.1225);
        
            this.shape_428 = new cjs.Shape();
            this.shape_428.graphics.f("#FFFFFF").s().p("AmfFtQgWgEgQgKQgpgcgKhAIAAgBQgJg+AuhfQAXgsAngvQAsg1BCg6IA5gzQARgPAZgZQAPgNAQgQIAjgeQAZgWAZgOQBkhJCDgEQA8gGA3ALQBjASBEBKQATAVAQAYQAMASAJAUIARAoQgeAegdAVIgUAOQgsAdgPgLQgSgLgJgKQg2g0gsgFIgEgBQg1gLhBAnQgQAIgQAKQhdA6gXA/QgYA5gfA4QgTAbgVAmIgLATQgQAcghAgIgPAMQgfAZgiAQQgOAHgQAFQgjAMggAEQgRACgPAAQgNAAgLgCg");
            this.shape_428.setTransform(-52.698,-76.1225);
        
            this.shape_429 = new cjs.Shape();
            this.shape_429.graphics.f().s("#F7BCC8").ss(4,1,1).p("AnvEsQgJg+AuhfQAXgtAkgxQArg4A8hBQAagcAdgeQAPgQAYgeQAOgPAPgSQASgTAPgRQAYgZAYgTQBkhaCBgTQA/gLA3AGQBmALBFBLQATAVAQAYQALASAKAVIAQAoQgfAegdAVQgKAIgKAGQgtAegOgNQgRgPgJgKQg3gxgwgDQgBAAgCAAQg2gGhDAyQgQALgQANQhdBNgOBNQgQBIgbA/QgPAggUAoQgFAJgFAKQgQAdgiAfQgHAGgIAGQgfAZgiAQQgOAHgQAGQgkANgfAEQggAGgYgEQgWgDgQgKQgpgZgMhDg");
            this.shape_429.setTransform(-51.7556,-71.1128);
        
            this.shape_430 = new cjs.Shape();
            this.shape_430.graphics.f("#FFFFFF").s().p("AmUGVQgWgDgQgKQgpgZgMhDQgJg+AuhfQAXgtAkgxQArg4A8hBIA3g6QAPgQAYgeIAdghIAhgkQAYgZAYgTQBkhaCBgTQA/gLA3AGQBmALBFBLQATAVAQAYQALASAKAVIAQAoQgfAegdAVIgUAOQgtAegOgNQgRgPgJgKQg3gxgwgDIgDAAQg2gGhDAyQgQALgQANQhdBNgOBNQgQBIgbA/QgPAggUAoIgKATQgQAdgiAfIgPAMQgfAZgiAQIgeANQgkANgfAEQgTADgRAAIgUgBg");
            this.shape_430.setTransform(-51.7556,-71.1128);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_180},{t:this.shape_179}]}).to({state:[{t:this.shape_182},{t:this.shape_181}]},1).to({state:[{t:this.shape_184},{t:this.shape_183}]},1).to({state:[{t:this.shape_186},{t:this.shape_185}]},1).to({state:[{t:this.shape_188},{t:this.shape_187}]},1).to({state:[{t:this.shape_190},{t:this.shape_189}]},1).to({state:[{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_194},{t:this.shape_193}]},1).to({state:[{t:this.shape_196},{t:this.shape_195}]},1).to({state:[{t:this.shape_198},{t:this.shape_197}]},1).to({state:[{t:this.shape_200},{t:this.shape_199}]},1).to({state:[{t:this.shape_202},{t:this.shape_201}]},1).to({state:[{t:this.shape_204},{t:this.shape_203}]},1).to({state:[{t:this.shape_206},{t:this.shape_205}]},1).to({state:[{t:this.shape_208},{t:this.shape_207}]},1).to({state:[{t:this.shape_210},{t:this.shape_209}]},1).to({state:[{t:this.shape_212},{t:this.shape_211}]},1).to({state:[{t:this.shape_214},{t:this.shape_213}]},1).to({state:[{t:this.shape_216},{t:this.shape_215}]},1).to({state:[{t:this.shape_218},{t:this.shape_217}]},1).to({state:[{t:this.shape_220},{t:this.shape_219}]},1).to({state:[{t:this.shape_222},{t:this.shape_221}]},1).to({state:[{t:this.shape_224},{t:this.shape_223}]},1).to({state:[{t:this.shape_226},{t:this.shape_225}]},1).to({state:[{t:this.shape_228},{t:this.shape_227}]},1).to({state:[{t:this.shape_230},{t:this.shape_229}]},1).to({state:[{t:this.shape_232},{t:this.shape_231}]},1).to({state:[{t:this.shape_234},{t:this.shape_233}]},1).to({state:[{t:this.shape_236},{t:this.shape_235}]},1).to({state:[{t:this.shape_238},{t:this.shape_237}]},1).to({state:[{t:this.shape_240},{t:this.shape_239}]},1).to({state:[{t:this.shape_242},{t:this.shape_241}]},1).to({state:[{t:this.shape_244},{t:this.shape_243}]},1).to({state:[{t:this.shape_246},{t:this.shape_245}]},1).to({state:[{t:this.shape_248},{t:this.shape_247}]},1).to({state:[{t:this.shape_250},{t:this.shape_249}]},1).to({state:[{t:this.shape_252},{t:this.shape_251}]},1).to({state:[{t:this.shape_254},{t:this.shape_253}]},1).to({state:[{t:this.shape_256},{t:this.shape_255}]},1).to({state:[{t:this.shape_258},{t:this.shape_257}]},1).to({state:[{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_262},{t:this.shape_261}]},1).to({state:[{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_266},{t:this.shape_265}]},1).to({state:[{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_270},{t:this.shape_269}]},1).to({state:[{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_274},{t:this.shape_273}]},1).to({state:[{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_278},{t:this.shape_277}]},1).to({state:[{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_282},{t:this.shape_281}]},1).to({state:[{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_286},{t:this.shape_285}]},1).to({state:[{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_290},{t:this.shape_289}]},1).to({state:[{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_294},{t:this.shape_293}]},1).to({state:[{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_298},{t:this.shape_297}]},1).to({state:[{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_302},{t:this.shape_301}]},1).to({state:[{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_306},{t:this.shape_305}]},1).to({state:[{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_310},{t:this.shape_309}]},1).to({state:[{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_314},{t:this.shape_313}]},1).to({state:[{t:this.shape_316},{t:this.shape_315}]},1).to({state:[{t:this.shape_318},{t:this.shape_317}]},1).to({state:[{t:this.shape_320},{t:this.shape_319}]},1).to({state:[{t:this.shape_322},{t:this.shape_321}]},1).to({state:[{t:this.shape_324},{t:this.shape_323}]},1).to({state:[{t:this.shape_326},{t:this.shape_325}]},1).to({state:[{t:this.shape_328},{t:this.shape_327}]},1).to({state:[{t:this.shape_330},{t:this.shape_329}]},1).to({state:[{t:this.shape_332},{t:this.shape_331}]},1).to({state:[{t:this.shape_334},{t:this.shape_333}]},1).to({state:[{t:this.shape_336},{t:this.shape_335}]},1).to({state:[{t:this.shape_338},{t:this.shape_337}]},1).to({state:[{t:this.shape_340},{t:this.shape_339}]},1).to({state:[{t:this.shape_342},{t:this.shape_341}]},1).to({state:[{t:this.shape_344},{t:this.shape_343}]},1).to({state:[{t:this.shape_346},{t:this.shape_345}]},1).to({state:[{t:this.shape_348},{t:this.shape_347}]},1).to({state:[{t:this.shape_350},{t:this.shape_349}]},1).to({state:[{t:this.shape_352},{t:this.shape_351}]},1).to({state:[{t:this.shape_354},{t:this.shape_353}]},1).to({state:[{t:this.shape_356},{t:this.shape_355}]},1).to({state:[{t:this.shape_358},{t:this.shape_357}]},1).to({state:[{t:this.shape_360},{t:this.shape_359}]},1).to({state:[{t:this.shape_362},{t:this.shape_361}]},1).to({state:[{t:this.shape_364},{t:this.shape_363}]},1).to({state:[{t:this.shape_366},{t:this.shape_365}]},1).to({state:[{t:this.shape_368},{t:this.shape_367}]},1).to({state:[{t:this.shape_370},{t:this.shape_369}]},1).to({state:[{t:this.shape_372},{t:this.shape_371}]},1).to({state:[{t:this.shape_374},{t:this.shape_373}]},1).to({state:[{t:this.shape_376},{t:this.shape_375}]},1).to({state:[{t:this.shape_378},{t:this.shape_377}]},1).to({state:[{t:this.shape_380},{t:this.shape_379}]},1).to({state:[{t:this.shape_382},{t:this.shape_381}]},1).to({state:[{t:this.shape_384},{t:this.shape_383}]},1).to({state:[{t:this.shape_386},{t:this.shape_385}]},1).to({state:[{t:this.shape_388},{t:this.shape_387}]},1).to({state:[{t:this.shape_390},{t:this.shape_389}]},1).to({state:[{t:this.shape_392},{t:this.shape_391}]},1).to({state:[{t:this.shape_394},{t:this.shape_393}]},1).to({state:[{t:this.shape_396},{t:this.shape_395}]},1).to({state:[{t:this.shape_398},{t:this.shape_397}]},1).to({state:[{t:this.shape_286},{t:this.shape_285}]},1).to({state:[{t:this.shape_400},{t:this.shape_399}]},1).to({state:[{t:this.shape_402},{t:this.shape_401}]},1).to({state:[{t:this.shape_404},{t:this.shape_403}]},1).to({state:[{t:this.shape_406},{t:this.shape_405}]},1).to({state:[{t:this.shape_262},{t:this.shape_261}]},1).to({state:[{t:this.shape_408},{t:this.shape_407}]},1).to({state:[{t:this.shape_410},{t:this.shape_409}]},1).to({state:[{t:this.shape_412},{t:this.shape_411}]},1).to({state:[{t:this.shape_414},{t:this.shape_413}]},1).to({state:[{t:this.shape_238},{t:this.shape_237}]},1).to({state:[{t:this.shape_416},{t:this.shape_415}]},1).to({state:[{t:this.shape_418},{t:this.shape_417}]},1).to({state:[{t:this.shape_420},{t:this.shape_419}]},1).to({state:[{t:this.shape_422},{t:this.shape_421}]},1).to({state:[{t:this.shape_424},{t:this.shape_423}]},1).to({state:[{t:this.shape_426},{t:this.shape_425}]},1).to({state:[{t:this.shape_428},{t:this.shape_427}]},1).to({state:[{t:this.shape_430},{t:this.shape_429}]},1).to({state:[{t:this.shape_180},{t:this.shape_179}]},1).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-118.4,-214.5,239.5,232);
        
        
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
        
            // 图层_8
            this.instance = new lib.补间15("synched",0);
            this.instance.setTransform(97.35,-48.2,1,1,0,14.9992,-165.0008);
        
            this.timeline.addTween(cjs.Tween.get(this.instance).to({x:96.75,y:-48.1},28).to({x:97.35,y:-48.2},101).wait(1));
        
            // 图层_7
            this.instance_1 = new lib.补间15("synched",0);
            this.instance_1.setTransform(36.65,-44.5);
        
            this.instance_2 = new lib.补间16("synched",0);
            this.instance_2.setTransform(34.45,-44.9);
            this.instance_2._off = true;
        
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:34.45,y:-44.9},59).wait(36).to({_off:false,x:36.65,y:-44.5},34).wait(1));
            this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},59).to({startPosition:0},36).to({_off:true,x:36.65,y:-44.5},34).wait(1));
        
            // 图层_2
            this.shape = new cjs.Shape();
            this.shape.graphics.f().s("#52888E").ss(3,1,1).p("Ap8AHIDHgqIC0BHIC3gdIB5AWICghIIEgBXICOgl");
            this.shape.setTransform(57.525,-45.625);
        
            this.timeline.addTween(cjs.Tween.get(this.shape).wait(130));
        
            // 图层_4
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f().s("#52888E").ss(3,1,1).p("AJ9nfQAOBXAABaQAAC6ghB4QgkCDhcB6QhZB3iIA4Qh1AwiUAAQiTAAh1gwQiIg4hZh3Qhch6gkiDQghh4AAi6QAAhaAOhX");
            this.shape_1.setTransform(57.5,3);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(130));
        
            // 图层_6
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().p("AgTCpQgmhggEhaQgEhlAKhBQALhMAcACQAeADgCBUQgECHAJA0IAnChQAQBJgYAGIgEABQgcAAgjhZg");
            this.shape_2.setTransform(7.7519,-14.7768);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(130));
        
            // 图层_5
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#71BBC8").s().p("Am5GxIgggOIAGAAQBzgCBRgYQDqhEDKlHQBGhxAdhoQAehmgBh5ICggmIAVCxIAAACIgSDxQgHAjgIAeQgYBYgxBTQgYAqgfAoQhZB3iIA4Qh1AwiTAAQiTAAh2gwg");
            this.shape_3.setTransform(75.2,3.15);
        
            this.shape_4 = new cjs.Shape();
            this.shape_4.graphics.f("#B0DBE5").s().p("AmPE4Qhch6gkiEQggh3AAi6QAAhaANhWIDIgrIC0BIIC1gdIB+AXICdhKIEGBZQABB5gdBmQgeBnhGBxQjKFHjqBFQhRAXhyACQh3g4hRhrg");
            this.shape_4.setTransform(48.4517,-2.5);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(130));
        
            // head
            this.instance_3 = new lib.头();
            this.instance_3.setTransform(62.25,-42.85,0.7543,0.7543,0,0,0,21.7,18.2);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:21.8,regY:18.1,scaleX:0.7542,scaleY:0.7542,rotation:5.4748,x:57.3,y:-42.9},67).to({regX:21.7,regY:18.2,scaleX:0.7543,scaleY:0.7543,rotation:0,x:62.25,y:-42.85},62).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-32.6,-218.4,156.7,270.9);
        
        
        // stage content:
        (lib.rabbit2 = function(mode,startPosition,loop,reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
            var props = new Object();
            props.mode = mode;
            props.startPosition = startPosition;
            props.labels = {};
            props.loop = loop;
            props.reversed = reversed;
            cjs.MovieClip.apply(this,[props]);
        
            // 蛋
            this.instance = new lib.蛋("synched",0);
            this.instance.setTransform(200,331.95,1,1,0,0,0,57.5,-34);
        
            this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:129},129).wait(1));
        
            // 影子
            this.instance_1 = new lib.补间6("synched",0);
            this.instance_1.setTransform(200,445.4);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},129).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new lib.AnMovieClip();
        p.nominalBounds = new cjs.Rectangle(310.9,397.5,-44.299999999999955,54.39999999999998);
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
