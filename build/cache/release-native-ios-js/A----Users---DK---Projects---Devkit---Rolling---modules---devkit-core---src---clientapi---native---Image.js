205c25d55ae238ddd3beea06b1ffb220
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
jsio("import lib.PubSub");jsio("import util.setProperty");
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_src_clientapi_native_Image=__class__,Image=exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_src_clientapi_native_Image(function(){return this.init&&this.init.apply(this,arguments)},lib.PubSub,function(){this.init=function(a,b,c,d){this._src=a||"";this.width=b||void 0;this.height=c||void 0;this.__gl_name=d||void 0;this._fireReload=this._firedLoad=this.complete=!1};util.setProperty(this,"src",{set:function(a){a?(this._src=a,NATIVE.gl.loadImage(this)):
(logger.ERROR&&console.error("ERROR",".Image","empty src set on an image!"),this._onerror())}});this._onload=function(a,b,c){logger.LOG&&console.log("LOG",".Image","onload called with",a,b,c);this.complete=!0;this.width=this.originalWidth=a;this.height=this.originalHeight=b;this.__gl_name=c;this._firedLoad||(this._firedLoad=!0,this.onload&&this.onload(),this.publish("load",{type:"load"}));this._fireReload?(this.onreload&&this.onreload(),this.publish("reload",{type:"reload"})):this._fireReload=!0};
this._onerror=function(){this.onerror();this.publish("error",{type:"error"})};this.reload=function(){this._fireReload=!0;NATIVE.gl.loadImage(this)};this.destroy=function(){this._src&&NATIVE.gl.deleteTexture(this._src)};this.addEventListener=function(a,b){this.subscribe(a,this,b)};this.removeEventListener=function(a,b){this.unsubscribe(a,this,b)};this.onload=this.onerror=this.onreload=function(){}});exports.install=function(){GLOBAL.Image=Image};
