668fbaf6139ecc8d4ecdca9771407315
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
function getter(a){return function(){return this._ctxShim[a]}}function setter(a){return function(b){this._ctxShim[a]=b}}function wrap(){return function(){}}var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_platforms_native_BufferedCanvas=__class__;
exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_platforms_native_BufferedCanvas(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(){this._ctxShim={}};this.getViewport=function(a){if(this._viewport){for(var b=new math2D.Rect(this._viewport),d=this._viewport.src,c=a,a=[a];c!=d;){c=c._superview;if(!c)return null;a.push(c)}for(;a.pop(););return b}};this.swap=function(){};this.reset=function(){this._buffer=[]};this.show=this.hide=
function(){throw"abstract";};this.drawImage=wrap("drawImage");this.putImageData=wrap("putImageData");this.fillRect=wrap("fillRect");this.fillCircle=function(a,b,d){this._buffer.push(["beginPath"]);this._buffer.push(["arc",[a,b,d,0,2*Math.PI,!0]]);this._buffer.push(["fill"])};this.fillText=wrap("fillText");this.measureText=wrap("measureText");this.strokeText=wrap("strokeText");this.beginPath=wrap("beginPath");this.moveTo=wrap("moveTo");this.closePath=wrap("closePath");this.lineTo=wrap("lineTo");this.arc=
wrap("arc");this.quadraticCurveTo=wrap("quadraticCurveTo");this.rect=wrap("rect");this.fillRect=wrap("fillRect");this.strokeRect=wrap("strokeRect");this.save=wrap("save");this.restore=wrap("restore");this.clip=wrap("clip");this.stroke=wrap("stroke");this.fill=wrap("fill");this.translate=wrap("translate");this.rotate=wrap("rotate");this.scale=wrap("scale")});
