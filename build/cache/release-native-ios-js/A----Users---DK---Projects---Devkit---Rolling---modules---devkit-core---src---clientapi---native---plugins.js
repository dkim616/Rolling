79b3579a8240942dd44da02a028b65ce
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
jsio("import lib.Callback");jsio("import lib.PubSub");var pluginsPubSub=new lib.PubSub;NATIVE.plugins.publish=bind(pluginsPubSub,"publish");NATIVE.plugins.subscribe=bind(pluginsPubSub,"subscribe");NATIVE.plugins.subscribeOnce=bind(pluginsPubSub,"subscribeOnce");NATIVE.plugins.unsubscribe=bind(pluginsPubSub,"unsubscribe");NATIVE.events.registerHandler("plugins",function(a,b){if(b){var c=_requestCbs[b];delete _requestCbs[b];c&&c(a.error,a.response)}else NATIVE.plugins.publish("Plugins",a.data)});
NATIVE.events.registerHandler("pluginEvent",function(a){var b=GC.plugins.getPlugin(a.pluginName);b?b.publish(a.eventName,a.data):logger.WARN&&console.warn("WARN",".plugins","plugin",a.pluginName,"not found")});var _requestId=0,_requestCbs={};
NATIVE.plugins.sendRequest=function(a,b,c,d){"function"==typeof c&&(d=c,c=null);var e=++_requestId;_requestCbs[e]=d;var f;if(c)try{f=JSON.stringify(c)}catch(g){logger.ERROR&&console.error("ERROR",".plugins",g)}NATIVE.plugins._sendRequest.call(this,a,b,f||"{}",e)};
