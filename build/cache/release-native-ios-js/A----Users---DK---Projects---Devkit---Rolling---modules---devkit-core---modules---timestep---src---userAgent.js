5b73fbdf30ee87dea8a7160243fcf738
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
var UserAgent=__class__,UserAgent=UserAgent(function(){return this.init&&this.init.apply(this,arguments)},function(){var a=navigator&&navigator.userAgent,i=/TeaLeaf/.test(a),j=/iPod|iPhone|iPad/i.test(a),h=/Android/.test(a),k=/Mac OS X [0-9_]+/.test(a),l=/iPhone OS/.test(a),m=/Safari/.test(a),n=/Chrome/.test(a),o=/Firefox/.test(a),p=GLOBAL.CONFIG&&!!CONFIG.simulator,f="unknown",g="unknown",b="unknown",c="unknown",d="unknown",e="unknown";i?(f="native",g="mobile"):(f="browser",g=j||h?"mobile":"desktop");
h?(b="Android",osVersionString=a.match(/Android[/\s][\d.]+/)[0],c=osVersionString.match(/[\d.]+/)[0]):l?(b="iPhone OS",osVersionString=a.match(/iPhone OS [0-9_]+/)[0],c=osVersionString.match(/[0-9_]+/)[0].replace(/_/g,".")):k&&(b="Mac OS X",osVersionString=a.match(/Mac OS X [0-9_]+/)[0],c=osVersionString.match(/[0-9_]+/)[0].replace(/_/g,"."));n?(e="Chrome",browserVersionString=a.match(/Chrome[/\s][\d.]+/)[0],d=browserVersionString.match(/[\d.]+/)[0]):m?(e="Safari",browserVersionString=a.match(/Safari[/\s][\d.]+/)[0],
d=browserVersionString.match(/[\d.]+/)[0]):o&&(e="Firefox",browserVersionString=a.match(/Firefox[/\s][\d.]+/)[0],d=browserVersionString.match(/[\d.]+/)[0]);this.USER_AGENT=a;this.OS_TYPE=b;this.OS_VERSION=c;this.APP_RUNTIME=f;this.DEVICE_TYPE=g;this.BROWSER_TYPE=e;this.BROWSER_VERSION=d;this.SIMULATED=p});exports=new UserAgent;
