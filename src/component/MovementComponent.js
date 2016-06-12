import src.Component.Component as Component;

var MovementComponent = Class(Component, function(supr) {
	this.init = function(context) {
		supr(this, "init", arguments);
	};

	this.update = function(context, dt) {
		if (GLOBAL.input.pressDown) {
			context.style.x += (0.3 * dt);
		}
	};
});

MovementComponent.prototype.key = "MovementComponent";

exports = MovementComponent;
