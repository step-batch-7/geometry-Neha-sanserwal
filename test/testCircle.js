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
		it("should return if radius of both circles are equal ", function() {
			let circle1 = new Circle({ x: 2, y: 2 }, 5);
			let circle2 = new Circle({ x: 0, y: 0 }, 5);
			assert.ok(circle1.isEqualTo(circle2));
		});
	});
});
