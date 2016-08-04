2fae50a87403b007c10c2622e3f2c605
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
handlers={};NATIVE.call=function(a,b){json={};try{json=JSON.parse(NATIVE._call(a,JSON.stringify(b)))}catch(c){logger.LOG&&console.log("LOG",".events",c)}return json};NATIVE.events={};NATIVE.events.registerHandler=function(a,b){handlers[a]=b};
NATIVE.events.dispatchEvent=function(a,b){if("string"==typeof a)try{a=JSON.parse(a)}catch(c){logger.ERROR&&console.error("ERROR",".events","Parse error:",c);logger.ERROR&&console.error("ERROR",".events",a);return}a._requestId&&!b&&(b=a._requestId,delete a._requestId);var d=handlers[a.name];d&&d(a,b)};jsio("import .backButton");jsio("import .dialog");jsio("import .imageLoading");jsio("import .input");jsio("import .inputPrompt");jsio("import .log");jsio("import .offscreenBuffer");jsio("import .online");
jsio("import .overlay");jsio("import .pauseResume");jsio("import .plugins");jsio("import .purchase");jsio("import .rotation");jsio("import .soundLoading");jsio("import .windowFocus");
