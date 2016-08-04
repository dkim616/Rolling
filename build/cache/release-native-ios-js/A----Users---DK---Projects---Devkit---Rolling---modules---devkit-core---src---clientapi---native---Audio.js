9e315b95662069f46274a016608df042
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
var lastbg,Users_DK_Projects_Devkit_Rolling_modules_devkit_core_src_clientapi_native_Audio=__class__,Audio=exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_src_clientapi_native_Audio(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(a){this._startedLoad=!1;this._src="";this.autoplay=!1;this.preload="auto";this._volume=1;this.loop=!1;this._et=this._startTime=0;this.readyState=4;a&&(this.src=a)};this._updateElapsed=function(){if(0<this._startTime){var a=
Date.now();this._et+=a-this._startTime;var b=this.durationMilliseconds;this.loop&&(!isNaN(b)&&this._et>b)&&(this._et%=b);this._startTime=a}};this.__defineSetter__("src",function(a){logger.LOG&&console.log("LOG",".Audio","audio source is ",a);this._src=a;setTimeout(bind(this,function(){(this.autoplay||"auto"==this.preload)&&!this.isBackgroundMusic&&this.load();this.autoplay&&this.play()}),0)});this.__defineGetter__("src",function(){return this._src});this.__defineSetter__("volume",function(a){this._volume=
a;(!this.isBackgroundMusic||this==lastbg)&&NATIVE.sound.setVolume(this._src,a)});this.__defineGetter__("currentTime",function(){this._updateElapsed();return this._et/1E3});this.__defineSetter__("currentTime",function(a){this._et=1E3*a;this._startTime=Date.now();this==lastbg&&NATIVE.sound.seekTo(this._src,a)});this.canPlayType=function(){return!0};this.load=function(a){if(!this.isBackgroundMusic){var b=NATIVE.sound.preloadSound(this._src);a&&(b.onload=bind(this,"_play"));this._startedLoad=!0}};this._play=
function(){NATIVE.sound.playSound(this._src,this._volume,"loop"===this.loop||!0===this.loop);this._startTime=Date.now()};this.play=function(){this.paused=!1;this.isBackgroundMusic?(lastbg=this,this._startedLoad=!0,this._startTime=Date.now(),NATIVE.sound.playBackgroundMusic(this._src,this._volume,this.loop)):this._startedLoad?this._play():this.load(!0)};this.pause=function(){this.paused||(this.paused=!0,this._startedLoad&&((!this.isBackgroundMusic||this==lastbg)&&NATIVE.sound.pauseSound(this._src),
this._updateElapsed(),this._startTime=0))};this.stop=function(){this._startedLoad&&(!this.isBackgroundMusic||this==lastbg)&&NATIVE.sound.stopSound(this._src);this.reset()};this.reset=function(){this._startTime=this._et=0};this.destroy=function(){this==lastbg&&(lastbg=void 0);NATIVE.sound.destroySound(this._src)}});exports.install=function(){GLOBAL.Audio=Audio};
