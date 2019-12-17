const Point = require("./point").Point;
class Rectangle {
	constructor(pointA, pointB) {
		this.endA = new Point(pointA.x, pointA.y);
		this.endB = new Point(pointB.x, pointB.y);
	}
	toString() {
		return `[Rectangle (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
	}
}
exports.Rectangle = Rectangle;
