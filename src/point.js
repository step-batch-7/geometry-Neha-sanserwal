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
}
exports.Point = Point;
