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
    
    (lib.补间19 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f("#AF6717").s().p("ACcC0IgHgDIgCgBIgBAAIAAgBIgBAAIgFgGIgGgMIgDgIIgBAAIAAgDIgBgBIgBgCIgBgDIgBgBIgBgCIgDgEIAAgBIgCAAIAAgBIABABIgCgBIABAAIgEgCIgKAMIAAAAIgBABIAAABIgBABIgDAEIgFAGIgDABIgBABIgEACIgBABIgFABIgHAAQgDABgEgBQgDAAgEgCIgBgBIgBgBIgCAAIAAgBIgBAAIgBgBIgBgBIgBgBIgFgGIgBgDIAAgBIAAgBIgBgBIAAgCIAAgBIgBgNIABgCIAAgBIAAgCIAAgDIAGgbIABgBIAAgCIgHgDIgEgCIAAAAIgBAAIgBgBIgFgCIAAAAIglgPIhXgVIgBAAIgBgBIAAAAIgGgBIgCAAIAAgBIgOgDIgfgIQgGgCgCgGIgBgCIgBgBIgCAAIgFAAIgBgBIgBAAIgBAAIgEgBIgBAAIgLgFIgJgHIgIgGQgHgHgGgLQgGgLgDgIQgJgSgFgVIgNhZIAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABABIBBAIIAIgRIBmAwIBiA2IABABIAHAEIA4AmIgBgBIAHAFIAAAAIACACIAbADIAAABIABAAIASAFIABAAIAAAAIABAAIABABIADABIABABIAFABIAFADIAMAGQAKAGAKAIIAeAhIABACIAFAFIAJAQIABADIABACIAAABIAAABIABABIADAMQABAFgBAEQAAAEgDAFQgCAFgDADIgHAGIAAABIgBAEIgGANIgGAIIgBABIAAAAIgBAAIAAABIgBAAIAAABIAAAAIgCABIgBACIgDABIgCABIgBACIgIADIgDABIgBAAIgCAAIAAABIAAAAIgBABIgFAIIgGAGIgBAAIAAABIgBAAIgBABIgGADIgBABIgBAAIAAAAQgCACgFAAIgDAAIgEAAgAB7BtIABABIAHADIAEAEIADADIACABIADADIABACIACAEIABACIAAABIADAEIABAFIAIAPIABAAIAAABIABAAIABgBIAAAAIAAAAIACgBIABgBIAAAAIAAAAIACgBIACgCIACgEIACgFIAAgBQgEgJgGgJIAAABIgHgKQgDgDABgEQAAgFAEgCQADgDAEABQAEAAADADIAHAKIABAAIAJAQIACAEIABAAIACgBIACgBIAAgBIABAAIAAAAIABgBIABgBIAAAAIABAAIAAgBIABAAIAAgBIADgEIAAAAIgCgLQgEgOgEgHIgFgFQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADIAGAGIACACQAEAGADALIABgBIACgBIAAgBIABgCIgBgGIAAgBIgCgCIAAAAIAAgBIgCgEIgJgPIgCgCIgDgEIgSgTIgDgBIgFgGQgJgHgHgEIgJgFIgNgFIgBAAIgPgEIACABIgegEIgCAAIgHgCIgFgDIgCgCIgBgBIAAABIABAAIAAAAIgBAAIgDgCIgBgBIg8gmIgBAAIgBAAQgdgRgjgSIgigQIAAAAIgDgCIgEgBIg9gbIgigPIAIgRIg+gHIAQBWQAGAWAHAQIAKASQAGAKAGAGIAHAGIAIAEIAJAEIABAAIABABIADAAIABAAIAAABIAEAAIABAAIADAAIABABQACgFAGgDQAFgBAGABIAOAGIAcALIAAAAIAHADIABAAIAAABIABAAIACABIAVAGIACABIABAAIApAOIABAAIABAAIABABIA1ATIAAAAIAFADIABAAIAAAAIACABIAJAEIADABIABAAIABAAIAFACQAGADgCAHIgEAKIABgBIgFAaIAAACIgBACIAAAIIABADIAAABIAAABIAAABIABAAIAAABIAAAAIAAABIABABIACAAIAAAAIAAABIABAAIACAAIACAAIAHgBIAAAAIABAAIAAAAIABAAIACgDIABAAIAAAAIABgBIABgBIAAgBIABAAIAAgBIAAgBIAAABIAAgBIAAAAIABAAIgBAAIABAAIAAAAIAAgCIAAgBIANgQIADgBIAAAAIAGgEIAFgBQAEAAADACgACXCRIAAgBIAAgCIgBgBgABPCNIABAAIAAgBgAB9BvIgBgBIAAAAgABUgCIgBAAIADABg");
            this.shape.setTransform(0.55,0.025);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FCFCEF").s().p("AAUBOIAAAAIgBAAIgIgPIgBgFIgCgEIgBgCIgBgCIgCgDIgBgCIgDgDIAAgCIgDgDIgFgDIgHgDIgBgCQgFgDgGACIgHAEIAAAAIgCACIgNAQIAAAAIgBACIgBABIAAAAIAAAAIAAAAIAAABIAAAAIgBABIAAABIgBAAIgBABIAAABIAAAAIgDACIAAAAIgBABIgBAAIAAAAIgBAAIABAAIABAAIgIABIgCAAIgCgBIgBAAIAAAAIAAAAIgBgBIgBgBIAAAAIgBgBIAAAAIAAgBIAAAAIgBgBIAAgCIAAgDIAAgHIAAgDIAAgCIAFgZIgBAAIAEgJQACgGgGgDIgFgCIAAAAIgCAAIgDgCIACgDIACgHIgCgKIACgGIAAAAIADgFIAEgGIACgGIAEgFIAKgMIAIgHIACgCIAeADIgCAAIAPAEIABAAIAMAFIAJAEQAIAFAIAHIAGAFIACACIASATIADAEIACACIAJAOIACAEIABAAIAAABIABACIAAABIABAGIgBABIAAABIgCACIgBAAQgDgKgEgFIgBgCIgHgHQgDgDgEAAQgEAAgDADQgDADAAAEQAAADADADIAFAGQAFAHADAOIACAKIAAABIgCAEIgBAAIAAAAIgBABIAAAAIAAABIgBAAIgBABIgBABIgBAAIgGgBIgBgBIgJgPIAAAAIgIgKQgCgDgFgBQgEAAgDACQgDADgBAEQAAAEACAEIAIAJIgBAAQAGAIAEAKIABABIgCAFIgDADIgCADIgBAAIAAABIgBAAIAAAAIgCABIgBABIAAAAIgBAAgAAKA9IABACIAAABIAAABgAgzA1IABgBIAAABgAgyA0gAgPAeIAAABIABAAg");
            this.shape_1.setTransform(14.5375,7.9625);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FEC07E").s().p("ABRBgIgBgBIgBAAIAAAAIgGgDIAAAAIg2gTIgBAAIAAgBIgBAAIgpgOIgBAAIgBgBIgWgGIgCgBIgBAAIAAgBIgBAAIgHgCIAAAAIgcgMQgCgDgCgLIgHgUQgDgLABgRQAAgJADgGIgDgCIgOgPQgHgIgDgIQgEgJAEgLIACgEIA9AbIAEACIADABIABAAIAhARQAjARAeARIAAAAIABABIA9AlIABAAIACACIABAAIAAAAIACACIAFADIgCgBIABABIABAAIAHADIACAAIgCADIgIAHIgKALIgEAGIgCAGIgEAFIgDAGIAAAAIgCAGIACAKIgCAHIgCADgABvAWgABuAWIAAgBIABABg");
            this.shape_2.setTransform(-2.6625,-2.9);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-24.2,-18,49.5,36.1);
        
        
        (lib.补间18 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f("#AF6717").s().p("AijC0QgDAAgDgCIgBAAIAAAAIgCgBIgFgDIgBgBIgBAAIgBgBIgBAAIgFgGIgFgIIgBgBIAAAAIgBgBIgBAAIgBAAIgEgBIgHgDIgCgCIgCgBIgCgBIgBgCIgCgBIgBAAIAAgBIAAAAIgBgBIAAAAIgBAAIAAgBIgGgIIgGgNIgBgEIAAgBIgHgGQgDgDgDgFQgCgFAAgEIAAgJIADgMIAAgBIAAgBIABgBIABgCIABgDIAJgQIAEgFIACgCIAeghQAJgIALgGIALgGIAGgDIAEgBIACgBIADgBIABgBIABAAIAAAAIABAAIARgFIABAAIABgBIAbgDIgBABIABgBIAAAAIACgCIAAAAIABgBIAGgEIgBABIA7goIADgCIABgBIDJhmIAIARIBBgIIABAAQAAAAABAAQAAAAAAAAQABABAAAAQgBAAAAABIgNBZQgGAVgIASQgDAIgGALQgGALgHAHIgIAGIgJAHIgLAFIgCAAIgDABIgBAAIgBAAIgCABIgEAAIgCAAIgBAAIgBAFQgEAFgGACIgdAHIgOADIgBABIgBAAIgGABIAAAAIgBABIgBAAIhXAVIglAPIAAAAIgFACIgBABIgBAAIAAAAIgEACIgIADIABACIABABIAFAbIAAADIABACIAAABIAAACIAAANIgBABIAAACIAAABIAAABIgBABIgBADIgEAGIgBABIgCABIgBABIAAAAIgBABIgBAAIgBABIgBABQgEACgDAAQgEABgEgBIgHAAIgEgBIgBgBIgEgCIgCgBIgCgBIgFgGIgDgEIgBgBIAAgBIgBgBIAAAAIgKgMIgFADIgBAAIAAABIgEAEIgBACIAAABIgCADIAAACIgBABIAAgBIAAgBIAAADIAAgBIAAADIgBAAIgDAIIgGAMIgGAGIgBAAIAAABIgBAAIgBABIgHADIgEAAIgEAAgAidBlQAEADAAAEQAAAEgDAEIgHAJQgGAIgEAJIAAABIACAFIADAEIACACIABAAIAAABIAAAAIAAAAIABAAIAAABIACABIABAAIAAAAIABABIABAAIAAgBIABAAIAIgPIABgFIACgEIABgBIABgCIACgEIABgCIADgDIABgBIADgDIAEgDIABgBIAJgFIABAAQAFgDAEADIAHAEIAAAAIACABIANAQIAAABIABACIAAAAIAAAAIABABIAAgBIAAABIAAABIABAAIAAABIABABIABABIAAAAIAAAAIADADIAAAAIABAAIAAAAIAIABIACAAIACAAIABAAIAAgBIAAAAIABAAIABgBIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAgBIAAgDIAAgIIAAgCIAAgCIgFgaIABABIgEgKQgCgHAGgDIAJgDIALgFIABAAIAAAAIAGgDIAAAAIA1gTIABgBIAAAAIABAAIAqgOIABAAIABgBIAWgGIACgBIABAAIAAgBIABAAIAHgDIAAAAIAcgLIAOgGIACAAQAGgBAFACQAEADACAEIABgBIADAAIAAAAIAEAAIABgBIABAAIADAAIABgBIABAAIAJgEIAIgEIAHgGQAGgGAGgKIAJgSQAIgQAGgWIAQhWIg/AHIAIARIghAPIg9AbIgEABIgDACIgBAAIghAQQgkASgdARIAAAAIgBAAIg9AmIgBABIgDACIgBABIAAAAIgBABIgFADIACgBIgBAAIgBABIgHACIgCAAIgeAEIACgBIgPAEIgBAAIgFACIgIADIgJAFQgIAEgIAHIgGAGIgCABIgSATIgDAEIgCACIgJAPIgCAEIgBABIAAAAIgBACIAAABIgBAGIABACIAAABIACABIAAABQAEgLAEgGIACgCIAGgHQADgDAEABQAFAAACADQADADAAAEQgBAFgDACIgFAFQgEAHgDAOIgDALIABAAIACAEIABABIAAAAIABABIAAAAIAAAAIABABIABABIABAAIAAAAIABABIACABIACABIABAAIACgEIAJgQIABgBIAHgJQADgDAEAAIABAAQAEAAACACgAhPCNIABAAIgCgBg");
            this.shape.setTransform(-0.5232,0.025);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FCFCEF").s().p("AgUBOIgBAAIAAAAIgBgBIgCgBIAAAAIgBAAIAAgBIAAAAIAAAAIgBAAIgCgDIgDgDIgCgFIABgBQADgJAGgIIAHgKQADgDAAgEQAAgEgDgDQgDgDgFAAQgEABgDADIgHAJIgBABIgJAPIgBABIgGABIgBAAIgBgBIgBgBIgBAAIAAgBIAAAAIgBgBIAAAAIgBAAIgCgEIAAgBIACgKQADgOAFgHIAEgFQAEgDAAgDQAAgEgDgDQgCgDgEgBQgEAAgEADIgGAGIgCADQgEAFgDAKIgBAAIgCgCIAAgBIgBgBIABgGIAAgBIABgCIAAgBIABAAIACgEIAJgOIACgCIADgEIASgTIACgCIAGgFQAIgHAIgFIAJgEIAIgDIAEgCIABAAIAPgEIgCAAIAegDIACACIAIAHIAKAMIAEAFIACAGIAEAGIADAFIAAAAQAAADACADIgCAKIACAHIACADIgKAEQgGADACAGIAEAJIgBAAIAFAZIAAACIAAADIAAAHIAAADIAAACIgBABIAAAAIAAABIAAAAIgBABIAAAAIgBABIgBABIAAAAIAAAAIgBAAIgCABIgCAAIgIgBIAAAAIgBgBIAAAAIgDgCIAAAAIAAgBIgBgBIgBAAIAAgBIgBgBIAAAAIAAgBIAAAAIAAAAIgBAAIAAgBIgBgCIAAAAIgNgQIgCgCIAAAAIgHgEQgEgCgFACIgBABIgJAFIgBABIgEACIgDADIgBACIgCADIgBACIgCADIgBACIgBACIgCAEIgBAFIgIAPIgBAAIAAAAgAA8A9IAAAAIABAAg");
            this.shape_1.setTransform(-14.5375,7.9625);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FEC07E").s().p("AhbBhIgCgHIACgLQgCgCAAgDIAAgBIgDgFIgEgFIgCgGIgEgGIgKgLIgIgHIgCgDIACAAIAHgDIABAAIABgBIgCABIAFgDIABgBIAAAAIABgBIADgCIABAAIA9glIABgBIAAAAQAegRAjgRIAhgRIABAAIADgBIAEgCIA9gbIACAEQAEALgEAJQgDAIgHAIIgOAPIgDACQADAGAAAJQABARgDALIgHAUQgCALgCADIgcAMIAAAAIgHACIgBAAIAAABIgBAAIgCABIgWAGIgBABIgBAAIgpAOIgBAAIAAABIgBAAIg2ATIAAAAIgGADIAAAAIgBAAIgKAFIgCgDg");
            this.shape_2.setTransform(2.6625,-2.9);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-25.3,-18,49.6,36.1);
        
        
        (lib.补间17 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#E89C3E").ss(1,1,1).p("Agug7IgTgUQgVgRgOAPQgOAPAKAXQAEAMAIAIIgWAFQgVAKADAWQACAYAZAFIAZgBIgBASQADATASAHQARAIAOgRIALgTIAdACQADAIAHAIQAOAPAQgDQAQgCAHgVQAGgRgDgGQAMAEAOgBQAagBAEgUQAEgUgSgQQgJgIgJgFQAIgJAGgLQAMgXgOgNQgOgMgZARQgNAIgKALgAhQAGICpAA");
            this.shape.setTransform(0.0239,3.2663);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f().s("#E89C3E").ss(2,1,1).p("AAViDQAAAKgHAHQgHAIgKAAQgKAAgIgIQgHgHAAgKQAAgLAHgHQAIgHAKAAQAKAAAHAHQAHAHAAALgAhDhiQAQAMAJASIBdAAQAEgMAJgMQAHgJAJgFQANgIAQACQAKACAIAEQAPAIALARQAMATAAAMQAAAFgLATQgFAJgFAHQgBABAAABQAIACAJAEQASAHADAKQAEARAAASQgBAZgJAKQgOAQgiACIgLAYQgRAYgeACQgeADgUgLQgKgGgEgGIgPAMQgVAMgbAAQgcAAgSgYQgJgMgDgMIgagDQgcgHgGgSQgCgFgBgFQgFgQABgOQAAgTAJgJQAHgHALgHIAKgHIgKgMQgJgQAFgOQAGgRAQgSQAAAAABgBQANgOAMgGQADgBADgBQALgDANAFQAGACAGAEQABABACABIB/AA");
            this.shape_1.setTransform(-0.0025,0.025);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FED786").s().p("AhoCFQgJgMgDgMIgagDQgcgHgGgSIgDgKQgFgQABgOQAAgTAJgJQAHgHALgHIAKgHIgKgMQgJgQAFgOQAGgRAQgSIABgBQANgOAMgGIAGgCQALgDANAFQAGACAGAEIADACQAQAMAJASIBdAAQAEgMAJgMQAHgJAJgFQANgIAQACQAKACAIAEQAPAIALARQAMATAAAMQAAAFgLATIgKAQIgBACQAIACAJAEQASAHADAKQAEARAAASQgBAZgJAKQgOAQgiACIgLAYQgRAYgeACQgeADgUgLQgKgGgEgGIgPAMQgVAMgbAAQgcAAgSgYgAAvB5IAEAAQARgDAHgUQADgLAAgHIgBgFQANADANAAQAbgBADgUIABgIQAAgPgOgOQgJgJgKgEQAJgIAGgMQAFgKAAgIQAAgKgIgHIgBgBQgFgEgHgBIgBAAIAAAAQgJABgNAHIAAAAIgDACQgNAJgKALIhhgCIBhACQAKgLANgJIADgCIAAAAQANgHAJgBIAAAAIABAAQAHABAFAEIABABQAIAHAAAKQAAAIgFAKQgGAMgJAIQAKAEAJAJQAOAOAAAPIgBAIQgDAUgbABQgNAAgNgDIABAFQAAAHgDALQgHAUgRADIgEAAIAAAAIgBAAQgMAAgKgKIgCgDQgHgHgEgIIgdgCIgKASIgCACQgJAKgKAAIgBAAIAAAAQgFAAgFgCQgRgIgDgTIAAgRIgYAAQgZgEgDgYIAAgFQAAgUATgIIAVgFQgHgJgFgKQgEgKAAgIQAAgLAIgJIAAgBQAHgGAHAAIABAAIAAAAQAIAAAKAHIACABIAAAAIABABIASAUIgSgUIgBgBIAAAAIgCgBQgKgHgIAAIAAAAIgBAAQgHAAgHAGIAAABQgIAJAAALQAAAIAEAKQAFAKAHAJIgVAFQgTAIAAAUIAAAFQADAYAZAEIAYAAIAAARQADATARAIQAFACAFAAIAAAAIABAAQAKAAAJgKIACgCIAKgSIAdACQAEAIAHAHIACADQAKAKAMAAIABAAIAAAAgABZAnIipAAgAgVhyQgHgHAAgKQAAgLAHgHQAIgHAKAAQAKAAAHAHQAHAHAAALQAAAKgHAHQgHAIgKAAQgKAAgIgIg");
            this.shape_2.setTransform(-0.0025,0.025);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-19.4,-16.7,38.9,33.5);
        
        
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
            this.shape.graphics.f("#AF6717").s().p("AALDBQgsgNgagZQgVgUgjgsIAAAAIgegmIAAAAQgUgSgLgTIAAgBQgWgoAUghIAAAAQASgfAcABQABgZAVgXIABAAQAYgaAaAFQAGgOARgOIABgBQAggfAxAvIAAAAQATARAOAWIAbAkQAgArATAdIAAAAQAcArADAgIAAAAQAIBEhIA3QgeAYgoAAQgVAAgWgGgAh0AaIADADIAdAlIABABQAgAoAUATQAUATAhAJQAuANAggYQAzgogDgvIAAAAQgDgYgWghIAAAAQgSgcgfgqIgcglIgBgBQgLgSgPgOIgBAAQgSgSgKAEIAAAAQgMAKAAAJIAAAAIAAACQAFAGAAAIQAAAIgFAGQgGAFgIABQgHAAgHgFIgOgLQgIgBgIAIIAAABQgNAOABAOQABAGACAEQAEAGAAAGQAAAHgEAFQgFAGgGABQgHACgGgDIgRgIQgIABgGAJIAAAAQgHAQAKATIAAAAQAJAPAQAOgAhiASIABgGIAAAAIABgBIAAgBIABgDIAFgOIANgYIADgFIACgCIAGgIIACgCIAEgFIACgCIACgBIAEgEIAIgHIACgCIAMgIIABAAIACgBIACgBIADgCIAIgDIAAAAIAAgBIACAAIACgBIAKgDIALgCIADAAIACgBIANABIABAAIACAAIAEABIABABIgBABIgFACIgBAAIgBAAIgGACIAAAAIgTAJIgCAAIgHAFIgBABIgBAAIAAAAIgFADIgEADIgCABIgBABIgBAAIgKAIIgBABIgEADIgEAEIgEADIgHAHIgBACIgCABIgEAEIgDAEIgHAHIAAABIgBABIgcAhIgBABQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
            this.shape.setTransform(-0.0199,-0.0883);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#E8DCBB").s().p("AgRBUQgigKgTghQgTggAIgjQAHgjAdgRQAegRAhALQAjALASAhQATAggIAiQgHAkgeARQgRAKgUAAQgMAAgNgFg");
            this.shape_1.setTransform(1.9353,3.4159);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FDFCE6").s().p("AAWCZQghgJgUgTQgUgTgggoIgBgBIgdglIgDgDQgQgOgJgPIAAAAQgKgTAHgQIAAAAQAGgJAIgBIARAIQAGADAHgCQAGgBAFgGQAEgFAAgHQAAgGgEgGQgCgEgBgGQgBgPANgNIAAgBQAIgIAIABIAOALQAHAFAHAAQAIgBAGgFQAFgGAAgIQAAgIgFgGIAAgCIAAAAQAAgJAMgKIAAAAQAKgEASASIABAAQAPAOALASIABABIAcAlQAfAqASAcIAAAAQAWAgADAZIAAAAQADAvgzAoQgVAQgbAAQgOAAgQgFgAgZgsQgeARgHAiQgHAkASAgQATAhAhAKQAiAMAegRQAdgRAIgkQAIgjgTgfQgTghgigLQgOgEgNAAQgSAAgSAKgAgWhSIgDACIgCABIgCABIgBAAIgMAIIgCACIgIAHIgEAEIgCABIgCACIgEAFIgCACIgGAIIgCACIgDAFIgNAYIgFAOIgBADIAAABIgBABIAAAAIgBAGQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIABgBIAcghIABgBIAAgBIAHgHIADgEIAEgEIACgBIABgCIAHgHIAEgDIAEgEIAEgDIABgBIAKgIIABAAIABgBIACgBIAEgDIAFgDIAAAAIABAAIABgBIAHgFIACAAIATgJIAAAAIAGgCIABAAIABAAIAFgCIABgBIgBgBIgEgBIgCAAIgBAAIgNgBIgCABIgDAAIgLACIgKADIgCABIgCAAIAAABIAAAAg");
            this.shape_2.setTransform(-0.0198,0.0245);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-18.9,-20,37.8,39.8);
        
        
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
            this.shape.graphics.f("#AF6717").s().p("Ah7CvQhIg3AIhEIAAAAQADggAcgrIAAAAQATgdAggrIAbgkQAOgWATgRIAAAAQAxgvAhAfIAAABQARAOAGAOQAagFAYAaIABAAQAVAXABAZQAcgBASAfIAAAAQAUAhgWAoIAAABQgLAUgUARIgBABIgdAlQgjAsgVAUQgaAZgsANQgWAGgVAAQgoAAgegYgAiTA4IAAAAQgDAvAzAoQAgAYAugNQAhgJAUgTQAUgTAhgpIAdgmIADgCQAQgOAJgPIAAAAQAKgTgHgQIAAAAQgGgKgIAAIgRAIQgGADgGgCQgHgBgFgFQgEgGAAgHQAAgGAEgGQACgEABgGQABgOgNgOIAAgBQgIgIgIABIgOALQgHAFgHAAQgIgBgGgFQgFgGAAgIQAAgIAFgGIAAgCIAAAAQAAgJgMgKQgKgEgSASIgBAAQgPAOgLASIgBABIgcAlQgfAqgSAcIAAAAQgWAhgDAYgABhASIgagfIgCgCIgBgBIAAgBIgHgHIgDgEIgEgEIgCgBIgBgCIgHgHIgEgDIgEgEIgEgDIgBgBIgKgIIgBAAIgBgBIgCgBIgEgDIgFgDIAAAAIgBAAIgBgBIgHgFIgCAAIgTgJIAAAAIgGgCIgBAAIgBAAIgFgCIgBgBIABgBIAEgBIACAAIABAAIANgBIACABIADAAIAKACIALADIACABIACAAIAAABIAAAAIAIADIADACIACABIACABIABAAIAMAIIACACIAKAJIACACIACABIACACIAEAFIACACIAGAIIACACIAOAYIAHATIABADIAAABIABABIAAAAIABAGIAAABIgCgBg");
            this.shape.setTransform(0.0199,-0.0883);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#E8DCBB").s().p("AgsBPQgegRgHgkQgIgiATggQASghAjgLQAhgLAeARQAdARAHAjQAIAjgTAgQgTAhgiAKQgNAFgMAAQgUAAgRgKg");
            this.shape_1.setTransform(-1.9353,3.4159);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FDFCE6").s().p("AhjCOQgzgoADgvIAAAAQADgZAWggIAAAAQASgcAfgqIAcglIABgBQALgSAPgOIABAAQASgSAKAEQAMAKAAAJIAAAAIAAACQgFAGAAAIQAAAIAFAGQAGAFAIABQAHAAAHgFIAOgLQAIgBAIAIIAAABQANANgBAPQgBAGgCAEQgEAFAAAHQAAAHAEAGQAFAFAHABQAGACAGgDIARgIQAIAAAGAKIAAAAQAHAQgKATIAAAAQgJAPgQAOIgDACIgdAmQghApgUATQgUATghAJQgQAFgOAAQgbAAgVgQgAglgyQgiALgTAhQgTAfAIAjQAIAkAdARQAeARAigMQAhgKATghQASgggHgkQgHgigegRQgSgKgSAAQgNAAgOAEgAgDhMIACAAIAHAFIABABIABAAIAAAAIAFADIAEADIACABIABABIABAAIAKAIIABABIAEADIAEAEIAEADIAHAHIABACIACABIAEAEIADAEIAHAHIAAABIABABIACACIAaAfIACABIAAgBIgBgGIAAAAIgBgBIAAgBIgBgDIgHgTIgOgYIgCgCIgGgIIgCgCIgEgFIgCgCIgCgBIgCgCIgKgJIgCgCIgMgIIgBAAIgCgBIgCgBIgDgCIgIgDIAAAAIAAgBIgCAAIgCgBIgLgDIgKgCIgDAAIgCgBIgNABIgBAAIgCAAIgEABIgBABIABABIAFACIABAAIABAAIAGACIAAAAg");
            this.shape_2.setTransform(0.0198,0.0245);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-18.8,-20,37.7,39.8);
        
        
        (lib.补间8 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#FFC170").ss(2,1,1).p("AAyiBQAsAIAkAaQApAdAKAnQADANAAANQAAA2g2AmQg2AnhMAAQhLAAg2gnQg2gmAAg2QAAgMADgMQAJgoAqgeQAggXAngJAAxhlQAcAHAXAQQApAdAAApQAAACAAADQgDAlgmAbQgpAdg7AAQg6AAgpgdQgmgbgDglQAAgCAAgDQAAgpApgdQAUgOAYgH");
            this.shape.setTransform(0.1,5.775);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f().s("#FFC170").ss(3,1,1).p("AizBiQgBgBgBgBQgagaAAgmIAAg/QAAgmAagaQAagaAmAAIDrAAQAmAAAaAaQAaAaAAAmIAAA/QAAAmgaAaAgWgdIAmAAQAPAAALALQAGAFADAHQACAGAAAGQAAAIgEAHQgCAGgFAFQgLAKgPAAIgmAAQgPAAgLgKQgEgEgCgFQgEgIAAgJQAAgGABgEQADgIAGgGQALgLAPAAgACOB3QgLADgNAAIjrAAQgLAAgLgC");
            this.shape_1.setTransform(0,-6.55);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#F9E6B5").s().p("AA+AyQgJgFgCgHQgCgJAGgGQAEgEAJAAQAGAAAFAEQAEADAAAEQACAHgCAGQgDAGgHACIgDAAIgIgBgAhNAvQgFgEAAgFIAAgFIACgFQACgEAGgCQAFgCAEACQAFACADAFQADAEgBAGQgBAFgFADQgEAEgFAAQgFgBgEgDgAAyAAQgLgGgMgJQgMgJgBgIQgBgIAHgFQAEgDAKgBQAKgCAFABIAMAFIAJAGQAEAFAAANQAAAKgBAFQgDAHgIACIgBAAQgFAAgGgDg");
            this.shape_2.setTransform(8.5446,-10.3657);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#F8DB90").s().p("AiACVQg2gnAAg3QAAgMADgLIgCgCQgagaAAglIAAhAQAAglAagbQAagaAmAAIDrAAQAmAAAaAaQAaAbAAAlIAABAQAAAlgaAaQgKgmgqgeQgjgZgtgJQAtAJAjAZQAqAeAKAmQACAMAAANQAAA3g2AnQg1AnhMAAQhLAAg2gngAiLAwIAAAGQADAlAmAbQAqAdA5AAQA7AAApgdQAmgbADgmQgLADgNAAIjrAAQgLAAgLgCIAAgGQAAgpApgcQAUgOAYgHQgYAHgUAOQgpAcAAApIAAAAgACOA1IAAgFQAAgpgpgcQgYgQgcgHQAcAHAYAQQApAcAAApIAAAFgAiAgmQgqAfgJAnQAJgnAqgfQAggXAngJQgBAFAAAGQAAAJAEAIQACAFAEAEQALAKAPAAIAmAAQAQAAAKgKQAFgFACgGQADgHAAgIQAAgHgCgGQgDgHgFgFQgKgLgQAAIgmAAIAmAAQAQAAAKALQAFAFADAHQACAGAAAHQAAAIgDAHQgCAGgFAFQgKAKgQAAIgmAAQgPAAgLgKQgEgEgCgFQgEgIAAgJQAAgGABgFQADgIAGgGQALgLAPAAQgPAAgLALQgGAGgDAIQgnAJggAXgACMhQQgGAGADAJQACAHAIAFQAIACADgBQAHgCADgGQACgGgCgHQAAgEgDgDQgFgEgHAAQgJAAgEAEgAAMhRQgFACgDAEIgCAFIAAAFQABAFAEAEQAEADAFABQAFAAAEgEQAFgDABgFQABgGgDgEQgDgFgFgCIgEgBIgFABgAB4iZQgKABgFADQgGAFABAIQAAAIAMAJQANAJALAGQAHAEAEAAQAIgCADgIQABgFAAgKQAAgNgDgFIgJgGIgNgFIgCAAIgMABg");
            this.shape_3.setTransform(0,0.025);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-22.3,-20.2,44.6,40);
        
        
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
        
        
        (lib.补间1 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#FFC170").ss(2,1,1).p("AAyiBQAsAIAkAaQApAdAKAnQADANAAANQAAA2g2AmQg2AnhMAAQhLAAg2gnQg2gmAAg2QAAgMADgMQAJgoAqgeQAggXAngJAAxhlQAcAHAXAQQApAdAAApQAAACAAADQgDAlgmAbQgpAdg7AAQg6AAgpgdQgmgbgDglQAAgCAAgDQAAgpApgdQAUgOAYgH");
            this.shape.setTransform(0.1,5.775);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f().s("#FFC170").ss(3,1,1).p("AizBiQgBgBgBgBQgagaAAgmIAAg/QAAgmAagaQAagaAmAAIDrAAQAmAAAaAaQAaAaAAAmIAAA/QAAAmgaAaAgWgdIAmAAQAPAAALALQAGAFADAHQACAGAAAGQAAAIgEAHQgCAGgFAFQgLAKgPAAIgmAAQgPAAgLgKQgEgEgCgFQgEgIAAgJQAAgGABgEQADgIAGgGQALgLAPAAgACOB3QgLADgNAAIjrAAQgLAAgLgC");
            this.shape_1.setTransform(0,-6.55);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#F9E6B5").s().p("AA+AyQgJgFgCgHQgCgJAGgGQAEgEAJAAQAGAAAFAEQAEADAAAEQACAHgCAGQgDAGgHACIgDAAIgIgBgAhNAvQgFgEAAgFIAAgFIACgFQACgEAGgCQAFgCAEACQAFACADAFQADAEgBAGQgBAFgFADQgEAEgFAAQgFgBgEgDgAAyAAQgLgGgMgJQgMgJgBgIQgBgIAHgFQAEgDAKgBQAKgCAFABIAMAFIAJAGQAEAFAAANQAAAKgBAFQgDAHgIACIgBAAQgFAAgGgDg");
            this.shape_2.setTransform(8.5446,-10.3657);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#F8DB90").s().p("AiACVQg2gnAAg3QAAgMADgLIgCgCQgagaAAglIAAhAQAAglAagbQAagaAmAAIDrAAQAmAAAaAaQAaAbAAAlIAABAQAAAlgaAaQgKgmgqgeQgjgZgtgJQAtAJAjAZQAqAeAKAmQACAMAAANQAAA3g2AnQg1AnhMAAQhLAAg2gngAiLAwIAAAGQADAlAmAbQAqAdA5AAQA7AAApgdQAmgbADgmQgLADgNAAIjrAAQgLAAgLgCIAAgGQAAgpApgcQAUgOAYgHQgYAHgUAOQgpAcAAApIAAAAgACOA1IAAgFQAAgpgpgcQgYgQgcgHQAcAHAYAQQApAcAAApIAAAFgAiAgmQgqAfgJAnQAJgnAqgfQAggXAngJQgBAFAAAGQAAAJAEAIQACAFAEAEQALAKAPAAIAmAAQAQAAAKgKQAFgFACgGQADgHAAgIQAAgHgCgGQgDgHgFgFQgKgLgQAAIgmAAIAmAAQAQAAAKALQAFAFADAHQACAGAAAHQAAAIgDAHQgCAGgFAFQgKAKgQAAIgmAAQgPAAgLgKQgEgEgCgFQgEgIAAgJQAAgGABgFQADgIAGgGQALgLAPAAQgPAAgLALQgGAGgDAIQgnAJggAXgACMhQQgGAGADAJQACAHAIAFQAIACADgBQAHgCADgGQACgGgCgHQAAgEgDgDQgFgEgHAAQgJAAgEAEgAAMhRQgFACgDAEIgCAFIAAAFQABAFAEAEQAEADAFABQAFAAAEgEQAFgDABgFQABgGgDgEQgDgFgFgCIgEgBIgFABgAB4iZQgKABgFADQgGAFABAIQAAAIAMAJQANAJALAGQAHAEAEAAQAIgCADgIQABgFAAgKQAAgNgDgFIgJgGIgNgFIgCAAIgMABg");
            this.shape_3.setTransform(0,0.025);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-22.3,-20.2,44.6,40);
        
        
        (lib.元件54 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#AF6717").ss(4,1,1).p("AihGiQgvgTg6hyQhGiHgKiXQgJiNApihQAVhRAWg0QBHgFBtAyQDaBkDDEPIAaCeInBEsg");
            this.shape.setTransform(-48.2885,-94.7186);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FCFCEF").s().p("AhBFAQhwicgFkfQgDiQAUhwQDmCJBSDLQAaA+AIA+IACAyIizD1g");
            this.shape_1.setTransform(-54.2889,-92.95);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FEC07E").s().p("AihGiQgvgTg6hyQhGiHgKiXQgJiNApihQAVhRAWg0QBHgFBtAyQDaBkDDEPIAaCeInBEsgAjyhpQAFEfBwCcIBGA8ICyj1IgCgyQgIg+gag+QhSjLjmiJQgUBwADCQg");
            this.shape_2.setTransform(-48.2885,-94.7186);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-85.1,-140.5,73.69999999999999,91.6);
        
        
        (lib.元件53 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#AF6717").ss(4,1,1).p("AihGiQgvgTg6hyQhGiHgKiXQgJiNApihQAVhRAWg0QBHgFBtAyQDaBkDDEPIAaCeInBEsg");
            this.shape.setTransform(-48.2885,-94.7186);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FEC07E").s().p("AihGiQgvgTg6hyQhGiHgKiXQgJiNApihQAVhRAWg0QBHgFBtAyQDaBkDDEPIAaCeInBEsgAjyhpQAFEfBwCcIBGA8ICyj1IgCgyQgIg+gag+QhSjLjmiJQgUBwADCQg");
            this.shape_1.setTransform(-48.2885,-94.7186);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FCFCEF").s().p("AhBFAQhwicgFkfQgDiQAUhwQDmCJBSDLQAaA+AIA+IACAyIizD1g");
            this.shape_2.setTransform(-54.2889,-92.95);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-85.1,-140.5,73.69999999999999,91.6);
        
        
        (lib.元件52 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#AF6717").ss(4,1,1).p("AihGiQgvgTg6hyQhGiHgKiXQgJiNApihQAVhRAWg0QBHgFBtAyQDaBkDDEPIAaCeInBEsg");
            this.shape.setTransform(-48.2885,-94.7186);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FCFCEF").s().p("AhBFAQhwicgFkfQgDiQAUhwQDmCJBSDLQAaA+AIA+IACAyIizD1g");
            this.shape_1.setTransform(-54.2889,-92.95);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FEC07E").s().p("AihGiQgvgTg6hyQhGiHgKiXQgJiNApihQAVhRAWg0QBHgFBtAyQDaBkDDEPIAaCeInBEsgAjyhpQAFEfBwCcIBGA8ICyj1IgCgyQgIg+gag+QhSjLjmiJQgUBwADCQg");
            this.shape_2.setTransform(-48.2885,-94.7186);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-85.1,-140.5,73.69999999999999,91.6);
        
        
        (lib.元件51 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#AF6717").ss(4,1,1).p("AihGiQgvgTg6hyQhGiHgKiXQgJiNApihQAVhRAWg0QBHgFBtAyQDaBkDDEPIAaCeInBEsg");
            this.shape.setTransform(-48.2885,-94.7186);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FEC07E").s().p("AihGiQgvgTg6hyQhGiHgKiXQgJiNApihQAVhRAWg0QBHgFBtAyQDaBkDDEPIAaCeInBEsgAjyhpQAFEfBwCcIBGA8ICyj1IgCgyQgIg+gag+QhSjLjmiJQgUBwADCQg");
            this.shape_1.setTransform(-48.2885,-94.7186);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FCFCEF").s().p("AhBFAQhwicgFkfQgDiQAUhwQDmCJBSDLQAaA+AIA+IACAyIizD1g");
            this.shape_2.setTransform(-54.2889,-92.95);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-85.1,-140.5,73.69999999999999,91.6);
        
        
        (lib.元件50 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#AF6717").ss(4,1,1).p("AihGiQgvgTg6hyQhGiHgKiXQgJiNApihQAVhRAWg0QBHgFBtAyQDaBkDDEPIAaCeInBEsg");
            this.shape.setTransform(-48.2885,-94.7186);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FCFCEF").s().p("AhBFAQhwicgFkfQgDiQAUhwQDmCJBSDLQAaA+AIA+IACAyIizD1g");
            this.shape_1.setTransform(-54.2889,-92.95);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FEC07E").s().p("AihGiQgvgTg6hyQhGiHgKiXQgJiNApihQAVhRAWg0QBHgFBtAyQDaBkDDEPIAaCeInBEsgAjyhpQAFEfBwCcIBGA8ICyj1IgCgyQgIg+gag+QhSjLjmiJQgUBwADCQg");
            this.shape_2.setTransform(-48.2885,-94.7186);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-85.1,-140.5,73.69999999999999,91.6);
        
        
        (lib.元件49 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#AF6717").ss(4,1,1).p("AAhGIIBFAuIA8gUQAvgTA6hyQBGiHAKiXQAJiNgpihQgVhRgWg0QhHgFhtAyQjaBkjDEPIgaCeIFmDv");
            this.shape.setTransform(47.4385,-94.6686);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FCFCEF").s().p("AgSFnIiljlIADgxQAIg9AZg9QBTjIDmiKQAUBwgDCRQgFEehwCcIg/A2IgGAGg");
            this.shape_1.setTransform(50.4139,-92.9);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FEC07E").s().p("AAhGIIA/g2QBwicAFkfQADiQgUhwQjmCJhTDIQgZA+gIA9IgDAxICkDlIlmjvIAaieQDDkPDahkQBtgyBHAFQAWA0AVBRQApChgJCNQgKCXhGCHQg6BygvATIg8AUg");
            this.shape_2.setTransform(47.4385,-94.6686);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(10.6,-140.4,73.7,91.5);
        
        
        (lib.元件48 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#AF6717").ss(4,1,1).p("AAhGIIBFAuIA8gUQAvgTA6hyQBGiHAKiXQAJiNgpihQgVhRgWg0QhHgFhtAyQjaBkjDEPIgaCeIFmDv");
            this.shape.setTransform(47.4385,-94.6686);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FCFCEF").s().p("AgSFnIiljlIADgxQAIg9AZg9QBTjIDmiKQAUBwgDCRQgFEehwCcIg/A2IgGAGg");
            this.shape_1.setTransform(50.4139,-92.9);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FEC07E").s().p("AAhGIIA/g2QBwicAFkfQADiQgUhwQjmCJhTDIQgZA+gIA9IgDAxICkDlIlmjvIAaieQDDkPDahkQBtgyBHAFQAWA0AVBRQApChgJCNQgKCXhGCHQg6BygvATIg8AUg");
            this.shape_2.setTransform(47.4385,-94.6686);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(10.6,-140.4,73.7,91.5);
        
        
        (lib.元件47 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#AF6717").ss(4,1,1).p("AAhGIIBFAuIA8gUQAvgTA6hyQBGiHAKiXQAJiNgpihQgVhRgWg0QhHgFhtAyQjaBkjDEPIgaCeIFmDv");
            this.shape.setTransform(47.4385,-94.6686);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FCFCEF").s().p("AgSFnIiljlIADgxQAIg9AZg9QBTjIDmiKQAUBwgDCRQgFEehwCcIg/A2IgGAGg");
            this.shape_1.setTransform(50.4139,-92.9);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FEC07E").s().p("AAhGIIA/g2QBwicAFkfQADiQgUhwQjmCJhTDIQgZA+gIA9IgDAxICkDlIlmjvIAaieQDDkPDahkQBtgyBHAFQAWA0AVBRQApChgJCNQgKCXhGCHQg6BygvATIg8AUg");
            this.shape_2.setTransform(47.4385,-94.6686);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(10.6,-140.4,73.7,91.5);
        
        
        (lib.元件46 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#AF6717").ss(4,1,1).p("AAhGIIBFAuIA8gUQAvgTA6hyQBGiHAKiXQAJiNgpihQgVhRgWg0QhHgFhtAyQjaBkjDEPIgaCeIFmDv");
            this.shape.setTransform(47.4385,-94.6686);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FCFCEF").s().p("AgSFnIiljlIADgxQAIg9AZg9QBTjIDmiKQAUBwgDCRQgFEehwCcIg/A2IgGAGg");
            this.shape_1.setTransform(50.4139,-92.9);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FEC07E").s().p("AAhGIIA/g2QBwicAFkfQADiQgUhwQjmCJhTDIQgZA+gIA9IgDAxICkDlIlmjvIAaieQDDkPDahkQBtgyBHAFQAWA0AVBRQApChgJCNQgKCXhGCHQg6BygvATIg8AUg");
            this.shape_2.setTransform(47.4385,-94.6686);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(10.6,-140.4,73.7,91.5);
        
        
        (lib.元件45 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#AF6717").ss(4,1,1).p("AAhGIIBFAuIA8gUQAvgTA6hyQBGiHAKiXQAJiNgpihQgVhRgWg0QhHgFhtAyQjaBkjDEPIgaCeIFmDv");
            this.shape.setTransform(47.4385,-94.6686);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FCFCEF").s().p("AgSFnIiljlIADgxQAIg9AZg9QBTjIDmiKQAUBwgDCRQgFEehwCcIg/A2IgGAGg");
            this.shape_1.setTransform(50.4139,-92.9);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FEC07E").s().p("AAhGIIA/g2QBwicAFkfQADiQgUhwQjmCJhTDIQgZA+gIA9IgDAxICkDlIlmjvIAaieQDDkPDahkQBtgyBHAFQAWA0AVBRQApChgJCNQgKCXhGCHQg6BygvATIg8AUg");
            this.shape_2.setTransform(47.4385,-94.6686);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(10.6,-140.4,73.7,91.5);
        
        
        (lib.头部 = function(mode,startPosition,loop,reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
            var props = new Object();
            props.mode = mode;
            props.startPosition = startPosition;
            props.labels = {};
            props.loop = loop;
            props.reversed = reversed;
            cjs.MovieClip.apply(this,[props]);
        
            // 闭眼睛
            this.shape = new cjs.Shape();
            this.shape.graphics.f("#6D3B0A").s().p("AC5AcQgMAAgIgJQgIgHAAgMQAAgLAIgIQAIgIAMAAIBUAAQAMAAAIAIQAIAIAAALQAAAMgIAHQgIAJgMAAgAkMAcQgMAAgIgJQgIgHAAgMQAAgLAIgIQAIgIAMAAIBUAAQAMAAAIAIQAIAIAAALQAAAMgIAHQgIAJgMAAg");
            this.shape.setTransform(87.125,110.95);
        
            this.timeline.addTween(cjs.Tween.get(this.shape).wait(130));
        
            // 眼睛
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#6D3B0A").s().p("ACtA1QgWgVAAggQAAgeAWgXQAXgWAfAAQAgAAAWAWQAWAXAAAeQAAAggWAVQgWAXggAAQgfAAgXgXgAkYA1QgWgVAAggQAAgeAWgXQAWgWAgAAQAfAAAWAWQAXAXAAAeQAAAggXAVQgWAXgfAAQggAAgWgXg");
            this.shape_1.setTransform(87.075,110.15);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},25).wait(3).to({_off:false},0).to({_off:true},9).wait(3).to({_off:false},0).to({_off:true},61).wait(3).to({_off:false},0).wait(26));
        
            // 奶嘴
            this.instance = new lib.补间1("synched",0);
            this.instance.setTransform(87.3,153.6);
        
            this.instance_1 = new lib.补间8("synched",0);
            this.instance_1.setTransform(87.3,153.75,1.1183,1.099,-3.7313,0,0,-0.1,0.1);
            this.instance_1._off = true;
        
            this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:-0.1,regY:0.1,scaleX:1.1183,scaleY:1.099,rotation:-3.7313,y:153.75},20).wait(110));
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},20).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,y:153.6},21).to({scaleX:1.0673,scaleY:1.0638},22).to({scaleX:1,scaleY:1},24).to({regX:0.1,regY:0.2,scaleX:1.1043,scaleY:1.0288,rotation:4.4981,x:87.45,y:153.8},21).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:87.3,y:153.6},21).wait(1));
        
            // 脸边框
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f().s("#AF6717").ss(4,1,1).p("AgBqiQEXAAC4CdQDZC8BKGUIAnA6QApBFAKA1QgogKgygFQAQAVAOAeQAbA8gMAsQgKgNgQgLQgfgWgcAGQAHAjABApQABBTgiAfQgjgyAAgUQgaAzhdAzQi5BllLgDQlKgDjGhjQhjgxghgxIgIAbQgNAegTANQgHgXgGggQgNhBAGgyIgbAAQghACgjANQgCgVAFgdQAKg4AlgiIgegBQglABgcAKQAFgaAPglQAchIAvgyQAEgvAShGQAgiOBAh1QDKl4GqADg");
            this.shape_2.setTransform(86.45,115.4531);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#F9FCEC").s().p("ADxAsQgegIgRgSQgTgSAGgRQAEgRAZgHQAZgHAdAIQAeAIASASQASASgEARQgGASgXAGQgMADgNAAQgPAAgQgEgAknAqQgZgGgFgSQgEgRASgSQARgSAegIQAegIAZAHQAZAHAFARQAEASgSARQgSASgdAIQgQAEgPAAQgNAAgLgDg");
            this.shape_3.setTransform(87.4,95.3426);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(130));
        
            // 鼻子
            this.shape_4 = new cjs.Shape();
            this.shape_4.graphics.f("#6D3B0A").s().p("AgaBUQgiAAgZgYQgYgZAAgiIAAgBQAAgiAYgYQAZgZAiAAIA1AAQAiAAAYAZQAZAYAAAiIAAABQAAAigZAZQgYAYgiAAgAASAxIgCAFIALAAQAWAAAQgPQAPgQAAgWIAAgBQAAgWgPgQQgQgPgWAAIg1AAQgWAAgQAPQgPAQAAAWIAAABQAAAWAPAQQAQAPAWAAIAMAAQgBgDAAgEQgBgfgVgMIAAAAQgKgEgLAAQgGAAgEgDQgFgEgBgGQAAgHAEgEQAEgFAHAAQARgCATAKIAAAAQAQAIAIANQAJgMAPgHIAAAAQATgKARABQAHABAEAFQAEAEgBAHQAAAGgFAEQgEADgHgBQgKAAgKAFIAAAAQgVAMAAAfg");
            this.shape_4.setTransform(87.4,133.45);
        
            this.shape_5 = new cjs.Shape();
            this.shape_5.graphics.f("#AF6717").s().p("AEwCOIgUgpIg1hPIgCgBIgCgDIgBgCIgBgBIAAAAIAAAAIgeggQgZgbgbgRIgHgFIgCgBIgGgDIgCgCIgVgLIgFgBIgEgCIgegKIgBAAIgBAAIgZgEIgCgBIgCAAIgFAAIgCAAIgCgBIgJAAIgDAAIgJAAIAAAAIgGAAIgyAHIgfAKIgsAVIgEADQgaAPgdAaIgOAOIgDADIgQAQIgCABIAAABIgBABIgQATIgFAGIgmA0IgTAfIgDAGIgBACIgBABQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgDIAQguIArhNIAFgGIAAAAIAAAAIABAAIAAgBIAhgpQAcgeAdgTIAEgDIACgBIACgCIAWgNIAhgPIAjgKIAVgEIAjgDIABAAIAIAAIADAAIAWABIABABIACAAIAxALIAnARQAPAIATAOQAdAWAZAfIAcAlIAAAAIAAAAIABABIALASIACAEIACADIAbA4IANAqIAEASQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIAAAAIgBgBg");
            this.shape_5.setTransform(86.675,129.22);
        
            this.shape_6 = new cjs.Shape();
            this.shape_6.graphics.f("#7B581E").s().p("AAbA2IgLAAIACgFQAAgfAVgMIAAAAQAKgFAKAAQAHABAEgDQAFgEAAgGQABgHgEgEQgEgFgHgBQgRgBgTAKIAAAAQgPAHgJAMQgIgNgQgIIAAAAQgTgKgRACQgHAAgEAFQgEAEAAAHQABAGAFAEQAEADAGAAQALAAAKAEIAAAAQAVAMABAfQAAAEABADIgMAAQgWAAgQgPQgPgQAAgWIAAgBQAAgWAPgQQAQgPAWAAIA1AAQAWAAAQAPQAPAQAAAWIAAABQAAAWgPAQQgQAPgWAAIAAAAg");
            this.shape_6.setTransform(87.4,133.45);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(130));
        
            // 脸颊
            this.shape_7 = new cjs.Shape();
            this.shape_7.graphics.f("#AF6717").s().p("AHDAxQgOgEgGgQQgFgLAAgSQgBgJADgGQAEgFAGgBQAHgBAFAEQADADADAFIANAZQAEAJAAAJQgBAKgIAEQgDACgFAAIgFAAgAnTAqQgGgDgCgHQgDgHACgHIAGgMIAEgIQACgFADgDQAFgFAGABQAHACAEAFQADAGgBAHIgDANQgBAMgCADQgDAGgHADIgGAAQgEAAgEgBgAIDAjQgIgBgIgNIgGgKQgFgKgBgEQgCgJAFgGQAGgIAJADQAGABAEAHIAFAIIAHAHQAKAKgDAMQgCAGgFAEQgEADgFAAIgDAAgAoPAgQgFgCgCgFQgDgFABgGQAAgEAEgHIAGgJIAFgOQAFgHAHAAQAIgBAFAHQAEAGgEAPIgGAQQgBAHgEAFQgEAEgFABIgDAAQgEAAgEgBgAI3ATIgEgJQgFgIgGgFQgHgHgBgDQgDgGAEgHQADgGAGgBQAIgCAPALIAPAKQAJAGABADQADAFgCAJQgCAJgDAEQgEAFgIAAIgCAAQgKAAgHgIgApXALQgGgIAEgJQACgHAIgIQAGgFACgEQAEgIACgDQAFgIAJABQAIAAAEAIQAEAIgFALQgEAIgJANQgEALgDACQgFAFgJAAQgJgBgEgGg");
            this.shape_7.setTransform(87.2144,143.1941);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(130));
        
            // 眼眶
            this.shape_8 = new cjs.Shape();
            this.shape_8.graphics.f("#FEC07E").s().p("AGEGjQhQgIhKg0QgXgvgbgZQgOgNgkgXIgPgJQgigygRg5QghhyAhiRQAch6BthiQA2gxAwgZQAWgLBrBhQBrBhBFBcQAzA9AxCrQAYBWAOBKQAEAUhkBDQhjBCgqAIQg6AKgpAAIgagBgAoAGaQgqgIhjhCQhkhDAEgUQAOhKAYhWQAxirAzg9QBFhcBrhhQBrhhAWALQAwAZA2AxQBtBiAcB6QAhCRghByQgOAugZAqQgMAFgMAJQgQALgeAiIgSAVIgFAGIgdAhIgYAeQhBAohGAHIgaABQgpAAg6gKg");
            this.shape_8.setTransform(87.025,95.4876);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(130));
        
            // 底色_白
            this.shape_9 = new cjs.Shape();
            this.shape_9.graphics.f("#FCFCEF").s().p("AARKjQlKgDjFhjQhjgxgggxIgJAbQgMAegUANQgHgXgGggQgMhBAFgyIgaAAQgiACgjANQgCgVAFgdQAKg4AlgiIgegBQgkABgdAKQAGgaAOglQAdhIAugyQAEgvARhGQAiiOA/h1QDKl4GqADQEXAAC3CdQDaC8BKGUIAnA6QApBFAKA1QgpgKgxgFQAQAVANAeQAcA8gMAsQgLgNgPgLQgggWgcAGQAIAjAAApQACBTgjAfQgigyAAgUQgaAzhdAzQi0Bik+AAIgTAAg");
            this.shape_9.setTransform(86.45,115.4531);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(130));
        
            // 右耳
            this.instance_2 = new lib.元件49("synched",0);
            this.instance_2.setTransform(135.15,52,1,1,0,0,0,47.5,-93.9);
        
            this.instance_3 = new lib.元件48("synched",0);
            this.instance_3.setTransform(135.7,52.4,1,1,0.6767,0,0,47.4,-93.8);
            this.instance_3._off = true;
        
            this.instance_4 = new lib.元件47("synched",0);
            this.instance_4.setTransform(137.25,53.8,1,1,2.7226,0,0,47.4,-93.8);
            this.instance_4._off = true;
        
            this.instance_5 = new lib.元件46("synched",0);
            this.instance_5.setTransform(130.45,50.5,0.9951,0.964,-6.175,0,0,47.9,-93.4);
            this.instance_5._off = true;
        
            this.instance_6 = new lib.元件45("synched",0);
            this.instance_6.setTransform(135.15,52,1,1,0,0,0,47.5,-93.9);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},38).to({state:[{t:this.instance_4}]},19).to({state:[{t:this.instance_5}]},23).to({state:[{t:this.instance_6}]},49).wait(1));
            this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,regX:47.4,regY:-93.8,rotation:0.6767,x:135.7,y:52.4},38).wait(92));
            this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},38).to({_off:true,rotation:2.7226,x:137.25,y:53.8},19).wait(73));
            this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({_off:false},19).to({_off:true,regX:47.9,regY:-93.4,scaleX:0.9951,scaleY:0.964,rotation:-6.175,x:130.45,y:50.5},23).wait(50));
            this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(57).to({_off:false},23).to({_off:true,regX:47.5,regY:-93.9,scaleX:1,scaleY:1,rotation:0,x:135.15,y:52},49).wait(1));
        
            // 左耳
            this.instance_7 = new lib.元件54("synched",0);
            this.instance_7.setTransform(39.65,51.7,1,1,0,0,0,-48,-94.2);
        
            this.instance_8 = new lib.元件53("synched",0);
            this.instance_8.setTransform(40,51.25,1,1,0.8061,0,0,-48.3,-94);
            this.instance_8._off = true;
        
            this.instance_9 = new lib.元件52("synched",0);
            this.instance_9.setTransform(38.35,53.7,1,1,-2.7042,0,0,-47.1,-93.9);
            this.instance_9._off = true;
        
            this.instance_10 = new lib.元件51("synched",0);
            this.instance_10.setTransform(45.65,49.05,0.994,0.965,8.4688,0,0,-49.1,-93.2);
            this.instance_10._off = true;
        
            this.instance_11 = new lib.元件50("synched",0);
            this.instance_11.setTransform(39.65,51.7,1,1,0,0,0,-48,-94.2);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},38).to({state:[{t:this.instance_9}]},19).to({state:[{t:this.instance_10}]},23).to({state:[{t:this.instance_11}]},49).wait(1));
            this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,regX:-48.3,regY:-94,rotation:0.8061,x:40,y:51.25},38).wait(92));
            this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:false},38).to({_off:true,regX:-47.1,regY:-93.9,rotation:-2.7042,x:38.35,y:53.7},19).wait(73));
            this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(38).to({_off:false},19).to({_off:true,regX:-49.1,regY:-93.2,scaleX:0.994,scaleY:0.965,rotation:8.4688,x:45.65,y:49.05},23).wait(50));
            this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(57).to({_off:false},23).to({_off:true,regX:-48,regY:-94.2,scaleX:1,scaleY:1,rotation:0,x:39.65,y:51.7},49).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(0,0.1,174.5,184.9);
        
        
        (lib.身体 = function(mode,startPosition,loop,reversed) {
        if (loop == null) { loop = true; }
        if (reversed == null) { reversed = false; }
            var props = new Object();
            props.mode = mode;
            props.startPosition = startPosition;
            props.labels = {};
            props.loop = loop;
            props.reversed = reversed;
            cjs.MovieClip.apply(this,[props]);
        
            // 头部
            this.instance = new lib.头部();
            this.instance.setTransform(-1.15,37.1,1,1,0,0,0,86.5,183);
        
            this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:182.9,rotation:4.7483,y:37},25).to({regY:183,rotation:0,y:37.1},36).to({rotation:-5.231,x:-1.05},37).to({rotation:0,x:-1.15},31).wait(1));
        
            // 图层_18
            this.shape = new cjs.Shape();
            this.shape.graphics.f("#FFFFFF").s().p("AgLAMIgmgMIAmgLIALglIAMAlIAmALIgmAMIgMAmg");
            this.shape.setTransform(-9.525,69.45);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FFFFFF").s().p("AgDAPIgkAHIAZgZIgHgkIAZAZIAkgHIgZAZIAHAkg");
            this.shape_1.setTransform(-14.925,68.825);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#FFFFFF").s().p("AgKANIgmgJIAkgOIAJgnIAOAkIAmAKIgkAOIgJAmg");
            this.shape_2.setTransform(13.575,48.1);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#FFFFFF").s().p("AgFARIgqAFIAfgbIgFgqIAcAeIApgEIgfAcIAFApg");
            this.shape_3.setTransform(6.375,63.25);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},17).to({state:[{t:this.shape}]},3).to({state:[]},1).to({state:[{t:this.shape_1}]},28).to({state:[{t:this.shape_1}]},3).to({state:[]},1).to({state:[{t:this.shape_2}]},49).to({state:[{t:this.shape_2}]},3).to({state:[]},1).to({state:[{t:this.shape_3}]},19).to({state:[{t:this.shape_3}]},3).to({state:[]},1).wait(1));
        
            // 图层_17
            this.shape_4 = new cjs.Shape();
            this.shape_4.graphics.f("#FFFFFF").s().p("AgSATIg5gTIA5gSIASg5IATA5IA5ASIg5ATIgTA5g");
            this.shape_4.setTransform(-17.35,60.05);
        
            this.shape_5 = new cjs.Shape();
            this.shape_5.graphics.f("#FFFFFF").s().p("AgKAWIg5AAIAughIAAg4IAhAtIA4ABIguAhIAAA4g");
            this.shape_5.setTransform(7.775,60.05);
        
            this.shape_6 = new cjs.Shape();
            this.shape_6.graphics.f("#FFFFFF").s().p("AgOAPIgvgPIAvgOIAOgvIAPAvIAvAOIgvAPIgPAvg");
            this.shape_6.setTransform(9.975,62.65);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},15).to({state:[{t:this.shape_4}]},2).to({state:[]},1).to({state:[{t:this.shape_5}]},29).to({state:[{t:this.shape_5}]},2).to({state:[]},1).to({state:[{t:this.shape_6}]},50).to({state:[{t:this.shape_6}]},3).to({state:[]},1).wait(26));
        
            // MergedLayer_2
            this.instance_1 = new lib.补间17("synched",0);
            this.instance_1.setTransform(0.15,47.55,1,1,0,0,0,0,-15.7);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:14.9992},31).to({rotation:0},29).to({rotation:-14.9992,y:47.6},35).to({rotation:0,y:47.55},34).wait(1));
        
            // 图层_12
            this.shape_7 = new cjs.Shape();
            this.shape_7.graphics.f().s("#6D3B0A").ss(2,1,1).p("AATDzQg6gkg+hBQh6iCgHiQQgHiRDmAvQBxAXB0A0QARAvgRBJQgiCSipCEg");
            this.shape_7.setTransform(-1.7854,23.2747);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(130));
        
            // 右脚
            this.instance_2 = new lib.补间15("synched",0);
            this.instance_2.setTransform(27.15,109.05,1,1,0,0,0,-13.6,15.6);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-7.7327},30).to({rotation:0},35).to({regY:15.7,rotation:-8.7221,y:109.1},37).to({regY:15.6,rotation:0,y:109.05},27).wait(1));
        
            // 左脚
            this.instance_3 = new lib.补间16("synched",0);
            this.instance_3.setTransform(-25.45,109.05,1,1,0,0,0,14,15.6);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:14.9992},30).to({rotation:0},35).to({rotation:14.9992},37).to({rotation:0},27).wait(1));
        
            // 图层_4
            this.shape_8 = new cjs.Shape();
            this.shape_8.graphics.f().s("#AF6717").ss(3,1,1).p("ADpAAQAABxhEBQQhFBQhgAAQhgAAhEhQQhEhQAAhxQAAhwBEhQQBEhQBgAAQBgAABFBQQBEBQAABwg");
            this.shape_8.setTransform(0.6,70.8);
        
            this.shape_9 = new cjs.Shape();
            this.shape_9.graphics.f("#FCFCEF").s().p("AijDBQhEhQgBhxQABhwBEhQQBDhQBgABQBggBBEBQQBEBQABBwQgBBxhEBQQhEBPhgAAQhgAAhDhPg");
            this.shape_9.setTransform(0.6,70.8);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(130));
        
            // 图层_3
            this.shape_10 = new cjs.Shape();
            this.shape_10.graphics.f().s("#AF6717").ss(4,1,1).p("AjJl4QgfBRgfBoQg9DOADBxQADB7B1BSQBkBGBtAAQBuAABehFQBvhRAAiCQAAh3g9jWQgehsgehUg");
            this.shape_10.setTransform(0.293,66.775);
        
            this.shape_11 = new cjs.Shape();
            this.shape_11.graphics.f("#FEC07E").s().p("AjJFNQh1hSgDh7QgDhxA9jOQAfhoAfhRIGTgaQAeBUAeBsQA9DWAAB3QAACChvBRQheBFhuAAQhtAAhkhGg");
            this.shape_11.setTransform(0.293,66.775);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).wait(130));
        
            // foot
            this.shape_12 = new cjs.Shape();
            this.shape_12.graphics.f().s("#AF6717").ss(4,1,1).p("AB2ASIAKAOQAOARATAQQA9AwBbAKIAejNIhfgogAh1ASIg5A0QhHAyhIgCIgZjIIBfgog");
            this.shape_12.setTransform(0.85,97.3);
        
            this.shape_13 = new cjs.Shape();
            this.shape_13.graphics.f("#FEC07E").s().p("AChBBQgTgQgOgRIgKgOICCiMIBfAoIgeDMQhbgJg9gwgAk9B2IgZjIIBfgoICCCMIg5AzQhDAxhEAAIgIAAg");
            this.shape_13.setTransform(0.85,97.3);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).wait(130));
        
            // MergedLayer_3
            this.instance_4 = new lib.补间18("synched",0);
            this.instance_4.setTransform(-18.3,47.55,1,1,0,0,0,21.4,-6.4);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:21.3,rotation:-14.9992,x:-18.4},29).to({regX:21.4,rotation:14.9992,x:-18.35},32).to({regX:21.3,rotation:-14.9992,x:-18.4},35).to({regX:21.4,rotation:0,x:-18.3},33).wait(1));
        
            // 图层_16
            this.instance_5 = new lib.补间19("synched",0);
            this.instance_5.setTransform(18.6,47.55,1,1,0,0,0,-23.2,-6.4);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:14.9992},29).to({rotation:0},32).to({regY:-6.3,rotation:-14.9992,y:47.6},35).to({regY:-6.4,rotation:0,y:47.55},33).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-99.5,-146.4,276.3,259.7);
        
        
        // stage content:
        (lib.dog3 = function(mode,startPosition,loop,reversed) {
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
            this.instance = new lib.身体();
            this.instance.setTransform(197.65,355.9,0.7357,0.7357,0,0,0,-1,-13.6);
        
            this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));
        
            // 影子
            this.instance_1 = new lib.补间6("synched",0);
            this.instance_1.setTransform(200,445.4);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},129).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new lib.AnMovieClip();
        p.nominalBounds = new cjs.Rectangle(334.1,542.4,-9.200000000000045,-90.5);
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
