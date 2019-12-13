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
}
exports.Line = Line;
