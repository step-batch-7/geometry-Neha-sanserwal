const assert = require("chai").assert;
const Point = require("../src/point.js").Point;
describe("Point", function() {
	describe("toString", function() {
		it("should represent points", function() {
			let point = new Point(1, 2);
			assert.strictEqual(point.toString(), "[Point @(1,2)]");
		});
	});
	describe("visit", function() {
		it("should give the value evaluated by callback function", function() {
			let point = new Point(1, 2);
			const mul = (x, y) => x * y;
			assert.strictEqual(point.visit(mul), 2);
			point = new Point(1, 2);
			const add = (x, y) => x + y;
			assert.strictEqual(point.visit(add), 3);
		});
		it("should give error if callback is not function", function() {
			let point = new Point(1, 2);
			const add = 2;
			const callBackErr = () => point.visit(add);
			assert.throws(callBackErr, "callback is not a function");
		});
	});
	describe("isEqualTo", function() {
		it("should validate if x and y coordinates of both points are equal", function() {
			let point1 = new Point(1, 2);
			let point2 = new Point(1, 2);
			assert.ok(point1.isEqualTo(point2));
		});
		it("should invalidate if x coordinates of both points are equal but not y", function() {
			let point1 = new Point(1, 2);
			let point2 = new Point(1, 3);
			assert.ok(!point1.isEqualTo(point2));
		});
		it("should invalidate if y coordinates of both points are equal but not x", function() {
			let point1 = new Point(1, 2);
			let point2 = new Point(1, 3);
			assert.ok(!point1.isEqualTo(point2));
		});
		it("should invalidate if other is not a point", function() {
			let point1 = new Point(1, 2);
			let point2 = { x: 1, y: 3 };
			assert.ok(!point1.isEqualTo(point2));
		});
	});
	describe("clone", function() {
		let point = new Point(1, 2);
		it("should given a copy of the given point", function() {
			assert.deepStrictEqual(point.clone(), { x: 1, y: 2 });
		});
	});
	describe("findDistanceTo", function() {
		it("should have 0 distance if both points have same coordinates", function() {
			let point1 = new Point(1, 2);
			let point2 = new Point(1, 2);
			assert.strictEqual(point1.findDistanceTo(point2), 0);
		});
	});
});
