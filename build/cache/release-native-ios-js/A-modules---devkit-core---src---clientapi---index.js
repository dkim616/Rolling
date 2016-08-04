0f0f0d5c3e82e624745913493f63db05
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
jsio("import lib.PubSub");jsio("import lib.Callback");jsio("import ui.Engine");jsio("import ui.View");jsio("import ui.StackView");jsio("import device");var FontRenderer=device.get("FontRenderer");GLOBAL.CONFIG||(GLOBAL.CONFIG={});GLOBAL.DEBUG||(GLOBAL.DEBUG=!1);exports.ClientAPI=__class__;
exports.ClientAPI=exports.ClientAPI(function(){return this.init&&this.init.apply(this,arguments)},lib.PubSub,function(){var c=navigator.userAgent;if(this.isNative=/TeaLeaf/.test(c)){this.isIOS=/iPhone OS/.test(c);this.isAndroid=/Android/.test(c)}else if(/(iPod|iPhone|iPad)/i.test(c)){this.isIOS=this.isMobileBrowser=true;this.isUIWebView=!/Safari/.test(c)}else if(/Android/.test(c))this.isAndroid=this.isMobileBrowser=true;else{this.isDesktop=true;this.isFacebook=GLOBAL.CONFIG.isFacebookApp}this.isKik=
/Kik\/\d/.test(c);this.init=function(){window.addEventListener("pageshow",bind(this,"_onShow"),false);window.addEventListener("pagehide",bind(this,"_onHide"),false);if(this.isKik&&GLOBAL.cards&&cards.browser){cards.browser.on("foreground",bind(this,"_onShow"));cards.browser.on("background",bind(this,"_onHide"))}this.isOnline=navigator.onLine;window.addEventListener("online",bind(this,function(){if(!this.isOnline){this.isOnline=true;this.publish("OnlineStateChanged",true)}}),false);window.addEventListener("offline",
bind(this,function(){if(this.isOnline){this.isOnline=false;this.publish("OnlineStateChanged",false)}}),false);this.env=="browser"&&setTimeout(bind(this,"_onShow"),0);CONFIG.version&&logger.LOG&&console.log("LOG","devkit","Version",CONFIG.version)};this.Application=ui.StackView;c=__class__;c=c(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(){this._plugins={}};this.register=function(b,a){this._plugins[b]=a};this.getPlugin=function(b){return this._plugins[b]}});
this.plugins=new c;jsio("import .UI");this.ui=new UI;var d;try{GLOBAL.CACHE&&(d=JSON.parse(GLOBAL.CACHE["spritesheets/map.json"]))}catch(g){logger.WARN&&console.warn("WARN","devkit","spritesheet map failed to parse",g)}var e;try{GLOBAL.CACHE&&(e=JSON.parse(GLOBAL.CACHE["resources/sound-map.json"]))}catch(h){logger.WARN&&console.warn("WARN","devkit","sound map failed to parse",h)}jsio("import ui.resource.loader");this.resources=ui.resource.loader;this.resources.addSheets(d);this.resources.addAudioMap(e);
jsio("import AudioManager");this._onHide=function(){this.app&&this.app.onPause&&this.app.onPause();this.publish("Hide");this.publish("AfterHide");this.tracker&&this.tracker.endSession()};this._onShow=function(){this.app&&this.app.onResume&&this.app.onResume();this.publish("Show");this.publish("AfterShow")};this.buildApp=function(){jsio("import src.Application as Application");Application.prototype.__root=true;this.app=new Application;this.buildEngine(merge({view:this.app},this.app._settings));this.emit("app",
this.app)};this.buildEngine=function(b){b||(b={});if(!b.entry)b.entry="launchUI";var a=b.view;if(!a)throw"a timestep.Engine must be created with a root view";if(!(a instanceof ui.View))throw"src/Application.js must export a Class that inherits from ui.View";a.subscribe("onLoadError",this,"_onAppLoadError");var c;typeof a[b.entry]=="function"&&(c=bind(a,b.entry));a.view=a;a.engine=new ui.Engine(b);a.engine.show();a.engine.startLoop();a.initUI&&a.initUI();FontRenderer.init();b=(a._settings||{}).preload;
a=CONFIG.splash&&CONFIG.splash.autoHide!==false;if(b&&b.length){for(var f=new lib.Callback,d=0,e;e=b[d];++d)this.resources.preload(e,f.chain());a&&f.run(this,"hidePreloader",null);c&&f.run(c)}else{a&&this.hidePreloader();c&&c()}};this._onAppLoadError=function(b){logger.ERROR&&console.error("ERROR","devkit","encountered error when creating src Application: ",JSON.stringify(b));var a=CONFIG.splash;if(a&&a.onAppLoadError)a.onAppLoadError(b)};this.hideSplash=this.hidePreloader=function(b){var a=CONFIG.splash;
if(a&&a.hide&&!a.hidden){a.hide(b);a.hidden=true}else b&&b()}});
