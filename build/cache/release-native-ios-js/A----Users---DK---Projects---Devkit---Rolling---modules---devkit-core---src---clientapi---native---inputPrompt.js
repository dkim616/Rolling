76d16d2b4dc906fe75fe550729e98ead
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
jsio("import lib.PubSub");jsio("import device");merge(NATIVE.input,lib.PubSub.prototype);NATIVE.events.registerHandler("InputPromptSubmit",function(a){NATIVE.input.publish("InputPromptSubmit",a)});NATIVE.events.registerHandler("InputKeyboardSubmit",function(a){NATIVE.input.publish("Submit",a)});NATIVE.events.registerHandler("InputKeyboardCancel",function(a){NATIVE.input.publish("Cancel",a)});NATIVE.events.registerHandler("InputKeyboardKeyUp",function(a){NATIVE.input.publish("KeyUp",a)});
NATIVE.events.registerHandler("InputKeyboardFocusNext",function(a){NATIVE.input.publish("FocusNext",a)});var __keyboardIsOpen=!1;NATIVE.events.registerHandler("keyboardScreenResize",function(a){a.height<0.75*device.screen.height?(a.opened=!0,window.__fireEvent("keyboardScreenResize",a),__keyboardIsOpen||(__keyboardIsOpen=!0,window.__fireEvent("keyboardOpened",a))):__keyboardIsOpen&&(a.opened=!1,window.__fireEvent("keyboardScreenResize",a),__keyboardIsOpen=!1,window.__fireEvent("keyboardClosed",a))});
