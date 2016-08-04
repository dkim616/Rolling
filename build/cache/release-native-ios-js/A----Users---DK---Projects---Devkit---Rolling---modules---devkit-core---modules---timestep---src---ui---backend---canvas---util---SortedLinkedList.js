1677c8704aba78b51013f6142289d496
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
var Iterator=__class__,Iterator=Iterator(function(){return this.init&&this.init.apply(this,arguments)},"Iterator",function(){this.init=this.update=function(a){this._list=a||this._list;this._current=a.head;this._count=0};this.next=function(){var a=this._current.data;this._current=this._current.next;this._count++;return a};this.current=function(){return this._current.data};this.insertBefore=function(a){this._current.insertBefore(a);this._list.count++};this.insertAfter=function(a){this._current.insertAfter(a);
this._list.count++};this.remove=function(){this._current.prev.remove();this._current.prev==this._current&&(this._list.head=null);this._list.count--};this.hasNext=function(){return this._count<this._list.count};this.atHead=function(){return this._current==this._list.head}}),Item=__class__,Item=Item(function(){return this.init&&this.init.apply(this,arguments)},"Item",function(){this.init=function(a,b,c){this.data=a;this.prev=b||this;this.next=c||this};this.insertBefore=function(a){a=new Item(a,this.prev,
this);this.prev=this.prev.next=a};this.insertAfter=function(a){a=new Item(a,this,this.next);this.next=this.next.prev=a};this.remove=function(){this.prev.next=this.next;this.next.prev=this.prev}}),Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_canvas_util_SortedLinkedList=__class__;
exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_backend_canvas_util_SortedLinkedList(function(){return this.init&&this.init.apply(this,arguments)},"SortedLinkedList",function(){this.init=function(a){this.head=null;this._comparator=a;this.count=0};this.append=function(a){this._head.insertAfter(a);this.count++};this.insert=function(a){if(this.head){for(var b=this.iterator(),c=b.current(),d=!1;b.hasNext()&&!d;)d=!this._comparator(a,c),d||(b.next(),c=b.current());
b.insertBefore(a);d&&b.atHead()&&(this.head=this.head.prev)}else this.head=new Item(a),this.count++};this.iterator=function(){return new Iterator(this)}});
