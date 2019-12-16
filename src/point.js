"use strict";
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return `[Point @(${this.x},${this.y})]`;
	}
	visit(callback) {
		if (typeof callback !== "function") {
			throw new Error(`callback is not a function`);
		}
		return callback(this.x, this.y);
	}
	isEqualTo(other) {
		if (other instanceof Point) {
			return this.x === other.x && this.y === other.y;
		}
		return false;
	}
	clone() {
		return new Point(this.x, this.y);
	}
	findDistanceTo(other) {
		if (other instanceof Point) {
			let XsDiff = other.x - this.x;
			let YsDiff = other.y - this.y;
			return Math.sqrt(Math.pow(XsDiff, 2) + Math.pow(YsDiff, 2));
		}
		return NaN;
	}
	isOn(line) {
		line.hasPoint(this);
	}
}
exports.Point = Point;
