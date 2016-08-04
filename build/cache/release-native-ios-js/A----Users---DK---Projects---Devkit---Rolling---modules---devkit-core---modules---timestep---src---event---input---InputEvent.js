caf1ad3eaf53ee86cf318c6a6074c030
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
jsio("import math.geom.Point as Point");jsio("import timer");
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_event_input_InputEvent=__class__,InputEvent=exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_event_input_InputEvent(function(){return this.init&&this.init.apply(this,arguments)},function(){this.cancelled=!1;this.depth=0;this.init=function(a,b,c,d,e,f){this.id=a;this.type=b;this.point=this.pt={};this.srcPoint=this.srcPt=new Point(c,d);this.trace=[];this.root=e||null;this.when=timer.now;this.target=
f||null};this.cancel=function(){this.cancelled=!0};this.clone=function(){return new InputEvent(this.id,this.type,this.srcPt.x,this.srcPt.y,this.root,this.target)}});
