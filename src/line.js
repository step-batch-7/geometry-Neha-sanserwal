const arePointsEqual = function(pointA, pointB) {
	return pointA.x === pointB.x && pointA.y === pointB.y;
};

const slope = function(pointA, pointB) {
	return (pointB.y - pointA.y) / pointB.x - pointA.x;
};

class Line {
	constructor(pointA, pointB) {
		this.endA = { x: pointA.x, y: pointA.y };
		this.endB = { x: pointB.x, y: pointB.y };
	}
	toString() {
		return `Line (${this.endA.x},${this.endA.y}), (${this.endB.x},${this.endB.y})`;
	}

	isEqualTo(other) {
		if (!other instanceof Line) return false;
		return (
			arePointsEqual(this.endA, other.endA) &&
			arePointsEqual(this.endB, other.endB)
		);
	}
	get length() {
		let diffOfXs = this.endB.x - this.endA.x;
		let diffOfYs = this.endB.y - this.endA.y;
		return Math.sqrt(Math.pow(diffOfXs, 2) + Math.pow(diffOfYs, 2));
	}
	isParallelTo(other) {
		return slope(this.endA, this.endB) === slope(other.endA, other.endB);
	}
}
exports.Line = Line;
