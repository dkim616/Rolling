1fa451f38d2f0769aed9c7d552cdb0e7
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
var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_platforms_native_KeyListener=__class__;
exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_platforms_native_KeyListener(function(){return this.init&&this.init.apply(this,arguments)},"timestep.KeyListener",function(){this.init=function(){this._shortcuts=[];this._events=[]};this.setEnabled=function(a){this._isEnabled=a};this.captureShortcut=function(a){this._shortcuts.push(a)};this.getPressed=function(){return{}};this.onKeyDown=function(){};this.liftAll=function(){};this.onKeyUp=function(){};this.onKeyPress=
function(){};this.peekEvents=function(){return this._events};this.popEvents=function(){return this._events.splice(0,this._events.length)}});
