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
		return `x1:${this.p1.x} y1:${this.p1.y}\nx2:${this.p2.x} y2:${this.p2.y}`;
	}

	isEqualTo(otherLine) {
		let isPointOneEqual =
			this.p1.x === otherLine.p1.x && this.p1.y === otherLine.p1.y;
		let isPointTwoEqual =
			this.p2.x === otherLine.p2.x && this.p2.y === otherLine.p2.y;
		return isPointOneEqual && isPointTwoEqual;
	}
}

exports.Line = Line;
