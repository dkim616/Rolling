bd9fae4986182a7ae17230fbdad4dcf6
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
jsio("import ui.View as View");var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_widget_Spinner=__class__;
exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_widget_Spinner(function(){return this.init&&this.init.apply(this,arguments)},View,function(k){var l={cycles:0.5,radius:10,spokes:20,thickness:2,trail:10,color:"#ffffff",backgroundColor:"rgba(0, 0, 0, 0.5)",layout:"box"};this.tag="Spinner";this._t=0;this.init=function(a){this._opts=merge(a,l);this._step=2*Math.PI/this._opts.spokes;k(this,"init",[this._opts])};this.tick=function(a){this._t+=a;var a=this._t/1E3%(1/this._opts.cycles)*
Math.PI,g=this._r;this._r=a-a%this._step;g!=a&&this.needsRepaint()};this.render=function(a){a.fillStyle=this._opts.backgroundColor;var g=a.globalAlpha,f=this.style.width,h=this.style.height,c=this._opts.radius,i=this._opts.trail,j=this._opts.thickness,b,e,d;for(e=0;e<c;++e)b=e+1,b=Math.round(c-Math.sqrt(2*b*c-b*b)),a.fillRect(b,e,f-2*b,1);e=h-c;a.fillRect(0,c,f,e-c);for(d=0;d<c;++d)b=c-d,b=Math.round(c-Math.sqrt(2*b*c-b*b)),a.fillRect(b,e+d,f-2*b,1);a.fillStyle=this._opts.color;a.translate(f/2,h/
2);f/=2;a.rotate(this._r);for(d=0;d<this._opts.spokes;++d)a.rotate(this._step),a.globalAlpha=g*Math.max(0.1,(d-i)/i),a.fillRect(10,-j/2,f-15,j)}});
