exports = Class(View, function(supr) {

	this.init = function(x, y, width, height, enabled, opts) {
		supr(this, "init", [opts]);

		this.updateOpts({
			x: x,
			y: y,
			width: width,
			height: height
		});

		this.enabled = enabled;

		this.on("InputStart", bind(this, function() {
			
		});
	};

});
