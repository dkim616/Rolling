import device;
import ui.View as View;

import src.component.MovementComponent as MovementComponent;
import src.entity.GameObject as GameObject;
import src.entity.Player as Player;
import src.entity.Square as Square;
import src.input.ButtonInput as ButtonInput;
import src.input.MovementInput as MovementInput;

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

		// this.square = new Square(device.width / 2, device.height / 2, 50, 50, "#CCCCCC");
		// this.topSquare = new Square(device.width / 2, device.height / 2 - 25, 50, 50, "#FFFFFF");
		// this.addSubview(this.square);
		// this.addSubview(this.topSquare);
	};

	this.setup = function() {
		this.setupGameStage();
		this.setupUI();
		this.setupInputs();

		this.on("InputStart", function(event, point) {
			// console.log("InputStart at:", point.x, point.y);
			// GLOBAL.input.pressDown = true;
			// GLOBAL.input.pressUp = false;
			this.startDrag({
				inputStartEvt: event,
				radius: 10
			});
		});

		this.on("InputOut", bind(this, function(over, overCount, atTarget) {
			// console.log("InputOut:", over, overCount, atTarget);
			// GLOBAL.input.pressDown = false;
			// GLOBAL.input.pressUp = true;
		}));

		this.on("InputSelect", bind(this, function(event, point) {
			// console.log("InputSelect at:", point.x, point.y);
		}));

		this.on("InputMove", bind(this, function(event, point) {
			// console.log("InputMove at:", point.x, point.y);
		}));

		this.on("InputOver", bind(this, function(over, overCount, atTarget) {
			// console.log("InputOver:", over, overCount, atTarget);
		}));

		this.on("DragStart", bind(this, function(dragEvent) {
			// console.log("DragStart at:", dragEvent.srcPt.x, dragEvent.srcPt.y);
		}));

		this.on("Drag", bind(this, function(startEvent, dragEvent, delta) {
			// console.log("Drag at:", dragEvent.srcPt.x, dragEvent.srcPt.y, "started at:", startEvent.srcPt.x, startEvent.srcPt.y, "delta:", delta);
		}));

		this.on("DragStop", bind(this, function(dragEvent, selectEvent) {
			// console.log("DragStop at:", dragEvent.srcPt.x, dragEvent.srcPt.y, selectEvent.srcPt.x, selectEvent.srcPt.y);
		}));
	};

	this.setupGameStage = function() {
		this.player = new Player(device.width / 2, device.height / 2 - 25, 50, 50, "#FFFFFF");
		this.addSubview(this.player);
	};

	this.setupUI = function() {

	};

	this.setupInputs = function() {
		this.movementInputView = new MovementInput(0, 0, device.width/2, device.height, true);
		this.addSubview(this.movementInputView);
		GLOBAL.movementInput = this.movementInputView;

		this.rollInputView = new ButtonInput(device.width / 2, 0, device.width/2, device.height, true);
		this.rollInputView.setAction(this.player.components[MovementComponent.prototype.key], this.player.components[MovementComponent.prototype.key].roll);
		console.log(this.player.components);
		this.addSubview(this.rollInputView);
		GLOBAL.rollInput = this.rollInputView;
	};

	this.test = function() {
		console.log("test");
	};

	this.run = false; // TODO

});
