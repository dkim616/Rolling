1d8164d2d63143ecd05dc74d11b4e06e
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
jsio("import ui.Color as Color");jsio("import ui.filter as filter");jsio("import ui.resource.Font as Font");var max=Math.max,_customFonts={},_customFontInfo={};exports.init=function(){var a=window.CONFIG;if(a&&a.fonts)for(var a=a.fonts,c=0,d=a.length;c<d;c++){var b=a[c],e={fontName:b.fontName,settings:b,imagesLoaded:-1,imagesTotal:0,loaded:!1};_customFonts[b.fontName]=e;loadingCustomFont(e)}};
var loadCustomFontImage=function(a,c,d){var b=new Image,c="resources/fonts/"+a.fontName+"_"+c+(d?"_Stroke.png":".png");b.onload=function(){b.onload=null;a.imagesLoaded++;a.loaded=a.imagesLoaded===a.imagesTotal};b._src=c;b.src=c;return b},findVerticalInfo=function(a){for(var c=[{start:65,end:90},{start:97,end:122},{start:32,end:255}],d=!1,b=0,e=0,g=0,f=c.length;g<f;g++){for(var h=c[g],i=h.start;i<=h.end;i++){var j=a[i];j&&(b=max(b,j.h),e=max(e,j.h),d=!0)}if(d)break}return{baseline:b,bottom:e}},findHorizontalInfo=
function(a){for(var c=[{start:97,end:122},{start:65,end:90},{start:32,end:255}],d=0,b=0,e=0,g=c.length;e<g;e++){for(var f=c[e],h=f.start;h<=f.end;h++){var i=a[h];i&&(d+=i.w,b++)}if(0!==b)break}return{width:0.8*d/b}},loadingCustomFont=function(a){if(-1!==a.imagesLoaded)return!a.loaded;var c=a.settings,d=c.fontName,b=_customFontInfo[d];b?(a.dimensions=b.dimensions,a.horizontal=b.horizontal,a.vertical=b.vertical):(a.dimensions=JSON.parse(CACHE["resources/fonts/"+d+".json"]),a.horizontal=findHorizontalInfo(a.dimensions),
a.vertical=findVerticalInfo(a.dimensions),_customFontInfo[d]={dimensions:a.dimensions,horizontal:a.horizontal,vertical:a.vertical});for(var d=a.images=[],b=a.strokeImages=[],e=a.imagesLoaded=0;e<c.count;e++)d.push(loadCustomFontImage(a,e,!1)),a.imagesTotal++,a.settings.stroke&&(b.push(loadCustomFontImage(a,e,!0)),a.imagesTotal++);return!0};
exports.findFontInfo=function(a){var a=Font.parse(a.font),c=a.getName();return c&&_customFonts[c]?(customFont=_customFonts[c],a.customFont=customFont,a.scale=a.getSize()/customFont.settings.size,a):null};exports.wrapMeasureText=function(a){return function(c){var d=exports.findFontInfo(this);if(!d||loadingCustomFont(d.customFont))return a.apply(this,arguments);d=this._ctx.measureTextBitmap(c+"",d);return d.failed?a.apply(this,arguments):d}};
exports.wrapFillText=function(a){return function(c,d,b,e){var g=exports.findFontInfo(this);if(!g)return a.apply(this,arguments);if(!loadingCustomFont(g.customFont)){var f=Color.parse(this.fillStyle);this.__compositeColor!==f&&(this.__compositeColor=f,this.__compositeFilter||(this.__compositeFilter=new filter.MultiplyFilter(f)),this.__compositeFilter.update(f));this.setFilter(this.__compositeFilter);if(!this._ctx.fillTextBitmap(this,d,b,c+"",e,this.fillStyle,g,0))return a.apply(this,arguments)}}};
exports.wrapStrokeText=function(a){return function(c,d,b,e){var g=exports.findFontInfo(this);if(!g)return a.apply(this,arguments);if(!loadingCustomFont(g.customFont)){var f=Color.parse(this.strokeStyle);this.__compositeStrokeColor!==f&&(this.__compositeStrokeColor=f,this.__compositeStrokeFilter||(this.__compositeStrokeFilter=new filter.MultiplyFilter(f)),this.__compositeStrokeFilter.update(f));this.setFilter(this.__compositeStrokeFilter);if(!this._ctx.fillTextBitmap(this,d,b,c+"",e,this.strokeStyle,
g,1))return a.apply(this,arguments)}}};
