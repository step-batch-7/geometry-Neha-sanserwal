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
		if (!other instanceof Point) {
			return false;
		}
		return this.x === other.x && this.y === other.y;
	}
}
exports.Point = Point;