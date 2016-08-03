import device;
import ui.View as View;

import src.entity.Square as Square;

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
		this.showDirection = true;

		this.setup();
		this.setupEvents();
	};

	this.tick = function(dt) {
		if (this.showDirection && this.squares) {
			if (this.state !== this.prevState) {
				for (var i = 0; i < 8; ++i) {
					this.squares[i].updateOpts({
						backgroundColor: "#5FFFFF"
					});
				}
				if (this.state !== this.states.neutral) {
					this.squares[this.state].updateOpts({
						backgroundColor: "#FF0000"
					});
				}
			}
		}
	};

	this.setup = function() {
		this.states = {
			up: 0,
			upRight: 1,
			right: 2,
			downRight: 3,
			down: 4,
			downLeft: 5,
			left: 6,
			upLeft: 7,
			neutral: 8
		};
		this.state = this.states.neutral;
		this.prevState = null;

		if (this.showDirection) {
			var centerWidth = device.width / 2;
			var centerHeight = device.height / 2;
			this.squares = [];
			for (var i = 0; i < 8; ++i) {
				this.squares.push(new Square(
					Math.sin((i * 45) * (Math.PI/180)) * 100 + centerWidth, 
					Math.cos(((i * 45) + 180) * (Math.PI/180)) * 100 + centerHeight,
					50, 
					50,
					"#5FFFFF"
				));
				this.addSubview(this.squares[i]);
			}
		}
	};

	this.setupEvents = function() {
		this.on("InputStart", bind(this, function(event, point) {
			this.startDrag({
				inputStartEvt:event,
				radius: 10
			});
		}));

		this.on("DragStart", bind(this, function(dragEvent) {
			// console.log(
			// 	"DragStart at:", 
			// 	dragEvent.srcPt.x, 
			// 	dragEvent.srcPt.y
			// );
		}));

		this.on("Drag", bind(this, function(startEvent, dragEvent, delta) {
			var xDiff = dragEvent.srcPt.x - startEvent.srcPt.x;
			var yDiff = dragEvent.srcPt.y - startEvent.srcPt.y;
			var distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
			var angle = Math.atan2(
				yDiff, 
				xDiff
			);

			if (distance < 50) {
				this.state = this.states.neutral;
			} else if (angle < -Math.PI * 7 / 8 || angle > Math.PI * 7 / 8) {
				this.state = this.states.left;
			} else if (angle < -Math.PI * 5 / 8) {
				this.state = this.states.upLeft;
			} else if (angle < -Math.PI * 3 / 8) {
				this.state = this.states.up;
			} else if (angle < -Math.PI / 8) {
				this.state = this.states.upRight;
			} else if (angle > Math.PI * 5 / 8) {
				this.state = this.states.downLeft;
			} else if (angle > Math.PI * 3 / 8) {
				this.state = this.states.down;
			} else if (angle > Math.PI / 8) {
				this.state = this.states.downRight;
			} else {
				this.state = this.states.right;
			}

			// console.log(
			// 	"Drag at:", 
			// 	dragEvent.srcPt.x, 
			// 	dragEvent.srcPt.y, 
			// 	"started at:", 
			// 	startEvent.srcPt.x, 
			// 	startEvent.srcPt.y, 
			// 	"delta:", delta
			// );
		}));

		this.on("DragStop", bind(this, function(dragEvent, selectEvent) {
			this.state = this.states.neutral;

			// console.log(
			// 	"DragStop at:", 
			// 	dragEvent.srcPt.x, 
			// 	dragEvent.srcPt.y, 
			// 	selectEvent.srcPt.x,
			// 	selectEvent.srcPt.y
			// );
		}));
	};

	this.setEnable = function(enable) {
		this.enabled = enable;
	};

});
