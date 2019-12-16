const Point = require("./point.js").Point;

const arePointsEqual = function(pointA, pointB) {
	return pointA.x === pointB.x && pointA.y === pointB.y;
};

const isNumInRange = function(num, start, end) {
	return num >= start && num <= end;
};

const intercept = function(x, y, slope) {
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
		if (other instanceof Line) {
			return (
				arePointsEqual(this.endA, other.endA) &&
				arePointsEqual(this.endB, other.endB)
			);
		}
		return false;
	}
	get slope() {
		return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
	}

	isParallelTo(other) {
		if (other instanceof Line) {
			let thisIntercept = intercept(this.endA.x, this.endA.y, this.slope);
			let otherIntercept = intercept(
				other.endA.x,
				other.endA.y,
				other.slope
			);
			return (
				!(thisIntercept === otherIntercept) &&
				this.slope === other.slope
			);
		}
		return false;
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
		if (distance instanceof Number) {
			let slope = this.slope;
			let theta = Math.atan(slope);
			let x = this.endA.x + distance * Math.cos(theta).toFixed(2);
			let y = this.endA.x + distance * Math.sin(theta).toFixed(2);
			return new Point(x, y);
		}
		return NaN;
	}
}
exports.Line = Line;
