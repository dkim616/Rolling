52c9e45cef60f2969d24932bb6f9b246
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
jsio("import device");var Timer=device.get("Timer"),MAX_TICK=1E4;exports.now=0;exports.frames=0;exports.reset=function(){this._last=null};exports.tick=function(a){try{a>MAX_TICK&&(exports.onLargeTick(a,MAX_TICK),a=1),exports.now+=a,exports.frames++,exports.onTick(a),ok=!0}finally{exports.debug&&!ok&&app.stopLoop()}};exports.onLargeTick=function(a,b){logger.WARN&&console.warn("WARN","timer","Dropping large tick: "+a+"; Threshold is set at: "+b)};exports.onTick=function(){};exports.debug=!1;
exports.start=function(a){this.reset();this.isRunning=!0;device.get("Timer").start(exports.tick,a)};exports.stop=function(){this.reset();this.isRunning=!1;device.get("Timer").stop()};exports.getTickProgress=function(){var a=+new Date;return-(Timer.last||a)+a};
