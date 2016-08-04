0ec5569135303c943789b27b82545bc7
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
jsio("import event.input.InputEvent as InputEvent");var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_platforms_native_Input=__class__;
exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_platforms_native_Input(function(){return this.init&&this.init.apply(this,arguments)},function(){NATIVE.timestep&&NATIVE.timestep.getEvents?(NATIVE.timestep.InputEvent||(NATIVE.timestep.InputEvent=InputEvent),this.getEvents=function(){return NATIVE.timestep.getEvents()}):this.getEvents=function(){for(var e=NATIVE.input.getTouchEvents(),b=[],c=0,d=0,a;a=e[d];++d)b[c++]=new InputEvent(a.id,a.type,a.pt),"input:select"==
a.type&&(b[c++]=new InputEvent(a.id,"input:clear",a.pt.x,a.pt.y));return b}});
