7ace2babce6a42e4414d7ffdb6f270d6
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
jsio("import util.path");jsio("import std.uri as URI");jsio("import ui.View as View");jsio("import ui.resource.Image as Image");jsio("import ui.resource.ImageViewCache as ImageViewCache");
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_canvas_ImageView=__class__,ImageView=exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_canvas_ImageView(function(){return this.init&&this.init.apply(this,arguments)},View,function(d){this.getImage=function(){return this._img};this.getImageFromCache=function(a,b){return ImageViewCache.getImage(a,b)};this.updateOpts=function(a){a=d(this,"updateOpts",arguments);"autoSize"in
a&&(this._autoSize=!!a.autoSize);a.image?this.setImage(a.image):this.needsReflow();return a};this.setImage=function(a,b){var c=b&&b.forceReload;"string"==typeof a?a=ImageViewCache.getImage(a,c):c&&a.reload();if(this._img=a)(this._autoSize=b&&"autoSize"in b?b.autoSize:this._autoSize)&&(0<this._img.getWidth()&&0<this._img.getHeight()?this.autoSize():this._img.doOnLoad(this,"autoSize")),this._img.doOnLoad(this,"needsRepaint")};this.doOnLoad=function(){1==arguments.length?this._img.doOnLoad(this,arguments[0]):
this._img.doOnLoad.apply(this._img,arguments);return this};this.autoSize=function(){this._img&&(this.style.width=this._img.getWidth(),this.style.height=this._img.getHeight(),this.style.fixedAspectRatio&&this.style.enforceAspectRatio(this.style.width,this.style.height))};this.getOrigWidth=this.getOrigW=function(){return this._img.getOrigW()};this.getOrigHeight=this.getOrigH=function(){return this._img.getOrigH()};this.render=function(a){if(this._img){var b=this.style;this._img.render(a,0,0,b.width,
b.height)}};var e=window.location.toString(),f=window.location.hostname;this.getTag=function(){var a;if(this._img){var b=this._img.getOriginalURL();if(this._cachedTag&&b==this._cachedTag.url)a=this._cachedTag.tag;else{a=URI.relativeTo(b,e);var c=a.getHost();a=util.path.splitExt(a.getFile()).basename+(c&&c!=f?":"+c:"");this._cachedTag={url:b,tag:a}}}return(a||"")+":ImageView"+this.uid}});
