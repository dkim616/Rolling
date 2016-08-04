f26ec19fecf262b7abfc0db0a4fd62c8
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
jsio("import ...ui.keyboardTypes");var _controllers={};NATIVE.input.subscribe("InputPromptSubmit",function(b){var a=_controllers[b.id];a?(a.setValue(b.text),a.onChange&&a.onChange(b.text),a.onSubmit&&a.onSubmit(b.text),delete _controllers[b.id]):logger.WARN&&console.warn("WARN",".inputDialog","Dropping InputPrompt event: "+JSON.stringify(b))});
NATIVE.input.subscribe("Cancel",function(b){var a=_controllers[b.id];a?(a.onChange&&a.onChange(a.getValue()),delete _controllers[b.id]):logger.WARN&&console.warn("WARN",".inputDialog","Dropping InputPrompt event: "+JSON.stringify(b))});exports.show=function(b,a){var c=NATIVE.input.openPrompt(""+a.title,""+a.message,""+a.okText,""+a.cancelText,""+a.value,!!a.autoFocus,!!a.isPassword,ui.keyboardTypes.getNativeType(a.keyboardType));_controllers[c]=b};
