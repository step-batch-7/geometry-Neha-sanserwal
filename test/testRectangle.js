const assert = require("chai").assert;
const Rectangle = require("../src/rectangle").Rectangle;
describe("Rectangle", function() {
	describe("toString", function() {
		it("should give string representation of rectangle points", function() {
			let rect = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
			assert.strictEqual(
				rect.toString(rect),
				`[Rectangle (1,1) to (5,4)]`
			);
		});
	});
});
