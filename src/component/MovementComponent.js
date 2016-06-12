import src.Component.Component as Component;

var MovementComponent = Class(Component, function(supr) {
	this.init = function(context) {
		supr(this, "init", arguments);

		context.on("InputStart", bind(context, function() {
			this.view.style.x += 10;
		}));
	};

	this.update = function(context, dt) {

	};
});

MovementComponent.prototype.key = "MovementComponent";

exports = MovementComponent;
