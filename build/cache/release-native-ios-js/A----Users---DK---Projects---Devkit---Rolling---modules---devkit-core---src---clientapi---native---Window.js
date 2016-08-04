3d4436eed02de2359ce16c3e642f873c
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
jsio("import lib.PubSub");module.exports=new lib.PubSub;window.open=window.open||window.setLocation;window.addEventListener=function(b,a){module.exports.on(b,a)};window.removeEventListener=function(b,a){module.exports.removeListener(b,a)};window.__fireEvent=function(b,a){a||(a={});a.type=b;module.exports.publish(b,a)};
