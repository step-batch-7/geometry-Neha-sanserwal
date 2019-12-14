const assert = require("chai").assert;
const Point = require("../src/point.js").Point;
describe("Point", function() {
	describe("toString", function() {
		it("should represent points", function() {
			let point = new Point(1, 2);
			assert.strictEqual(point.toString(), "[Point @(1,2)]");
		});
	});
});
