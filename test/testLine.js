const assert = require("chai").assert;
const Line = require("../src/line.js").Line;

describe("Line", function() {
	describe("toString", function() {
		it("should give the string representation of line points", function() {
			let line = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			assert.strictEqual(line.toString(), "[Line (1,2) to (1,2)]");
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
		it("should validate if lines have same slope and different intercept ", function() {
			let line1 = new Line({ x: 0, y: 2 }, { x: 2, y: 0 });
			let line2 = new Line({ x: 0, y: 3 }, { x: 3, y: 0 });
			assert.ok(line1.isParallelTo(line2));
		});
		it("should invalidate if lines have same slope and intercept ", function() {
			let line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 8 });
			let line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 8 });
			assert.ok(!line1.isParallelTo(line2));
			line1 = new Line({ x: 0, y: 1 }, { x: 0, y: 2 });
			line2 = new Line({ x: 3, y: 3 }, { x: 4, y: 4 });
			assert.ok(!line1.isParallelTo(line2));
		});
		it("should invalidate if other is not line", function() {
			let line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 8 });
			let line2 = { endA: { x: 2, y: 2 }, endB: { x: 1, y: 2 } };
			assert.ok(!line1.isParallelTo(line2));
		});
		it("should invalidate if lines are perpendicular to each other", function() {
			let line1 = new Line({ x: -3, y: -2 }, { x: 1, y: -2 });
			let line2 = new Line({ x: 3, y: 2 }, { x: -1, y: -2 });
			assert.ok(!line1.isParallelTo(line2));
		});
		it("should invalidate if lines intersect each other", function() {
			let line1 = new Line({ x: 3, y: 2 }, { x: 1, y: 3 });
			let line2 = new Line({ x: 3.2, y: 2 }, { x: -1, y: 1 });
			assert.ok(!line1.isParallelTo(line2));
		});
	});
	describe("slope", function() {
		it("should calculate for horizontal line", function() {
			let line = new Line({ x: 2, y: 4 }, { x: 3, y: 4 });
			assert.strictEqual(line.slope, 0);
		});
		it("should calculate for vertical line ", function() {
			let line = new Line({ x: 2, y: 4 }, { x: 2, y: 3 });
			assert.strictEqual(line.slope, -Infinity);

			line = new Line({ x: 2, y: 3 }, { x: 2, y: 4 });
			assert.strictEqual(line.slope, Infinity);
		});
		it("should calculate for line that goes uphill", function() {
			let line = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
			assert.strictEqual(line.slope, 1);
		});
		it("should calculate for line that goes downhill", function() {
			let line = new Line({ x: 4, y: 2 }, { x: 1, y: 5 });
			assert.strictEqual(line.slope, -1);
		});
	});
	describe("findY", function() {
		it("should calculate y for zero value of x", function() {
			let line = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
			assert.strictEqual(line.findY(0), 1);
		});
		it("should calculate y for greater value than 0 of x", function() {
			let line = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
			assert.strictEqual(line.findY(2), 3);
		});
	});
});
