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
            this.shape.graphics.f().s("#667D96").ss(3,1,1).p("Ag5AiQgNgXAHgSQAHgTAYgKQAggPAXABQAkABAHAjQAIAmg7ATQg5ATgPgcg");
            this.shape.setTransform(-0.0112,0.0082);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FFFFFF").s().p("Ag5AiQgNgXAHgSQAHgTAYgKQAggPAXABQAkABAHAjQAIAmg7ATQgXAIgQAAQgYAAgJgRg");
            this.shape_1.setTransform(-0.0112,0.0082);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-8.1,-6.6,16.299999999999997,13.2);
        
        
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
            this.shape.graphics.f().s("#667D96").ss(3,1,1).p("Ag5AiQgNgXAHgSQAHgTAYgKQAggPAXABQAkABAHAjQAIAmg7ATQg5ATgPgcg");
            this.shape.setTransform(0.0235,0.0713,1,1,0,-29.9992,150.0008);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FFFFFF").s().p("Ag5AiQgNgXAHgSQAHgTAYgKQAggPAXABQAkABAHAjQAIAmg7ATQgXAIgQAAQgYAAgJgRg");
            this.shape_1.setTransform(0.0235,0.0713,1,1,0,-29.9992,150.0008);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-8.2,-6.3,16.5,12.7);
        
        
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
            this.shape.graphics.f().s("#54962B").ss(3,1,1).p("AhaiFQACgiAYgYQAagZAkAAQAkAAAZAZQAYAXACAgQAWALATASQADADADADQAaAaAOAfQABADACAEQAMAeAAAiQAAACAAABQAAAzgXApQAAAAgBABQgNAVgSASQgOAPgRALQgBAAAAABQgsAcg1AAIgDAAQhNAAg3g3QgXgXgNgaQAAgBAAgBQgSglAAgsQAAAAAAgBQAAggAKgdQADgHACgGQAOgfAZgZQABgBABgBQATgSAVgMgABViIQABAEAAAEIAAAEQgBADAAAEQgBAHgCAHIgDAGABHhSIgFAJQgDAEgEADIAAAAQgEAEgEADQgXATgeAAQgdAAgWgRQgFgDgEgEQgBgBgBgBQgWgWgDgeQgBgFAAgFQAAgDAAgCAA7hCQALAHAKAKQAaAaAGAiQAAAAAAABQACAJAAAJQAAAvgiAhQggAhgvAAQgvAAghghQghghAAgvQAAgHABgHQABgEAAgEQAGggAZgZQAGgGAHgF");
            this.shape.setTransform(0.3,6.975);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f().s("#54962B").ss(4,1,1).p("AisB9QgngpgJg0QgDgQAAgQQAAhRBCg7QBBg6BcAAQBdAABBA6QBBA7AABRQAAANgBANIAAABQgEAdgNAaQgBAAgBACQgKATgPARABnCxQgvAWg4AAQg0AAgsgT");
            this.shape_1.setTransform(0,-8.85);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#8CC161").s().p("AhQCcQg8gbgZg7QANAbAXAXQA3A3BNAAIgEAAQgnAAgogTgAADCvQhNAAg3g3QgXgXgNgbIgBgBQgPgkgDgtIAvAXIAHARQAKAUAOAQQAjAoAyAIIASAAQBGACAtg0QAOgQAKgUIAHgRIAvgXQgEA2gUAnIgBABQgMAVgSATQgPAPgRALIgBAAIgQAIQgjARgkACIgDABIgHABgABnCSIAAAAgACHB4QASgTAMgVQgVAqgpAYQARgLAPgPgAhggdQAFghAXgYIAMgKIgHgHIgIgJQgQgWAAgbQAEAfAWAVIACADIAIAHQAXAQAcAAQAfAAAXgSQAKAGAJAJQAZAZAEAhIh8AagAAAhTQgcAAgXgQIgIgHIgCgDQgWgVgEgfQATANAgAGQA+AMA9geIAAAAIAAADQgCAJgDAIIgJAQIgBABQgFAIgGAGIgIAHQgVASggABIAAAAgACHiQIgGgFQA2gKAmgPIAAABIgRA3IgBACIABgCIgBABIAAABIgdAdQgOgfgZgagAjdioQAuAPAvAIIgBABQgZAagOAfgAhXihIAAAAg");
            this.shape_2.setTransform(0.05,11.2024);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#BCDE9C").s().p("AANEfIADgCQAjgCAkgQIAQgIQgsAbg1ABIAHAAgAgCDgIgSAAQgygHgkgpQgOgQgJgUIgHgQIgvgZQAAghALgeIAEgMQAOgeAagZIABgCQATgSAVgNQACghAYgYQAagaAjABQAlgBAZAaQAYAXACAgQgCgggYgXQgZgaglABQgjgBgaAaQgYAYgCAhQgVANgTASQgwgIgtgPIA0BQIgEAMQgngogJg0QgDgPAAgRQAAhRBCg7QBCg6BbAAQBdAABBA6QBCA7gBBRQAAAOgBAMQgnAPg2AKQgTgSgWgLQAWALATASIAGAGQAaAZAOAeIAdgcQgLASgPASQAMAeAAAjIgvAZIgHAQQgJAUgOAQQgsAzhDAAIgEgBgAhtBjQABAwAgAgQAiAiAuAAQAuAAAhgiQAhggAAgwIgBgRIAAgCQgGgigagbQgKgJgLgHQALAHAKAJQAaAbAGAiIAAACIABARQAAAwghAgQghAiguAAQguAAgigiQgggggBgwIABgNIABgIQAGgiAZgZIANgLIgNALQgZAZgGAiIgBAIIgBANIAAAAgAhgBgQAAAqAdAdQAdAdApAAQApAAAdgdQAegdAAgqIAAgIQgvAWg4AAQg0AAgsgTIAAAFgAhHAAIAIAIIAIAHIgMAKQgYAYgEAhIBKAbIB7gaQgEghgZgZQgIgJgLgGIAIgHIAAgBIAHgFIAFgJIgFAJIgHAFIAAABIgIAHQgXASgfAAQAggBAWgSIAIgHQAFgFAFgHIACgCIAIgPIADgHIADgNIAAgHIAAgEIAAgIIAAAIIAAAEIAAAHIAAAAQg+Adg+gMQgfgGgTgMIgBgKIAAgGIAAAGIABAKQAAAaAPAWgACyAgIgDgIIADAIgAC+BhIAAADQAAAzgXAoQAUgnADg3gAi3BkIAAgBQADAuAPAkQgSglAAgsgAC+BhIAAAAgADeg9QgEAdgNAagABYgtIAAgCIgDANIgDAHQAEgJACgJgAhWgwIAAAAg");
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-24.3,-30.7,48.7,60.9);
        
        
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
            this.shape.graphics.f().s("#294B6E").ss(4,1,1).p("ADUi2IgFAEIgDACIhQBFIlPEj");
            this.shape.setTransform(7.25,9.75);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f().s("#667D96").ss(4,1,1).p("AiKEZIg7hvQgVgugRgsQgdhQgLhEQgRhuAUgyQAKgaAegRQANgHAjgCQAvgBA7ANQCJAfCaBmQAjAXAkAb");
            this.shape_1.setTransform(0.0095,-0.0078);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#F4A699").s().p("AhpBvQgrhfgXg/QgTg0ADgmQADgjAVgNQArgTBhAeQBdAdBRA9IgCADIAoAdIj/D2g");
            this.shape_2.setTransform(-0.783,3.0972);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#AACDE2").s().p("AjTBgQgthjgMg2IB5CqIA7BAIhQAIgAC2g4IAAgBIBQhFIAAAAIAAAAIhQBHgACmhFIgogdIADgCIA/hUIBNAzIgEAFIgFAAIACACIhQBFgAEGh+IADgCIAAAAIAEgFIgGAJgAEGh+gAENiFg");
            this.shape_3.setTransform(1.475,4.75);
        
            this.shape_4 = new cjs.Shape();
            this.shape_4.graphics.f("#FFFFFF").s().p("AjFCqQgVgugRgsQgdhQgLhEQgRhuAUgyQAKgaAegRQANgHAjgCQAvgBA7ANQCJAfCaBmQAjAXAkAbIhOgzIg/BTQhRg9hdgdQhhgegrATQgVANgDAjQgDAmATA0QAXA/ArBfIAnBTIg6hAIh6iqQAMA1AuBkIArBZIBPgIID/j2IAQAMIlPEigAEUhOIADgDIgDADgAEShRIAFAAIgDADg");
            this.shape_4.setTransform(0.0095,-0.0078);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-30.4,-30.1,60.8,60.2);
        
        
        (lib.补间9 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#294B6E").ss(4,1,1).p("AjTi2IAFADIADADIBPBFIFQEj");
            this.shape.setTransform(-7.25,9.75);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f().s("#667D96").ss(4,1,1).p("ACLEZIA7hvQAWguAQgsQAehQAKhEQARhugUgyQgKgagegRQgNgHgjgCQgvgBg7ANQiJAfiaBnQgjAXgkAa");
            this.shape_1.setTransform(-0.0095,-0.0078);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#AACDE2").s().p("ABZCxIA7hAIB5iqQgMA2gtBjIgrBZgAkFh+IAAAAIAAAAIBQBFIAAACgAi1g5IhQhFIACgDIgFAAIgEgDIBNg0IA/BUIACACIgnAeIgQALgAkMiEIAEADIAAAAIADADIgBACgAkFh+gAkMiEg");
            this.shape_2.setTransform(-1.475,4.75);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#F4A699").s().p("Ai8g0IAogdIgCgCQBRg+BdgdQBhgeArATQAVANADAjQADAmgTA0QgXA/grBfIgnBTg");
            this.shape_3.setTransform(0.7705,3.0972);
        
            this.shape_4 = new cjs.Shape();
            this.shape_4.graphics.f("#FFFFFF").s().p("AjEgJIAQgMID/D2IBPAIIArhZQAuhkAMg1Ih6CqIg6BAIAnhTQArhfAXg/QATg0gDgmQgDgjgVgNQgrgThhAeQhdAdhRA+Ig/hUIhOAzQAkgaAjgXQCahnCJgfQA7gNAvABQAjACANAHQAeARAKAaQAUAygRBuQgKBEgeBQQgQAsgWAuIg7BvgABLDhgAkWhRIADADIAAAAgAkWhRIAFAAIgCADgAkWhRg");
            this.shape_4.setTransform(-0.0095,-0.0078);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-30.4,-30.1,60.8,60.2);
        
        
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
        
            // 图层_28
            this.shape = new cjs.Shape();
            this.shape.graphics.f("#667D96").s().p("AgOAaQgPAAAAgPIAAgVQAAgPAPAAIAdAAQAPAAAAAPIAAAVQAAAPgPAAg");
            this.shape.setTransform(52.5,-42.925);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#667D96").s().p("AgOAaQgPAAAAgPIAAgVQAAgPAPAAIAdAAQAPAAAAAPIAAAVQAAAPgPAAg");
            this.shape_1.setTransform(-16.95,-42.925);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},13).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},70).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},7).to({state:[{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).wait(31));
        
            // 眼睛
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#667D96").s().p("AgUBIQgJgIAAgMIAAhnQAAgMAJgJQAIgIAMAAQAMAAAJAIQAJAJAAAMIAABnQAAAMgJAIQgJAKgMgBQgMABgIgKg");
            this.shape_2.setTransform(52.35,-42.8);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#667D96").s().p("AgUBIQgJgIAAgMIAAhnQAAgMAJgJQAIgIAMAAQAMAAAJAIQAJAJAAAMIAABnQAAAMgJAIQgJAKgMgBQgMABgIgKg");
            this.shape_3.setTransform(-16.95,-42.8);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},12).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_3},{t:this.shape_2}]},69).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_3},{t:this.shape_2}]},6).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},3).to({state:[{t:this.shape_3},{t:this.shape_2}]},29).to({state:[]},1).wait(1));
        
            // 奶嘴
            this.instance = new lib.补间13("synched",0);
            this.instance.setTransform(17.7,3.35,1,1,0,0,0,0,-4);
        
            this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.1,scaleX:1.1741,scaleY:1.1741,x:17.8,y:3.3},40).to({regX:0,scaleX:1,scaleY:1,x:17.7,y:3.35},33).to({regX:0.1,scaleX:1.1619,scaleY:1.1619,x:17.8,y:3.3},33).to({regY:-3.9,scaleX:1.007,scaleY:1.007,x:17.7,y:3.35},22).to({_off:true},1).wait(1));
        
            // 脸边右
            this.shape_4 = new cjs.Shape();
            this.shape_4.graphics.f("#667D96").s().p("AiBJXQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQgBgEAEgBIBFgYIBagmIBQgqIApgaIA5gqIABgBIAAAAIADgCIAMgKQARgOANgNIAGgGIADgDIADgDIAdgfIABgBIAMgQQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAEABgBAEIgBABIgDAOIgBACIgBACIgBAEIgBABIgCAGIgGANIgyBFIgOAPIAAABIgBAAIguAqIgqAdIgDACIgDACIgTALIgDACIhcAnIhMASIgWACIgEAAQgKACgRAAIgFAAgAFPFLQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBABAAIABgBIAFgMIABgCIAAgCIAKgYIABgDIAJgZIAAgDIANglIAAgBQABgBAAAAQABAAAAAAQABAAAAAAQAAABABAAIABACIACACIABACIABABIABABIAGAOIAAACIACAFIAAADIAAACIABAGIAAABIAAACIAAAKIgBACIAAABIAAADIgFAOIgBACIgDAGIgHAKIgBABIgBABIgEAEIgCACIgCACIgGAEIgKAFIgHACIgCABIgCAAIgCABgAGaDYIACgTIACg8QgBgUgCgSIgIgqQgDgPgJgeQgJgZgIgSQgJgXgKgUIgjg9IgCgCIgIgOIg9hQIgIgIIgEgFQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBIACgBIACAAIABABIAIAEIAMAHIAWAQIAMAKIANAMIAcAeQARATALARIADAEIACADIABABIABABIAkBBIAMAeIAQA1IACAMIABADIAAADIABAGQAEAXAAAYIgEAzIgBACIAAACIgFAUQgDANgFANIgHAQIgDAFIAAABQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAAAQgEgBABgDgAhcnpIgSgLIgCgBQgDgBgFgEIgVgKIgDgBIgDgBIhtgiIgEgBIgtgKIgCAAIiFgTQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAIABAAIAdgIIALgBIAvgDIAgABIAEAAIAEAAIALACIACAAIAzAJIAFABIANADIAtAQIAjATIAEABIAMAJIABAAIACACIATAPIAGAGIACABIABACIAHAIIAIALIAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABIgCABIgCgBg");
            this.shape_4.setTransform(67.0375,-36.575);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(128).to({_off:true},1).wait(1));
        
            // 脸边左
            this.shape_5 = new cjs.Shape();
            this.shape_5.graphics.f("#667D96").s().p("AAyJSIgJgBIgvgLQgagIgRgHIgKgDIgBAAIAAgBIAAAAIgWgJIgBAAIgBgBIgBAAIgCgCIhRguIgTgNIgDgCIg6g0IgKgMIgHgIIgOgVIgEgDIgEgIIgDgDIgCgEIgJgOIgQgnIAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBABAAQACgDADADIA0A3IAsAnIABABIABABIACACIAbATIADACIACACIAEADIAeAUIABAAIABABIA7AkIB/A9IA6AWIARAGQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQABAFgEAAIgIAAgAlUFMIgKgCIgPgIIgJgGIgDgDIgBgBIgCAAIgBgCIgBgBIAAAAIgBgCIAAAAIgBgBIgCgDIgBgBIgDgFIAAgBIgBgBIgBgBIgCgGIgCgJIgDgOIABgNIADgKIABgCIAAgCIAGgMIABgBIABgBIACgCIADgEQABAAABAAQAAAAABAAQAAAAAAABQABAAAAABIAAABIADAMIAAACIAVA7IAAAAIAIASIABABIABACIACAEIADAKIAAABQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgBAAgAmkDaIgBgGIgHgpQgBgUAAgNIgBgTIAEg1IAAgDIABgIQAFgbAGgTQAEgSAKgbQAKgZAJgTIAYgpIAAAAIAAgBIABgCIAFgGIAFgKIANgRIAXggIAXgYIAFgFIACgCIAdgZQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABABABABQAAAAAAABQAAAAAAABQAAAAgBABIAAABIgsBIIgGAMIgFAIIgCAEIgTAkIgBAFIgBAAIgEAIIgBABIAAABIgmBcIgBABIAAACIgBABIgDAIIgBADIgEAQIgCACIgWBgIgLBXIAAABQAAABgBABQAAAAAAABQAAAAgBAAQAAABgBAAIgCAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBgABHniQgBgBAAAAQgBAAAAgBQAAAAAAgBQABAAAAgBIABgBIADgDIADgFIAMgLIAcgWIA7ghIACAAIApgRIBTgSIAkgBIAIgBIAPABIA5AHIAGACIAEABIABAAQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBABgBAAIiEAVIhLATIh1AsIgbANIgDADIgCAAIgBgBg");
            this.shape_5.setTransform(-29.5,-36.65);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(128).to({_off:true},1).wait(1));
        
            // 图层_13
            this.shape_6 = new cjs.Shape();
            this.shape_6.graphics.f("#AACDE2").s().p("AE8FMQAPgFAsgaQAvgbAQgHQBDgbBGgyQA7gqAngoQA5g7AUgdQAqg5AihbQAWg/gFhKQgEgngHgqIAVAqQAVAqAAgFQABgGgBgDQALAhAHAuQAOBJgMBPIgWgLQgEAXgJAbQgQA0gSAVIgbgGQgkA9hOBDQicCDjVAbQAEgJgDgGgAqrC9QhPhDgjg9IgbAGQgSgVgRg0QgHgbgFgXIgWALQgMhPAOhJQAIguAKgjQgBAEABAHQABAFAUgqIAVgqQgHAqgEAnQgFBKAWA/QAiBbAqA5QAUAdA5A7QAnAoA7AqQBGAyBDAbQAQAHAvAbQAsAaAPAFQgDAGAEAJQjVgbiciDg");
            this.shape_6.setTransform(18.85,-10.375);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(128).to({_off:true},1).wait(1));
        
            // 脸白底
            this.shape_7 = new cjs.Shape();
            this.shape_7.graphics.f("#FFFFFF").s().p("AAAJuIgEAAIAAAAQlmgOj7ieQh/hQg2hOIgbAHQgVgigLgpQgGgVgCgOIgkgDQgZh+BDiMQAOgeATgfQANgWAQgYQBciFB4hdQBahGCOg6QC2hKCegCIACgBQAMgGAIAEIAFADQCaADCyBJQCOA6BaBGQB4BdBcCFQCLDIgjCtIgkADQgCAOgGAVQgLApgVAiIgbgHQg2BOh/BQQj7CelmAOIAAAAIgFAAg");
            this.shape_7.setTransform(18.5245,-33.5395);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(128).to({_off:true},1).wait(1));
        
            // 右耳
            this.instance_1 = new lib.补间9("synched",0);
            this.instance_1.setTransform(48.6,-49.65,1,1,0,0,0,-28.4,28.1);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-28.2,rotation:-10.1952,x:50.15,y:-49.3},23).to({regX:-28.4,rotation:3.1962,x:48.65,y:-49.65},38).to({regX:-28.2,rotation:-9.4012,x:50.2,y:-49.75},38).to({regY:28,rotation:-0.313,x:48.65,y:-49.7},29).to({_off:true},1).wait(1));
        
            // 左耳
            this.instance_2 = new lib.补间11("synched",0);
            this.instance_2.setTransform(-12.65,-49.3,1,1,0,0,0,28.4,28.1);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:28.3,rotation:9.3923,x:-13.85,y:-49.35},23).to({regX:28.4,rotation:-2.9519,x:-12.65,y:-49.3},38).to({rotation:12.7083,x:-15.05,y:-46.65},38).to({regX:28.3,rotation:0.4232,x:-12.75,y:-49.2},29).to({_off:true},1).wait(1));
        
            // 头毛
            this.shape_8 = new cjs.Shape();
            this.shape_8.graphics.f().s("#667D96").ss(4,1,1).p("ACbhgQgTAUgcAWQg4AtgsAQQgsANgiAOQhBAbgTAkIDRgRIAQgIQATgLAQgRQAzg0gChYg");
            this.shape_8.setTransform(16.8538,-98.975);
        
            this.shape_9 = new cjs.Shape();
            this.shape_9.graphics.f("#FFFFFF").s().p("AhGAiQAigOAsgNQAsgQA4gtQAcgWATgUQACBYgzA0QgQARgTALIgQAIIjRARQATgkBBgbg");
            this.shape_9.setTransform(16.8538,-98.975);
        
            this.shape_10 = new cjs.Shape();
            this.shape_10.graphics.f().s("#667D96").ss(4,1,1).p("AiYBbQATgjBBgcQAQgHAQgFQASgGATgGQAagIARgKQAWgMAYgTQAKgHAKgIQATgQAPgPQANAYgHAeQgLArgcAfQgBABgBABQgPAPgTAMQgBAAgBABIgQAIg");
            this.shape_10.setTransform(16.6122,-98.45);
        
            this.shape_11 = new cjs.Shape();
            this.shape_11.graphics.f("#FFFFFF").s().p("AhEAdQAQgIAQgFIAlgMQAagIARgKQAWgMAYgSIAUgPQATgQAPgQQANAYgHAeQgLArgcAfIgCACQgPAQgTALIgCABIgQAIIjRARQATgkBBgbg");
            this.shape_11.setTransform(16.6122,-98.45);
        
            this.shape_12 = new cjs.Shape();
            this.shape_12.graphics.f().s("#667D96").ss(4,1,1).p("AiXBcQATgjBBgcQAPgHARgFQARgHATgFQAagJASgKQAVgMAZgSQAJgIAKgHQATgRAPgPQANAZgIAdQgKAsgcAfQgBAAgBACQgPAPgSAMQgBAAgBABIgQAHg");
            this.shape_12.setTransform(16.5622,-98.5);
        
            this.shape_13 = new cjs.Shape();
            this.shape_13.graphics.f("#FFFFFF").s().p("AhDAdQAPgHARgFIAkgMQAagJASgKQAVgMAZgTIATgPQATgQAPgPQANAZgIAeQgKAqgcAfIgCACQgPAQgSALIgCACIgQAHIjRARQATgkBBgbg");
            this.shape_13.setTransform(16.5622,-98.5);
        
            this.shape_14 = new cjs.Shape();
            this.shape_14.graphics.f().s("#667D96").ss(4,1,1).p("AiXBdQATgkBBgbQAPgHARgGQASgHATgFQAagIARgKQAWgNAYgSQAJgIAKgIQASgQAPgQQANAagHAeQgKAsgbAeQgBABgBABQgPAPgTAMQgBABgBAAIgQAHg");
            this.shape_14.setTransform(16.5225,-98.55);
        
            this.shape_15 = new cjs.Shape();
            this.shape_15.graphics.f("#FFFFFF").s().p("AhDAeQAPgIARgFQASgHATgFQAagIARgKQAWgMAYgUIATgPQASgQAPgQQANAagHAeQgKArgbAfIgCACQgPAQgTALIgCABIgQAIIjRARQATgkBBgbg");
            this.shape_15.setTransform(16.5225,-98.55);
        
            this.shape_16 = new cjs.Shape();
            this.shape_16.graphics.f().s("#667D96").ss(4,1,1).p("AiWBdQATgjBBgcQAPgHARgFQARgHATgGQAagIARgKQAWgNAYgTQAJgHAKgIQASgRAPgPQANAagHAeQgJAsgcAeQgBABgBABQgPAQgSAMQgBAAgBAAIgRAIg");
            this.shape_16.setTransform(16.4833,-98.6);
        
            this.shape_17 = new cjs.Shape();
            this.shape_17.graphics.f("#FFFFFF").s().p("AhCAeIAggMQARgHATgFQAagIARgLQAWgNAYgSIATgQQASgRAPgPQANAbgHAeQgJArgcAeIgCACQgPAQgSALIgCACIgRAHIjQARQATgkBBgbg");
            this.shape_17.setTransform(16.4833,-98.6);
        
            this.shape_18 = new cjs.Shape();
            this.shape_18.graphics.f().s("#667D96").ss(4,1,1).p("AiWBeQATgkBBgbQAPgHARgGQASgGATgGQAagIARgKQAVgNAYgTQAJgIAKgIQASgRAOgPQANAbgGAeQgJAsgcAfQgBABgBABQgPAPgSALQgBABgBAAIgQAHg");
            this.shape_18.setTransform(16.4333,-98.65);
        
            this.shape_19 = new cjs.Shape();
            this.shape_19.graphics.f("#FFFFFF").s().p("AhCAfIAggNQASgHATgFQAagIARgKQAVgNAYgUIATgPQASgRAOgQQANAbgGAeQgJAtgcAfIgCABQgPAQgSALIgCABIgQAHIjRASQATgkBBgbg");
            this.shape_19.setTransform(16.4333,-98.65);
        
            this.shape_20 = new cjs.Shape();
            this.shape_20.graphics.f().s("#667D96").ss(4,1,1).p("AiVBeQATgjBBgcQAPgGARgHQARgGATgFQAagJARgKQAVgNAYgTQAJgHAKgJQASgQAOgRQANAcgGAeQgJAtgbAeQgBABgBABQgPAQgTALQgBAAgBABIgQAHg");
            this.shape_20.setTransform(16.3947,-98.725);
        
            this.shape_21 = new cjs.Shape();
            this.shape_21.graphics.f("#FFFFFF").s().p("AhBAfIAggNIAkgLQAagJARgKQAVgNAYgTIATgQQASgQAOgRQANAcgGAeQgJAtgbAeIgCACQgPAQgTALIgCABIgQAHIjQARQATgjBBgcg");
            this.shape_21.setTransform(16.3947,-98.725);
        
            this.shape_22 = new cjs.Shape();
            this.shape_22.graphics.f().s("#667D96").ss(4,1,1).p("AiVBfQATgkBBgbQAPgHARgGQASgGATgGQAagJARgKQAVgMAYgUQAJgHAJgJQARgRAOgRQANAdgGAfQgIAtgbAeQgBABgBABQgPAPgSALQgBABgBAAIgRAHg");
            this.shape_22.setTransform(16.3447,-98.775);
        
            this.shape_23 = new cjs.Shape();
            this.shape_23.graphics.f("#FFFFFF").s().p("AhBAgIAggNIAlgMQAagJARgKQAVgMAYgUIASgQQARgRAOgRQANAdgGAfQgIAtgbAeIgCACQgPAPgSALIgCABIgRAHIjQASQATgkBBgbg");
            this.shape_23.setTransform(16.3447,-98.775);
        
            this.shape_24 = new cjs.Shape();
            this.shape_24.graphics.f().s("#667D96").ss(4,1,1).p("AiVBfQATgjBBgcQAPgGARgHQASgGATgFQAagJAQgKQAVgNAYgUQAJgHAJgJQASgRANgRQANAdgFAfQgIAugbAdQgBABgBABQgPAQgSALQgBAAgBABIgRAGg");
            this.shape_24.setTransform(16.3068,-98.825);
        
            this.shape_25 = new cjs.Shape();
            this.shape_25.graphics.f("#FFFFFF").s().p("AhBAgIAggNIAlgLQAagJAQgKQAVgNAYgUIASgQQASgRANgRQANAdgFAfQgIAugbAdIgCACQgPAQgSALIgCABIgRAGIjQASQATgjBBgcg");
            this.shape_25.setTransform(16.3068,-98.825);
        
            this.shape_26 = new cjs.Shape();
            this.shape_26.graphics.f().s("#667D96").ss(4,1,1).p("AiUBgQATgkBAgbQAPgHASgGQASgHASgFQAagJARgKQAVgNAXgUQAJgHAJgJQARgRAOgSQANAfgFAeQgIAugaAeQgBABgBABQgPAPgTAMQgBAAgBAAIgQAHg");
            this.shape_26.setTransform(16.2694,-98.875);
        
            this.shape_27 = new cjs.Shape();
            this.shape_27.graphics.f("#FFFFFF").s().p("AhBAhIAhgNIAkgMQAagJARgKQAVgNAXgUIASgQQARgRAOgSQANAfgFAeQgIAugaAeIgCACQgPAPgTAMIgCAAIgQAHIjQASQATgkBAgbg");
            this.shape_27.setTransform(16.2694,-98.875);
        
            this.shape_28 = new cjs.Shape();
            this.shape_28.graphics.f().s("#667D96").ss(4,1,1).p("AiUBgQATgjBBgbQAPgHARgHQASgGATgGQAagJAQgKQAVgNAYgUQAIgHAJgJQARgRANgSQANAfgFAfQgGAugbAdQgBABgBABQgPAQgSALQgBAAgBABIgRAGg");
            this.shape_28.setTransform(16.2194,-98.925);
        
            this.shape_29 = new cjs.Shape();
            this.shape_29.graphics.f("#FFFFFF").s().p("AhAAiIAggOIAlgMQAagJAQgKQAVgNAYgUIARgQQARgRANgSQANAfgFAfQgGAugbAdIgCACQgPAQgSALIgCABIgRAGIjQASQATgjBBgbg");
            this.shape_29.setTransform(16.2194,-98.925);
        
            this.shape_30 = new cjs.Shape();
            this.shape_30.graphics.f().s("#667D96").ss(4,1,1).p("AiTBhQATgkBAgbQAPgGASgHQASgHASgFQAagJARgKQAUgNAYgVQAJgHAIgJQARgRANgTQANAggFAfQgGAvgaAdQgBABgBABQgPAPgTAMQgBAAgBAAIgRAGg");
            this.shape_30.setTransform(16.1829,-98.975);
        
            this.shape_31 = new cjs.Shape();
            this.shape_31.graphics.f("#FFFFFF").s().p("AhAAiIAhgNIAkgMQAagJARgKQAUgNAYgVIARgQQARgRANgTQANAggFAfQgGAvgaAdIgCACQgPAPgTAMIgCAAIgRAGIjPATQATgkBAgbg");
            this.shape_31.setTransform(16.1829,-98.975);
        
            this.shape_32 = new cjs.Shape();
            this.shape_32.graphics.f().s("#667D96").ss(4,1,1).p("AiTBhQATgjBBgbQAOgHASgHQASgGATgGQAagJAQgKQAUgNAYgVQAJgHAIgKQARgRAMgSQANAggEAfQgGAwgaAcQgBABgBABQgPAQgSALQgBAAgBABIgRAGg");
            this.shape_32.setTransform(16.1471,-99.025);
        
            this.shape_33 = new cjs.Shape();
            this.shape_33.graphics.f("#FFFFFF").s().p("Ag/AjIAggOIAlgMQAagJAQgKQAUgNAYgVQAJgHAIgKQARgRAMgSQANAggEAfQgGAwgaAcIgCACQgPAQgSALIgCABIgRAGIjQASQATgjBBgbg");
            this.shape_33.setTransform(16.1471,-99.025);
        
            this.shape_34 = new cjs.Shape();
            this.shape_34.graphics.f().s("#667D96").ss(4,1,1).p("AiSBiQATgkBAgbQAPgGASgHQASgHASgFQAagKAQgKQAVgNAXgVQAJgHAIgKQAQgRANgTQANAigEAfQgGAwgaAcQgBABgBABQgPAPgSAMQgBAAgBAAIgRAGg");
            this.shape_34.setTransform(16.0971,-99.075);
        
            this.shape_35 = new cjs.Shape();
            this.shape_35.graphics.f("#FFFFFF").s().p("Ag/AjIAhgNIAkgMQAagKAQgKQAVgNAXgVIARgRQAQgRANgTQANAigEAfQgGAwgaAcIgCACQgPAPgSAMIgCAAIgRAGIjPATQATgkBAgbg");
            this.shape_35.setTransform(16.0971,-99.075);
        
            this.shape_36 = new cjs.Shape();
            this.shape_36.graphics.f().s("#667D96").ss(4,1,1).p("AiSBiQATgjBAgbQAPgHASgHQASgHASgFQAagKAQgKQAUgMAYgWQAIgHAJgKQAQgRAMgTQANAigEAfQgFAwgaAdQgBABgBABQgPAPgSALQgBAAgBABIgRAFg");
            this.shape_36.setTransform(16.0621,-99.125);
        
            this.shape_37 = new cjs.Shape();
            this.shape_37.graphics.f("#FFFFFF").s().p("Ag/AkIAhgOQASgHASgFQAagKAQgKQAUgMAYgWIARgRQAQgRAMgTQANAigEAfQgFAwgaAdIgCACQgPAPgSALIgCABIgRAFIjPATQATgjBAgbg");
            this.shape_37.setTransform(16.0621,-99.125);
        
            this.shape_38 = new cjs.Shape();
            this.shape_38.graphics.f().s("#667D96").ss(4,1,1).p("AiSBjQATgkBBgbQAOgGASgHQASgHATgGQAagKAQgJQAUgNAXgWQAJgHAIgKQAPgRAMgUQANAjgDAfQgFAxgZAcQgBABgBABQgPAPgTAMQgBAAgBAAIgRAGg");
            this.shape_38.setTransform(16.0281,-99.175);
        
            this.shape_39 = new cjs.Shape();
            this.shape_39.graphics.f("#FFFFFF").s().p("Ag+AkIAggNQASgHATgGQAagKAQgJQAUgNAXgWQAJgHAIgKQAPgRAMgUQANAjgDAfQgFAxgZAcIgCACQgPAPgTAMIgCAAIgRAGIjPATQATgkBBgbg");
            this.shape_39.setTransform(16.0281,-99.175);
        
            this.shape_40 = new cjs.Shape();
            this.shape_40.graphics.f().s("#667D96").ss(4,1,1).p("AiRBjQATgjBAgbQAOgHATgHQASgHASgFQAagLAQgJQAUgNAXgWQAJgHAIgKQAPgRAMgUQANAjgDAgQgEAxgaAcQgBABgBABQgPAPgSALQgBAAgBABIgRAFg");
            this.shape_40.setTransform(15.9781,-99.225);
        
            this.shape_41 = new cjs.Shape();
            this.shape_41.graphics.f("#FFFFFF").s().p("Ag+AlIAhgOQASgHASgFQAagLAQgJQAUgNAXgWQAJgHAIgKQAPgRAMgUQANAjgDAgQgEAxgaAcIgCACQgPAPgSALIgCABIgRAFIjPATQATgjBAgbg");
            this.shape_41.setTransform(15.9781,-99.225);
        
            this.shape_42 = new cjs.Shape();
            this.shape_42.graphics.f().s("#667D96").ss(4,1,1).p("AiRBkQATgjBAgbQAOgHATgIQASgGASgGQAbgKAPgKQAUgNAXgVQAIgJAJgJQAOgSAMgUQANAkgDAgQgEAygZAbQgBACgBAAQgPAQgSALQgBAAgBAAIgRAFg");
            this.shape_42.setTransform(15.9531,-99.3);
        
            this.shape_43 = new cjs.Shape();
            this.shape_43.graphics.f("#FFFFFF").s().p("Ag+AlIAhgNIAkgNQAbgKAPgKQAUgNAXgVIARgSQAOgSAMgUQANAkgDAgQgEAygZAbIgCADQgPAPgSALIgCABIgRAEIjPAUQATgjBAgcg");
            this.shape_43.setTransform(15.9531,-99.3);
        
            this.shape_44 = new cjs.Shape();
            this.shape_44.graphics.f().s("#667D96").ss(4,1,1).p("AiRBkQATgjBBgbQAOgGASgIQASgGATgGQAagLAPgJQAUgNAXgWQAIgJAJgJQAOgSAMgVQANAmgDAfQgDAzgZAbQgBABgBABQgPAPgTALQgBABgBAAIgRAEg");
            this.shape_44.setTransform(15.9031,-99.35);
        
            this.shape_45 = new cjs.Shape();
            this.shape_45.graphics.f("#FFFFFF").s().p("Ag9AmIAggOIAlgMQAagLAPgJQAUgNAXgWIARgSQAOgRAMgWQANAmgDAfQgDAzgZAbIgCACQgPAPgTALIgCABIgRAFIjPAUQATgkBBgbg");
            this.shape_45.setTransform(15.9031,-99.35);
        
            this.shape_46 = new cjs.Shape();
            this.shape_46.graphics.f().s("#667D96").ss(4,1,1).p("AiQBlQATgjBAgbQAOgGATgIQASgHASgFQAbgLAPgJQATgOAXgWQAJgJAIgJQAOgRALgWQANAmgCAgQgDAzgZAbQgBABgBABQgPAPgSALQgBABgBAAIgSAEg");
            this.shape_46.setTransform(15.8702,-99.4);
        
            this.shape_47 = new cjs.Shape();
            this.shape_47.graphics.f("#FFFFFF").s().p("Ag9AmIAhgNIAkgNQAbgKAPgKQATgNAXgWIARgSQAOgSALgVQANAmgCAgQgDAzgZAaIgCADQgPAPgSALIgCABIgSAEIjOAUQATgjBAgcg");
            this.shape_47.setTransform(15.8702,-99.4);
        
            this.shape_48 = new cjs.Shape();
            this.shape_48.graphics.f().s("#667D96").ss(4,1,1).p("AiQBlQATgjBBgbQANgGATgIQASgHATgGQAagKAPgKQATgNAXgWQAJgJAIgJQAOgSALgWQANAngCAgQgDAzgYAbQgBABgBABQgPAPgTALQgBABgBAAIgRAEg");
            this.shape_48.setTransform(15.8383,-99.45);
        
            this.shape_49 = new cjs.Shape();
            this.shape_49.graphics.f("#FFFFFF").s().p("Ag8AnIAggOQASgHATgFQAagLAPgJQATgNAXgXIARgSQAOgSALgWQANAngCAgQgDAzgYAbIgCACQgPAPgTALIgCABIgRAFIjPAUQATgkBBgbg");
            this.shape_49.setTransform(15.8383,-99.45);
        
            this.shape_50 = new cjs.Shape();
            this.shape_50.graphics.f().s("#667D96").ss(4,1,1).p("AiPBmQATgjBAgbQAOgHATgIQASgHASgFQAbgLAPgJQATgOAXgWQAIgJAIgJQANgSALgWQANAngCAhQgCA0gYAaQgBABgBABQgPAPgTALQgBABgBAAIgRAEg");
            this.shape_50.setTransform(15.7883,-99.5);
        
            this.shape_51 = new cjs.Shape();
            this.shape_51.graphics.f("#FFFFFF").s().p("Ag8AnIAhgNQASgIASgFQAbgLAPgJQATgOAXgWIAQgSQANgSALgWQANAngCAhQgCAzgYAbIgCACQgPAPgTALIgCABIgRADIjOAVQATgjBAgcg");
            this.shape_51.setTransform(15.7883,-99.5);
        
            this.shape_52 = new cjs.Shape();
            this.shape_52.graphics.f().s("#667D96").ss(4,1,1).p("AiPBnQATgjBAgcQAOgGATgIQASgHASgGQAbgKAOgKQATgNAXgXQAIgJAIgKQAOgRAKgXQANAogBAhQgCA0gYAbQgBAAgBABQgPAPgTAMQgBAAgBAAIgRAEg");
            this.shape_52.setTransform(15.7578,-99.55);
        
            this.shape_53 = new cjs.Shape();
            this.shape_53.graphics.f("#FFFFFF").s().p("Ag8AoIAhgOQASgHASgFQAbgLAOgKQATgNAXgXIAQgTQAOgRAKgXQANAogBAhQgCA0gYAbIgCABQgPAPgTALIgCABIgRAEIjOAVQATgkBAgbg");
            this.shape_53.setTransform(15.7578,-99.55);
        
            this.shape_54 = new cjs.Shape();
            this.shape_54.graphics.f().s("#667D96").ss(4,1,1).p("AiPBnQATgjBBgcQANgGATgIQASgHATgFQAagLAPgKQATgNAWgXQAJgJAHgKQANgSALgWQANApgBAgQgCA1gYAaQgBABgBABQgPAPgSALQgBAAgBAAIgSAFg");
            this.shape_54.setTransform(15.7286,-99.6);
        
            this.shape_55 = new cjs.Shape();
            this.shape_55.graphics.f("#FFFFFF").s().p("Ag7AoIAggNQASgIATgFQAagLAPgKQATgNAWgXQAJgIAHgKQANgSALgXQANApgBAgQgCA1gYAaIgCACQgPAPgSALIgCABIgSADIjOAVQATgjBBgcg");
            this.shape_55.setTransform(15.7286,-99.6);
        
            this.shape_56 = new cjs.Shape();
            this.shape_56.graphics.f().s("#667D96").ss(4,1,1).p("AiOBoQATgjBAgcQANgFAUgJQASgHASgFQAbgMAOgJQATgNAXgYQAIgJAHgKQANgRAKgXQANApgBAhQAAA1gYAaQgBABgBABQgPAPgTALQgBAAgBAAIgRAEg");
            this.shape_56.setTransform(15.6786,-99.65);
        
            this.shape_57 = new cjs.Shape();
            this.shape_57.graphics.f("#FFFFFF").s().p("Ag7ApIAhgOQASgHASgFQAbgMAOgJQATgNAXgYIAPgTQANgSAKgWQANApgBAgQAAA2gYAaIgCABQgPAPgTALIgCABIgRADIjOAWQATgkBAgbg");
            this.shape_57.setTransform(15.6786,-99.65);
        
            this.shape_58 = new cjs.Shape();
            this.shape_58.graphics.f().s("#667D96").ss(4,1,1).p("AiOBoQATgjBAgbQANgGAUgJQASgHASgGQAbgLAOgJQATgNAWgYQAIgJAIgKQAMgSAKgXQANAqAAAhQgBA1gXAaQgBABgBABQgPAPgTALQgBAAgBAAIgRAEg");
            this.shape_58.setTransform(15.6509,-99.7);
        
            this.shape_59 = new cjs.Shape();
            this.shape_59.graphics.f("#FFFFFF").s().p("Ag7AqIAhgOQASgIASgGQAbgKAOgKQATgNAWgYIAQgSQAMgTAKgXQANArAAAgQgBA1gXAaIgCACQgPAPgTAMIgCAAIgRADIjOAVQATgjBAgbg");
            this.shape_59.setTransform(15.6509,-99.7);
        
            this.shape_60 = new cjs.Shape();
            this.shape_60.graphics.f().s("#667D96").ss(4,1,1).p("AiOBpQATgjBAgbQAOgGATgJQATgIASgFQAagLAOgKQATgNAWgYQAIgJAIgKQAMgSAKgYQANArAAAhQAAA3gYAZQgBABgBAAQgPAPgSAMQgBAAgBAAIgSADg");
            this.shape_60.setTransform(15.625,-99.75);
        
            this.shape_61 = new cjs.Shape();
            this.shape_61.graphics.f("#FFFFFF").s().p("Ag7ArIAhgPQATgHASgGQAagLAOgKQATgNAWgYQAIgJAIgKQAMgSAKgXQANArAAAgQAAA3gYAZIgCABQgPAPgSAMIgCAAIgSADIjOAWQATgkBAgag");
            this.shape_61.setTransform(15.625,-99.75);
        
            this.shape_62 = new cjs.Shape();
            this.shape_62.graphics.f().s("#667D96").ss(4,1,1).p("AiNBpQATgjBAgbQANgGAUgJQASgHASgGQAbgLAOgKQASgNAXgYQAIgJAHgKQAMgTAJgXQANArAAAhQABA3gXAZQgBABgBABQgPAPgTALQgBAAgBAAg");
            this.shape_62.setTransform(15.5755,-99.8);
        
            this.shape_63 = new cjs.Shape();
            this.shape_63.graphics.f("#FFFFFF").s().p("Ag6ArIAhgOQASgIASgGQAbgLAOgJQASgNAXgZQAIgIAHgLQAMgSAJgYQANAsAAAgQABA3gXAZIgCACQgPAPgTAMIgCAAIjfAYQATgjBAgbg");
            this.shape_63.setTransform(15.5755,-99.8);
        
            this.shape_64 = new cjs.Shape();
            this.shape_64.graphics.f().s("#667D96").ss(4,1,1).p("AiNBqQATgjBAgbQANgGAUgJQASgHASgGQAbgLAOgKQASgNAWgYQAIgJAHgLQAMgSAJgZQANAtABAhQABA3gXAZQgBABgBABQgPAPgTALQgBAAgBAAg");
            this.shape_64.setTransform(15.5521,-99.875);
        
            this.shape_65 = new cjs.Shape();
            this.shape_65.graphics.f("#FFFFFF").s().p("Ag6AsIAhgPQASgHASgGQAbgLAOgKQASgNAWgYQAIgJAHgLQAMgSAJgZQANAtABAhQABA3gXAZIgCACQgPAPgTALIgCAAIjfAZQATgjBAgbg");
            this.shape_65.setTransform(15.5521,-99.875);
        
            this.shape_66 = new cjs.Shape();
            this.shape_66.graphics.f().s("#667D96").ss(4,1,1).p("AiNBqQATgjBAgbQANgGAUgJQATgHASgFQAagMAOgJQASgOAXgYQAHgJAHgLQAMgSAJgZQANAtAAAhQACA4gXAZQgBABgBABQgPAPgTALQgBAAgBAAg");
            this.shape_66.setTransform(15.5046,-99.925);
        
            this.shape_67 = new cjs.Shape();
            this.shape_67.graphics.f("#FFFFFF").s().p("Ag6AsIAhgPQATgHASgFQAagMAOgJQASgOAXgYIAOgUQAMgSAJgZQANAtAAAhQACA4gXAZIgCACQgPAPgTALIgCAAIjfAYQATgjBAgbg");
            this.shape_67.setTransform(15.5046,-99.925);
        
            this.shape_68 = new cjs.Shape();
            this.shape_68.graphics.f().s("#667D96").ss(4,1,1).p("AiMBrQATgjBAgbQANgGAUgJQASgHASgGQAbgMAOgJQARgOAXgYQAHgJAHgLQAMgTAIgZQANAvABAhQACA4gXAYQgBABgBABQgPAPgSALQgBAAgBAAg");
            this.shape_68.setTransform(15.483,-99.975);
        
            this.shape_69 = new cjs.Shape();
            this.shape_69.graphics.f("#FFFFFF").s().p("Ag5AtIAhgPQASgHASgGQAbgMAOgJQARgOAXgYIAOgUQAMgTAIgZQANAvABAhQACA4gXAYIgCACQgPAPgSALIgCAAIjfAZQATgjBAgbg");
            this.shape_69.setTransform(15.483,-99.975);
        
            this.shape_70 = new cjs.Shape();
            this.shape_70.graphics.f().s("#667D96").ss(4,1,1).p("AiMBrQATgjBAgbQAMgFAVgKQASgHASgGQAbgLANgKQASgNAWgZQAIgJAHgLQALgTAIgZQANAvACAhQACA5gXAYQgBABgBABQgPAPgSALQgBAAgBAAg");
            this.shape_70.setTransform(15.4582,-100.025);
        
            this.shape_71 = new cjs.Shape();
            this.shape_71.graphics.f("#FFFFFF").s().p("Ag5AtIAhgPQASgHASgGQAbgLANgKQASgNAWgZQAIgJAHgLQALgTAIgZQANAvACAhQACA5gXAYIgCACQgPAPgSALIgCAAIjfAYQATgjBAgbg");
            this.shape_71.setTransform(15.4582,-100.025);
        
            this.shape_72 = new cjs.Shape();
            this.shape_72.graphics.f().s("#667D96").ss(4,1,1).p("AiMBsQATgjBAgbQANgGAUgJQATgIASgFQAagMAOgKQARgNAXgZQAHgJAHgLQALgTAIgaQANAwABAhQADA5gWAYQgBABgBABQgPAPgTALQgBAAgBAAg");
            this.shape_72.setTransform(15.4176,-100.075);
        
            this.shape_73 = new cjs.Shape();
            this.shape_73.graphics.f("#FFFFFF").s().p("Ag5AuIAhgPQATgIASgFQAagMAOgKQARgNAXgZQAHgJAHgLQALgTAIgaQANAwABAhQADA5gWAYIgCACQgPAPgTALIgCAAIjfAZQATgjBAgbg");
            this.shape_73.setTransform(15.4176,-100.075);
        
            this.shape_74 = new cjs.Shape();
            this.shape_74.graphics.f().s("#667D96").ss(4,1,1).p("AiLBsQATgjBBgcQALgEAVgKQASgHASgGQAWgIASgNQASgOAWgZQAUgYAMgpQANAnACArQADA5gWAYQgQAQgTAMg");
            this.shape_74.setTransform(15.393,-100.125);
        
            this.shape_75 = new cjs.Shape();
            this.shape_75.graphics.f("#FFFFFF").s().p("Ag3AtIAggOQASgHASgGQAWgIASgNQASgOAWgZQAUgYAMgpQANAnACArQADA5gWAYQgQAQgTAMIjhAYQATgjBBgcg");
            this.shape_75.setTransform(15.393,-100.125);
        
            this.shape_76 = new cjs.Shape();
            this.shape_76.graphics.f().s("#667D96").ss(4,1,1).p("AiMBsQASgjA8gZQASgIAUgKQATgHASgFQAXgKARgMQASgOAWgZQAXggAKggQAEANADAMQAHAbABAdQAAAKAAAJQgCAqgSAUQgTASgRAKQgCAAgDABg");
            this.shape_76.setTransform(15.4375,-100.05);
        
            this.shape_77 = new cjs.Shape();
            this.shape_77.graphics.f("#FFFFFF").s().p("Ag+AvIAmgRQATgHASgFQAXgKARgMQASgNAWgaQAXggAKgfIAHAZQAHAaABAdIAAATQgCAqgSAUQgTASgRAKIgFABIjcAYQASgjA8gag");
            this.shape_77.setTransform(15.4375,-100.05);
        
            this.shape_78 = new cjs.Shape();
            this.shape_78.graphics.f().s("#667D96").ss(4,1,1).p("AiMBrQASgiA8gaQASgIAUgJQASgIASgFQAYgJAQgMQATgOAWgYQAYghAKgfQAEAMADAMQAHAbAAAcQABAKgBAJQgCAqgTAUQgSASgRAKQgCABgDAAg");
            this.shape_78.setTransform(15.4833,-99.975);
        
            this.shape_79 = new cjs.Shape();
            this.shape_79.graphics.f("#FFFFFF").s().p("Ag+AvIAmgRQASgIASgFQAYgJAQgMQATgOAWgYQAYghAKgfQAEAMADAMQAHAbAAAcQABAKgBAJQgCAqgTAUQgSASgRAKIgFABIjcAYQASgiA8gag");
            this.shape_79.setTransform(15.4833,-99.975);
        
            this.shape_80 = new cjs.Shape();
            this.shape_80.graphics.f().s("#667D96").ss(4,1,1).p("AiNBqQASgiA8gaQASgIAUgJQATgHASgGQAXgJARgMQATgNAWgYQAYghALgeQAEALAEALQAGAbAAAdQAAAKgBAJQgCApgTAUQgSASgRALQgDAAgCABg");
            this.shape_80.setTransform(15.5333,-99.925);
        
            this.shape_81 = new cjs.Shape();
            this.shape_81.graphics.f("#FFFFFF").s().p("Ag/AuIAmgRQATgHASgGQAXgJARgMQATgNAWgYQAYghALgeIAIAWQAGAbAAAdQAAAKgBAJQgCApgTAUQgSASgRALIgFABIjdAXQASgiA8gag");
            this.shape_81.setTransform(15.5333,-99.925);
        
            this.shape_82 = new cjs.Shape();
            this.shape_82.graphics.f().s("#667D96").ss(4,1,1).p("AiNBpQASgiA8gaQASgHAUgKQASgHASgGQAYgJARgMQATgNAVgYQAaggAKgeQAFALAEAKQAGAbgBAdQABAKgCAJQgCAogTAWQgTARgRAKQgCABgDABg");
            this.shape_82.setTransform(15.5813,-99.85);
        
            this.shape_83 = new cjs.Shape();
            this.shape_83.graphics.f("#FFFFFF").s().p("Ag/AtIAmgRQASgHASgFQAYgKARgMQATgNAVgYQAagfAKgfIAJAWQAGAbgBAdQABAJgCAJQgCAogTAWQgTARgRAKIgFACIjcAYQASgjA8gag");
            this.shape_83.setTransform(15.5813,-99.85);
        
            this.shape_84 = new cjs.Shape();
            this.shape_84.graphics.f().s("#667D96").ss(4,1,1).p("AiOBpQASgjA8gaQASgHAUgJQATgIARgFQAYgJARgMQATgNAWgYQAagfALgeQAFAKADAKQAGAbAAAdQgBAKAAAJQgDAngUAWQgTASgQAKQgDABgCAAg");
            this.shape_84.setTransform(15.65,-99.775);
        
            this.shape_85 = new cjs.Shape();
            this.shape_85.graphics.f("#FFFFFF").s().p("AhAAsIAmgQQASgIATgFQAXgJARgMQATgNAWgYQAagfALgeQAFAKAEAKQAFAbAAAdIgCATQgCAngUAWQgSASgRAKIgFABIjdAYQASgjA8gag");
            this.shape_85.setTransform(15.65,-99.775);
        
            this.shape_86 = new cjs.Shape();
            this.shape_86.graphics.f().s("#667D96").ss(4,1,1).p("AiPBoQATgjA8gaQASgIATgIQATgIASgFQAXgJARgMQAUgNAWgXQAagfALgdQAGAJADAJQAGAbgBAdQAAAKgBAJQgEAngUAWQgSASgRAKQgCAAgDABg");
            this.shape_86.setTransform(15.7021,-99.7);
        
            this.shape_87 = new cjs.Shape();
            this.shape_87.graphics.f("#FFFFFF").s().p("AhAAsIAlgRQATgHASgGQAXgJARgLQAUgNAWgXQAaggALgdQAGAJADAJQAGAcgBAcIgBATQgEAngUAWQgSASgRAKIgFACIjdAXQATgjA8gZg");
            this.shape_87.setTransform(15.7021,-99.7);
        
            this.shape_88 = new cjs.Shape();
            this.shape_88.graphics.f().s("#667D96").ss(4,1,1).p("AiPBnQASgiA8gaQATgIATgJQASgHASgGQAYgJARgLQAUgNAWgXQAbgfALgcQAGAIAEAJQAFAbgBAcQgBAKgBAJQgEAngUAWQgSASgRAKQgDABgCABg");
            this.shape_88.setTransform(15.7583,-99.625);
        
            this.shape_89 = new cjs.Shape();
            this.shape_89.graphics.f("#FFFFFF").s().p("AhBArIAmgRQASgHASgGQAYgJARgLQAUgNAWgXQAbgfALgcQAGAIAEAJQAFAbgBAcIgCATQgEAngUAWQgSASgRAKIgFACIjdAXQASgiA8gag");
            this.shape_89.setTransform(15.7583,-99.625);
        
            this.shape_90 = new cjs.Shape();
            this.shape_90.graphics.f().s("#667D96").ss(4,1,1).p("AiQBnQATgjA8gaQASgIATgJQATgHASgFQAXgKASgLQAUgNAWgWQAbgfAMgcQAGAIAEAIQAFAbgCAdQAAAJgCAKQgEAmgUAWQgTATgRAKQgCAAgDABg");
            this.shape_90.setTransform(15.8173,-99.55);
        
            this.shape_91 = new cjs.Shape();
            this.shape_91.graphics.f("#FFFFFF").s().p("AhBAqIAlgRQATgHASgFQAXgKASgLQAUgNAWgWQAbgfAMgcQAGAIAEAIQAFAbgCAdIgCATQgEAmgUAWQgTATgRAJIgFACIjdAYQATgkA8gZg");
            this.shape_91.setTransform(15.8173,-99.55);
        
            this.shape_92 = new cjs.Shape();
            this.shape_92.graphics.f().s("#667D96").ss(4,1,1).p("AiQBmQASgjA8gaQATgIATgIQATgHARgFQAYgKARgLQAVgNAWgWQAcgfAMgbQAGAHAEAHQAFAcgCAcQgBAKgCAJQgEAmgVAWQgSATgRAKQgDABgCAAg");
            this.shape_92.setTransform(15.8786,-99.5);
        
            this.shape_93 = new cjs.Shape();
            this.shape_93.graphics.f("#FFFFFF").s().p("AhCApIAmgQQATgHARgGQAYgJARgLQAVgNAWgWQAcgfAMgbQAGAHAEAHQAFAbgCAdQgBAKgCAKQgEAlgVAWQgSATgRAKIgFABIjdAYQASgjA8gag");
            this.shape_93.setTransform(15.8786,-99.5);
        
            this.shape_94 = new cjs.Shape();
            this.shape_94.graphics.f().s("#667D96").ss(4,1,1).p("AiRBlQATgjA8gaQATgIASgIQATgHARgFQAZgKARgKQAVgNAVgWQAdgeAMgbQAHAGAEAHQAFAbgDAdQAAAKgCAJQgFAlgVAXQgTASgRAKQgCABgCAAg");
            this.shape_94.setTransform(15.9417,-99.425);
        
            this.shape_95 = new cjs.Shape();
            this.shape_95.graphics.f("#FFFFFF").s().p("AhCAoIAlgQQATgHARgFQAZgKARgKQAVgNAVgWQAdgeAMgbQAHAGAEAHQAFAbgDAdQAAAKgCAJQgFAlgVAXQgTASgRAKIgEABIjeAYQATgjA8gag");
            this.shape_95.setTransform(15.9417,-99.425);
        
            this.shape_96 = new cjs.Shape();
            this.shape_96.graphics.f().s("#667D96").ss(4,1,1).p("AiSBkQATgjA8gaQATgIASgIQATgHARgFQAZgKARgKQAVgNAWgVQAdgeANgbQAGAGAFAGQAEAbgDAdQAAAKgCAJQgGAkgVAXQgSATgRAKQgDABgCAAg");
            this.shape_96.setTransform(16.01,-99.35);
        
            this.shape_97 = new cjs.Shape();
            this.shape_97.graphics.f("#FFFFFF").s().p("AhDAnIAlgQQATgHARgFQAZgJARgLQAVgNAWgVQAdgeANgbQAGAGAFAGQAEAbgDAdQAAAKgCAJQgGAkgVAYQgSASgRAKIgFABIjeAZQATgkA8gag");
            this.shape_97.setTransform(16.01,-99.35);
        
            this.shape_98 = new cjs.Shape();
            this.shape_98.graphics.f().s("#667D96").ss(4,1,1).p("AiSBkQASgkA8gZQAUgIASgIQATgIARgFQAYgJASgLQAVgNAWgUQAegeANgaQAGAFAFAFQAEAcgDAdQgBAJgCAKQgGAjgVAYQgTASgRAKQgCABgCABg");
            this.shape_98.setTransform(16.0766,-99.275);
        
            this.shape_99 = new cjs.Shape();
            this.shape_99.graphics.f("#FFFFFF").s().p("AhEAnIAmgQQATgIARgFQAYgJASgLQAVgNAWgUQAegeANgaQAGAFAFAFQAEAcgDAdQgBAJgCAKQgGAjgVAYQgTASgRAKIgEACIjeAYQASgkA8gZg");
            this.shape_99.setTransform(16.0766,-99.275);
        
            this.shape_100 = new cjs.Shape();
            this.shape_100.graphics.f().s("#667D96").ss(4,1,1).p("AiTBjQATgkA8gZQATgJASgHQATgIARgFQAZgJARgKQAWgNAWgUQAegeANgZQAHAEAFAEQAEAcgDAdQgCAJgCAKQgGAjgWAYQgSASgRAKQgCABgDABg");
            this.shape_100.setTransform(16.1393,-99.2);
        
            this.shape_101 = new cjs.Shape();
            this.shape_101.graphics.f("#FFFFFF").s().p("AhEAmIAlgQQATgHARgGQAZgJARgKQAWgNAWgUQAegeANgZQAHAEAFAEQAEAcgDAdIgEATQgGAjgWAYQgSATgRAJIgFACIjeAYQATgkA8gZg");
            this.shape_101.setTransform(16.1393,-99.2);
        
            this.shape_102 = new cjs.Shape();
            this.shape_102.graphics.f().s("#667D96").ss(4,1,1).p("AiUBjQATgkA8gaQAUgIARgHQATgIARgFQAZgJARgKQAWgNAWgUQAfgdAOgZQAHADAEAEQAEAcgDAdQgCAKgCAJQgGAigXAZQgSASgRAKQgCABgDABg");
            this.shape_102.setTransform(16.2067,-99.15);
        
            this.shape_103 = new cjs.Shape();
            this.shape_103.graphics.f("#FFFFFF").s().p("AhFAlIAlgQQATgHARgFQAZgJARgKQAWgNAWgUQAfgdAOgZQAHADAEAEQAEAcgDAcIgEATQgGAjgXAZQgSASgRAKIgFABIjeAZQATgkA8gag");
            this.shape_103.setTransform(16.2067,-99.15);
        
            this.shape_104 = new cjs.Shape();
            this.shape_104.graphics.f().s("#667D96").ss(4,1,1).p("AiUBiQATgkA8gaQATgIASgHQATgIARgFQAYgIASgLQAWgNAWgTQAggdANgZQAIADAFADQADAcgEAdQgBAKgDAJQgGAigXAYQgSATgRAKQgDABgCABg");
            this.shape_104.setTransform(16.2817,-99.075);
        
            this.shape_105 = new cjs.Shape();
            this.shape_105.graphics.f("#FFFFFF").s().p("AhFAkIAlgPQATgIARgFQAYgIASgLQAWgNAWgTQAggdANgZIANAGQADAcgEAdIgEATQgGAigXAYQgSATgRAKIgFACIjeAYQATgkA8gag");
            this.shape_105.setTransform(16.2817,-99.075);
        
            this.shape_106 = new cjs.Shape();
            this.shape_106.graphics.f().s("#667D96").ss(4,1,1).p("AiVBhQATgjA8gbQATgHASgIQATgHARgFQAYgJASgLQAXgMAWgUQAggcAOgYQAHACAFACQAEAcgFAdQgBAKgDAJQgHAigXAZQgSASgRALQgDABgCAAg");
            this.shape_106.setTransform(16.3516,-99);
        
            this.shape_107 = new cjs.Shape();
            this.shape_107.graphics.f("#FFFFFF").s().p("AhGAjIAlgPQATgHARgGQAYgIASgLQAXgNAWgSQAggdAOgYIAMAEQAEAcgFAdIgEATQgHAigXAYQgSATgRAKIgFACIjeAYQATgkA8gag");
            this.shape_107.setTransform(16.3516,-99);
        
            this.shape_108 = new cjs.Shape();
            this.shape_108.graphics.f().s("#667D96").ss(4,1,1).p("AiWBgQATgkA8gZQAUgJASgHQASgHARgFQAZgIASgLQAXgNAVgSQAhgdAOgXQAIABAFACQAEAcgFAdQgCAJgDAKQgHAhgXAZQgTASgRAKQgCABgCABg");
            this.shape_108.setTransform(16.4221,-98.925);
        
            this.shape_109 = new cjs.Shape();
            this.shape_109.graphics.f("#FFFFFF").s().p("AhHAjIAmgQQASgHARgFQAZgIASgLQAXgNAVgSQAhgdAOgXIANADQAEAcgFAdIgFATQgHAhgXAZQgTASgRAKIgEACIjfAYQATgkA8gZg");
            this.shape_109.setTransform(16.4221,-98.925);
        
            this.shape_110 = new cjs.Shape();
            this.shape_110.graphics.f().s("#667D96").ss(4,1,1).p("AiWBfQATgkA8gZQAUgJARgHQATgHARgFQAYgIASgLQAYgNAVgSQAigcAOgXQAIABAFABQAEAcgGAdQgBAJgDAKQgIAggYAaQgSASgRAKQgCABgDABg");
            this.shape_110.setTransform(16.4931,-98.85);
        
            this.shape_111 = new cjs.Shape();
            this.shape_111.graphics.f("#FFFFFF").s().p("AhHAiIAlgQQATgHARgFQAYgIASgKQAYgNAVgTQAigcAOgWIANACQAEAbgGAdIgEATQgIAggYAaQgSATgRAKIgFABIjeAZQATglA8gZg");
            this.shape_111.setTransform(16.4931,-98.85);
        
            this.shape_112 = new cjs.Shape();
            this.shape_112.graphics.f().s("#667D96").ss(4,1,1).p("AiXBfQATgkA8gaQAUgIARgIQATgHARgFQAYgIATgKQAXgNAWgSQAigcAOgWQAIAAAGABQADAcgGAcQgBAKgDAJQgJAggXAaQgTATgRAKQgCABgCABg");
            this.shape_112.setTransform(16.575,-98.775);
        
            this.shape_113 = new cjs.Shape();
            this.shape_113.graphics.f("#FFFFFF").s().p("AhIAhIAlgQQATgHARgFQAYgIATgKQAXgNAWgSQAigcAOgWIAOABQADAcgGAcIgEATQgJAggXAaQgTATgRAKIgEACIjfAYQATgkA8gag");
            this.shape_113.setTransform(16.575,-98.775);
        
            this.shape_114 = new cjs.Shape();
            this.shape_114.graphics.f().s("#667D96").ss(4,1,1).p("AiYBfQATglA8gZQAVgIARgIQASgHARgFQAZgIASgLQAYgMAWgSQAigbAPgWQAIgBAGAAQADAcgGAdQgCAKgDAJQgJAfgYAbQgSASgRAKQgDACgCAAg");
            this.shape_114.setTransform(16.6474,-98.75);
        
            this.shape_115 = new cjs.Shape();
            this.shape_115.graphics.f("#FFFFFF").s().p("AhJAhIAmgQQASgHARgFQAZgIASgKQAYgNAWgSQAigbAPgWIAOAAQADAbgGAdQgCAKgDAJQgJAfgYAbQgSASgRALIgFABIjfAZQATglA8gZg");
            this.shape_115.setTransform(16.6474,-98.75);
        
            this.shape_116 = new cjs.Shape();
            this.shape_116.graphics.f().s("#667D96").ss(4,1,1).p("AiZBfQAUglA8gZQAUgJARgHQASgHASgFQAYgIASgKQAYgNAWgQQAjgcAPgWQAJAAAGgCQACAdgGAcQgCAKgDAJQgJAfgZAbQgSASgRAKQgCACgDAAg");
            this.shape_116.setTransform(16.7118,-98.75);
        
            this.shape_117 = new cjs.Shape();
            this.shape_117.graphics.f("#FFFFFF").s().p("AhJAhIAlgQQASgHASgFQAYgIASgKQAYgMAWgSQAjgbAPgWIAPgBQACAcgGAcIgFATQgJAfgZAbQgSASgRALIgFABIjfAZQAUglA8gZg");
            this.shape_117.setTransform(16.7118,-98.75);
        
            this.shape_118 = new cjs.Shape();
            this.shape_118.graphics.f().s("#667D96").ss(4,1,1).p("AiZBfQATglA8gZQAVgJAQgHQATgHASgFQAXgIATgKQAYgNAWgQQAkgbAPgVQAJgCAGgCQACAdgGAcQgDAKgDAKQgJAegZAbQgTASgRAKQgCACgCAAg");
            this.shape_118.setTransform(16.7847,-98.75);
        
            this.shape_119 = new cjs.Shape();
            this.shape_119.graphics.f("#FFFFFF").s().p("AhKAhIAlgQQATgHASgFQAXgIATgKQAYgNAWgQQAkgcAPgUIAPgDQACAcgGAcIgGATQgJAfgZAbQgTASgRALIgEABIjfAZQATglA8gZg");
            this.shape_119.setTransform(16.7847,-98.75);
        
            this.shape_120 = new cjs.Shape();
            this.shape_120.graphics.f().s("#667D96").ss(4,1,1).p("AiaBfQATglA8gZQAVgJAQgHQATgHASgFQAXgIATgKQAZgNAWgQQAkgbAQgUQAIgDAHgCQACAdgHAcQgDAKgDAKQgKAdgZAbQgSATgRAKQgDACgCAAg");
            this.shape_120.setTransform(16.8722,-98.75);
        
            this.shape_121 = new cjs.Shape();
            this.shape_121.graphics.f("#FFFFFF").s().p("AhLAhIAlgQQATgHASgFQAXgIATgKQAZgNAWgPQAkgbAQgVIAPgEQACAcgHAcIgGATQgKAegZAbQgSATgRALIgFABIjfAZQATglA8gZg");
            this.shape_121.setTransform(16.8722,-98.75);
        
            this.shape_122 = new cjs.Shape();
            this.shape_122.graphics.f().s("#667D96").ss(4,1,1).p("AibBfQAUglA8gZQAUgKARgGQASgHASgFQAYgIATgJQAZgNAVgQQAlgaAQgUQAJgEAHgDQACAegIAbQgCAKgEAKQgKAdgZAbQgTATgRAKQgCACgCAAg");
            this.shape_122.setTransform(16.9461,-98.75);
        
            this.shape_123 = new cjs.Shape();
            this.shape_123.graphics.f("#FFFFFF").s().p("AhLAhIAlgQQASgHASgFQAYgIATgJQAZgNAVgPQAlgcAQgTIAQgGQACAcgIAcIgGATQgKAdgZAcQgTATgRAKIgEACIjgAZQAUglA8gZg");
            this.shape_123.setTransform(16.9461,-98.75);
        
            this.shape_124 = new cjs.Shape();
            this.shape_124.graphics.f().s("#667D96").ss(4,1,1).p("AicBfQAUglA8gaQAVgJAQgGQATgHARgFQAYgIATgJQAZgNAWgPQAlgbARgTQAJgEAGgEQACAegIAbQgCAKgEAKQgLAcgZAcQgTATgRAKQgCACgCAAg");
            this.shape_124.setTransform(17.02,-98.75);
        
            this.shape_125 = new cjs.Shape();
            this.shape_125.graphics.f("#FFFFFF").s().p("AhMAgIAlgPQATgHARgEQAYgJATgJQAZgNAWgPQAlgaARgUIAPgHQACAcgIAcQgCALgEAIQgLAdgZAcQgTATgRAKIgEACIjgAZQAUglA8gag");
            this.shape_125.setTransform(17.02,-98.75);
        
            this.shape_126 = new cjs.Shape();
            this.shape_126.graphics.f().s("#667D96").ss(4,1,1).p("AicBfQATglA8gaQAVgJAQgGQATgHARgFQAZgIASgJQAagMAWgPQAmgbAQgSQAKgFAGgFQACAegIAcQgDAJgEAKQgLAbgaAdQgSATgRAKQgCACgCAAg");
            this.shape_126.setTransform(17.094,-98.75);
        
            this.shape_127 = new cjs.Shape();
            this.shape_127.graphics.f("#FFFFFF").s().p("AhNAgIAlgPQATgHARgEQAZgJASgJQAagMAWgPQAmgbAQgSIAQgJQACAdgIAcIgHATQgLAcgaAcQgSATgRAKIgEACIjgAZQATgmA8gZg");
            this.shape_127.setTransform(17.094,-98.75);
        
            this.shape_128 = new cjs.Shape();
            this.shape_128.graphics.f().s("#667D96").ss(4,1,1).p("AidBfQATglA8gaQAWgJAPgGQATgHARgFQAZgIATgJQAagMAVgPQAngaARgSQAJgGAHgFQACAegJAcQgDAJgEAKQgLAbgaAcQgTAUgRAKQgCACgCAAg");
            this.shape_128.setTransform(17.1857,-98.75);
        
            this.shape_129 = new cjs.Shape();
            this.shape_129.graphics.f("#FFFFFF").s().p("AhOAgIAlgPQATgHARgEQAZgJATgJQAagNAVgOQAngaARgSIAQgKQACAdgJAcQgDAJgEAKQgLAbgaAdQgTATgRAKIgEACIjgAZQATgmA8gZg");
            this.shape_129.setTransform(17.1857,-98.75);
        
            this.shape_130 = new cjs.Shape();
            this.shape_130.graphics.f().s("#667D96").ss(4,1,1).p("AieBeQATglA8gZQAWgJAPgGQATgHARgFQAZgIATgJQAagMAWgOQAngaARgSQAKgGAHgFQABAdgJAcQgDAJgEAKQgMAbgaAcQgTATgRALQgCABgCABg");
            this.shape_130.setTransform(17.2602,-98.725);
        
            this.shape_131 = new cjs.Shape();
            this.shape_131.graphics.f("#FFFFFF").s().p("AhPAgIAlgPQATgHARgFQAZgIATgJQAagMAWgOQAngaARgSIARgLQABAdgJAcQgDAJgEAKQgMAbgaAcQgTATgRALIgEACIjgAYQATglA8gZg");
            this.shape_131.setTransform(17.2602,-98.725);
        
            this.shape_132 = new cjs.Shape();
            this.shape_132.graphics.f().s("#667D96").ss(4,1,1).p("AifBeQAUglA8gZQAVgJAQgGQATgHARgFQAYgIATgJQAbgMAWgOQAngZASgRQAKgHAHgGQABAdgJAcQgEAJgEAKQgMAagbAdQgSATgRALQgCABgCABg");
            this.shape_132.setTransform(17.33,-98.725);
        
            this.shape_133 = new cjs.Shape();
            this.shape_133.graphics.f("#FFFFFF").s().p("AhPAgIAlgPQATgHARgFQAYgIATgJQAbgMAWgOQAngZASgRIARgNQABAdgJAcIgIATQgMAagbAdQgSATgRALIgEACIjhAYQAUglA8gZg");
            this.shape_133.setTransform(17.33,-98.725);
        
            this.shape_134 = new cjs.Shape();
            this.shape_134.graphics.f().s("#667D96").ss(4,1,1).p("AigBeQAUglA8gZQAWgJAPgGQATgHARgFQAYgIATgJQAbgMAWgNQAogZASgRQAKgHAHgHQABAdgJAcQgEAJgEAKQgNAagbAdQgSATgRAKQgCACgCABg");
            this.shape_134.setTransform(17.4048,-98.725);
        
            this.shape_135 = new cjs.Shape();
            this.shape_135.graphics.f("#FFFFFF").s().p("AhQAgIAlgPQATgHARgFQAYgIATgJQAbgMAWgNQAogZASgRQAKgHAHgHQABAdgJAcIgIATQgNAagbAdQgSATgRAKIgEADIjhAYQAUglA8gZg");
            this.shape_135.setTransform(17.4048,-98.725);
        
            this.shape_136 = new cjs.Shape();
            this.shape_136.graphics.f().s("#667D96").ss(4,1,1).p("AihBeQAUglA8gaQAWgIAPgGQATgHARgFQAYgIAUgJQAbgMAVgNQApgZASgQQALgIAHgHQABAdgKAcQgEAKgEAJQgNAZgbAeQgTATgRAKQgCACgCABg");
            this.shape_136.setTransform(17.5012,-98.725);
        
            this.shape_137 = new cjs.Shape();
            this.shape_137.graphics.f("#FFFFFF").s().p("AhRAfIAlgOQATgHARgFIAsgRQAbgMAVgNQApgZASgQQALgIAHgHQABAdgKAcIgIATQgNAZgbAeQgTATgRAKIgEADIjhAYQAUglA8gag");
            this.shape_137.setTransform(17.5012,-98.725);
        
            this.shape_138 = new cjs.Shape();
            this.shape_138.graphics.f().s("#667D96").ss(4,1,1).p("AihBeQAUglA8gaQAWgJAOgFQATgHARgFQAZgIATgIQAcgMAVgNQAqgZASgPQALgJAHgIQABAdgLAcQgDAKgFAJQgNAZgcAeQgSATgRAKQgCACgCABg");
            this.shape_138.setTransform(17.5761,-98.725);
        
            this.shape_139 = new cjs.Shape();
            this.shape_139.graphics.f("#FFFFFF").s().p("AhRAfIAkgOQATgHARgFIAsgQQAcgMAVgNQAqgZASgPQALgJAHgIQABAdgLAcIgIATQgNAZgcAeQgSATgRAKIgEADIjhAYQAUglA8gag");
            this.shape_139.setTransform(17.5761,-98.725);
        
            this.shape_140 = new cjs.Shape();
            this.shape_140.graphics.f().s("#667D96").ss(4,1,1).p("AiiBeQAUglA8gaQApgRAigKQBBgXAogYQAtgbAUgXQABAngUAlQgPAagfAhQgQAQgTAMg");
            this.shape_140.setTransform(17.6524,-98.725);
        
            this.shape_141 = new cjs.Shape();
            this.shape_141.graphics.f("#FFFFFF").s().p("AhSAfQApgRAigKQBBgXAogYQAtgbAUgXQABAngUAlQgPAagfAhQgQAQgTAMIjhAYQAUglA8gag");
            this.shape_141.setTransform(17.6524,-98.725);
        
            this.shape_142 = new cjs.Shape();
            this.shape_142.graphics.f().s("#667D96").ss(4,1,1).p("AihBeQAUglA8gaQAWgIAPgGQATgHARgFQAYgIAUgJQAbgMAVgMQApgZASgQQALgJAHgHQABAdgKAcQgDAKgFAJQgNAZgbAeQgTATgRAKQgCACgCABg");
            this.shape_142.setTransform(17.5043,-98.725);
        
            this.shape_143 = new cjs.Shape();
            this.shape_143.graphics.f("#FFFFFF").s().p("AhRAfIAlgOQATgHARgFIAsgRQAbgMAVgMQApgZASgQQALgJAHgHQABAdgKAcQgDAKgFAJQgNAZgbAeQgTATgRAKIgEADIjhAYQAUglA8gag");
            this.shape_143.setTransform(17.5043,-98.725);
        
            this.shape_144 = new cjs.Shape();
            this.shape_144.graphics.f().s("#667D96").ss(4,1,1).p("AigBeQAUglA8gaQAWgIAPgGQATgHARgFQAYgIATgJQAcgMAVgNQApgZARgRQALgHAHgHQABAdgKAcQgDAKgFAJQgMAZgcAeQgSATgRAKQgCACgCABg");
            this.shape_144.setTransform(17.4295,-98.725);
        
            this.shape_145 = new cjs.Shape();
            this.shape_145.graphics.f("#FFFFFF").s().p("AhQAfIAlgOQATgHARgFQAYgIATgJQAcgMAVgNQApgZARgRQALgHAHgHQABAdgKAcQgDAKgFAJQgMAZgcAeQgSATgRAKIgEADIjhAYQAUglA8gag");
            this.shape_145.setTransform(17.4295,-98.725);
        
            this.shape_146 = new cjs.Shape();
            this.shape_146.graphics.f().s("#667D96").ss(4,1,1).p("AifBeQAUglA8gZQAVgJAPgGQATgHARgFQAZgIATgJQAbgMAVgOQAogZASgRQAKgHAHgGQABAdgKAcQgDAJgEAKQgMAagbAdQgTATgRALQgCABgCABg");
            this.shape_146.setTransform(17.3548,-98.725);
        
            this.shape_147 = new cjs.Shape();
            this.shape_147.graphics.f("#FFFFFF").s().p("AhPAgIAkgPQATgHARgFQAZgIATgJQAbgMAVgOQAogZASgRIARgNQABAdgKAcIgHATQgMAagbAdQgTATgRALIgEACIjgAYQAUglA8gZg");
            this.shape_147.setTransform(17.3548,-98.725);
        
            this.shape_148 = new cjs.Shape();
            this.shape_148.graphics.f().s("#667D96").ss(4,1,1).p("AieBeQATglA8gZQAWgJAPgGQATgHARgFQAZgIATgJQAagMAWgOQAngaARgRQAKgHAHgFQACAdgKAcQgDAJgEAKQgMAagaAdQgTATgRALQgCABgCABg");
            this.shape_148.setTransform(17.2852,-98.725);
        
            this.shape_149 = new cjs.Shape();
            this.shape_149.graphics.f("#FFFFFF").s().p("AhPAgIAlgPQATgHARgFQAZgIATgJQAagMAWgOQAngaARgRIARgMQACAdgKAcIgHATQgMAagaAdQgTATgRALIgEACIjgAYQATglA8gZg");
            this.shape_149.setTransform(17.2852,-98.725);
        
            this.shape_150 = new cjs.Shape();
            this.shape_150.graphics.f().s("#667D96").ss(4,1,1).p("AieBfQAUglA8gaQAVgJAQgGQATgHARgFQAYgIATgJQAagMAWgPQAngZARgSQAKgGAGgGQACAegJAcQgDAJgEAKQgMAbgaAcQgSAUgRAKQgDACgCAAg");
            this.shape_150.setTransform(17.2107,-98.75);
        
            this.shape_151 = new cjs.Shape();
            this.shape_151.graphics.f("#FFFFFF").s().p("AhOAgIAlgPQATgHARgEQAYgJATgJQAagNAWgNQAngbARgSQAKgFAGgFQACAdgJAcQgDAJgEAKQgMAbgaAdQgSATgRAKIgFACIjgAZQAUgmA8gZg");
            this.shape_151.setTransform(17.2107,-98.75);
        
            this.shape_152 = new cjs.Shape();
            this.shape_152.graphics.f().s("#667D96").ss(4,1,1).p("AidBfQAUglA8gaQAVgJAQgGQATgHARgFQAYgIATgJQAagMAWgPQAmgaARgTQAJgFAHgFQACAegJAcQgDAJgEAKQgLAbgaAdQgTATgRAKQgCACgCAAg");
            this.shape_152.setTransform(17.1432,-98.75);
        
            this.shape_153 = new cjs.Shape();
            this.shape_153.graphics.f("#FFFFFF").s().p("AhNAgIAlgPQATgHARgEQAYgJATgJQAagNAWgOQAmgaARgSQAJgFAHgFQACAdgJAcIgHATQgLAcgaAcQgTATgRAKIgEACIjgAZQAUgmA8gZg");
            this.shape_153.setTransform(17.1432,-98.75);
        
            this.shape_154 = new cjs.Shape();
            this.shape_154.graphics.f().s("#667D96").ss(4,1,1).p("AicBfQATglA8gaQAVgJAQgGQATgHARgFQAZgIASgJQAagMAWgPQAlgbARgTQAJgEAHgFQACAegJAbQgCAKgEAKQgLAcgaAcQgSATgRAKQgCACgCAAg");
            this.shape_154.setTransform(17.069,-98.75);
        
            this.shape_155 = new cjs.Shape();
            this.shape_155.graphics.f("#FFFFFF").s().p("AhNAgIAlgPQATgHARgEQAZgJASgJQAagMAWgPQAlgbARgTIAQgIQACAcgJAcQgCALgEAIQgLAdgaAcQgSATgRAKIgEACIjgAZQATglA8gag");
            this.shape_155.setTransform(17.069,-98.75);
        
            this.shape_156 = new cjs.Shape();
            this.shape_156.graphics.f().s("#667D96").ss(4,1,1).p("AibBfQATglA8gZQAVgKAQgGQATgHASgFQAYgIASgJQAagNAVgPQAmgbAQgTQAJgEAGgEQACAegHAbQgDAKgEAKQgKAdgaAbQgSATgRAKQgCACgCAAg");
            this.shape_156.setTransform(16.9961,-98.75);
        
            this.shape_157 = new cjs.Shape();
            this.shape_157.graphics.f("#FFFFFF").s().p("AhMAhIAlgQQATgHASgEQAYgJASgJQAagNAVgPQAmgbAQgTIAPgHQACAcgHAcQgDALgEAIQgKAdgaAcQgSATgRAKIgEACIjgAZQATglA8gZg");
            this.shape_157.setTransform(16.9961,-98.75);
        
            this.shape_158 = new cjs.Shape();
            this.shape_158.graphics.f().s("#667D96").ss(4,1,1).p("AibBfQAUglA8gZQAUgKARgGQASgHASgFQAYgIATgJQAZgNAVgQQAlgaAQgUQAJgEAGgDQADAegIAbQgCAKgEAKQgKAdgZAbQgTATgRAKQgCACgCAAg");
            this.shape_158.setTransform(16.9313,-98.75);
        
            this.shape_159 = new cjs.Shape();
            this.shape_159.graphics.f("#FFFFFF").s().p("AhLAhIAlgQQASgHASgFQAYgIATgJQAZgNAVgQQAlgaAQgVIAPgFQADAcgIAcIgGATQgKAdgZAcQgTATgRAKIgEACIjgAZQAUglA8gZg");
            this.shape_159.setTransform(16.9313,-98.75);
        
            this.shape_160 = new cjs.Shape();
            this.shape_160.graphics.f().s("#667D96").ss(4,1,1).p("AiaBfQATglA8gZQAVgJAQgHQATgHASgFQAXgIATgKQAZgNAVgQQAlgbAPgUQAJgDAGgCQADAdgHAcQgDAKgDAKQgKAdgZAbQgSATgRAKQgDACgCAAg");
            this.shape_160.setTransform(16.8579,-98.75);
        
            this.shape_161 = new cjs.Shape();
            this.shape_161.graphics.f("#FFFFFF").s().p("AhLAhIAlgQQATgHASgFQAXgIATgKQAZgNAVgPQAlgbAPgVIAPgEQADAcgHAcIgGATQgKAegZAbQgSATgRALIgFABIjfAZQATglA8gZg");
            this.shape_161.setTransform(16.8579,-98.75);
        
            this.shape_162 = new cjs.Shape();
            this.shape_162.graphics.f().s("#667D96").ss(4,1,1).p("AiZBfQAUglA8gZQAUgJARgHQASgHASgFQAYgIASgKQAZgNAVgQQAjgcAQgWQAIAAAGgCQADAdgHAcQgCAKgDAJQgJAfgZAbQgSASgRAKQgCACgDAAg");
            this.shape_162.setTransform(16.7224,-98.75);
        
            this.shape_163 = new cjs.Shape();
            this.shape_163.graphics.f("#FFFFFF").s().p("AhJAhIAlgQQASgHASgFQAYgIASgKQAZgMAVgSQAjgbAQgWIAOgBQADAcgHAcQgCAKgDAJQgJAfgZAbQgSASgRALIgFABIjfAZQAUglA8gZg");
            this.shape_163.setTransform(16.7224,-98.75);
        
            this.shape_164 = new cjs.Shape();
            this.shape_164.graphics.f().s("#667D96").ss(4,1,1).p("AiYBfQATglA8gZQAUgJARgHQATgHARgFQAYgIATgLQAYgMAVgRQAjgcAPgVQAJgCAFAAQADAdgGAcQgCAKgEAJQgIAfgYAbQgTASgRAKQgCACgCAAg");
            this.shape_164.setTransform(16.65,-98.75);
        
            this.shape_165 = new cjs.Shape();
            this.shape_165.graphics.f("#FFFFFF").s().p("AhJAhIAlgQQATgHARgFQAYgIATgKQAYgNAVgRQAjgcAPgVIAOgBQADAcgGAcQgCAKgEAJQgIAfgYAbQgTASgQALIgFABIjfAZQATglA8gZg");
            this.shape_165.setTransform(16.65,-98.75);
        
            this.shape_166 = new cjs.Shape();
            this.shape_166.graphics.f().s("#667D96").ss(4,1,1).p("AiXBfQATgkA8gaQAUgIARgIQATgHARgFQAYgIATgKQAXgNAWgSQAigcAPgWQAIAAAFABQADAcgFAcQgCAKgDAJQgJAggXAaQgTATgRAKQgCABgCABg");
            this.shape_166.setTransform(16.5779,-98.775);
        
            this.shape_167 = new cjs.Shape();
            this.shape_167.graphics.f("#FFFFFF").s().p("AhIAhIAlgQQATgHARgFQAYgIATgKQAXgNAWgSQAigcAPgWIANABQADAcgFAcIgFATQgJAggXAaQgTATgRAKIgEACIjfAYQATgkA8gag");
            this.shape_167.setTransform(16.5779,-98.775);
        
            this.shape_168 = new cjs.Shape();
            this.shape_168.graphics.f().s("#667D96").ss(4,1,1).p("AiXBfQATgkA8gZQAUgJASgHQASgHARgFQAZgIASgLQAXgNAWgSQAigcAOgWQAIAAAFABQAEAcgGAdQgCAJgDAKQgHAggYAaQgTASgRAKQgCABgCABg");
            this.shape_168.setTransform(16.5181,-98.825);
        
            this.shape_169 = new cjs.Shape();
            this.shape_169.graphics.f("#FFFFFF").s().p("AhIAiIAmgQQASgHARgFQAZgIASgLQAXgNAWgSQAigcAOgWIANABQAEAcgGAdIgFATQgHAggYAaQgTASgRAKIgEACIjfAYQATgkA8gZg");
            this.shape_169.setTransform(16.5181,-98.825);
        
            this.shape_170 = new cjs.Shape();
            this.shape_170.graphics.f().s("#667D96").ss(4,1,1).p("AiWBgQATgkA8gZQAUgJASgHQASgHARgFQAZgJASgKQAXgNAWgSQAhgdAOgXQAIABAFACQADAcgFAdQgBAJgDAJQgIAhgXAaQgTASgRAKQgCABgCABg");
            this.shape_170.setTransform(16.4471,-98.9);
        
            this.shape_171 = new cjs.Shape();
            this.shape_171.graphics.f("#FFFFFF").s().p("AhHAiIAmgPQASgHARgGQAZgHASgMQAXgMAWgSQAhgdAOgXQAIABAFACQADAcgFAdIgEATQgIAggXAZQgTATgRAKIgEACIjfAYQATgkA8gag");
            this.shape_171.setTransform(16.4471,-98.9);
        
            this.shape_172 = new cjs.Shape();
            this.shape_172.graphics.f().s("#667D96").ss(4,1,1).p("AiVBgQATgjA8gaQAUgIARgIQATgHARgFQAYgIASgLQAXgNAWgTQAggcAOgYQAIACAFACQAEAcgFAdQgCAJgCAKQgIAhgXAZQgSASgRALQgCABgDAAg");
            this.shape_172.setTransform(16.3971,-98.95);
        
            this.shape_173 = new cjs.Shape();
            this.shape_173.graphics.f("#FFFFFF").s().p("AhGAjIAlgQQATgHARgFQAYgIASgLQAXgMAWgUQAggcAOgYQAIACAFADQAEAbgFAdIgEATQgIAhgXAZQgSATgRAKIgFABIjeAZQATgkA8gag");
            this.shape_173.setTransform(16.3971,-98.95);
        
            this.shape_174 = new cjs.Shape();
            this.shape_174.graphics.f().s("#667D96").ss(4,1,1).p("AiVBhQATgjA8gaQAUgIARgIQATgHARgFQAZgJASgKQAWgNAWgTQAggdAOgYQAHACAFADQAEAcgFAcQgBAKgDAJQgHAigWAZQgTASgRALQgCABgCAAg");
            this.shape_174.setTransform(16.3266,-99.025);
        
            this.shape_175 = new cjs.Shape();
            this.shape_175.graphics.f("#FFFFFF").s().p("AhGAkIAlgQQATgHARgFQAZgJASgKQAWgNAWgTQAggdAOgYIAMAFQAEAcgFAcIgEATQgHAigWAZQgTASgRALIgEABIjfAYQATgjA8gag");
            this.shape_175.setTransform(16.3266,-99.025);
        
            this.shape_176 = new cjs.Shape();
            this.shape_176.graphics.f().s("#667D96").ss(4,1,1).p("AiUBiQATgjA8gbQATgIASgHQATgIARgFQAYgIASgLQAWgNAWgTQAfgeAOgYQAHADAFADQAEAcgEAdQgBAKgDAJQgHAigWAYQgSATgRALQgDAAgCABg");
            this.shape_176.setTransform(16.2567,-99.1);
        
            this.shape_177 = new cjs.Shape();
            this.shape_177.graphics.f("#FFFFFF").s().p("AhFAkIAlgPQATgHARgGQAYgIASgLQAWgNAWgTQAfgdAOgZQAHADAFADQAEAcgEAdQgBAKgDAJQgHAigWAYQgSATgRAKIgFACIjeAYQATgkA8gag");
            this.shape_177.setTransform(16.2567,-99.1);
        
            this.shape_178 = new cjs.Shape();
            this.shape_178.graphics.f().s("#667D96").ss(4,1,1).p("AiUBjQATgkA8gaQAUgIARgHQAUgIAQgFQAZgJASgKQAWgNAWgUQAfgdANgZQAHADAFAEQAEAcgEAdQgBAKgDAJQgGAigWAZQgTASgRAKQgCABgCABg");
            this.shape_178.setTransform(16.2,-99.15);
        
            this.shape_179 = new cjs.Shape();
            this.shape_179.graphics.f("#FFFFFF").s().p("AhEAlIAlgQQATgHAQgFQAZgJASgKQAVgNAXgUQAegdANgZIANAHQADAcgDAcQgBAKgDAJQgGAjgXAZQgSASgRAKIgEABIjeAZQASgkA9gag");
            this.shape_179.setTransform(16.2,-99.15);
        
            this.shape_180 = new cjs.Shape();
            this.shape_180.graphics.f().s("#667D96").ss(4,1,1).p("AiTBjQATgjA8gaQATgIASgIQATgHARgFQAZgKARgKQAWgNAWgUQAegeANgZQAHAEAFAFQAEAbgEAdQgBAKgCAJQgGAjgWAYQgSATgRAKQgDABgCAAg");
            this.shape_180.setTransform(16.1317,-99.225);
        
            this.shape_181 = new cjs.Shape();
            this.shape_181.graphics.f("#FFFFFF").s().p("AhEAmIAlgQQATgHARgFQAZgKARgKQAWgNAWgUQAegeANgZIAMAJQAEAbgEAdIgDATQgGAjgWAYQgSATgRAKIgFABIjeAYQATgjA8gag");
            this.shape_181.setTransform(16.1317,-99.225);
        
            this.shape_182 = new cjs.Shape();
            this.shape_182.graphics.f().s("#667D96").ss(4,1,1).p("AiSBkQASgkA8gZQAUgIASgIQATgIARgFQAYgJASgLQAVgNAWgUQAegeAMgaQAHAFAFAFQAEAcgDAdQgBAJgCAKQgGAjgVAYQgTASgRAKQgCABgCABg");
            this.shape_182.setTransform(16.0643,-99.275);
        
            this.shape_183 = new cjs.Shape();
            this.shape_183.graphics.f("#FFFFFF").s().p("AhEAnIAmgQQATgIARgFQAYgJASgLQAVgNAWgUQAegeAMgaQAHAFAFAFQAEAcgDAdIgDATQgGAjgVAYQgTASgRAKIgEACIjeAYQASgkA8gZg");
            this.shape_183.setTransform(16.0643,-99.275);
        
            this.shape_184 = new cjs.Shape();
            this.shape_184.graphics.f().s("#667D96").ss(4,1,1).p("AiRBlQATgjA8gaQATgIASgIQATgHARgFQAZgKARgKQAVgNAWgWQAcgeANgbQAGAGAEAHQAFAbgDAdQAAAKgCAJQgFAlgVAXQgTASgRAKQgCABgCAAg");
            this.shape_184.setTransform(15.9446,-99.425);
        
            this.shape_185 = new cjs.Shape();
            this.shape_185.graphics.f("#FFFFFF").s().p("AhCAoIAlgQQATgHARgFQAZgKARgKQAVgNAWgWQAcgeANgbIAKANQAFAbgDAdQAAAKgCAJQgFAlgVAXQgTASgRAKIgEABIjeAYQATgjA8gag");
            this.shape_185.setTransform(15.9446,-99.425);
        
            this.shape_186 = new cjs.Shape();
            this.shape_186.graphics.f().s("#667D96").ss(4,1,1).p("AiQBmQASgjA8gaQATgIATgIQATgIARgFQAYgJARgLQAVgNAWgWQAcgfAMgbQAGAHAEAHQAFAbgCAdQgBAKgBAJQgFAmgVAWQgSASgRALQgDAAgCABg");
            this.shape_186.setTransform(15.8808,-99.475);
        
            this.shape_187 = new cjs.Shape();
            this.shape_187.graphics.f("#FFFFFF").s().p("AhCApIAmgQQATgIARgFQAYgJARgLQAVgNAWgWQAcgfAMgbQAGAHAEAHQAFAbgCAdIgCATQgFAmgVAWQgSASgRALIgFABIjdAYQASgjA8gag");
            this.shape_187.setTransform(15.8808,-99.475);
        
            this.shape_188 = new cjs.Shape();
            this.shape_188.graphics.f().s("#667D96").ss(4,1,1).p("AiQBnQATgjA8gaQASgIATgJQATgHASgFQAYgKARgLQAUgNAWgWQAcgfALgcQAGAIAEAIQAFAbgBAdQgBAKgCAJQgEAmgUAWQgTATgRAKQgCAAgCABg");
            this.shape_188.setTransform(15.8423,-99.55);
        
            this.shape_189 = new cjs.Shape();
            this.shape_189.graphics.f("#FFFFFF").s().p("AhBAqIAlgRQATgHASgFQAYgJARgMQAUgNAWgVQAcggALgcQAGAIAEAIQAFAbgBAdQgBAKgCAJQgEAmgUAWQgTATgRAJIgEACIjeAYQATgkA8gZg");
            this.shape_189.setTransform(15.8423,-99.55);
        
            this.shape_190 = new cjs.Shape();
            this.shape_190.graphics.f().s("#667D96").ss(4,1,1).p("AiPBnQASgjA8gZQATgJATgIQASgIASgFQAYgJARgLQAUgOAWgWQAbgfAMgcQAFAIAEAIQAFAbgBAdQAAAKgCAJQgEAngUAVQgSATgRAKQgDAAgCABg");
            this.shape_190.setTransform(15.7833,-99.6);
        
            this.shape_191 = new cjs.Shape();
            this.shape_191.graphics.f("#FFFFFF").s().p("AhBArIAmgRQASgHASgGQAYgJARgLQAUgOAWgWQAbgfAMgcQAFAIAEAIQAFAbgBAdIgCAUQgEAlgUAWQgSATgRAKIgFACIjdAXQASgjA8gZg");
            this.shape_191.setTransform(15.7833,-99.6);
        
            this.shape_192 = new cjs.Shape();
            this.shape_192.graphics.f().s("#667D96").ss(4,1,1).p("AiPBoQATgjA8gaQASgIATgIQATgIASgFQAXgJASgMQATgNAWgXQAbgfALgdQAFAJAEAJQAFAbAAAdQgBAKgBAJQgEAngTAVQgTATgRAKQgCAAgDABg");
            this.shape_192.setTransform(15.7273,-99.675);
        
            this.shape_193 = new cjs.Shape();
            this.shape_193.graphics.f("#FFFFFF").s().p("AhAArIAlgQQATgIASgFQAXgJASgMQATgNAWgXQAbgfALgdQAFAJAEAJQAFAbAAAdIgCATQgEAngTAVQgTATgRAKIgFABIjdAYQATgjA8gag");
            this.shape_193.setTransform(15.7273,-99.675);
        
            this.shape_194 = new cjs.Shape();
            this.shape_194.graphics.f().s("#667D96").ss(4,1,1).p("AiOBoQASgiA8gaQASgIAUgJQASgHASgGQAYgJARgLQATgNAWgYQAagfALgdQAFAJAEAKQAGAbgBAcQAAAKgBAJQgDAogUAVQgTASgRAKQgCABgCABg");
            this.shape_194.setTransform(15.6771,-99.725);
        
            this.shape_195 = new cjs.Shape();
            this.shape_195.graphics.f("#FFFFFF").s().p("AhAAsIAmgRQASgHASgGQAYgJARgLQATgNAWgYQAagfALgdIAJATQAGAbgBAcIgBATQgDAogUAVQgTASgRAKIgEACIjdAXQASgiA8gag");
            this.shape_195.setTransform(15.6771,-99.725);
        
            this.shape_196 = new cjs.Shape();
            this.shape_196.graphics.f().s("#667D96").ss(4,1,1).p("AiOBpQATgjA8gZQASgIATgJQATgIASgFQAXgJARgMQATgNAWgYQAagfALgeQAFAKADAKQAGAbAAAdQAAAKgCAJQgCAogUAVQgSASgRAKQgDABgCAAg");
            this.shape_196.setTransform(15.625,-99.8);
        
            this.shape_197 = new cjs.Shape();
            this.shape_197.graphics.f("#FFFFFF").s().p("Ag/AtIAlgRQATgHASgGQAXgJARgLQATgOAWgXQAaggALgeIAIAUQAGAbAAAdQAAAKgCAJQgCAogUAVQgSASgRAKIgFACIjdAXQATgjA8gZg");
            this.shape_197.setTransform(15.625,-99.8);
        
            this.shape_198 = new cjs.Shape();
            this.shape_198.graphics.f().s("#667D96").ss(4,1,1).p("AiNBqQASgjA8gaQASgHAUgJQASgIASgFQAYgJARgMQASgNAWgYQAZggALgfQAFALADALQAGAbAAAdQAAAKgBAJQgCAogTAVQgTASgRAKQgCABgDAAg");
            this.shape_198.setTransform(15.575,-99.875);
        
            this.shape_199 = new cjs.Shape();
            this.shape_199.graphics.f("#FFFFFF").s().p("Ag/AtIAmgQQASgIASgFQAYgJARgMQASgNAWgYQAZggALgfQAFALADALQAGAbAAAdIgBATQgCAogTAVQgTASgRAKIgFABIjcAYQASgjA8gag");
            this.shape_199.setTransform(15.575,-99.875);
        
            this.shape_200 = new cjs.Shape();
            this.shape_200.graphics.f().s("#667D96").ss(4,1,1).p("AiNBqQASgiA8gaQASgIAUgJQATgHASgGQAXgJARgMQASgNAWgZQAZggAKgeQAFALADALQAGAbABAdQAAAKgBAJQgCApgTAUQgSATgRAKQgDAAgCABg");
            this.shape_200.setTransform(15.525,-99.925);
        
            this.shape_201 = new cjs.Shape();
            this.shape_201.graphics.f("#FFFFFF").s().p("Ag/AuIAmgRQATgHASgGQAXgJARgMQASgNAWgZQAZggAKgeIAIAWQAGAbABAdIgBATQgCApgTAUQgSATgRAKIgFABIjdAXQASgiA8gag");
            this.shape_201.setTransform(15.525,-99.925);
        
            this.shape_202 = new cjs.Shape();
            this.shape_202.graphics.f().s("#667D96").ss(4,1,1).p("AiMBrQASgiA8gaQASgIAUgJQASgHASgGQAYgJAQgMQATgNAWgZQAYghAKgfQAEAMADAMQAGAbABAcQAAAKAAAKQgCApgTAVQgSASgRAKQgCAAgDAAg");
            this.shape_202.setTransform(15.475,-100);
        
            this.shape_203 = new cjs.Shape();
            this.shape_203.graphics.f("#FFFFFF").s().p("Ag+AvIAmgRQASgHASgGQAYgJAQgMQATgOAWgYQAYghAKgfIAHAYQAGAbABAcIAAATQgCAqgTAUQgSATgRAKIgFABIjcAXQASgiA8gag");
            this.shape_203.setTransform(15.475,-100);
        
            this.shape_204 = new cjs.Shape();
            this.shape_204.graphics.f().s("#667D96").ss(4,1,1).p("AiMBsQASgjA8gZQASgIAUgKQATgHASgFQAXgKARgMQASgOAWgZQAXggAKggQAEANADAMQAHAbABAdQAAAKgBAJQgBAqgSAUQgTASgRAKQgCAAgDABg");
            this.shape_204.setTransform(15.4333,-100.05);
        
            this.shape_205 = new cjs.Shape();
            this.shape_205.graphics.f("#FFFFFF").s().p("Ag+AvIAmgRQATgHASgFQAXgKARgMQASgNAWgaQAXggAKgfQAEAMADANQAHAaABAdQAAAKgBAJQgBAqgSAUQgTASgRAKIgFABIjcAYQASgjA8gag");
            this.shape_205.setTransform(15.4333,-100.05);
        
            this.shape_206 = new cjs.Shape();
            this.shape_206.graphics.f().s("#667D96").ss(4,1,1).p("AiYBcQATgkBBgbQAQgHAQgGQASgGATgFQAagIARgKQAWgNAYgSQAKgHAKgIQATgRAPgPQANAZgIAeQgKAqgcAfQgBABgBABQgPAQgTALQgBABgBAAIgQAIg");
            this.shape_206.setTransform(16.6024,-98.475);
        
            this.shape_207 = new cjs.Shape();
            this.shape_207.graphics.f("#FFFFFF").s().p("AhEAdQAQgHAQgGIAlgLQAagIARgKQAWgNAYgSIAUgPIAiggQANAZgIAeQgKAqgcAfIgCACQgPAQgTALIgCABIgQAIIjRARQATgkBBgbg");
            this.shape_207.setTransform(16.6024,-98.475);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_153},{t:this.shape_152}]},1).to({state:[{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_159},{t:this.shape_158}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_173},{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_181},{t:this.shape_180}]},1).to({state:[{t:this.shape_183},{t:this.shape_182}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_187},{t:this.shape_186}]},1).to({state:[{t:this.shape_189},{t:this.shape_188}]},1).to({state:[{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_197},{t:this.shape_196}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203},{t:this.shape_202}]},1).to({state:[{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_207},{t:this.shape_206}]},1).to({state:[]},1).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-73.6,-115.1,185,158.6);
        
        
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
        
            // 头
            this.instance = new lib.头("synched",0);
            this.instance.setTransform(55,28.85,1,1,-4.2467,0,0,18.5,25.5);
        
            this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.4,regY:25.4,rotation:4.2354,x:54.9,y:28.75,startPosition:60},60).to({regX:18.5,regY:25.5,rotation:-4.2467,x:55,y:28.85,startPosition:0},69).wait(1));
        
            // 图层_1
            this.shape = new cjs.Shape();
            this.shape.graphics.f().s("#FFFFFF").ss(4,1,1).p("AoMgJIQZAT");
            this.shape.setTransform(54.475,114.65);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f().s("#667D96").ss(4,1,1).p("AIGIGIBdh+QABh0gHiRQgOkhgoiVQgOg0gIhAQgHg7ADgWQABgGABgDQAEgIAHAHIgLABIwWAlQgCAagDAYQgIBMgQA1QgDALgDALQAAABAAABQgTBGgMBUQgDAQgCAQQgCANgBAMQgcDfARD0IBJBd");
            this.shape_1.setTransform(55.1601,63.831);
        
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#AACDE2").s().p("AIoCPQgmgngHgXQgIgxgJgZQgPgugigDQgOAAiNASQh6AQgXgNQgZgPAXgHQAhgFAMgEIB7glQBrghAcgKQApgOAxgWIAJBqIAwDwQgSgPgTgUgApFCHIAfiaIAAgCIAGgWQAQg1AJhMQAqASAkANQAbAKBsAhIB6AlQAMAEAiAFQAXAHgZAPQgXANh6gQQiNgSgOAAQghADgRAvQgIAYgJAxQgFAXgnAnQgSASgRAPIAFggIgFAgIgCACgAobhHIAIhqIAMAFQgJBMgQA1IgGAWgAoHisIAAAAg");
            this.shape_2.setTransform(54.75,38.4);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#FFFFFF").s().p("AoTHyIhJhdQgRj0AcjfIADgZQARgOASgSQAmgnAGgXQAJgxAIgaQAQgvAigCQAOgBCNATQB6AQAXgOQAZgOgXgHQgigFgMgEIh6glQhsghgbgKQgkgNgrgSIAFgyIQWglQAEgIAHAHIgLABIgCAJQgDAWAHA7QAIBAAOA0QAoCVAOEhQAHCRgBB0IhdB+gAG1koQAhACAQAvQAJAaAIAxQAGAXAnAnQATATASAPIgxjwIgIhqQgyAVgoAPQgcAKhrAhIh7AlQgMAEghAFQgXAHAZAOQAXAOB6gQQCFgSAUAAIACAAgAoqkRIgfCaQAMhUAThGg");
            this.shape_3.setTransform(55.1601,63.831);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(130));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-43.5,-112.9,198.1,230.60000000000002);
        
        
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
        
            // 图层_7
            this.instance = new lib.补间15("synched",0);
            this.instance.setTransform(24.6,-49.55);
        
            this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},49).to({rotation:-14.9983,x:19.45},17).to({startPosition:0},24).to({rotation:0,x:24.6},15).to({startPosition:0},23).to({_off:true},1).wait(1));
        
            // 图层_3
            this.instance_1 = new lib.补间17("synched",0);
            this.instance_1.setTransform(92.15,-46.85);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:95.6,y:-47.4},40).to({x:94.7,y:-46.8},42).to({startPosition:0},15).to({x:92.3,y:-46.85},31).to({_off:true},1).wait(1));
        
            // 图层_4
            this.shape = new cjs.Shape();
            this.shape.graphics.f().s("#4F8C69").ss(3,1,1).p("AKLkLQAAC6ghB4QgkCDhcB6QhZB3iIA4Qh1AwiUAAQiTAAh1gwQiIg4hZh3Qhch6gkiDQghh4AAi6QAAh1AXhwICVBKICohMIDcBoICfhQICAB0IDch0IBkAMIBrg0QAbB5AAB+g");
            this.shape.setTransform(57.5,-0.5);
        
            this.timeline.addTween(cjs.Tween.get(this.shape).wait(128).to({_off:true},1).wait(1));
        
            // 图层_6
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AgTCpQgmhggEhaQgEhlAKhBQALhMAcACQAeADgCBUQgECHAJA0IAnChQAQBJgYAGIgEABQgcAAgjhZg");
            this.shape_1.setTransform(7.7519,-14.7768);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(128).to({_off:true},1).wait(1));
        
            // 图层_5
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("#B0E5CB").s().p("AmNE6Qhch6gkiEQggh3AAi6QAAh1AWhwICVBKICohMIDbBoICghQICAB0IDch0IAwAGQAMEdiHDZQjKFHjqBFQhRAXhzACQh2g4hRhrg");
            this.shape_2.setTransform(48.2842,-2.7);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#71C99C").s().p("Am5HUIgggPIAGAAQBzgBBRgYQDqhFDKlHQCHjZgMkdIA0AGIBqgzIAcD2IAAADIgSDwQgHAjgIAfQgYBYgxBTQgYAqgfAoQhZB3iIA4Qh1AwiTAAQiTAAh2gwg");
            this.shape_3.setTransform(75.2,-0.325);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_2},{t:this.shape_3}]},128).to({state:[]},1).wait(1));
        
            // 头
            this.instance_2 = new lib.身体();
            this.instance_2.setTransform(58.8,-60.85,0.6323,0.6323,0,0,0,55.1,5.2);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(128).to({_off:true},1).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-9,-134.1,133.1,186.6);
        
        
        // stage content:
        (lib.cat2 = function(mode,startPosition,loop,reversed) {
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
        
            this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},129).wait(1));
        
            // 影子
            this.instance_1 = new lib.补间6("synched",0);
            this.instance_1.setTransform(200,445.4);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},129).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new lib.AnMovieClip();
        p.nominalBounds = new cjs.Rectangle(333.5,482.3,-66.89999999999998,-30.400000000000034);
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
