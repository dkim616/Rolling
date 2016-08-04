383cf74bcb90021e33a79008e92769df
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
exports.install=function(){jsio("import ui.ImageView as ImageView");var a=ImageView.prototype,c=a.setImage;a.setImage=function(a,b){b&&(b.forceReload&&"string"==typeof a)&&NATIVE.gl.deleteTexture(a);var d=c.apply(this,arguments);this._img&&NATIVE.timestep.setImageOnImageView(this.__view,this._img.getMap());return d}};
