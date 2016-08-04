5dc30012a68f8ad39db7c02768d4058e
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
jsio("import device");jsio("import lib.PubSub as PubSub");var hasNativeViews=GLOBAL.NATIVE&&NATIVE.timestep&&NATIVE.timestep.View,VIEW_TYPES={DEFAULT:0,IMAGE_VIEW:1};
function installNativeView(){jsio("import .timestep.NativeView");timestep.NativeView.install();jsio("import ui.View as View");View.setDefaultViewBacking(NATIVE.timestep.View);jsio("import .timestep.NativeViewBacking");timestep.NativeViewBacking.install();jsio("import .timestep.NativeImageView");timestep.NativeImageView.install();var a=device.importUI("animate"),b=a.getViewAnimator();a.setViewAnimator(NATIVE.timestep.Animator);merge(NATIVE.timestep.Animator.prototype,PubSub.prototype);NATIVE.timestep.Animator.prototype._addToGroup=
b.prototype._addToGroup;NATIVE.timestep.Animator.prototype._removeFromGroup=b.prototype._removeFromGroup;jsio("import ui.View as View");View.prototype.__type=VIEW_TYPES.DEFAULT;jsio("import ui.ImageView as ImageView");ImageView.prototype.__type=VIEW_TYPES.IMAGE_VIEW;ImageView.prototype.render.HAS_NATIVE_IMPL=!0;logger.LOG&&console.log("LOG",".timestep","USING NATIVE VIEWS")}logger.LOG&&console.log("LOG",".timestep",typeof GLOBAL.CONFIG,GLOBAL.CONFIG&&CONFIG.disableNativeViews);
GLOBAL.CONFIG&&CONFIG.disableNativeViews||!hasNativeViews?(logger.LOG&&console.log("LOG",".timestep","USING JS VIEWS"),exports.install=function(){}):exports.install=installNativeView;
