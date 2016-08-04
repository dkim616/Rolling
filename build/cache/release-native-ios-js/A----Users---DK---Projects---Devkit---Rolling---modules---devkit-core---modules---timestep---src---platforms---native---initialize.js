3f0a8699fca1eeb05dc8438e1b4a342d
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
jsio("import device");device.registerDevice("tealeaf","platforms.native");exports.init=function(){};
if(!NATIVE.gl.initialized&&(NATIVE.gl.initialized=!0,NATIVE.gl.fonts)){var data=NATIVE.gl.fonts,boldRe=/(bold|W6|wide)/i,italicRe=/(italic|oblique)/i,mediumRe=/(medium)/i,lightRe=/(light)/i,fontMap={},family;for(family in data){for(var fonts=data[family],familyMap={},keys=fonts.map(function(a){a=(a=/[\-]{1,1}(\w+)/.exec(a))?a[1]:null;return!a?"normal":boldRe.test(a)?italicRe.test(a)?"bolditalic":"bold":italicRe.test(a)?"italic":mediumRe.test(a)&&data[family].some(function(a){return lightRe.test(a)})?
"bold":"normal"}),i=0,style;style=keys[i];++i)familyMap[style]=fonts[i];fontMap[family]=familyMap}NATIVE.gl.fonts=fontMap};
