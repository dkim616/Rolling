6e23ad69f49e5c9d467deb5405780324
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
var env=jsio.__env;env.debugPath=function(a){return"http://"+("android"==env.name?CONFIG.packageName:CONFIG.bundleID)+"/"+a.replace(/^[.\/\\]+/,"")};GLOBAL.console=logging.get("console");window.self=window;jsio("import Promise");GLOBAL.Promise=Promise;jsio("import platforms.native.initialize");jsio("import device");device.init();jsio("import .common");common.install();startApp();
function analytics(){var a=GLOBAL.CONFIG,a="appID:"+encodeURIComponent(a.appID||"")+"&bundleID:"+encodeURIComponent(a.bundleID||"")+"&appleID:"+encodeURIComponent(a.appleID||"")+"&version:"+encodeURIComponent(a.version||"")+"&sdkVersion:"+encodeURIComponent(a.sdkVersion||"")+"&isAndroid:"+(device.isAndroid?1:0)+"&isIOS:"+(device.isIOS?1:0),b=new XMLHttpRequest;b.open("GET","http://www.gameclosure.com/analytics?"+a,!0);b.send()}
function startApp(){jsio("import devkit");GLOBAL.GC=new devkit.ClientAPI;analytics();GLOBAL.GC.buildApp("launchUI")};
