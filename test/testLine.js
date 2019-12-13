const assert = require("assert");
const Line = require("../src/line.js").Line;

describe("Line", function() {
	describe("toString", function() {
		it("should give the string representation of line points", function() {
			let line = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			assert.strictEqual(line.toString(), "Line (1,2), (1,2)");
		});
	});

	describe("isEqualTo", function() {
		it("should validate if the lines has same segments", function() {
			let line1 = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			let line2 = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			assert.ok(line1.isEqualTo(line2));
		});
		it("should invalidate if the lines does not has same segments", function() {
			let line1 = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			let line2 = new Line({ x: 2, y: 2 }, { x: 1, y: 2 });
			assert.ok(!line1.isEqualTo(line2));
		});
		it("should invalidate if the lines are not instance of same class", function() {
			let line1 = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			let line2 = { endA: { x: 2, y: 2 }, endB: { x: 1, y: 2 } };
			assert.ok(!line1.isEqualTo(line2));
			line1 = new Line({ x: 1, y: 2 }, { x: 1, y: 2 });
			line2 = "a";
			assert.ok(!line1.isEqualTo(line2));
		});
	});
});
