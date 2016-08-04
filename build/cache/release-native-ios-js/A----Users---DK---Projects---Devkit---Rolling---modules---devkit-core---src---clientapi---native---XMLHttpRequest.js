1fa1b1d946e39d13ce36fc2d33549e9f
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
var XMLHttpRequest=__class__,XMLHttpRequest=XMLHttpRequest(function(){return this.init&&this.init.apply(this,arguments)},function(){this.init=function(){this.readyState=0;this.responseText=null;this._requestHeaders={};this.__id=id};this.open=function(a,b,c){this._method=a;this._url=""+b;this._async=c||!1;this.readyState=1;this.status=0;this._async||logger.WARN&&console.warn("WARN",".XMLHttpRequest","synchronous xhrs not supported")};this.getResponseHeader=function(a){return this._responseHeadersLowerCase[a.toLowerCase()]};
this.getAllResponseHeaders=function(){var a=[],b=this._responseHeaders,c;for(c in b)b.hasOwnProperty(c)&&a.push(c+": "+b[c]);return a.join("\r\n")};this.setRequestHeader=function(a,b){this._requestHeaders[a]=b};this.send=function(a){this._data=a||"";xhrs[id++]=this;NATIVE.xhr.send(this._method,this._url,this._async,this._data,0,this.__id,this._requestHeaders)};this.uploadFile=function(a){this._filename=a;xhrs[id++]=this;NATIVE.xhr.uploadFile(this.__id,this._filename,this._url,this._async,this._requestHeaders)};
this._onreadystatechange=function(a,b,c){this.readyState=a;this.status=b;this.responseText=c||null;this.response=c||null;if("function"===typeof this.onreadystatechange)this.onreadystatechange()};this.onreadystatechange=function(){}}),xhrs={},id=0;
exports.install=function(){GLOBAL.XMLHttpRequest=XMLHttpRequest;NATIVE.events.registerHandler("xhr",function(a){var b=xhrs[a.id];if(b){for(var c={},e={},d=0,f=a.headerKeys.length;d<f;d++)e[a.headerKeys[d].toLowerCase()]=c[a.headerKeys[d]]=a.headerValues[d];b._responseHeaders=c;b._responseHeadersLowerCase=e;b._onreadystatechange(a.state,a.status,a.response)}delete xhrs[a.id]})};
