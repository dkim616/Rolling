import device;
import ui.View as View;

exports = Class(View, function(supr) {

	this.init = function(opts) {
		opts = merge(opts, {
			x: 0,
			y: 0,
			width: device.width,
			height: device.height
		});

		supr(this, 'init', [opts]);
	};

});
