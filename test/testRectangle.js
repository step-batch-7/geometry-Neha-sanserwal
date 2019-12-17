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
	describe("area", function() {
		it("should give area equal to zero when length is zero ", function() {
			let rect = new Rectangle({ x: 0, y: 1 }, { x: 0, y: 5 });
			assert.strictEqual(rect.area, 0);
		});
		it("should give area equal to zero when width is zero ", function() {
			let rect = new Rectangle({ x: 1, y: 0 }, { x: 5, y: 0 });
			assert.strictEqual(rect.area, 0);
		});
		it("should give area equal to zero when width and length > 0", function() {
			let rect = new Rectangle({ x: 1, y: 3 }, { x: 5, y: 8 });
			assert.strictEqual(rect.area, 20);
		});
	});
});
