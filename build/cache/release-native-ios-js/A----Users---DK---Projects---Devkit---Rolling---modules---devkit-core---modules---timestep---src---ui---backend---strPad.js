57a6746955803b5bd0bed4d3e0be6e00
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
var LEN=8,MAX=99999999,MIN=-99999999,PAD="00000000";exports.initialValue=PAD;exports.pad=function(a){a=~~a;a<MIN&&(a=MIN);a>MAX&&(a=MAX);return 0>a?(a*=-1,"-"+PAD.substring(0,LEN-(""+a).length)+a):PAD.substring(0,LEN-(""+a).length)+a};
