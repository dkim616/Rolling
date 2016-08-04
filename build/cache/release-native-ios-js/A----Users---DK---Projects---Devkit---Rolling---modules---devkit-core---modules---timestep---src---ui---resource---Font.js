cbc92ef16c3d60cfbfe83d61c4ce8842
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
var _cache={},weights="normal|bold|bolder|lighter|[1-9]00",styles="normal|italic|oblique",units="px|pt|pc|in|cm|mm|%",name="([\\w\"'\\- ]+(?:,|$))+",fontParser=RegExp("^ *(?:("+weights+") *)?(?:("+styles+") *)?([\\d\\.]+)("+units+")("+name+")","i"),sizeParser=RegExp("([\\d\\.]+)("+units+")","i"),TO_PT={pt:1,px:0.75,"in":72,mm:72/25.4,cm:72/2.54},TO_PX={pt:4/3,px:1,"in":96,mm:96/25.4,cm:96/2.54};
function parseSize(a){a=a.match(sizeParser);if(!a)throw"invalid font size";return{value:parseFloat(a[1]),unit:a[2]}}function toPx(a){return{value:a.value*TO_PX[a.unit],unit:"px"}}function toPt(a){return{value:a.value*TO_PT[a.unit],unit:"pt"}}
function parseFont(a){var b=a.match(fontParser);if(!b)throw"invalid font string";a={};a.weight=b[1]||"normal";a.style=b[2]||"normal";a.size={value:parseFloat(b[3]),unit:b[4]};b=b[5].split(",");a.names=b.map(function(a){return a.replace(/[\-_]/g," ").replace(/\s+/g," ").replace(/['"]/g,"").replace(/^\s+|\s+$/g,"")});a.name=a.names[0];b=b.map(function(a){return a.replace(/\s+/g," ").replace(/['"]/g,"").replace(/^\s+|\s+$/g,"")});a.origName=b[0];return a}
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_resource_Font=__class__,Font=exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_resource_Font(function(){return this.init&&this.init.apply(this,arguments)},function(){var a=null;this.constructor.setDefaultFontFamily=function(c){a=c};var b={name:a,size:20,unit:"px",style:"",weight:""};this.init=function(a){"string"===typeof a?(_cache[a]=this,this._string=a,a=parseFont(a)):a=merge(a,b);
"string"==typeof a.size&&(a.size=parseSize(a.size));this._name=a.name;this._origName=a.origName;this._style=a.style;this.size=a.size;this.sizePx=toPx(this.size).value;this.sizePt=toPt(this.size).value;this._weight=a.weight;this._isBold=/bold/i.test(this._weight)};this.getSize=function(){return this.sizePx};this.getName=function(){return this._name};this.getOrigName=function(){return this._origName};this.getWeight=function(){return this._weight}});
exports.parse=function(a){return a in _cache?_cache[a]:new Font(a)};
