882abe95ae6fa22539f25d184b021964
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
jsio("import math.geom.Point as Point");jsio("import event.input.dispatch as dispatch");
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_event_input_InputHandler=__class__,InputHandler=exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_event_input_InputHandler(function(){return this.init&&this.init.apply(this,arguments)},function(){this.overCount=this.dragCount=this.startCount=0;this.canHandleEvents=!0;this.blockEvents=!1;this.init=function(a,b){this.view=a;this.view.subscribe("InputStart",this,"onInputStart");this.update(b)};
this.update=function(a){"canHandleEvents"in a&&(this.canHandleEvents=a.canHandleEvents);"blockEvents"in a&&(this.blockEvents=a.blockEvents)};this.containsEvent=function(a,b){return!this.blockEvents&&(!this.view._superview||this.view.containsLocalPoint(b))};this.onEnter=function(a,b){var c=this.view,d=this._over||(this._over={});if(!(a in d)){d[a]=!0;this.overCount++;if(c.onInputOver)c.onInputOver(d,this.overCount,b);c.publish("InputOver",d,this.overCount,b)}};this.onLeave=function(a,b){var c=this.view,
d=this._over||(this._over={});if(a in d){delete d[a];--this.overCount;if(c.onInputOut)c.onInputOut(d,this.overCount,b);c.publish("InputOut",d,this.overCount,b)}};this.resetOver=function(){delete this._over;this.overCount=0};this.startDrag=function(a){var a=a||{},b=this.view,c=a.inputStartEvt||a.inputStartEvent||dispatch._evtHistory[dispatch.eventTypes.START],d=c.id,e=this._isDragging||(this._isDragging={});e[d]||(e[d]=!0,++this.dragCount,++this.startCount,d=c.root,b=new dispatch.InputEvent(c.id,"input:drag",
c.srcPt.x,c.srcPt.y,d,b),b.didDrag=!1,b.radius=a.radius*a.radius||0,d.subscribe("InputMoveCapture",this,"onDragStart",b),d.subscribe("InputSelectCapture",this,"onDragStop",b))};this.isDragging=function(){return this.dragCount&&dispatch._isDragging};this.onDragStart=function(a,b){var c=b.srcPt.x-a.srcPt.x,d=b.srcPt.y-a.srcPt.y;if(!(c*c+d*d<=a.radius)&&!a.didDrag){a.didDrag=!0;--this.startCount;c=this.view;0==this.startCount&&a.root.unsubscribe("InputMoveCapture",this,"onDragStart");a.currPt=a.srcPt;
a.localPt=c.localizePoint(new Point(a.currPt));if(c.onDragStart)c.onDragStart(a);c.publish("DragStart",a);a.root.subscribe("InputMoveCapture",this,"onDrag",a);this.onDrag(a,b)}};this.onDrag=function(a,b){if(!(a.id!=b.id||b.srcPt.x==a.currPt.x&&b.srcPt.y==a.currPt.y)){var c=this.view;a.prevPt=a.currPt;a.currPt=b.srcPt;a.prevLocalPt=a.localPt;a.localPt=c.localizePoint(new Point(a.currPt));var d=Point.subtract(a.localPt,a.prevLocalPt);dispatch._isDragging=!0;if(c.onDrag)c.onDrag(a,b,d);c.publish("Drag",
a,b,d)}};this.onDragStop=function(a,b){var c=a.id,d=this._isDragging||(this._isDragging={});if(d[c]&&a.id==b.id&&(delete d[c],--this.dragCount,this.dragCount||(a.root.unsubscribe("InputMoveCapture",this,"onDragStart"),a.root.unsubscribe("InputMoveCapture",this,"onDrag"),a.root.unsubscribe("InputSelectCapture",this,"onDragStop"),dispatch._isDragging=!1),a.didDrag)){c=this.view;b.cancel();if(c.onDragStop)c.onDragStop(a,b);c.publish("DragStop",a,b)}};this.onInputStart=function(a){0!==this.view.listeners("InputActivate").length&&
(this._isDown=!0,this.view.subscribe("InputSelect",this,"onInputSelect"),a.root.subscribeOnce("InputSelect",this,"onGlobalInputSelect"))};this.onInputSelect=function(a,b){this._isDown&&this.view.publish("InputActivate",a,b);this._isDown=!1;this.view.unsubscribe("InputSelect",this,"onInputSelect")};this.onGlobalInputSelect=function(){this._isDown&&this.view.unsubscribe("InputSelect",this,"onInputSelect");this._isDown=!1}});
