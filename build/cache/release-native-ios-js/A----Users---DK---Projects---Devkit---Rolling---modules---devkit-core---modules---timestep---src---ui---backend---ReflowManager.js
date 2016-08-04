bcfbd24c73badf5ce86a208e6760bf01
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
var DEBUG_REFLOW=!1,DEBUG_TIME=!1;if(DEBUG_REFLOW||DEBUG_TIME){var _debug={space:"",stepIn:function(){this.space+=" ";return!0},stepOut:function(){this.space=this.space.slice(0,this.space.length-1);return!0},log:function(){logger.log.apply(logger,[this.space].concat(Array.prototype.slice.call(arguments,0)));return!0}};logger.LOG&&console.log("LOG","ui.backend.ReflowManager","===== CREATING REFLOW MANAGER")}
var MAX_REFLOW_THRESHOLD=20,_pool=new (Class(function(){this._pool=[];this.recycle=function(a){a.view=null;this._pool.push(a)};this.get=function(a){var b=this._pool.pop()||{};b.view=a;b.count=0;b.needsReflow=!1;return b}})),Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_ReflowManager=__class__,ReflowManager=exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_ReflowManager(function(){return this.init&&this.init.apply(this,
arguments)},function(){this.init=function(){this._pending={};this._pendingCount=this._iter=0};this.add=function(a){if(a.style.layout){var b=a.uid,b=this._pending[b]||(this._pending[b]=_pool.get(a));b.needsReflow||(++this._pendingCount,b.needsReflow=!0,DEBUG_REFLOW&&_debug.log("adding "+a+" ("+a.uid+")"+(" "+a.style.layout||"")+":",(void 0===a.style.width?"?":a.style.width)+"x"+(void 0===a.style.height?"?":a.style.height)));b.iter!=this._iter&&(b.iter=this._iter)}};this.reflow=function(a){void 0===
a.style.__cachedWidth&&(a.style.__cachedWidth=a.style.width);void 0===a.style.__cachedHeight&&(a.style.__cachedHeight=a.style.height);var b=this._pending[a.uid];b&&b.needsReflow&&(b.needsReflow=!1,--this._pendingCount);a.__layout&&a.__layout.reflow();a.reflow&&a.reflow();if(a.__layout&&(b=a.style,b.__cachedWidth!=b.width||b.__cachedHeight!=b.height))for(var a=a.getSubviews(),b=0,d=a.length;b<d;++b)this.add(a[b])};this.reflowViews=function(){if(this._pendingCount){this._iter=0;var a,b;DEBUG_REFLOW&&
_debug.stepIn();if(DEBUG_TIME)var d=Date.now();for(;this._pendingCount;){for(;this._pendingCount;){++this._iter;a=0;for(b in this._pending){DEBUG_REFLOW&&0==a&&1==this._iter&&console.log(" == beginning reflow == ");var c=this._pending[b];if(c.count>MAX_REFLOW_THRESHOLD){logger.WARN&&console.warn("WARN","ui.backend.ReflowManager","reflow loop detected for view",c.view.uid);this.cleanUp();break}c.needsReflow&&(++c.count,DEBUG_REFLOW&&_debug.log("-- reflow view",c.view.uid,"("+c.count+" times)")&&_debug.stepIn(),
this.reflow(c.view),DEBUG_REFLOW&&_debug.stepOut(),++a)}DEBUG_REFLOW&&a&&_debug.log("***** iteration",this._iter,"reflowed",a,"views")}for(b in this._pending)if(a=this._pending[b].view,a.hasListeners("resize")){var c=a.style,e=c.width,f=c.height;if(c.__cachedWidth!=e||c.__cachedHeight!=f)DEBUG_REFLOW&&_debug.log("view",a.uid,"resize event firing",e+"x"+f,"(prev: "+c.__cachedWidth+"x"+c.__cachedHeight+")"),c.__cachedWidth=e,c.__cachedHeight=f,a.emit("resize")}}this.cleanUp();DEBUG_REFLOW&&_debug.stepOut();
DEBUG_TIME&&this._iter&&(b=Date.now(),_debug.log("total reflow time:",b-d))}};this.cleanUp=function(){for(var a in this._pending)_pool.recycle(this._pending[a]),delete this._pending[a];this._pendingCount=0}}),_instance=null;exports.get=function(){return _instance||(_instance=new ReflowManager)};
