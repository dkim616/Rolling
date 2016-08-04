c99741df9e367ca4f1ae010194d1a8e2
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
jsio("import ..View");jsio("import ..backend.strPad as strPad");jsio("import ..backend.BaseBacking");jsio("import .BoxLayout");jsio("import .LinearLayout");jsio("import .Padding");jsio("import util.setProperty");
var layoutProps={layout:{value:!1,cb:"_onSetLayout"},inLayout:{value:!0,cb:"_onInLayout"},order:{value:0,cb:"_onOrder"},direction:{value:"vertical",cb:"_onLayoutChange"},flex:{value:0,cb:"_onLayoutChange"},justifyContent:{value:"start",cb:"_onLayoutChange"},centerX:{value:!1,cb:"_onLayoutChange"},centerY:{value:!1,cb:"_onLayoutChange"},top:{value:void 0,cb:"_onLayoutChange"},right:{value:void 0,cb:"_onLayoutChange"},bottom:{value:void 0,cb:"_onLayoutChange"},left:{value:void 0,cb:"_onLayoutChange"},
minWidth:{value:void 0,cb:"_onBoundsChange"},minHeight:{value:void 0,cb:"_onBoundsChange"},maxWidth:{value:void 0,cb:"_onBoundsChange"},maxHeight:{value:void 0,cb:"_onBoundsChange"},layoutWidth:{value:void 0,cb:"_onLayoutWidth"},layoutHeight:{value:void 0,cb:"_onLayoutHeight"},fixedAspectRatio:{value:!1,cb:"_onFixedAspectRatio"},aspectRatio:{value:null,cb:"_onLayoutChange"},margin:{value:null,cb:"_onMarginChange"},padding:{get:function(){return this._padding||(this._padding=new Padding)},set:function(b){this._padding?
this._padding.update(b):this._padding=new Padding(b);this._onLayoutChange()}}},key;for(key in layoutProps)backend.BaseBacking.addProperty(key,layoutProps[key]);
View.addExtension({extend:function(b){b=b.prototype;b._sortOrder=strPad.initialValue;b._onOrder=function(c,a){this._sortOrder=strPad.pad(a);this._onLayoutChange()};b._onMarginChange=function(c,a){this._cachedMargin?this._cachedMargin.update(a):this._cachedMargin=new Padding(a);this.top=this._cachedMargin.top;this.bottom=this._cachedMargin.bottom;this.left=this._cachedMargin.left;this.right=this._cachedMargin.right;this._onLayoutChange()};b._onFixedAspectRatio=function(c,a){a&&this.updateAspectRatio()};
b.updateAspectRatio=function(c,a){this.aspectRatio=(c||this.width)/(a||this.height)};b.enforceAspectRatio=function(c,a,b){c&&a&&this.updateAspectRatio(c,a);var d=this._view.getSuperview(),e=this._view._opts,c=c||e.width,a=a||e.height;e.width?(c=e.width,a=e.width/this.aspectRatio):e.height?(a=e.height,c=e.height*this.aspectRatio):d&&(this.layoutWidth&&d.style.width?(c=d.style.width*parseFloat(this.layoutWidth)/100,a=c/this.aspectRatio):this.layoutHeight&&d.style.height?(a=d.style.height*parseFloat(this.layoutHeight)/
100,c=a*this.aspectRatio):this.flex&&"horizontal"==d.style.direction&&this.width?(c=this.width,a=c/this.aspectRatio):this.flex&&"vertical"==d.style.direction&&this.height?(a=this.height,c=a*this.aspectRatio):b||setTimeout(bind(this,"enforceAspectRatio",c,a,!0),0));this.width=c;this.height=a};var f={linear:LinearLayout,box:BoxLayout};b._onSetLayout=function(c,a){var b=this._view,d=f[a];d?(b.__layout=new d({view:b}),this.addResizeListeners()):this._layout=!1};b.addResizeListeners=function(){this._hasResizeListeners||
(this._hasResizeListeners=!0,util.setProperty(this,"width",{cb:"_onWidth",value:this.width,configurable:!0}),util.setProperty(this,"height",{cb:"_onHeight",value:this.height,configurable:!0}))};b._onWidth=function(c,a){"number"==typeof this.maxWidth&&(this._width=Math.min(this.maxWidth,a||0));"number"==typeof this.minWidth&&(this._width=Math.max(this.minWidth,a||0));this._aspectRatio&&(this._height=this._width/this._aspectRatio);this._onLayoutChange()};b._onHeight=function(c,a){"number"==typeof this.maxHeight&&
(this._height=Math.min(this.maxHeight,a||0));"number"==typeof this.minHeight&&(this._height=Math.max(this.minHeight,a||0));this._aspectRatio&&(this._width=this._height*this._aspectRatio);this._onLayoutChange()};b._onInLayout=function(c,a){var b=this._superview&&this._superview.__layout;b&&(a?b.add(this._view):(b.remove(this._view),this._view.needsReflow()))};b._onLayoutWidth=function(b,a){"%"==a.charAt(a.length-1)?(this._layoutWidthValue=parseFloat(a)/100,this._layoutWidthIsPercent=!0):(this._layoutWidthValue=
0,this._layoutWidthIsPercent=!1);this._onLayoutChange()};b._onLayoutHeight=function(b,a){"%"==a.charAt(a.length-1)?(this._layoutHeightValue=parseFloat(a)/100,this._layoutHeightIsPercent=!0):(this._layoutHeightValue=0,this._layoutHeightIsPercent=!1);this._onLayoutChange()};b._onBoundsChange=function(){this.addResizeListeners();this._onLayoutChange()};b._onLayoutChange=function(){var b=this.getSuperview();b&&b.__layout&&b.needsReflow();this._view.needsReflow()}}});
