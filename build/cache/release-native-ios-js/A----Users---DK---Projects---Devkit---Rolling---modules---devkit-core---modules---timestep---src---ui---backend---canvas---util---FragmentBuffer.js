342583b9980c0ded5b092a142fd91cea
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
jsio("import device");jsio("import .FragmentBin");jsio("import .SortedLinkedList as SortedList");
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_canvas_util_FragmentBuffer=__class__,FragmentBuffer=exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_canvas_util_FragmentBuffer(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(a){this.opts=merge(a,{});this._cache={};this._decriptions=[];window.addEventListener("pageshow",bind(this,"clearBuffer"),!1)};var c=function(a,b){return a.size()>
b.size()};this._build=function(){this._canvas=new (device.get("Canvas"))({width:1024,height:1024});this._ctx=this.getCanvas().getContext("2d",bind(this,function(){logger.LOG&&console.log("LOG",".util.FragmentBuffer","{fragment-buffer} Reacting to lost canvas by clearing text buffer");this._canvas=null;this.clearBuffer()}));this._ctx.clearRect(0,0,1024,1024);this._ctx.textAlign="left";this._ctx.textBaseline="middle";this._ctx.globalCompositeOperation="source-over";this._binList=new SortedList(c);this._binList.insert(new FragmentBin({x:0,
y:0,width:1024,height:1024}))};this.getCanvas=function(){this._canvas||this._build();return this._canvas};this.getContext=function(){this._ctx||this._build();return this._ctx};this.onGetHash=function(){throw Error("onGetHash should be implemented.");};this._insertText=function(a){for(var b=Math.ceil(a.width)+1,d=Math.ceil(a.height)+1,c=this._binList.iterator(),a=null,e=!1;c.hasNext()&&!e;)a=c.next(),!a.filled&&a.width>=b&&a.height>=d?e=!0:a=null;if(a){newBins=a.split(b,d);for(b=0;b<newBins.length;b++)this._binList.insert(newBins[b])}else logger.LOG&&
console.log("LOG",".util.FragmentBuffer","buffer full, further TextViews will not be cached");return a};this.getPositionForText=function(a){var b=this.onGetHash(a),c=Math.ceil(a.width)+1;!this._cache[b]&&0<c&&(this._cache[b]=this._insertText(a,!1),this._decriptions.push(a));return this._cache[b]};this.releaseBin=function(){};this.clearBuffer=function(){this._cache={};this._binList=new SortedList(c);this._binList.insert(new FragmentBin({x:0,y:0,width:1024,height:1024}));for(this._ctx&&this._ctx.clearRect(0,
0,1024,1024);this._decriptions.length;)this._decriptions.pop().textView.updateCache()}});
