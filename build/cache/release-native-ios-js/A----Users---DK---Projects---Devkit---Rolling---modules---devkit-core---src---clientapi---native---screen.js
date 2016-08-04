a881308b57ea6bac078aba9fa2741a3b
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
jsio("import device");
NATIVE.screen.onResize=function(a,b){logger.LOG&&console.log("LOG",".screen","native screen resize",a,b);window.screen.width=a;window.screen.height=b;device.screen.publish("Resize",a,b);a>b?(device.screen.isPortrait=!1,device.screen.isLandscape=!0,device.screen.orientation="landscape"):(device.screen.isPortrait=!0,device.screen.isLandscape=!1,device.screen.orientation="portrait");device.screen.width=a;device.screen.height=b;device.width=a;device.height=b;device.screen.publish("Resize",a,b);logger.LOG&&
console.log("LOG",".screen","onResize",JSON.stringify(device.screen))};
