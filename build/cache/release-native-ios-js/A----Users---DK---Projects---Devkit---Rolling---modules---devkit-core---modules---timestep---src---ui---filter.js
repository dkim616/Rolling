495634374d4ef2498623e615004fb000
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
jsio("import ui.Color as Color");var Image;exports.Filter=__class__;
var Filter=exports.Filter=exports.Filter(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(a){this._color=new Color(a);this._type=a.type||"";this._views=[]};this.get=function(){var a=this._color.get();a.type=this._type;a.priority=0;return a};this.getType=function(){return this._type};this.update=function(a){a=a||this.get();this._color.update(a);this._type=void 0!==a.type?a.type:this._type;for(var a=this._views,b=0,d=a.length;b<d;b++){var c=a[b];c.__view.filterColor=
this.getColorString();c.__view.filterType=Filter.TYPES[this.getType()]||0}};this.setView=function(a){var b=this._views;-1===b.indexOf(a)&&b.push(a)};this.removeView=function(a){var b=this._views,a=b.indexOf(a);-1!==a&&b.splice(a,1)};this.getColorString=function(){return this._color.toString()}});Filter.TYPES={None:0,LinearAdd:1,Multiply:2,Tint:3};exports.LinearAddFilter=__class__;
exports.LinearAddFilter=exports.LinearAddFilter(function(){return this.init&&this.init.apply(this,arguments)},Filter,function(a){this.init=function(b){a(this,"init",arguments);this._type="LinearAdd"}});exports.TintFilter=__class__;exports.TintFilter=exports.TintFilter(function(){return this.init&&this.init.apply(this,arguments)},Filter,function(a){this.init=function(b){a(this,"init",arguments);this._type="Tint"}});exports.MultiplyFilter=__class__;
exports.MultiplyFilter=exports.MultiplyFilter(function(){return this.init&&this.init.apply(this,arguments)},Filter,function(a){this.init=function(b){a(this,"init",arguments);this._type="Multiply"}});exports.PositiveMaskFilter=__class__;
exports.PositiveMaskFilter=exports.PositiveMaskFilter(function(){return this.init&&this.init.apply(this,arguments)},Filter,function(a){this.init=function(b){a(this,"init",arguments);this._type="PositiveMask";b.image&&(Image=Image||jsio("import ui.resource.Image"),this._mask=new Image({url:b.image}))};this.getMask=function(){return this._mask}});exports.NegativeMaskFilter=__class__;
exports.NegativeMaskFilter=exports.NegativeMaskFilter(function(){return this.init&&this.init.apply(this,arguments)},Filter,function(a){this.init=function(b){a(this,"init",arguments);this._type="NegativeMask";b.image&&(Image=Image||jsio("import ui.resource.Image"),this._mask=new Image({url:b.image}))};this.getMask=function(){return this._mask}});
