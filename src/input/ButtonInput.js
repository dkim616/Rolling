import ui.View as View;

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
		this.action = null;
		this.testAction = true;

		this.setup();
		this.setupEvents();
	};

	this.setup = function() {
	};

	this.setupEvents = function() {
		this.on("InputStart", function() {
			if (this.enabled && this.action) {
				console.log(this.action);
				this.action();

				if (this.testAction) {
					this.updateOpts({
						backgroundColor: "#FFFFFF"
					});
				}
			}
		});

		this.on("InputSelect", function() {
			if (this.enabled && this.testAction) {
				if (this.testAction) {
					this.updateOpts({
						backgroundColor: "rgba(0, 0, 0, 0)"
					});
				}
			}
		});

		this.on("InputOut", function() {
			if (this.enabled && this.testAction) {
				if (this.testAction) {
					this.updateOpts({
						backgroundColor: "rgba(0, 0, 0, 0)"
					});
				}
			}
		});
	};

	this.setAction = function(context, action) {
		this.action = bind(context, action);
	};

	this.setEnable = function(enable) {
		this.enabled = enable;
	};

});
