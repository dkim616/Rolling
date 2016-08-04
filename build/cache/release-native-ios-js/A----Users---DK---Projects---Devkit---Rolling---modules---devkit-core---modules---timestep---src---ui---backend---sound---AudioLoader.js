90f7bc935b3101936be3982511e9f376
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
var _ctx=null,_bufferMap={},_loadingMap={},_onLoadMap={},Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_sound_AudioLoader=__class__;
exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_sound_AudioLoader(function(){return this.init&&this.init.apply(this,arguments)},function(){function e(a,d,c,b){if(b){if(c.buffers[d]=_bufferMap[a]=b,d=_onLoadMap[a])d([b]),_onLoadMap[a]=null}else logger.ERROR&&console.error("ERROR","ui.backend.sound.AudioLoader","Error decoding audio file data:",a);_loadingMap[a]=!1;++c.loadedCount===c.fileCount&&c.callback(c.buffers)}this.init=function(a){_ctx=a.ctx};this.load=
function(a,d){for(var c={fileCount:a.length,loadedCount:0,buffers:[],callback:d||function(){logger.LOG&&console.log("LOG","ui.backend.sound.AudioLoader","Finished loading audio files:",a)}},b=0,f=a.length;b<f;b++)this._loadFile(a[b],b,c)};this._loadFile=function(a,d,c){var b=new XMLHttpRequest;b.open("GET",a,!0);b.responseType="arraybuffer";b.onload=function(){_ctx.decodeAudioData(b.response,function(b){e(a,d,c,b)},function(b){logger.ERROR&&console.error("ERROR","ui.backend.sound.AudioLoader","Error with AudioContext decodeAudioData:",
b&&b.err||b);e(a,d,c,null)})};b.onerror=function(){logger.ERROR&&console.error("ERROR","ui.backend.sound.AudioLoader","Error with audio XHR on URL:",a);e(a,d,c,null)};_loadingMap[a]=!0;b.send()};this.getAudioContext=function(){return _ctx};this.setAudioContext=function(a){_ctx=a};this.getBuffer=function(a){return _bufferMap[a]||null};this.isLoading=function(a){return _loadingMap[a]||!1};this.doOnLoad=function(a,d){if(this.isLoading(a))_onLoadMap[a]=d;else{var c=this.getBuffer(a);c?d([c]):this.load([a],
d)}}});
