const assert = require("chai").assert;
const Line = require("../src/line.js").Line;

describe("Line", function() {
	describe("toString", function() {
		it("should give the string representation of line points", function() {
			let line = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			assert.strictEqual(line.toString(), "Line (1,2), (1,2)");
		});
	});

	describe("isEqualTo", function() {
		it("should validate if the lines have the same segments", function() {
			let line1 = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			let line2 = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			assert.ok(line1.isEqualTo(line2));
		});
		it("should invalidate if the lines do not have the same segments", function() {
			let line1 = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			let line2 = new Line({ x: 2, y: 2 }, { x: 1, y: 2 });
			assert.ok(!line1.isEqualTo(line2));
		});
		it("should invalidate if the lines are not an instance of the same class", function() {
			let line1 = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			let line2 = { endA: { x: 2, y: 2 }, endB: { x: 1, y: 2 } };
			assert.ok(!line1.isEqualTo(line2));
			line1 = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
		});
	});
	describe("length", function() {
		it("should calculate for line having same end points", function() {
			const line = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			assert.strictEqual(line.length, 0);
		});
		it("should calculate for line having different end points", function() {
			const line = new Line({ x: 1, y: 2 }, { x: 2, y: 2 });
			assert.strictEqual(line.length, 1);
		});
		it("should calculate for line having points of floating type", function() {
			const line = new Line({ x: 1.3, y: 2.0 }, { x: 2.1, y: 2.54 });
			assert.approximately(line.length, 0.96, 0.01);
		});
	});
	describe("isParallelTo", function() {
		it("should invalidate if lines are parallel to each other", function() {
			let line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 8 });
			let line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 8 });
			assert.ok(line1.isParallelTo(line2));
		});
	});
});
