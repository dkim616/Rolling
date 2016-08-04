ccd29ff972f806add7bf5014980a2dfa
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
jsio("import ..strPad");jsio("import ..BaseBacking");
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_canvas_ViewBacking=__class__,ViewBacking=exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_canvas_ViewBacking(function(){return this.init&&this.init.apply(this,arguments)},BaseBacking,function(){var k={a:1,b:0,c:0,d:1,tx:0,ty:0},l=Math.sin,m=Math.cos;this.init=function(a){this._globalTransform={a:1,b:0,c:0,d:1,tx:0,ty:0};this._cachedSin=this._cachedRotation=0;this._globalOpacity=
this._cachedCos=1;this._view=a;this._superview=null;this._subviews=[];this._childCount=0};this.getSuperview=function(){return this._superview};this.getSubviews=function(){this._needsSort&&(this._needsSort=!1,this._subviews.sort());for(var a=[],c=this._subviews,b=c.length,d=0;d<b;++d)a[d]=c[d]._view;return a};var n=9E5;this.addSubview=function(a){var c=a.__view,b=c._superview;if(b==this._view||this==c)return!1;b&&b.__view.removeSubview(a);a=this._subviews.length;this._subviews[a]=c;c._superview=this._view;
c._setAddedAt(++n);this._childCount++;a&&c.__sortKey<this._subviews[a-1].__sortKey&&(this._needsSort=!0);return!0};this.removeSubview=function(a){var c=this._subviews.indexOf(a.__view);return-1!=c?(this._subviews.splice(c,1),this._childCount--,a.__view._superview=null,!0):!1};this.wrapTick=function(a,c){this._view._tick&&this._view._tick(a,c);for(var b=this._subviews,d=0;d<this._childCount;++d)b[d].wrapTick(a,c)};this.updateGlobalTransform=function(){var a=this.flipX?-1:1,c=this.flipY?-1:1,b,d=this._superview&&
this._superview.__view;d?(b=d._globalTransform,this._globalOpacity=d._globalOpacity*this.opacity):(b=k,this._globalOpacity=this.opacity);var d=this._globalTransform,f=this.scaleX*this.scale*a,e=this.scaleY*this.scale*c,c=this.flipX?this._width-this.anchorX:this.anchorX,a=this.flipY?this._height-this.anchorY:this.anchorY,g=this.x+this.offsetX+this.anchorX,h=this.y+this.offsetY+this.anchorY;if(0===this.r)g-=c*f,h-=a*e,d.a=b.a*f,d.b=b.b*f,d.c=b.c*e,d.d=b.d*e;else{this.r!==this._cachedRotation&&(this._cachedRotation=
this.r,this._cachedSin=l(this.r),this._cachedCos=m(this.r));var i=this._cachedCos*f,f=this._cachedSin*f,j=-this._cachedSin*e,e=this._cachedCos*e;if(c||a)g-=i*c+j*a,h-=f*c+e*a;d.a=i*b.a+f*b.c;d.b=i*b.b+f*b.d;d.c=j*b.a+e*b.c;d.d=j*b.b+e*b.d}d.tx=g*b.a+h*b.c+b.tx;d.ty=g*b.b+h*b.d+b.ty};this.wrapRender=function(a,c){if(this.visible){this._needsSort&&(this._needsSort=!1,this._subviews.sort());var b=this._width,d=this._height;if(!(0>b||0>d)){var f=this.clip||this.compositeOperation||!this._view.__parent;
f&&a.save();this.updateGlobalTransform();var e=this._globalTransform;a.setTransform(e.a,e.b,e.c,e.d,e.tx,e.ty);a.globalAlpha=this._globalOpacity;this.clip&&a.clipRect(0,0,b,d);(e=this._view.getFilter())?a.setFilter(e):a.clearFilter();this.compositeOperation&&(a.globalCompositeOperation=this.compositeOperation);this.backgroundColor&&(a.fillStyle=this.backgroundColor,a.fillRect(0,0,b,d));b=c.viewport;this._view._render&&this._view._render(a,c);this._renderSubviews(a,c);c.viewport=b;a.clearFilter();
f&&a.restore()}}};this._renderSubviews=function(a,c){for(var b=this._subviews,d=0;d<this._childCount;d++)b[d].wrapRender(a,c)};this._onResize=function(){this._view.needsReflow();var a=this._view.style;a.centerAnchor&&(a.anchorX=(a.width||0)/2,a.anchorY=(a.height||0)/2)};this._sortIndex=strPad.initialValue;this._onZIndex=function(a,c){this._sortIndex=strPad.pad(c);this._setSortKey();this._view.needsRepaint();var b=this._view.getSuperview();b&&(b.__view._needsSort=!0)};this._setAddedAt=function(a){this._addedAt=
a;this._setSortKey()};this._setSortKey=function(){this.__sortKey=this._sortIndex+this._addedAt};this._onOffsetX=function(a){this.offsetX=a*this.width/100};this._onOffsetY=function(a){this.offsetY=a*this.height/100};this.toString=function(){return this.__sortKey}});
