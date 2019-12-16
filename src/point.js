"use strict";

const findPointFrom = function(point, distance, slope) {
	let theta = Math.atan(slope);
	let newX = parseFloat((point.x + distance * Math.cos(theta)).toFixed(2));
	let newY = parseFloat((point.y + distance * Math.sin(theta)).toFixed(2));
	return new Point(newX, newY);
};

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return `[Point @(${this.x},${this.y})]`;
	}
	visit(callback) {
		return callback(this.x, this.y);
	}
	isEqualTo(other) {
		if (!(other instanceof Point)) {
			return false;
		}
		return this.x === other.x && this.y === other.y;
	}
	clone() {
		return new Point(this.x, this.y);
	}
	findDistanceTo(other) {
		if (!(other instanceof Point)) {
			return NaN;
		}
		let XsDiff = other.x - this.x;
		let YsDiff = other.y - this.y;
		return Math.sqrt(Math.pow(XsDiff, 2) + Math.pow(YsDiff, 2));
	}

	isOn(other) {
		return other.hasPoint(this);
	}
}
exports.Point = Point;
exports.findPointFrom = findPointFrom;
