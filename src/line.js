const Point = require("./point.js").Point;
const findPointFrom = require("./point.js").findPointFrom;

const arePointsEqual = function(pointA, pointB) {
	return pointA.x === pointB.x && pointA.y === pointB.y;
};

const isNumInRange = function(num, start, end) {
	return (num >= start && num <= end) || (num <= start && num >= end);
};

const intercept = function(x, y, slope) {
	return y - slope * x;
};

const arePointsCollinear = function(pointA, pointB, pointC) {
	let [x1, x2, x3] = [pointA.x, pointB.x, pointC.x];
	let [y1, y2, y3] = [pointA.y, pointB.y, pointC.y];
	return 0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) === 0;
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
		if (!(other instanceof Line)) {
			return false;
		}
		return (
			(arePointsEqual(this.endA, other.endA) &&
				arePointsEqual(this.endB, other.endB)) ||
			(arePointsEqual(this.endB, other.endA) &&
				arePointsEqual(this.endA, other.endB))
		);
	}
	get slope() {
		return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
	}

	isParallelTo(other) {
		if (!(other instanceof Line)) {
			return false;
		}
		return (
			!arePointsCollinear(this.endA, this.endB, other.endA) &&
			this.slope === other.slope
		);
	}

	get length() {
		let diffOfXs = this.endB.x - this.endA.x;
		let diffOfYs = this.endB.y - this.endA.y;
		return Math.sqrt(Math.pow(diffOfXs, 2) + Math.pow(diffOfYs, 2));
	}

	findY(x) {
		if (!isNumInRange(x, this.endA.x, this.endB.x)) {
			return NaN;
		}
		let c = intercept(this.endA.x, this.endA.y, this.slope);
		return this.slope * x + c;
	}

	findX(y) {
		if (!isNumInRange(y, this.endA.y, this.endB.y)) {
			return NaN;
		}
		let c = intercept(this.endA.x, this.endA.y, this.slope);
		return (y - c) / this.slope;
	}
	split() {
		const midX = (this.endB.x - this.endA.x) / 2;
		const midY = (this.endB.y - this.endB.y) / 2;
		const line1 = new Line(this.endA, { x: midX, y: midY });
		const line2 = new Line({ x: midX, y: midY }, this.endB);
		return [line1, line2];
	}
	hasPoint(point) {
		let isXValid = point.x === this.findX(point.y);
		let isYValid = point.y === this.findY(point.x);
		return point instanceof Point && isXValid && isYValid;
	}
	findPointFromStart(distance) {
		let slope = this.slope;
		let point = findPointFrom(this.endA, distance, slope);
		if (isNaN(point.x) || isNaN(point.y)) {
			return undefined;
		}
		return point;
	}
	findPointFromEnd(distance) {
		let slope = this.slope;
		let point = findPointFrom(this.endB, distance, slope);
		if (isNaN(point.x) || isNaN(point.y)) {
			return undefined;
		}
		return point;
	}
}
exports.Line = Line;
