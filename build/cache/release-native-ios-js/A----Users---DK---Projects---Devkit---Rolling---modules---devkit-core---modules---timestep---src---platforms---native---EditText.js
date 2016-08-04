76ca406ee925a546edcf2405738e9243
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
jsio("import device");var focused;NATIVE.input.subscribe("KeyUp",function(b){null!=focused&&(focused._value=b.text,focused.onChange(b.text,b.prevText,b.cursorPos))});NATIVE.input.subscribe("FocusNext",function(b){b.next&&focused&&focused._textEditView&&focused._textEditView._forwardTextEditView?focused._textEditView._forwardTextEditView.requestFocus():!b.next&&(focused&&focused._textEditView&&focused._textEditView._backTextEditView)&&focused._textEditView._backTextEditView.requestFocus()});
NATIVE.input.subscribe("Submit",function(b){focused&&focused.submit(b.close)});NATIVE.events.registerHandler("editText.onFinishEditing",function(){focused&&focused.finishEditing()});var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_platforms_native_EditText=__class__;
exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_platforms_native_EditText(function(){return this.init&&this.init.apply(this,arguments)},function(){var b={hint:"",inputType:"default",maxLength:1E3,inputReturnButton:"default"};this.init=function(a){console.log("instantiate EditText with hint: "+a.hint);this._opts=merge(a,b);this._textEditView=a.textEditView;this.onFocusChange=a.onFocusChange||function(){};this.onSubmit=a.onSubmit||function(){}};this.onChange=function(a,
b,d){this._value=a;if(this._opts.onChange)this._opts.onChange(a,b,d)};this.getValue=function(){return this._value};this.setValue=function(a,b){this._value=a;this.onChange(a);NATIVE.call("editText.setText",{text:a,cursorPos:b})};this.requestFocus=function(){focused!==this&&(null!=focused&&focused.removeFocus(),this.onFocusChange(!0));focused=this};this.closeEditField=function(){focused==this&&this.removeFocus()};this.finishEditing=function(){this.onFocusChange(!1);focused==this&&(focused=null,this._textEditView.onFinishEditing(),
this._textEditView._textBox.style.visible=!0)};this.submit=function(a){this.onSubmit(this._value);null!=focused&&a&&focused.removeFocus()};this.refresh=function(a,b,d,h){var e=this._textEditView._textBox;e.style.visible=!1;var c=this._textEditView.getPosition(),f=c.width/this._textEditView.style.width,g=!0;!1===this._opts.closeOnDone&&(g=!1);NATIVE.call("editText.focus",{id:this._id,paddingLeft:this._opts.paddingLeft*f,paddingRight:this._opts.paddingRight*f,x:c.x,y:c.y,width:c.width,height:c.height,
text:a||"",hint:this._opts.hint,hintColor:this._opts.hintColor,inputType:this._opts.inputType,inputReturnButton:this._opts.inputReturnButton,maxLength:this._opts.maxLength,fontColor:this._opts.color,fontSize:e._opts.size*f,font:e._opts.fontFamily,cursorPos:h,hasBack:b,hasForward:d,closeOnDone:g})};this.hasFocus=function(){return focused==this};this.removeFocus=function(){this.onFocusChange(!1);focused==this&&(focused=null,this._textEditView._textBox.style.visible=!0,NATIVE.call("editText.clearFocus",
{}))};this.setHint=function(a){this._opts.hint=a}});
