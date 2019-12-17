const Point = require("./point").Point;
class Rectangle {
	constructor(pointA, pointB) {
		this.dPointA = new Point(pointA.x, pointA.y);
		this.dPointB = new Point(pointB.x, pointB.y);
	}
	toString() {
		return `[Rectangle (${this.dPointA.x},${this.dPointA.y}) to (${this.dPointB.x},${this.dPointB.y})]`;
	}
	get area() {
		return 0;
	}
}
exports.Rectangle = Rectangle;
