import ui.View as View;

import src.Component.Component as Component;

var GameObject = Class(View, function(supr) {

	this.components = {};

	this.init = function(opts) {
		supr(this, "init", [opts]);
	};

	this.tick = function(dt) {
		for (var component in this.components) {
			this.components[component].update(this, dt);
		}
	};

});

GameObject.prototype.addComponent = function(key, component) {
	if (!(key in this.components) && (component instanceof Component)) {
		this.components[key] = component;
		return true;
	}
	return false;
};

GameObject.prototype.removeComponent = function(key) {
	if (key in this.components) {
		delete this.components[key];
		return true;
	}
	return false;
};

exports = GameObject;
