1fec4fc2f4cf8f3c02b60bbd8e2154cc
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
jsio("import device");jsio("import .debug.deprecated as deprecated");var inputDialog=device.get("inputDialog"),Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_InputPrompt=__class__;
exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_InputPrompt(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(a){function b(b,c){return void 0!==a[b]?a[b]:c}a=a||{};this._opts=merge({title:b("title",""),value:b("value",""),okText:b("okText","ok"),cancelText:b("cancelText","cancel"),message:b("message",b("prompt","")),autoFocus:!!b("autoFocus",b("autoShowKeyboard",!0)),isPassword:!!b("isPassword",!1),keyboardType:b("keyboardType",
"default"),defaultBrowserStyles:b("defaultBrowserStyles",!0)},a);this.onChange=this._opts.onChange;this.onSubmit=this._opts.onSubmit;DEBUG&&jsio("import .debug.types").check("InputPrompt",{title:{value:this._opts.title,type:"string",required:!0},"message (prompt)":{value:this._opts.message,type:"string",required:!0},"ok text":{value:this._opts.okText,type:"string",required:!0},"cancel text":{value:this._opts.cancelText,type:"string",required:!0},value:{value:this._opts.value,type:"string",required:!0},
"auto-show keyboard":{value:this._opts.autoShowKeyboard,type:"boolean",require:!0},"is password field":{value:this._opts.isPassword,type:"boolean",require:!0},"keyboard type":{value:this._opts.keyboardType,type:"key",dictionary:exports.KeyboardTypes.htmlTypes,toLowerCase:!0,require:!0}})};this.show=function(){this._prompt=inputDialog.show(this,this._opts)};this.getValue=function(){return this._opts.value};this.setValue=function(a){this._opts.value=a;return this};this.setOkButton=function(a){this._opts.okText=
a;return this};this.setCancelButton=function(a){this._opts.cancelText=a;return this};this.setKeyboardType=function(a){this._opts.keyboardType=a;return this};this.setMessage=function(a){this._opts.message=a;return this};deprecated.method(this,"requestFocus",function(){this.show();return this});deprecated.method(this,"closeEditField");deprecated.method(this,"refresh");deprecated.method(this,"setHint")});jsio("import .keyboardTypes as exports.KeyboardTypes");
