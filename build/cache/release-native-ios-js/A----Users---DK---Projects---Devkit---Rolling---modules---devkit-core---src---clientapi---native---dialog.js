1cfe3715af62ecece6fcad22dff93db5
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
"use import";var dialogId=0,dialogCallbacks={};NATIVE.dialogs.showDialog=function(c,b,a,d){for(var f=[],g=[],h=[],i=d.length,e=0;e<i;e++)f[e]=d[e].label,g[e]=d[e].callback;for(e=0;e<i;e++)h[e]=dialogId,dialogCallbacks[dialogId]=g[e],dialogId++;NATIVE.dialogs._showDialog(c,b,a,f,h)};
NATIVE.dialogs.showUpdate=function(c,b,a,d,f,g){c=c||CONFIG.title+" has been updated!";b=b||"There's an update for "+CONFIG.title+"! Do you want to apply it?";NATIVE.dialogs.showDialog(c,b,f,[{label:a||"OK",callback:function(){g()}},{label:d||"Not now",callback:function(){}}])};
NATIVE.dialogs.showCrossPromo=function(c,b,a){var d="We noticed you've enjoyed "+CONFIG.title+" and we think you might enjoy "+b+". Do you want to try it?";NATIVE.dialogs.showDialog("Try "+b+"!",d,a||null,[{label:"Sure!",callback:function(){NATIVE.startGame(c)}},{label:"Maybe layer",callback:function(){}}])};
NATIVE.dialogs.showAppRater=function(c,b,a){c=c||"Rate "+CONFIG.title;b=b||"It looks like you're enjoying "+CONFIG.title+". Please take a moment to rate it. Thanks!";if(!a){var d=CONFIG.splash,a=d.landscape768;a||(a=d.landscape1536);a||(a=d.portrait480);a||(a=d.portrait960);a||(a=d.portrait1024);a||(a=d.portrait1136);a||(a=d.portrait2048)}NATIVE.dialogs.showDialog(c,b,a,[{label:c,callback:function(){GLOBAL.setLocation(NATIVE.market.url)}},{label:"Remind me later",callback:function(){}},{label:"No thanks",
callback:function(){}}])};NATIVE.events.registerHandler("dialogButtonClicked",function(c){var b=dialogCallbacks[c.id];b&&b instanceof Function&&(b(),delete dialogCallbacks[c.id])});
