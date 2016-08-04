0de0fa37fb55fd4fed70d75ae2efa995
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
var LOCALE_CODES=navigator.language&&navigator.language.split("-"),LANGUAGE_CODE=(LOCALE_CODES[0]||"en").toLowerCase(),REGION_CODE=(LOCALE_CODES[1]||"US").toUpperCase(),EU_REGIONS="AD AT BE BL CY DE EE ES EU FI FR GR IE IT LU LV MC ME MT MQ NL PM PT RE SI SK SM VA YT".split(" "),Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_resource_i18n=__class__;
exports=Users_DK_Projects_Devkit_Rolling_modules_devkit_core_modules_timestep_src_ui_resource_i18n(function(){return this.init&&this.init.apply(this,arguments)},function(){var f={languageCode:LANGUAGE_CODE,regionCode:REGION_CODE,stringsPath:"resources/strings/",defaultStringsFile:"en.json"};this.init=function(a){a=merge(a,f);this._languageCode=a.languageCode;this._regionCode=a.regionCode;this._stringsPath=a.stringsPath;this._defaultStringsFile=a.defaultStringsFile;this._strings={};this.loadStrings(this._stringsPath,
this._defaultStringsFile)};this.getLanguageCode=function(){return this._languageCode};this.getRegionCode=function(){return this._regionCode};this.loadStrings=function(a,e){var c=this._languageCode,g=a+c+"-"+this._regionCode+".json",c=a+c+".json",b=a+e,d=CACHE[g]||CACHE[c]||CACHE[b];if(d)try{this._strings=JSON.parse(d)}catch(f){console.error("Error loading strings JSON:"),console.error(f)}else console.error("No JSON found for files:",g,c,b)};this.getString=function(a){var e=this._strings[a];return void 0!==
e?e:a}});exports.localizeResourceMap=function(f){var a={},e="resources-"+LANGUAGE_CODE+"-"+REGION_CODE,c="resources-"+LANGUAGE_CODE,g="resources-"+REGION_CODE,b;for(b in f){var d=b,h=b.indexOf(e),i=b.indexOf(c),j=b.indexOf(g),k=b.indexOf("resources-EU");0===h?d="resources"+b.substring(e.length):0===i?d="resources"+b.substring(c.length):0===j?d="resources"+b.substring(g.length):0===k&&-1!==EU_REGIONS.indexOf(REGION_CODE)&&(d="resources"+b.substring(12));a[d]=f[b]}return a};
