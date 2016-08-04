aa1d4f2cdb23f2d6fc061835f29f27d6
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
jsio("import util.setProperty as setProperty");
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_BaseBacking=__class__,BaseBacking=exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_BaseBacking(function(){return this.init&&this.init.apply(this,arguments)},function(){var c=this.constructor.styleKeys={},d={x:{value:0},y:{value:0},offsetX:{value:0},offsetY:{value:0},offsetXPercent:{value:void 0,cb:"_onOffsetX"},offsetYPercent:{value:void 0,cb:"_onOffsetY"},anchorX:{value:0},
anchorY:{value:0},centerAnchor:{value:!1},width:{cb:"_onResize"},height:{cb:"_onResize"},r:{value:0},opacity:{value:1},zIndex:{value:0,cb:"_onZIndex"},scale:{value:1},scaleX:{value:1},scaleY:{value:1},flipX:{value:!1},flipY:{value:!1},visible:{value:!0},shadowColor:{value:"black"},clip:{value:!1},backgroundColor:{value:""},compositeOperation:{value:void 0}};this.constructor.addProperty=function(a,b){c[a]=!0;setProperty(this.prototype,a,b)};for(var e in d)this.constructor.addProperty(e,d[e]);this.localizePoint=
function(a){a.x-=this.x+this.anchorX+this.offsetX;a.y-=this.y+this.anchorY+this.offsetY;this.r&&a.rotate(-this.r);a.scale(1/this.scale);a.x+=this.anchorX;a.y+=this.anchorY;return a};this.copy=function(){var a={},b;for(b in c)a[b]=this[b];return a};this.update=function(a){for(var b in a)a.hasOwnProperty(b)&&c.hasOwnProperty(b)&&(this[b]=a[b]);return this}});
