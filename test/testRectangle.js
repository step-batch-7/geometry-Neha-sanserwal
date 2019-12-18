const assert = require("chai").assert;
const Rectangle = require("../src/rectangle").Rectangle;
const Point = require("../src/point").Point;

describe("Rectangle", function() {
	describe("toString", function() {
		it("should give string representation of rectangle points", function() {
			let rect = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
			assert.strictEqual(
				rect.toString(rect),
				`[Rectangle (1,1) to (5,4)]`
			);
		});
	});
	describe("area", function() {
		it("should give area equal to zero when length is zero ", function() {
			let rect = new Rectangle({ x: 0, y: 1 }, { x: 0, y: 5 });
			assert.strictEqual(rect.area, 0);
		});
		it("should give area equal to zero when width is zero ", function() {
			let rect = new Rectangle({ x: 1, y: 0 }, { x: 5, y: 0 });
			assert.strictEqual(rect.area, 0);
		});
		it("should give area when width and length > 0", function() {
			let rect = new Rectangle({ x: 1, y: 3 }, { x: 5, y: 8 });
			assert.strictEqual(rect.area, 20);
		});
		it("should give area when difference of coordinates of diagonal points is negative", function() {
			let rect = new Rectangle({ x: 3, y: 2 }, { x: 2, y: 3 });
			assert.strictEqual(rect.area, 1);
		});
	});

	describe("perimeter", function() {
		it("should give perimeter when length is zero ", function() {
			let rect = new Rectangle({ x: 0, y: 1 }, { x: 0, y: 5 });
			assert.strictEqual(rect.perimeter, 8);
		});
		it("should give perimeter when width is zero ", function() {
			let rect = new Rectangle({ x: 0, y: 1 }, { x: 0, y: 5 });
			assert.strictEqual(rect.perimeter, 8);
		});
		it("should give perimeter when length and width >0", function() {
			let rect = new Rectangle({ x: 0, y: 1 }, { x: 0, y: 5 });
			assert.strictEqual(rect.perimeter, 8);
		});
		it("should give perimeter when difference of coordinates of diagonal points is negative", function() {
			let rect = new Rectangle({ x: 3, y: 2 }, { x: 2, y: 3 });
			assert.strictEqual(rect.perimeter, 4);
		});
	});
	describe("isEqualTo", function() {
		it("should validate if diagonal points of both rectangle are equal ", function() {
			let rect1 = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			let rect2 = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			assert.ok(rect1.isEqualTo(rect2));
			rect1 = new Rectangle({ x: 2, y: 2 }, { x: 0, y: 0 });
			rect2 = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			assert.ok(rect1.isEqualTo(rect2));
		});
		it("should validate if the other diagonal of rectangle is given", function() {
			let rect1 = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			let rect2 = new Rectangle({ x: 2, y: 0 }, { x: 0, y: 2 });
			assert.ok(rect1.isEqualTo(rect2));
			rect1 = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			rect2 = new Rectangle({ x: 0, y: 2 }, { x: 2, y: 0 });
			assert.ok(rect1.isEqualTo(rect2));
		});
		it("should invalidate if first diagonal point of both rectangle are equal ", function() {
			let rect1 = new Rectangle({ x: 0, y: 0 }, { x: 1, y: 2 });
			let rect2 = new Rectangle({ x: 0, y: 0 }, { x: 3, y: 2 });
			assert.ok(!rect1.isEqualTo(rect2));
		});
		it("should invalidate if second diagonal point of both rectangle are equal ", function() {
			let rect1 = new Rectangle({ x: 0, y: 0 }, { x: 1, y: 2 });
			let rect2 = new Rectangle({ x: 0, y: 3 }, { x: 1, y: 2 });
			assert.ok(!rect1.isEqualTo(rect2));
		});
		it("should invalidate if other is not a rectangle", function() {
			let rect1 = new Rectangle({ x: 0, y: 0 }, { x: 1, y: 2 });
			let rect2 = {};
			assert.ok(!rect1.isEqualTo(rect2));
		});
	});
	describe("hasPoint", function() {
		it("should validate if point is on any one side of rectangle", function() {
			let rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			let point = new Point(1, 0);
			assert.ok(rect.hasPoint(point));
		});
		it("should invalidate if point is outside of rectangle ", function() {
			let rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			let point = new Point(3, 3);
			assert.ok(!rect.hasPoint(point));
			rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			point = new Point(-1, 3);
			assert.ok(!rect.hasPoint(point));
			rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			point = new Point(4, 4);
			assert.ok(!rect.hasPoint(point));
		});
		it("should invalidate if point is inside of rectangle ", function() {
			let rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			let point = new Point(1, 1);
			assert.ok(!rect.hasPoint(point));
			rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			point = new Point(1.5, 1.5);
			assert.ok(!rect.hasPoint(point));
			rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			point = new Point(0.1, 0.1);
			assert.ok(!rect.hasPoint(point));
		});
		it("should validate if point is one point of rectangle vertices ", function() {
			let rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			let point = new Point(0, 0);
			assert.ok(rect.hasPoint(point));
			rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			point = new Point(2, 2);
			assert.ok(rect.hasPoint(point));
		});
		it("should not validate if other is not a Point ", function() {
			let rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			let point = "";
			assert.ok(!rect.hasPoint(point));
			rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			point = {};
			assert.ok(!rect.hasPoint(point));
		});
	});
	describe("covers", function() {
		it("should invalidate if point is on any one side of rectangle", function() {
			let rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			let point = new Point(1, 0);
			assert.ok(!rect.covers(point));
		});
		it("should invalidate if point is outside of rectangle ", function() {
			let rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			let point = new Point(3, 3);
			assert.ok(!rect.covers(point));
			rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			point = new Point(-1, 3);
			assert.ok(!rect.covers(point));
			rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			point = new Point(4, 4);
			assert.ok(!rect.covers(point));
		});
		it("should validate if point is inside of rectangle ", function() {
			let rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			let point = new Point(1, 1);
			assert.ok(rect.covers(point));
			rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			point = new Point(1.5, 1.5);
			assert.ok(rect.covers(point));
			rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			point = new Point(0.1, 0.1);
			assert.ok(rect.covers(point));
			rect = new Rectangle({ x: 8, y: 3 }, { x: 6, y: 2 });
			point = new Point(7, 2.5);
			assert.ok(rect.covers(point));
		});
		it("should invalidate if point is one point of rectangle vertices ", function() {
			let rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			let point = new Point(0, 0);
			assert.ok(!rect.covers(point));
			rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			point = new Point(2, 2);
			assert.ok(!rect.covers(point));
		});
		it("should invalidate if other is not a Point ", function() {
			let rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			let point = "";
			assert.ok(!rect.covers(point));
			rect = new Rectangle({ x: 0, y: 0 }, { x: 2, y: 2 });
			point = [];
			assert.ok(!rect.covers(point));
		});
	});
});
