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
    
    (lib.补间21 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f("#F4A699").s().p("AhkChQh9iCglg+QgvhNAahAQAahDBfgWQBRgSAzAvQAQAPALAUIAHAQQgIgYAqghQA4gtBDAGQBGAHAkA8QAhA1gIBCQgGAyiHCkQhEBThCBIQg2g0g/hBg");
            this.shape.setTransform(-0.0145,0.0144);
        
            this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-29.3,-27.8,58.6,55.7);
        
        
        (lib.补间20 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f().s("#667D96").ss(4,1,1).p("AhykIIgLByQgPCBgTBHQgdBvgBAKQgBALACALQAFAZAYAWQAmAiA5gLQA5gLAvg0QA1g5AphYQAuhgAKhd");
            this.shape.setTransform(-2.0167,-1.5156);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#AACDE2").s().p("AhiEBQg4gEgdgZQgggaAHgwQAFAaAYAVIABABIAAABIABAAQAcAYAlAAIABAAIAAAAQAMAAANgDIABAAQA5gLAwg0QA0g5AqhXQAuhhAKhdQgKBdguBhQgqBXg0A5QgwA0g5ALIgBAAQgNADgMAAIAAAAIgBAAQglAAgcgYIgBAAIAAgBIgBgBQgYgVgFgaQAFgpAKgtIAJglIABAsQAHAvAcAPQAlAVBJgkQBNgoAghGQAcg9AchEIA7iMIAZBGIgQBYQgVBjgcA+QhYDEiMAAIgQgBg");
            this.shape_1.setTransform(0.0451,2.3329);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-23,-30,44.1,58.1);
        
        
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
            this.shape.graphics.f().s("#667D96").ss(4,1,1).p("ABzkIIALByQAPCBATBHQAdBvABAKQABALgCAKIAAABQgFAZgYAWQgmAig5gLQg5gLgvg0Qg1g5gphYQguhggKhd");
            this.shape.setTransform(2.0667,-1.5156);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#AACDE2").s().p("AiRA+Qgcg+gVhjIgQhYIAZhGIA7CMQAcBEAcA9QAgBGBNAoQBJAkAlgVQAcgPAHgvIABgsIAJAlQAKAtAFApIAAAAQAHAwggAaQgdAZg4AEIgQABQiMAAhYjEgABxDjQAmAAAbgYIACgCQAYgVAFgaQgFAagYAVIgCACQgbAYgmAAIgBAAIAAAAQgMAAgNgDIgBAAQg5gLgwg0Qg0g5gqhXQguhhgKhdQAKBdAuBhQAqBXA0A5QAwA0A5ALIABAAQANADAMAAIAAAAIABAAg");
            this.shape_1.setTransform(0.0049,2.3329);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-21,-30,44.1,58.1);
        
        
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
        
            // 图层_19
            this.instance = new lib.补间21("synched",0);
            this.instance.setTransform(2.6,49.95,0.3985,0.3985,-44.9969,0,0,-0.2,0);
            this.instance._off = true;
        
            this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).to({regX:-0.3,scaleX:0.3805,scaleY:0.3805,rotation:-22.4944,x:-20.6,y:23.2},13).to({regX:-0.4,regY:0.1,scaleX:0.3722,scaleY:0.3722,rotation:-19.0359,x:-29.05,y:10.8},6).to({regY:-0.4,scaleX:0.3625,scaleY:0.3625,rotation:-14.9968,x:-38.75,y:-3.75,alpha:0},7).to({_off:true},1).wait(36).to({_off:false,regX:-0.2,regY:0,scaleX:0.3985,scaleY:0.3985,rotation:-44.9969,x:2.6,y:49.95,alpha:1},0).to({regX:-0.3,scaleX:0.3805,scaleY:0.3805,rotation:-22.4944,x:-20.6,y:23.2},13).to({regX:-0.4,regY:0.1,scaleX:0.3722,scaleY:0.3722,rotation:-19.0359,x:-29.05,y:10.8},6).to({regY:-0.4,scaleX:0.3625,scaleY:0.3625,rotation:-14.9968,x:-38.75,y:-3.75,alpha:0},7).to({_off:true},1).wait(7));
        
            // 图层_18
            this.instance_1 = new lib.补间21("synched",0);
            this.instance_1.setTransform(2.6,49.95,0.3985,0.3985,-44.9969,0,0,-0.2,0);
            this.instance_1._off = true;
        
            this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).to({regX:-0.3,scaleX:0.3805,scaleY:0.3805,rotation:-22.4944,x:-20.6,y:23.2},13).to({regX:-0.4,regY:0.1,scaleX:0.3722,scaleY:0.3722,rotation:-19.0359,x:-29.05,y:10.8},6).to({regY:-0.4,scaleX:0.3625,scaleY:0.3625,rotation:-14.9968,x:-38.75,y:-3.75,alpha:0},7).to({_off:true},1).wait(87));
        
            // 头
            this.instance_2 = new lib.头("synched",0);
            this.instance_2.setTransform(55,28.85,1,1,-4.2467,0,0,18.5,25.5);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:18.4,regY:25.4,rotation:4.2354,x:54.9,y:28.75,startPosition:60},60).to({regX:18.5,regY:25.5,rotation:-4.2467,x:55,y:28.85,startPosition:0},69).wait(1));
        
            // 左手
            this.instance_3 = new lib.补间19("synched",0);
            this.instance_3.setTransform(17.6,50.5,1,1,0,0,0,-5,-25.5);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:-25.4,rotation:8.9672,x:17.55,y:50.55},30).to({regY:-25.5,rotation:7.9816,x:17.6,y:50.5},37).to({regY:-25.4,rotation:6.2133,y:50.55},37).to({regY:-25.5,rotation:0,y:50.5},25).wait(1));
        
            // 右手
            this.instance_4 = new lib.补间20("synched",0);
            this.instance_4.setTransform(90.45,49,1,1,0,0,0,5,-26);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:7.2151,x:93.95,y:50},30).to({rotation:0,x:90.45,y:49},37).to({regY:-25.9,rotation:-8.471,x:90.5,y:49.1},37).to({regY:-26,rotation:0,x:90.45,y:49},25).wait(1));
        
            // MergedLayer_2
            this.shape = new cjs.Shape();
            this.shape.graphics.f().s("#667D96").ss(4,1,1).p("AqMhPQAygKA6AOQAtALAgAaQATAPAPATQAbAiAOAxAKNhJQgygKg6AOQgsAMghAaQgTAOgPATQgbAigOAx");
            this.shape.setTransform(53.8,128.0959);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FFFFFF").s().p("AGsAlQgHgeAMgWQALgUAXgOQAZgQAmgKQA8gQA/AAIgfCPQgqAcgsANQgWAFgRAAQg4AAgNg9gAGxgPQAQgUASgOQgSAOgQAUgAoWBXQgugNgqgcIgeiPQA/AAA8AQQAmAKAYAPQATAPAPATQANAXgGAeQgOA9g4AAQgRAAgVgFgAmxgWIAAAAgAnTg4QAYAPAKATQgPgTgTgPgAnTg4IAAAAg");
            this.shape_1.setTransform(53.8,129.8858);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(130));
        
            // MergedLayer_4
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f().s("#54962B").ss(3,1,1).p("Apzj4QBDAeC/ASQAJABAIAAQADAAACABQALABAKAAQAEABAEAAQADAAADABQAEAAADAAQAFABAEAAQAGAAAFAAQAGABAFAAIMagYQAHgBAIAAIAIgBIA4gGQAPgBAPgCIgRDIIjIBUQgsAAg0AWQgBABgCABIgzAdQgJAHgIAHQgGAFgFAGIg+BmIhBAGQgLABgLABIgxADQgBAAgCAAQgBAAgCABIgnABQgGAAgFAAIgkAAIiSgNQgLgnglgsQgBgBAAAAQgCgDgCgCIgjgiQgCgDgDgCQAAAAgBAAQAAgBgBAAQgCgCgCgBIgCgBIiMhBQgFgBgEgBIiWgjQgMgqgIg0IgBgHQgBgFgBgEIgBgFQgBgLgBgLg");
            this.shape_2.setTransform(54.8625,125.875);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#8CC161").s().p("AjLDiQgBgrg0gzQgSgSgWgQIgBgBIgBgBIgEgCIgCgBIACABIAEACIgGgDIiNhBQhGgXhZgOIgWhtIAAgCIgBgEIAAAAQBHASBWASQCrAlBMACIhQAyIAfALQAqAMAuAHQBVALCGgEQCxgHBigjIgxgnIB5gXQB7gaAOgTIAvhAIgug0IAOgCIAIAAIA4gGIAegDIgSDHIjIBVQgrAAg0AWIgEABIgyAeIgRAOIARgOIAygeIAEgBQA0gWArAAQgzAGg4AZQggAQgZATIgCABQg6AtgPBEIhCAGIhYAFIgnACIgkAAg");
            this.shape_3.setTransform(55,126.9);
        
            this.shape_4 = new cjs.Shape();
            this.shape_4.graphics.f("#BCDE9C").s().p("AirDsICSANQhaAAg4gNgAAxD3IBZgFIgWACIAWgCIBBgGQAPhEA6gtIACgBIgNANIALgMIgLAMIg+BlQgoAFgvADIgxADIgDAAIgDAAIgoACIgLAAIAngCgAjbCZIgBgCIgEgEIgjgiIgFgFQAXARASASQAzAyABArQgLgnglgsgAiXApQgvgGgpgNIgggLIBQgxQhLgDisglQhVgShHgSIgDgWIABhwQBDAeC/ASIARABIAFABIAVACIAIAAIAGABIAHAAIAJABIALAAIALABIMagYIAPgBIgPABIAXgCIgIABIgOABIAuA0IguBAQgPATh7AbIh5AWIAyAnQhjAkixAGIhHABQhWAAg9gIgAmlAkIiWgjQBZAOBGAXIgJgCgApPhdIgBgHIgBgHIAWBsQgMgqgIg0g");
            this.shape_4.setTransform(51.7625,125.875);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(130));
        
            // MergedLayer_6
            this.shape_5 = new cjs.Shape();
            this.shape_5.graphics.f().s("#667D96").ss(4,1,1).p("AjABaQiRAthGAeQg7AZgmAGQgxAIg7gOQhFgRhAhFQhGhLADhJQABgBgBgBQABgBgBAAQABgBgBgBQABgEAAgEQABgCAAgBIAIgMIA7hUIABgBQACgCACgBQADgCADgCQBBgpBAADQAYABAsAMQAnAKA1ATQA6AVAwAUICRBVgADABfQCRAtBGAeQA7AZAmAGQAyAIA6gOQBGgRBAhFQBGhLgDhJQAAgBAAgBQAAAAAAgBQAAgBAAAAQgBgFgBgEQAAgBAAgCIgIgLIg7hVIgBgBQgCgBgBgBQAAAAgBgBQAAAAgBAAQgBgBgBAAQgCgCgBgBQgBgBgCAAQhAgog+ADQgYABgtAMQgmALg1ASQg6AVgxAUIiRBVg");
            this.shape_5.setTransform(53.8,139.9986);
        
            this.shape_6 = new cjs.Shape();
            this.shape_6.graphics.f("#AACDE2").s().p("AH4DCQglgGg7gZQhHgeiQgtIAAh8ICRhVQAwgUA6gVQA1gSAngLQgiANgfAZQhKA6gEA2IAIAYQALAcASAWQA7BIBngWQBugXArgeQAPgJA1g5QgDgSgHgTIAIALIAAADIACAJIAAABIAAABIAAACQADBJhGBLQhABFhGARQgmAJgiAAQgSAAgSgDgApkC3QhFgRhAhFQhGhLADhJIAAgCIAAgBIAAgBIABgJIABgDIAIgLQgHATgDASQA1A5AOAJQAtAeBsAXQBoAWA6hIQATgWAMgcIAIgYQgGg2hJg6QgfgZghgNQAmALA1ASQA6AVAxAUICRBVIAAB8QiSAthFAeQg7AZgnAGQgRADgSAAQgiAAgngJgALjihIAAgBIACABIACACIABABIgFgDgArmikIAEgDIgFAEgArhinIgBAAIgEADIAFgDgAriinIAAAAg");
            this.shape_6.setTransform(53.8,140.6683);
        
            this.shape_7 = new cjs.Shape();
            this.shape_7.graphics.f("#FFFFFF").s().p("AGuBfQgSgWgLgdIgIgZQAEg1BKg5QAfgZAigNQAsgNAYgBIABAAIAGAAIAAAAIABAAQA6AAA7AkIABABIADACIADACIACABIABABIAAAAIAFAEIA7BUQAHASADASQg1A6gPAKQgrAdhuAXQgYAFgWAAQhGAAgug2gApQCLQhsgXgtgdQgOgKg1g6QADgSAHgSIA7hUIAFgEIABgBQAjgbAygLQA9gNA5AXQAhANAfAZQBJA5AGA1IgIAZQgMAdgTAWQgtA2hGAAQgWAAgZgFgArchtIgGAEIAGgEIABgBQA9gmA7AAIABAAIAAAAIAFAAIACAAQAYABAtANQgtgNgYgBIgCAAIgFAAIAAAAIgBAAQg7AAg9AmIgBABgALohgQAaAVARAeQAKARAGAQgAsSgyQASgeAZgVIg7BUQAGgQAKgRgALahqIgBgBQg7gkg6AAIgBAAIAAAAIgGAAIgBAAQgYABgsANQA4gXA9ANQAtAKAgAXIAAAAg");
            this.shape_7.setTransform(53.8,134.5212);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(130));
        
            // body
            this.shape_8 = new cjs.Shape();
            this.shape_8.graphics.f().s("#FFFFFF").ss(4,1,1).p("AoMgJIQZAT");
            this.shape_8.setTransform(54.475,114.65);
        
            this.shape_9 = new cjs.Shape();
            this.shape_9.graphics.f().s("#667D96").ss(4,1,1).p("AIGIGIBdh+QABh0gHiRQgOkhgoiVQgOg0gIhAQgHg7ADgWQABgGABgDQAEgIAHAHIgLABIwWAlQgCAagDAYQgIBMgQA1QgDALgDALQAAABAAABQgTBGgMBUQgDAQgCAQQgCANgBAMQgcDfARD0IBJBd");
            this.shape_9.setTransform(55.1601,63.831);
        
            this.shape_10 = new cjs.Shape();
            this.shape_10.graphics.f("#AACDE2").s().p("AIoCPQgmgngHgXQgIgxgJgZQgPgugigDQgOAAiNASQh6AQgXgNQgZgPAXgHQAhgFAMgEIB7glQBrghAcgKQApgOAxgWIAJBqIAwDwQgSgPgTgUgApFCHIAfiaIAAgCIAGgWQAQg1AJhMQAqASAkANQAbAKBsAhIB6AlQAMAEAiAFQAXAHgZAPQgXANh6gQQiNgSgOAAQghADgRAvQgIAYgJAxQgFAXgnAnQgSASgRAPIAFggIgFAgIgCACgAobhHIAIhqIAMAFQgJBMgQA1IgGAWgAoHisIAAAAg");
            this.shape_10.setTransform(54.75,38.4);
        
            this.shape_11 = new cjs.Shape();
            this.shape_11.graphics.f("#FFFFFF").s().p("AoTHyIhJhdQgRj0AcjfIADgZQARgOASgSQAmgnAGgXQAJgxAIgaQAQgvAigCQAOgBCNATQB6AQAXgOQAZgOgXgHQgigFgMgEIh6glQhsghgbgKQgkgNgrgSIAFgyIQWglQAEgIAHAHIgLABIgCAJQgDAWAHA7QAIBAAOA0QAoCVAOEhQAHCRgBB0IhdB+gAG1koQAhACAQAvQAJAaAIAxQAGAXAnAnQATATASAPIgxjwIgIhqQgyAVgoAPQgcAKhrAhIh7AlQgMAEghAFQgXAHAZAOQAXAOB6gQQCFgSAUAAIACAAgAoqkRIgfCaQAMhUAThGg");
            this.shape_11.setTransform(55.1601,63.831);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(130));
        
            // 尾巴阴影
            this.shape_12 = new cjs.Shape();
            this.shape_12.graphics.f("#AACDE2").s().p("AkOCKQA1gQBIgmQCNhNBThxQBFheBEgjQAjgSAUABQgXASgnAxQhOBhhKCXQgrBZg7ApQhCAsh4AQg");
            this.shape_12.setTransform(132.7,92.7224);
        
            this.shape_13 = new cjs.Shape();
            this.shape_13.graphics.f("#AACDE2").s().p("AkOCHIATgGQAbgJAegOQAXgLAZgNQBxg+BMhVQASgUARgWQAzhEA1gkQARgNASgIQAhgSAVABQgWARgjAqIgFAHQg6BHg3BkQgUAjgUAoQgcA5gjAlQgTAUgVAOQg8AohqARIgRACg");
            this.shape_13.setTransform(132.675,93.0223);
        
            this.shape_14 = new cjs.Shape();
            this.shape_14.graphics.f("#AACDE2").s().p("AkOCEIATgGQAagJAegOQAYgKAZgOQBvg8BNhVQASgUAQgVQA0hDA1gjQASgMARgJQAigQAVABQgWAQgkAqIgFAGQg6BGg3BjQgUAjgUAoQgdA4giAlQgTATgVAOQg9AnhoARIgSABg");
            this.shape_14.setTransform(132.675,93.3188);
        
            this.shape_15 = new cjs.Shape();
            this.shape_15.graphics.f("#AACDE2").s().p("AjmDyIgohxIATgFQAagJAfgOQAWgKAagOQBtg7BOhWQASgUARgUQAzhBA3giQARgMARgIQAigQAVACQgXAPgjApIgGAHQg6BEg3BiIgoBKQgdA4gjAkQgTATgUAOQg9AnhoAQIgQAAg");
            this.shape_15.setTransform(132.65,93.6186);
        
            this.shape_16 = new cjs.Shape();
            this.shape_16.graphics.f("#AACDE2").s().p("AjnDvIgnhxIATgFQAagJAfgNQAXgKAYgOQBsg7BOhVQATgUAQgUQA0hAA3ggQASgLARgIQAhgPAWABQgXAPgkAoIgFAHQg8BDg2BiIgoBJQgdA3gkAjQgSATgVAOQg8AmhoAQIgQAAg");
            this.shape_16.setTransform(132.65,93.9469);
        
            this.shape_17 = new cjs.Shape();
            this.shape_17.graphics.f("#AACDE2").s().p("AjnDqIgnhvIAUgFQAagJAegNQAWgKAZgOQBqg5BPhWIAjgoQA0g9A4ggQASgKARgIQAhgOAWACQgXAOgkAnIgFAHQg8BCg3BhIgoBIQgeA2gjAjQgTASgVAOQg8AmhmAQIgQgCg");
            this.shape_17.setTransform(132.625,94.2927);
        
            this.shape_18 = new cjs.Shape();
            this.shape_18.graphics.f("#AACDE2").s().p("AjnDmIgnhvIATgFQAagIAegNQAXgKAZgNQBog5BQhWIAjgnQA0g8A5geQASgKARgHQAhgOAWACQgYAOgkAmIgFAHQg8BBg3BgIgoBHQgeA2gjAiQgTASgVANQg9AmhlAPIgPgCg");
            this.shape_18.setTransform(132.625,94.6175);
        
            this.shape_19 = new cjs.Shape();
            this.shape_19.graphics.f("#AACDE2").s().p("AjnDiIgmhuIATgFQAagIAdgNQAXgKAYgNQBog4BQhWIAjgmQA0g7A6gdQASgJASgHQAfgNAXACQgYAOgkAlIgFAGQg9BBg2BeIgpBHQgeA1gkAiQgTASgUANQg9AlhlAPIgOgDg");
            this.shape_19.setTransform(132.6,94.9672);
        
            this.shape_20 = new cjs.Shape();
            this.shape_20.graphics.f("#AACDE2").s().p("AjoDeIglhuIATgEQAagIAdgNQAXgKAYgNQBlg3BRhWIAkgmQA0g5A7gbQARgJASgHQAggMAXACQgYANglAlIgEAGQg/BAg1BdIgqBGQgeA1gjAhQgTARgVANQg9AlhjAPIgPgEg");
            this.shape_20.setTransform(132.6,95.3107);
        
            this.shape_21 = new cjs.Shape();
            this.shape_21.graphics.f("#AACDE2").s().p("AjnDaIgmhtIATgEQAagHAegNQAWgKAYgNQBkg2BRhWIAkgmQA0g3A8gaQASgJARgGQAggLAWACQgYANgkAkIgFAFQg/A/g1BdIgpBFQgfA0gkAgQgSARgVANQg9AkhjAPIgNgFg");
            this.shape_21.setTransform(132.575,95.6352);
        
            this.shape_22 = new cjs.Shape();
            this.shape_22.graphics.f("#AACDE2").s().p("AjoDWIglhsIATgEQAZgHAegNQAXgKAXgNQBjg1BShWIAkglQAzg2A9gZQATgIARgFQAggLAWACQgYAMgkAkIgGAFQg/A+g1BcIgpBEQggAzgjAgQgTARgVAMQg9AkhiAOIgNgFg");
            this.shape_22.setTransform(132.575,95.9596);
        
            this.shape_23 = new cjs.Shape();
            this.shape_23.graphics.f("#AACDE2").s().p("AjoDSIglhsIATgDQAZgHAfgNQAVgJAYgNQBhg1BThWIAkgkQA0g0A9gYQATgIARgFQAggKAWACQgZAMgjAjIgGAFQg/A9g1BbIgqBDQggAzgjAfQgTAQgVANQg+AjhgAOIgNgGg");
            this.shape_23.setTransform(132.55,96.3333);
        
            this.shape_24 = new cjs.Shape();
            this.shape_24.graphics.f("#AACDE2").s().p("AjnDOIgmhrIATgEQAagGAegNQAVgJAYgNQBfg0BThWIAlgkQA0gyA/gXQASgHARgFQAfgJAXACQgZAMgkAhIgFAGQhBA7g0BaIgqBDQggAygkAfQgTAQgVAMQg9AjhgAOIgLgHg");
            this.shape_24.setTransform(132.525,96.6568);
        
            this.shape_25 = new cjs.Shape();
            this.shape_25.graphics.f("#AACDE2").s().p("AjoDKIglhqIATgDQAZgGAegNQAWgKAXgMQBegzBUhXQASgSATgQQAzgxBAgWQATgHARgEQAfgIAXACQgZALgkAhIgGAFQhBA7g0BZIgqBCQghAxgkAeQgSAQgVAMQg+AihfAOIgLgIg");
            this.shape_25.setTransform(132.525,96.981);
        
            this.shape_26 = new cjs.Shape();
            this.shape_26.graphics.f("#AACDE2").s().p("AjnDGIglhqIATgDQAZgFAdgNQAWgJAXgNQBcgxBVhYQASgSATgQQA0gvBBgUQASgHASgDQAegIAXACQgZALgkAgIgHAFQhBA5g0BZIgqBBQghAwgkAeQgSAPgWAMQg9AihfANIgJgIg");
            this.shape_26.setTransform(132.5,97.305);
        
            this.shape_27 = new cjs.Shape();
            this.shape_27.graphics.f("#AACDE2").s().p("AjoDCIgkhpIATgCQAZgGAdgNQAWgJAXgMQBagwBWhYQARgSAUgQQA0gtBBgTQATgGARgEQAegHAYADQgaAKgkAfIgGAFQhCA5g0BXQgVAigWAfQghAvgjAeQgTAOgVAMQg+AhhdANIgKgJg");
            this.shape_27.setTransform(132.5,97.6421);
        
            this.shape_28 = new cjs.Shape();
            this.shape_28.graphics.f("#AACDE2").s().p("AjoC+IgkhoIATgDQAZgFAegMQAVgJAWgNQBZgvBWhYQASgSATgPQA0gsBDgSQATgFARgDQAegHAXADQgZAKgkAeIgGAFQhDA3g0BXQgVAhgVAfQgiAvgkAcQgSAPgVALQg+AhhdANIgJgKg");
            this.shape_28.setTransform(132.475,97.9903);
        
            this.shape_29 = new cjs.Shape();
            this.shape_29.graphics.f("#AACDE2").s().p("AjoC6IgkhoIASgCQAZgFAegMQAWgJAWgMQBXgvBXhYQASgRATgPQA0grBEgQQATgFARgDQAegGAXADQgaAKgkAdIgGAFQhDA2g0BWQgVAhgVAeQgiAuglAcQgSAPgVALQg+AghcANIgIgLg");
            this.shape_29.setTransform(132.475,98.3132);
        
            this.shape_30 = new cjs.Shape();
            this.shape_30.graphics.f("#AACDE2").s().p("AjoC2IgkhnIASgCQAZgEAegNQAVgJAXgMQBWgtBXhYQARgSAVgOQAzgpBFgPQASgFASgCQAegFAXADQgaAJglAdIgFAEQhEA2g0BUQgUAhgXAeQghAtglAcQgSAOgVAKQg+AghcANIgHgMg");
            this.shape_30.setTransform(132.45,98.6438);
        
            this.shape_31 = new cjs.Shape();
            this.shape_31.graphics.f("#AACDE2").s().p("AjpCyIgjhmIASgCQAZgEAegNQAWgIAVgMQBUgtBYhYQASgRAUgPQA0gnBFgOQAUgEARgCQAdgEAYADQgbAJgkAbIgGAFQhFA0gzBUQgUAhgXAdQgiAsglAcQgSANgVALQg+AfhbAMIgHgMg");
            this.shape_31.setTransform(132.45,98.9769);
        
            this.shape_32 = new cjs.Shape();
            this.shape_32.graphics.f("#AACDE2").s().p("AjoCuIgkhmIATgBQAZgEAegMQAUgJAWgMQBTgsBYhYQASgRAUgOQA0glBHgNQATgEARgBQAdgEAYADQgbAJgkAaIgGAFQhFAzgzBTQgVAhgWAcQgjAsglAaQgSAOgVAKQg+AfhaAMIgGgNg");
            this.shape_32.setTransform(132.425,99.3229);
        
            this.shape_33 = new cjs.Shape();
            this.shape_33.graphics.f("#AACDE2").s().p("AjpCqIgjhlIATgBQAYgEAegMQAVgIAWgMQBRgrBZhZQASgQAUgOQA0gkBHgLIAlgFQAdgCAYADQgbAIglAaIgGAEQhGAygyBSQgVAhgXAcQgjArglAaQgSANgVAKQg+AehZAMIgGgOg");
            this.shape_33.setTransform(132.425,99.6432);
        
            this.shape_34 = new cjs.Shape();
            this.shape_34.graphics.f("#AACDE2").s().p("AkLBCIASgBQAZgEAegMQBggnBzhwQA+g7BlgPQAygHAmAFQgaAIglAZQhKAyg1BUQg3BWg9AqQhIAwh2AQg");
            this.shape_34.setTransform(132.4,99.962);
        
            this.shape_35 = new cjs.Shape();
            this.shape_35.graphics.f("#AACDE2").s().p("AjlCsIgNgeIgbhKIASgBIABAAQAYgEAegMIABAAQAPgGAQgIQBTgqBdhbIAFgFQARgQAUgOQA2gkBIgKIALgCIAdgBQAbgBAXACQgIACgKAFIgHAEIgQAKIgTALQgjAYgjAhQgUAUgSAYQgMAQgKAQIgIAMQgZAkgaAdQgbAfgeAVIgKAHQgaAQggANQg1AVhEAJIgEgJg");
            this.shape_35.setTransform(132.525,100.0083);
        
            this.shape_36 = new cjs.Shape();
            this.shape_36.graphics.f("#AACDE2").s().p("AjkCvIgPgdIgbhLIATgBIAAAAQAZgEAdgMIABAAQAQgHAQgIQBTgrBehbIAFgFQARgRAUgNQA3gmBHgKIALgCIAdgBQAbgBAXACIgMAHIgIAEIgQAKIgTALQgjAWglAiQgUATgTAYIgWAgIgIAMQgZAkgbAeQgbAfgdAVIgKAHQgbASgfANQg1AVhFAKIgFgHg");
            this.shape_36.setTransform(132.625,100.0333);
        
            this.shape_37 = new cjs.Shape();
            this.shape_37.graphics.f("#AACDE2").s().p("AjjCxIgQgcIgchLIASgCIABAAQAZgEAdgMIABAAQAPgGARgJQBVgrBdhcIAGgFQAQgRAVgOQA4gnBFgKIALgBIAegBQAagBAYACIgGAFIgJAEIgQAKIgUALQghAWgoAiQgVASgTAZIgWAfIgJAMQgZAkgbAeQgaAggeAWIgKAHQgbASgfANQg1AXhFAKIgGgGg");
            this.shape_37.setTransform(132.75,100.0438);
        
            this.shape_38 = new cjs.Shape();
            this.shape_38.graphics.f("#AACDE2").s().p("AjiCzIgSgcIgchKIASgCIABAAQAZgFAdgMIABAAQAQgHAQgIQBXgtBdhcIAFgFQARgQAUgPQA6gpBEgJIALgCQAIgBAWABQAagBAYACIgBAEIgJAFIgQAJIgUALQghAVgqAiQgVASgUAYIgXAfIgJAMQgaAkgaAfQgbAhgdAWIgKAHQgaATggANQg1AYhFAKIgHgEg");
            this.shape_38.setTransform(132.875,100.0667);
        
            this.shape_39 = new cjs.Shape();
            this.shape_39.graphics.f("#AACDE2").s().p("AjiC1IgUgaIgdhMIATgCIAAAAQAZgEAdgNIABAAQAQgGARgJQBXgtBehdIAFgFQARgRAUgOQA7grBCgJIALgCIAfAAIAyABIAEAEIgJAEQgMAGgEAEQgGADgOAIQggAUguAiQgVARgUAYIgXAgIgJALQgaAkgbAfQgbAigdAXIgKAHQgaATgfAOQg1AYhGALIgHgDg");
            this.shape_39.setTransform(133.175,100.0875);
        
            this.shape_40 = new cjs.Shape();
            this.shape_40.graphics.f("#AACDE2").s().p("AjkC3IgVgZIgehMIATgCIABAAQAZgFAcgMIACAAQAQgHARgJQBYgvBehcIAFgFQARgRATgOQA9gtBBgJIALgCIAfABIAzABIAJACIgKAFQgMAGgDAEIgWALQgeASgwAjQgWAQgUAYIgYAgIgJALIg1BEQgbAigdAXIgKAIQgaAUgfAOQg1AYhGAMIgJgCg");
            this.shape_40.setTransform(133.55,100.0917);
        
            this.shape_41 = new cjs.Shape();
            this.shape_41.graphics.f("#AACDE2").s().p("AjmC5IgWgYIgfhMIATgCIABAAQAZgFAdgNIABAAQAQgHARgJQBbgwBdhcIAEgFQASgRATgPQA+guBAgJIALgBIAfAAIA0ABIAOACIgLAFQgNAGgCADQgGACgQAJQgdASg0AiQgVAQgWAZIgXAfIgJALIg2BEQgaAjgeAYIgKAIQgaAUgfAOQg1AahGAMIgKgBg");
            this.shape_41.setTransform(133.95,100.0917);
        
            this.shape_42 = new cjs.Shape();
            this.shape_42.graphics.f("#AACDE2").s().p("AkACkIgfhMIAUgDIABAAQAYgFAdgNIABAAIAigQQBbgxBehdIAFgFQARgRATgPQBAgwA+gIIALgCIAfABIA0ABIAUABIgLAFQgOAGgCAEQgFABgRAKQgcAQg2AjQgWAPgWAYIgYAfIgKALIg1BFQgbAjgdAZIgKAIQgaAVgeAPQg1AahIAMIgKABIgZgXg");
            this.shape_42.setTransform(134.329,100.1438);
        
            this.shape_43 = new cjs.Shape();
            this.shape_43.graphics.f("#AACDE2").s().p("AkDCmIgghMIAUgDQAZgFAegOQARgGASgKQBcgyBdhcQAUgVAWgRQBHg3BCgEIAfABQAnACAmgCIgLAGQgOAHgBADQgMAChfA7QgXAOgWAZIgiAqIg2BFQgfAqgiAbQgaAVgfAPQg5AdhOAOIgbgXg");
            this.shape_43.setTransform(134.708,100.2);
        
            this.shape_44 = new cjs.Shape();
            this.shape_44.graphics.f("#AACDE2").s().p("AkFCoIgBgBIgfhLIAUgEQAZgFAegNIAigQIABgBQBegyBdheQARgRATgQIAGgFQA7gvA9gJIASgCIAfABQAnACAngBQACABgLAFIgIAEQgGADgBACQgPACheA4IgEADQgVAOgUAWIgjApIg3BGIAAAAQgfAqgiAcQgZAVgcAPIgDACQg6AdhPANIgcgUg");
            this.shape_44.setTransform(134.909,100.325);
        
            this.shape_45 = new cjs.Shape();
            this.shape_45.graphics.f("#AACDE2").s().p("AkFCqIgBgBIgghMIATgDQAagGAegOIAigPIABgBQBfgzBdheQARgSATgQIAGgFQA6guA/gKQAJgBAJAAIAgABIBOACQACAAgKAFIgGAEQgGADgBACQgTAChbA2IgEADQgWANgVAWIgkApQgdAjgaAjIAAABQgfAqgiAcQgZAWgdAOIgDACQg5AfhQANIgcgSg");
            this.shape_45.setTransform(135.0917,100.475);
        
            this.shape_46 = new cjs.Shape();
            this.shape_46.graphics.f("#AACDE2").s().p("AkHCrIgBgBIghhLIAUgEQAZgGAfgOIAigQIABgBQBgg0BdhdQARgSATgRIAFgEQA6gvBBgIQAJgCAKAAIAgACQAmABApABQACABgJAEIgFAEIgIADQgVAChaA1IgEADQgWAMgVAWIgmApQgdAjgaAkIgBAAQgeArgiAdQgZAWgdAPIgDABQg5AfhQAOIgegRg");
            this.shape_46.setTransform(135.3022,100.6);
        
            this.shape_47 = new cjs.Shape();
            this.shape_47.graphics.f("#AACDE2").s().p("AkICtIgCAAIghhNIAUgDQAagHAegNIAigRIABgBQBig0BcheQARgSATgRIAGgFQA4gvBEgIIASgBIAhACIBQADQACAAgIAFIgEADIgHAEQgZABhZAzIgDACQgXANgWAVIgmApQgeAjgaAjIAAABQgfAsgiAdQgZAWgdAQIgDACQg5AfhRAOIgegPg");
            this.shape_47.setTransform(135.5048,100.725);
        
            this.shape_48 = new cjs.Shape();
            this.shape_48.graphics.f("#AACDE2").s().p("AkKCwIgBgCIgihMIAUgEQAagGAegPIAjgQIABgBQBjg1BbheQASgSATgSIAFgFQA3guBHgIIASgBIAhACIBRAEQACAAgGAEIgEAEIgHADQgcABhXAxIgEACQgXANgWAVIgnAoQgeAigbAlIAAAAQgfAsgiAeQgZAXgcAQIgDACQg6AfhRAPIgggMg");
            this.shape_48.setTransform(135.7097,100.85);
        
            this.shape_49 = new cjs.Shape();
            this.shape_49.graphics.f("#AACDE2").s().p("AkLCxIgBAAIgjhNIAUgFQAagGAfgOIAigRIABgBQBkg2BcheIAkglIAGgFQA1guBKgHIASgBIAhACIBRAFQABAAAAABQABAAgBAAQAAABgBABQgBAAgBABIgCAEIgIACQgfABhVAuIgEADQgYANgWAUIgoAoQgfAigaAlIgBABQgeAsgiAfQgZAXgdAQIgDACQg6AghSAPIgggLg");
            this.shape_49.setTransform(135.9029,100.975);
        
            this.shape_50 = new cjs.Shape();
            this.shape_50.graphics.f("#AACDE2").s().p("AkMCzIgCgBIgjhNIAUgEQAagHAfgOIAjgRIABgBQBlg3BbhfIAlglIAFgFQA0guBMgGIATgBIAiACIBRAGQABAAAAAAQABAAAAABQgBABAAAAQgBABgBABIgBADIgIACQgiAAhUAtIgDACQgZANgWAUIgpAnQggAjgaAlIgBABQgeAtgiAfQgZAXgdARIgDACQg6AhhSAPIghgJg");
            this.shape_50.setTransform(136.1143,101.125);
        
            this.shape_51 = new cjs.Shape();
            this.shape_51.graphics.f("#AACDE2").s().p("AkOC1IgBAAIgkhOIAVgFQAZgHAfgOIAjgRIABgBQBng4BbhfIAkglIAFgGQA0gtBOgGIATAAIAiABIBSAHQABAAAAAAQABABAAAAQAAABgBAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABAAIgIACQglAAhTArIgDABQgZAOgXASQgZAXgRARQggAigbAmIgBACQgeAtgiAfQgZAYgdARIgDACQg5AhhTAPIgjgGg");
            this.shape_51.setTransform(136.3375,101.25);
        
            this.shape_52 = new cjs.Shape();
            this.shape_52.graphics.f("#AACDE2").s().p("AkQC2IgBAAIgkhOIAUgFQAagHAegOIAjgRIABgBQBpg5BbhfIAjgmIAGgGQAygtBRgFIATgBIAiACIBTAHQABABABAAQAAAAABABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQAAAAABABIgJABQgoAAhRApIgEABQgZANgXASQgZAWgSASQggAigbAmIgBABQgeAugiAhQgZAYgdAQIgDACQg6AjhTAQIgkgGg");
            this.shape_52.setTransform(136.6,101.4);
        
            this.shape_53 = new cjs.Shape();
            this.shape_53.graphics.f("#AACDE2").s().p("AkSC4IgCAAIglhOIAVgFQAagIAfgOIAjgSIABgBQBpg5BchfIAjgnIAFgFQAxguBUgEIATAAIAiABQAnADAtAGQABAAAAAAQABAAABABQAAAAAAABQAAAAAAABIADACIgJABQgrgBhQAnIgDACQgaANgYASQgZAVgTASQghAhgaAnIgBACQgeAugiAhQgZAZgdARIgDACQg6AihUAQIgkgDg");
            this.shape_53.setTransform(136.925,101.5125);
        
            this.shape_54 = new cjs.Shape();
            this.shape_54.graphics.f("#AACDE2").s().p("AkVC7IgCgBIglhOIAVgGQAZgHAggPIAjgRIABgBQBrg6BbhgIAjgnIAGgGQAvgtBWgEIAUAAIAiACQAnADAuAGQAEABAAACIAEACIgJABQgugChOAlIgDACQgbANgYARQgZAUgUATQghAhgbAoIgCACQgdAugiAhQgZAagdARIgDACQg6AjhVAQIglAAg");
            this.shape_54.setTransform(137.25,101.6375);
        
            this.shape_55 = new cjs.Shape();
            this.shape_55.graphics.f("#AACDE2").s().p("AkZC8IgmhPIAVgGQAagIAfgPIAkgRIAAgBQBsg7BbhgIAjgoIAGgFQAugtBZgEIAUAAIAjACQAnADAtAHQAFABABACIAFACIgJAAQgxgChNAjIgDACQgbANgZARQgZATgUATQgiAhgaAoIgCACQgdAvgjAiQgZAagdARIgDACQg6AkhVARIgmABIgCAAg");
            this.shape_55.setTransform(137.55,101.825);
        
            this.shape_56 = new cjs.Shape();
            this.shape_56.graphics.f("#AACDE2").s().p("AkcC8IgmhPIAVgFQAagJAfgPIAjgSIABgBQBug7BahgIAjgoIAGgGQAtgtBcgDIATAAIAjADQAnADAvAHIAHACIAGACIgJAAQg0gChLAiIgDABQgcAMgZARQgaASgUAUQgjAggaApIgCADQgdAvgiAiQgaAbgdASIgDABQg6AlhWAQIgnADIgCAAg");
            this.shape_56.setTransform(137.875,102.05);
        
            this.shape_57 = new cjs.Shape();
            this.shape_57.graphics.f("#AACDE2").s().p("AkeC+IgnhQIAUgGQAbgIAfgQIAjgRIACgBQBug9BbhgIAjgpIAFgGQAsgsBegDIAUABIAjACQAnADAwAIIAIACIAHACIgJgBQg4gChIAfIgDABQgdANgZAQQgaASgWAUQgjAggaAqIgCACQgdAwgjAjQgZAagdASIgDACQg6AlhWASIgoAFIgCAAg");
            this.shape_57.setTransform(138.2,102.275);
        
            this.shape_58 = new cjs.Shape();
            this.shape_58.graphics.f("#AACDE2").s().p("AlJBvQAvgMBEgkQCHhJBnh/QApgzBogBQA9gBBkATQhAgHhPAhQhrAtg8BjQg0BVhCArQhJAwh2AQg");
            this.shape_58.setTransform(138.525,102.4975);
        
            this.shape_59 = new cjs.Shape();
            this.shape_59.graphics.f("#AACDE2").s().p("AlIBwIAAgBIAZgHQAegKAjgSIAZgNQBsg6BYhdIAqgxQAigpBJgJIAmgDQA1gCBPANIAbAGQg9gGhMAfIgFADQhrAug8BiIgQAXQgtBFg4AlIgIAFQhBAohkAQIgSACg");
            this.shape_59.setTransform(138.45,102.4121);
        
            this.shape_60 = new cjs.Shape();
            this.shape_60.graphics.f("#AACDE2").s().p("AlHBxIAAgBIAZgHQAegKAkgSIAYgMQBsg7BYhdQAVgYAVgZQAigpBJgKQASgDATgBQA2gDBPANIAZAGQg8gEhMAgIgGACQhpAvg9BiIgPAYQguBFg4AkIgIAFQhBAphkAQIgSACg");
            this.shape_60.setTransform(138.375,102.3469);
        
            this.shape_61 = new cjs.Shape();
            this.shape_61.graphics.f("#AACDE2").s().p("AlGByIAAgBIAZgIQAegJAkgSIAYgNQBrg6BZheIAqgxQAigpBJgLIAlgEQA3gEBOANIAYAGQg8gEhMAhIgGADQhoAwg+BhIgPAYQguBGg3AkIgIAFQhBAphlAQIgRABg");
            this.shape_61.setTransform(138.3,102.2529);
        
            this.shape_62 = new cjs.Shape();
            this.shape_62.graphics.f("#AACDE2").s().p("AlGBzIAAgBIAZgHQAfgKAjgSIAYgNQBsg6BZheQAVgYAVgZQAigpBJgMQARgDAUgBQA2gFBOANIAXAGQg8gEhLAiIgGADQhoAxg9BhIgQAYQguBGg3AlIgIAFQhBAphkAPIgRABg");
            this.shape_62.setTransform(138.25,102.1556);
        
            this.shape_63 = new cjs.Shape();
            this.shape_63.graphics.f("#AACDE2").s().p("AlFB0IAAgBIAZgHQAfgKAjgSIAYgMQBsg7BZheIAqgxQAjgpBHgNQASgDATgBQA4gHBNANIAVAGQg7gChLAjIgGACQhoAyg9BhIgPAYQgvBHg2AkIgIAFQhBAqhlAPIgRABg");
            this.shape_63.setTransform(138.175,102.0775);
        
            this.shape_64 = new cjs.Shape();
            this.shape_64.graphics.f("#AACDE2").s().p("AkeDFIgmhQIAAgBIAZgHQAegKAlgSIAYgMQBrg7BZhfIAqgxQAjgpBHgNQASgDATgCQA4gIBNANIATAGQg6gBhMAkIgFADQhoAyg9BhIgPAZQgvBGg2AlIgIAFQhBAphkAQIgSAAg");
            this.shape_64.setTransform(138.1,101.9726);
        
            this.shape_65 = new cjs.Shape();
            this.shape_65.graphics.f("#AACDE2").s().p("AkdDGIgnhQIAAgBIAagHQAegKAkgSIAYgMQBsg6BZhgIAqgxQAjgpBHgOQASgDATgCQA5gJBLANIATAGQg7gBhLAlIgGADQhmAzg9BhIgQAZQgvBHg1AkIgIAFQhBAqhlAPIgRAAg");
            this.shape_65.setTransform(138.025,101.8909);
        
            this.shape_66 = new cjs.Shape();
            this.shape_66.graphics.f("#AACDE2").s().p("AkcDHIgnhRIAAgBIAagHQAegJAkgSIAYgMQBsg7BZhfIArgyQAjgpBGgOQARgEAUgCQA5gKBKAMQAJADAJAEQg7gBhKAmIgGADQhmA1g9BhIgQAYQgvBIg0AkIgIAFQhBAqhmAPIgQAAg");
            this.shape_66.setTransform(137.95,101.8028);
        
            this.shape_67 = new cjs.Shape();
            this.shape_67.graphics.f("#AACDE2").s().p("AkcDIIgmhRIAAgBIAagHQAegJAkgSIAYgMQBsg6BZhhIArgxQAjgpBGgPQARgEAUgDQA6gLBJANIAQAGQg6ABhKAnIgGADQhmA1g9BhIgPAYQgvBIg1AlIgIAFQhAAqhnAPIgQgBg");
            this.shape_67.setTransform(137.875,101.7426);
        
            this.shape_68 = new cjs.Shape();
            this.shape_68.graphics.f("#AACDE2").s().p("AkbDIIgmhQIAAgBIAagHQAegJAkgSIAYgMQBrg6BahhIAqgyQAlgpBFgQIAkgHQA7gMBJANQAIACAGAEQg5ABhKAoIgGADQhmA3g8BgIgQAZQgvBIg1AlIgIAFQhAAqhmAPIgQgCg");
            this.shape_68.setTransform(137.8,101.6561);
        
            this.shape_69 = new cjs.Shape();
            this.shape_69.graphics.f("#AACDE2").s().p("AkbDKIgmhSIAAAAIAagHQAfgJAkgSIAYgMQBsg6BZhiIArgxQAkgpBFgRQARgEATgDQA7gNBIAMQAHACAHAFQg6ABhKApIgFAEQhlA3g9BhIgQAYQgvBJg0AkIgIAGQhBAqhmAPIgQgCg");
            this.shape_69.setTransform(137.75,101.562);
        
            this.shape_70 = new cjs.Shape();
            this.shape_70.graphics.f("#AACDE2").s().p("AkaDLIgmhSIAAAAIAagHQAfgJAkgSIAYgMQBrg6BahiIArgxQAkgpBEgSIAlgIQA7gOBIAMQAGADAGAEQg5ADhKAqIgGADQhkA4g9BhIgQAYQgvBJg0AlIgIAFQhAAqhnAQIgPgDg");
            this.shape_70.setTransform(137.675,101.4981);
        
            this.shape_71 = new cjs.Shape();
            this.shape_71.graphics.f("#AACDE2").s().p("AkaDLIglhRIAAgBIAagGQAegJAkgSIAZgMQBsg6BZhiIArgyQAlgpBDgSQARgFATgDQA9gQBHAMQAGACAEAFQg4ADhKArIgGADQhjA6g+BgIgPAZQgwBJgzAlIgIAFQhAAqhnAQIgQgEg");
            this.shape_71.setTransform(137.6,101.4009);
        
            this.shape_72 = new cjs.Shape();
            this.shape_72.graphics.f("#AACDE2").s().p("AkZDNIgmhSIAAgBIAagGQAggJAkgSIAYgMQBrg6BahjIArgxQAlgpBDgTQASgFASgEQA9gRBGAMQAFADAFAFQg4ADhKAsIgGAEQhjA6g9BgIgQAZQgwBKgzAkIgIAGQg/AqhoAPIgPgDg");
            this.shape_72.setTransform(137.525,101.3017);
        
            this.shape_73 = new cjs.Shape();
            this.shape_73.graphics.f("#AACDE2").s().p("AkZDOIglhSIAAgBIAagGQAfgJAlgSIAYgMQBrg6BahjIArgxQAlgqBDgTQASgGASgDQA+gSBFAMQAEACAEAFQg4AFhJAtIgHADQhiA7g9BgIgPAZQgwBKgzAlIgIAFQg/ArhpAPIgPgEg");
            this.shape_73.setTransform(137.45,101.235);
        
            this.shape_74 = new cjs.Shape();
            this.shape_74.graphics.f("#AACDE2").s().p("AkYDPIglhSIAAgBIAagGQAfgJAlgRIAYgNQBrg5BahkIArgyQAlgpBDgUQARgGATgEQA+gTBFAMQADACADAGQg3AFhKAuIgFADQhiA9g9BfIgQAZQgwBLgzAkIgIAGQg/AqhpAQIgOgFg");
            this.shape_74.setTransform(137.375,101.1427);
        
            this.shape_75 = new cjs.Shape();
            this.shape_75.graphics.f("#AACDE2").s().p("AkXDQIglhSIAAgBIAagGQAggJAjgRIAZgNQBrg5BahkIAsgyQAlgpBCgVQARgGASgEQBAgUBDALQADADACAFQg2AGhKAvIgGADQhhA+g9BfIgQAZQgwBLgyAlIgIAFQhAArhpAPIgNgFg");
            this.shape_75.setTransform(137.3,101.0401);
        
            this.shape_76 = new cjs.Shape();
            this.shape_76.graphics.f("#AACDE2").s().p("AkXDRIglhSIAAgBIAagGQAggJAlgRIAXgMQBrg6BbhlIArgxQAmgqBCgVQARgGASgFQA/gVBDAMQADACACAFQg2AHhLAwIgFAEQhhA+g9BgIgQAZQgwBLgyAkIgIAGQg/ArhpAPIgOgGg");
            this.shape_76.setTransform(137.25,100.9465);
        
            this.shape_77 = new cjs.Shape();
            this.shape_77.graphics.f("#AACDE2").s().p("AkWDSIglhTIAAAAIAagGQAggJAkgRIAYgNQBsg5BZhlIAsgyQAmgpBBgXIAkgLQBAgWBCAMQACACABAFQg2AIhKAxIgFADQhhBAg9BfIgQAZQgwBMgxAkIgIAGQg/ArhqAPIgNgGg");
            this.shape_77.setTransform(137.175,100.8776);
        
            this.shape_78 = new cjs.Shape();
            this.shape_78.graphics.f("#AACDE2").s().p("AkWDTIgkhTIAAAAIAagGQAggJAkgRIAYgNQBsg5BZhlIAtgyQAmgqBAgXQASgGARgFQBBgXBCALQABACABAGQg2AIhKAyIgGADQhfBBg9BfIgQAZQgwBMgxAlIgJAFQg/AshqAPIgNgHg");
            this.shape_78.setTransform(137.1,100.7721);
        
            this.shape_79 = new cjs.Shape();
            this.shape_79.graphics.f("#AACDE2").s().p("AkVDUIglhTIAAAAIAagGQAhgJAkgRIAYgMQBrg5BahnIAtgxQAmgqBAgYIAjgMQBCgYBBALIAAAIQg1AJhKAzIgGAEQhfBBg9BfIgQAZQgwBNgxAkIgIAGQg/ArhqAPIgNgHg");
            this.shape_79.setTransform(137.0375,100.6771);
        
            this.shape_80 = new cjs.Shape();
            this.shape_80.graphics.f("#AACDE2").s().p("AkVDVIglhTIAAAAIAbgGQAggJAkgRIAZgMQBrg5BZhnIAtgyQAngpA/gYQASgIASgFQBBgaBAAMIgBAIQg1AJhJA0IgFAEQhfBCg9BfIgQAaQgxBNgwAjIgIAGQg/AshrAPIgMgIg");
            this.shape_80.setTransform(137.0063,100.5987);
        
            this.shape_81 = new cjs.Shape();
            this.shape_81.graphics.f("#AACDE2").s().p("AkVDWIgkhTIAAgBIAagFQAggJAlgRIAYgMQBrg5BahoIAtgxQAngqA+gZQASgHASgGQBCgbBAAMIgDAIQg0AKhKA1IgFAEQhfBDg8BfIgQAZQgyBOgvAjIgJAGQg+AshrAPIgMgIg");
            this.shape_81.setTransform(137,100.5032);
        
            this.shape_82 = new cjs.Shape();
            this.shape_82.graphics.f("#AACDE2").s().p("AkVDYIgkhUIAAAAIAagGQAhgIAkgSIAYgMQBrg5BahnIAtgyQAngqA/gZQARgIASgGQBDgcA/ALIgFAJQgzAKhKA2IgFAEQhdBEg+BfIgQAaQgxBOgvAjIgJAGQg+AshsAPIgLgIg");
            this.shape_82.setTransform(137,100.3949);
        
            this.shape_83 = new cjs.Shape();
            this.shape_83.graphics.f("#AACDE2").s().p("AkVDYIgkhTIAAgBIAagFQAhgJAkgRIAYgMQBrg5BahoIAtgyQAngqA/gaQARgIASgGQBDgdA/ALIgGAJQgzALhKA3IgFAEQhdBFg+BfIgPAZQgyBPguAjIgJAGQg+AshsAQIgLgKg");
            this.shape_83.setTransform(137,100.3238);
        
            this.shape_84 = new cjs.Shape();
            this.shape_84.graphics.f("#AACDE2").s().p("AkVDZIgkhTIAAgBIAagFQAhgJAkgRIAYgMQBrg4BbhpIAsgyQAogqA+gbIAjgOQBEgeA+ALQgDACgEAGQgzAMhKA4IgFAEQhdBGg9BfIgQAaQgxBOgvAkIgIAGQg+AshsAPIgLgKg");
            this.shape_84.setTransform(137,100.2274);
        
            this.shape_85 = new cjs.Shape();
            this.shape_85.graphics.f("#AACDE2").s().p("AkWDbIgjhUIAAgBIAagFQAhgIAlgSIAYgMQBrg4BahpIAtgyQAogqA+gcQARgIARgHQBFgfA8ALIgHAIQgzANhJA5IgGAEQhcBHg9BfIgQAaQgxBPgvAjIgIAGQg+AthsAPIgMgKg");
            this.shape_85.setTransform(136.975,100.1172);
        
            this.shape_86 = new cjs.Shape();
            this.shape_86.graphics.f("#AACDE2").s().p("AkWDcIgjhUIAAgBIAagFQAhgIAlgRIAYgNQBrg4BbhqIAtgyQAogqA9gcQARgIARgHQBGggA7AKQgDACgGAHQgyANhJA6IgFAFQhcBIg9BeIgRAaQgxBPguAkIgIAGQg+AshtAPIgLgKg");
            this.shape_86.setTransform(136.975,100.0203);
        
            this.shape_87 = new cjs.Shape();
            this.shape_87.graphics.f("#AACDE2").s().p("AkWDdIgjhUIAAgBIAagFQAhgIAlgRIAZgMQBqg5BbhqQAWgZAXgZQAogqA9gdQARgJARgHQBGghA7ALQgEACgGAGQgyAPhJA7IgFAEQhbBJg+BeIgQAaQgxBQguAjIgIAGQg+AthtAPIgLgLg");
            this.shape_87.setTransform(136.975,99.9483);
        
            this.shape_88 = new cjs.Shape();
            this.shape_88.graphics.f("#AACDE2").s().p("AkWDeIgjhUIAAgBIAagFQAigIAlgRIAYgMQBqg4BbhrQAWgZAXgZQApgqA8geIAigQQBHgiA6AKQgFACgHAHQgxAPhJA8IgFAEQhbBKg9BeIgRAaQgxBQguAkIgIAGQg9AthuAPIgKgMg");
            this.shape_88.setTransform(136.975,99.8364);
        
            this.shape_89 = new cjs.Shape();
            this.shape_89.graphics.f("#AACDE2").s().p("AkWDfIgjhUIAAgBIAagFQAigIAlgRIAYgMQBrg4BbhrQAVgaAYgYQAogrA8geQARgJARgHQBIgkA5AKQgFACgIAHQgxAQhJA9IgFAEQhaBLg+BeIgQAaQgyBRgtAjIgIAGQg9AthuAPIgKgMg");
            this.shape_89.setTransform(136.975,99.7315);
        
            this.shape_90 = new cjs.Shape();
            this.shape_90.graphics.f("#AACDE2").s().p("AkWDgIgjhVIAAAAIAagFQAigIAlgRIAZgMQBqg4BbhsIAugyQApgqA6gfQASgKARgHQBHglA5AKQgGACgJAHQgwARhIA+IgGAEQhZBMg+BeIgQAaQgyBRgtAjIgIAGQg9AthvAQIgJgNg");
            this.shape_90.setTransform(136.95,99.6589);
        
            this.shape_91 = new cjs.Shape();
            this.shape_91.graphics.f("#AACDE2").s().p("AkXDiIgihWIAagFQAigIAlgQIAZgNQBqg4BchsQAVgZAYgZQApgqA6ggQASgKARgHQBIgmA4AKQgHACgJAHQgwARhIA/IgGAFQhZBNg9BeIgQAZQgzBSgsAjIgIAHQg9AthvAPIgKgNg");
            this.shape_91.setTransform(136.95,99.5458);
        
            this.shape_92 = new cjs.Shape();
            this.shape_92.graphics.f("#AACDE2").s().p("AkXDjIgihWIAagEQAigJAlgQIAZgMQBrg4BbhtQAWgZAXgZQAqgrA5ggIAjgSQBIgnA4AKQgHACgKAIQgwARhIBAIgGAFQhYBOg9BeIgRAaQgyBRgsAkIgIAGQg+AthuAPIgKgNg");
            this.shape_92.setTransform(136.95,99.448);
        
            this.shape_93 = new cjs.Shape();
            this.shape_93.graphics.f("#AACDE2").s().p("AkXDjIgihVIAagFQAjgIAlgRIAYgMQBrg3BbhuQAVgZAYgZQAqgqA6ghIAigTQBJgoA3AKQgIACgKAIQgwAShIBBIgGAFQhXBOg+BeIgQAaQgzBSgsAkIgIAGQg8AthwAQIgJgPg");
            this.shape_93.setTransform(136.95,99.375);
        
            this.shape_94 = new cjs.Shape();
            this.shape_94.graphics.f("#AACDE2").s().p("AkXDlIgihWIAbgFQAigIAlgQIAZgNQBqg3BchuQAVgZAYgZQAqgrA5ghQARgLARgIQBKgpA2AJQgIACgMAIQgvAThIBCIgFAFQhYBQg9BdIgRAaQgyBTgrAjIgIAHQg9AthwAPIgJgOg");
            this.shape_94.setTransform(136.925,99.2606);
        
            this.shape_95 = new cjs.Shape();
            this.shape_95.graphics.f("#AACDE2").s().p("AkXDmIgihWIAbgFQAigIAlgQIAZgMQBqg4BchuQAWgaAYgYQAqgrA4giIAigUQBLgqA1AKQgJACgMAIQgvAThIBDIgFAFQhXBRg+BdIgQAaQgyBTgrAkIgIAGQg9AuhwAPIgJgPg");
            this.shape_95.setTransform(136.925,99.1624);
        
            this.shape_96 = new cjs.Shape();
            this.shape_96.graphics.f("#AACDE2").s().p("AkXDnIgihWIAbgFQAigHAmgRIAYgMQBqg4BchuQAWgaAYgZQAqgqA5gjIAhgUQBMgrA0AJQgKACgNAIQguAUhIBEIgFAFQhWBSg+BdIgRAbQgyBTgrAjIgIAHQg8AthxAPIgIgPg");
            this.shape_96.setTransform(136.925,99.064);
        
            this.shape_97 = new cjs.Shape();
            this.shape_97.graphics.f("#AACDE2").s().p("AkXDoIgihWIAbgFQAjgHAlgRIAYgMQBrg3BchvQAVgaAYgZQArgrA4gjIAhgUQBMgtA0AJQgKACgOAIQguAWhIBFIgFAEQhWBTg+BdIgQAbQgzBTgqAkIgIAGQg8AuhxAPIgIgQg");
            this.shape_97.setTransform(136.925,98.9672);
        
            this.shape_98 = new cjs.Shape();
            this.shape_98.graphics.f("#AACDE2").s().p("AkXDpIgihWIAbgEQAjgIAlgRIAZgMQBqg3BchwQAVgZAZgZQAqgrA4gkQARgMAQgJQBNguAzAKQgLACgOAIQguAWhIBGIgFAFQhVBTg+BeIgQAaQgzBUgqAjIgIAHQg9AuhwAPIgIgRg");
            this.shape_98.setTransform(136.925,98.8687);
        
            this.shape_99 = new cjs.Shape();
            this.shape_99.graphics.f("#AACDE2").s().p("AkXDqIghhWIAbgEQAigIAmgRIAYgMQBqg3BdhwQAVgaAZgYQAqgrA3glIAhgVQBOgvAxAJQgKACgPAIQguAXhHBHIgGAFQhUBUg+BeIgQAaQg0BUgpAkIgIAGQg8AuhyAPIgHgRg");
            this.shape_99.setTransform(136.9,98.7701);
        
            this.shape_100 = new cjs.Shape();
            this.shape_100.graphics.f("#AACDE2").s().p("AkYDsIgghXIAbgEQAjgIAlgQIAZgMQBpg4BdhwQAVgaAZgZQArgqA3gmQAQgMAQgKQBPgwAwAJQgLACgQAJQgtAXhIBIIgEAFQhVBWg9BdIgRAaQgzBVgqAjIgHAHQg9AuhxAPIgIgRg");
            this.shape_100.setTransform(136.9,98.6789);
        
            this.shape_101 = new cjs.Shape();
            this.shape_101.graphics.f("#AACDE2").s().p("Ak4CWIAbgEQAjgIAlgQQB4g2Bnh+QA7hIBVg8QBlhJA6ALQguAHhjBkQhiBlhEBuQg4BdgsAiQg8AvhzAPg");
            this.shape_101.setTransform(136.9,98.578);
        
            this.shape_102 = new cjs.Shape();
            this.shape_102.graphics.f("#AACDE2").s().p("Ak4CWIAAgBIAagEIABAAQAjgHAlgRIABAAIAbgNQBpg4BahvIAEgFIAVgXQAzg4BEgwIAYgQQAugeAkgLQAZgHAVABIAHACIgIACQgeAJgvApQgXATgZAZIgMALQhdBghBBmIgEAHIgEAGQgzBVgpAkIgGAFIgCABQg8AuhuAPIgCAAIgCABg");
            this.shape_102.setTransform(136.875,98.4118);
        
            this.shape_103 = new cjs.Shape();
            this.shape_103.graphics.f("#AACDE2").s().p("Ak4CVIAagEIABAAQAjgIAmgQIABAAIAbgNQBpg5BahuIAEgFIAVgXQAyg4BEgwIAYgRQAugdAkgLQAZgHAWABIAGACIgIACQgdAKgwAoQgZAUgYAYIgLALQhdBhhABlIgFAHIgEAGQgyBVgqAkIgGAFIgCABQg7AuhvAPIgCAAIgCABg");
            this.shape_103.setTransform(136.825,98.2618);
        
            this.shape_104 = new cjs.Shape();
            this.shape_104.graphics.f("#AACDE2").s().p("AkOD/IgCAAIgnhpIAagFIABAAQAjgIAlgQIABAAIAbgNQBqg5BZhuIAEgFIAVgXQAyg3BEgxIAYgQQAugeAkgLQAagHAVACIAFABIgIADQgdAJgvApQgaAVgXAWIgLAMQheBig/BkIgFAHIgEAGQgzBUgpAkIgGAFIgCACQg7AthvAQIgCAAg");
            this.shape_104.setTransform(136.8,98.0789);
        
            this.shape_105 = new cjs.Shape();
            this.shape_105.graphics.f("#AACDE2").s().p("AkOD+IgCABIgnhqIAagEIABAAQAjgIAlgRIABAAIAbgNQBqg5BahtIAEgFIAUgYQAxg3BFgwIAYgRQAugeAlgKQAYgHAWABIAFACIgIADQgcAKgxAoQgbAWgVAVIgMALQhdBkg/BjIgFAHIgEAGQgyBUgpAkIgHAFIgCACQg7AthvAQIgCgBg");
            this.shape_105.setTransform(136.775,97.9118);
        
            this.shape_106 = new cjs.Shape();
            this.shape_106.graphics.f("#AACDE2").s().p("AkND+IgCABIgohqIAagFIABAAQAjgIAlgQIABAAIAbgNQBrg6BZhtIAEgFIAUgXQAxg3BFgxIAZgQQAtgeAlgKQAYgHAWABIAFACIgIADQgcAKgxAoQgcAXgUAUIgMALQheBlg+BiIgEAHIgFAGQgyBVgpAjIgHAFIgBACQg8AuhvAPIgBgBg");
            this.shape_106.setTransform(136.75,97.7618);
        
            this.shape_107 = new cjs.Shape();
            this.shape_107.graphics.f("#AACDE2").s().p("AkND/IgCAAIgnhpIAAgBIAagEIABAAQAjgIAlgRIABAAIAbgNQBrg6BZhsIADgFIAUgYQAxg3BGgxIAYgQQAugeAkgKQAZgHAWABIADACIgIADQgbALgwAoQgeAXgUATIgLAMQheBlg9BhIgFAHIgEAHQgzBUgpAkIgGAFIgDABQg7AuhuAPIgCAAg");
            this.shape_107.setTransform(136.7,97.5933);
        
            this.shape_108 = new cjs.Shape();
            this.shape_108.graphics.f("#AACDE2").s().p("AkND/IgCAAIgnhqIAAAAIAagFIABAAQAjgIAlgRIABAAIAbgNQBsg6BYhsIAEgFIAUgXQAwg3BGgxIAYgRQAtgdAmgLQAYgGAWABQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAIgIADQgbALgxAoQgfAYgSASIgLAMQhfBmg9BgIgEAHIgEAHQgzBUgpAkIgGAFIgCABQg8AuhuAPIgCAAg");
            this.shape_108.setTransform(136.675,97.4183);
        
            this.shape_109 = new cjs.Shape();
            this.shape_109.graphics.f("#AACDE2").s().p("AkND/IgBAAIgohqIAAAAIAagFIABAAQAjgIAlgRIABAAIAbgOQBsg6BYhrIAEgFIAUgXQAwg3BFgyIAZgQQAugeAlgKQAYgGAWABQABAAABAAQAAABAAAAQABAAAAABQAAAAAAAAIgJADQgZAMgyAnQggAZgRARIgMAMQheBog9BeIgEAHIgEAHQgzBUgpAkIgGAFIgCABQg8AuhuAPIgCAAg");
            this.shape_109.setTransform(136.65,97.2683);
        
            this.shape_110 = new cjs.Shape();
            this.shape_110.graphics.f("#AACDE2").s().p("AkND/IgBAAIgohqIAAAAIAbgFIABAAQAigJAlgRIACAAIAagNQBtg6BXhrIAEgFIAUgYQAvg2BHgyIAYgQQAugeAlgKQAYgGAXABQAAAAABAAQAAAAAAABQABAAAAAAQAAABgBAAIgIAEQgZALgyAoQgiAZgQAQIgLAMQhfBpg7BeIgFAGIgEAHQgyBUgqAkIgGAFIgCABQg8AuhuAPIgCAAg");
            this.shape_110.setTransform(136.6143,97.1183);
        
            this.shape_111 = new cjs.Shape();
            this.shape_111.graphics.f("#AACDE2").s().p("AkMD/IgCAAIgnhqIAAAAIAagFIABAAQAjgJAlgRIABAAIAbgNQBtg7BXhqIAEgFIAUgYQAug2BHgyIAYgQQAugeAmgKQAXgGAXABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABIgIADQgZAMgyAnQgjAbgPAPIgLALQhgBqg6BdIgEAHIgEAGQgzBVgpAjIgGAFIgDACQg8AuhtAPIgCgBg");
            this.shape_111.setTransform(136.5917,96.9433);
        
            this.shape_112 = new cjs.Shape();
            this.shape_112.graphics.f("#AACDE2").s().p("AkMD/IgCAAIgnhqIAAAAIAagGIABAAQAjgIAlgRIABAAIAbgOQBtg6BXhrIAEgFIAUgXQAug2BHgyIAYgRQAugdAmgKQAXgGAXABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAABIgIADQgZAMgzAoQgkAbgOAOIgKALQhgBrg6BcIgEAHIgEAGQgzBVgqAjIgFAFIgDACQg8AuhtAPIgCgBg");
            this.shape_112.setTransform(136.5821,96.7933);
        
            this.shape_113 = new cjs.Shape();
            this.shape_113.graphics.f("#AACDE2").s().p("AkMD/IgCAAIgnhqIAAgBIAagFIABAAQAjgJAlgQIABgBIAbgNQBug7BWhqIAEgFIAUgXQAtg3BIgyIAYgQQAugdAmgKQAXgGAXAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBABIgIADQgYANgzAnQglAcgNANIgLALQhgBtg5BaIgEAHIgEAHQgzBUgqAkIgFAEIgDACQg8AuhtAPIgCgBg");
            this.shape_113.setTransform(136.575,96.6481);
        
            this.shape_114 = new cjs.Shape();
            this.shape_114.graphics.f("#AACDE2").s().p("AkMD/IgCAAIgnhqIAAgBIAbgFIABAAQAigJAlgRIABgBIAbgNQBvg7BWhpIAEgFIATgYQAtg2BIgyIAZgRQAtgdAmgKQAXgFAXAAQABAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAIgIAEQgYANgzAnQgmAcgNAMIgKAMQhhBug4BZIgEAHIgEAHQgzBUgpAkIgGAEIgDACQg8AuhtAPIgCgBg");
            this.shape_114.setTransform(136.5444,96.475);
        
            this.shape_115 = new cjs.Shape();
            this.shape_115.graphics.f("#AACDE2").s().p("AkMD/IgCAAIgnhqIAAgBIAbgGIABAAQAigJAlgQIABgBIAbgNQBvg8BWhpIAEgFIATgXQAtg2BIgzIAZgQQAtgdAmgKQAXgFAXAAQABAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgIAEQgXAOg0AnQgnAcgLALIgLAMQhgBvg4BYIgEAHIgEAHQgzBUgqAkIgFAEIgDACQg9AuhsAPIgCgBg");
            this.shape_115.setTransform(136.54,96.325);
        
            this.shape_116 = new cjs.Shape();
            this.shape_116.graphics.f("#AACDE2").s().p("AkMD/IgCgBIgnhqIAAAAIAbgGIABAAQAigJAlgRIABgBIAbgNQBwg8BVhoIAEgFIATgXQAsg2BJgzQAMgJAMgHQAtgeAngJQAXgGAXABQABAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAIgIAFQgXANg0AnQgpAdgKAKIgKAMQhhBwg3BYIgEAGIgEAHQgzBUgqAkIgFAEIgDACQg9AuhsAPIgCgBg");
            this.shape_116.setTransform(136.525,96.1731);
        
            this.shape_117 = new cjs.Shape();
            this.shape_117.graphics.f("#AACDE2").s().p("AkMD/IgCgBIgnhpIAAgBIAbgGIABAAQAigJAlgRIABgBIAbgNQBwg8BVhoIAEgFIATgYQAsg1BJgzQAMgJAMgHQAtgeAngJQAXgGAXABQABAAAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgIAFQgWAOg1AmQgqAfgJAJIgKALQhhBxg2BXIgEAGIgEAHQgzBVgqAjIgFAEIgDACQg9AvhsAPIgCgCg");
            this.shape_117.setTransform(136.5205,96);
        
            this.shape_118 = new cjs.Shape();
            this.shape_118.graphics.f("#AACDE2").s().p("AkND/IgBAAIgnhrIAAAAIAbgHIABAAQAigJAlgRIABgBIAbgMQBwg9BVhoIAEgEIATgYQArg2BJgyIAZgRQAtgdAngJQAXgFAXgBQACABgFADIgIAFQgVAOg1AnQgrAfgIAHIgKAMQhiByg1BWIgFAGIgEAHQgyBUgqAkIgGAEIgCACQg9AuhtAQIgCgCg");
            this.shape_118.setTransform(136.5188,95.85);
        
            this.shape_119 = new cjs.Shape();
            this.shape_119.graphics.f("#AACDE2").s().p("AkND/IgBAAIgnhrIAAgBIAbgGIABAAQAigJAlgRIABgBIAbgNQBxg8BUhoIAEgFIATgXQArg2BJgzIAZgQQAtgdAngJQAWgFAYgBQABACgEADIgIAEIhKA1QgtAggHAHIgKALQhiB0g0BUIgFAHIgEAGQgyBVgqAjIgGAEIgCACQg+AvhsAPIgCgCg");
            this.shape_119.setTransform(136.5091,95.675);
        
            this.shape_120 = new cjs.Shape();
            this.shape_120.graphics.f("#AACDE2").s().p("AkND/IgBAAIgnhrIAAgBIAbgGIABAAQAigJAlgRIABgBIAbgNQBxg9BUhmIAEgFIATgYQAqg2BKgzIAZgQQAtgdAngJQAWgGAYAAQABACgFADIgIAEIhKA1QguAhgGAGIgJAMQhjB0g0BUIgEAGIgEAGQgzBVgpAkIgGADIgDACQg9AvhsAPIgCgCg");
            this.shape_120.setTransform(136.5077,95.5);
        
            this.shape_121 = new cjs.Shape();
            this.shape_121.graphics.f("#AACDE2").s().p("AkND/IgBgBIgnhqIAAgBIAbgGIABAAQAigKAlgQIABgBIAbgOQByg9BThmIAEgFIATgXQAqg2BKg0IAZgQQAtgcAngKQAWgEAYgBQABABgGAEIgHAEIhKA2QgvAhgFAFIgKAMQhjB1gzBSIgEAHIgEAHQgzBUgqAjIgFAEIgDADQg9AuhsAPIgCgCg");
            this.shape_121.setTransform(136.5071,95.35);
        
            this.shape_122 = new cjs.Shape();
            this.shape_122.graphics.f("#AACDE2").s().p("AkND/IgBAAIgnhrIAAgBIAbgGIABAAQAigKAkgRIACgBIAagOQBzg8BThnIAEgEIASgYQAqg1BLg0QAMgIANgIQAsgdAogJQAWgFAYAAQABABgGADIgIAGIhKA1QgwAigEAEIgKALQhjB3gyBSIgEAGIgEAHQgzBVgqAiIgFAFIgDABQg9AvhsAPIgCgCg");
            this.shape_122.setTransform(136.5019,95.2);
        
            this.shape_123 = new cjs.Shape();
            this.shape_123.graphics.f("#AACDE2").s().p("AkND/IgBgBIgnhqIAAgBIAbgHIABAAQAigJAkgRIACgBIAagOQBzg9BThmIAEgFIASgXQAqg1BLg0IAYgQQAtgdAogJQAWgFAYAAQABABgHAEIgIAFIhJA2Ig0AlIgKALQhkB5gxBQIgEAGIgEAHQgzBVgqAjIgFAEIgDACQg+AvhrAOIgCgCg");
            this.shape_123.setTransform(136.5018,95.025);
        
            this.shape_124 = new cjs.Shape();
            this.shape_124.graphics.f("#AACDE2").s().p("AkND/IgBgBIgmhqIAAgBIAbgHIABAAQAhgKAlgRIACgBIAagNQBzg+BThlIADgFIASgXQAqg1BKg0IAZgRQAtgcAogJQAVgFAaAAQgBABgGAEIgIAFQgTAQg2AmIg1AlIgJALQhkB6gxBPIgEAGIgEAHQgzBVgqAjIgFAEIgDACQg+AvhrAOIgCgCg");
            this.shape_124.setTransform(136.5,94.875);
        
            this.shape_125 = new cjs.Shape();
            this.shape_125.graphics.f("#AACDE2").s().p("AkND/IgnhsIAAgBIAbgGQAigKAngSIAagNQB3hABShoIASgXQAwg+Bdg8QAtgcAogJQAVgEAagCQAAACgIAEIgHAFQgTARg3AlIg0AlQhsCDgyBRIgEAHQg2BZgrAlIgFAEQg/AwhtAPIgCgCg");
            this.shape_125.setTransform(136.5,94.7);
        
            this.shape_126 = new cjs.Shape();
            this.shape_126.graphics.f("#AACDE2").s().p("AkLD/IgnhtIAbgHQAigKAngSIAagNIALgGQBvg+BPhiIASgXQAMgPANgPQAsgvBGgtQAcgSAbgLQAPgGAOgDQARgDASgCIAKAAQAAACgHAEIgIAFQgQAOgnAdIgRAMIg0AlQhTBngyBLIgWAjIgEAGQgnBCgjAlIgXAWIgGAEQg6AshjAQIgOACIgCgCg");
            this.shape_126.setTransform(136.225,94.5625);
        
            this.shape_127 = new cjs.Shape();
            this.shape_127.graphics.f("#AACDE2").s().p("AkGEAIgCgCIgnhrIAAgBIAagGQAigLAmgRIAbgOIAKgGQBwg+BOhgIASgYQAMgPANgPQAtgwBEgsQAcgTAagJQAPgHAOgDQAQgDATgCIAIAAQAAACgHAEIgHAFQgQAOgnAdIgQANQgwAigDAEQhRBlgyBMIgWAkIgEAGQgnBCgkAkQgMANgLAJIgFAEQg7ArhiAQIgNAAg");
            this.shape_127.setTransform(135.975,94.4);
        
            this.shape_128 = new cjs.Shape();
            this.shape_128.graphics.f("#AACDE2").s().p("AkED/IgCgCIgmhrIAagHQAhgKAngSIAagOIALgGQBug9BPhgIASgXQALgPAOgOQAsgyBCgrQAcgTAagKQAPgGAOgEQARgEARgBIAIABQgBACgHAEIgHAFQgQAPgmAcIgQANQgtAigEAFQhPBjgyBPIgWAkIgEAGQgnBBgkAkQgMAMgLAJIgGAEQg7AqhhAQIgNgBg");
            this.shape_128.setTransform(135.7,94.275);
        
            this.shape_129 = new cjs.Shape();
            this.shape_129.graphics.f("#AACDE2").s().p("AkCD+IgBgCIgnhqIAAgBIAagHQAhgKAmgSIAbgOIAKgFQBvg9BOhfIASgXIAZgeQAsgxBBgsQAcgSAZgKQAPgHANgDQARgFASgBIAGACQgBACgGADIgIAGQgQAPgkAcIgQAOQgrAggFAHQhNBigyBRIgWAjIgEAHQgnBAgkAjQgMANgMAIIgGAEQg6AphiAPIgMgBg");
            this.shape_129.setTransform(135.45,94.15);
        
            this.shape_130 = new cjs.Shape();
            this.shape_130.graphics.f("#AACDE2").s().p("Aj/D9IgCgCIgmhqIAZgHQAigLAlgRIAbgOIAKgGQBvg9BNhdIATgXIAYgdQAtg0A/gqQAbgTAagKQAOgHAOgDQAQgEARgBIAFACQgBACgGADIgHAGQgQAPgkAdIgPANQgpAggGAJQhMBggyBSIgVAkIgEAGQgmBAgmAjQgMAMgMAIIgFAEQg7AohhAPIgLgCg");
            this.shape_130.setTransform(135.175,94.025);
        
            this.shape_131 = new cjs.Shape();
            this.shape_131.graphics.f("#AACDE2").s().p("Aj9D8IgCgCIgmhqIAAAAIAagHQAhgKAlgSIAbgOIAKgFQBvg+BMhbIATgXIAYgeQAtg0A9gqQAbgSAagLQAOgGANgEQARgEARgBIAEACIgIAGIgGAFQgRAQgiAdIgPANQgoAfgHALQhJBegyBVIgVAjIgEAGQgmBAgmAjQgMALgNAIIgFAEQg7AnhhAPIgKgDg");
            this.shape_131.setTransform(134.925,93.925);
        
            this.shape_132 = new cjs.Shape();
            this.shape_132.graphics.f("#AACDE2").s().p("Aj7D7IgCgCIglhpIAZgHQAhgLAlgSIAbgOIAKgFQBvg9BMhaIATgYIAYgcQAsg2A8gpQAbgSAZgMQAPgGAMgEQARgEARgBIACADIgHAFIgHAGIgyAtIgPANQglAfgIAMQhHBdgyBWIgVAjIgEAHQglA+goAjQgMALgMAJIgGADQg6AmhhAPIgKgEg");
            this.shape_132.setTransform(134.65,93.8);
        
            this.shape_133 = new cjs.Shape();
            this.shape_133.graphics.f("#AACDE2").s().p("Aj5D6IgBgCIglhpIAAAAIAZgHQAggLAlgRIAbgOIAJgFQBvg9BMhaIATgWIAYgdQAtg2A5gpQAbgTAZgLQAPgHAMgDQARgFAQgBIACAEIgIAGIgHAFIgwAtIgPAOQgjAegJANQhFBbgzBZIgUAjIgEAGQglA/goAiQgMALgNAIIgFADQg8AlhgAPIgJgFg");
            this.shape_133.setTransform(134.4,93.675);
        
            this.shape_134 = new cjs.Shape();
            this.shape_134.graphics.f("#AACDE2").s().p("Aj2D5IgCgCIglhoIAZgIQAggKAlgSIAbgOIAKgFQBug8BLhZIATgWIAYgeQAtg2A4goQAagUAZgLQAOgHANgDQARgFAQAAIAAADQgCACgFAFIgHAFIgwAtIgOAOQghAdgKAPQhDBagzBaIgUAkIgEAGQglA+gpAhQgMALgMAIIgGAEQg7AjhgAOIgIgFg");
            this.shape_134.setTransform(134.125,93.55);
        
            this.shape_135 = new cjs.Shape();
            this.shape_135.graphics.f("#AACDE2").s().p("Aj1D3IgBgCIglhnIAYgHQAhgLAkgSIAbgOIAKgFQBug8BLhXIATgXIAYgdQAtg4A2gnQAagTAZgMQAOgGANgEQARgFAPAAIgCAEIgGAGIgHAFIgvAuIgOAOQgfAcgLARQhBBZgzBcIgUAjIgEAGQgkA9gqAiQgMAKgMAIIgGAEQg7AihgAOIgIgHg");
            this.shape_135.setTransform(133.925,93.45);
        
            this.shape_136 = new cjs.Shape();
            this.shape_136.graphics.f("#AACDE2").s().p("AjzD3IgBgCIglhoIAYgHQAggLAlgSIAbgNIAJgFQBug8BLhWIATgXIAXgdQAtg4A1gnQAagTAYgMQAOgHANgEQARgFAPAAIgDAEIgHAHIgGAFIguAuIgOAPQgcAbgNASQg/BXgzBfIgTAiIgEAHQglA8gqAhQgMAKgNAIIgFADQg8AihfAOIgHgHg");
            this.shape_136.setTransform(133.725,93.325);
        
            this.shape_137 = new cjs.Shape();
            this.shape_137.graphics.f("#AACDE2").s().p("AjxD1IgCgCIgkhmIAYgHQAggLAkgSIAbgOIAJgFQBug7BLhWIATgWIAXgcQAtg7AzgmQAZgTAZgLQAOgIAMgDQARgGAPAAIgEAFIgHAGIgGAGQgSARgbAeIgOAOQgaAagNAVQg+BUgzBhIgTAjIgEAHQgkA7grAhQgMAJgNAJIgGACQg7AihfANIgGgJg");
            this.shape_137.setTransform(133.525,93.2);
        
            this.shape_138 = new cjs.Shape();
            this.shape_138.graphics.f("#AACDE2").s().p("AjvD1IgBgCIgkhnIAXgHQAfgLAlgSIAbgOIAJgEQBug8BJhUIAUgWIAWgdQAug6AygmQAZgTAYgMQAOgHALgEQASgGANAAIgEAGIgHAGIgGAGQgRARgbAeIgOAOQgYAagOAWQg7BTgzBjIgUAiIgEAHQgjA7gsAhQgMAJgNAHIgFAEQg9AghdANIgGgJg");
            this.shape_138.setTransform(133.3,93.075);
        
            this.shape_139 = new cjs.Shape();
            this.shape_139.graphics.f("#AACDE2").s().p("AjuDzIgBgCIgjhmIAWgHQAggLAkgSIAbgNIAJgFQBtg8BKhSIATgXIAXgcQAug7AvgmQAZgTAZgMQANgHAMgEQARgGANAAIgGAGIgGAHIgGAFQgSASgaAdIgMAQQgWAZgQAXQg5BSgzBkIgTAjIgEAGQgjA7gsAgQgMAJgOAHIgGAEQg7AfhfANIgFgLg");
            this.shape_139.setTransform(133.1,92.975);
        
            this.shape_140 = new cjs.Shape();
            this.shape_140.graphics.f("#AACDE2").s().p("AjsDzIgBgCIgjhmIAWgHQAggLAjgSIAcgOIAJgEQBsg8BKhRIATgWIAXgdQAug8AtglQAZgTAYgMQAOgHALgEQASgHANABIgHAGIgIAHIgGAFQgRASgZAeIgMAPQgUAYgRAZQg2BQg0BnIgTAiIgEAHQgiA6gtAgQgNAJgNAHIgGADQg8AeheANIgEgLg");
            this.shape_140.setTransform(132.9,92.8482);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_12}]},1).wait(1));
        
            // 尾巴
            this.shape_141 = new cjs.Shape();
            this.shape_141.graphics.f().s("#667D96").ss(4,1,1).p("AmPEGIAbgCQAigFAigNQBrgsA+h0QAyhbBQi7QBKiXBfgyQBsg3A4AOQAtALAWA8QASAzglA/QgiA6hiBdQhSBQg4BNQgaAkgaAuQgKARgKASQgCAFgDAFQgSAlgQAcQgIANgIAMQgKAQgLAOQgTAXgUATQh8B3jCgag");
            this.shape_141.setTransform(140.5945,77.3256);
        
            this.shape_142 = new cjs.Shape();
            this.shape_142.graphics.f("#FFFFFF").s().p("AmPG1IAAivIAbgCQAigFAigNQBrgsA+h0QAyhbBQi7QBKiXBfgyQBsg3A4AOQAtALAWA8QASAzglA/QgiA6hiBdQhSBQg4BNQgaAkgaAuIgUAjIgFAKQgSAlgQAcIgQAZQgKAQgLAOQgTAXgUATQhmBiiWAAQggAAgigFg");
            this.shape_142.setTransform(140.5945,77.3256);
        
            this.shape_143 = new cjs.Shape();
            this.shape_143.graphics.f().s("#667D96").ss(4,1,1).p("AmQEHIAVgDQAhgEAbgLQAlgPAXgPQAqgaAhgnQAYgbATgjQAkg/ArheQAag4AdhFQADgGACgFQAlhJArgvQApgtAsgXQANgHANgGQBHggAuABQALAAAKADQAaAGASAXQAOAQAJAYQAIATgBAVQgBAigVAnQgJARgPAUQgSAZgaAcQgbAcgiAhQg2AzgrAyQgXAbgUAaQgFAHgFAHQgWAegVAlQgCADgCADQgIAOgIAOQgDAFgCAFQgCADgCAEQgNAbgOAVQgBAFgDAEQgDAEgDAFQgFAIgFAIQgEAGgEAGQgGAJgHAJQgFAGgEAFQgIAKgJAIQgGAHgHAGQgGAGgHAGQgzAtg+AVQhUAehqgNQgBgSgBgSQgBhDgChEg");
            this.shape_143.setTransform(140.6766,77.62);
        
            this.shape_144 = new cjs.Shape();
            this.shape_144.graphics.f("#FFFFFF").s().p("AmLGyIgCgkIgDiHIAVgDQAhgEAbgLQAlgPAXgPQAqgaAhgnQAYgbATgjQAkg/ArheQAag4AdhFIAFgLQAlhJArgvQApgtAsgXIAagNQBHggAuABQALAAAKADQAaAGASAXQAOAQAJAYQAIATgBAVQgBAigVAnQgJARgPAUQgSAZgaAcQgbAcgiAhQg2AzgrAyQgXAbgUAaIgKAOQgWAegVAlIgEAGIgQAcIgFAKIgEAHQgNAbgOAVIgEAJIgGAJIgKAQIgIAMIgNASIgJALIgRASIgNANIgNAMQgzAtg+AVQg7AVhFAAQgeAAgggEg");
            this.shape_144.setTransform(140.6766,77.62);
        
            this.shape_145 = new cjs.Shape();
            this.shape_145.graphics.f().s("#667D96").ss(4,1,1).p("AmREHIAVgDQAggGAbgLQAkgQAWgPQArgaAhglQAYgbAUgiQAkg/ArhdQAag5AehEQADgFACgGQAmhIArgvQAogtAtgWQANgHAMgGQBHggAuABQALAAAKADQAaAGATAWQAOAQAJAXQAJATgBAVQABAhgVAnQgIARgOAUQgRAagaAbQgbAdgiAgQg2AzgsAxQgXAagUAaQgGAGgFAIQgWAcgWAkQgCAEgCADQgIANgIAOQgCAFgDAFQgCADgCAEQgOAbgNAVQgDAEgBAEQgDAFgDAEQgFAIgGAIQgEAGgEAGQgGAJgHAJQgFAGgEAFQgIAKgIAIQgHAHgGAGQgHAGgHAGQgzAug8AVQhUAfhpgMQgCgRgBgRQgEhCgEhEg");
            this.shape_145.setTransform(140.7264,77.9531);
        
            this.shape_146 = new cjs.Shape();
            this.shape_146.graphics.f("#FFFFFF").s().p("AmGGvIgDgiIgIiGIAVgDQAggGAbgLQAkgQAWgPQArgaAhglQAYgbAUgiQAkg/ArhdIA4h9IAFgLQAmhIArgvQAogtAtgWIAZgNQBHggAuABQALAAAKADQAaAGATAWQAOAQAJAXQAJATgBAVQABAhgVAnQgIARgOAUQgRAagaAbQgbAdgiAgQg2AzgsAxQgXAagUAaIgLAOQgWAcgWAkIgEAHIgQAbIgFAKIgEAHQgOAbgNAVIgEAIIgGAJIgLAQIgIAMIgNASIgJALIgQASIgNANIgOAMQgzAug8AVQg8AXhHAAQgcAAgegEg");
            this.shape_146.setTransform(140.7264,77.9531);
        
            this.shape_147 = new cjs.Shape();
            this.shape_147.graphics.f().s("#667D96").ss(4,1,1).p("AmSEIIAVgEQAfgGAbgMQAjgQAWgQQArgZAhglQAYgbAUghQAlg/ArhcQAbg4AehEQACgFADgGQAlhHAsgvQAogsAtgXQAMgHANgFQBGggAvABQAKAAAKACQAaAHATAVQAPAPAKAXQAJASAAAUQABAigTAmQgHASgOAUQgQAagZAbQgbAdgiAfQg2AzgtAwQgXAZgVAaQgFAGgGAHQgWAcgXAkQgCADgCADQgIANgIAOQgDAFgCAEQgCAEgDADQgNAbgOAVQgDAEgCAEQgCAFgDAEQgGAIgFAIQgEAGgEAGQgGAJgHAIQgFAGgEAGQgIAJgJAJQgGAGgGAGQgHAHgGAGQg0Avg7AUQhTAghpgLQgCgQgDgRQgFhAgGhDg");
            this.shape_147.setTransform(140.8055,78.2653);
        
            this.shape_148 = new cjs.Shape();
            this.shape_148.graphics.f("#FFFFFF").s().p("AmCGsIgFghIgLiDIAVgEQAfgGAbgMQAjgQAWgQQArgZAhglQAYgbAUghQAlg/ArhcIA5h8IAFgLQAlhHAsgvQAogsAtgXIAZgMQBGggAvABQAKAAAKACQAaAHATAVQAPAPAKAXQAJASAAAUQABAigTAmQgHASgOAUQgQAagZAbQgbAdgiAfQg2AzgtAwIgsAzIgLANQgWAcgXAkIgEAGIgQAbIgFAJIgFAHQgNAbgOAVIgFAIIgFAJIgLAQIgIAMIgNARIgJAMIgRASIgMAMIgNANQg0Avg7AUQg+AYhJAAQgaAAgbgDg");
            this.shape_148.setTransform(140.8055,78.2653);
        
            this.shape_149 = new cjs.Shape();
            this.shape_149.graphics.f().s("#667D96").ss(4,1,1).p("AmTEIIAVgEQAfgHAagMQAigRAWgQQArgZAhgkQAZgaAUghQAlg+AshcQAag4AfhDQACgFADgGQAmhGArgvQAogsAtgXQANgGAMgGQBGgfAvAAQAKABAKACQAZAGAVAVQAOAPALAWQAJASABATQACAigRAmQgHARgNAUQgPAbgZAbQgbAcgiAgQg2AyguAvQgXAZgVAYQgGAHgFAHQgXAbgXAjQgCADgCAEQgIAMgJAOQgDAEgCAFQgCAEgDADQgOAagNAVQgDAEgDAEQgDAFgCAEQgFAIgFAIQgEAGgEAFQgHAKgHAIQgFAGgEAFQgIAKgIAIQgGAHgHAGQgGAGgHAGQg0Awg5AVQhTAghogKQgDgPgEgQQgGg/gJhDg");
            this.shape_149.setTransform(140.891,78.5673);
        
            this.shape_150 = new cjs.Shape();
            this.shape_150.graphics.f("#FFFFFF").s().p("Al9GpIgHgfQgGg/gJhDIAVgEQAfgHAagMQAigRAWgQQArgZAhgkQAZgaAUghQAlg+AshcIA5h7IAFgLQAmhGArgvQAogsAtgXIAZgMQBGgfAvAAQAKABAKACQAZAGAVAVQAOAPALAWQAJASABATQACAigRAmQgHARgNAUQgPAbgZAbQgbAcgiAgQg2AyguAvIgsAxIgLAOQgXAbgXAjIgEAHIgRAaIgFAJIgFAHQgOAagNAVIgGAIIgFAJIgKAQIgIALIgOASIgJALIgQASIgNANIgNAMQg0Awg5AVQhAAZhMAAQgXAAgYgDg");
            this.shape_150.setTransform(140.891,78.5673);
        
            this.shape_151 = new cjs.Shape();
            this.shape_151.graphics.f().s("#667D96").ss(4,1,1).p("AmUEJIAUgFQAfgIAZgMQAigSAVgQQAsgZAhgjQAZgZAUghQAmg+AshaQAbg5AehCQADgFACgGQAmhGAsguQAogsAtgWQANgHAMgFQBFgfAwAAQAKAAAKADQAZAFAUAVQAQAOAKAVQAKASABATQAEAigQAlQgGASgNAUQgOAcgZAaQgbAcghAfQg2AygvAuQgYAYgVAYQgGAHgFAGQgYAbgXAiQgCADgCAEQgJAMgIANQgDAFgCAFQgDADgCAEQgOAZgOAVQgDAEgDAEQgDAFgCAEQgFAIgGAIQgEAFgEAGQgGAJgHAIQgFAGgEAGQgIAJgIAJQgGAGgHAGQgGAHgHAGQg0Awg4AVQhSAihogKQgEgOgEgPQgIg+gLhCg");
            this.shape_151.setTransform(140.965,78.8787);
        
            this.shape_152 = new cjs.Shape();
            this.shape_152.graphics.f("#FFFFFF").s().p("Al5GmIgIgdQgIg+gLhCIAUgFQAfgIAZgMQAigSAVgQQAsgZAhgjQAZgZAUghQAmg+AshaIA5h7IAFgLQAmhGAsguQAogsAtgWIAZgMQBFgfAwAAQAKAAAKADQAZAFAUAVQAQAOAKAVQAKASABATQAEAigQAlQgGASgNAUQgOAcgZAaQgbAcghAfQg2AygvAuIgtAwIgLANQgYAbgXAiIgEAHIgRAZIgFAKIgFAHQgOAZgOAVIgGAIIgFAJIgLAQIgIALIgNARIgJAMIgQASIgNAMIgNANQg0Awg4AVQhAAahNAAQgWAAgXgCg");
            this.shape_152.setTransform(140.965,78.8787);
        
            this.shape_153 = new cjs.Shape();
            this.shape_153.graphics.f().s("#667D96").ss(4,1,1).p("AmVEJIAUgFQAegJAZgNQAhgSAUgRQAtgYAggiQAZgZAWghQAmg8AshaQAbg5AfhCQACgFADgFQAmhGAsguQAogrAtgWQANgHAMgFQBEgfAwAAQAKAAAKADQAZAFAVAUQAQAOALAUQALASABATQAFAhgPAlQgGASgLAUQgOAdgYAZQgbAdgiAeQg1AxgwAuQgYAXgWAYQgGAGgFAHQgYAZgYAiQgCADgDADQgIANgJANQgCAEgDAFQgCADgCAEQgPAZgOAVQgDAEgDAEQgDAEgDAEQgEAIgGAIQgEAFgEAGQgGAJgHAJQgFAGgFAFQgHAJgIAJQgHAGgGAGQgGAHgHAGQg0Axg2AUQhTAjhmgIQgFgNgFgOQgLg9gMhCg");
            this.shape_153.setTransform(141.0783,79.208);
        
            this.shape_154 = new cjs.Shape();
            this.shape_154.graphics.f("#FFFFFF").s().p("Al0GjIgKgbIgXh/IAUgFQAegJAZgNQAhgSAUgRQAtgYAggiQAZgZAWghQAmg8AshaIA6h7IAFgKQAmhGAsguQAogrAtgWQANgHAMgFQBEgfAwAAQAKAAAKADQAZAFAVAUQAQAOALAUQALASABATQAFAhgPAlQgGASgLAUQgOAdgYAZQgbAdgiAeQg1AxgwAuIguAvIgLANQgYAZgYAiIgFAGIgRAaIgFAJIgEAHQgPAZgOAVIgGAIIgGAIIgKAQIgIALIgNASIgKALIgPASIgNAMIgNANQg0Axg2AUQhDAdhPAAQgTAAgUgCg");
            this.shape_154.setTransform(141.0783,79.208);
        
            this.shape_155 = new cjs.Shape();
            this.shape_155.graphics.f().s("#667D96").ss(4,1,1).p("AmXEKIAUgGQAegJAZgOQAggTAUgRQAtgYAgghQAZgZAWggQAng8AshZQAbg4AfhCQADgFADgFQAmhFAsguQAogrAtgWQANgHAMgFQBEgeAwAAQAKAAAKACQAYAGAWATQAQAOALATQAMARACASQAFAigNAlQgFASgLAUQgNAdgXAZQgcAdghAeQg2AwgwAtQgYAWgXAYQgFAGgGAGQgZAZgYAhQgCAEgDADQgIAMgJANQgCAEgDAEQgCAEgDADQgPAZgOAVQgDAEgDAEQgDAEgDAEQgFAIgFAIQgEAFgEAGQgHAJgHAIQgEAGgFAGQgIAJgIAIQgGAHgGAGQgGAGgGAGQg1Azg1AUQhSAjhmgHQgGgMgFgNQgNg8gPhBg");
            this.shape_155.setTransform(141.1568,79.5326);
        
            this.shape_156 = new cjs.Shape();
            this.shape_156.graphics.f("#FFFFFF").s().p("AlwGgIgLgZIgch9IAUgGQAegJAZgOQAggTAUgRQAtgYAgghQAZgZAWggQAng8AshZIA6h6IAGgKQAmhFAsguQAogrAtgWIAZgMQBEgeAwAAQAKAAAKACQAYAGAWATQAQAOALATQAMARACASQAFAigNAlQgFASgLAUQgNAdgXAZQgcAdghAeIhmBdIgvAuIgLAMQgZAZgYAhIgFAHIgRAZIgFAIIgFAHIgdAuIgGAIIgGAIIgKAQIgIALIgOARIgJAMIgQARIgMANIgMAMQg1Azg1AUQhFAdhSAAIghgBg");
            this.shape_156.setTransform(141.1568,79.5326);
        
            this.shape_157 = new cjs.Shape();
            this.shape_157.graphics.f().s("#667D96").ss(4,1,1).p("AmYELIAUgHQAdgKAYgOQAggUATgRQAugYAgggQAZgYAWggQAog7AshZQAbg4AghBQACgFADgFQAnhEAsguQAogqAtgXQANgGAMgFQBDgeAwgBQAKAAAKADQAYAFAXATQAQANAMATQAMAQACASQAHAigMAkQgEASgKAVQgMAegYAYQgbAdghAdQg2AwgxAsQgZAWgWAXQgGAGgGAGQgZAYgZAhQgCADgDADQgIAMgJAMQgDAFgCAEQgDADgCAEQgPAYgPAVQgDAEgDAEQgDAEgDAEQgFAIgFAHQgEAGgEAFQgHAJgHAJQgFAGgEAFQgIAJgIAJQgGAGgGAGQgGAHgGAGQg1Azg0AUQhRAlhmgHQgGgLgHgMQgOg7gRhAg");
            this.shape_157.setTransform(141.2789,79.8486);
        
            this.shape_158 = new cjs.Shape();
            this.shape_158.graphics.f("#FFFFFF").s().p("AlsGdIgNgXIgfh7IAUgHQAdgKAYgOQAggUATgRQAugYAgggQAZgYAWggQAog7AshZIA7h5IAFgKQAnhEAsguQAogqAtgXIAZgLQBDgeAwgBQAKAAAKADQAYAFAXATQAQANAMATQAMAQACASQAHAigMAkQgEASgKAVQgMAegYAYQgbAdghAdIhnBcQgZAWgWAXIgMAMQgZAYgZAhIgFAGIgRAYIgFAJIgFAHQgPAYgPAVIgGAIIgGAIIgKAPIgIALIgOASIgJALIgQASIgMAMIgMANQg1Azg0AUQhFAfhUAAIgegBg");
            this.shape_158.setTransform(141.2789,79.8486);
        
            this.shape_159 = new cjs.Shape();
            this.shape_159.graphics.f().s("#667D96").ss(4,1,1).p("AmZELIATgHQAdgLAYgPQAegUAUgRQAugYAggfQAZgYAWggQApg6AshYQAcg4AfhAQADgFADgFQAnhEAsgtQAogqAtgXQAMgGANgFQBCgdAxgCQAJAAALADQAXAFAXASQARANAMASQANAQADASQAIAhgLAkQgEASgJAVQgLAfgXAYQgcAcggAdQg2AwgyAqQgZAWgXAWQgGAGgGAGQgaAXgZAhQgCADgDADQgIALgJANQgDAEgDAEQgCADgDAEQgPAYgPAUQgDAEgDAEQgDAEgDAEQgGAIgEAIQgEAFgEAFQgHAJgHAJQgFAGgEAFQgIAJgIAJQgGAGgGAGQgGAHgGAGQg1A0gzAUQhRAlhlgFQgHgLgHgLQgQg5gThAg");
            this.shape_159.setTransform(141.398,80.1602);
        
            this.shape_160 = new cjs.Shape();
            this.shape_160.graphics.f("#FFFFFF").s().p("AloGaIgOgWIgjh5IATgHQAdgLAYgPQAegUAUgRQAugYAggfQAZgYAWggQApg6AshYIA7h4IAGgKQAnhEAsgtQAogqAtgXIAZgLQBCgdAxgCQAJAAALADQAXAFAXASQARANAMASQANAQADASQAIAhgLAkQgEASgJAVQgLAfgXAYQgcAcggAdIhoBaIgwAsIgMAMQgaAXgZAhIgFAGIgRAYIgGAIIgFAHQgPAYgPAUIgGAIIgGAIIgKAQIgIAKIgOASIgJALIgQASIgMAMIgMANQg1A0gzAUQhHAhhVAAIgagBg");
            this.shape_160.setTransform(141.398,80.1602);
        
            this.shape_161 = new cjs.Shape();
            this.shape_161.graphics.f().s("#667D96").ss(4,1,1).p("AmbELIATgHQAcgMAYgPQAegVASgRQAwgYAfgeQAagYAXgfQApg6ArhXQAcg4Agg/QADgFADgFQAnhEAsgsQApgqAsgWQANgHAMgFQBCgcAxgCQAJAAALACQAYAGAXARQARANANARQANAQADARQAJAhgJAkQgDASgIAUQgLAggXAYQgcAcggAdQg2AvgyApQgZAVgYAWQgGAGgGAGQgaAWgbAgQgBADgDADQgJALgJAMQgDAEgCAEQgDAEgCADQgQAYgPAUQgDAEgDAEQgDAEgEAEQgFAIgFAHQgEAGgEAFQgHAJgGAIQgFAGgFAGQgIAJgHAIQgGAHgGAGQgGAGgGAGQg2A2gwATQhRAmhlgEQgIgKgIgKQgRg4gWhAg");
            this.shape_161.setTransform(141.5,80.4944);
        
            this.shape_162 = new cjs.Shape();
            this.shape_162.graphics.f("#FFFFFF").s().p("AlkGXIgQgUIgnh4IATgHQAdgMAXgPQAegVASgRQAwgYAfgeQAagYAWgfQAqg6AshXIA7h3IAGgKQAnhEAsgsQApgqAtgWIAZgMQBBgcAxgCQAKAAAKACQAYAGAXARQARANAMARQAOAQADARQAJAhgJAkQgDASgIAUQgLAggXAYQgcAcggAdQg2AvgyApIgxArIgMAMQgbAWgaAgIgEAGIgSAXIgGAIIgFAHQgPAYgPAUIgGAIIgGAIIgLAPIgHALIgOARIgKAMIgPARIgMANIgMAMQg1A2gyATQhIAihYAAIgVAAg");
            this.shape_162.setTransform(141.5,80.4944);
        
            this.shape_163 = new cjs.Shape();
            this.shape_163.graphics.f().s("#667D96").ss(4,1,1).p("AmcEMIATgIQAbgNAXgPQAdgWASgSQAwgXAfgdQAagXAXgfQAqg6AshWQAcg4Agg/QADgFADgFQAnhCAtgtQAogpAtgWQAMgHANgFQBBgcAxgCQAJAAALADQAXAFAYAQQASANAMAQQAOAQAEAQQAKAhgHAkQgDASgIAVQgKAggWAXQgbAdghAcQg2AvgzAoQgaAUgYAWQgGAFgGAGQgaAWgbAfQgCADgDADQgJALgJAMQgDAEgCAEQgDADgDAEQgPAXgQAUQgDAEgDAEQgDAEgDAEQgGAIgEAHQgEAFgEAFQgHAJgHAIQgFAGgFAGQgHAJgIAIQgGAHgFAGQgHAGgGAGQg1A3gwATQhQAnhkgDQgJgJgJgKQgTg2gXg/g");
            this.shape_163.setTransform(141.6563,80.8392);
        
            this.shape_164 = new cjs.Shape();
            this.shape_164.graphics.f("#FFFFFF").s().p("AlgGUIgSgTIgqh1IATgIQAbgNAXgPQAdgWASgSQAwgXAfgdQAagXAXgfQAqg6AshWIA8h3IAGgKQAnhCAtgtQAogpAtgWIAZgMQBBgcAxgCQAJAAALADQAXAFAYAQQASANAMAQQAOAQAEAQQAKAhgHAkQgDASgIAVQgKAggWAXQgbAdghAcQg2AvgzAoIgyAqIgMALQgaAWgbAfIgFAGIgSAXIgFAIIgGAHQgPAXgQAUIgGAIIgGAIIgKAPIgIAKIgOARIgKAMIgPARIgLANIgNAMQg1A3gwATQhJAkhaAAIgRAAg");
            this.shape_164.setTransform(141.6563,80.8392);
        
            this.shape_165 = new cjs.Shape();
            this.shape_165.graphics.f().s("#667D96").ss(4,1,1).p("AmeEMIATgJQAagNAXgQQAcgWASgSQAwgXAfgcQAbgXAWgfQArg5AshVQAdg4Agg+QADgFADgFQAnhCAtgtQAogoAtgXQANgGAMgFQBBgcAxgCQAJAAALADQAWAEAZARQASALANAQQAPAPAEAQQALAhgGAkQgCASgHAVQgJAhgWAXQgbAcghAcQg2Aug0AnQgaAUgYAVQgGAFgHAGQgaAVgbAfQgDACgCADQgJALgKAMQgDAEgCAEQgDADgDAEQgQAWgPAUQgDAFgDADQgEAEgDAEQgGAIgFAHQgDAFgEAFQgHAJgHAIQgFAGgEAGQgIAJgIAIQgFAGgGAGQgGAHgGAGQg2A3gvATQhPAphjgDQgKgIgKgIQgUg2gag+g");
            this.shape_165.setTransform(141.8029,81.1573);
        
            this.shape_166 = new cjs.Shape();
            this.shape_166.graphics.f("#FFFFFF").s().p("AlcGQIgUgQIguh0IATgJQAagNAXgQQAcgWASgSQAwgXAfgcQAbgXAWgfQArg5AshVIA9h2IAGgKQAnhCAtgtQAogoAtgXIAZgLQBBgcAxgCQAJAAALADQAWAEAZARQASALANAQQAPAPAEAQQALAhgGAkQgCASgHAVQgJAhgWAXQgbAcghAcQg2Aug0AnIgyApIgNALQgaAVgbAfIgFAFIgTAXIgFAIIgGAHIgfAqIgGAIIgHAIIgLAPIgHAKIgOARIgJAMIgQARIgLAMIgMANQg2A3gvATQhKAnhdAAIgLgBg");
            this.shape_166.setTransform(141.8029,81.1573);
        
            this.shape_167 = new cjs.Shape();
            this.shape_167.graphics.f().s("#667D96").ss(4,1,1).p("AmfEMIASgIQAagPAWgQQAcgXARgSQAxgXAfgbQAbgXAXgeQArg4AshVQAdg4Ahg9QADgFACgFQAohCAtgsQAogoAtgWQANgGAMgFQBAgcAygCQAJAAALACQAWAFAZAPQASAMANAPQAQAPAEAPQANAhgFAjQgBATgHAUQgIAigVAXQgcAcggAcQg2Atg1AmQgaAUgZAUQgGAFgHAGQgbAUgbAeQgDACgCADQgKALgJALQgDAEgDAEQgCAEgDADQgQAWgQAUQgDAFgDADQgEAEgDAEQgGAIgFAHQgDAFgEAFQgHAJgHAIQgFAGgFAFQgHAJgIAJQgFAGgGAGQgGAGgGAHQg2A4gtASQhPAqhjgCQgKgHgLgHQgWg0gcg/g");
            this.shape_167.setTransform(141.9346,81.4984);
        
            this.shape_168 = new cjs.Shape();
            this.shape_168.graphics.f("#FFFFFF").s().p("AlYGNIgVgOIgyhzIASgIQAagPAWgQQAcgXARgSQAxgXAfgbQAbgXAXgeQArg4AshVIA+h1IAFgKQAohCAtgsQAogoAtgWIAZgLQBAgcAygCQAJAAALACQAWAFAZAPQASAMANAPQAQAPAEAPQANAhgFAjQgBATgHAUQgIAigVAXQgcAcggAcQg2Atg1AmIgzAoIgNALQgbAUgbAeIgFAFIgTAWIgGAIIgFAHIggAqIgGAIIgHAIIgLAPIgHAKIgOARIgKALIgPASIgLAMIgMANQg2A4gtASQhMAohfAAIgHAAg");
            this.shape_168.setTransform(141.9346,81.4984);
        
            this.shape_169 = new cjs.Shape();
            this.shape_169.graphics.f().s("#667D96").ss(4,1,1).p("AmhEMIASgJQAZgPAWgRQAbgXARgTQAxgWAfgaQAbgXAXgdQAsg4AshUQAeg4Agg9QADgFADgFQAohBAtgrQAogoAtgWQAMgGANgFQA/gbAygDQAJAAALACQAWAFAZAPQATALAOAOQAQAPAFAPQANAggDAjQAAATgGAUQgIAjgVAWQgbAcggAcQg2Atg2AkQgaAUgaATQgGAFgHAGQgbATgcAeQgDACgCADQgKAKgJAMQgDADgDAEQgDAEgDADQgQAWgQAUQgDAEgDAEQgEAEgDADQgGAIgFAHQgDAFgEAFQgIAJgHAIQgEAGgFAFQgHAJgIAJQgFAGgGAGQgGAGgGAHQg2A5gsASQhOAqhjAAQgLgGgLgHQgYgzgeg+g");
            this.shape_169.setTransform(142.1023,81.8211);
        
            this.shape_170 = new cjs.Shape();
            this.shape_170.graphics.f("#FFFFFF").s().p("AlVGKIgWgNIg2hxIASgJQAZgPAWgRQAbgXARgTQAxgWAfgaQAbgXAXgdQAsg4AshUIA+h1IAGgKQAohBAtgrQAogoAtgWIAZgLQA/gbAygDQAJAAALACQAWAFAZAPQATALAOAOQAQAPAFAPQANAggDAjQAAATgGAUQgIAjgVAWQgbAcggAcQg2Atg2AkIg0AnIgNALQgbATgcAeIgFAFIgTAWIgGAHIgGAHIggAqIgGAIIgHAHIgLAPIgHAKIgPARIgJALIgPASIgLAMIgMANQg2A5gsASQhNAqhhAAIgDAAg");
            this.shape_170.setTransform(142.1023,81.8211);
        
            this.shape_171 = new cjs.Shape();
            this.shape_171.graphics.f().s("#667D96").ss(4,1,1).p("AmjENIASgKQAZgQAVgRQAagYARgTQAygWAegZQAbgWAYgdQAtg4ArhTQAeg4Ahg8QADgFADgFQAohAAtgrQApgoAtgWQAMgGAMgFQA/gaAygDQAJgBALADQAVAEAbAPQATAKAOAOQARAOAFAPQAPAggCAjQAAATgFAUQgHAkgVAVQgbAcggAbQg2Atg3AjQgaATgaATQgHAFgGAFQgcATgdAdQgCACgDADQgJAKgKALQgDAEgDAEQgDADgDAEQgQAVgRAUQgDAEgDAEQgDAEgDADQgGAIgGAHQgEAFgDAFQgHAIgHAIQgFAGgFAGQgHAJgHAIQgGAGgFAGQgHAHgGAGQg2A6gqASQhOAshiAAQgMgFgMgGQgagyggg9g");
            this.shape_171.setTransform(142.2868,82.1458);
        
            this.shape_172 = new cjs.Shape();
            this.shape_172.graphics.f("#FFFFFF").s().p("AlpF8Ig6hvIASgKQAZgQAVgRQAagYARgTQAygWAegZQAbgWAYgdQAtg4ArhTIA/h0IAGgKQAohAAtgrQApgoAtgWIAYgLQA/gaAygDQAJgBALADQAVAEAbAPQATAKAOAOQARAOAFAPQAPAggCAjQAAATgFAUQgHAkgVAVQgbAcggAbQg2Atg3AjIg0AmIgNAKQgcATgdAdIgFAFIgTAVIgGAIIgGAHIghApIgGAIIgGAHIgMAPIgHAKIgOAQIgKAMIgOARIgLAMIgNANQg2A6gqASQhOAshiAAIgYgLg");
            this.shape_172.setTransform(142.2868,82.1458);
        
            this.shape_173 = new cjs.Shape();
            this.shape_173.graphics.f().s("#667D96").ss(4,1,1).p("AmlENIARgKQAZgRAUgSQAagYAQgTQAzgWAegYQAbgWAYgdQAug3ArhSQAfg4Ahg7QADgFACgFQAphAAtgrQApgnAtgWQAMgGAMgFQA+gaAzgDQAIgBAMADQAVAEAaAOQAUAKAOANQASAOAFAOQAQAgAAAjQABATgFAUQgGAlgUAVQgcAcgfAaQg2Asg4AjQgbASgaATQgGAEgHAFQgdASgdAdQgCACgDADQgKAKgJALQgDADgDAEQgDADgDAEQgRAVgRATQgDAFgDADQgDAEgDAEQgHAHgFAHQgEAFgDAFQgIAIgHAIQgEAGgFAGQgHAJgIAIQgFAGgFAGQgHAHgFAGQg3A7gpASQhNAshiACQgMgFgNgFQgcgwgig9g");
            this.shape_173.setTransform(142.4591,82.4958);
        
            this.shape_174 = new cjs.Shape();
            this.shape_174.graphics.f("#FFFFFF").s().p("AlnF6Ig+htIARgKQAZgRAUgSQAagYAQgTQAzgWAegYQAbgWAYgdQAug3ArhSIBAhzIAFgKQAphAAtgrQApgnAtgWIAYgLQA+gaAzgDQAIgBAMADQAVAEAaAOQAUAKAOANQASAOAFAOQAQAgAAAjQABATgFAUQgGAlgUAVQgcAcgfAaQg2Asg4AjIg1AlIgNAJQgdASgdAdIgFAFIgTAVIgGAHIgGAHIgiAoIgGAIIgGAIIgMAOIgHAKIgPAQIgJAMIgPARIgKAMIgMANQg3A7gpASQhNAshiACIgZgKg");
            this.shape_174.setTransform(142.4591,82.4958);
        
            this.shape_175 = new cjs.Shape();
            this.shape_175.graphics.f().s("#667D96").ss(4,1,1).p("AmnENIARgKQAYgSAUgSQAZgaAPgTQA0gWAdgXQAcgVAYgdQAvg1ArhSQAfg4Ahg7QADgFADgEQAphAAtgqQApgnAsgWQANgGAMgFQA9gZAzgEQAJgBALADQAVAEAbANQAUAKAPAMQASAOAGANQARAhABAiQABATgDAUQgFAmgUAUQgcAcggAaQg1Asg5AhQgbATgaARQgHAFgHAFQgdARgeAcQgCACgDADQgKAJgKALQgDADgDAEQgCADgDAEQgSAUgRAUQgDAEgDAEQgDADgEAEQgGAIgFAGQgEAFgDAFQgIAIgHAJQgFAGgEAFQgHAJgIAIQgFAGgFAGQgGAHgGAGQg3A8goASQhNAthgACQgOgDgOgEQgdgvgkg9g");
            this.shape_175.setTransform(142.6725,82.8357);
        
            this.shape_176 = new cjs.Shape();
            this.shape_176.graphics.f("#FFFFFF").s().p("AlmF5IhBhsIARgKQAYgSAUgSQAZgaAPgTQA0gWAdgXQAcgVAYgdQAvg1ArhSIBAhzIAGgJQAphAAtgqQApgnAsgWIAZgLQA9gZAzgEQAJgBALADQAVAEAbANQAUAKAPAMQASAOAGANQARAhABAiQABATgDAUQgFAmgUAUQgcAcggAaQg1Asg5AhIg1AkIgOAKQgdARgeAcIgFAFIgUAUIgGAHIgFAHIgjAoIgGAIIgHAHIgLAOIgHAKIgPARIgJALIgPARIgKAMIgMANQg3A8goASQhNAthgACIgcgHg");
            this.shape_176.setTransform(142.6725,82.8357);
        
            this.shape_177 = new cjs.Shape();
            this.shape_177.graphics.f().s("#667D96").ss(4,1,1).p("AmqEOIARgMQAYgSAUgTQAYgaAPgUQA0gVAdgWQAcgVAYgcQAwg1ArhRQAfg4Aig7QADgEADgFQAog/AugqQApgnAsgVQANgGAMgFQA9gZAzgEQAIgBAMADQAUAEAcANQAVAJAOALQATANAHAOQASAgACAiQACATgDAVQgEAmgUATQgcAdgfAZQg2Arg5AhQgbASgbARQgHAEgHAFQgeAQgeAbQgCADgDACQgKAKgKAKQgDAEgDADQgDADgDAEQgRAUgSAUQgDAEgDADQgDAEgEAEQgGAHgGAHQgEAEgDAFQgHAIgHAJQgFAGgEAFQgIAJgHAIQgFAGgFAGQgGAHgGAGQg3A9gnARQhMAvhgADQgOgCgPgEQgfgtgng8g");
            this.shape_177.setTransform(142.8818,83.1607);
        
            this.shape_178 = new cjs.Shape();
            this.shape_178.graphics.f("#FFFFFF").s().p("AlkF3Qgfgtgng8IARgMQAYgSAUgTQAYgaAPgUQA0gVAdgWQAcgVAYgcQAwg1ArhRIBBhzIAGgJQAog/AugqQApgnAsgVIAZgLQA9gZAzgEQAIgBAMADQAUAEAcANQAVAJAOALQATANAHAOQASAgACAiQACATgDAVQgEAmgUATQgcAdgfAZQg2Arg5AhIg2AjIgOAJQgeAQgeAbIgFAFIgUAUIgGAHIgGAHIgjAoIgGAHIgHAIIgMAOIgHAJIgOARIgJALIgPARIgKAMIgMANQg3A9gnARQhMAvhgADIgdgGg");
            this.shape_178.setTransform(142.8818,83.1607);
        
            this.shape_179 = new cjs.Shape();
            this.shape_179.graphics.f().s("#667D96").ss(4,1,1).p("AmsEOIAQgMQAXgTAUgTQAXgbAPgUQA0gVAdgVQAcgUAZgcQAwg1AshQQAfg4Aig6QADgEADgFQApg+AtgqQApgmAtgWQAMgGAMgEQA8gZA0gEQAIgBAMADQAUADAcANQAVAJAPAKQAUANAHANQATAgAEAhQACAUgCAUQgDAngUATQgcAcgfAaQg1Aqg6AgQgcARgbAQQgIAFgHAEQgeAQgeAbQgDACgDADQgKAJgKAKQgDADgDAEQgDADgDAEQgSATgRAUQgDAEgDADQgEAEgDAEQgGAHgGAGQgEAFgDAFQgIAIgHAIQgFAGgEAGQgHAIgHAJQgGAGgFAGQgGAGgGAHQg3A9glASQhMAvhfAEQgPgBgQgDQghgsgog8g");
            this.shape_179.setTransform(143.1125,83.4958);
        
            this.shape_180 = new cjs.Shape();
            this.shape_180.graphics.f("#FFFFFF").s().p("AljF2Qghgsgog8IAQgMQAXgTAUgTQAXgbAPgUQA0gVAdgVQAcgUAZgcQAwg1AshQIBBhyIAGgJQApg+AtgqQApgmAtgWIAYgKQA8gZA0gEQAIgBAMADQAUADAcANQAVAJAPAKQAUANAHANQATAgAEAhQACAUgCAUQgDAngUATQgcAcgfAaQg1Aqg6AgIg3AhIgPAJQgeAQgeAbIgGAFIgUATIgGAHIgGAHIgjAnIgGAHIgHAIIgMANIgHAKIgPAQIgJAMIgOARIgLAMIgMANQg3A9glASQhMAvhfAEIgfgEg");
            this.shape_180.setTransform(143.1125,83.4958);
        
            this.shape_181 = new cjs.Shape();
            this.shape_181.graphics.f().s("#667D96").ss(4,1,1).p("AmvEOIAQgMQAXgUATgUQAWgbAPgUQA0gVAdgUQAdgUAZgcQAwg0AshPQAgg4Aig5QADgFADgEQApg+AugqQAoglAtgWQAMgGAMgEQA8gZA0gEQAIgBAMADQATADAdAMQAWAJAPAJQAUANAIAMQAUAgAFAhQAEAUgCAUQgDAogSATQgdAcgfAZQg1Aqg7AeQgcARgcAQQgHAEgHAEQgfAPgfAbQgCACgDACQgKAJgLAKQgDADgDAEQgCADgEAEQgSATgRATQgEAEgDAEQgDADgEAEQgGAHgGAHQgEAEgDAFQgHAIgHAIQgFAGgFAGQgHAIgHAJQgFAGgFAGQgGAGgGAHQg4A+gjARQhLAwhfAGQgQgBgRgCQgigrgrg7g");
            this.shape_181.setTransform(143.3614,83.8458);
        
            this.shape_182 = new cjs.Shape();
            this.shape_182.graphics.f("#FFFFFF").s().p("AliF0Qgigrgrg7IAQgMQAXgUATgUQAWgbAPgUQA0gVAdgUQAdgUAZgcQAwg0AshPIBChxIAGgJQApg+AugqQAoglAtgWIAYgKQA8gZA0gEQAIgBAMADQATADAdAMQAWAJAPAJQAUANAIAMQAUAgAFAhQAEAUgCAUQgDAogSATQgdAcgfAZQg1Aqg7AeIg4AhIgOAIQgfAPgfAbIgFAEIgVATIgGAHIgGAHIgjAmIgHAIIgHAHIgMAOIgHAJIgOAQIgKAMIgOARIgKAMIgMANQg4A+gjARQhLAwhfAGIghgDg");
            this.shape_182.setTransform(143.3614,83.8458);
        
            this.shape_183 = new cjs.Shape();
            this.shape_183.graphics.f().s("#667D96").ss(4,1,1).p("AmxEPIAQgNQAWgVASgVQAWgbAOgVQA1gUAdgTQAdgUAZgbQAxg0AshPQAgg3Aig5QADgEADgFQAqg9AugpQAogmAtgVQAMgGAMgEQA7gYA1gFQAHgBAMADQAUADAdALQAWAJAQAJQAVALAHAMQAWAgAGAhQAEAUgBAVQgBAogTASQgcAcgfAZQg1Apg8AeQgcAQgcAPQgIAEgHAFQgfAOggAZQgCADgDACQgLAJgKAKQgDADgDADQgDADgDAEQgTATgRATQgEAEgDADQgDAEgEADQgGAHgGAHQgEAFgEAEQgHAIgHAIQgFAGgEAGQgHAIgHAJQgFAGgFAGQgGAGgGAHQg4A/giARQhLAxheAGQgRABgRgBQgkgqgtg6g");
            this.shape_183.setTransform(143.585,84.194);
        
            this.shape_184 = new cjs.Shape();
            this.shape_184.graphics.f("#FFFFFF").s().p("AlgFzQgkgqgtg6IAQgNQAWgVASgVQAWgbAOgVQA1gUAdgTQAdgUAZgbQAxg0AshPQAgg3Aig5IAGgJQAqg9AugpQAogmAtgVIAYgKQA7gYA1gFQAHgBAMADQAUADAdALQAWAJAQAJQAVALAHAMQAWAgAGAhQAEAUgBAVQgBAogTASQgcAcgfAZQg1Apg8AeIg4AfIgPAJQgfAOggAZIgFAFIgVATIgGAGIgGAHIgkAmIgHAHIgHAHIgMAOIgIAJIgOAQIgJAMIgOARIgKAMIgMANQg4A/giARQhLAxheAGIgLAAIgXAAg");
            this.shape_184.setTransform(143.585,84.194);
        
            this.shape_185 = new cjs.Shape();
            this.shape_185.graphics.f().s("#667D96").ss(4,1,1).p("AmlEBQAUgTAUgYQASgXAQgaQA2gUAdgSQAdgUAZgaQAwgwAuhRQAjg8Amg9QAqg8AugpQAzgvA6gWQA7gXA0gFQATgCAyARQA2ATAOAUQAkA0gBA1QgBApgSASQhOBNhfAtIhIAmQgiAPgjAcQgOALgNANQgDAEgEADQgSATgSATQgHAHgHAHQgLAMgJALQgMAOgLANQgHAJgHAIQgLANgLAMQg4BBghAQQhYA8hzgBQgmgpgvg6g");
            this.shape_185.setTransform(143.853,84.5906);
        
            this.shape_186 = new cjs.Shape();
            this.shape_186.graphics.f("#FFFFFF").s().p("AlfFxQgmgpgvg6IAPgNQAUgTAUgYQASgXAQgaQA2gUAdgSQAdgUAZgaQAwgwAuhRQAjg8Amg9QAqg8AugpQAzgvA6gWQA7gXA0gFQATgCAyARQA2ATAOAUQAkA0gBA1QgBApgSASQhOBNhfAtIhIAmQgiAPgjAcIgbAYIgHAHIgkAmIgOAOIgUAXIgXAbIgOARIgWAZQg4BBghAQQhWA7hxAAIgEAAg");
            this.shape_186.setTransform(143.853,84.5906);
        
            this.shape_187 = new cjs.Shape();
            this.shape_187.graphics.f().s("#667D96").ss(4,1,1).p("Am2EOIAPgNQASgUAUgYQARgXAQgaQAZgKALgEQAcgMATgMQAggWAXgXQAwguAshOQAmhBAng8QAlg0AoglQAGgGAGgGQA0guA6gWQAogPAlgHQASgEARgBQAUgCAxARQA1ATAPAVQAPAUAJAWQANAfgBAfQAAAOgCAMQgEAWgMAMQgKAKgKAKQghAfgmAXQgoAZgqATQgfAQgfAOQgGADgFADQgiAOgkAbQgOALgNANQgDADgEAEQgPAOgOAPQgEAEgEAEQgHAHgHAHQgLAMgJALQgMAOgLANQgCACgBABQgGAHgFAHQgLANgLANQgoAugaAVQgMAJgKAFQhZA8hzAAQgngngwg4g");
            this.shape_187.setTransform(144.0759,84.94);
        
            this.shape_188 = new cjs.Shape();
            this.shape_188.graphics.f("#FFFFFF").s().p("AlfFuQgngngwg4IAAgBIAPgNQASgUAUgYQARgXAQgaIAkgOQAcgMATgMQAggWAXgXQAwguAshOQAmhBAng8QAlg0AoglIAMgMQA0guA6gWQAogPAlgHQASgEARgBQAUgCAxARQA1ATAPAVQAPAUAJAWQANAfgBAfQAAAOgCAMQgEAWgMAMIgUAUQghAfgmAXQgoAZgqATIg+AeIgLAGQgiAOgkAbIgbAYIgHAHIgdAdIgIAIIgOAOIgUAXIgXAbIgDADIgLAOIgWAaQgoAugaAVQgMAJgKAFQhYA8hyAAIgCAAg");
            this.shape_188.setTransform(144.0759,84.94);
        
            this.shape_189 = new cjs.Shape();
            this.shape_189.graphics.f().s("#667D96").ss(4,1,1).p("Am5EPIAPgPQASgUATgYQAQgXAQgbQAYgKALgEQAdgMATgLQAhgWAXgXQAwgtAuhOQAmhBAng7QAmg0AoglQAGgGAGgGQA1gtA7gVQAngQAmgHQASgDARgBQAVgCAwARQA1ATAPAVQAPAVAJAVQAOAfgBAgQAAAOgBALQgEAWgLAMQgKALgKAKQghAfgnAWQgoAXgrARQgfAPgfAOQgFADgGACQgjANgkAcQgNAKgOANQgDADgEADQgPAPgOAOQgEAEgEAEQgIAIgGAHQgMALgJALQgMAOgLANQgCACgBACQgGAHgFAHQgLANgLAMQgoAvgaAVQgMAJgKAFQhYA9h1gBQgngkgxg2g");
            this.shape_189.setTransform(144.2509,85.2697);
        
            this.shape_190 = new cjs.Shape();
            this.shape_190.graphics.f("#FFFFFF").s().p("AlgFqQgngkgxg2IgBgBIAPgPQASgUATgYQAQgXAQgbIAjgOQAdgMATgLQAhgWAXgXQAwgtAuhOQAmhBAng7QAmg0AoglIAMgMQA1gtA7gVQAngQAmgHQASgDARgBQAVgCAwARQA1ATAPAVQAPAVAJAVQAOAfgBAgQAAAOgBALQgEAWgLAMIgUAVQghAfgnAWQgoAXgrARIg+AdIgLAFQgjANgkAcIgbAXIgHAGIgdAdIgIAIIgOAPIgVAWIgXAbIgDAEIgLAOIgWAZQgoAvgaAVQgMAJgKAFQhXA8hyAAIgEAAg");
            this.shape_190.setTransform(144.2509,85.2697);
        
            this.shape_191 = new cjs.Shape();
            this.shape_191.graphics.f().s("#667D96").ss(4,1,1).p("Am7EPIAOgPQASgUASgYQAQgZAPgbQAYgKALgDQAdgMATgLQAhgVAYgXQAxgtAuhNQAnhCAng7QAngzAoglQAGgGAGgFQA1gtA8gVQAogPAmgHQASgDARgBQAVgCAwARQA0ATARAVQAPAVAJAVQAOAfAAAgQAAAOgCALQgDAWgLANQgJALgKAJQggAggoAVQgpAVgrAQQgfAOgfAOQgGABgGADQgjAMgkAbQgOAKgOAMQgDAEgEADQgPAOgPAPQgEAEgEADQgHAIgHAHQgMALgJALQgNAOgKAOQgCABgBACQgGAHgGAHQgLANgKAMQgpAxgZATQgMAKgKAFQhYA+h1gBQgogjgyg0g");
            this.shape_191.setTransform(144.475,85.6191);
        
            this.shape_192 = new cjs.Shape();
            this.shape_192.graphics.f("#FFFFFF").s().p("AlgFnQgogjgyg0IgBgBIAOgPQASgUASgYQAQgZAPgbIAjgNQAdgMATgLQAhgVAYgXQAxgtAuhNQAnhCAng7QAngzAoglIAMgLQA1gtA8gVQAogPAmgHQASgDARgBQAVgCAwARQA0ATARAVQAPAVAJAVQAOAfAAAgQAAAOgCALQgDAWgLANIgTAUQggAggoAVQgpAVgrAQIg+AcIgMAEQgjAMgkAbQgOAKgOAMIgHAHQgPAOgPAPIgIAHIgOAPIgVAWQgNAOgKAOIgDADIgMAOIgVAZQgpAxgZATQgMAKgKAFQhYA9hzAAIgCAAg");
            this.shape_192.setTransform(144.475,85.6191);
        
            this.shape_193 = new cjs.Shape();
            this.shape_193.graphics.f().s("#667D96").ss(4,1,1).p("Am9EPIANgPQARgVARgYQAQgZAOgbQAYgKALgEQAdgLAUgLQAigVAYgWQAygsAuhOQAnhCAog6QAngzApglQAGgGAHgFQA1gsA8gVQAogPAngGQARgDASgBQAWgBAvAQQA0ATARAWQAPAUAKAWQANAeABAgQAAAOgBALQgDAWgKANQgJALgKAKQgfAhgqASQgpAUgrAPQggANgfANQgGACgGABQgjAMglAaQgOAKgOAMQgDADgEAEQgPANgPAPQgEAEgFAEQgHAHgHAHQgLALgKALQgNAOgKAOQgCABgBACQgGAHgGAHQgLANgKAMQgqAygYATQgLAJgKAGQhZA+h1AAQgqghgygzg");
            this.shape_193.setTransform(144.675,85.9721);
        
            this.shape_194 = new cjs.Shape();
            this.shape_194.graphics.f("#FFFFFF").s().p("Am8EQIgBgBIANgPQARgVARgYQAQgZAOgbIAjgOQAdgLAUgLQAigVAYgWQAygsAuhOQAnhCAog6QAngzApglIANgLQA1gsA8gVQAogPAngGQARgDASgBQAWgBAvAQQA0ATARAWQAPAUAKAWQANAeABAgIgBAZQgDAWgKANIgTAVQgfAhgqASQgpAUgrAPIg/AaIgMADQgjAMglAaQgOAKgOAMIgHAHIgeAcIgJAIIgOAOIgVAWQgNAOgKAOIgDADIgMAOIgVAZQgqAygYATQgLAJgKAGQhZA+h1AAQgqghgygzg");
            this.shape_194.setTransform(144.675,85.9721);
        
            this.shape_195 = new cjs.Shape();
            this.shape_195.graphics.f().s("#667D96").ss(4,1,1).p("AnAEQIANgPQAQgWARgZQAPgZAOgbQAXgLALgDQAdgKAVgLQAigVAYgVQAzgtAvhNQAohCAog6QAngzAqgkQAGgGAGgFQA2gsA9gVQAogOAngGQASgDARgBQAYgBAtARQA0ASASAXQAPAUAKAVQAOAfABAgQAAANAAAMQgEAWgJANQgJAMgJAKQgfAhgrARQgpASgsANQggAMggAMQgFACgGACQgkAKglAZQgOAKgOAMQgEADgEAEQgPANgPAPQgFAEgEADQgHAIgHAHQgMALgJALQgNAOgLANQgCACgBABQgFAIgGAHQgLANgLAMQgqAzgXASQgMAKgKAFQhYBAh1gBQgrgfg0gxg");
            this.shape_195.setTransform(144.9,86.2973);
        
            this.shape_196 = new cjs.Shape();
            this.shape_196.graphics.f("#FFFFFF").s().p("AlgFhQgrgfgzgxIgBgBIAMgPQAQgWARgZQAPgZAOgbQAXgLAMgDQAcgKAVgLQAigVAYgVQA0gtAuhNQAohCAog6QAngzAqgkIAMgLQA3gsA8gVQAogOAngGIAjgEQAYgBAtARQA0ASASAXQAPAUAKAVQAOAfABAgIgBAZQgCAWgKANIgSAWQgfAhgrARQgqASgrANIhAAYIgLAEQgkAKgkAZQgPAKgOAMIgHAHIgfAcIgJAHIgOAPIgVAWQgNAOgLANIgDADIgLAPIgVAZQgqAzgYASQgLAKgLAFQhXA/h0AAIgCAAg");
            this.shape_196.setTransform(144.9,86.2973);
        
            this.shape_197 = new cjs.Shape();
            this.shape_197.graphics.f().s("#667D96").ss(4,1,1).p("AnCEQIAMgQQAQgVAQgaQAOgZAOgcQAWgKAMgEQAdgJAVgLQAigUAZgWQA0gsAvhNQAohCApg5QAogzAqgkQAGgFAHgGQA2grA9gUQAogOAngGQASgDASgBQAYAAAtAQQAzASATAXQAPAUAKAWQAPAeABAgQABAOgBALQgCAWgKAOQgIALgKALQgeAhgsAQQgqAQgrAMQghALgfALQgGACgGACQgkAJglAZQgPAJgPAMQgDADgEADQgPAOgQAOQgEAEgEAEQgIAHgHAHQgMALgJALQgNAOgLANQgCACgBACQgGAHgFAHQgLANgLAMQgqA0gXASQgLAJgKAGQhZBAh2AAQgrgdg1gwg");
            this.shape_197.setTransform(145.125,86.6493);
        
            this.shape_198 = new cjs.Shape();
            this.shape_198.graphics.f("#FFFFFF").s().p("AnBERIgBgBIAMgQQAQgVAQgaQAOgZAOgcQAWgKAMgEQAdgJAVgLQAigUAZgWQA0gsAvhNQAohCApg5QAogzAqgkIANgLQA2grA9gUQAogOAngGIAkgEQAYAAAtAQQAzASATAXQAPAUAKAWQAPAeABAgQABAOgBALQgCAWgKAOIgSAWQgeAhgsAQQgqAQgrAMIhAAWIgMAEQgkAJglAZQgPAJgPAMIgHAGIgfAcIgIAIIgPAOIgVAWQgNAOgLANIgDAEIgLAOIgWAZQgqA0gXASQgLAJgKAGQhZBAh2AAQgrgdg1gwg");
            this.shape_198.setTransform(145.125,86.6493);
        
            this.shape_199 = new cjs.Shape();
            this.shape_199.graphics.f().s("#667D96").ss(4,1,1).p("AnEEQIAMgQQAOgWAQgaQAOgaAMgcQAXgKALgDQAdgKAWgKQAjgTAZgWQA1grAvhNQAphDApg4QAogzArgjQAGgGAHgFQA3gsA9gTQApgOAngFQASgDASgBQAZAAAsAQQAzASATAYQAQATAKAWQAPAeACAgQABAOgBAMQgCAWgKANQgHAMgKALQgdAhgtAOQgrAPgrALQghAKggAKQgGABgGACQgkAJgmAYQgPAJgPAMQgDADgEADQgQANgPAOQgFAEgEAEQgIAHgHAHQgMALgJALQgNAOgLANQgCACgBACQgGAHgFAHQgLANgLANQgrA0gVASQgMAJgKAGQhZBBh2AAQgtgcg2gug");
            this.shape_199.setTransform(145.325,86.9743);
        
            this.shape_200 = new cjs.Shape();
            this.shape_200.graphics.f("#FFFFFF").s().p("AnEERIAAgBIAMgQIAegwQAOgaAMgcQAXgKALgDQAdgKAWgKQAjgTAZgWQA1grAvhNQAphDApg4QAogzArgjIANgLQA3gsA9gTQApgOAngFQASgDASgBQAZAAAsAQQAzASATAYQAQATAKAWQAPAeACAgQABAOgBAMQgCAWgKANQgHAMgKALQgdAhgtAOQgrAPgrALIhBAUIgMADQgkAJgmAYQgPAJgPAMIgHAGIgfAbIgJAIIgPAOIgVAWQgNAOgLANIgDAEIgLAOIgWAaQgrA0gVASIgWAPQhZBBh2AAQgtgcg2gug");
            this.shape_200.setTransform(145.325,86.9743);
        
            this.shape_201 = new cjs.Shape();
            this.shape_201.graphics.f().s("#667D96").ss(4,1,1).p("AnHEQIALgQQAPgXAOgaQANgaANgcQAWgLALgDQAdgJAXgKQAjgTAZgVQA2grAwhNQAphCAqg5QAogyArgjQAHgGAHgFQA3grA+gTQApgNAngGQASgCASgBQAaAAAsAQQAyASAUAYQAQAUALAVQAPAfACAfQABAOgBAMQgCAWgJAOQgHAMgJAKQgdAjguAMQgsANgrAKQghAIggAJQgGACgGACQglAHgmAYQgPAJgQAMQgDACgDADQgQANgQAOQgFAEgEAEQgIAHgHAHQgMALgJALQgOAOgLANQgBACgCACQgFAHgGAHQgLAOgKAMQgsA2gVAQQgLAKgKAGQhZBCh2AAQgugag3gtg");
            this.shape_201.setTransform(145.55,87.325);
        
            this.shape_202 = new cjs.Shape();
            this.shape_202.graphics.f("#FFFFFF").s().p("AnGERIgBgBIALgQQAPgXAPgaQANgaAMgcQAWgLALgDQAegJAWgKQAjgTAZgVQA3grAvhNQAphCAqg5QApgyAqgjIAOgLQA3grA+gTQApgNAogGQARgCASgBQAaAAAsAQQAyASAUAYQAQAUAKAVQAPAfADAfQABAOgBAMQgBAWgKAOQgHAMgJAKQgdAjguAMQgrANgsAKIhBARIgMAEQglAHgmAYQgPAJgQAMIgGAFIggAbIgJAIIgPAOIgVAWQgOAOgKANIgDAEIgMAOIgVAaQgsA2gUAQQgMAKgKAGQhZBCh2AAQgugag3gtg");
            this.shape_202.setTransform(145.55,87.325);
        
            this.shape_203 = new cjs.Shape();
            this.shape_203.graphics.f().s("#667D96").ss(4,1,1).p("AnJERIALgRQANgXAOgaQANgbALgdQAWgLAMgCQAdgJAXgKQAjgSAagVQA3grAwhNQAqhCAqg4QApgyArgjQAHgGAHgFQA3gqA/gTQApgNAogFQASgCASgBQAaAAAsAQQAxASAVAYQAQAUALAVQAPAfADAfQABAOAAAMQgCAWgIAOQgHANgJAKQgdAjgvALQgsALgrAJQgiAHggAIQgGACgGABQglAIgnAWQgPAJgQALQgDADgDADQgRANgQAOQgEAEgFADQgIAHgHAHQgMAMgJAKQgOAOgLAOQgBABgCACQgFAHgGAHQgLAOgKAMQgtA3gTAQQgMAKgKAGQhZBCh3ABQgvgZg3grg");
            this.shape_203.setTransform(145.7563,87.675);
        
            this.shape_204 = new cjs.Shape();
            this.shape_204.graphics.f("#FFFFFF").s().p("AnIERIgBAAIALgRIAbgxQANgbALgdQAWgLAMgCQAdgJAXgKQAjgSAagVQA3grAwhNQAqhCAqg4QApgyArgjIAOgLQA3gqA/gTQApgNAogFQASgCASgBQAaAAAsAQQAxASAVAYQAQAUALAVQAPAfADAfQABAOAAAMQgCAWgIAOQgHANgJAKQgdAjgvALQgsALgrAJIhCAPIgMADQglAIgnAWQgPAJgQALIgGAGIghAbIgJAHIgPAOIgVAWQgOAOgLAOIgDADIgLAOIgVAaQgtA3gTAQQgMAKgKAGQhZBCh3ABQgvgZg3grg");
            this.shape_204.setTransform(145.7563,87.675);
        
            this.shape_205 = new cjs.Shape();
            this.shape_205.graphics.f().s("#667D96").ss(4,1,1).p("AnLERIAKgRQANgXANgbQAMgcALgcQAVgMAMgCQAegIAXgKQAkgSAagUQA4gqAwhNQAqhDArg3QAqgyArgjQAHgFAHgFQA4gqBAgTQAogMApgFQASgCASgBQAbABArAPQAxASAVAZQAQATALAWQAQAeADAgQACANgBANQgBAWgIAOQgGAMgJAMQgcAjgxAJQgsAJgrAIQgjAGggAIQgGAAgGACQgmAHgmAVQgQAJgQAMQgDACgDADQgRAMgQAOQgFAEgEAEQgIAHgIAHQgMALgJALQgOANgLAOQgBABgCACQgGAIgFAHQgLANgKANQgtA3gTAQQgLAJgLAHQhZBDh3ABQgwgXg5gqg");
            this.shape_205.setTransform(145.9813,88);
        
            this.shape_206 = new cjs.Shape();
            this.shape_206.graphics.f("#FFFFFF").s().p("AnLESIAAgBIAKgRIAagyQAMgbALgdQAVgMAMgCQAegIAXgKQAkgRAagVQA4gqAwhNQAqhDArg3QAqgyArgiIAOgLQA4gqBAgTQAogMApgFQASgCASAAQAbAAArAQQAxARAVAZQAQAUALAVQAQAeADAgQACAOgBAMQgBAVgIAPQgGAMgJALQgcAkgxAJQgsAJgrAIQgjAGggAIIgMACQgmAHgmAVQgQAJgQALIgGAGQgRAMgQAOIgJAIIgQANIgVAXQgOAOgLANIgDADIgLAPIgVAaQgtA4gTAPQgLAJgLAHQhZBDh3ABQgwgXg5gpg");
            this.shape_206.setTransform(145.9813,88);
        
            this.shape_207 = new cjs.Shape();
            this.shape_207.graphics.f().s("#667D96").ss(4,1,1).p("AnOESIAKgSQAMgYANgbQALgbALgeQAVgLAMgCQAdgIAYgKQAkgRAagUQA6gqAwhNQArhCArg3QAqgxAsgjQAHgGAHgFQA5gpBAgTQApgLAogFQATgCARAAQAdAAAqAQQAwARAWAZQARAUALAVQAQAfAEAfQABAOAAALQgBAXgHAPQgHAMgIAMQgcAjgxAIQgtAIgsAGQgiAFghAGQgGACgGABQgmAGgnAVQgQAIgQALQgDADgDADQgRAMgRAOQgEAEgFADQgIAHgHAHQgNALgJALQgOAOgLANQgCACgBACQgGAHgFAHQgLAOgKAMQguA5gSAPQgLAKgKAGQhaBEh3ABQgxgVg6gog");
            this.shape_207.setTransform(146.2,88.35);
        
            this.shape_208 = new cjs.Shape();
            this.shape_208.graphics.f("#FFFFFF").s().p("AnNESIgBAAIAKgSIAYgzQAMgcALgdQAVgLALgDQAegHAXgKQAlgRAagUQA5grAxhMQArhDArg2QAqgyAsgiIAOgLQA5gpA/gTQApgLApgGQASgCASAAQAdABApAQQAxARAWAaQARASAKAWQAQAfAEAfIACAaQgBAWgIAPQgGANgIALQgcAjgyAHQgsAIgsAHQgjAEggAHIgMACQgnAHgnAVQgPAIgQALIgGAFQgRAMgRAOIgJAIIgQAOQgMALgJALQgPAOgKANIgDADIgMAPIgVAaQgtA5gTAPQgLAKgJAGQhaBEh3AAQgygUg5gog");
            this.shape_208.setTransform(146.2,88.35);
        
            this.shape_209 = new cjs.Shape();
            this.shape_209.graphics.f().s("#667D96").ss(4,1,1).p("AnQESIAJgSQAMgZALgbQALgcAKgdQAVgMAMgCQAdgHAZgJQAlgRAagUQA6gqAxhMQArhDAsg2QAqgxAtgjQAHgFAHgFQA5gpBBgSQApgMApgEQASgCASAAQAdABAqAPQAvASAXAZQARATALAWQAQAeAFAgQABANAAAMQAAAXgHAPQgGANgIALQgbAkgzAGQgtAGgsAFQgjAEghAFQgGABgGACQgnAFgnAUQgQAIgQALQgDADgEACQgRAMgRAOQgEAEgFAEQgIAHgIAGQgMAMgKAKQgOAOgKANQgCACgBACQgGAHgGAIQgLANgKANQguA5gRAPQgLAJgKAHQhaBFh3ABQgzgUg7gmg");
            this.shape_209.setTransform(146.425,88.7);
        
            this.shape_210 = new cjs.Shape();
            this.shape_210.graphics.f("#FFFFFF").s().p("AnQESIAAgBIAJgRIAXg0IAVg6QAVgLAMgCQAdgHAZgKQAlgQAagUQA6gqAxhMQArhDAsg3QAqgwAtgjIAOgKQA5gpBBgSQApgMApgFQASgCASAAQAdABAqAPQAvASAXAaQARATALAVQAQAfAFAfIABAaQAAAWgHAPQgGANgIAMQgbAkgzAGIhZALQgjAEghAFIgMACQgnAFgnAUQgQAJgQALIgHAFQgRAMgRAOIgJAHIgQAOIgWAWQgOAOgKANIgDAEIgMAOIgVAaQguA6gRAOIgVARQhaBFh3ABQgzgUg7gmg");
            this.shape_210.setTransform(146.425,88.7);
        
            this.shape_211 = new cjs.Shape();
            this.shape_211.graphics.f().s("#667D96").ss(4,1,1).p("AnTESIAJgSQALgZALgcQAKgcAKgeQAUgMAMgBQAdgHAZgJQAmgRAagTQA8gqAxhMQArhDAtg2QAqgxAtghQAHgGAIgFQA5goBBgSQAqgMApgDQATgCARAAQAeABApAPQAwARAYAaQAQATALAWQARAeAEAgQADANAAANQAAAWgHAPQgGANgHALQgbAlg0AFQguAEgsAEQgjADggAEQgHABgHABQgmAFgoATQgRAIgPALQgEACgEADQgRAMgQANQgFAEgFAEQgIAHgIAGQgNAMgKAKQgOAOgKANQgBACgCACQgGAHgGAIQgLANgKANQguA7gQANQgLAKgLAHQhZBFh4ABQgzgRg9glg");
            this.shape_211.setTransform(146.65,89.025);
        
            this.shape_212 = new cjs.Shape();
            this.shape_212.graphics.f("#FFFFFF").s().p("AnSESIAAAAIAIgSIAWg1IAUg6QAUgMAMgBQAdgHAZgJQAmgRAagTQA8gqAxhMQArhDAtg2QArgxAsghIAPgLQA5goBBgSQApgMAqgDQASgCASAAQAfABAoAPQAvARAYAaQAQATAMAWQARAeAFAgQACANAAANQgBAWgGAPQgGANgHALQgbAlg0AFIhaAIQgjADghAEIgNACQgmAFgoATQgQAIgQALIgHAFIgjAZIgJAIIgQANIgWAWQgOAOgLANIgDAEIgMAPIgVAaQguA7gQANIgVARQhaBFh4ABQgzgRg8glg");
            this.shape_212.setTransform(146.65,89.025);
        
            this.shape_213 = new cjs.Shape();
            this.shape_213.graphics.f().s("#667D96").ss(4,1,1).p("AnVESIAIgSQAKgaALgcQAJgcAJgfQAUgLANgCQAdgGAZgJQAmgQAbgTQA8gqAyhMQAshDAtg1QArgxAtghQAHgGAIgFQA6gnBBgSQAqgLApgEQATgCASABQAfABAoAPQAvARAYAbQARASAMAWQARAeAFAgQACANAAANQAAAWgGAQQgFANgIALQgaAlg1ADQguADgsACQgkACghAEQgGABgHABQgnADgoATQgQAIgRAKQgDADgEACQgRAMgRAOQgFADgFAEQgIAHgIAHQgNALgKALQgOANgKANQgCACgBACQgGAIgGAHQgLAOgKAMQgvA8gPANQgLAKgKAHQhaBGh4ABQg1gQg9gig");
            this.shape_213.setTransform(146.875,89.37);
        
            this.shape_214 = new cjs.Shape();
            this.shape_214.graphics.f("#FFFFFF").s().p("AnVETIAAgBIAIgSIAVg2IASg7QAUgLANgCQAdgGAZgJQAmgQAbgTQA8gqAyhMQAshDAtg1QArgxAtghIAPgLQA6gnBBgSQAqgLApgEQATgCASABQAfABAoAPQAvARAYAbQARASAMAWQARAeAFAgIACAaQAAAWgGAQQgFANgIALQgaAlg1ADIhaAFQgkACghAEIgNACQgnADgoATQgQAIgRAKIgHAFQgRAMgRAOIgKAHIgQAOIgXAWQgOANgKANIgDAEIgMAPIgVAaQgvA8gPANIgVARQhaBGh4ABQg1gQg9gig");
            this.shape_214.setTransform(146.875,89.37);
        
            this.shape_215 = new cjs.Shape();
            this.shape_215.graphics.f().s("#667D96").ss(4,1,1).p("AnYETIAIgTQAJgaAKgcQAJgdAJgfQATgMANgBQAdgGAagJQAmgPAbgTQA+gpAyhMQAshDAtg1QAsgwAughQAHgGAHgFQA7gnBCgRQAqgLAqgDQASgCASAAQAgACAoAOQAuASAZAbQARASAMAWQARAeAGAgQACANAAANQABAWgGAQQgFANgHAMQgaAlg2ACQgvABgsABQgkABghACQgGABgHABQgnADgpATQgRAGgQALQgEACgDADQgSALgRANQgFAEgFAEQgIAHgIAGQgNALgKALQgOAOgLANQgBACgCACQgFAHgGAIQgLAOgKAMQgwA9gOAMQgLAKgLAIQhZBGh5ABQg1gOg+ghg");
            this.shape_215.setTransform(147.1021,89.695);
        
            this.shape_216 = new cjs.Shape();
            this.shape_216.graphics.f("#FFFFFF").s().p("AnXETIgBAAIAIgTIATg2IASg8QATgMANgBQAdgGAagJQAmgPAbgTQA+gpAyhMQAshDAtg1QAsgwAughIAOgLQA7gnBCgRQAqgLAqgDQASgCASAAQAgACAoAOQAuASAZAbQARASAMAWQARAeAGAgIACAaQABAWgGAQQgFANgHAMQgaAlg2ACIhbACQgkABghACIgNACQgnADgpATQgRAGgQALIgHAFQgSALgRANIgKAIIgQANIgXAWQgOAOgLANIgDAEIgLAPIgVAaQgwA9gOAMQgLAKgLAIQhZBGh5ABQg1gOg+ghg");
            this.shape_216.setTransform(147.1021,89.695);
        
            this.shape_217 = new cjs.Shape();
            this.shape_217.graphics.f().s("#667D96").ss(4,1,1).p("AnaETIAHgTQAJgbAJgcQAJgeAHgfQATgLANgCQAegFAagJQAngPAbgSQA/gpAyhLQAthEAug0QAsgwAughQAHgGAIgEQA7gnBCgRQAqgLAqgDQATgBASAAQAhACAnAOQAtASAaAbQARASAMAWQASAeAGAgQACANABANQABAWgFAQQgFAOgHAMQgZAlg4AAQgvAAgsAAQglgBghACQgGAAgHABQgoACgpATQgRAGgQAKQgEADgDACQgSALgSAOQgFADgEAEQgJAHgIAGQgNAMgKAKQgOAOgLANQgBACgCACQgGAHgFAIQgLAOgKAMQgwA+gOAMQgLAKgKAHQhaBIh5ABQg3gMg/ggg");
            this.shape_217.setTransform(147.3273,90.0438);
        
            this.shape_218 = new cjs.Shape();
            this.shape_218.graphics.f("#FFFFFF").s().p("AnaETIAAAAIAHgTIASg3QAJgeAHgfQATgLANgCQAegFAagJQAngPAbgSQA/gpAyhLQAthEAug0QAsgwAughIAPgKQA7gnBCgRQAqgLAqgDQATgBASAAQAhACAnAOQAtASAaAbQARASAMAWQASAeAGAgIADAaQABAWgFAQQgFAOgHAMQgZAlg4AAIhbAAQglgBghACIgNABQgoACgpATQgRAGgQAKIgHAFQgSALgSAOIgJAHIgRANIgXAWQgOAOgLANIgDAEIgLAPIgVAaQgwA+gOAMQgLAKgKAHQhaBIh5ABQg3gMg/ggg");
            this.shape_218.setTransform(147.3273,90.0438);
        
            this.shape_219 = new cjs.Shape();
            this.shape_219.graphics.f().s("#667D96").ss(4,1,1).p("AndETIAHgTQAIgbAIgdQAIgeAIgfQASgMANgBQAegFAbgJQAngOAbgSQBAgpAyhLQAuhEAugzQAtgwAughQAIgFAHgFQA8gmBDgRQAqgKAqgDQATgBASAAQAiACAmAOQAtASAbAbQARATANAVQARAeAHAgQACANABANQABAWgEARQgFAOgHALQgYAng5gCQgwgCgsgCQglgBghABQgHAAgGABQgpABgpASQgRAHgRAJQgDACgEADQgSALgSANQgFAEgFADQgIAHgIAHQgOALgKAKQgOAOgKANQgCACgBACQgGAIgGAHQgLAOgKAMQgxA/gNAMQgKAKgKAHQhbBJh5ABQg3gLhAgdg");
            this.shape_219.setTransform(147.5591,90.3917);
        
            this.shape_220 = new cjs.Shape();
            this.shape_220.graphics.f("#FFFFFF").s().p("AncEUIgBgBIAHgTIAQg4IAQg9QASgMANgBQAegFAbgJQAngOAbgSQBAgpAyhLQAuhEAugzQAtgwAughIAPgKQA8gmBDgRQAqgKAqgDIAlgBQAiACAmAOQAtASAbAbQARATANAVQARAeAHAgIADAaQABAWgEARQgFAOgHALQgYAng5gCIhcgEQglgBghABIgNABQgpABgpASQgRAHgRAJIgHAFQgSALgSANIgKAHIgQAOIgYAVQgOAOgKANIgDAEIgMAPIgVAaQgxA/gNAMQgKAKgKAHQhbBJh5ABQg3gLhAgdg");
            this.shape_220.setTransform(147.5591,90.3917);
        
            this.shape_221 = new cjs.Shape();
            this.shape_221.graphics.f().s("#667D96").ss(4,1,1).p("AnfEUIAGgUQAHgcAIgdQAHgeAHggQASgMANgBQAegEAbgJQAogNAcgSQBAgoAzhMQAuhEAvgyQAtgwAvghQAIgFAHgFQA8gmBEgQQAqgKArgCQATgBASAAQAiACAmAPQAsARAcAcQARASANAVQASAeAHAgQADANABANQABAXgEAQQgEAPgHALQgYAng6gDQgwgEgsgDQgmgCghAAQgHAAgGAAQgpABgqARQgRAHgRAJQgEACgDACQgTALgSANQgFAEgFADQgIAHgIAHQgOALgKALQgPANgKANQgBACgCACQgGAIgGAHQgLAOgJANQgyBAgMALQgKAJgLAIQhaBJh5ACQg5gJhBgcg");
            this.shape_221.setTransform(147.8188,90.7167);
        
            this.shape_222 = new cjs.Shape();
            this.shape_222.graphics.f("#FFFFFF").s().p("AnfEUIAGgUIAPg5IAOg+QASgMANgBQAegEAbgJQAogNAcgSQBAgoAzhMQAuhEAvgyQAtgwAvghIAPgKQA8gmBEgQQAqgKArgCIAlgBQAiACAmAPQAsARAcAcQARASANAVQASAeAHAgQADANABANQABAXgEAQQgEAPgHALQgYAng6gDQgwgEgsgDQgmgCghAAIgNAAQgpABgqARQgRAHgRAJIgHAEQgTALgSANIgKAHIgQAOQgOALgKALQgPANgKANIgDAEIgMAPIgUAbQgyBAgMALIgVARQhaBJh5ACQg5gJhBgcg");
            this.shape_222.setTransform(147.8188,90.7167);
        
            this.shape_223 = new cjs.Shape();
            this.shape_223.graphics.f().s("#667D96").ss(4,1,1).p("AniEUIAGgVQAHgcAHgdQAHgfAGggQASgMANAAQAdgEAcgJQAogNAdgSQBBgnAzhLQAvhFAvgyQAtgvAwggQAIgGAHgEQA9gmBEgPQAqgKArgCQATgCATABQAjADAlAOQAsARAcAcQARASANAWQATAdAHAgQADAOABANQACAWgEARQgDAOgHAMQgYAng6gEQgxgGgtgEQglgDgigBQgHgBgGABQgpAAgrAQQgRAHgSAKQgDABgDACQgTAKgSANQgFAEgFAEQgJAGgIAHQgOALgKALQgPANgKANQgBACgCACQgGAIgGAHQgLAOgJANQgyBBgLAKQgLAKgKAIQhbBKh6ACQg5gHhDgbg");
            this.shape_223.setTransform(148.0308,91.055);
        
            this.shape_224 = new cjs.Shape();
            this.shape_224.graphics.f("#FFFFFF").s().p("AniEUIAGgVIAOg5IANg/QASgMANAAQAdgEAcgJQAogNAdgSQBBgnAzhLQAvhFAvgyQAtgvAwggIAPgKQA9gmBEgPQAqgKArgCQATgCATABQAjADAlAOQAsARAcAcQARASANAWQATAdAHAgQADAOABANQACAWgEARQgDAOgHAMQgYAng6gEQgxgGgtgEQglgDgigBIgNAAQgpAAgrAQQgRAHgSAKIgGADQgTAKgSANIgKAIIgRANIgYAWQgPANgKANIgDAEIgMAPIgUAbQgyBBgLAKIgVASQhbBKh6ACQg5gHhDgbg");
            this.shape_224.setTransform(148.0308,91.055);
        
            this.shape_225 = new cjs.Shape();
            this.shape_225.graphics.f().s("#667D96").ss(4,1,1).p("AnkEUIAFgUQAGgdAGgdQAGgfAGghQASgMANAAQAdgEAdgIQAogNAdgRQBCgoA0hLQAvhEAwgyQAtgvAxggQAHgFAIgFQA9glBFgPQAqgJArgCQAUgBASABQAkACAkAOQAsARAdAdQARASANAVQATAeAIAgQADANABANQADAXgEARQgDAPgHAMQgXAng7gGQgygIgsgFQgmgEgigCQgHAAgHAAQgpgBgrAQQgRAGgSAKQgEACgDACQgTAJgSANQgGAEgEADQgJAHgJAHQgOALgKAKQgOAOgLANQgBACgCACQgFAIgGAHQgLAOgKANQgyBCgLAJQgKAKgLAJQhaBKh6ACQg7gFhDgZg");
            this.shape_225.setTransform(148.2731,91.375);
        
            this.shape_226 = new cjs.Shape();
            this.shape_226.graphics.f("#FFFFFF").s().p("AnkEVIAAgBIAFgUIAMg6IAMhAQASgMANAAQAdgEAdgIQAogNAdgRQBCgoA0hLQAvhEAwgyQAtgvAxggIAPgKQA9glBFgPQAqgJArgCQAUgBASABQAkACAkAOQAsARAdAdQARASANAVQATAeAIAgQADANABANQADAXgEARQgDAPgHAMQgXAng7gGQgygIgsgFQgmgEgigCIgOAAQgpgBgrAQQgRAGgSAKIgHAEQgTAJgSANIgKAHIgSAOQgOALgKAKQgOAOgLANIgDAEIgLAPIgVAbQgyBCgLAJIgVATQhaBKh6ACQg7gFhDgZg");
            this.shape_226.setTransform(148.2731,91.375);
        
            this.shape_227 = new cjs.Shape();
            this.shape_227.graphics.f().s("#667D96").ss(4,1,1).p("AnnEVIAEgVQAGgdAGgeQAFggAFggQASgNANAAQAegDAcgIQApgMAdgRQBEgnA0hLQAvhFAwgxQAvgvAwgfQAIgGAIgEQA9glBGgPQAqgJAsgBQATgBASABQAlADAkANQArARAeAeQARARANAWQAUAdAIAgQADANACAOQACAWgDARQgDAPgGANQgWAog9gIQgygJgtgHQgmgFgigDQgHgBgHAAQgqgBgrAPQgSAGgSAKQgDABgEADQgSAJgTAMQgGAEgEAEQgKAGgIAHQgOALgKAKQgPAOgKANQgCACgBACQgGAIgGAHQgLAPgKAMQgyBDgKAJQgKAKgLAJQhaBLh7ACQg8gEhEgXg");
            this.shape_227.setTransform(148.5021,91.725);
        
            this.shape_228 = new cjs.Shape();
            this.shape_228.graphics.f("#FFFFFF").s().p("AnnEVIAAAAIAEgVIAMg7IAKhAQASgNANAAQAegDAcgIQApgMAdgRQBEgnA0hLQAvhFAwgxQAvgvAwgfIAQgKQA9glBGgPQAqgJAsgBQATgBASABQAlADAkANQArARAeAeQARARANAWQAUAdAIAgQADANACAOQACAWgDARQgDAPgGANQgWAog9gIQgygJgtgHQgmgFgigDIgOgBQgqgBgrAPQgSAGgSAKIgHAEQgSAJgTAMIgKAIIgSANIgYAVQgPAOgKANIgDAEIgMAPIgVAbQgyBDgKAJIgVATQhaBLh7ACQg8gEhEgXg");
            this.shape_228.setTransform(148.5021,91.725);
        
            this.shape_229 = new cjs.Shape();
            this.shape_229.graphics.f().s("#667D96").ss(4,1,1).p("AnqEVIAEgVQAFgeAFgeQAFggAFghQAQgNAOAAQAegCAdgIQApgMAegQQBFgnAzhLQAxhFAwgwQAvgvAxgfQAIgFAIgFQA9gkBGgPQArgIAsgCQAUAAASABQAmADAjANQAqARAeAeQASARAOAWQATAdAJAgQAEANABAOQADAWgDASQgCAPgGAMQgWApg+gJQgzgLgsgIQgngHgjgDQgGgBgHAAQgqgDgsAPQgSAGgSAJQgEACgDACQgTAJgTANQgFADgFAEQgKAGgIAHQgOALgLAKQgPAOgKANQgBACgBACQgGAIgHAHQgLAPgJAMQg0BEgIAJQgKAKgLAIQhbBMh6ADQg9gChGgWg");
            this.shape_229.setTransform(148.75,92.0667);
        
            this.shape_230 = new cjs.Shape();
            this.shape_230.graphics.f("#FFFFFF").s().p("AnpEVIADgVIAKg8IAKhBQAQgNAOAAQAegCAdgIQApgMAegQQBFgnA0hLQAvhFAxgwQAvgvAxgfIAQgKQA9gkBGgPQArgIAsgCQATAAATABQAmADAiANQArARAeAeQASARAOAWQATAdAJAgQAEANABAOQADAWgDASQgCAPgGAMQgWApg/gJQgygLgsgIQgogHghgDIgOgBQgqgDgrAPQgTAGgSAJIgHAEQgTAJgTANIgLAHIgRANIgYAVQgPAOgKANIgDAEIgNAPIgUAbQgzBEgJAJIgVASQhbBMh6ADQg9gChFgWg");
            this.shape_230.setTransform(148.75,92.0667);
        
            this.shape_231 = new cjs.Shape();
            this.shape_231.graphics.f().s("#667D96").ss(4,1,1).p("AnsEWIADgWQAFgeAEgeQAEghAEghQARgNANAAQAegCAegHQAqgMAdgQQBGgmA1hLQAwhFAxgwQAvguAyggQAIgFAIgEQA+gkBHgOQAqgIAtgCQATAAASABQAnAEAiANQAqAQAfAfQASARAOAWQAUAdAJAgQAEANACANQADAXgDASQgCAPgGANQgVAog/gKQgzgNgtgJQgngIgjgEQgGgBgHAAQgrgEgsAPQgSAFgSAKQgEABgDACQgTAKgUALQgFAEgFAEQgKAGgIAHQgOALgLAKQgPAOgKANQgBACgCACQgGAIgGAHQgLAPgJAMQg0BFgIAIQgKAKgLAJQhaBNh8ACQg+AAhGgUg");
            this.shape_231.setTransform(148.9818,92.3688);
        
            this.shape_232 = new cjs.Shape();
            this.shape_232.graphics.f("#FFFFFF").s().p("AnsEWIAAAAIADgWIAJg8IAIhCQARgNANAAQAegCAegHQAqgMAdgQQBGgmA1hLQAwhFAxgwQAvguAyggIAQgJQA+gkBHgOQAqgIAtgCQATAAASABQAnAEAiANQAqAQAfAfQASARAOAWQAUAdAJAgQAEANACANQADAXgDASQgCAPgGANQgVAog/gKQgzgNgtgJQgngIgjgEIgNgBQgrgEgsAPQgSAFgSAKIgHADQgTAKgUALIgKAIIgSANQgOALgLAKQgPAOgKANIgDAEIgMAPIgUAbQg0BFgIAIIgVATQhaBNh8ACQg+AAhGgUg");
            this.shape_232.setTransform(148.9818,92.3688);
        
            this.shape_233 = new cjs.Shape();
            this.shape_233.graphics.f().s("#667D96").ss(4,1,1).p("AnbByIAbACQAigCAkgJQBvgfBLhrQBciBBohAQBrhBCDgDQCRgDBHBrQAcAqAIAuQAHArgNAaQgVAohAgLQhhgchKgLQhZgOhfA9Qg6AmgXAiQhUBugIAKQiOCMjkg6g");
            this.shape_233.setTransform(149.2475,92.7204);
        
            this.shape_234 = new cjs.Shape();
            this.shape_234.graphics.f("#FFFFFF").s().p("AnvEWIAUikIAbACQAigCAkgJQBvgfBLhrQBciBBohAQBrhBCDgDQCRgDBHBrQAcAqAIAuQAHArgNAaQgVAohAgLQhhgchKgLQhZgOhfA9Qg6AmgXAiQhUBugIAKQhlBjiPAAQg7AAhDgRg");
            this.shape_234.setTransform(149.2475,92.7204);
        
            this.shape_235 = new cjs.Shape();
            this.shape_235.graphics.f().s("#667D96").ss(4,1,1).p("AnvEYIAUigQAZgCACAAQAggCAigIQACgBACAAQBrgfBLhmQACgDACgDQBbiCBohAQADgCAEgCQBog+B+gDQAJAAAIAAQCAADBCBaQADAEADAEQAcAqAIAuQACANAAAMQABAagJASQgMAYgbAGQgTAFgbgGQhIgTg8gLQgUgEgTgDQhTgLhYA1QgGADgGAEQg6AngXAhQgEAGgEAFQhLBkgJAKQgDADgDADQiNCFjfg4g");
            this.shape_235.setTransform(149.2048,92.6296);
        
            this.shape_236 = new cjs.Shape();
            this.shape_236.graphics.f("#FFFFFF").s().p("AnvEYIAUigIAbgCQAggCAigIIAEgBQBrgfBLhmIAEgGQBbiCBohAIAHgEQBog+B+gDIARAAQCAADBCBaIAGAIQAcAqAIAuIACAZQABAagJASQgMAYgbAGQgTAFgbgGQhIgTg8gLIgngHQhTgLhYA1IgMAHQg6AngXAhIgIALQhLBkgJAKIgGAGQhjBdiMAAQg6AAhDgQg");
            this.shape_236.setTransform(149.2048,92.6296);
        
            this.shape_237 = new cjs.Shape();
            this.shape_237.graphics.f().s("#667D96").ss(4,1,1).p("AnuEaIASigQAZgDADAAQAggBAhgJQACgBACAAQBsgfBKhnQACgCACgDQBbiDBnhAQAEgCADgCQBohAB9gDQAJAAAJAAQCAACBDBaQADADACAEQAdAqAIAuQACANABALQAAAbgJASQgMAYgaAGQgUAFgbgFQhHgTg9gLQgUgDgTgDQhTgKhYA2QgFADgGAEQg6AngXAhQgEAGgEAFQhLBjgJALQgDADgDADQiMCGjfg3g");
            this.shape_237.setTransform(149.2013,92.5524);
        
            this.shape_238 = new cjs.Shape();
            this.shape_238.graphics.f("#FFFFFF").s().p("AnuEaIASigIAcgDQAggBAhgJIAEgBQBsgfBKhnIAEgFQBbiDBnhAIAHgEQBohAB9gDIASAAQCAACBDBaIAFAHQAdAqAIAuIADAYQAAAbgJASQgMAYgaAGQgUAFgbgFQhHgTg9gLIgngGQhTgKhYA2IgLAHQg6AngXAhIgIALIhUBuIgGAGQhjBfiNAAQg6AAhBgQg");
            this.shape_238.setTransform(149.2013,92.5524);
        
            this.shape_239 = new cjs.Shape();
            this.shape_239.graphics.f().s("#667D96").ss(4,1,1).p("AnuEcIATigQAZgDACAAQAggBAigJQACgBACAAQBrgfBKhnQACgDACgDQBbiDBmhBQAEgCADgCQBohBB9gDQAJAAAIgBQCBACBDBYQADAEADAEQAdApAIAuQACANAAAMQABAagJASQgMAYgbAGQgTAFgbgFQhHgSg+gKQgUgDgSgCQhTgKhXA3QgGADgGAEQg5AngYAiQgEAGgEAFQhJBigLAMQgDADgDADQiLCGjgg2g");
            this.shape_239.setTransform(149.1548,92.4629);
        
            this.shape_240 = new cjs.Shape();
            this.shape_240.graphics.f("#FFFFFF").s().p("AnuEcIATigIAbgDQAggBAigJIAEgBQBrgfBKhnIAEgGQBbiDBmhBIAHgEQBohBB9gDIARgBQCBACBDBYIAGAIQAdApAIAuIACAZQABAagJASQgMAYgbAGQgTAFgbgFQhHgSg+gKIgmgFQhTgKhXA3IgMAHQg5AngYAiIgIALQhJBigLAMIgGAGQhjBgiNAAQg6AAhBgQg");
            this.shape_240.setTransform(149.1548,92.4629);
        
            this.shape_241 = new cjs.Shape();
            this.shape_241.graphics.f().s("#657D96").ss(4,1,1).p("AntEeIARigQAagDACAAQAggBAhgJQACgBACAAQBsggBJhnQACgDACgCQBbiEBnhCQACgCAEgCQBnhBB9gFQAJAAAIAAQCCABBCBXQADAEADADQAeApAIAuQACANABAMQABAagKATQgMAXgbAHQgTAEgbgEQhGgRg/gJQgTgEgTgCQhTgJhXA4QgGADgGAEQg4AogYAiQgEAFgEAFQhIBhgMAOQgDADgCADQiMCHjfg2g");
            this.shape_241.setTransform(149.1548,92.3985);
        
            this.shape_242 = new cjs.Shape();
            this.shape_242.graphics.f("#FFFFFF").s().p("AntEeIARigIAcgDQAggBAhgJIAEgBQBsggBJhnIAEgFQBbiEBnhCIAGgEQBnhBB9gFIARAAQCCABBCBXIAGAHQAeApAIAuIADAZQABAagKATQgMAXgbAHQgTAEgbgEQhGgRg/gJIgmgGQhTgJhXA4IgMAHQg4AogYAiIgIAKIhUBvIgFAGQhkBgiOAAQg5AAhAgPg");
            this.shape_242.setTransform(149.1548,92.3985);
        
            this.shape_243 = new cjs.Shape();
            this.shape_243.graphics.f().s("#657C96").ss(4,1,1).p("AntEfIASigQAZgCADAAQAggCAhgJQACgBACAAQBrggBJhnQACgDACgDQBbiEBmhCQACgCAEgDQBnhCB8gFQAJAAAJAAQCBABBDBVQAEAEACADQAeAoAJAvQACANAAAMQABAagJASQgMAYgbAGQgTAFgbgEQhGgQg/gJQgUgDgSgCQhTgIhXA5QgGADgFAEQg5AogXAiQgEAFgEAGQhIBggMAPQgDADgDADQiLCHjgg2g");
            this.shape_243.setTransform(149.1048,92.3092);
        
            this.shape_244 = new cjs.Shape();
            this.shape_244.graphics.f("#FFFFFF").s().p("AntEfIASigIAcgCQAggCAhgJIAEgBQBrggBJhnIAEgGQBbiEBmhCIAGgFQBnhCB8gFIASAAQCBABBDBVIAGAHQAeAoAJAvIACAZQABAagJASQgMAYgbAGQgTAFgbgEQhGgQg/gJQgUgDgSgCQhTgIhXA5IgLAHQg5AogXAiIgIALIhUBvIgGAGQhjBhiPAAQg5AAhAgQg");
            this.shape_244.setTransform(149.1048,92.3092);
        
            this.shape_245 = new cjs.Shape();
            this.shape_245.graphics.f().s("#657C96").ss(4,1,1).p("AnsEiIAQihQAagCACAAQAggCAigJQACgBACAAQBrggBJhoQACgDACgCQBaiGBlhCQADgCADgCQBnhEB8gFQAJAAAIAAQCDAABDBUQADADADAEQAeAoAJAuQACANABAMQABAagKATQgMAXgbAHQgTAFgbgEQhFgQhAgIQgUgDgSgBQhTgHhWA5QgGADgGAEQg4AogXAiQgEAGgEAFQhHBfgNARQgDADgDADQiKCIjgg1g");
            this.shape_245.setTransform(149.1048,92.2431);
        
            this.shape_246 = new cjs.Shape();
            this.shape_246.graphics.f("#FFFFFF").s().p("AnsEiIAQihIAcgCQAggCAigJIAEgBQBrggBJhoIAEgFQBaiGBlhCIAGgEQBnhEB8gFIARAAQCDAABDBUIAGAHQAeAoAJAuIADAZQABAagKATQgMAXgbAHQgTAFgbgEQhFgQhAgIIgmgEQhTgHhWA5IgMAHQg4AogXAiIgIALIhUBwIgGAGQhjBhiQAAQg4AAg/gOg");
            this.shape_246.setTransform(149.1048,92.2431);
        
            this.shape_247 = new cjs.Shape();
            this.shape_247.graphics.f().s("#657C96").ss(4,1,1).p("AnsEjIARigQAZgDADAAQAggCAhgJQACAAACgBQBrggBJhoQACgDACgDQBaiFBkhDQAEgDACgCQBnhEB7gGQAJAAAJAAQCDgBBDBTQADADADAEQAfAnAIAvQADANAAAMQABAagJASQgMAYgbAHQgTAFgbgEQhFgPhAgHQgUgDgTgBQhSgGhWA6QgGADgGAEQg3AogYAjQgEAFgEAFQhGBfgNARQgDADgDADQiKCJjhg1g");
            this.shape_247.setTransform(149.0548,92.154);
        
            this.shape_248 = new cjs.Shape();
            this.shape_248.graphics.f("#FFFFFF").s().p("AnsEjIARigIAcgDQAggCAhgJIAEgBQBrggBJhoIAEgGQBaiFBkhDIAGgFQBnhEB7gGIASAAQCDgBBDBTIAGAHQAfAnAIAvQADANAAAMQABAagJASQgMAYgbAHQgTAFgbgEQhFgPhAgHQgUgDgTgBQhSgGhWA6IgMAHQg3AogYAjIgIAKIhTBwIgGAGQhkBjiQAAQg4AAg/gPg");
            this.shape_248.setTransform(149.0548,92.154);
        
            this.shape_249 = new cjs.Shape();
            this.shape_249.graphics.f().s("#657C96").ss(4,1,1).p("AnrElIAQigQAagDACAAQAggCAhgJQACgBACAAQBsghBIhoQACgDACgCQBaiHBjhDQAEgDACgCQBmhFB8gGQAJgBAIAAQCEgBBDBRQADAEADAEQAfAmAJAwQACAMABAMQABAagJATQgMAXgbAHQgTAFgcgDQhEgOhBgHQgUgDgSgBQhSgFhWA7QgGADgFAEQg4AogXAjQgEAGgEAFQhGBdgOATQgDADgDADQiKCJjgg0g");
            this.shape_249.setTransform(149.0298,92.0647);
        
            this.shape_250 = new cjs.Shape();
            this.shape_250.graphics.f("#FFFFFF").s().p("AnrElIAAAAIAQigIAcgDQAggCAhgJIAEgBQBsghBIhoIAEgFQBaiHBjhDIAGgFQBmhFB8gGIARgBQCEgBBDBRIAGAIQAfAmAJAwIADAYQABAagJATQgMAXgbAHQgTAFgcgDQhEgOhBgHIgmgEQhSgFhWA7IgLAHQg4AogXAjIgIALIhUBwIgGAGQhkBkiRAAQg3AAg+gPg");
            this.shape_250.setTransform(149.0298,92.0647);
        
            this.shape_251 = new cjs.Shape();
            this.shape_251.graphics.f().s("#657C96").ss(4,1,1).p("AnrEoIAQihQAagDACAAQAggCAhgJQACgBACAAQBrghBIhpQACgDACgCQBaiHBjhEQADgCADgDQBmhGB6gGQAJgBAJAAQCEgCBDBQQAEADADAEQAfAnAJAvQACAMABAMQACAbgKASQgMAXgbAHQgTAFgbgCQhEgOhCgGQgUgDgSAAQhSgFhVA8QgGADgGAEQg3ApgXAjQgEAFgEAGQhFBcgPAUQgDADgDADQiJCKjhgzg");
            this.shape_251.setTransform(149.0098,91.9885);
        
            this.shape_252 = new cjs.Shape();
            this.shape_252.graphics.f("#FFFFFF").s().p("AnrEoIAQihIAcgDQAggCAhgJIAEgBQBrghBIhpIAEgFQBaiHBjhEIAGgFQBmhGB6gGIASgBQCEgCBDBQIAHAHQAfAnAJAvIADAYQACAbgKASQgMAXgbAHQgTAFgbgCQhEgOhCgGQgUgDgSAAQhSgFhVA8IgMAHQg3ApgXAjIgIALIhUBwIgGAGQhkBkiSAAQg3AAg9gNg");
            this.shape_252.setTransform(149.0098,91.9885);
        
            this.shape_253 = new cjs.Shape();
            this.shape_253.graphics.f().s("#647C96").ss(4,1,1).p("AnqEqIAPihQAagDACAAQAggCAhgJQACgBACgBQBsghBHhpQACgCACgDQBaiIBihEQADgCADgCQBlhIB7gHQAJAAAIgBQCFgCBDBPQAEADADAEQAfAmAKAvQACANABALQABAbgKASQgMAXgaAIQgTAFgcgDQhDgMhCgGQgUgCgTgBQhRgDhVA8QgGADgGAEQg2ApgYAjQgEAGgEAFQhDBcgQAVQgDADgDADQiJCKjhgyg");
            this.shape_253.setTransform(148.9598,91.899);
        
            this.shape_254 = new cjs.Shape();
            this.shape_254.graphics.f("#FFFFFF").s().p("AnqEqIAAAAIAPihIAcgDQAggCAhgJIAEgCQBsghBHhpIAEgFQBaiIBihEIAGgEQBlhIB7gHIARgBQCFgCBDBPIAHAHQAfAmAKAvQACANABALQABAbgKASQgMAXgaAIQgTAFgcgDQhDgMhCgGQgUgCgTgBQhRgDhVA8IgMAHQg2ApgYAjIgIALIhTBxIgGAGQhkBliUAAQg1AAg9gNg");
            this.shape_254.setTransform(148.9598,91.899);
        
            this.shape_255 = new cjs.Shape();
            this.shape_255.graphics.f().s("#647C96").ss(4,1,1).p("AnqErIAPigQAagDACAAQAggCAhgKQACgBACAAQBrgiBHhpQACgDACgCQBaiIBhhFQADgDAEgCQBlhIB6gIQAJAAAIAAQCGgDBDBNQADADADAEQAgAlAKAwQACAMABAMQACAbgKASQgMAXgbAHQgTAGgbgCQhDgMhDgFQgUgDgSAAQhRgChWA9QgFADgGAEQg2ApgYAkQgEAFgEAFQhDBbgQAXQgDADgDADQiJCKjhgyg");
            this.shape_255.setTransform(148.9598,91.8343);
        
            this.shape_256 = new cjs.Shape();
            this.shape_256.graphics.f("#FFFFFF").s().p("AnqErIAPigIAcgDQAggCAhgKIAEgBQBrgiBHhpIAEgFQBaiIBhhFIAHgFQBlhIB6gIIARAAQCGgDBDBNIAGAHQAgAlAKAwIADAYQACAbgKASQgMAXgbAHQgTAGgbgCQhDgMhDgFQgUgDgSAAQhRgChWA9IgLAHQg2ApgYAkIgIAKIhTByIgGAGQhkBliUAAQg2AAg8gNg");
            this.shape_256.setTransform(148.9598,91.8343);
        
            this.shape_257 = new cjs.Shape();
            this.shape_257.graphics.f().s("#647C96").ss(4,1,1).p("AnpEtIAOigQAagDADAAQAggCAggKQACgBACAAQBsgiBGhqQACgCACgDQBaiJBghFQADgCAEgDQBkhJB6gIQAJgBAJAAQCGgDBDBLQADAEAEADQAgAlAKAwQACANABALQACAbgLATQgMAWgbAIQgSAFgcgCQhCgLhEgEQgTgCgTgBQhRgBhUA+QgGADgGAEQg2AqgYAjQgDAGgEAFQhCBagSAYQgDADgCADQiJCLjhgyg");
            this.shape_257.setTransform(148.916,91.7439);
        
            this.shape_258 = new cjs.Shape();
            this.shape_258.graphics.f("#FFFFFF").s().p("AnpEtIAAAAIAOigIAdgDQAggCAggKIAEgBQBsgiBGhqIAEgFQBaiJBghFIAHgFQBkhJB6gIIASgBQCGgDBDBLIAHAHQAgAlAKAwIADAYQACAbgLATQgMAWgbAIQgSAFgcgCQhCgLhEgEIgmgDQhRgBhUA+IgMAHQg2AqgYAjIgHALIhUByIgFAGQhlBmiUAAQg1AAg8gNg");
            this.shape_258.setTransform(148.916,91.7439);
        
            this.shape_259 = new cjs.Shape();
            this.shape_259.graphics.f().s("#647B96").ss(4,1,1).p("AnpEvIAOihQAbgCACgBQAggCAhgKQACgBACAAQBrgiBGhqQACgDACgCQBZiKBghFQADgDAEgCQBkhLB5gIQAJgBAJAAQCGgEBEBKQAEAEADADQAgAlAKAwQADAMABAMQABAbgKASQgMAXgbAHQgSAGgcgCQhCgKhEgEQgUgCgSAAQhRAAhUA/QgGADgGAEQg1AqgYAjQgEAGgEAFQhBBZgSAZQgDADgDAEQiICLjhgxg");
            this.shape_259.setTransform(148.8848,91.667);
        
            this.shape_260 = new cjs.Shape();
            this.shape_260.graphics.f("#FFFFFF").s().p("AnoEvIgBAAIAOihIAdgDQAggCAhgKIAEgBQBrgiBGhqIAEgFQBZiKBghFIAHgFQBkhLB5gIIASgBQCGgEBEBKIAHAHQAgAlAKAwQADAMABAMQABAbgKASQgMAXgbAHQgSAGgcgCQhCgKhEgEQgUgCgSAAQhRAAhUA/IgMAHQg1AqgYAjIgIALIhTByIgGAHQhlBniWAAQg0AAg6gNg");
            this.shape_260.setTransform(148.8848,91.667);
        
            this.shape_261 = new cjs.Shape();
            this.shape_261.graphics.f().s("#647B96").ss(4,1,1).p("AnoExIANihQAagCADgBQAggCAggKQACgBACAAQBsgjBGhqQACgCABgDQBaiKBfhGQADgDADgCQBkhMB5gIQAJgBAJAAQCHgFBEBJQADADADAEQAhAkAKAwQADANABALQACAbgLATQgMAWgbAIQgSAFgcgBQhBgJhFgEQgUgBgSAAQhQAAhVBAQgFADgGAEQg1AqgYAkQgEAGgEAFQhABYgTAaQgDADgDAEQiHCLjigwg");
            this.shape_261.setTransform(148.866,91.5763);
        
            this.shape_262 = new cjs.Shape();
            this.shape_262.graphics.f("#FFFFFF").s().p("AnoExIAAAAIANihIAdgDQAggCAggKIAEgBQBsgjBGhqIADgFQBaiKBfhGIAGgFQBkhMB5gIIASgBQCHgFBEBJIAGAHQAhAkAKAwIAEAYQACAbgLATQgMAWgbAIQgSAFgcgBQhBgJhFgEIgmgBQhQAAhVBAIgLAHQg1AqgYAkIgIALIhTByIgGAHQhkBoiXAAQg0AAg6gNg");
            this.shape_262.setTransform(148.866,91.5763);
        
            this.shape_263 = new cjs.Shape();
            this.shape_263.graphics.f().s("#647B96").ss(4,1,1).p("AnoEzIANihQAbgCACgBQAggCAhgKQACgBACgBQBrgiBGhqQACgDABgDQBZiLBfhGQADgCADgDQBkhNB4gJQAJAAAJgBQCIgFBEBIQADADADADQAiAkAKAxQADAMABAMQABAagKATQgMAWgbAIQgSAGgcgBQhBgJhGgDQgTgBgTAAQhQAChUBAQgFADgGAEQg1ArgYAjQgDAGgEAGQhABXgUAbQgCADgDAEQiHCMjigwg");
            this.shape_263.setTransform(148.8348,91.4853);
        
            this.shape_264 = new cjs.Shape();
            this.shape_264.graphics.f("#FFFFFF").s().p("AnnEzIgBAAIANihIAdgDQAggCAhgKIAEgCQBrgiBGhqIADgGQBZiLBfhGIAGgFQBkhNB4gJIASgBQCIgFBEBIIAGAGQAiAkAKAxIAEAYQABAagKATQgMAWgbAIQgSAGgcgBQhBgJhGgDQgTgBgTAAQhQAChUBAIgLAHQg1ArgYAjIgHAMIhUByIgFAHQhlBoiYAAQgzAAg5gMg");
            this.shape_264.setTransform(148.8348,91.4853);
        
            this.shape_265 = new cjs.Shape();
            this.shape_265.graphics.f().s("#637B96").ss(4,1,1).p("AnnE1IAMihQAbgCACgBQAggCAhgKQACgBACgBQBqgjBGhqQACgDACgDQBYiLBehHQADgCAEgDQBkhNB3gKQAJgBAJAAQCIgGBEBGQAEAEADADQAiAjAKAxQADAMABAMQACAbgLASQgMAWgbAIQgSAGgcAAQhAgIhHgCQgTgCgTABQhPAChUBBQgGADgFAFQg1AqgYAkQgDAGgEAFQg/BWgVAdQgCADgDAEQiHCMjigvg");
            this.shape_265.setTransform(148.816,91.394);
        
            this.shape_266 = new cjs.Shape();
            this.shape_266.graphics.f("#FFFFFF").s().p("AnnE1IAMihIAdgDQAggCAhgKIAEgCQBqgjBGhqIAEgGQBYiLBehHIAHgFQBkhNB3gKIASgBQCIgGBEBGIAHAHQAiAjAKAxIAEAYQACAbgLASQgMAWgbAIQgSAGgcAAQhAgIhHgCQgTgCgTABQhPAChUBBIgLAIQg1AqgYAkIgHALIhUBzIgFAHQhlBpiYAAQgzAAg5gMg");
            this.shape_266.setTransform(148.816,91.394);
        
            this.shape_267 = new cjs.Shape();
            this.shape_267.graphics.f().s("#637B96").ss(4,1,1).p("AnnE3IAMihQAbgDADAAQAggDAggKQACgBACAAQBrgkBFhqQACgDACgDQBYiMBdhHQADgDAEgCQBjhPB4gKQAJgBAIAAQCJgGBEBEQAEAEADADQAiAjALAxQACAMACAMQACAagLATQgMAWgbAIQgSAGgcAAQhAgHhHgCQgTgBgTABQhPADhUBCQgGADgFAEQg0ArgYAkQgEAGgEAFQg+BWgVAeQgDADgDADQiGCOjigvg");
            this.shape_267.setTransform(148.791,91.3259);
        
            this.shape_268 = new cjs.Shape();
            this.shape_268.graphics.f("#FFFFFF").s().p("AnmE3IgBAAIAMihIAegDQAggDAggKIAEgBQBrgkBFhqIAEgGQBYiMBdhHIAHgFQBjhPB4gKIARgBQCJgGBEBEIAHAHQAiAjALAxIAEAYQACAagLATQgMAWgbAIQgSAGgcAAQhAgHhHgCQgTgBgTABQhPADhUBCIgLAHQg0ArgYAkIgIALIhTB0IgGAGQhlBriZAAQgyAAg4gMg");
            this.shape_268.setTransform(148.791,91.3259);
        
            this.shape_269 = new cjs.Shape();
            this.shape_269.graphics.f().s("#637B96").ss(4,1,1).p("AnmE5IALiiQAbgCACgBQAggCAhgLQACAAACgBQBqgkBFhrQACgCACgDQBYiNBdhHQADgDADgCQBkhQB3gLQAJgBAIAAQCKgHBEBEQADADAEADQAiAjALAwQADANABALQACAbgLATQgMAWgbAIQgSAGgcAAQg/gGhIgBQgTgBgTABQhPAEhTBCQgGAEgFAEQg0ArgYAkQgEAGgEAFQg9BVgWAfQgDADgCAEQiGCOjjgug");
            this.shape_269.setTransform(148.766,91.2549);
        
            this.shape_270 = new cjs.Shape();
            this.shape_270.graphics.f("#FFFFFF").s().p("AnmE5IALiiIAdgDQAggCAhgLIAEgBQBqgkBFhrIAEgFQBYiNBdhHIAGgFQBkhQB3gLIARgBQCKgHBEBEIAHAGQAiAjALAwQADANABALQACAbgLATQgMAWgbAIQgSAGgcAAQg/gGhIgBQgTgBgTABQhPAEhTBCIgLAIQg0ArgYAkIgIALIhTB0IgFAHQhlBribAAQgyAAg3gLg");
            this.shape_270.setTransform(148.766,91.2549);
        
            this.shape_271 = new cjs.Shape();
            this.shape_271.graphics.f().s("#637B96").ss(4,1,1).p("AnmE7IALiiQAbgCADgBQAggCAggLQACgBACAAQBrgkBEhrQACgDACgDQBYiNBchIQADgDADgCQBjhRB3gLQAJgBAJAAQCKgIBEBCQADADAEAEQAjAiALAxQACAMABAMQADAagLATQgMAWgbAIQgSAGgcABQg/gGhIAAQgUgBgSABQhPAFhTBDQgGAEgFAEQg0AsgYAkQgDAGgEAFQg9BUgWAgQgDADgDAEQiFCOjjgtg");
            this.shape_271.setTransform(148.7231,91.1623);
        
            this.shape_272 = new cjs.Shape();
            this.shape_272.graphics.f("#FFFFFF").s().p("AnlE7IgBAAIALiiIAegDQAggCAggLIAEgBQBrgkBEhrIAEgGQBYiNBchIIAGgFQBjhRB3gLIASgBQCKgIBEBCIAHAHQAjAiALAxIADAYQADAagLATQgMAWgbAIQgSAGgcABQg/gGhIAAQgUgBgSABQhPAFhTBDIgLAIQg0AsgYAkIgHALIhTB0IgGAHQhlBsibAAQgxAAg3gLg");
            this.shape_272.setTransform(148.7231,91.1623);
        
            this.shape_273 = new cjs.Shape();
            this.shape_273.graphics.f().s("#637B96").ss(4,1,1).p("AnlE9IALiiQAbgCACgBQAggCAggLQACgBACAAQBrglBEhrQACgDACgDQBYiNBbhJQADgDADgCQBjhSB2gLQAJgBAJgBQCLgIBEBBQADADAEADQAjAiALAxQADAMABAMQADAbgLATQgMAVgcAJQgRAGgdAAQg+gEhJAAQgTgBgTACQhOAGhTBEQgGADgFAEQgzAsgYAlQgEAFgEAGQg7BSgYAiQgDADgCAEQiFCPjkgtg");
            this.shape_273.setTransform(148.6981,91.0839);
        
            this.shape_274 = new cjs.Shape();
            this.shape_274.graphics.f("#FFFFFF").s().p("AnlE9IAAAAIALiiIAdgDQAggCAggLIAEgBQBrglBEhrIAEgGQBYiNBbhJIAGgFQBjhSB2gLIASgCQCLgIBEBBIAHAGQAjAiALAxIAEAYQADAbgLATQgMAVgcAJQgRAGgdAAQg+gEhJAAQgTgBgTACQhOAGhTBEIgLAHQgzAsgYAlIgIALIhTB0IgFAHQhmBticAAQgxAAg2gLg");
            this.shape_274.setTransform(148.6981,91.0839);
        
            this.shape_275 = new cjs.Shape();
            this.shape_275.graphics.f().s("#637B96").ss(4,1,1).p("AnlE/IAKiiQAcgCACgBQAggCAggLQACgBACgBQBrgkBEhsQACgDABgCQBYiPBahJQADgDAEgCQBihTB2gMQAJgBAJAAQCLgJBEA/QAEADADAEQAkAhALAxQADAMABAMQADAbgLATQgMAVgbAJQgSAGgcABQg+gEhKABQgTgBgTACQhOAHhTBFQgFADgFAFQgzAsgYAkQgEAGgEAFQg6BSgZAjQgDADgCAEQiFCPjjgsg");
            this.shape_275.setTransform(148.6731,90.9907);
        
            this.shape_276 = new cjs.Shape();
            this.shape_276.graphics.f("#FFFFFF").s().p("AnkE/IgBAAIAKiiIAegDQAggCAggLIAEgCQBrgkBEhsIADgFQBYiPBahJIAHgFQBihTB2gMIASgBQCLgJBEA/IAHAHQAkAhALAxQADAMABAMQADAbgLATQgMAVgbAJQgSAGgcABQg+gEhKABQgTgBgTACQhOAHhTBFIgKAIQgzAsgYAkIgIALIhTB1IgFAHQhmBtidAAQgwAAg1gKg");
            this.shape_276.setTransform(148.6731,90.9907);
        
            this.shape_277 = new cjs.Shape();
            this.shape_277.graphics.f().s("#627A96").ss(4,1,1).p("AnkFBIAKiiQAbgDACAAQAggDAggLQACgBACAAQBrglBEhsQABgDACgDQBYiPBZhJQADgDADgCQBjhUB1gNQAJgBAJAAQCMgJBEA+QAEADAEADQAjAhAMAxQADAMABAMQADAbgLATQgMAVgcAJQgRAGgdABQg9gDhKACQgTgBgTACQhOAIhSBFQgGAEgFAEQgzAsgYAlQgEAGgDAGQg6BQgZAkQgDAEgDADQiECQjkgrg");
            this.shape_277.setTransform(148.6481,90.903);
        
            this.shape_278 = new cjs.Shape();
            this.shape_278.graphics.f("#FFFFFF").s().p("AnkFBIAAAAIAKiiIAdgDQAggDAggLIAEgBQBrglBEhsIADgGQBYiPBZhJIAGgFQBjhUB1gNIASgBQCMgJBEA+IAIAGQAjAhAMAxIAEAYQADAbgLATQgMAVgcAJQgRAGgdABQg9gDhKACQgTgBgTACQhOAIhSBFIgLAIQgzAsgYAlIgHAMIhTB0IgGAHQhmBvieAAQgvAAg1gKg");
            this.shape_278.setTransform(148.6481,90.903);
        
            this.shape_279 = new cjs.Shape();
            this.shape_279.graphics.f().s("#627A96").ss(4,1,1).p("AnkFDIAJiiQAcgDACAAQAggDAggLQACgBACgBQBrglBDhsQACgDACgCQBXiQBYhKQAEgDADgCQBihVB1gNQAJgBAJgBQCMgJBFA8QAEADADADQAkAhAMAxQADAMABAMQADAbgLATQgMAVgbAJQgSAGgcACQg9gDhLADQgTgBgTADQhOAIhSBGQgFAEgGAFQgyAsgYAlQgEAGgDAFQg5BQgaAlQgDAEgDADQiECRjjgrg");
            this.shape_279.setTransform(148.6231,90.8094);
        
            this.shape_280 = new cjs.Shape();
            this.shape_280.graphics.f("#FFFFFF").s().p("AnjFDIgBAAIAJiiIAegDQAggDAggLIAEgCQBrglBDhsIAEgFQBXiQBYhKIAHgFQBihVB1gNIASgCQCMgJBFA8IAHAGQAkAhAMAxQADAMABAMQADAbgLATQgMAVgbAJQgSAGgcACQg9gDhLADQgTgBgTADQhOAIhSBGIgLAJQgyAsgYAlIgHALIhTB1IgGAHQhlBwifAAQgvAAg0gKg");
            this.shape_280.setTransform(148.6231,90.8094);
        
            this.shape_281 = new cjs.Shape();
            this.shape_281.graphics.f().s("#627A96").ss(4,1,1).p("AnjFFIAJiiQAbgDADAAQAggDAggLQACgBACgBQBqglBDhtQACgCACgDQBXiQBXhLQAEgDADgCQBihWB1gNQAJgCAIAAQCNgKBFA7QAEADADADQAlAgAMAyQADAMABALQADAbgLATQgMAVgcAKQgRAGgdACQg8gChMADQgTAAgTACQhNAKhSBHQgFADgFAFQgyAsgYAmQgEAFgDAGQg5BPgbAmQgCAEgDADQiECRjkgqg");
            this.shape_281.setTransform(148.5981,90.7303);
        
            this.shape_282 = new cjs.Shape();
            this.shape_282.graphics.f("#FFFFFF").s().p("AnjFFIAAAAIAJiiIAegDQAggDAggLIAEgCQBqglBDhtIAEgFQBXiQBXhLIAHgFQBihWB1gNIARgCQCNgKBFA7IAHAGQAlAgAMAyIAEAXQADAbgLATQgMAVgcAKQgRAGgdACQg8gChMADQgTAAgTACQhNAKhSBHIgKAIQgyAsgYAmIgHALIhUB1IgFAHQhmBxigAAQgvAAgzgKg");
            this.shape_282.setTransform(148.5981,90.7303);
        
            this.shape_283 = new cjs.Shape();
            this.shape_283.graphics.f().s("#627A96").ss(4,1,1).p("AnjFHIAIiiQAcgDADAAQAggDAfgLQACgBACgBQBrgmBDhsQABgDACgDQBXiRBXhLQADgCADgDQBihXB0gOQAJgBAJgBQCOgKBEA5QAEADAEADQAlAgAMAyQADAMABAMQADAagLAUQgMAUgcAKQgRAGgdACQg7gBhNAEQgTAAgTADQhNAKhRBIQgGADgFAFQgxAtgYAlQgEAGgDAGQg4BOgcAnQgCAEgDADQiDCSjkgqg");
            this.shape_283.setTransform(148.556,90.6359);
        
            this.shape_284 = new cjs.Shape();
            this.shape_284.graphics.f("#FFFFFF").s().p("AniFHIgBAAIAIiiIAfgDQAggDAfgLIAEgCQBrgmBDhsIADgGQBXiRBXhLIAGgFQBihXB0gOIASgCQCOgKBEA5IAIAGQAlAgAMAyIAEAYQADAagLAUQgMAUgcAKQgRAGgdACQg7gBhNAEQgTAAgTADQhNAKhRBIIgLAIQgxAtgYAlIgHAMIhUB1IgFAHQhmBxihAAQgtAAgzgJg");
            this.shape_284.setTransform(148.556,90.6359);
        
            this.shape_285 = new cjs.Shape();
            this.shape_285.graphics.f().s("#627A96").ss(4,1,1).p("AniFJIAIiiQAbgDADAAQAggEAggLQACgBACgBQBqgmBChtQACgCACgDQBXiSBWhLQADgDADgCQBihZB0gOQAJgBAJAAQCOgLBEA4QAEACAEADQAlAgANAyQADAMABALQADAbgMATQgMAVgbAKQgRAGgdADQg7gBhNAEQgTABgTADQhNALhRBIQgFAEgGAFQgxAtgYAlQgEAGgDAGQg3BNgcApQgDAEgCADQiDCSjlgpg");
            this.shape_285.setTransform(148.531,90.5592);
        
            this.shape_286 = new cjs.Shape();
            this.shape_286.graphics.f("#FFFFFF").s().p("AniFJIAAAAIAIiiIAegDQAggEAggLIAEgCQBqgmBChtIAEgFQBXiSBWhLIAGgFQBihZB0gOIASgBQCOgLBEA4IAIAFQAlAgANAyQADAMABALQADAbgMATQgMAVgbAKQgRAGgdADQg7gBhNAEQgTABgTADQhNALhRBIIgLAJQgxAtgYAlIgHAMIhTB2IgFAHQhnByihAAQguAAgygJg");
            this.shape_286.setTransform(148.531,90.5592);
        
            this.shape_287 = new cjs.Shape();
            this.shape_287.graphics.f().s("#627A96").ss(4,1,1).p("AniFLIAHiiQAcgDADAAQAggEAfgLQACgBACgBQBrgmBChuQACgCABgDQBXiSBVhMQAEgDADgCQBhhaB0gOQAJgBAIgBQCPgLBFA2QAEADAEADQAlAfANAyQADAMABAMQADAagLAUQgMAUgcAKQgRAGgdADQg6ABhOAEQgTABgTADQhMAMhRBKQgGADgFAFQgxAtgYAmQgEAGgDAFQg2BNgdAqQgDAEgCADQiDCTjkgpg");
            this.shape_287.setTransform(148.506,90.4872);
        
            this.shape_288 = new cjs.Shape();
            this.shape_288.graphics.f("#FFFFFF").s().p("AnhFLIgBAAIAHiiIAfgDQAggEAfgLIAEgCQBrgmBChuIADgFQBXiSBVhMIAHgFQBhhaB0gOIARgCQCPgLBFA2IAIAGQAlAfANAyQADAMABAMQADAagLAUQgMAUgcAKQgRAGgdADQg6ABhOAEQgTABgTADQhMAMhRBKIgLAIQgxAtgYAmIgHALIhTB3IgFAHQhmBzijAAQgtAAgxgJg");
            this.shape_288.setTransform(148.506,90.4872);
        
            this.shape_289 = new cjs.Shape();
            this.shape_289.graphics.f().s("#617A96").ss(4,1,1).p("AnhFNIAHiiQAcgDACAAQAggEAggLQACgBACgBQBqgnBChuQABgCACgDQBXiSBUhNQAEgDADgCQBhhaBzgPQAJgCAJAAQCPgMBFA1QAEADAEADQAmAeAMAyQADAMACAMQADAbgMATQgMAUgbAKQgRAHgdADQg6ABhOAGQgTAAgTAEQhMANhRBKQgGADgFAFQgwAugYAmQgEAFgDAGQg2BLgdAsQgDAEgDADQiCCTjlgog");
            this.shape_289.setTransform(148.4895,90.3909);
        
            this.shape_290 = new cjs.Shape();
            this.shape_290.graphics.f("#FFFFFF").s().p("AnhFNIAAAAIAHiiIAegDQAggEAggLIAEgCQBqgnBChuIADgFQBXiSBUhNIAHgFQBhhaBzgPIASgCQCPgMBFA1IAIAGQAmAeAMAyIAFAYQADAbgMATQgMAUgbAKQgRAHgdADQg6ABhOAGQgTAAgTAEQhMANhRBKIgLAIQgwAugYAmIgHALIhTB3IgGAHQhmB0ikAAQgsAAgxgJg");
            this.shape_290.setTransform(148.4895,90.3909);
        
            this.shape_291 = new cjs.Shape();
            this.shape_291.graphics.f().s("#617A96").ss(4,1,1).p("AnhFPIAHiiQAcgDACAAQAggEAggLQACgBACgBQBpgnBChvQACgDACgCQBWiTBUhMQADgDADgDQBihbBygQQAJgBAJgBQCQgMBEAzQAEADAEADQAnAeANAzQADALABAMQADAbgLATQgMAVgcAKQgRAGgdAEQg5AChPAGQgTAAgTAEQhMAOhRBLQgFAEgFAEQgwAugYAmQgEAGgDAGQg1BKgeAtQgDAEgDADQiBCUjmgog");
            this.shape_291.setTransform(148.456,90.294);
        
            this.shape_292 = new cjs.Shape();
            this.shape_292.graphics.f("#FFFFFF").s().p("AnhFPIAAAAIAHiiIAegDQAggEAggLIAEgCQBpgnBChvIAEgFQBWiTBUhMIAGgGQBihbBygQIASgCQCQgMBEAzIAIAGQAnAeANAzQADALABAMQADAbgLATQgMAVgcAKQgRAGgdAEQg5AChPAGQgTAAgTAEQhMAOhRBLIgKAIQgwAugYAmIgHAMIhTB3IgGAHQhmB0ikAAQgsAAgxgIg");
            this.shape_292.setTransform(148.456,90.294);
        
            this.shape_293 = new cjs.Shape();
            this.shape_293.graphics.f().s("#617A96").ss(4,1,1).p("AngFRIAGiiQAcgDACAAQAggEAggMQACAAACgBQBqgoBBhvQACgCABgCQBXiUBThNQADgDADgDQBhhcBygQQAJgBAJgBQCRgNBEAyQAEADAEADQAnAdANAzQADAMACALQADAbgMAUQgMAUgbAKQgRAHgdAEQg5AChQAHQgTABgTAEQhLAPhRBLQgFAEgFAFQgwAugYAmQgEAGgDAFQgzBKggAuQgDAEgCADQiBCUjmgng");
            this.shape_293.setTransform(148.4395,90.1975);
        
            this.shape_294 = new cjs.Shape();
            this.shape_294.graphics.f("#FFFFFF").s().p("AngFRIAAAAIAGiiIAegDQAggEAggMIAEgBQBqgoBBhvIADgEQBXiUBThNIAGgGQBhhcBygQIASgCQCRgNBEAyIAIAGQAnAdANAzIAFAXQADAbgMAUQgMAUgbAKQgRAHgdAEQg5AChQAHQgTABgTAEQhLAPhRBLIgKAJQgwAugYAmIgHALIhTB4IgFAHQhnB1ilAAQgrAAgwgIg");
            this.shape_294.setTransform(148.4395,90.1975);
        
            this.shape_295 = new cjs.Shape();
            this.shape_295.graphics.f().s("#617996").ss(4,1,1).p("AngFTIAGijQAcgDACAAQAggEAggLQACgBACgBQBpgoBChvQABgDACgCQBWiUBShNQAEgEADgCQBhheBxgQQAJgBAJgBQCRgOBFAxQAEADAEADQAnAdANAzQAEALABAMQADAbgLATQgMAVgcAKQgRAHgdAEQg4ADhRAHQgTABgTAFQhLAQhQBMQgFAEgFAEQgwAvgYAmQgEAGgDAFQgzBJggAvQgCAEgDADQiBCVjmgmg");
            this.shape_295.setTransform(148.406,90.1153);
        
            this.shape_296 = new cjs.Shape();
            this.shape_296.graphics.f("#FFFFFF").s().p("AngFTIAAAAIAGijIAegDQAggEAggLIAEgCQBpgoBChvIADgFQBWiUBShNIAHgGQBhheBxgQIASgCQCRgOBFAxIAIAGQAnAdANAzQAEALABAMQADAbgLATQgMAVgcAKQgRAHgdAEQg4ADhRAHQgTABgTAFQhLAQhQBMIgKAIQgwAvgYAmIgHALIhTB4IgFAHQhmB3inAAQgrAAgvgIg");
            this.shape_296.setTransform(148.406,90.1153);
        
            this.shape_297 = new cjs.Shape();
            this.shape_297.graphics.f().s("#617996").ss(4,1,1).p("AngFVIAGijQAcgDADAAQAggEAfgLQACgBACgBQBqgoBBhwQABgCACgDQBWiVBRhNQAEgDADgDQBghfBxgQQAJgCAJgBQCSgOBFAwQAEACAEADQAoAdANAzQADAMACALQADAbgMAUQgMAUgbAKQgRAHgdAEQg4AFhRAHQgTACgTAEQhLARhQBNQgFAEgFAEQgvAvgYAmQgEAGgDAGQgyBIghAwQgDAEgDADQiACWjmgmg");
            this.shape_297.setTransform(148.3645,90.0167);
        
            this.shape_298 = new cjs.Shape();
            this.shape_298.graphics.f("#FFFFFF").s().p("AnfFVIgBAAIAGijIAfgDQAggEAfgLIAEgCQBqgoBBhwIADgFQBWiVBRhNIAHgGQBghfBxgQIASgDQCSgOBFAwIAIAFQAoAdANAzIAFAXQADAbgMAUQgMAUgbAKQgRAHgdAEIiJAMQgTACgTAEQhLARhQBNIgKAIQgvAvgYAmIgHAMIhTB4IgGAHQhmB4inAAQgrAAgugIg");
            this.shape_298.setTransform(148.3645,90.0167);
        
            this.shape_299 = new cjs.Shape();
            this.shape_299.graphics.f().s("#617996").ss(4,1,1).p("AnfFXIAFijQAcgCADgBQAggEAfgMQACgBACAAQBpgpBBhvQACgDABgDQBWiVBRhOQADgDADgDQBhhgBwgRQAJgBAJgBQCSgPBGAuQAEADAEADQAoAcANAzQADAMACAMQAEAbgMATQgMAUgcAKQgRAHgdAFQg3AFhSAIQgTACgTAEQhLAShPBOQgGAEgEAFQgvAvgZAmQgDAGgDAGQgyBHghAxQgDAEgCAEQiACVjnglg");
            this.shape_299.setTransform(148.3645,89.9326);
        
            this.shape_300 = new cjs.Shape();
            this.shape_300.graphics.f("#FFFFFF").s().p("AnfFXIAAAAIAFijIAfgDQAggEAfgMIAEgBQBpgpBBhvIADgGQBWiVBRhOIAGgGQBhhgBwgRIASgCQCSgPBGAuIAIAGQAoAcANAzIAFAYQAEAbgMATQgMAUgcAKQgRAHgdAFIiJANQgTACgTAEQhLAShPBOIgKAJQgvAvgZAmIgGAMIhTB4IgFAIQhnB4ioAAQgqAAgugIg");
            this.shape_300.setTransform(148.3645,89.9326);
        
            this.shape_301 = new cjs.Shape();
            this.shape_301.graphics.f().s("#607996").ss(4,1,1).p("AnfFZIAFijQAcgCADgBQAggEAfgMQACgBACgBQBqgoBAhwQABgDACgDQBWiVBQhPQADgDADgDQBghgBxgSQAJgCAJAAQCSgQBGAtQAEADAEACQAoAcAOA0QADALACAMQADAbgMATQgMAUgbALQgRAHgdAFQg3AGhTAJQgSABgTAFQhLAThPBOQgFAEgFAFQgvAvgYAnQgEAGgDAFQgwBGgjAzQgCAEgDAEQh/CWjnglg");
            this.shape_301.setTransform(148.3145,89.8336);
        
            this.shape_302 = new cjs.Shape();
            this.shape_302.graphics.f("#FFFFFF").s().p("AneFZIgBAAIAFijIAfgDQAggEAfgMIAEgCQBqgoBAhwIADgGQBWiVBQhPIAGgGQBghgBxgSIASgCQCSgQBGAtIAIAFQAoAcAOA0QADALACAMQADAbgMATQgMAUgbALQgRAHgdAFIiKAPQgSABgTAFQhLAThPBOIgKAJQgvAvgYAnIgHALIhTB5IgFAIQhmB4ipAAQgqAAgtgHg");
            this.shape_302.setTransform(148.3145,89.8336);
        
            this.shape_303 = new cjs.Shape();
            this.shape_303.graphics.f().s("#607996").ss(4,1,1).p("AneFcIAEikQAdgCACgBQAggEAfgMQACgBACgBQBqgpBAhwQABgDACgDQBViWBQhPQADgDADgDQBghhBwgSQAJgCAJgBQCTgQBGAsQAEACAEADQApAcAOAzQADALABAMQAEAbgMAUQgMATgcALQgQAHgdAGQg3AGhTAKQgTABgTAFQhKAUhPBPQgFAEgFAFQguAwgZAmQgDAGgDAGQgwBFgjA0QgDAEgCAEQh/CWjngjg");
            this.shape_303.setTransform(148.2985,89.7487);
        
            this.shape_304 = new cjs.Shape();
            this.shape_304.graphics.f("#FFFFFF").s().p("AndFcIgBAAIAEikIAfgDQAggEAfgMIAEgCQBqgpBAhwIADgGQBViWBQhPIAGgGQBghhBwgSIASgDQCTgQBGAsIAIAFQApAcAOAzQADALABAMQAEAbgMAUQgMATgcALQgQAHgdAGIiKAQQgTABgTAFQhKAUhPBPIgKAJQguAwgZAmIgGAMIhTB5IgFAIQhnB5irAAQgoAAgsgGg");
            this.shape_304.setTransform(148.2985,89.7487);
        
            this.shape_305 = new cjs.Shape();
            this.shape_305.graphics.f().s("#607996").ss(4,1,1).p("AneFeIAEijQAdgDACgBQAggEAfgMQACgBACgBQBqgpA/hxQACgCABgDQBWiXBOhQQADgDADgDQBghiBwgTQAJgBAJgBQCUgRBFAqQAEADAFACQAoAcAPAzQADAMACALQAEAbgNAUQgMATgcALQgQAHgdAGQg2AIhUAKQgTACgTAFQhKAUhOBQQgGAEgEAFQguAwgZAnQgDAGgDAGQgvBEgkA1QgDAEgCAEQh/CXjngjg");
            this.shape_305.setTransform(148.2735,89.6466);
        
            this.shape_306 = new cjs.Shape();
            this.shape_306.graphics.f("#FFFFFF").s().p("AndFeIgBAAIAEijIAfgEQAggEAfgMIAEgCQBqgpA/hxIADgFQBWiXBOhQIAGgGQBghiBwgTIASgCQCUgRBFAqIAJAFQAoAcAPAzIAFAXQAEAbgNAUQgMATgcALQgQAHgdAGIiKASQgTACgTAFQhKAUhOBQIgKAJQguAwgZAnIgGAMIhTB5IgFAIQhnB6isAAQgnAAgsgGg");
            this.shape_306.setTransform(148.2735,89.6466);
        
            this.shape_307 = new cjs.Shape();
            this.shape_307.graphics.f().s("#607996").ss(4,1,1).p("AndFgIADijQAdgDADgBQAggEAegMQACgBACgBQBqgqA/hwQACgDABgDQBViXBOhQQADgEADgDQBghjBvgTQAJgCAJgBQCVgRBFApQAEACAFADQApAbAOA0QAEALABAMQAEAbgMATQgMAUgcALQgQAHgeAGQg1AIhVALQgSACgTAFQhKAWhOBQQgGAFgEAEQguAwgYAoQgEAFgDAGQguBEglA2QgCAEgDAEQh+CXjngig");
            this.shape_307.setTransform(148.2235,89.5437);
        
            this.shape_308 = new cjs.Shape();
            this.shape_308.graphics.f("#FFFFFF").s().p("AncFgIgBAAIADijIAggEQAggEAegMIAEgCQBqgqA/hwIADgGQBViXBOhQIAGgHQBghjBvgTIASgDQCVgRBFApIAJAFQApAbAOA0QAEALABAMQAEAbgMATQgMAUgcALQgQAHgeAGQg1AIhVALQgSACgTAFQhKAWhOBQIgKAJQguAwgYAoIgHALIhTB6IgFAIQhnB7isAAQgnAAgrgGg");
            this.shape_308.setTransform(148.2235,89.5437);
        
            this.shape_309 = new cjs.Shape();
            this.shape_309.graphics.f().s("#607996").ss(4,1,1).p("AndFiIADikQAdgDACAAQAggEAfgNQACgBACgBQBqgqA/hxQABgCACgDQBViYBNhRQADgDADgDQBfhlBvgTQAJgCAJgBQCVgRBGAnQAEACAEADQAqAbAOAzQAEAMACALQAEAbgNAUQgMATgcAMQgQAHgdAGQg1AJhVALQgTADgTAFQhJAXhPBRQgFAEgFAFQgtAwgYAoQgEAGgDAFQgtBDglA4QgDAEgDADQh+CZjngig");
            this.shape_309.setTransform(148.2235,89.4663);
        
            this.shape_310 = new cjs.Shape();
            this.shape_310.graphics.f("#FFFFFF").s().p("AncFiIgBAAIADikIAfgDQAggEAfgNIAEgCQBqgqA/hxIADgFQBViYBNhRIAGgGQBfhlBvgTIASgDQCVgRBGAnIAIAFQAqAbAOAzIAGAXQAEAbgNAUQgMATgcAMQgQAHgdAGQg1AJhVALQgTADgTAFQhJAXhPBRIgKAJQgtAwgYAoIgHALIhSB7IgGAHQhnB9itAAQgnAAgqgGg");
            this.shape_310.setTransform(148.2235,89.4663);
        
            this.shape_311 = new cjs.Shape();
            this.shape_311.graphics.f().s("#607896").ss(4,1,1).p("AncFkIACikQAdgDADAAQAggFAfgMQACgBACgBQBpgqA/hxQABgDACgDQBUiZBNhQQADgEADgDQBfhmBugTQAJgCAJgBQCWgSBGAmQAEACAEADQAqAaAPA0QAEALABAMQAEAbgMATQgMAUgcALQgQAHgeAHQg0AKhWALQgTADgTAGQhJAXhOBSQgFAFgEAEQguAxgYAnQgDAGgDAGQgtBCgmA5QgCAEgDADQh+CZjnghg");
            this.shape_311.setTransform(148.1735,89.3616);
        
            this.shape_312 = new cjs.Shape();
            this.shape_312.graphics.f("#FFFFFF").s().p("AnbFkIgBAAIACikIAggDQAggFAfgMIAEgCQBpgqA/hxIADgGQBUiZBNhQIAGgHQBfhmBugTIASgDQCWgSBGAmIAIAFQAqAaAPA0QAEALABAMQAEAbgMATQgMAUgcALQgQAHgeAHQg0AKhWALQgTADgTAGQhJAXhOBSIgJAJQguAxgYAnIgGAMIhTB7IgFAHQhnB+iuAAQgnAAgpgGg");
            this.shape_312.setTransform(148.1735,89.3616);
        
            this.shape_313 = new cjs.Shape();
            this.shape_313.graphics.f().s("#5F7896").ss(4,1,1).p("AncFmIACikQAdgDADAAQAggFAegMQACgBACgBQBqgrA+hxQABgDACgDQBViZBLhRQADgEADgDQBfhmBugVQAJgCAJAAQCWgTBGAkQAFADAEACQAqAaAPA0QAEALACAMQAEAbgNAUQgMATgcALQgQAIgdAHQg0AKhXANQgSACgTAGQhJAZhOBSQgFAFgFAFQgtAwgYAoQgDAGgDAGQgsBAgnA7QgCAEgDADQh9Cajoghg");
            this.shape_313.setTransform(148.1735,89.2667);
        
            this.shape_314 = new cjs.Shape();
            this.shape_314.graphics.f("#FFFFFF").s().p("AnbFmIgBAAIACikIAggDQAggFAegMIAEgCQBqgrA+hxIADgGQBViZBLhRIAGgHQBfhmBugVIASgCQCWgTBGAkIAJAFQAqAaAPA0IAGAXQAEAbgNAUQgMATgcALQgQAIgdAHQg0AKhXANQgSACgTAGQhJAZhOBSIgKAKQgtAwgYAoIgGAMIhTB7IgFAHQhnB/ivAAQgmAAgpgGg");
            this.shape_314.setTransform(148.1735,89.2667);
        
            this.shape_315 = new cjs.Shape();
            this.shape_315.graphics.f().s("#5F7896").ss(4,1,1).p("AnbFoIABikQAegDACAAQAggFAfgMQACgBACgBQBpgrA+hyQABgDACgDQBUiZBLhSQADgEADgDQBfhnBugVQAJgCAJgBQCWgTBGAjQAFACAEADQArAZAPA0QADALACAMQAFAbgNAUQgMATgcAMQgQAHgeAHQgzAMhXANQgTACgTAHQhIAZhOBTQgFAFgFAFQgtAxgXAoQgEAFgDAGQgqBAgoA8QgDAEgCADQh9Cajoggg");
            this.shape_315.setTransform(148.1329,89.1593);
        
            this.shape_316 = new cjs.Shape();
            this.shape_316.graphics.f("#FFFFFF").s().p("AnaFoIgBAAIABikIAggDQAggFAfgMIAEgCQBpgrA+hyIADgGQBUiZBLhSIAGgHQBfhnBugVIASgDQCWgTBGAjIAJAFQArAZAPA0QADALACAMQAFAbgNAUQgMATgcAMQgQAHgeAHQgzAMhXANQgTACgTAHQhIAZhOBTIgKAKQgtAxgXAoIgHALIhSB8IgFAHQhoCAiwAAQglAAgogGg");
            this.shape_316.setTransform(148.1329,89.1593);
        
            this.shape_317 = new cjs.Shape();
            this.shape_317.graphics.f().s("#5F7896").ss(4,1,1).p("AnbFqIABikQAdgDADAAQAggFAegNQACgBACgBQBqgrA9hyQACgCABgDQBVibBKhSQADgDADgDQBehpBtgVQAJgCAJgBQCYgUBGAiQAEACAFACQArAZAPA0QAEAMACALQAEAbgNAUQgMATgcAMQgQAHgdAIQgzAMhYAOQgTADgTAGQhIAahNBVQgFAEgFAFQgtAxgXAoQgEAGgDAGQgqA/goA9QgDAEgCADQh9Cbjoggg");
            this.shape_317.setTransform(148.1235,89.0714);
        
            this.shape_318 = new cjs.Shape();
            this.shape_318.graphics.f("#FFFFFF").s().p("AnaFqIgBAAIABikIAggDQAggFAegNIAEgCQBqgrA9hyIADgFQBVibBKhSIAGgGQBehpBtgVIASgDQCYgUBGAiIAJAEQArAZAPA0IAGAXQAEAbgNAUQgMATgcAMQgQAHgdAIQgzAMhYAOQgTADgTAGQhIAahNBVIgKAJQgtAxgXAoIgHAMIhSB8IgFAHQhoCBixAAQgkAAgogGg");
            this.shape_318.setTransform(148.1235,89.0714);
        
            this.shape_319 = new cjs.Shape();
            this.shape_319.graphics.f().s("#5F7896").ss(4,1,1).p("AnaDIIAbgCQAjgFAhgOQBsgrA+h0QBZimBOhUQBmhzB3gQQCYgUBGAgQA8AcANBNQAJA0g5AZQgrAUiOAXQhZAOhhBsQg6A+gaAxIhYCDQh8Ccjpggg");
            this.shape_319.setTransform(148.0859,88.9688);
        
            this.shape_320 = new cjs.Shape();
            this.shape_320.graphics.f("#FFFFFF").s().p("AnaFsIAAikIAbgCQAjgFAhgOQBsgrA+h0QBZimBOhUQBmhzB3gQQCYgUBGAgQA8AcANBNQAJA0g5AZQgrAUiOAXQhZAOhhBsQg6A+gaAxIhYCDQhnCCizAAQgkAAgngGg");
            this.shape_320.setTransform(148.0859,88.9688);
        
            this.shape_321 = new cjs.Shape();
            this.shape_321.graphics.f().s("#5F7896").ss(4,1,1).p("AnXFrIAAgcQACgiABgjQAAggABggQA9gIAhgOQAlgQAggYQA7gtAphMQAnhIAlg5QAuhKAsgvQAtgzAwgfQA+goBCgJQAVgDAUgBQA5gFArAFQAvAEAfAQQAQAIAMALQAhAeAIA4QAIA0g5AZQgwAWiHAXQgPACgRAGQgqAQgsAjQgOAMgPANQgEAEgEAEQgOAOgPAQQgNAOgLANQgLANgJAMQgMAQgKAPQgKAPgIAOQgGAJgGAJQgmA5gmA4QhIBWhpAbQhOAThhgPg");
            this.shape_321.setTransform(147.7742,88.5732);
        
            this.shape_322 = new cjs.Shape();
            this.shape_322.graphics.f("#FFFFFF").s().p("AnVFrIgCAAIAAgcIADhFIABhAQA9gIAhgOQAlgQAggYQA7gtAphMQAnhIAlg5QAuhKAsgvQAtgzAwgfQA+goBCgJIApgEQA5gFArAFQAvAEAfAQQAQAIAMALQAhAeAIA4QAIA0g5AZQgwAWiHAXQgPACgRAGQgqAQgsAjQgOAMgPANIgIAIQgOAOgPAQIgYAbIgUAZIgWAfQgKAPgIAOIgMASQgmA5gmA4QhIBWhpAbQgrALgxAAQgoAAgrgHg");
            this.shape_322.setTransform(147.7742,88.5732);
        
            this.shape_323 = new cjs.Shape();
            this.shape_323.graphics.f().s("#5F7896").ss(4,1,1).p("AnUFpIABgaQACgiACgjQABgfACggQA9gJAggOQAlgQAggYQA6guAphMQAmhHAlg6QAuhKAsgwQAtgyAwgfQA+goBCgJQAVgDAUgBQA4gEArAGQAuAFAeARQAPAIAMALQAgAeAHA3QAHA0g5AaQgxAWiEAZQgQADgQAGQgqAQgrAkQgPALgOAOQgEAEgEAEQgOAOgPAQQgMAOgMANQgLANgJAMQgMAQgKAPQgKAPgIAOQgGAJgGAJQgmA4gnA3QhIBWhqAZQhMARhegSg");
            this.shape_323.setTransform(147.4886,88.1954);
        
            this.shape_324 = new cjs.Shape();
            this.shape_324.graphics.f("#FFFFFF").s().p("AnSFpIgCAAIABgaIAEhFIADg/QA9gJAggOQAlgQAggYQA6guAphMQAmhHAlg6QAuhKAsgwQAtgyAwgfQA+goBCgJIApgEQA4gEArAGQAuAFAeARQAPAIAMALQAgAeAHA3QAHA0g5AaQgxAWiEAZQgQADgQAGQgqAQgrAkQgPALgOAOIgIAIIgdAeIgYAbIgUAZIgWAfQgKAPgIAOIgMASIhNBvQhIBWhqAZQglAIgpAAQgsAAgwgJg");
            this.shape_324.setTransform(147.4886,88.1954);
        
            this.shape_325 = new cjs.Shape();
            this.shape_325.graphics.f().s("#607896").ss(4,1,1).p("AnRFnIACgaQADghACgiQADgfACgfQA8gJAggPQAlgQAfgZQA6guAohMQAnhIAkg6QAuhKAsgvQAtgzAwgfQA/gnBAgJQAWgDAUgBQA4gEAqAIQAuAGAbARQAPAIAMALQAeAfAGA3QAGAzg4AaQgyAYiCAZQgQADgQAGQgpARgrAkQgOAMgOAOQgEAEgEAEQgPAOgOAQQgMAOgMANQgKANgKAMQgLAQgKAPQgLAPgIAOQgGAJgGAJQgmA4goA2QhIBUhqAZQhKANhcgTg");
            this.shape_325.setTransform(147.179,87.8224);
        
            this.shape_326 = new cjs.Shape();
            this.shape_326.graphics.f("#FFFFFF").s().p("AnPFnIgCAAIACgaIAFhDIAFg+QA8gJAggPQAlgQAfgZQA6guAohMQAnhIAkg6QAuhKAsgvQAtgzAwgfQA/gnBAgJIAqgEQA4gEAqAIQAuAGAbARQAPAIAMALQAeAfAGA3QAGAzg4AaQgyAYiCAZQgQADgQAGQgpARgrAkQgOAMgOAOIgIAIQgPAOgOAQIgYAbIgUAZIgVAfQgLAPgIAOIgMASQgmA4goA2QhIBUhqAZQgeAGghAAQgxAAg2gMg");
            this.shape_326.setTransform(147.179,87.8224);
        
            this.shape_327 = new cjs.Shape();
            this.shape_327.graphics.f().s("#607996").ss(4,1,1).p("AnOFlIADgZQADggAEgiQADgeACgfQA8gKAggQQAlgQAfgZQA5guAohNQAmhHAlg7QAthJAsgwQAtgyAwgfQA/goBAgIQAWgDAUgCQA3gDAqAJQAtAHAaASQAPAIAKAMQAdAeAFA3QAFAzg4AaQgyAZiAAbQgPADgQAGQgpARgrAlQgOAMgOAOQgDAEgEAEQgPANgOARQgMAOgLANQgLANgJAMQgMAQgKAPQgKAPgIAOQgHAJgGAJQgmA4gpA1QhIBThrAYQhIAKhZgVg");
            this.shape_327.setTransform(146.8746,87.4529);
        
            this.shape_328 = new cjs.Shape();
            this.shape_328.graphics.f("#FFFFFF").s().p("AnMFlIgCAAIADgZIAHhCIAFg9QA8gKAggQQAlgQAfgZQA5guAohNQAmhHAlg7QAthJAsgwQAtgyAwgfQA/goBAgIIAqgFQA3gDAqAJQAtAHAaASQAPAIAKAMQAdAeAFA3QAFAzg4AaQgyAZiAAbQgPADgQAGQgpARgrAlQgOAMgOAOIgHAIQgPANgOARIgXAbIgUAZIgWAfQgKAPgIAOIgNASQgmA4gpA1QhIBThrAYQgYADgaAAQg0AAg7gOg");
            this.shape_328.setTransform(146.8746,87.4529);
        
            this.shape_329 = new cjs.Shape();
            this.shape_329.graphics.f().s("#607996").ss(4,1,1).p("AnLFjIADgYQAFggAEghQAEgeADgeQA8gLAggQQAjgRAfgZQA4guAphNQAlhHAlg7QAuhKArgvQAsgzAxgfQA/gnBAgJQAWgDATgBQA4gDApALQAsAIAZASQAOAJAKALQAcAfADA2QAEAyg3AbQgyAbh/AbQgPAEgPAGQgpASgqAlQgOALgOAPQgEAEgEAEQgOANgOARQgMAPgLANQgLANgJAMQgMAQgJAPQgLAOgIAOQgGAJgHAJQgnA4goA0QhKBShqAWQhGAIhXgXg");
            this.shape_329.setTransform(146.5886,87.1199);
        
            this.shape_330 = new cjs.Shape();
            this.shape_330.graphics.f("#FFFFFF").s().p("AnJFjIgCAAIADgYIAJhBIAHg8QA8gLAggQQAjgRAfgZQA4guAphNQAlhHAlg7QAuhKArgvQAsgzAxgfQA/gnBAgJQAWgDATgBQA4gDApALQAsAIAZASQAOAJAKALQAcAfADA2QAEAyg3AbQgyAbh/AbQgPAEgPAGQgpASgqAlQgOALgOAPIgIAIIgcAeIgXAcIgUAZIgVAfQgLAOgIAOIgNASQgnA4goA0QhKBShqAWQgSACgUAAQg3AAhAgRg");
            this.shape_330.setTransform(146.5886,87.1199);
        
            this.shape_331 = new cjs.Shape();
            this.shape_331.graphics.f().s("#607996").ss(4,1,1).p("AnIFhIAEgYQAFgfAFggQAFgdAEgfQA7gLAggQQAjgRAfgaQA3guAphOQAlhGAkg8QAuhJArgwQAsgzAxgeQA/goBAgIQAWgDATgBQA3gDApAMQArAJAYAUQANAIAKAMQAaAeACA3QAEAxg3AbQgzAch8AcQgQAFgPAGQgoASgqAlQgNAMgOAOQgEAFgEADQgOAOgOARQgMAPgLANQgLANgJAMQgMAQgJAPQgLAOgIAOQgGAJgGAJQgoA3gpA0QhKBQhrAWQhEAFhVgZg");
            this.shape_331.setTransform(146.2855,86.778);
        
            this.shape_332 = new cjs.Shape();
            this.shape_332.graphics.f("#FFFFFF").s().p("AnHFhIgBAAIAEgYIAKg/IAJg8QA7gLAggQQAjgRAfgaQA3guAphOQAlhGAkg8QAuhJArgwQAsgzAxgeQA/goBAgIIApgEQA3gDApAMQArAJAYAUQANAIAKAMQAaAeACA3QAEAxg3AbQgzAch8AcQgQAFgPAGQgoASgqAlIgbAaIgIAIIgcAfIgXAcIgUAZIgVAfQgLAOgIAOIgMASQgoA3gpA0QhKBQhrAWIgZABQg6AAhGgVg");
            this.shape_332.setTransform(146.2855,86.778);
        
            this.shape_333 = new cjs.Shape();
            this.shape_333.graphics.f().s("#607996").ss(4,1,1).p("AnFFfIAFgXQAGgfAGgfQAFgdAFgeQA7gMAfgRQAjgRAegaQA3gvAohOQAlhFAkg9QAuhJArgwQAsgzAxgeQBAgoA/gIQAVgDAUgBQA3gCAoANQAqAKAXAUQANAJAJAMQAZAeAAA3QADAxg3AbQgzAdh6AdQgPAFgPAHQgoASgpAmQgOAMgOANQgDAEgEAEQgOAPgOARQgMAOgLANQgKANgJAMQgNAQgJAPQgKAPgJAOQgGAJgGAIQgoA4gqAzQhKBPhsAUQhCAChSgag");
            this.shape_333.setTransform(145.9805,86.4938);
        
            this.shape_334 = new cjs.Shape();
            this.shape_334.graphics.f("#FFFFFF").s().p("AnEFfIgBAAIAFgXIAMg+IAKg7QA7gMAfgRQAjgRAegaQA3gvAohOQAlhFAkg9QAuhJArgwQAsgzAxgeQBAgoA/gIIApgEQA3gCAoANQAqAKAXAUQANAJAJAMQAZAeAAA3QADAxg3AbQgzAdh6AdQgPAFgPAHQgoASgpAmIgcAZIgHAIIgcAgIgXAbIgTAZIgWAfIgTAdIgMARQgoA4gqAzQhKBPhsAUIgJAAQg/AAhMgYg");
            this.shape_334.setTransform(145.9805,86.4938);
        
            this.shape_335 = new cjs.Shape();
            this.shape_335.graphics.f().s("#607996").ss(4,1,1).p("AnDFcIAGgXQAHgdAHgfQAGgdAFgdQA7gNAegRQAjgSAegaQA2gvAohOQAlhGAkg8QAthKArgwQAtgzAwgeQBAgnA/gIQAWgDATgBQA3gCAnAPQAqAKAVAVQAMAJAJAMQAYAfgBA2QABAwg1AcQg1Aeh4AfQgOAEgPAHQgnAUgpAlQgOAMgNAOQgEAEgEAEQgOAPgNARQgMAOgLAOQgKANgKAMQgMAQgJAOQgLAPgIAOQgGAJgHAIQgoA4gqAyQhLBNhsAUQhAgBhPgcg");
            this.shape_335.setTransform(145.7009,86.2132);
        
            this.shape_336 = new cjs.Shape();
            this.shape_336.graphics.f("#FFFFFF").s().p("AnBFcIgCAAIAGgXIAOg8IALg6QA7gNAegRQAjgSAegaQA2gvAohOQAlhGAkg8QAthKArgwQAtgzAwgeQBAgnA/gIQAWgDATgBQA3gCAnAPQAqAKAVAVQAMAJAJAMQAYAfgBA2QABAwg1AcQg1Aeh4AfQgOAEgPAHQgnAUgpAlQgOAMgNAOIgIAIQgOAPgNARIgXAcIgUAZIgVAeQgLAPgIAOIgNARQgoA4gqAyQhLBNhsAUQhAgBhPgcg");
            this.shape_336.setTransform(145.7009,86.2132);
        
            this.shape_337 = new cjs.Shape();
            this.shape_337.graphics.f().s("#617996").ss(4,1,1).p("AnAFaIAGgXQAIgcAIgfQAHgcAGgdQA6gOAfgRQAigSAegbQA1gvAohOQAlhFAkg+QAshJArgwQAtgzAwgeQBBgnA+gIQAWgDATgBQA2gBAnAQQApALAUAWQAMAJAIAMQAWAfgCA2QABAwg2AbQg1Agh1AgQgPAFgPAHQgmATgpAmQgNANgOANQgDAFgEAEQgOAPgNARQgMAOgLANQgKANgJAMQgMAQgKAPQgKAPgJAOQgGAIgHAJQgoA3grAxQhLBNhsASQg+gDhNgeg");
            this.shape_337.setTransform(145.4048,85.9188);
        
            this.shape_338 = new cjs.Shape();
            this.shape_338.graphics.f("#FFFFFF").s().p("Am+FaIgCAAIAGgXIAQg7IANg5QA6gOAfgRQAigSAegbQA1gvAohOQAlhFAkg+QAshJArgwQAtgzAwgeQBBgnA+gIQAWgDATgBQA2gBAnAQQApALAUAWQAMAJAIAMQAWAfgCA2QABAwg2AbQg1Agh1AgQgPAFgPAHQgmATgpAmIgbAaIgHAJIgbAgIgXAbIgTAZIgWAfIgTAdIgNARQgoA3grAxQhLBNhsASQg+gDhNgeg");
            this.shape_338.setTransform(145.4048,85.9188);
        
            this.shape_339 = new cjs.Shape();
            this.shape_339.graphics.f().s("#617996").ss(4,1,1).p("Am9FXIAHgVQAJgcAIgeQAIgcAHgdQA6gOAegRQAigTAdgbQA1gvAohPQAkhFAkg+QAshJArgwQAtgzAwgeQBBgnA+gIQAWgDATAAQA2gBAmARQAoAMATAXQALAJAHANQAVAegDA2QAAAvg1AcQg2AhhzAhQgPAFgOAHQgmAUgoAnQgOALgNAPQgEAEgDAEQgOAQgNAQQgMAPgLANQgKANgJAMQgMAQgJAPQgLAPgIANQgHAJgGAJQgpA2gsAxQhLBLhtARQg8gGhKggg");
            this.shape_339.setTransform(145.1188,85.6473);
        
            this.shape_340 = new cjs.Shape();
            this.shape_340.graphics.f("#FFFFFF").s().p("Am7FXIgCAAIAHgVIARg6IAPg5QA6gOAegRQAigTAdgbQA1gvAohPQAkhFAkg+QAshJArgwQAtgzAwgeQBBgnA+gIQAWgDATAAQA2gBAmARQAoAMATAXQALAJAHANQAVAegDA2QAAAvg1AcQg2AhhzAhQgPAFgOAHQgmAUgoAnIgbAaIgHAIIgbAgIgXAcIgTAZIgVAfIgTAcIgNASQgpA2gsAxQhLBLhtARQg8gGhKggg");
            this.shape_340.setTransform(145.1188,85.6473);
        
            this.shape_341 = new cjs.Shape();
            this.shape_341.graphics.f().s("#617996").ss(4,1,1).p("Am6FVIAHgVQAKgbAJgeQAIgbAIgcQA5gQAegRQAigTAdgbQA0gwAohPQAkhEAkg/QAshJAqgwQAtgzAxgeQBBgnA9gIQAWgDATAAQA2gBAlATQAnANATAYQAKAJAHANQATAegEA1QgBAvg1AdQg2AihxAiQgPAFgOAIQgmAUgoAnQgNALgNAPQgEAEgDAFQgNAPgOARQgLAOgLAOQgKANgJAMQgMAQgJAOQgLAPgJAOQgGAIgHAJQgpA2gsAwQhMBKhtAQQg6gIhIgig");
            this.shape_341.setTransform(144.859,85.3494);
        
            this.shape_342 = new cjs.Shape();
            this.shape_342.graphics.f("#FFFFFF").s().p("Am5FVIgBAAIAHgVIATg5IAQg3QA5gQAegRQAigTAdgbQA0gwAohPQAkhEAkg/QAshKAqgvQAtgzAxgeQBBgnA9gIQAWgDATAAQA2gBAlATQAnANATAYQAKAJAHANQATAegEA1QgBAvg1AdQg2AihxAiQgPAFgOAIQgmAUgoAnQgNALgNAPIgHAJIgbAgIgWAcIgTAZIgVAeIgUAdIgNARQgpA2gsAwQhMBKhtAQQg6gIhIgig");
            this.shape_342.setTransform(144.859,85.3494);
        
            this.shape_343 = new cjs.Shape();
            this.shape_343.graphics.f().s("#617A96").ss(4,1,1).p("Am3FSIAIgVQAKgaALgdQAJgaAIgcQA5gQAegSQAhgUAdgbQAygwAphPQAjhEAkg/QAshKAqgwQAtgzAxgeQBBgnA9gIQAWgCATAAQA2gBAkAVQAmAOARAYQAKAKAGAMQATAfgGA1QgCAug0AdQg3AjhvAjQgOAGgPAIQglAVgnAnQgNALgNAPQgEAEgDAFQgOAPgNARQgLAPgLANQgKANgJAMQgMAQgJAPQgLAOgIAOQgHAJgHAIQgpA2gtAvQhMBJhtAPQg4gMhGgjg");
            this.shape_343.setTransform(144.588,85.0994);
        
            this.shape_344 = new cjs.Shape();
            this.shape_344.graphics.f("#FFFFFF").s().p("Am2FSIgBAAIAIgVIAVg3IARg2QA5gQAegSQAhgUAdgbQAygwAphPQAjhEAkg/QAshKAqgwQAtgzAxgeQBBgnA9gIQAWgCATAAQA2gBAkAVQAmAOARAYQAKAKAGAMQATAfgGA1QgCAug0AdQg3AjhvAjQgOAGgPAIQglAVgnAnQgNALgNAPIgHAJIgbAgIgWAcIgTAZIgVAfIgTAcIgOARQgpA2gtAvQhMBJhtAPQg4gMhGgjg");
            this.shape_344.setTransform(144.588,85.0994);
        
            this.shape_345 = new cjs.Shape();
            this.shape_345.graphics.f().s("#617A96").ss(4,1,1).p("Am1FPIAJgTQALgaALgcQAKgbAJgbQA5gRAdgSQAhgUAdgcQAygwAohOQAjhFAkhAQArhJAqgxQAtgzAxgdQBCgnA9gHQAVgEATAAQA2ABAkAWQAlAPAQAZQAJAJAGANQARAfgHA1QgDAtg0AeQg4AjhsAlQgPAGgOAHQglAXgmAmQgNANgNAPQgEADgDAFQgNAPgNASQgLAOgLANQgKANgJAMQgMARgJAOQgLAOgJAOQgGAJgHAJQgpA1guAvQhNBHhtAOQg2gOhDgmg");
            this.shape_345.setTransform(144.3271,84.8);
        
            this.shape_346 = new cjs.Shape();
            this.shape_346.graphics.f("#FFFFFF").s().p("AmzFPIgCAAIAJgTIAWg2QAKgaAJgcQA5gRAdgSQAhgUAdgbQAygxAohOQAjhGAkg+QArhKAqgxQAtgzAxgdQBCgnA9gIQAVgCATAAQA2AAAkAWQAlAPAQAZQAJAJAGANQARAfgHA0QgDAug0AeQg4AjhsAlQgPAGgOAHQglAWgmAmIgaAcIgHAJIgaAhIgWAbIgTAaIgVAeIgUAcIgNARQgpA2guAuQhNBHhtAPQg2gOhDgmg");
            this.shape_346.setTransform(144.3271,84.8);
        
            this.shape_347 = new cjs.Shape();
            this.shape_347.graphics.f().s("#617A96").ss(4,1,1).p("AmyFMIAJgTQAMgYAMgcQALgaAJgbQA5gSAdgSQAhgUAcgcQAxgxAohOQAjhFAkhAQArhJAqgxQAtgzAxgdQBCgnA8gIQAWgDATABQA1AAAjAYQAlAPAOAaQAJAKAFANQAQAfgIA0QgFAtgzAeQg4AlhrAmQgOAGgOAIQgkAWgmAmQgNANgNAQQgDAEgEAEQgNAQgNARQgLAOgKAOQgKANgJAMQgMAQgJAOQgLAPgJANQgHAJgGAJQgqA1guAuQhOBGhtAMQg0gQhBgog");
            this.shape_347.setTransform(144.0833,84.5214);
        
            this.shape_348 = new cjs.Shape();
            this.shape_348.graphics.f("#FFFFFF").s().p("AmxFMIgBAAIAJgTIAYg0QALgaAJgbQA5gSAdgSQAhgUAcgcQAxgxAohOQAjhFAkhAQArhJAqgxQAtgzAxgdQBCgnA8gIQAWgDATABQA1AAAjAYQAlAPAOAaQAJAKAFANQAQAfgIA0QgFAtgzAeQg4AlhrAmQgOAGgOAIQgkAWgmAmQgNANgNAQIgHAIIgaAhIgVAcIgTAZIgVAeIgUAcIgNASQgqA1guAuQhOBGhtAMQg0gQhBgog");
            this.shape_348.setTransform(144.0833,84.5214);
        
            this.shape_349 = new cjs.Shape();
            this.shape_349.graphics.f().s("#627A96").ss(4,1,1).p("AmwFKIALgSQAMgYANgcQALgZAKgbQA5gSAdgTQAggUAcgdQAwgwAohPQAjhFAjhAQAshKApgwQAtgzAxgdQBCgnA8gIQAWgCATAAQA1ABAjAZQAjAQAOAaQAIALAEANQAOAfgJA0QgFAtgzAdQg4AnhpAnQgOAGgNAIQglAXglAnQgNANgNAPQgDAEgEAFQgMAQgNAQQgLAPgLANQgJANgJAMQgMAQgJAPQgLAPgJANQgHAJgHAIQgqA2guAsQhPBFhtALQgygTg+gpg");
            this.shape_349.setTransform(143.8261,84.2458);
        
            this.shape_350 = new cjs.Shape();
            this.shape_350.graphics.f("#FFFFFF").s().p("AmuFKIgCAAIALgSIAZg0QALgZAKgbQA5gSAdgTQAggUAcgdQAwgwAohPQAjhFAjhAQAshKApgwQAtgzAxgdQBCgnA8gIQAWgCATAAQA1ABAjAZQAjAQAOAaQAIALAEANQAOAfgJA0QgFAtgzAdQg4AnhpAnQgOAGgNAIQglAXglAnIgaAcIgHAJIgZAgIgWAcIgSAZIgVAfIgUAcIgOARQgqA2guAsQhPBFhtALQgygTg+gpg");
            this.shape_350.setTransform(143.8261,84.2458);
        
            this.shape_351 = new cjs.Shape();
            this.shape_351.graphics.f().s("#627A96").ss(4,1,1).p("AmtFHIALgSQANgXAOgbQAMgYALgbQA4gTAcgTQAggVAcgdQAvgwAphQQAihEAjhBQArhJAqgwQAtg0AwgdQBDgnA8gHQAVgDATABQA1ABAiAaQAjASAMAbQAHAKAEANQANAfgKA0QgGAsgzAeQg5AphmAnQgOAHgNAIQgkAXglAnQgNAOgNAPQgDAEgDAFQgNAQgNAQQgLAPgKANQgKANgJANQgLAQgKAOQgKAPgJANQgHAJgHAIQgqA1gwAsQhOBDhuALQgwgWg8grg");
            this.shape_351.setTransform(143.5846,83.9708);
        
            this.shape_352 = new cjs.Shape();
            this.shape_352.graphics.f("#FFFFFF").s().p("AmsFHIgBAAIALgSIAbgyQAMgYALgbQA4gTAcgTQAggVAcgdQAvgwAphQQAihEAjhBQArhJAqgwQAtg0AwgdQBDgnA8gHQAVgDATABQA1ABAiAaQAjASAMAbQAHAKAEANQANAfgKA0QgGAsgzAeQg5AphmAnIgbAPQgkAXglAnIgaAdIgGAJIgaAgIgVAcIgTAaIgVAeIgTAcIgOARQgqA1gwAsQhOBDhuALQgwgWg8grg");
            this.shape_352.setTransform(143.5846,83.9708);
        
            this.shape_353 = new cjs.Shape();
            this.shape_353.graphics.f().s("#627A96").ss(4,1,1).p("AmrFEIALgRQAPgWAOgaQANgYALgbQA4gTAcgUQAggVAbgdQAvgxAohQQAihDAkhCQAqhJAqgxQAtgzAwgdQBDgnA8gHQAVgDATABQA0ACAiAbQAiATALAbQAHALADANQAMAfgMA0QgHAsgyAeQg6AphkApQgOAHgNAJQgjAXglAnQgMAOgNAPQgDAFgEAEQgMAQgNARQgKAPgLANQgJANgJAMQgMAQgJAPQgLAOgJAOQgHAIgHAJQgrA1gvArQhQBChuAJQgugZg5gtg");
            this.shape_353.setTransform(143.3625,83.6857);
        
            this.shape_354 = new cjs.Shape();
            this.shape_354.graphics.f("#FFFFFF").s().p("AmqFEIgBAAIALgRQAPgWAOgaQANgYALgbQA4gTAcgUQAggVAbgdQAvgxAohQQAihDAkhCQAqhJAqgxQAtgzAwgdQBDgnA8gHQAVgDATABQA0ACAiAbQAiATALAbQAHALADANQAMAfgMA0QgHAsgyAeQg6AphkApQgOAHgNAJQgjAXglAnIgZAdIgHAJIgZAhIgVAcIgSAZIgVAfIgUAcIgOARQgrA1gvArQhQBChuAJQgugZg5gtg");
            this.shape_354.setTransform(143.3625,83.6857);
        
            this.shape_355 = new cjs.Shape();
            this.shape_355.graphics.f().s("#627A96").ss(4,1,1).p("AmpFCIANgQQAPgWAPgaQAOgXAMgaQA3gVAcgUQAfgVAbgdQAugyAphPQAhhEAjhCQArhJApgxQAtgzAxgdQBDgnA7gHQAWgCATAAQAzADAiAdQAhATAJAcQAHALACANQALAggNAzQgIArgyAfQg6AqhiAqQgOAHgNAJQgjAYgkAoQgMANgNAQQgDAEgDAFQgNAQgMARQgLAOgKAOQgKANgIAMQgMAQgJAOQgLAPgJANQgHAJgHAIQgrA1gxAqQhPBBhvAIQgsgbg3gvg");
            this.shape_355.setTransform(143.1346,83.3958);
        
            this.shape_356 = new cjs.Shape();
            this.shape_356.graphics.f("#FFFFFF").s().p("AmoFCIgBAAIANgQIAegwQAOgXAMgaQA3gVAcgUQAfgVAbgdQAugyAphPQAhhEAjhCQArhJApgxQAtgzAxgdQBDgnA7gHQAWgCATAAQAzADAiAdQAhATAJAcQAHALACANQALAggNAzQgIArgyAfQg6AqhiAqIgbAQQgjAYgkAoIgZAdIgGAJIgZAhIgVAcIgSAZIgVAeIgUAcIgOARQgrA1gxAqQhPBBhvAIQgsgbg3gvg");
            this.shape_356.setTransform(143.1346,83.3958);
        
            this.shape_357 = new cjs.Shape();
            this.shape_357.graphics.f().s("#627A96").ss(4,1,1).p("AmnE/IANgQQAQgVARgZQAOgXAMgZQA3gWAcgUQAfgVAbgeQAtgyAohQQAihDAjhCQAqhKApgwQAtg0AxgcQBDgnA7gHQAWgDASABQA0ADAhAeQAgAUAIAdQAGALACAOQAJAfgOAzQgJArgxAfQg7AshgAqQgNAIgNAJQgjAZgkAnQgMAOgMAQQgDAEgEAFQgMAQgMARQgLAPgKANQgJANgJAMQgLAQgKAPQgLAOgJANQgHAJgHAIQgrA1gxApQhRBAhuAHQgqgeg1gxg");
            this.shape_357.setTransform(142.9223,83.1107);
        
            this.shape_358 = new cjs.Shape();
            this.shape_358.graphics.f("#FFFFFF").s().p("AmmE/IgBAAIANgQQAQgVARgZQAOgXAMgZQA3gWAcgUQAfgVAbgeQAtgyAohQQAihDAjhCQAqhKApgwQAtg0AxgcQBDgnA7gHQAWgDASABQA0ADAhAeQAgAUAIAdQAGALACAOQAJAfgOAzQgJArgxAfQg7AshgAqIgaARQgjAZgkAnIgYAeIgHAJIgYAhIgVAcIgSAZIgVAfIgUAbIgOARQgrA1gxApQhRBAhuAHQgqgeg1gxg");
            this.shape_358.setTransform(142.9223,83.1107);
        
            this.shape_359 = new cjs.Shape();
            this.shape_359.graphics.f().s("#637B96").ss(4,1,1).p("AmlE9IAOgPQARgVARgYQAPgXANgZQA3gWAbgUQAfgWAageQAtgyAohRQAhhDAjhCQAqhKApgwQAtg0AxgcQBEgnA6gHQAWgDASACQAzADAhAfQAfAVAHAeQAFALACAOQAIAfgQAzQgKAqgwAgQg8AtheArQgNAIgNAJQgiAagjAoQgMAOgMAPQgEAFgDAEQgMARgMAQQgKAPgKAOQgKANgJAMQgKAQgLAOQgKAPgKANQgHAJgHAIQgrA0gyApQhRA+hvAGQgoghgygyg");
            this.shape_359.setTransform(142.7223,82.8469);
        
            this.shape_360 = new cjs.Shape();
            this.shape_360.graphics.f("#FFFFFF").s().p("AmkE9IgBAAIAOgPQARgVARgYQAPgXANgZQA3gWAbgUQAfgWAageQAtgyAohRQAhhDAjhCQAqhKApgwQAtg0AxgcQBEgnA6gHQAWgDASACQAzADAhAfQAfAVAHAeQAFALACAOQAIAfgQAzQgKAqgwAgQg8AtheArIgaARQgiAagjAoIgYAdIgHAJIgYAhIgUAdIgTAZIgVAeIgUAcIgOARQgrA0gyApQhRA+hvAGQgoghgygyg");
            this.shape_360.setTransform(142.7223,82.8469);
        
            this.shape_361 = new cjs.Shape();
            this.shape_361.graphics.f().s("#637B96").ss(4,1,1).p("AmjE6IAPgOQASgUARgYQAQgWAOgZQA2gWAbgVQAfgXAZgeQAsgyAphRQAhhCAihEQAqhJApgxQAtgzAxgcQBEgnA6gHQAVgDATACQAzADAgAhQAeAWAGAfQAFALABAOQAGAfgRAzQgLAqgwAfQg8AuhcAtQgNAIgMAKQgiAYgjAqQgMAOgMAQQgDAEgDAFQgMAQgMARQgKAPgKANQgKANgIAMQgLAQgKAPQgLAOgKAOQgHAIgHAIQgsA0gyAoQhRA9hwAFQgmgkgvg0g");
            this.shape_361.setTransform(142.505,82.5469);
        
            this.shape_362 = new cjs.Shape();
            this.shape_362.graphics.f("#FFFFFF").s().p("AmiE6IgBAAIAPgOQASgUARgYQAQgWAOgZQA2gWAbgVQAfgXAZgeQAsgyAphRIBDiGQAqhJApgxQAtgzAxgcQBEgnA6gHQAVgDATACQAzADAgAhQAeAWAGAfQAFALABAOQAGAfgRAzQgLAqgwAfQg8AuhcAtQgNAIgMAKQgiAYgjAqIgYAeIgGAJIgYAhIgUAcIgSAZIgVAfIgVAcIgOAQQgsA0gyAoQhRA9hwAFQgmgkgvg0g");
            this.shape_362.setTransform(142.505,82.5469);
        
            this.shape_363 = new cjs.Shape();
            this.shape_363.graphics.f().s("#637B96").ss(4,1,1).p("AmhE3IAPgOQATgSATgYQAQgVAPgZQA2gXAbgVQAegXAZgfQArgyAohRQAhhCAjhEQAphKApgwQAtg0AxgcQBEgnA6gHQAVgCATACQAyADAgAjQAdAWAFAgQAEAMABANQAEAggSAyQgMApgvAgQg9AwhaAuQgMAIgNAKQghAZgiApQgMAPgMAQQgDAEgEAFQgLARgMAQQgKAPgKANQgJANgJANQgLAQgKAOQgLAPgKANQgHAIgHAIQgsA0gyAnQhTA8hvAEQgkgngtg2g");
            this.shape_363.setTransform(142.32,82.2556);
        
            this.shape_364 = new cjs.Shape();
            this.shape_364.graphics.f("#FFFFFF").s().p("AmgE3IgBAAIAPgOQATgSATgYQAQgVAPgZQA2gXAbgVQAegXAZgfQArgyAohRIBEiGQAphKApgwQAtg0AxgcQBEgnA6gHQAVgCATACQAyADAgAjQAdAWAFAgQAEAMABANQAEAggSAyQgMApgvAgQg9AwhaAuQgMAIgNAKQghAZgiApIgYAfIgHAJIgXAhIgUAcIgSAaIgVAeIgVAcIgOAQQgsA0gyAnQhTA8hvAEQgkgngtg2g");
            this.shape_364.setTransform(142.32,82.2556);
        
            this.shape_365 = new cjs.Shape();
            this.shape_365.graphics.f().s("#637B96").ss(4,1,1).p("AmfE1IAQgNQAUgSATgXQARgVAQgYQA1gZAbgVQAdgXAZgfQArgzAohRQAhhCAihEQAphKApgwQAtg0AxgcQBFgnA4gGQAWgDATACQAyAEAfAkQAcAXAEAhQADALAAAOQAEAggUAyQgMApgwAgQg9AxhXAvQgNAIgMAKQghAagiAqQgMAOgMAQQgDAFgDAEQgLARgMARQgKAPgKANQgJANgJAMQgKAQgLAPQgKAOgKANQgHAJgIAIQgsAzgzAmQhTA7hwADQgigpgqg4g");
            this.shape_365.setTransform(142.1266,81.9719);
        
            this.shape_366 = new cjs.Shape();
            this.shape_366.graphics.f("#FFFFFF").s().p("AmeE1IgBAAIAQgNQAUgSATgXQARgVAQgYQA1gZAbgVQAdgXAZgfQArgzAohRIBDiGQAphKApgwQAtg0AxgcQBFgnA4gGQAWgDATACQAyAEAfAkQAcAXAEAhQADALAAAOQAEAggUAyQgMApgwAgQg9AxhXAvIgZASQghAagiAqIgYAeIgGAJIgXAiIgUAcIgSAZIgVAfIgUAbIgPARQgsAzgzAmQhTA7hwADQgigpgqg4g");
            this.shape_366.setTransform(142.1266,81.9719);
        
            this.shape_367 = new cjs.Shape();
            this.shape_367.graphics.f().s("#637B96").ss(4,1,1).p("AmdEyIAQgMQAVgRAUgXQASgUAQgYQA1gZAagWQAegXAYgfQAqgzAohSQAghCAjhEQAohKAqgxQAsgzAxgcQBFgnA5gGQAWgDASACQAyAFAeAlQAcAYACAhQADAMAAAOQACAggVAyQgOAoguAhQg/AxhVAxQgMAIgMAKQggAbgiAqQgMAOgLARQgDAEgEAFQgLARgLAQQgKAPgKAOQgJANgJAMQgKAQgLAOQgLAPgKANQgHAIgHAIQgtA0gzAlQhUA5hwACQgggsgng6g");
            this.shape_367.setTransform(141.9589,81.6806);
        
            this.shape_368 = new cjs.Shape();
            this.shape_368.graphics.f("#FFFFFF").s().p("AmcEyIgBAAIAQgMQAVgRAUgXQASgUAQgYQA1gZAagWQAegXAYgfQAqgzAohSIBDiGQAohKAqgxQAsgzAxgcQBFgnA5gGQAWgDASACQAyAFAeAlQAcAYACAhQADAMAAAOQACAggVAyQgOAoguAhQg/AxhVAxQgMAIgMAKQggAbgiAqIgXAfIgHAJIgWAhIgUAdIgSAZIgVAeIgVAcIgOAQQgtA0gzAlQhUA5hwACQgggsgng6g");
            this.shape_368.setTransform(141.9589,81.6806);
        
            this.shape_369 = new cjs.Shape();
            this.shape_369.graphics.f().s("#637B96").ss(4,1,1).p("AmbEvIARgMQAVgQAVgWQATgUARgXQA0gaAbgWQAdgYAYgfQApgzAohSQAghCAihFQAohJAqgxQAsg0AxgbQBGgnA4gHQAVgCATACQAxAFAeAnQAbAZABAiQACAMgBAOQABAggWAxQgOAogvAhQg+AzhTAxQgNAJgLAKQggAbgiAqQgLAPgMARQgDAEgDAFQgLARgLAQQgKAQgKANQgJANgJAMQgKAQgKAPQgLAOgKANQgIAIgHAIQgtAzg0AlQhUA4hwABQgegvglg8g");
            this.shape_369.setTransform(141.7893,81.4056);
        
            this.shape_370 = new cjs.Shape();
            this.shape_370.graphics.f("#FFFFFF").s().p("AmaEvIgBAAIARgMQAVgQAVgWQATgUARgXQA0gaAbgWQAdgYAYgfQApgzAohSIBCiHQAohJAqgxQAsg0AxgbQBGgnA4gHQAVgCATACQAxAFAeAnQAbAZABAiQACAMgBAOQABAggWAxQgOAogvAhQg+AzhTAxIgYATQggAbgiAqIgXAgIgGAJIgWAhIgUAdIgSAZIgUAfIgVAbIgPAQQgtAzg0AlQhUA4hwABIhDhrg");
            this.shape_370.setTransform(141.7893,81.4056);
        
            this.shape_371 = new cjs.Shape();
            this.shape_371.graphics.f().s("#647B96").ss(4,1,1).p("AmaEtIASgLQAWgQAWgVQATgUARgXQA1gaAagXQAcgYAYggQApgzAohSQAfhBAihGQAohKAqgwQAsg0AxgbQBGgnA3gHQAWgCATACQAxAGAdAoQAaAaAAAiQACANgCAOQgBAggXAxQgPAnguAhQg/A1hRAyQgMAJgMALQgfAbghArQgLAPgMAQQgDAFgDAEQgLARgLARQgKAPgKANQgJANgIANQgKAQgLAOQgLAOgKAOQgHAIgIAIQgtAzg1AjQhUA3hxAAQgcgygjg9g");
            this.shape_371.setTransform(141.6571,81.125);
        
            this.shape_372 = new cjs.Shape();
            this.shape_372.graphics.f("#FFFFFF").s().p("AmaEtIAAAAIASgLQAWgQAWgVQATgUARgXQA1gaAagXQAcgYAYggQApgzAohSIBBiHQAohKAqgwQAsg0AxgbQBGgnA3gHQAWgCATACQAxAGAdAoQAaAaAAAiQACANgCAOQgBAggXAxQgPAnguAhQg/A1hRAyIgYAUQgfAbghArIgXAfIgGAJIgWAiIgUAcIgRAaIgVAeIgVAcIgPAQQgtAzg1AjQhUA3hxAAIg/hvg");
            this.shape_372.setTransform(141.6571,81.125);
        
            this.shape_373 = new cjs.Shape();
            this.shape_373.graphics.f().s("#647B96").ss(4,1,1).p("AmZEqIATgKQAXgPAXgVQAUgTASgWQA0gcAZgWQAdgZAXggQAogzAohTQAfhBAihGQAnhKAqgwQAtg0AwgbQBHgnA3gHQAWgCASADQAxAFAdAqQAYAbgBAjQACANgDAOQgCAggYAxQgRAngtAhQhAA2hPAzQgLAJgMAKQgfAdggArQgLAPgMAQQgDAFgDAFQgLARgLAQQgKAQgJANQgJANgIAMQgLAQgKAPQgLAOgKANQgIAIgHAIQguAzg1AjQhVA1hxgBQgag0gghAg");
            this.shape_373.setTransform(141.5281,80.8326);
        
            this.shape_374 = new cjs.Shape();
            this.shape_374.graphics.f("#FFFFFF").s().p("AleGeIg6h0IgBAAIATgKQAXgPAXgVQAUgTASgWQA0gcAZgWQAdgZAXggQAogzAohTIBBiHQAnhKAqgwQAtg0AwgbQBHgnA3gHQAWgCASADQAxAFAdAqQAYAbgBAjQACANgDAOQgCAggYAxQgRAngtAhQhAA2hPAzIgXATQgfAdggArIgXAfIgGAKIgWAhIgTAdIgRAZIgVAfIgVAbIgPAQQguAzg1AjQhSA0huAAIgGAAg");
            this.shape_374.setTransform(141.5281,80.8326);
        
            this.shape_375 = new cjs.Shape();
            this.shape_375.graphics.f().s("#647B96").ss(4,1,1).p("AmYEoIATgKQAYgOAYgUQAVgTASgWQA0gcAZgXQAcgZAYggQAng0AohTQAfhBAhhGQAnhKAqgxQAsgzAxgbQBHgnA3gGQAWgDASADQAwAGAdArQAYAcgDAkQABAMgDAPQgDAggaAxQgRAmgtAiQhBA2hMA1QgMAKgLAJQgfAeggArQgLAPgLARQgDAFgDAEQgLASgLAQQgJAPgKAOQgJANgIAMQgKAQgLAOQgLAPgKANQgHAIgIAIQguAyg2AiQhVA0hxgCQgYg3gehBg");
            this.shape_375.setTransform(141.4118,80.5432);
        
            this.shape_376 = new cjs.Shape();
            this.shape_376.graphics.f("#FFFFFF").s().p("AlhGgIg2h4IgBAAIATgKQAYgOAYgUQAVgTASgWQA0gcAZgXQAcgZAYggQAng0AohTIBAiHQAnhKAqgxQAsgzAxgbQBHgnA3gGQAWgDASADQAwAGAdArQAYAcgDAkQABAMgDAPQgDAggaAxQgRAmgtAiQhBA2hMA1IgXATQgfAeggArIgWAgIgGAJIgWAiIgTAdIgRAZIgVAeIgVAcIgPAQQguAyg2AiQhRAyhrAAIgKAAg");
            this.shape_376.setTransform(141.4118,80.5432);
        
            this.shape_377 = new cjs.Shape();
            this.shape_377.graphics.f().s("#647C96").ss(4,1,1).p("AmXElIAUgJQAZgOAYgTQAWgSATgWQA0gdAZgXQAbgaAXggQAmg0AohTQAfhBAihHQAmhJAqgxQAsg0AxgbQBHgnA3gGQAVgCATADQAwAGAcAtQAXAcgEAlQAAANgDAOQgFAhgbAwQgSAmgtAiQhBA4hKA1QgMAKgLAKQgeAegfAsQgLAPgMARQgCAFgDAEQgLASgLAQQgJAQgKANQgIANgJAMQgKAQgLAPQgKAOgLANQgHAIgIAIQguAyg3AhQhVAzhygDQgWg6gbhDg");
            this.shape_377.setTransform(141.3046,80.2794);
        
            this.shape_378 = new cjs.Shape();
            this.shape_378.graphics.f("#FFFFFF").s().p("AllGiQgWg6gbhDIgBAAIAUgJQAZgOAYgTQAWgSATgWQA0gdAZgXQAbgaAXggQAmg0AohTIBBiIQAmhJAqgxQAsg0AxgbQBHgnA3gGQAVgCATADQAwAGAcAtQAXAcgEAlQAAANgDAOQgFAhgbAwQgSAmgtAiQhBA4hKA1IgXAUQgeAegfAsIgXAgIgFAJIgWAiIgTAdIgRAZIgVAfIgVAbIgPAQQguAyg3AhQhQAwhoAAIgPAAg");
            this.shape_378.setTransform(141.3046,80.2794);
        
            this.shape_379 = new cjs.Shape();
            this.shape_379.graphics.f().s("#647C96").ss(4,1,1).p("AmWEiIAVgIQAZgNAagTQAWgRAUgWQAzgdAZgYQAbgaAXghQAlg0AohTQAfhAAhhIQAmhJAqgxQAsg0AxgbQBIgnA2gGQAVgCATADQAwAHAbAuQAWAdgFAmQAAANgEAPQgGAggcAwQgUAlgsAiQhCA6hIA2QgLAKgLALQgeAegfAsQgLAPgLARQgDAFgDAFQgKASgLAQQgJAPgJAOQgJANgHAMQgLAQgLAOQgLAPgLAMQgHAJgIAIQguAxg3AhQhXAxhxgEQgUg9gZhFg");
            this.shape_379.setTransform(141.2213,79.9993);
        
            this.shape_380 = new cjs.Shape();
            this.shape_380.graphics.f("#FFFFFF").s().p("AloGkQgUg9gZhFIgBAAIAVgIQAZgNAagTQAWgRAUgWQAzgdAZgYQAbgaAXghQAlg0AohTIBAiIQAmhJAqgxQAsg0AxgbQBIgnA2gGQAVgCATADQAwAHAbAuQAWAdgFAmQAAANgEAPQgGAggcAwQgUAlgsAiQhCA6hIA2IgWAVQgeAegfAsIgWAgIgGAKIgVAiIgSAdIgQAZIgWAeIgWAbIgPARQguAxg3AhQhQAthlAAIgTAAg");
            this.shape_380.setTransform(141.2213,79.9993);
        
            this.shape_381 = new cjs.Shape();
            this.shape_381.graphics.f().s("#647C96").ss(4,1,1).p("AmVEfIAWgHQAagMAagTQAXgRAVgVQAygeAZgYQAbgaAWghQAlg1AohUQAeg/AhhIQAmhKAqgxQAsg0AxgbQBIgmA1gGQAWgCASADQAwAHAaAvQAWAfgGAmQgBANgFAPQgHAggdAwQgVAlgrAjQhDA6hGA4QgLAJgLAMQgdAfgfAsQgKAPgLARQgDAFgDAFQgKASgLAQQgJAPgJAOQgJANgHAMQgLAQgLAOQgLAPgKAMQgIAJgHAIQgvAxg4AgQhXAwhygGQgSg/gWhHg");
            this.shape_381.setTransform(141.1405,79.7133);
        
            this.shape_382 = new cjs.Shape();
            this.shape_382.graphics.f("#FFFFFF").s().p("AlsGlQgSg/gWhHIgBAAIAWgHQAagMAagTQAXgRAVgVQAygeAZgYQAbgaAWghQAlg1AohUIA/iHQAmhKAqgxQAsg0AxgbQBIgmA1gGQAWgCASADQAwAHAaAvQAWAfgGAmQgBANgFAPQgHAggdAwQgVAlgrAjQhDA6hGA4IgWAVQgdAfgfAsIgVAgIgGAKIgVAiQgJAPgJAOIgQAZIgWAeIgVAbIgPARQgvAxg4AgQhOArhkAAIgXgBg");
            this.shape_382.setTransform(141.1405,79.7133);
        
            this.shape_383 = new cjs.Shape();
            this.shape_383.graphics.f().s("#657C96").ss(4,1,1).p("AmUEdIAWgHQAbgLAbgSQAYgRAVgVQAygfAZgYQAagaAWgiQAkg0AohVQAeg/AhhJQAmhJAqgxQAsg0AxgbQBIgmA1gGQAWgCASADQAvAIAaAwQAUAggHAnQgBANgFAPQgJAggfAwQgVAkgrAjQhDA8hEA4QgLALgLALQgdAfgeAtQgKAQgLARQgDAEgDAFQgKASgKAQQgJAQgJANQgJANgHANQgLAQgLAOQgLAOgLANQgHAIgIAIQgvAxg4AfQhYAvhygHQgQhBgUhJg");
            this.shape_383.setTransform(141.0641,79.4304);
        
            this.shape_384 = new cjs.Shape();
            this.shape_384.graphics.f("#FFFFFF").s().p("AlwGnQgQhBgUhJIAAAAIAWgHQAbgLAbgSQAYgRAVgVQAygfAZgYQAagaAWgiQAkg0AohVIA/iIQAmhJAqgxQAsg0AxgbQBIgmA1gGQAWgCASADQAvAIAaAwQAUAggHAnQgBANgFAPQgJAggfAwQgVAkgrAjQhDA8hEA4IgWAWQgdAfgeAtIgVAhIgGAJIgUAiQgJAQgJANIgQAaIgWAeIgWAbIgPAQQgvAxg4AfQhMAphhAAIgdgBg");
            this.shape_384.setTransform(141.0641,79.4304);
        
            this.shape_385 = new cjs.Shape();
            this.shape_385.graphics.f().s("#657C96").ss(4,1,1).p("AmUEaIAXgHQAcgKAcgRQAYgQAWgVQAyggAYgYQAbgbAVgiQAjg1AohUQAeg/AhhJQAlhKAqgxQAsg0AxgaQBIgnA1gFQAWgDASAEQAvAIAZAyQAUAggIAoQgDANgFAQQgKAgggAvQgWAkgrAjQhEA9hBA5QgLALgLAMQgcAggeAsQgKAQgLASQgDAEgCAFQgKASgLARQgJAPgJAOQgIANgIAMQgKAQgLAOQgLAOgLANQgIAIgHAIQgwAxg5AeQhXAuhzgIQgOhEgRhLg");
            this.shape_385.setTransform(141.0018,79.1577);
        
            this.shape_386 = new cjs.Shape();
            this.shape_386.graphics.f("#FFFFFF").s().p("Al0GpQgOhEgRhLIgBAAIAXgHQAcgKAcgRQAYgQAWgVQAyggAYgYQAbgbAVgiQAjg1AohUIA/iIQAlhKAqgxQAsg0AxgaQBIgnA1gFQAWgDASAEQAvAIAZAyQAUAggIAoQgDANgFAQQgKAgggAvQgWAkgrAjIiFB2IgWAXQgcAggeAsIgVAiIgFAJIgVAjIgSAdIgQAZQgKAQgLAOIgWAbIgPAQQgwAxg5AeQhKAnheAAIgigBg");
            this.shape_386.setTransform(141.0018,79.1577);
        
            this.shape_387 = new cjs.Shape();
            this.shape_387.graphics.f().s("#657C96").ss(4,1,1).p("AmTEXIAYgGQAcgJAdgRQAagQAWgUQAyggAXgZQAagbAWgjQAig1AohUQAdg/AhhKQAlhJAqgxQAsg0AxgbQBJgmA0gGQAWgCASAEQAvAIAYA0QATAggKApQgCAOgGAPQgMAhghAvQgXAjgqAjQhFA/g/A6QgLALgKAMQgcAggdAtQgLAQgKASQgDAEgDAFQgKATgJAQQgKAPgJAOQgHANgIAMQgLAQgLAOQgLAPgLAMQgHAIgIAIQgwAxg5AdQhZAthzgJQgMhIgOhMg");
            this.shape_387.setTransform(140.9224,78.9026);
        
            this.shape_388 = new cjs.Shape();
            this.shape_388.graphics.f("#FFFFFF").s().p("Al4GrQgMhIgOhMIgBAAIAYgGQAcgJAdgRQAagQAWgUQAyggAXgZQAagbAWgjQAig1AohUIA+iJQAlhJAqgxQAsg0AxgbQBJgmA0gGQAWgCASAEQAvAIAYA0QATAggKApQgCAOgGAPQgMAhghAvQgXAjgqAjIiEB5IgVAXQgcAggdAtIgVAiIgGAJIgTAjIgTAdIgPAZIgWAeIgWAbIgPAQQgwAxg5AdQhKAlhcAAIgmgBg");
            this.shape_388.setTransform(140.9224,78.9026);
        
            this.shape_389 = new cjs.Shape();
            this.shape_389.graphics.f().s("#657C96").ss(4,1,1).p("AmSEVIAYgGQAdgIAegRQAagPAXgUQAyghAXgZQAagbAVgjQAhg1AohVQAdg/AhhKQAlhJAqgyQAsgzAxgbQBIgmA0gGQAWgCASAEQAvAJAYA1QASAhgLAqQgDAOgHAPQgNAhgiAvQgYAigqAkQhFA/g9A8QgLALgKAMQgcAhgcAtQgKARgLARQgDAFgCAFQgKASgKAQQgJAQgJANQgHANgIANQgLAQgLAOQgLAOgLANQgIAIgHAIQgwAwg7AdQhYArh0gKQgKhKgMhOg");
            this.shape_389.setTransform(140.8586,78.633);
        
            this.shape_390 = new cjs.Shape();
            this.shape_390.graphics.f("#FFFFFF").s().p("Al8GtIgWiYIAAAAIAYgGQAdgIAegRQAagPAXgUQAyghAXgZQAagbAVgjQAhg1AohVIA+iJQAlhJAqgyQAsgzAxgbQBIgmA0gGQAWgCASAEQAvAJAYA1QASAhgLAqQgDAOgHAPQgNAhgiAvQgYAigqAkQhFA/g9A8IgVAXQgcAhgcAtIgVAiIgFAKIgUAiQgJAQgJANIgPAaIgWAeIgWAbIgPAQQgwAwg7AdQhHAjhaAAQgVAAgWgCg");
            this.shape_390.setTransform(140.8586,78.633);
        
            this.shape_391 = new cjs.Shape();
            this.shape_391.graphics.f().s("#657C96").ss(4,1,1).p("AmRESIAYgFQAfgIAegQQAbgOAYgUQAxgiAXgZQAZgcAVgjQAhg1AohWQAdg+AghKQAlhKAqgxQArg0AxgaQBKgnAzgFQAWgCASAEQAuAJAYA2QARAjgMAqQgEAOgHAQQgOAggkAvQgZAigpAkQhGBBg7A8QgLAMgJAMQgcAigcAtQgKAQgKASQgDAFgDAFQgJASgKAQQgJAQgJAOQgHANgIAMQgLAQgLAOQgLAOgLANQgHAIgIAIQgxAwg6AcQhaAphzgLQgIhMgKhQg");
            this.shape_391.setTransform(140.7983,78.3569);
        
            this.shape_392 = new cjs.Shape();
            this.shape_392.graphics.f("#FFFFFF").s().p("Al/GuQgIhMgKhQIAYgFQAfgIAegQQAbgOAYgUQAxgiAXgZQAZgcAVgjQAhg1AohWQAdg+AghKQAlhKAqgxQArg0AxgaQBKgnAzgFQAWgCASAEQAuAJAYA2QARAjgMAqQgEAOgHAQQgOAggkAvQgZAigpAkQhGBBg7A8IgUAYQgcAigcAtIgUAiIgGAKIgTAiIgSAeIgPAZQgLAQgLAOIgWAbIgPAQQgxAwg6AcQhHAhhXAAQgXAAgYgDg");
            this.shape_392.setTransform(140.7983,78.3569);
        
            this.shape_393 = new cjs.Shape();
            this.shape_393.graphics.f().s("#657D96").ss(4,1,1).p("AmREPIAagEQAfgHAfgPQAcgOAYgTQAxgjAXgaQAZgcAUgjQAgg2AohWQAcg9AhhLQAlhKApgxQAsg0AxgaQBJgnA0gFQAWgCARAEQAuAKAXA3QAQAkgNArQgEAOgIAQQgPAgglAvQgaAhgpAlQhGBCg5A9QgLAMgJANQgbAigcAtQgKARgKARQgDAFgCAFQgKATgJAQQgJAQgJANQgHANgIANQgLAQgLAOQgLAOgLAMQgIAJgIAHQgwAwg8AbQhZAph0gNQgGhPgIhSg");
            this.shape_393.setTransform(140.7414,78.0891);
        
            this.shape_394 = new cjs.Shape();
            this.shape_394.graphics.f("#FFFFFF").s().p("AmDGwIgOihIAagEQAfgHAfgPQAcgOAYgTQAxgjAXgaQAZgcAUgjQAgg2AohWIA9iIQAlhKApgxQAsg0AxgaQBJgnA0gFQAWgCARAEQAuAKAXA3QAQAkgNArQgEAOgIAQQgPAgglAvQgaAhgpAlQhGBCg5A9IgUAZQgbAigcAtIgUAiIgFAKIgTAjIgSAdIgPAaQgLAQgLAOIgWAaIgQAQQgwAwg8AbQhEAfhUAAQgaAAgbgDg");
            this.shape_394.setTransform(140.7414,78.0891);
        
            this.shape_395 = new cjs.Shape();
            this.shape_395.graphics.f().s("#667D96").ss(4,1,1).p("AmQEMIAagEQAggGAggPQAdgNAZgTQAwgjAWgbQAZgcAUgkQAfg2AohVQAcg+AhhMQAkhJAqgxQArg0AxgaQBKgnAzgFQAWgCASAEQAtAKAXA6QAPAkgPArQgEAPgJAQQgRAhgmAuQgbAhgoAkQhHBEg3A+QgKAMgJANQgbAigbAuQgKARgKASQgDAFgCAFQgKASgJARQgJAPgHAOQgIANgIAMQgLAQgLAOQgLAOgLANQgIAIgIAIQgxAwg8AaQhaAnh0gNQgEhTgFhTg");
            this.shape_395.setTransform(140.6939,77.8542);
        
            this.shape_396 = new cjs.Shape();
            this.shape_396.graphics.f("#FFFFFF").s().p("AmHGyIgJimIAagEQAggGAggPQAdgNAZgTQAwgjAWgbQAZgcAUgkQAfg2AohVIA9iKQAkhJAqgxQArg0AxgaQBKgnAzgFQAWgCASAEQAtAKAXA6QAPAkgPArQgEAPgJAQQgRAhgmAuQgbAhgoAkQhHBEg3A+IgTAZQgbAigbAuIgUAjIgFAKIgTAjIgQAdIgQAZQgLAQgLAOIgWAbIgQAQQgxAwg8AaQhEAdhSAAQgbAAgdgDg");
            this.shape_396.setTransform(140.6939,77.8542);
        
            this.shape_397 = new cjs.Shape();
            this.shape_397.graphics.f().s("#667D96").ss(4,1,1).p("AmQEJIAbgCQAhgGAhgOQAdgNAagTQAwgkAWgbQAYgcAUgkQAfg2AohWQAbg+AhhMQAkhJApgyQAsg0AxgZQBKgnAygFQAWgCASAEQAtALAWA7QAPAlgQAsQgGAPgJAQQgSAhgnAtQgcAhgoAlQhHBEg1BAQgKANgJAMQgaAjgbAvQgKAQgKASQgCAFgDAFQgJATgJAQQgJAQgHAOQgJANgIAMQgKAQgLAOQgLAOgLANQgIAIgIAHQgyAwg8AZQhbAmh0gOQgChVgDhWg");
            this.shape_397.setTransform(140.6447,77.5919);
        
            this.shape_398 = new cjs.Shape();
            this.shape_398.graphics.f("#FFFFFF").s().p("AmLG0IgFirIAbgCQAhgGAhgOQAdgNAagTQAwgkAWgbQAYgcAUgkQAfg2AohWIA8iKQAkhJApgyQAsg0AxgZQBKgnAygFQAWgCASAEQAtALAWA7QAPAlgQAsQgGAPgJAQQgSAhgnAtQgcAhgoAlQhHBEg1BAIgTAZQgaAjgbAvIgUAiIgFAKIgSAjIgQAeIgRAZQgKAQgLAOIgWAbIgQAPQgyAwg8AZQhCAchPAAQgeAAgggEg");
            this.shape_398.setTransform(140.6447,77.5919);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_142},{t:this.shape_141}]}).to({state:[{t:this.shape_144},{t:this.shape_143}]},1).to({state:[{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_148},{t:this.shape_147}]},1).to({state:[{t:this.shape_150},{t:this.shape_149}]},1).to({state:[{t:this.shape_152},{t:this.shape_151}]},1).to({state:[{t:this.shape_154},{t:this.shape_153}]},1).to({state:[{t:this.shape_156},{t:this.shape_155}]},1).to({state:[{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_160},{t:this.shape_159}]},1).to({state:[{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_164},{t:this.shape_163}]},1).to({state:[{t:this.shape_166},{t:this.shape_165}]},1).to({state:[{t:this.shape_168},{t:this.shape_167}]},1).to({state:[{t:this.shape_170},{t:this.shape_169}]},1).to({state:[{t:this.shape_172},{t:this.shape_171}]},1).to({state:[{t:this.shape_174},{t:this.shape_173}]},1).to({state:[{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_178},{t:this.shape_177}]},1).to({state:[{t:this.shape_180},{t:this.shape_179}]},1).to({state:[{t:this.shape_182},{t:this.shape_181}]},1).to({state:[{t:this.shape_184},{t:this.shape_183}]},1).to({state:[{t:this.shape_186},{t:this.shape_185}]},1).to({state:[{t:this.shape_188},{t:this.shape_187}]},1).to({state:[{t:this.shape_190},{t:this.shape_189}]},1).to({state:[{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_194},{t:this.shape_193}]},1).to({state:[{t:this.shape_196},{t:this.shape_195}]},1).to({state:[{t:this.shape_198},{t:this.shape_197}]},1).to({state:[{t:this.shape_200},{t:this.shape_199}]},1).to({state:[{t:this.shape_202},{t:this.shape_201}]},1).to({state:[{t:this.shape_204},{t:this.shape_203}]},1).to({state:[{t:this.shape_206},{t:this.shape_205}]},1).to({state:[{t:this.shape_208},{t:this.shape_207}]},1).to({state:[{t:this.shape_210},{t:this.shape_209}]},1).to({state:[{t:this.shape_212},{t:this.shape_211}]},1).to({state:[{t:this.shape_214},{t:this.shape_213}]},1).to({state:[{t:this.shape_216},{t:this.shape_215}]},1).to({state:[{t:this.shape_218},{t:this.shape_217}]},1).to({state:[{t:this.shape_220},{t:this.shape_219}]},1).to({state:[{t:this.shape_222},{t:this.shape_221}]},1).to({state:[{t:this.shape_224},{t:this.shape_223}]},1).to({state:[{t:this.shape_226},{t:this.shape_225}]},1).to({state:[{t:this.shape_228},{t:this.shape_227}]},1).to({state:[{t:this.shape_230},{t:this.shape_229}]},1).to({state:[{t:this.shape_232},{t:this.shape_231}]},1).to({state:[{t:this.shape_234},{t:this.shape_233}]},1).to({state:[{t:this.shape_236},{t:this.shape_235}]},1).to({state:[{t:this.shape_238},{t:this.shape_237}]},1).to({state:[{t:this.shape_240},{t:this.shape_239}]},1).to({state:[{t:this.shape_242},{t:this.shape_241}]},1).to({state:[{t:this.shape_244},{t:this.shape_243}]},1).to({state:[{t:this.shape_246},{t:this.shape_245}]},1).to({state:[{t:this.shape_248},{t:this.shape_247}]},1).to({state:[{t:this.shape_250},{t:this.shape_249}]},1).to({state:[{t:this.shape_252},{t:this.shape_251}]},1).to({state:[{t:this.shape_254},{t:this.shape_253}]},1).to({state:[{t:this.shape_256},{t:this.shape_255}]},1).to({state:[{t:this.shape_258},{t:this.shape_257}]},1).to({state:[{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_262},{t:this.shape_261}]},1).to({state:[{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_266},{t:this.shape_265}]},1).to({state:[{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_270},{t:this.shape_269}]},1).to({state:[{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_274},{t:this.shape_273}]},1).to({state:[{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_278},{t:this.shape_277}]},1).to({state:[{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_282},{t:this.shape_281}]},1).to({state:[{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_286},{t:this.shape_285}]},1).to({state:[{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_290},{t:this.shape_289}]},1).to({state:[{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_294},{t:this.shape_293}]},1).to({state:[{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_298},{t:this.shape_297}]},1).to({state:[{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_302},{t:this.shape_301}]},1).to({state:[{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_306},{t:this.shape_305}]},1).to({state:[{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_310},{t:this.shape_309}]},1).to({state:[{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_314},{t:this.shape_313}]},1).to({state:[{t:this.shape_316},{t:this.shape_315}]},1).to({state:[{t:this.shape_318},{t:this.shape_317}]},1).to({state:[{t:this.shape_320},{t:this.shape_319}]},1).to({state:[{t:this.shape_322},{t:this.shape_321}]},1).to({state:[{t:this.shape_324},{t:this.shape_323}]},1).to({state:[{t:this.shape_326},{t:this.shape_325}]},1).to({state:[{t:this.shape_328},{t:this.shape_327}]},1).to({state:[{t:this.shape_330},{t:this.shape_329}]},1).to({state:[{t:this.shape_332},{t:this.shape_331}]},1).to({state:[{t:this.shape_334},{t:this.shape_333}]},1).to({state:[{t:this.shape_336},{t:this.shape_335}]},1).to({state:[{t:this.shape_338},{t:this.shape_337}]},1).to({state:[{t:this.shape_340},{t:this.shape_339}]},1).to({state:[{t:this.shape_342},{t:this.shape_341}]},1).to({state:[{t:this.shape_344},{t:this.shape_343}]},1).to({state:[{t:this.shape_346},{t:this.shape_345}]},1).to({state:[{t:this.shape_348},{t:this.shape_347}]},1).to({state:[{t:this.shape_350},{t:this.shape_349}]},1).to({state:[{t:this.shape_352},{t:this.shape_351}]},1).to({state:[{t:this.shape_354},{t:this.shape_353}]},1).to({state:[{t:this.shape_356},{t:this.shape_355}]},1).to({state:[{t:this.shape_358},{t:this.shape_357}]},1).to({state:[{t:this.shape_360},{t:this.shape_359}]},1).to({state:[{t:this.shape_362},{t:this.shape_361}]},1).to({state:[{t:this.shape_364},{t:this.shape_363}]},1).to({state:[{t:this.shape_366},{t:this.shape_365}]},1).to({state:[{t:this.shape_368},{t:this.shape_367}]},1).to({state:[{t:this.shape_370},{t:this.shape_369}]},1).to({state:[{t:this.shape_372},{t:this.shape_371}]},1).to({state:[{t:this.shape_374},{t:this.shape_373}]},1).to({state:[{t:this.shape_376},{t:this.shape_375}]},1).to({state:[{t:this.shape_378},{t:this.shape_377}]},1).to({state:[{t:this.shape_380},{t:this.shape_379}]},1).to({state:[{t:this.shape_382},{t:this.shape_381}]},1).to({state:[{t:this.shape_384},{t:this.shape_383}]},1).to({state:[{t:this.shape_386},{t:this.shape_385}]},1).to({state:[{t:this.shape_388},{t:this.shape_387}]},1).to({state:[{t:this.shape_390},{t:this.shape_389}]},1).to({state:[{t:this.shape_392},{t:this.shape_391}]},1).to({state:[{t:this.shape_394},{t:this.shape_393}]},1).to({state:[{t:this.shape_396},{t:this.shape_395}]},1).to({state:[{t:this.shape_398},{t:this.shape_397}]},1).to({state:[{t:this.shape_142},{t:this.shape_141}]},1).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-50.1,-112.9,251,275.3);
        
        
        // stage content:
        (lib.cat3 = function(mode,startPosition,loop,reversed) {
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
            this.instance.setTransform(200,439,0.6543,0.6543,0,0,0,54.6,148.2);
        
            this.timeline.addTween(cjs.Tween.get(this.instance).wait(130));
        
            // 影子
            this.instance_1 = new lib.补间6("synched",0);
            this.instance_1.setTransform(200,445.4);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},129).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new lib.AnMovieClip();
        p.nominalBounds = new cjs.Rectangle(334.9,519.6,-51.099999999999966,-67.70000000000005);
        // library properties:
        lib.properties = {
            id: 'AA504AE6CDFB074B8B319F65E468829A',
            width: 400,
            height: 500,
            fps: 30,
            color: "#003399",
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
