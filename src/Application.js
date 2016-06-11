import device;
import ui.StackView as StackView;

import src.GameView as GameView;

exports = Class(GC.Application, function () {

	this.initUI = function () {

		var gameView = new GameView();

		var rootView = new StackView({
			superview: this,
			x: 0,
			y: 0,
			width: device.width,
			height: device.height,
			clip: true,
			scale: 1
    	});

		rootView.push(gameView);

  	};

  	this.launchUI = function () {

  	};

});
