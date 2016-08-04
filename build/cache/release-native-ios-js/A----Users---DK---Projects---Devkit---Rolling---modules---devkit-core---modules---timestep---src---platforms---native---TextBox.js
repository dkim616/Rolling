7f2047e3c21744cb8ef3048d6deeff09
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
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_platforms_native_TextBox=__class__;
exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_platforms_native_TextBox(function(){return this.init&&this.init.apply(this,arguments)},function(){var b=NATIVE.textbox,c=Array.prototype.slice,f={x:0,y:0,width:100,height:30,text:"",color:"white"};this.init=function(a){logger.LOG&&console.log("LOG",".TextBox","in init");a=merge(a,f);logger.LOG&&console.log("LOG",".TextBox","making a textbox with opts",JSON.stringify(a));this._id=b.create(a.x,a.y,a.width,a.height,a.text)};
for(var g="destroy show hide setValue setOpacity setType setVisible getX getY getWidth getHeight getValue getOpacity getType getVisible".split(" "),d=0,e;e=g[d];++d)bind(this,function(a){this[a]=/^get/.test(a)?function(){return b[a].apply(b,[this._id].concat(c.call(arguments,0)))}:function(){b[a].apply(b,[this._id].concat(c.call(arguments,0)));return this}})(e);this.setPosition=function(a){b.setPosition(this._id,a.x,a.y);return this};this.getPosition=function(){return{x:this.getX(),y:this.getY()}};
this.setDimensions=function(a){b.setDimensions(this._id,a.width,a.height);return this};this.getDimensions=function(){return{width:this.getWidth(),height:this.getHeight()}};this.setApp=function(){};this.setOpacity=function(a){b.setOpacity(this._id,a)};this.setVisible=function(a){a?b.show(this._id):b.hide(this._id)};this.setValue=function(a){b.setValue(this._id,a)}});
