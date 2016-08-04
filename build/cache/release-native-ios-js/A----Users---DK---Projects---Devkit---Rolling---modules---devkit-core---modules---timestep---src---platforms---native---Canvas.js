631247f66f7c6439dfe714c12e2635be
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
jsio("import .Context2D");jsio("import util.setProperty");
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_platforms_native_Canvas=__class__,Canvas=GLOBAL.HTMLCanvasElement=exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_platforms_native_Canvas(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(a){a=merge(a,{width:1,height:1,offscreen:!0});this._width=a.width;this._height=a.height;this._offscreen=a.offscreen;this.style={};this._context2D=null;this.complete=
!0};this.getContext=function(a,b){if("2D"==a.toUpperCase())return this.complete=!0,this._context2D||(this._context2D=new Context2D({canvas:this,offscreen:this._offscreen,unloadListener:bind(this,function(){logger.LOG&&console.log("LOG",".Canvas","{canvas-registry} Canvas class reacting to canvas loss by setting context to null");this._context2D=null;"function"==typeof b&&b()})}))};this.getBoundingClientRect=function(){return{bottom:this._height,height:this._height,left:0,right:this._width,top:this._width,
width:0}};this.toDataURL=function(){return NATIVE.gl.toDataURL(this._context2D)};this.destroy=function(){this._context2D&&this._context2D.destroy()};this.resize=function(a,b){this._context2D&&this._context2D.resize(a,b)};util.setProperty(this,"width",{set:function(a){this._width!==a&&(this._width=a,this.resize(a,this._height));this._context2D&&this._context2D.clear()},get:function(){return this._width}});util.setProperty(this,"height",{set:function(a){this._height!==a&&(this._height=a,this.resize(this._width,
a));this._context2D&&this._context2D.clear()},get:function(){return this._height}});util.setProperty(this,"src",{set:function(){},get:function(){return this._src}})});document.__registerCreateElementHandler("CANVAS",function(){return new Canvas});
