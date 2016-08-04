db387bc51f84c1a9aad6ab438bcd0a96
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
exports.linear=function(a){return a};exports.easeIn=exports.easeInQuad=function(a){return a*a};exports.easeOut=exports.easeOutQuad=function(a){return a*(2-a)};exports.easeInOutQuad=function(a){return 1>(a*=2)?0.5*a*a:-0.5*(--a*(a-2)-1)};exports.easeInCubic=function(a){return a*a*a};exports.easeOutCubic=function(a){return(a-=1)*a*a+1};exports.easeInOut=exports.easeInOutCubic=function(a){return 1>(a*=2)?0.5*a*a*a:0.5*((a-=2)*a*a+2)};exports.easeInQuart=function(a){return a*a*a*a};
exports.easeOutQuart=function(a){return-1*((a-=1)*a*a*a-1)};exports.easeInOutQuart=function(a){return 1>(a*=2)?0.5*a*a*a*a:-0.5*((a-=2)*a*a*a-2)};exports.easeInQuint=function(a){return a*a*a*a*a};exports.easeOutQuint=function(a){return(a-=1)*a*a*a*a+1};exports.easeInOutQuint=function(a){return 1>(a*=2)?0.5*a*a*a*a*a:0.5*((a-=2)*a*a*a*a+2)};exports.easeInSine=function(a){return 0==a?0:1==a?1:-1*Math.cos(a*(Math.PI/2))+1};exports.easeOutSine=function(a){return 0==a?0:1==a?1:Math.sin(a*(Math.PI/2))};
exports.easeInOutSine=function(a){return 0==a?0:1==a?1:-0.5*(Math.cos(Math.PI*a)-1)};exports.easeInExpo=function(a){return 0==a?0:1==a?1:0==a?0:Math.pow(2,10*(a-1))};exports.easeOutExpo=function(a){return 0==a?0:1==a?1:1==a?1:-Math.pow(2,-10*a)+1};exports.easeInOutExpo=function(a){return 0==a?0:1==a?1:1>(a*=2)?0.5*Math.pow(2,10*(a-1)):0.5*(-Math.pow(2,-10*--a)+2)};exports.easeInCirc=function(a){return 0==a?0:1==a?1:-1*(Math.sqrt(1-a*a)-1)};
exports.easeOutCirc=function(a){return 0==a?0:1==a?1:Math.sqrt(1-(a-=1)*a)};exports.easeInOutCirc=function(a){return 0==a?0:1==a?1:1>(a*=2)?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)};exports.easeInElastic=function(a){return 0==a?0:1==a?1:-(Math.pow(2,10*(a-=1))*Math.sin((a-0.075)*2*Math.PI/0.3))};exports.easeOutElastic=function(a){return 0==a?0:1==a?1:Math.pow(2,-10*a)*Math.sin((a-0.075)*2*Math.PI/0.3)+1};
exports.easeInOutElastic=function(a){return 0==a?0:2==(a*=2)?1:1>a?-0.5*Math.pow(2,10*(a-=1))*Math.sin((1*a-0.1125)*2*Math.PI/0.45):0.5*Math.pow(2,-10*(a-=1))*Math.sin((1*a-0.1125)*2*Math.PI/0.45)+1};exports.easeInBack=function(a){return 0==a?0:1==a?1:a*a*(2.70158*a-1.70158)};exports.easeOutBack=function(a){return 0==a?0:1==a?1:(a-=1)*a*(2.70158*a+1.70158)+1};
exports.easeInOutBack=function(a){if(0==a)return 0;if(1==a)return 1;var b=1.70158;return 1>(a*=2)?0.5*a*a*(((b*=1.525)+1)*a-b):0.5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)};exports.easeOutBounce=function(a){return 0==a?0:1==a?1:a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375};exports.easeInBounce=function(a){return 1-exports.easeOutBounce(1-a)};
exports.easeInOutBounce=function(a){return 0.5>a?0.5*exports.easeInBounce(2*a):0.5*exports.easeOutBounce(2*a-1)+0.5};
