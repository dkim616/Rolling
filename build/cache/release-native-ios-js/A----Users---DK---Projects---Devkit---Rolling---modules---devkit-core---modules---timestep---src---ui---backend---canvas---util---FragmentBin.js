3f26e099b8765b667b234265ae5addd8
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
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_canvas_util_FragmentBin=__class__,FragmentBin=exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_canvas_util_FragmentBin(function(){return this.init&&this.init.apply(this,arguments)},"TextBin",function(){this.init=function(a){this.width=a.width;this.height=a.height;this.x=a.x;this.y=a.y};this.size=function(){return this.width*this.height};this.split=function(a,b){var c=
[this];if(10<this.width&&10<this.height){if(10<this.height-b){var d=new FragmentBin({x:this.x,y:this.y+b,width:this.width,height:this.height-b});c.push(d)}10<this.width-a&&(d=new FragmentBin({x:this.x+a,y:this.y,width:this.width-a,height:b}),c.push(d))}this.width=a;this.height=b;this.filled=!0;return c}});
