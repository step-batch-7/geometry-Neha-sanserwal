const arePointsEqual = function(pointA, pointB) {
	return pointA.x === pointB.x && pointA.y === pointB.y;
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
	get slope() {
		return (this.endB.y - this.endA.y) / (this.endB.x - this.endA.x);
	}

	isParallelTo(other) {
		return other instanceof Line && this.slope === other.slope;
	}

	get length() {
		let diffOfXs = this.endB.x - this.endA.x;
		let diffOfYs = this.endB.y - this.endA.y;
		return Math.sqrt(Math.pow(diffOfXs, 2) + Math.pow(diffOfYs, 2));
	}
}
exports.Line = Line;
