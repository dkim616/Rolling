3cee6398f6ae0d012d9fafc7c489e516
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
jsio("import lib.PubSub");merge(NATIVE.gl,lib.PubSub.prototype);var loadingImages={},canvasImages={};NATIVE.camera.getPicture=function(a,b){var a=a||64,b=b||NATIVE.camera.getNextId(),c="@CAMERA"+b+"-"+a,d=new Image;d.src=c;return d};NATIVE.gallery.choosePicture=function(a,b){var a=a||64,b=b||NATIVE.gallery.getNextId(),c="@GALLERYPHOTO"+b+"-"+a,d=new Image;d.src=c;return d};
NATIVE.gl.loadImage=function(a){var b=NATIVE.gl._loadImage(a._src);b?setTimeout(function(){a._onload(b.width,b.height,b.name)},0):(loadingImages[a._src]||(loadingImages[a._src]=[]),loadingImages[a._src].push(a))};
NATIVE.events.registerHandler("imageLoaded",function(a){var b=a.url;"data:image/"==b.substring(0,11)&&(b="<base64>");NATIVE.gl.publish("imageLoaded",a);logger.DEBUG&&console.debug("DEBUG",".imageLoading","imageLoaded:",b,a.originalWidth+"x"+a.originalHeight,"("+a.width+"x"+a.height+")");b=loadingImages[a.url];delete loadingImages[a.url];b&&b.forEach(function(b){b._onload(a.originalWidth,a.originalHeight,a.glName);GLOBAL.GC&&GC.app&&GC.app.engine&&GC.app.engine.needsRepaint()})});
NATIVE.events.registerHandler("imageError",function(a){var b=loadingImages[a.url];b&&(b.forEach(function(a){a._onerror&&a._onerror()}),delete loadingImages[a.url])});NATIVE.gl.makeCanvas=function(a,b,c){a=NATIVE.gl.newTexture(a,b);b=a._src;canvasImages[b]=c;logger.LOG&&console.log("LOG",".imageLoading","{canvas-registry} Registering canvas:",b);return a};NATIVE.gl.updateCanvasURL=function(a,b){canvasImages[b]=canvasImages[a];delete canvasImages[a]};
NATIVE.gl.forgetCanvas=function(a){logger.LOG&&console.log("LOG",".imageLoading","{canvas-registry} Forgetting canvas:",a);canvasImages[a]&&delete canvasImages[a]};NATIVE.events.registerHandler("canvasFreed",function(a){a=a.url;logger.LOG&&console.log("LOG",".imageLoading","{canvas-registry} Notifying of lost canvas:",a);var b=canvasImages[a];b&&("function"===typeof b&&b(a),delete canvasImages[a])});
