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
});
