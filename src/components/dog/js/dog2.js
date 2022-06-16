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
            this.shape.graphics.f().s("#AF6717").ss(3,1,1).p("AgNg+QAugSAjANQAhANACAgQACAbgOAKQgLAIgbABQgGAJgLAJQgXARgdgFQgFAJgLAFQgWAMgYgNQgUgLgEgYQgDgTAHgUQAJgbAbgNQAGgDArgMg");
            this.shape.setTransform(0.0949,0.7459,1,1,29.9993);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FCFCEF").s().p("AhOBDQgUgLgEgYQgDgTAHgUQAJgbAbgNQAGgDArgMQAugSAjANQAhANACAgQACAbgOAKQgLAIgbABQgGAJgLAJQgXARgdgFQgFAJgLAFQgKAGgLAAQgMAAgNgHg");
            this.shape_1.setTransform(0.0949,0.7459,1,1,29.9993);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-12.2,-8.1,24.5,16.2);
        
        
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
            this.shape.graphics.f().s("#AF6717").ss(3,1,1).p("AgNg+QAugSAjANQAhANACAgQACAbgOAKQgLAIgbABQgGAJgLAJQgXARgdgFQgFAJgLAFQgWAMgYgNQgUgLgEgYQgDgTAHgUQAJgbAbgNQAGgDArgMg");
            this.shape.setTransform(0.0949,0.7459,1,1,29.9993);
        
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#FCFCEF").s().p("AhOBDQgUgLgEgYQgDgTAHgUQAJgbAbgNQAGgDArgMQAugSAjANQAhANACAgQACAbgOAKQgLAIgbABQgGAJgLAJQgXARgdgFQgFAJgLAFQgKAGgLAAQgMAAgNgHg");
            this.shape_1.setTransform(0.0949,0.7459,1,1,29.9993);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-12.2,-8.1,24.5,16.2);
        
        
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
        
        
        (lib.元件36 = function(mode,startPosition,loop,reversed) {
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
        
        
        (lib.元件35 = function(mode,startPosition,loop,reversed) {
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
        
        
        (lib.元件34 = function(mode,startPosition,loop,reversed) {
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
        
        
        (lib.元件33 = function(mode,startPosition,loop,reversed) {
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
        
        
        (lib.元件32 = function(mode,startPosition,loop,reversed) {
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
        
        
        (lib.元件31 = function(mode,startPosition,loop,reversed) {
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
        
        
        (lib.元件30 = function(mode,startPosition,loop,reversed) {
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
        
        
        (lib.元件29 = function(mode,startPosition,loop,reversed) {
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
        
        
        (lib.元件28 = function(mode,startPosition,loop,reversed) {
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
        
        
        (lib.元件27 = function(mode,startPosition,loop,reversed) {
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
            this.shape.graphics.f("#6D3B0A").s().p("AC5AcQgMAAgIgJQgIgHAAgMQAAgKAIgJQAIgIAMAAIBUAAQAMAAAIAIQAIAJAAAKQAAAMgIAHQgIAJgMAAgAkMAcQgMAAgIgJQgIgHAAgMQAAgKAIgJQAIgIAMAAIBUAAQAMAAAIAIQAIAJAAAKQAAAMgIAHQgIAJgMAAg");
            this.shape.setTransform(-0.525,-34.95);
        
            this.timeline.addTween(cjs.Tween.get(this.shape).wait(130));
        
            // 眼睛
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f("#6D3B0A").s().p("ACtA1QgWgVAAggQAAgfAWgWQAXgWAfAAQAgAAAWAWQAWAWAAAfQAAAggWAVQgWAXggAAQgfAAgXgXgAkYA1QgWgVAAggQAAgfAWgWQAWgWAgAAQAfAAAWAWQAXAWAAAfQAAAggXAVQgWAXgfAAQggAAgWgXg");
            this.shape_1.setTransform(-0.575,-35.75);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},25).wait(3).to({_off:false},0).to({_off:true},9).wait(3).to({_off:false},0).to({_off:true},61).wait(3).to({_off:false},0).wait(26));
        
            // 奶嘴
            this.instance = new lib.补间1("synched",0);
            this.instance.setTransform(-0.35,7.7);
        
            this.instance_1 = new lib.补间8("synched",0);
            this.instance_1.setTransform(-0.35,7.85,1.1183,1.099,-3.7313,0,0,-0.1,0.1);
            this.instance_1._off = true;
        
            this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:-0.1,regY:0.1,scaleX:1.1183,scaleY:1.099,rotation:-3.7313,y:7.85},20).wait(110));
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},20).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,y:7.7},21).to({scaleX:1.0673,scaleY:1.0638},22).to({scaleX:1,scaleY:1},24).to({regX:0.1,regY:0.2,scaleX:1.1043,scaleY:1.0288,rotation:4.4981,x:-0.2,y:7.9},21).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:0,x:-0.35,y:7.7},21).wait(1));
        
            // 脸边框
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f().s("#AF6717").ss(4,1,1).p("AgBqiQEXAAC4CdQDZC8BKGUIAnA6QApBFAKA1QgogKgygFQAQAVAOAeQAbA8gMAsQgKgNgQgLQgfgWgcAGQAHAjABApQABBTgiAfQgjgyAAgUQgaAzhdAzQi5BllLgDQlKgDjGhjQhjgxghgxIgIAbQgNAegTANQgHgXgGggQgNhBAGgyIgbAAQghACgjANQgCgVAFgdQAKg4AlgiIgegBQglABgcAKQAFgaAPglQAchIAvgyQAEgvAShGQAgiOBAh1QDKl4GqADg");
            this.shape_2.setTransform(-1.2,-30.4469);
        
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#F9FCEC").s().p("ADyAsQgfgIgRgSQgTgSAGgRQAEgRAZgHQAYgHAeAIQAeAIASASQASASgEARQgGASgXAGQgMADgNAAQgOAAgQgEgAknAqQgZgGgEgSQgFgRARgSQASgSAegIQAfgIAYAHQAZAHAFARQAEASgSARQgSASgdAIQgRAEgOAAQgNAAgLgDg");
            this.shape_3.setTransform(-0.25,-50.5574);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(130));
        
            // 鼻子
            this.shape_4 = new cjs.Shape();
            this.shape_4.graphics.f("#6D3B0A").s().p("AgaBUQgiAAgZgYQgYgZAAgiIAAgBQAAgiAYgYQAZgZAiAAIA1AAQAiAAAYAZQAZAYAAAiIAAABQAAAigZAZQgYAYgiAAgAASAxIgBAFIAKAAQAWAAAQgQQAPgPAAgWIAAgBQAAgWgPgPQgQgQgWAAIg1AAQgWAAgPAQQgQAPAAAWIAAABQAAAWAQAPQAPAQAWAAIAMAAQgBgDAAgEQgBgfgVgMIAAAAQgKgEgLAAQgGAAgEgDQgFgEgBgGQAAgHAEgEQAEgFAGAAQASgCATAKIAAAAQAQAIAIANQAJgMAPgHIAAAAQATgKASABQAGABAEAFQAEAEgBAHQAAAGgFAEQgEADgHgBQgKAAgKAFIAAAAQgVAMAAAfg");
            this.shape_4.setTransform(-0.25,-12.45);
        
            this.shape_5 = new cjs.Shape();
            this.shape_5.graphics.f("#AF6717").s().p("AEwCOIgQghIg5hXIgCgBIgCgDIgBgCIgBgBIAAAAIAAAAIgeggQgagbgagRIgIgFIgBgBIgGgDIgCgCIgVgLIgFgBIgEgCIgegKIgBAAIgBAAIgZgEIgCgBIgCAAIgFAAIgDAAIgBgBIgJAAIgDAAIgIAAIgBAAIgGAAIgXACIgtAKIgMAFIgFACIgIADIgYAMIgIAEIgEADQgZAPgeAaIgOAOIgDADIgQAQIgCABIAAABIgBABIgQATIgFAGIgEAFIgiAvIgWAlIgBACIgBABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIABgDIAQguIArhNIAFgGIAAAAIAAAAIABAAIAAgBIABgBIAggoQAcgeAdgTIAEgDIACgBIAYgPIAhgPIAKgDIApgKIAggEIAIAAIABAAIAIAAIADAAIAVABIACABIACAAIACAAIAFABIAQADIAuAPIASAJQAPAIAUAOQAdAWAZAfIAbAlIABAAIAAAAIAAABIAMASIAaA0IASA1IAEASQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAIgBAAIAAgBg");
            this.shape_5.setTransform(-0.95,-16.63);
        
            this.shape_6 = new cjs.Shape();
            this.shape_6.graphics.f("#7B581E").s().p("AAbA2IgKAAIABgFQAAgfAVgMIAAAAQAKgFAKAAQAHABAEgDQAFgEAAgGQABgHgEgEQgEgFgGgBQgSgBgTAKIAAAAQgPAHgJAMQgIgNgQgIIAAAAQgTgKgRACQgHAAgEAFQgEAEAAAHQABAGAFAEQAEADAGAAQALAAAKAEIAAAAQAVAMABAfQAAAEABADIgMAAQgWAAgPgQQgQgPAAgWIAAgBQAAgWAQgPQAPgQAWAAIA1AAQAWAAAQAQQAPAPAAAWIAAABQAAAWgPAPQgQAQgWAAIAAAAg");
            this.shape_6.setTransform(-0.25,-12.45);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(130));
        
            // 脸颊
            this.shape_7 = new cjs.Shape();
            this.shape_7.graphics.f("#AF6717").s().p("AHDAxQgOgEgGgQQgFgLAAgSQgBgJADgGQAEgFAGgBQAHgBAFAEQADADADAFIANAZQAEAJAAAJQgBAKgIAEQgDACgFAAIgFAAgAnTAqQgGgDgCgHQgDgHACgHIAGgMIAEgIQACgFADgDQAFgFAGABQAHACAEAFQADAGgBAHIgDANQgBAMgCADQgDAGgHADIgGAAQgEAAgEgBgAIDAjQgIgBgIgNIgGgKQgFgKgBgEQgCgJAFgGQAGgIAJADQAGABAEAHIAFAIIAHAHQAKAKgDAMQgCAGgFAEQgEADgFAAIgDAAgAoPAgQgFgCgCgFQgDgFABgGQAAgEAEgHIAGgJIAFgOQAFgHAHAAQAIgBAFAHQAEAGgEAPIgGAQQgBAHgEAFQgEAEgFABIgDAAQgEAAgEgBgAI3ATIgEgJQgFgIgGgFQgHgHgBgDQgDgGAEgHQADgGAGgBQAIgCAPALIAPAKQAJAGABADQADAFgCAJQgCAJgDAEQgEAFgIAAIgCAAQgKAAgHgIgApXALQgGgIAEgJQACgHAIgIQAGgFACgEQAEgIACgDQAFgIAJABQAIAAAEAIQAEAIgFALQgEAIgJANQgEALgDACQgFAFgJAAQgJgBgEgGg");
            this.shape_7.setTransform(-0.4356,-2.7059);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(130));
        
            // 眼眶
            this.shape_8 = new cjs.Shape();
            this.shape_8.graphics.f("#FEC07E").s().p("AGEGjQhQgJhKgzQgXgvgbgZQgOgNgkgXIgPgJQgigygRg5QghhyAhiRQAch6BthiQA2gxAwgZQAWgLBrBhQBrBhBFBcQAzA9AxCrQAYBWAOBKQAEAUhkBDQhjBCgqAIQg6AKgpAAIgagBgAoAGaQgqgIhjhCQhkhDAEgUQAOhKAYhWQAxirAzg9QBFhcBrhhQBrhhAWALQAwAZA2AxQBtBiAcB6QAhCRghByQgOAugZAqQgMAFgMAJQgQALgeAiIgSAVIgFAGIgdAhIgYAdQhBAphGAHIgaABQgpAAg6gKg");
            this.shape_8.setTransform(-0.625,-50.4124);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(130));
        
            // 底色_白
            this.shape_9 = new cjs.Shape();
            this.shape_9.graphics.f("#FCFCEF").s().p("AARKjQlJgDjGhjQhjgxgggxIgJAbQgMAegUANQgHgXgGggQgMhBAFgyIgbAAQghACgiANQgDgVAFgdQAKg4AlgiIgegBQgkABgcAKQAEgaAPglQAdhIAugyQAEgvARhGQAiiOA/h1QDKl4GqADQEXAAC3CdQDaC8BKGUIAnA6QApBFAKA1QgpgKgxgFQAQAVANAeQAcA8gMAsQgKgNgQgLQgggWgcAGQAIAjAAApQACBTgiAfQgjgyAAgUQgaAzhdAzQi0Bik+AAIgTAAg");
            this.shape_9.setTransform(-1.2,-30.4469);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(130));
        
            // 右耳
            this.instance_2 = new lib.元件31("synched",0);
            this.instance_2.setTransform(47.5,-93.9,1,1,0,0,0,47.5,-93.9);
        
            this.instance_3 = new lib.元件30("synched",0);
            this.instance_3.setTransform(48.05,-93.5,1,1,0.6767,0,0,47.4,-93.8);
            this.instance_3._off = true;
        
            this.instance_4 = new lib.元件29("synched",0);
            this.instance_4.setTransform(49.6,-92.1,1,1,2.7226,0,0,47.4,-93.8);
            this.instance_4._off = true;
        
            this.instance_5 = new lib.元件28("synched",0);
            this.instance_5.setTransform(42.8,-95.4,0.9951,0.964,-6.175,0,0,47.9,-93.4);
            this.instance_5._off = true;
        
            this.instance_6 = new lib.元件27("synched",0);
            this.instance_6.setTransform(47.5,-93.9,1,1,0,0,0,47.5,-93.9);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},38).to({state:[{t:this.instance_4}]},19).to({state:[{t:this.instance_5}]},23).to({state:[{t:this.instance_6}]},49).wait(1));
            this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,regX:47.4,regY:-93.8,rotation:0.6767,x:48.05,y:-93.5},38).wait(92));
            this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:false},38).to({_off:true,rotation:2.7226,x:49.6,y:-92.1},19).wait(73));
            this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(38).to({_off:false},19).to({_off:true,regX:47.9,regY:-93.4,scaleX:0.9951,scaleY:0.964,rotation:-6.175,x:42.8,y:-95.4},23).wait(50));
            this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(57).to({_off:false},23).to({_off:true,regX:47.5,regY:-93.9,scaleX:1,scaleY:1,rotation:0,x:47.5,y:-93.9},49).wait(1));
        
            // 左耳
            this.instance_7 = new lib.元件36("synched",0);
            this.instance_7.setTransform(-48,-94.2,1,1,0,0,0,-48,-94.2);
        
            this.instance_8 = new lib.元件35("synched",0);
            this.instance_8.setTransform(-47.65,-94.65,1,1,0.8061,0,0,-48.3,-94);
            this.instance_8._off = true;
        
            this.instance_9 = new lib.元件34("synched",0);
            this.instance_9.setTransform(-49.3,-92.2,1,1,-2.7042,0,0,-47.1,-93.9);
            this.instance_9._off = true;
        
            this.instance_10 = new lib.元件33("synched",0);
            this.instance_10.setTransform(-42,-96.85,0.994,0.965,8.4688,0,0,-49.1,-93.2);
            this.instance_10._off = true;
        
            this.instance_11 = new lib.元件32("synched",0);
            this.instance_11.setTransform(-48,-94.2,1,1,0,0,0,-48,-94.2);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},38).to({state:[{t:this.instance_9}]},19).to({state:[{t:this.instance_10}]},23).to({state:[{t:this.instance_11}]},49).wait(1));
            this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true,regX:-48.3,regY:-94,rotation:0.8061,x:-47.65,y:-94.65},38).wait(92));
            this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:false},38).to({_off:true,regX:-47.1,regY:-93.9,rotation:-2.7042,x:-49.3,y:-92.2},19).wait(73));
            this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(38).to({_off:false},19).to({_off:true,regX:-49.1,regY:-93.2,scaleX:0.994,scaleY:0.965,rotation:8.4688,x:-42,y:-96.85},23).wait(50));
            this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(57).to({_off:false},23).to({_off:true,regX:-48,regY:-94.2,scaleX:1,scaleY:1,rotation:0,x:-48,y:-94.2},49).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-87.6,-145.8,174.5,184.9);
        
        
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
            this.instance = new lib.补间13("synched",0);
            this.instance.setTransform(18.1,-49.25,1,1,0,0,180);
        
            this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:14.9992,skewY:194.9992,x:21.3,y:-47.2},12).to({startPosition:0},32).to({skewX:0,skewY:180,x:18.1,y:-49.25},11).to({startPosition:0},74).wait(1));
        
            // 爪子
            this.instance_1 = new lib.补间13("synched",0);
            this.instance_1.setTransform(91.35,-43.05);
        
            this.instance_2 = new lib.补间14("synched",0);
            this.instance_2.setTransform(91.35,-43.05);
            this.instance_2._off = true;
        
            this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},37).wait(93));
            this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},37).to({rotation:14.9992,x:93.6,y:-41.75},23).to({rotation:0,x:91.35,y:-43.05},19).to({startPosition:0},50).wait(1));
        
            // 图层_2
            this.shape = new cjs.Shape();
            this.shape.graphics.f().s("#AF6717").ss(3,1,1).p("Ap+gCIBthGIBzBGIBagoIB4BQIB9g8ICkgeIFBB9IBzhkIB2AZ");
            this.shape.setTransform(57.5,-43.7);
        
            this.timeline.addTween(cjs.Tween.get(this.shape).wait(130));
        
            // 图层_4
            this.shape_1 = new cjs.Shape();
            this.shape_1.graphics.f().s("#B36D47").ss(3,1,1).p("AJ/naQAMBSAABVQAAC6ghB5QgkCChcB6QhZB3iIA4Qh1AwiUAAQiTAAh1gwQiIg4hZh3Qhch6gkiCQghh5AAi6QAAhVAMhS");
            this.shape_1.setTransform(57.5,3.5);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(130));
        
            // 图层_6
            this.shape_2 = new cjs.Shape();
            this.shape_2.graphics.f("rgba(255,255,255,0.498)").s().p("AgTCpQgmhggEhaQgEhlAKhBQALhMAcACQAeADgCBUQgECHAJA0IAnChQAQBJgYAGIgEABQgcAAgjhZg");
            this.shape_2.setTransform(7.7519,-14.7768);
        
            this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(130));
        
            // 图层_5
            this.shape_3 = new cjs.Shape();
            this.shape_3.graphics.f("#D99660").s().p("Am5G4IgggOIAGAAQBzgCBRgXQDqhFDKlHQB6jDACj7IA2guIBwAZIATCmIAAADIgSDwQgHAjgIAfQgYBXgxBUQgYApgfApQhZB3iIA3Qh1AxiTgBQiTABh2gxg");
            this.shape_3.setTransform(75.2,2.4);
        
            this.shape_4 = new cjs.Shape();
            this.shape_4.graphics.f("#ECC8A8").s().p("AmNE9Qhch6gkiEQggh3AAi6QAAhVAMhSIBthGIBzBGIBagoIB9BUIB3hAIClgeIE/CCIA9g6QgCD6h6DDQjKFIjqBEQhRAYhzACQh2g4hRhrg");
            this.shape_4.setTransform(48.275,-2.975);
        
            this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},129).wait(1));
        
            // 头
            this.instance_3 = new lib.头部();
            this.instance_3.setTransform(60,-36.45,0.6503,0.6503,0,0,0,-1.1,37);
        
            this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regY:36.9,rotation:-5.973,y:-36.55},30).to({regY:37,rotation:0,y:-36.45},37).to({regX:-1,regY:36.9,rotation:6.9743,x:60.05,y:-36.55},36).to({regX:-1.1,regY:37,rotation:0,x:60,y:-36.45},26).wait(1));
        
            this._renderFirstFrame();
        
        }).prototype = p = new cjs.MovieClip();
        p.nominalBounds = new cjs.Rectangle(-9,-157.6,138.1,210.1);
        
        
        // stage content:
        (lib.dog2 = function(mode,startPosition,loop,reversed) {
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
        p.nominalBounds = new cjs.Rectangle(333.5,459.1,-64.60000000000002,-7.2000000000000455);
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
