26706c3cf73c9c236c8cdf4eb7009975
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
Padding=__class__;
exports=Padding=Padding(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=this.update=function(a){if(a instanceof Padding)this.top=a.top,this.right=a.right,this.bottom=a.bottom,this.left=a.left;else{"string"==typeof a&&(a=a.split(/\s+/).map(function(a){return parseFloat(a)}));if(!a||!a.length)a=[a||0];switch(a.length){case 1:this.left=this.right=this.top=this.bottom=a[0];break;case 2:this.top=this.bottom=a[0];this.left=this.right=a[1];break;case 3:this.top=a[0];this.left=
this.right=a[1];this.bottom=a[2];break;case 4:this.top=a[0],this.right=a[1],this.bottom=a[2],this.left=a[3]}}};this.getVertical=function(){return this.top+this.bottom};this.getHorizontal=function(){return this.left+this.right};this.toString=function(){return[this.top,this.right,this.bottom,this.left].join(" ")}});
