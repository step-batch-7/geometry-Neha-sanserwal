const Point = require("./point.js").Point;

class Circle {
	constructor(p, radius) {
		this.point = new Point(p.x, p.y);
		this.radius = radius;
	}
	toString() {
		return `[Circle @(${this.point.x},${this.point.y}) radius ${this.radius}]`;
	}
	isEqualTo(other) {
		if (!(other instanceof Circle)) {
			return false;
		}
		const areCentersEqual =
			this.point.x === other.point.x && this.point.y === other.point.y;
		return areCentersEqual && this.radius === other.radius;
	}
	get area() {
		return Math.PI * Math.pow(this.radius, 2);
	}
	get perimeter() {
		return 2 * Math.PI * this.radius;
	}
	hasPoint(other) {
		if (!(other instanceof Point)) {
			return false;
		}
		return this.point.findDistanceTo(other) === this.radius;
	}
	moveTo(other) {
		if (!(other instanceof Point)) {
			return undefined;
		}
		return new Circle(other, this.radius);
	}
	covers(other) {
		if (!(other instanceof Point)) {
			return false;
		}
		return this.point.findDistanceTo(other) < this.radius;
	}
}
exports.Circle = Circle;
