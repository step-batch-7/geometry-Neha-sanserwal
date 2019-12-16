const assert = require("chai").assert;
const Circle = require("../src/circle").Circle;
describe("Circle", function() {
	describe("toString", function() {
		it("should give the string representation of circle dimensions", function() {
			let circle = new Circle({ x: 0, y: 0 }, 5);
			assert.strictEqual(circle.toString(), "[Circle @(0,0) radius 5]");
		});
	});
	describe("isEqualTo", function() {
		it("should validate if radius of both circles are equal ", function() {
			let circle1 = new Circle({ x: 2, y: 2 }, 5);
			let circle2 = new Circle({ x: 0, y: 0 }, 5);
			assert.ok(circle1.isEqualTo(circle2));
		});
		it("should invalidate if radius of both circles are equal not equal", function() {
			let circle1 = new Circle({ x: 2, y: 2 }, 5);
			let circle2 = new Circle({ x: 0, y: 0 }, 3);
			assert.ok(!circle1.isEqualTo(circle2));
		});
		it("should invalidate if other is not a circle", function() {
			let circle1 = new Circle({ x: 2, y: 2 }, 5);
			let circle2 = { point: { x: 0, y: 0 }, radius: 3 };
			assert.ok(!circle1.isEqualTo(circle2));
			circle1 = new Circle({ x: 2, y: 2 }, 5);
			circle2 = {};
			assert.ok(!circle1.isEqualTo(circle2));
		});
	});
});
