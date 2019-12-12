const assert = require("assert");
const Line = require("../src/smallLine.js").Line;
describe("Line", function() {
	describe("toString", function() {
		it("should give the string representation of line points", function() {
			let line = new Line(1, 2, 1, 2);
			assert.strictEqual(line.toString(), "x1:1 y1:2\nx2:1 y2:2");
		});
	});
});
