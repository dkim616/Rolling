72f21ef054eb9eecffcb28aafc4ebf8a
exports.method=function(b,c,a){b[c]=DEBUG?function(){logger.ERROR&&console.error("ERROR",".debug.deprecated","@deprecated",c,b.constructor.name);if(a)return a.apply(this,arguments)}:a||function(){}};
