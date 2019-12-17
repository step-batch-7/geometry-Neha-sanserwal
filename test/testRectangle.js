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
});
