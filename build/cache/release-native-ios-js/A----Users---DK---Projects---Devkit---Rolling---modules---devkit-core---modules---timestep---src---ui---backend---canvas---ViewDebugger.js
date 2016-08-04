d42111f80807587413cff9cc4ee1602f
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
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_canvas_ViewDebugger=__class__;
exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_canvas_ViewDebugger(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(a,b){this._target=a;this._opts=b=merge(b,{trackClicks:!1,outline:!1,flash:!1});this.outline=b.outline;this.trackClicks=b.trackClicks;this.flash=b.flash;this._nextFlash=this._flashState=0};this.preRender=function(a){this._time||(this._time=+new Date);var b=this._time;this._time=+new Date;this._dt=
this._time-b;b=this._target.style;this.outline&&(a.save(),a.globalAlpha=0.2,a.strokeStyle="black",a.lineWidth=1,a.strokeRect(0,0,b.width,b.height),a.restore())};this.postRender=function(a){var b=this._target;if(this.trackClicks)for(var c=b._clicks.length-1;0<=c;--c){var d=b._clicks[c];a.setFillStyle("rgba(0, 0, 0, "+d.o+")");d.o-=0.4*this._dt/1E3;0<d.o?(a.circle(d.x,d.y,15),a.fill()):b._clicks.splice(c,1)}if(this.flash){switch(this._flashState){case 0:a.setFillStyle("rgba(0, 0, 0, 0.5)");break;case 1:a.setFillStyle("rgba(0, 0, 0, 0)");
break;case 2:a.setFillStyle("rgba(255, 255, 255, 0.5)");break;case 3:a.setFillStyle("rgba(0, 0, 0, 0)")}c=+new Date;c>this._nextFlash&&(this._flashState=(this._flashState+1)%4,this._nextFlash=c+300);a.fillRect(0,0,b.style.width,b.style.height)}}});
