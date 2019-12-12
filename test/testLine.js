const assert = require("assert");
const Line = require("../src/smallLine.js").Line;
describe("Line", function() {
	describe("toString", function() {
		it("should give the string representation of line points", function() {
			let line = new Line(1, 2, 1, 2);
			assert.strictEqual(line.toString(), "Line\nx1:1 y1:2\nx2:1 y2:2");
		});
	});
	describe("isEqualTo", function() {
		it("should validate if the lines has same segments", function() {
			let line1 = new Line(1, 2, 1, 2);
			let line2 = new Line(1, 2, 1, 2);
			assert.ok(line1.isEqualTo(line2));
		});
		it("should invalidate if the lines does not has same segments", function() {
			let line1 = new Line(1, 2, 1, 2);
			let line2 = new Line(2, 2, 1, 2);
			assert.ok(!line1.isEqualTo(line2));
		});
	});
});
