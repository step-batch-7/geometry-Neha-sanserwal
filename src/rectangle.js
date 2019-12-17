const Line = require("./line").Line;
const isNumInRange = require("./line").isNumInRange;

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
		this.diag = new Line(pointA, pointB);
	}

	toString() {
		let [dPointA, dPointB] = [this.diag.endA, this.diag.endB];
		return `[Rectangle (${dPointA.x},${dPointA.y}) to (${dPointB.x},${dPointB.y})]`;
	}

	isEqualTo(other) {
		if (!(other instanceof Rectangle)) {
			return false;
		}
		let secondDiagonal = getSecondDiagonal(this.diag.endA, this.diag.endB);
		return (
			this.diag.isEqualTo(other.diag) ||
			secondDiagonal.diag.isEqualTo(other.diag)
		);
	}

	get area() {
		let [dPointA, dPointB] = [this.diag.endA, this.diag.endB];
		let { length, width } = getLengthAndWidth(dPointA, dPointB);
		return length * width;
	}

	get perimeter() {
		let [dPointA, dPointB] = [this.diag.endA, this.diag.endB];
		let { length, width } = getLengthAndWidth(dPointA, dPointB);
		return 2 * (length + width);
	}

	hasPoint(other) {
		let [dPointA, dPointB] = [this.diag.endA, this.diag.endB];
		let areXsEqual = dPointA.x == other.x || dPointB.x == other.x;
		let areYsEqual = dPointA.y == other.y || dPointB.y == other.y;
		let isXInRange = isNumInRange(other.x, dPointA.x, dPointB.x);
		let isYInRange = isNumInRange(other.y, dPointA.y, dPointB.y);
		return (areXsEqual && isYInRange) || (areYsEqual && isXInRange);
	}
}
exports.Rectangle = Rectangle;
