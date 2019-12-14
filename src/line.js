const Point = require("./point.js").Point;

const arePointsEqual = function(pointA, pointB) {
	return pointA.x === pointB.x && pointA.y === pointB.y;
};

const yIntercept = function(x, y, slope) {
	return y - slope * x;
};
class Line {
	constructor(pointA, pointB) {
		this.endA = new Point(pointA.x, pointA.y);
		this.endB = new Point(pointB.x, pointB.y);
	}
	toString() {
		return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
	}

	isEqualTo(other) {
		if (!other instanceof Line) return false;
		return (
			arePointsEqual(this.endA, other.endA) &&
			arePointsEqual(this.endB, other.endB)
		);
	}
	get slope() {
		return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
	}

	isParallelTo(other) {
		if (!other instanceof Line) {
			return false;
		}
		const lineAIntercept = yIntercept(this.endA.x, this.endA.y, this.slope);
		const lineBIntercept = yIntercept(
			other.endA.x,
			other.endA.y,
			other.slope
		);
		return this.slope === other.slope && lineAIntercept !== lineBIntercept;
	}

	get length() {
		let diffOfXs = this.endB.x - this.endA.x;
		let diffOfYs = this.endB.y - this.endA.y;
		return Math.sqrt(Math.pow(diffOfXs, 2) + Math.pow(diffOfYs, 2));
	}

	findY(x) {
		let YIntercept = yIntercept(this.endA.x, this.endA.y, this.slope);
		return this.slope * x + YIntercept;
	}
}
exports.Line = Line;
