18fcbe1183d1eee783d9fba6bbefef67
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
NATIVE.events.registerHandler("soundLoaded",function(a){logger.LOG&&console.log("LOG",".soundLoading","sound loaded with url",a.url);var b=sounds[a.url];b&&!b.complete&&(b.complete=!0,b.onload(),delete sounds[a.url])});NATIVE.events.registerHandler("soundError",function(a){logger.LOG&&console.log("LOG",".soundLoading","sound with url",a.url,"failed to load");if(a=sounds[a.url])a.onerror()});
NATIVE.events.registerHandler("soundDuration",function(a){logger.LOG&&console.log("LOG",".soundLoading","sound with url",a.url,"is",a.duration,"seconds long");a.url in songs&&(songs[a.url].duration=a.duration,songs[a.url].durationMilliseconds=1E3*a.duration)});var sounds={},Sound=__class__,Sound=Sound(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(a){this.src=a.src||null;this.complete=a.complete||null};this.onload=this.onerror=function(){}});
NATIVE.sound.preloadSound=function(a){NATIVE.sound.loadSound(a);sounds[a]=new Sound({src:a,complete:!1});return sounds[a]};var songs={};NATIVE.sound.registerMusic=function(a,b){songs[a]=b};
