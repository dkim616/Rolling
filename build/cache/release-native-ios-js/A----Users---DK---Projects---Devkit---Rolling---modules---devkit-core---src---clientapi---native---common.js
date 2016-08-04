94d3391d54eab4f1dab009a81814227f
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
jsio("import lib.PubSub");
exports.install=function(){logger.LOG&&console.log("LOG",".common","installing native support");jsio("import device");jsio("import .Window");jsio("import .Document");jsio("import .localStorage");jsio("import .events");jsio("import .launchInfo");jsio("import .plugins");jsio("import .screen");jsio("import platforms.native.Canvas");jsio("import .Image");jsio("import .XMLHttpRequest");jsio("import .Audio");jsio("import .dom.DOMParser");Image.install();XMLHttpRequest.install();Audio.install();dom.DOMParser.install();
NATIVE.device.native_info&&(NATIVE.device.info=JSON.parse(NATIVE.device.native_info));jsio("import .timestep");timestep.install();NATIVE.overlay.delegate=new lib.PubSub;CONFIG.splash=CONFIG.splash||{};var a=CONFIG.splash.hide||function(){};CONFIG.splash.hide=function(b){NATIVE.doneLoading instanceof Function&&NATIVE.doneLoading();a instanceof Function&&a();b&&b()}};
