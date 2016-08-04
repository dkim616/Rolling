39d2eaea410478169a52724e41dbfb18
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
exports.install=function(){jsio("import device");jsio("import ui.backend.BaseBacking as BaseBacking");var b=device.importUI("ViewBacking"),a=NATIVE.timestep.View.prototype;if(a&&(b=b.prototype,a.__proto__=BaseBacking.prototype,a.__firstRender=!0,a.copy||(a.copy=b.copy),!a.localizePoint&&a.localizePt))a.localizePoint=a.localizePt};
