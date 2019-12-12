const arePointsEqual = function(LineOnePoint, LineTwoPoint) {
	return (
		LineOnePoint.x === LineTwoPoint.x && LineOnePoint.y === LineTwoPoint.y
	);
};

class Line {
	constructor(x1, y1, x2, y2) {
		this.p1 = {
			x: x1,
			y: y1
		};
		this.p2 = {
			x: x2,
			y: y2
		};
	}
	toString() {
		return `${this.constructor.name} (${this.p1.x},${this.p1.y}), (${this.p2.x},${this.p2.y})`;
	}

	isEqualTo(otherLine) {
		let isPointOneEqual = arePointsEqual(this.p1, otherLine.p1);
		let isPointTwoEqual = arePointsEqual(this.p2, otherLine.p2);
		return isPointOneEqual && isPointTwoEqual;
	}
}

exports.Line = Line;
