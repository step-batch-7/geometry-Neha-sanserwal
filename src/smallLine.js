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
}

exports.Line = Line;
