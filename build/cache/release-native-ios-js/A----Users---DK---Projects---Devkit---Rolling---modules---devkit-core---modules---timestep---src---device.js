45040bf68dd52215b945d9969ddfc265
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
jsio("import userAgent");jsio("import util.setProperty");jsio("import event.Emitter as Emitter");if("undefined"===typeof navigator||!navigator.userAgent)logger.WARN&&console.warn("WARN","device","Timestep was unable to determine your device! Please check that navigator.userAgent is defined."),exports={isUnknown:!0};var ua=navigator.userAgent,_devices={};exports.registerDevice=function(a,b){_devices[a]=b};
exports.get=function(a){return"InputPrompt"==a?jsio("import ui.InputPrompt"):jsio("import "+(_devices[exports.name]||"platforms.browser")+"."+a,{dontExport:!0,suppressErrors:!0})};exports.importUI=function(a){return jsio("import ui.backend."+(exports.useDOM?"dom":"canvas")+"."+a,{dontExport:!0,suppressErrors:!0})};exports.isMobileNative=exports.isMobile=/TeaLeaf/.test(ua);logger.LOG&&console.log("LOG","device",exports.isMobile?"on mobile device":"in web browser");exports.screen=new Emitter;
var devicePixelRatio=window.devicePixelRatio||1;exports.devicePixelRatio=devicePixelRatio;exports.screen.defaultDevicePixelRatio=devicePixelRatio;exports.screen.devicePixelRatio=devicePixelRatio;exports.screen.width=window.innerWidth*devicePixelRatio;exports.screen.height=window.innerHeight*devicePixelRatio;
exports.setDevicePixelRatio=function(a){if("browser"!==userAgent.APP_RUNTIME)logger.WARN&&console.warn("WARN","device","device.setDevicePixelRatio is only supported in browsers!");else{exports.devicePixelRatio=exports.screen.devicePixelRatio=a;var b=Math.floor(window.innerWidth*a),a=Math.floor(window.innerHeight*a);exports.width=exports.screen.width=b;exports.height=exports.screen.height=a;exports.screen.publish("Resize",b,a)}};exports.hideAddressBar=function(){};
util.setProperty(exports,"defaultFontFamily",{cb:function(a){jsio("import ui.resource.Font");ui.resource.Font.setDefaultFontFamily(a)},value:"Helvetica"});exports.defaultFontWeight="";exports.events="ontouchstart"in window&&!/BlackBerry/.test(ua)?{start:"touchstart",move:"touchmove",end:"touchend"}:{start:"mousedown",move:"mousemove",end:"mouseup"};exports.isMobileBrowser=!1;exports.isUIWebView=!1;exports.isSafari=/Safari/.test(ua);exports.isSimulator=GLOBAL.CONFIG&&!!CONFIG.simulator;
exports.isSimulator?(exports.isIOSSimulator=/iphone|ipod|ipad/i.test(CONFIG.simulator.deviceType),exports.isAndroidSimulator=!exports.isIOSSimulator,exports.isNativeSimulator=/^native/.test(CONFIG.target)):(exports.isAndroidSimulator=!1,exports.isIOSSimulator=!1,exports.isNativeSimulator=!1);
if(exports.isMobile)exports.name="tealeaf",exports.width=navigator.width,exports.height=navigator.height,exports.isAndroid=/Android/.test(ua),exports.isAndroid?exports.isTablet=600<=navigator.width/devicePixelRatio:(exports.isIPad=exports.isTablet=/iPad/.test(ua),exports.isIPhone=/iPhone/.test(ua),exports.isIOS=!0);else{if(/(iPod|iPhone|iPad)/i.test(ua)){exports.name="browser";exports.isMobileBrowser=!0;exports.isIOS=!0;exports.isIpad=/iPad/i.test(ua);exports.isStandalone=!!window.navigator.standalone;
var match=ua.match(/iPhone OS ([0-9]+)/);exports.iosVersion=match&&parseInt(match[1]);exports.isUIWebView=!exports.isSafari;exports.screen.defaultOrientation="portrait";exports.screen.browserChrome={portrait:{top:20*devicePixelRatio,bottom:44*devicePixelRatio},landscape:{top:20*devicePixelRatio,bottom:32*devicePixelRatio}}}else/Mobile Safari/.test(ua)||/Android/.test(ua)||/BlackBerry/.test(ua)?(exports.name="browser",exports.isMobileBrowser=!0,exports.isAndroid=!0,exports.screen.width=window.outerWidth,
exports.screen.height=window.outerHeight-1,exports.screen.defaultOrientation="portrait",exports.screen.browserChrome={portrait:{top:0,bottom:0},landscape:{top:0,bottom:0}}):(exports.screen.width=window.innerWidth,exports.screen.height=window.innerHeight,exports.name="browser",exports.canResize=!1);exports.width=exports.screen.width;exports.height=exports.screen.height}exports.useDOM=!1;exports.setUseDOM=function(){console.warn("Attempting to set 'useDom' property, which is no longer supported.")};
exports.getDimensions=function(a){var b=Math.min(exports.width,exports.height),c=Math.max(exports.width,exports.height);return a?{height:b,width:c}:{height:c,width:b}};exports.init=function(){jsio("import ui.init");exports.get("initialize").init();exports.screen.width=exports.width;exports.screen.height=exports.height};exports.setBackButtonHandler=function(a){NATIVE&&(NATIVE.onBackButton=a)};exports.setRotationHandler=function(a){NATIVE&&(NATIVE.onRotation=a)};
exports.stayAwake=function(a){NATIVE&&NATIVE.stayAwake&&NATIVE.stayAwake(a)};exports.collectGarbage=function(){logger.LOG&&console.log("LOG","device","collecting garbage");NATIVE&&NATIVE.gc&&NATIVE.gc.runGC()};
