import device;
import ui.StackView as StackView;

import src.GameView as GameView;
import src.Input as Input;

exports = Class(GC.Application, function () {

	this.initUI = function () {

		GLOBAL.input = new Input();

		var gameView = new GameView();

		this.stackView = new StackView({
			superview: this,
			x: 0,
			y: 0,
			width: device.width,
			height: device.height,
			clip: true,
			scale: 1
    	});

		this.stackView.push(gameView);

  	};

  	this.launchUI = function () {
  		if (this.stackView.getCurrentView() instanceof GameView) {
  			this.stackView.getCurrentView().run = true;
  		}
  	};

});
