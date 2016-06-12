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

		this.square = new Square(device.width / 2, device.height / 2, 50, 50, "#CCCCCC");
		this.addSubview(this.square);
	};

});
