import device;
import ui.View as View;

import src.Entity.GameObject as GameObject;
import src.Entity.Square as Square;

exports = Class(View, function(supr) {

	this.init = function(opts) {
		opts = merge(opts, {
			x: 0,
			y: 0,
			width: device.width / 2,
			height: device.height / 2,
			backgroundColor: "#006688"
		});

		supr(this, "init", [opts]);

		this.setup();

		this.square = new Square(device.width / 2, device.height / 2, 50, 50, "#CCCCCC");
		this.addSubview(this.square);
	};

	this.setup = function() {
		this.on("InputStart", bind(this, function() {
			GLOBAL.input.pressDown = true;
			// GLOBAL.input.pressUp = false;
		}));

		this.on("InputOut", bind(this, function() {
			GLOBAL.input.pressDown = false;
			// GLOBAL.input.pressUp = true;
		}));
	};

});
