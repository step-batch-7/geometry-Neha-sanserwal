const Point = require("./point").Point;

const getLengthAndWidth = function(pointA, pointB) {
	let length = Math.abs(pointB.x - pointA.x);
	let width = Math.abs(pointB.y - pointA.y);
	return { length, width };
};
const getSecondDiagonal = function(pointA, pointB) {
	let dPointA = { x: pointB.x, y: pointA.y };
	let dPointB = { x: pointA.x, y: pointB.y };
	return new Rectangle(dPointA, dPointB);
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
		let secondDiagonal = getSecondDiagonal(this.dPointA, this.dPointB);
		return (
			(this.dPointA.isEqualTo(other.dPointA) &&
				this.dPointB.isEqualTo(other.dPointB)) ||
			(this.dPointB.isEqualTo(other.dPointA) &&
				this.dPointA.isEqualTo(other.dPointB)) ||
			(secondDiagonal.dPointA.isEqualTo(other.dPointA) &&
				secondDiagonal.dPointB.isEqualTo(other.dPointB)) ||
			(secondDiagonal.dPointB.isEqualTo(other.dPointA) &&
				secondDiagonal.dPointA.isEqualTo(other.dPointB))
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

	hasPoint(other) {
		let areXsEqual = this.dPointA.x == other.x || this.dPointB.x == other.x;
		let areYsEqual = this.dPointA.y == other.y || this.dPointB.y == other.y;
		let isXInRange = this.dPointB.x >= other.x && this.dPointA.x <= other.x;
		let isYInRange = this.dPointB.y >= other.y && this.dPointA.y <= other.y;
		return (areXsEqual && isYInRange) || (areYsEqual && isXInRange);
	}
}
exports.Rectangle = Rectangle;
