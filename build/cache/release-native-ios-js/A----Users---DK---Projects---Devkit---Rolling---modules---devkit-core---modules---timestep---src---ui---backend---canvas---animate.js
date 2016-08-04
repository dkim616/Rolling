4c19cde256afd4b34e3b18cee46e29b5
/*

 This file is part of the Game Closure SDK.

 The Game Closure SDK is free software: you can redistribute it and/or modify
 it under the terms of the Mozilla Public License v. 2.0 as published by Mozilla.

 The Game Closure SDK is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 Mozilla Public License v. 2.0 for more details.

 You should have received a copy of the Mozilla Public License v. 2.0
 along with the Game Closure SDK.  If not, see <http://mozilla.org/MPL/2.0/>.
*/
jsio("import event.Emitter as Emitter");jsio("import animate.transitions as transitions");jsio("import timer");jsio("import ObjectPool");var engine=null,groups={},DEFAULT_GROUP_ID="__default_group";
exports=function(a,b){null===engine&&(jsio("import ui.Engine as Engine"),jsio("import ui.View as View"),jsio("import device"),engine=Engine.get());if(device.useDOM&&a instanceof View&&!b)return a.getAnimation();b=b||DEFAULT_GROUP_ID;!groups[b]&&(groups[b]=new Group(b));var c=a.__anims||(a.__anims={}),d=c[b];d||(d=a instanceof View?new ViewAnimator(a):new Animator(a),d.groupID=b,c[b]=d);return d};exports.getSubjectAnimations=function(a){var a=a.__anims||{},b=[],c;for(c in a)b.push(a[c]);return b};
exports.clearSubjectAnimations=function(a){for(var a=this.getSubjectAnimations(a),b=0;b<a.length;b++)a[b].clear()};exports.commitSubjectAnimations=function(a){for(var a=this.getSubjectAnimations(a),b=0;b<a.length;b++)a[b].commit()};exports.pauseSubjectAnimations=function(a){for(var a=this.getSubjectAnimations(a),b=0;b<a.length;b++)a[b].pause()};exports.resumeSubjectAnimations=function(a){for(var a=this.getSubjectAnimations(a),b=0;b<a.length;b++)a[b].resume()};exports.clearAllAnimations=function(){for(var a in groups)groups[a].clear()};
exports.commitAllAnimations=function(){for(var a in groups)groups[a].commit()};exports.pauseAllAnimations=function(){for(var a in groups)groups[a].pause()};exports.resumeAllAnimations=function(){for(var a in groups)groups[a].resume()};exports.getGroup=function(a){return groups[a||DEFAULT_GROUP_ID]};
var Group=__class__,Group=Group(function(){return this.init&&this.init.apply(this,arguments)},Emitter,function(){this.init=function(a){this.groupID=a+"";this.anims=[]};this.add=function(a){-1===this.anims.indexOf(a)&&this.anims.push(a)};this.remove=function(a){a=this.anims.indexOf(a);-1!==a&&(this.anims.splice(a,1),0===this.anims.length&&this.publish("Finish"))};this.isActive=function(){return 0<this.anims.length};this.clear=function(){for(var a=this.anims,b=a.length-1;0<=b;b--)a[b].clear();return this};
this.commit=function(){for(var a=this.anims,b=a.length-1;0<=b;b--)a[b].commit();return this};this.pause=function(){for(var a=this.anims,b=a.length-1;0<=b;b--)a[b].pause();return this};this.resume=function(){for(var a=this.anims,b=a.length-1;0<=b;b--)a[b].resume();return this}}),TRANSITIONS=[transitions.easeInOut,transitions.linear,transitions.easeIn,transitions.easeOut,transitions.easeInOut,transitions.easeInQuad,transitions.easeOutQuad,transitions.easeInOutQuad,transitions.easeInCubic,transitions.easeOutCubic,
transitions.easeInOutCubic,transitions.easeInQuart,transitions.easeOutQuart,transitions.easeInOutQuart,transitions.easeInQuint,transitions.easeOutQuint,transitions.easeInOutQuint,transitions.easeInSine,transitions.easeOutSine,transitions.easeInOutSine,transitions.easeInExpo,transitions.easeOutExpo,transitions.easeInOutExpo,transitions.easeInCirc,transitions.easeOutCirc,transitions.easeInOutCirc,transitions.easeInElastic,transitions.easeOutElastic,transitions.easeInOutElastic,transitions.easeInBack,
transitions.easeOutBack,transitions.easeInOutBack,transitions.easeInBounce,transitions.easeOutBounce,transitions.easeInOutBounce];exports.linear=1;exports.easeIn=2;exports.easeOut=3;exports.easeInOut=4;exports.easeInQuad=5;exports.easeOutQuad=6;exports.easeInOutQuad=7;exports.easeInCubic=8;exports.easeOutCubic=9;exports.easeInOutCubic=10;exports.easeInQuart=11;exports.easeOutQuart=12;exports.easeInOutQuart=13;exports.easeInQuint=14;exports.easeOutQuint=15;exports.easeInOutQuint=16;
exports.easeInSine=17;exports.easeOutSine=18;exports.easeInOutSine=19;exports.easeInExpo=20;exports.easeOutExpo=21;exports.easeInOutExpo=22;exports.easeInCirc=23;exports.easeOutCirc=24;exports.easeInOutCirc=25;exports.easeInElastic=26;exports.easeOutElastic=27;exports.easeInOutElastic=28;exports.easeInBack=29;exports.easeOutBack=30;exports.easeInOutBack=31;exports.easeInBounce=32;exports.easeOutBounce=33;exports.easeInOutBounce=34;
function getTransition(a){return"function"==typeof a?a:TRANSITIONS[a|0]}
var Frame=__class__,Frame=Frame(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(){this.target=this.subject=null;this.duration=0;this.pool=this._baseStyle=this.base=this.transition=null;this._poolIndex=0;this._obtainedFromPool=!1};this.reset=function(a,b,c,d){this.subject=a;this.target=b;this.duration=0===c?0:c||500;this.transition=getTransition(d);this._baseStyle=this.base=null;if(0>this.duration)throw Error("Animations cannot have negative durations!");
};this.recycle=function(){this.pool.release(this)};this.exec=function(){};this.debugLog=function(){}}),CallbackFrame=__class__,CallbackFrame=CallbackFrame(function(){return this.init&&this.init.apply(this,arguments)},Frame,function(){var a=Frame.prototype;this.reset=function(b,c,d,e){a.reset.call(this,b,c,d,e);this.duration=d||0};this.exec=function(a,c,d){this.target.call(this.subject,a,c,d)}}),ObjectFrame=__class__,ObjectFrame=ObjectFrame(function(){return this.init&&this.init.apply(this,arguments)},
Frame,function(){this.exec=function(a,b,c){if(!this.base){this.base={};for(var d in this.target)this.base[d]=this.subject[d]}for(d in this.target)b=this.base[d],this.subject[d]=b+a*(this.target[d]-b);c&&this.debugLog(a)};this.debugLog=function(a){var b={},c;for(c in this.target)b[c]=this.subject[c]+" -> "+this.target[c];logger.LOG&&console.log("LOG",".backend.canvas.animate",this.duration,a,JSON.stringify(b))}}),ViewStyleFrame=__class__,ViewStyleFrame=ViewStyleFrame(function(){return this.init&&this.init.apply(this,
arguments)},Frame,function(){this.resolveDeltas=function(a){var b=this.target,c;for(c in b){var d=c.substring(1);"d"==c.charAt(0)&&(!(c in a)&&d in a)&&(b[d]=b[c]+a[d],delete b[c])}};this.exec=function(a,b,c){var b=this._baseStyle,d=this.target,e=this.subject.style;b||(b=this._baseStyle=e.copy(),this.resolveDeltas(b));for(var f in d)if(f in b){var g=b[f];e[f]=g+a*(d[f]-g)}c&&this.debugLog(a)};this.debugLog=function(a){var b={},c=this.target,d=this.subject.style,e;for(e in c)b[e]=d[e]+" -> "+c[e];
logger.LOG&&console.log("LOG",".backend.canvas.animate",timer.now,this.duration,a,JSON.stringify(b))}});exports.Animator=__class__;
var Animator=exports.Animator=exports.Animator(function(){return this.init&&this.init.apply(this,arguments)},Emitter,function(){this.init=function(a){this.subject=a;this._queue=[];this._elapsed=0;this._debug=this._isScheduled=this._isPaused=!1};this.clear=function(){for(var a=this._queue,b=a.length,c=0;c<b;c++)a[c].recycle();this._elapsed=a.length=0;this._unschedule();this._removeFromGroup();return this};this.pause=function(){this._isPaused||(this._isPaused=!0,this._unschedule());return this};this.resume=
function(){this._isPaused&&(this._isPaused=!1,this._schedule());return this};this._schedule=function(){this._isScheduled||(this._isScheduled=!0,engine.subscribe("Tick",this,"onTick"))};this._unschedule=function(){this._isScheduled&&(this._isScheduled=!1,engine.unsubscribe("Tick",this,"onTick"))};this.isPaused=function(){return this._isPaused};this.hasFrames=function(){return!!this._queue[0]};this.wait=function(a){return this.then(void 0,a)};this.buildFrame=function(a,b,c){var d,e=this.subject;d=typeof a;
"function"===d?(d=callbackFramePool.obtain(),d.pool=callbackFramePool):"object"===d?(d=objectFramePool.obtain(),d.pool=objectFramePool):(d=framePool.obtain(),d.pool=framePool);d.reset(e,a,b,c);return d};this.now=function(a,b,c){this.clear();return this.then(a,b,c)};this.then=function(a,b,c){this._queue.length||(this._elapsed=0);this._queue.push(this.buildFrame(a,b,c));this._schedule();this._addToGroup();return this};this.debug=function(){this._debug=!0;return this};this.commit=function(){this.resume();
for(var a=this._elapsed=0,b;b=this._queue[a];++a)this._elapsed+=b.duration;this.next();return this};this.onTick=function(a){this._isScheduled&&(this._elapsed+=a,this.next())};this.next=function(){for(var a=this._queue[0];a;){var b=a.duration,c=this._elapsed>=b,d=c?1:this._elapsed/b,e=a.transition(d);c&&(this._elapsed-=b);a.exec(e,d,this._debug);c&&a===this._queue[0]&&this._queue.shift().recycle();if(!c||this._isPaused)return;a=this._queue[0]}this._unschedule();this._removeFromGroup()};this._addToGroup=
function(){var a=groups[this.groupID];a&&a.add(this)};this._removeFromGroup=function(){var a=groups[this.groupID];a&&a.remove(this)}}),ViewAnimator=__class__,ViewAnimator=ViewAnimator(function(){return this.init&&this.init.apply(this,arguments)},Animator,function(){var a=Animator.prototype;this.buildFrame=function(b,c,d){if("object"===typeof b){var e=viewStyleFramePool.obtain();e.pool=viewStyleFramePool;e.reset(this.subject,b,c,d);return e}return a.buildFrame.call(this,b,c,d)}});
exports.getViewAnimator=function(){return ViewAnimator};exports.setViewAnimator=function(a){ViewAnimator=a};var framePool=new ObjectPool({ctor:Frame}),objectFramePool=new ObjectPool({ctor:ObjectFrame}),callbackFramePool=new ObjectPool({ctor:CallbackFrame}),viewStyleFramePool=new ObjectPool({ctor:ViewStyleFrame});exports.initializeFrameCount=function(a){for(var a=a-framePool.getTotalCount(),b=0;b<a;b++)framePool.create()};
exports.initializeObjectFrameCount=function(a){for(var a=a-objectFramePool.getTotalCount(),b=0;b<a;b++)objectFramePool.create()};exports.initializeCallbackFrameCount=function(a){for(var a=a-callbackFramePool.getTotalCount(),b=0;b<a;b++)callbackFramePool.create()};exports.initializeViewStyleFrameCount=function(a){for(var a=a-viewStyleFramePool.getTotalCount(),b=0;b<a;b++)viewStyleFramePool.create()};
