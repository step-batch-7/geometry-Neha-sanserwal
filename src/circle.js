const Point = require("./point.js").Point;
class Circle {
	constructor(p, radius) {
		this.point = new Point(p.x, p.y);
		this.radius = radius;
	}
	toString() {
		return `[Circle @(${this.point.x},${this.point.y}) radius ${this.radius}]`;
	}
	isEqualTo() {
		return true;
	}
}
exports.Circle = Circle;
