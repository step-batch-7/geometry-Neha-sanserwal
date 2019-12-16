const assert = require("chai").assert;
const Line = require("../src/line.js").Line;
const Point = require("../src/point.js").Point;

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
			assert.strictEqual(line.findY(2), 3);
		});
		it("should calculate y for greater value than 0 of x", function() {
			let line = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
			assert.strictEqual(line.findY(3), 4);
		});
		it("should not calculate y if given point is not on line", function() {
			let line = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
			assert.isNaN(line.findY(5));
		});
	});
	describe("findX", function() {
		it("should calculate x for zero value of y", function() {
			let line = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
			assert.strictEqual(line.findX(3), 2);
		});
		it("should calculate x for greater value than 0 of y", function() {
			let line = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
			assert.strictEqual(line.findX(2), 1);
		});
		it("should not calculate x if given point is not on line", function() {
			let line = new Line({ x: 1, y: 2 }, { x: 4, y: 5 });
			assert.isNaN(line.findX(1));
		});
	});
	describe("split", function() {
		it("should give two line of equal length if line(p1,p2)>0", function() {
			let line = new Line({ x: 2, y: 2 }, { x: 4, y: 5 });
			let expected = [
				{ endA: { x: 2, y: 2 }, endB: { x: 1, y: 0 } },
				{ endA: { x: 1, y: 0 }, endB: { x: 4, y: 5 } }
			];
			assert.deepStrictEqual(line.split(), expected);
		});
		it("should give two line of equal length if line(p1,p2)<0", function() {
			let line = new Line({ x: -2, y: -2 }, { x: -4, y: -5 });
			let expected = [
				{ endA: { x: -2, y: -2 }, endB: { x: -1, y: 0 } },
				{ endA: { x: -1, y: 0 }, endB: { x: -4, y: -5 } }
			];
			assert.deepStrictEqual(line.split(), expected);
		});
	});
	describe("hasPoint", function() {
		it("should validate if the point is located on line segment", function() {
			const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
			const point = new Point(2, 2);
			assert.ok(line.hasPoint(point));
		});
		it("should invalidate if the point is not located on line segment", function() {
			let line = new Line({ x: 2, y: 2 }, { x: 4, y: 5 });
			let point = new Point(0, 2);
			assert.ok(!line.hasPoint(point));
			line = new Line({ x: 0, y: 0 }, { x: 5, y: 5 });
			point = new Point(2, 3);
			assert.ok(!line.hasPoint(point));
		});
		it("should invalidate if the point is not instance of point class", function() {
			const line = new Line({ x: 2, y: 2 }, { x: 4, y: 5 });
			const point = { x: 3, y: 2 };
			assert.ok(!line.hasPoint(point));
		});
	});
	describe("findPointFromStart", function() {
		it("should return start point of the line if distance is zero", function() {
			const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
			assert.deepStrictEqual(line.findPointFromStart(0), { x: 1, y: 1 });
		});
		it("should return calculated point if distance is greater than zero", function() {
			const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
			assert.deepStrictEqual(line.findPointFromStart(2), {
				x: 2.42,
				y: 2.42
			});
		});
		it("should return NaN if the distance is not a number", function() {
			const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
			assert.isNaN(line.findPointFromStart("a"));
		});
	});
});
