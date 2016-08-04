2f58a711dba3780adc692482a0a0c0db
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
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_layout_BoxLayout=__class__,BoxLayout=exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_layout_BoxLayout(function(){return this.init&&this.init.apply(this,arguments)},function(){var g=this.constructor;this.init=function(b){this._view=b.view;g.listenSubviewResize(b.view)};this.reflow=function(){var b=this._view,a=b.getSuperview(),d=b.style;("wrapContent"==d._layoutWidth||"wrapContent"==
d._layoutHeight)&&g.addSubviewListener(b);a&&(((b=!d.inLayout||!d.flex||"linear"!=a.style.layout)||!a.__layout.isHorizontal())&&this.reflowX(),(b||!a.__layout.isVertical())&&this.reflowY())};g.addSubviewListener=function(b){if(!b.__hasSubviewListener){b.__hasSubviewListener=!0;b.subscribe("SubviewAdded",this,"_onSubviewAdded",b);b.subscribe("SubviewRemoved",this,"_onSubviewRemoved",b);for(var a=b.getSubviews(),d=0,c=a.length;d<c;++d)this._onSubviewAdded(b,a[d])}};g.removeSubviewListener=function(b){if(b.__hasSubviewListener){b.__hasSubviewListener=
!1;b.unsubscribe("SubviewAdded",this,"_onSubviewAdded");b.unsubscribe("SubviewRemoved",this,"_onSubviewRemoved");for(var a=b.getSubviews(),d=0,c=a.length;d<c;++d)this._onSubviewRemoved(b,a[d])}};g._onSubviewAdded=function(b,a){a.style.addResizeListeners();b.connectEvent(a,"resize",bind(b,"needsReflow"))};g._onSubviewRemoved=function(b,a){b.disconnectEvent(a,"resize")};g.addResizeListener=function(b){b.style.__removeSuperviewResize&&b.style.__removeSuperviewResize();var a=bind(b,"needsReflow"),d=b.getSuperview();
d&&(d.on("resize",a),b.style.__removeSuperviewResize=bind(b.style,function(){this.__removeSuperviewResize=null;d&&d.removeListener("resize",a)}))};g.listenSubviewResize=function(b){b.__root&&this.addResizeListener(b);b.on("ViewAdded",bind(this,"addResizeListener",b));b.on("ViewRemoved",bind(b.style,function(){this.__removeSuperviewResize&&this.__removeSuperviewResize()}))};this.reflowX=function(b){var b=this._view,a=b.style,b=b.getSuperview();if(a.inLayout&&"linear"==b.style.layout)var d=b.__layout.isHorizontal(),
c=b.style.padding;var b=b.style.width,f=b-(c&&c.getHorizontal()||0),e;e="wrapContent"==a._layoutWidth?this.getContentWidth()+a.padding.right:!d&&b&&void 0!=a.right&&void 0!=a.left?f/a.scale-(a.left||0)-(a.right||0):b&&a._layoutWidthIsPercent?f/a.scale*a._layoutWidthValue:void 0==a.width&&b?f/a.scale:a._width;a.centerAnchor&&(a.anchorX=(e||0)/2);a._width=e;if(!d&&b&&(void 0!==e&&a.centerX&&(a.x=Math.round((f-a.scale*e)/2+(c&&c.left||0))),void 0!==e&&(void 0==a.left&&void 0!=a.right)&&(a.x=Math.round(f-
a.scale*e-a.right-(c&&c.right||0))),void 0!=a.left))a.x=Math.round(a.left+(c&&c.left||0))};this.reflowY=function(){var b=this._view,a=b.style,b=b.getSuperview();if(a.inLayout&&"linear"==b.style.layout)var d=b.__layout.isVertical(),c=b.style.padding;var b=b.style.height,f=b-(c&&c.getVertical()||0),e;e="wrapContent"==a._layoutHeight?this.getContentHeight()+a.padding.bottom:!d&&b&&void 0!=a.top&&void 0!=a.bottom?f/a.scale-(a.top||0)-(a.bottom||0):b&&a._layoutHeightIsPercent?f/a.scale*a._layoutHeightValue:
void 0==a.height&&b?f/a.scale:a.height;a.centerAnchor&&(a.anchorY=(e||0)/2);a._height=e;if(!d&&b&&(void 0!==e&&a.centerY&&(a.y=Math.round((f-a.scale*e)/2+(c&&c.top||0))),void 0!==e&&(void 0==a.top&&void 0!=a.bottom)&&(a.y=Math.round(f-a.scale*e-a.bottom-(c&&c.bottom||0))),void 0!=a.top))a.y=Math.round(a.top+(c&&c.top||0))};this.getContentWidth=function(){for(var b=0,a=this._view.getSubviews(),d=0,c;c=a[d];++d)!c.style._layoutWidthIsPercent&&c.style.visible&&(c=c.style.x+c.style.width*c.style.scale+
(c.style.right||0),c>b&&(b=c));return b};this.getContentHeight=function(){for(var b=this._view.getSubviews(),a=0,d=0,c;c=b[d];++d)!c.style._layoutHeightIsPercent&&c.style.visible&&(c=c.style.y+c.style.height*c.style.scale+(c.style.bottom||0),c>a&&(a=c));return a}});
