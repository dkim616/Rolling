867b7c4460cbcb6ec9900da229d09afb
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
jsio("import ui.View as View");jsio("import animate");var Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_StackView=__class__;
exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_StackView(function(){return this.init&&this.init.apply(this,arguments)},View,function(e){this.init=function(a){a=merge(a,{layout:"box"});e(this,"init",[a]);this.stack=[]};this.getStack=function(){return this.stack};this.getCurrentView=function(){return!this.stack.length?null:this.stack[this.stack.length-1]};this.push=function(a,b,c){!this.stack[0]&&!1!==b&&(b=!0);var d=this.getCurrentView();d&&this._hide(d,b);a.style.y=
0;a.style.width=this.style.width/a.style.scale;a.style.height=this.style.height/a.style.scale;this.stack.push(a);this._show(a,b,c);return a};this._hide=function(a,b,c){a.publish("ViewWillDisappear");b?(this.removeSubview(a),a.publish("ViewDidDisappear")):(this.getInput().blockEvents=!0,animate(a).then({x:(c?1:-1)*this.style.width}).then(bind(this,function(){this.removeSubview(a);a.publish("ViewDidDisappear");this.getInput().blockEvents=!1})))};this._show=function(a,b,c){a.publish("ViewWillAppear");
a.style.visible=!0;b?(this.addSubview(a),a.style.x=0,a.publish("ViewDidAppear")):(a.style.x=(c?-1:1)*this.style.width,this.addSubview(a),animate(a).then({x:0}).then(bind(a,"publish","ViewDidAppear")))};this.hasView=function(a){return 0<=this.stack.indexOf(a)};this.remove=function(a){a=this.stack.indexOf(a);0<=a&&this.stack.splice(a,1)};this.pop=function(a,b){if(!this.stack.length)return!1;var c=this.stack.pop();this._hide(c,a,!1===b?!1:!0);this.stack.length&&this._show(this.stack[this.stack.length-
1],a,!0);return c};this.popAll=function(a){for(;this.stack[1];)this.pop(a)}});
