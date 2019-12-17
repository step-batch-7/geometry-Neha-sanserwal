const Point = require("./point").Point;
class Rectangle {
	constructor(pointA, pointB) {
		this.dPointA = new Point(pointA.x, pointA.y);
		this.dPointB = new Point(pointB.x, pointB.y);
	}
	toString() {
		return `[Rectangle (${this.dPointA.x},${this.dPointA.y}) to (${this.dPointB.x},${this.dPointB.y})]`;
	}
	isEqualTo(other) {
		return (
			this.dPointA.isEqualTo(other.dPointA) &&
			this.dPointB.isEqualTo(other.dPointB)
		);
	}
	get area() {
		let length = this.dPointB.x - this.dPointA.x;
		let width = this.dPointB.y - this.dPointA.y;
		return length * width;
	}
	get perimeter() {
		let length = this.dPointB.x - this.dPointA.x;
		let width = this.dPointB.y - this.dPointA.y;
		return 2 * (length + width);
	}
}
exports.Rectangle = Rectangle;
