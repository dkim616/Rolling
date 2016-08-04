37b5c81309f2ea252b2fa0783420d5a6
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
jsio("import cache.LRUCache as LRUCache");jsio("import device");
var FilterRenderer=__class__,FilterRenderer=FilterRenderer(function(){return this.init&&this.init.apply(this,arguments)},function(){var k=null,o=null,j=null;this.cache=new LRUCache(1024);var p={},l={},n=0,q=!0;this.initialize=function(){k=device.get("Canvas");o=new k({useWebGL:CONFIG.useWebGL});q=!1;this.useCache=!device.isNative&&!CONFIG.useWebGL;this.useWebGL=CONFIG.useWebGL;this.useCache&&jsio("import ui.Engine").get().subscribe("Tick",this,this.onTick)};this.onTick=function(){n++;p=l;l={}};this.renderFilter=
function(b,g,c,h,e,a){q&&this.initialize();var d=b.filter,i=d.getType(),f=this.useWebGL&&"NegativeMask"!==i&&"PositiveMask"!==i;if(!d||f)return null;if(this.useCache){var m=this.getCacheKey(g.getURL(),c,h,e,a,d);if(f=this.cache.get(m))return f}var r=this.useCache&&this.testShouldCache(m);r?f=this.getCanvas(e,a):(f=o,f.width=e,f.height=a);switch(i){case "LinearAdd":this.renderColorFilter(b,g,c,h,e,a,d,"lighter",f);break;case "Tint":this.renderColorFilter(b,g,c,h,e,a,d,"source-over",f);break;case "Multiply":this.renderMultiply(b,
g,c,h,e,a,d,f);break;case "NegativeMask":this.renderMask(b,g,c,h,e,a,d.getMask(),"source-in",f);break;case "PositiveMask":this.renderMask(b,g,c,h,e,a,d.getMask(),"source-out",f)}r&&(j=(b=this.cache.put(m,f))?b.value:null);return f};this.testShouldCache=function(b){b=l[b]=p[b]||n;return 3<n-b};this.renderColorFilter=function(b,g,c,h,e,a,d,i,f){b=f.getContext("2d");b.globalCompositeOperation="source-over";g.render(b,c,h,e,a,0,0,e,a);b.globalCompositeOperation=i;b.fillStyle=d.getColorString();b.fillRect(0,
0,e,a);b.globalCompositeOperation="destination-in";g.render(b,c,h,e,a,0,0,e,a);return f};this.renderMultiply=function(b,g,c,h,e,a,d,i){for(var d=d.get(),b=i.getContext("2d"),g=g.getImageData(c,h,e,a),c=g.data,a=d.a,h=1+a*(d.r/255-1),e=1+a*(d.g/255-1),d=1+a*(d.b/255-1),a=0,f=c.length;a<f;a+=4)c[a]*=h,c[a+1]*=e,c[a+2]*=d;b.putImageData(g,0,0);return i};this.renderMask=function(b,g,c,h,e,a,d,i,f){var b=f.getContext("2d"),m=d.getSourceX(),j=d.getSourceY(),k=d.getSourceW(),l=d.getSourceH();b.globalCompositeOperation=
"source-over";d.render(b,m,j,k,l,0,0,e,a);b.globalCompositeOperation=i;g.render(b,c,h,e,a,0,0,e,a);return f};this.clearCache=function(){this.cache.removeAll()};this.getCacheKey=function(b,g,c,h,e,a){var d=a.getType();"NegativeMask"===d||"PositiveMask"===d?a=a.getMask().getURL():(a=a.get(),a=""+(255*a.a&255)+"|"+a.r+"|"+a.g+"|"+a.b);return d+"|"+b+"|"+g+"|"+c+"|"+h+"|"+e+"|"+a};this.getCanvas=function(b,g){var c;j?(c=j,c.width=b,c.height=g,j=null):c=new k({width:b,height:g});return c}});exports=new FilterRenderer;
