const Point = require("./point").Point;

const getLengthAndWidth = function(pointA, pointB) {
	let length = pointB.x - pointA.x;
	let width = pointB.y - pointA.y;
	return { length, width };
};
class Rectangle {
	constructor(pointA, pointB) {
		this.dPointA = new Point(pointA.x, pointA.y);
		this.dPointB = new Point(pointB.x, pointB.y);
	}
	toString() {
		return `[Rectangle (${this.dPointA.x},${this.dPointA.y}) to (${this.dPointB.x},${this.dPointB.y})]`;
	}
	isEqualTo(other) {
		if (!(other instanceof Rectangle)) {
			return false;
		}
		return (
			this.dPointA.isEqualTo(other.dPointA) &&
			this.dPointB.isEqualTo(other.dPointB)
		);
	}
	get area() {
		let { length, width } = getLengthAndWidth(this.dPointA, this.dPointB);
		return length * width;
	}
	get perimeter() {
		let { length, width } = getLengthAndWidth(this.dPointA, this.dPointB);
		return 2 * (length + width);
	}
}
exports.Rectangle = Rectangle;
