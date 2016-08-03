import src.Component.Component as Component;

var MovementComponent = Class(Component, function(supr) {
	this.init = function(context) {
		supr(this, "init", Array.prototype.slice.apply(arguments, [1]));

		this.context = context;

		this.velocity = 0.05;
	};

	this.update = function(dt) {
		// Too lazy to place fix this. in front of movementInput.
		var movementInput = GLOBAL.movementInput;
		var velocity = this.velocity;
		var diagVelocity = velocity * Math.cos(Math.PI/4);
		if (movementInput.state === movementInput.states.right) {
			this.context.style.x += (velocity * dt);
		} else if (movementInput.state === movementInput.states.left) {
			this.context.style.x -= (velocity * dt);
		} else if (movementInput.state === movementInput.states.up) {
			this.context.style.y -= (velocity * dt);
		} else if (movementInput.state === movementInput.states.down) {
			this.context.style.y += (velocity * dt);
		} else if (movementInput.state === movementInput.states.upRight) {
			this.context.style.x += (diagVelocity * dt);
			this.context.style.y -= (diagVelocity * dt);
		} else if (movementInput.state === movementInput.states.downRight) {
			this.context.style.x += (diagVelocity * dt);
			this.context.style.y += (diagVelocity * dt);
		} else if (movementInput.state === movementInput.states.downLeft) {
			this.context.style.x -= (diagVelocity * dt);
			this.context.style.y += (diagVelocity * dt);
		} else if (movementInput.state === movementInput.states.upLeft) {
			this.context.style.x -= (diagVelocity * dt);
			this.context.style.y -= (diagVelocity * dt);
		}
	};

	this.roll = function() {
		this.velocity = 0.3;
		setTimeout(bind(this, function() {
			this.velocity = 0.05;
		}), 1000);
	};
});

MovementComponent.prototype.key = "MovementComponent";

exports = MovementComponent;
