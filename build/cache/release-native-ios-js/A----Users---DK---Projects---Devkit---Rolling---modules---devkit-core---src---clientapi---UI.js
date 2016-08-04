f31234354edb7d8f4963b0dd16d7dfe2
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
jsio("import device");jsio("import ui.widget.Spinner as Spinner");var config=window.CONFIG,Users_DK_Projects_Devkit_Rolling_modules_devkit_core_src_clientapi_UI=__class__;
exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_src_clientapi_UI(function(){return this.init&&this.init.apply(this,arguments)},function(){this._spinnerCounter=0;jsio("import device");var a;this._scale=a=navigator.displayMetrics?navigator.displayMetrics.densityDpi/160:!CONFIG.scaleDPR&&device.isMobileBrowser?1:window.devicePixelRatio||1;this.setTargetDensity=function(b){switch(b){case "high":this._scale=0.5*a;break;case "medium":this._scale=0.75*a;break;default:this._scale=a}logger.LOG&&
console.log("LOG",".UI","scale:",this._scale)};this.getScale=function(){return this._scale};this.getIntValue=function(b){return Math.round(b*this._scale)/this._scale};this.showSpinner=function(){if(this._spinnerCounter)++this._spinnerCounter;else{var b=GC.app.view;if(b)if(++this._spinnerCounter,this._spinner)b.addSubview(this._spinner);else{var a=50*device.screen.devicePixelRatio;this._spinner=new Spinner({width:a,height:a,x:b.style.width/2-a/2,y:b.style.height/2-a/2,parent:b})}}};this.hideSpinner=
function(){--this._spinnerCounter;0>=this._spinnerCounter&&(this._spinnerCounter=0,this._spinner&&this._spinner.removeFromSuperview())}});
