12c2e82a4f7ebb01bfdd7a317c6b73ea
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
GLOBAL.localStorage={setItem:function(a,b){NATIVE.localStorage.setItem(a.toString(),b.toString())},getItem:function(a){return NATIVE.localStorage.getItem(a.toString()||null)},removeItem:function(a){NATIVE.localStorage.removeItem(a.toString())},clear:function(){NATIVE.localStorage.clear()},key:function(){logger.LOG&&console.log("LOG",".localStorage","ERROR: localStorage.key() unimplemented");return null}};
