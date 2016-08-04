36e0cfe1fc06c3ae1e368fa7ca85a7de
jsio("import .Image");exports.cache={};exports.clear=function(){exports.cache={}};exports.getImage=function(b,c){var a;c||(a=exports.cache[b]);a||(a=exports.cache[b]=new Image({url:b,forceReload:!!c}));return a};
