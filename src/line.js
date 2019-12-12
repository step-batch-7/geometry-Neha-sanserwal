const arePointsEqual = function(pointA, pointB) {
	return pointA.x === pointB.x && pointA.y === pointB.y;
};
const isTypeEqual = function(obj1, obj2) {
	return obj1.constructor.name === obj2.constructor.name;
};
class Line {
	constructor(x1, y1, x2, y2) {
		this.endA = {
			x: x1,
			y: y1
		};
		this.endB = {
			x: x2,
			y: y2
		};
	}
	toString() {
		let type = this.constructor.name;
		return `${type} (${this.endA.x},${this.endA.y}), (${this.endB.x},${this.endB.y})`;
	}

	isEqualTo(otherLine) {
		return (
			isTypeEqual(this, otherLine) &&
			arePointsEqual(this.endA, otherLine.endA) &&
			arePointsEqual(this.endB, otherLine.endB)
		);
	}
}
exports.Line = Line;
