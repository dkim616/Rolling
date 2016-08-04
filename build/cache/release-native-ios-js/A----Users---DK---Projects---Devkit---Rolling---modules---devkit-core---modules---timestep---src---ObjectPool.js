6221bd55aa561b7da3ab80b36a381cc9
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
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ObjectPool=__class__;
exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ObjectPool(function(){return this.init&&this.init.apply(this,arguments)},"ObjectPool",function(){this.init=function(a){this._ctor=a.ctor;this._pool=[];this._freshIndex=0;for(var a=a.initCount||0,b=0;b<a;b++)this.create()};this.create=function(){var a=this._pool,b=new this._ctor;b._poolIndex=a.length;a.push(b);return b};this.obtain=function(){var a;a=this._pool;a=this._freshIndex<a.length?a[this._freshIndex]:this.create();
a._obtainedFromPool=!0;this._freshIndex++;return a};this.release=function(a){var b=this._pool;if(a._obtainedFromPool){a._obtainedFromPool=!1;var c=b[this._freshIndex-1];b[this._freshIndex-1]=a;b[a._poolIndex]=c;b=c._poolIndex;c._poolIndex=a._poolIndex;a._poolIndex=b;this._freshIndex--}};this.forEachActive=function(a,b){for(var c=this._pool,d=this._freshIndex-1;0<=d;d--)a.call(b,c[d],d)};this.getActiveCount=function(){return this._freshIndex};this.getTotalCount=function(){return this._pool.length}});
