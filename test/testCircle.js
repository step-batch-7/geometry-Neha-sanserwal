const assert = require("chai").assert;
const Circle = require("../src/circle").Circle;
const Point = require("../src/point").Point;
describe("Circle", function() {
	describe("toString", function() {
		it("should give the string representation of circle dimensions", function() {
			let circle = new Circle({ x: 0, y: 0 }, 5);
			assert.strictEqual(circle.toString(), "[Circle @(0,0) radius 5]");
		});
	});
	describe("isEqualTo", function() {
		it("should validate if radius and centers of both circles are equal ", function() {
			let circle1 = new Circle({ x: 2, y: 2 }, 5);
			let circle2 = new Circle({ x: 2, y: 2 }, 5);
			assert.ok(circle1.isEqualTo(circle2));
		});
		it("should invalidate if radius of both circles are equal not equal", function() {
			let circle1 = new Circle({ x: 2, y: 2 }, 5);
			let circle2 = new Circle({ x: 0, y: 0 }, 3);
			assert.ok(!circle1.isEqualTo(circle2));
		});
		it("should invalidate if other is not a circle", function() {
			let circle1 = new Circle({ x: 2, y: 2 }, 5);
			let circle2 = { point: { x: 0, y: 0 }, radius: 3 };
			assert.ok(!circle1.isEqualTo(circle2));
			circle1 = new Circle({ x: 2, y: 2 }, 5);
			circle2 = {};
			assert.ok(!circle1.isEqualTo(circle2));
		});
	});
	describe("area", function() {
		it("should give area of circle having radius zero ", function() {
			let circle = new Circle({ x: 0, y: 0 }, 0);
			assert.strictEqual(circle.area, 0);
		});
		it("should give area of circle having radius greater than zero", function() {
			let circle = new Circle({ x: 0, y: 0 }, 1);
			assert.isAtLeast(circle.area, 3.14);
			circle = new Circle({ x: 0, y: 0 }, 2);
			assert.isAtLeast(circle.area, 12.56);
		});
		it("should give area of circle having radius real number ", function() {
			let circle = new Circle({ x: 0, y: 0 }, 1.2);
			assert.isAtLeast(circle.area, 3.14);
			circle = new Circle({ x: 0, y: 0 }, 2.0);
			assert.isAtLeast(circle.area, 12.56);
		});
	});
	describe("perimeter", function() {
		it("should return perimeter of circle having zero radius", function() {
			let circle = new Circle({ x: 0, y: 0 }, 0);
			assert.strictEqual(circle.perimeter, 0);
		});
		it("should return perimeter of circle having radius greater than zero", function() {
			let circle = new Circle({ x: 0, y: 0 }, 1);
			assert.isAtLeast(circle.perimeter, 6.14);
			circle = new Circle({ x: 0, y: 0 }, 2);
			assert.isAtLeast(circle.perimeter, 12.0);
		});
		it("should return perimeter of circle having real number radius", function() {
			let circle = new Circle({ x: 0, y: 0 }, 1.2);
			assert.isAtLeast(circle.perimeter, 7.5);
		});
	});
	describe("hasPoint", function() {
		it("should validate if distance of point from circle center equal to radius", function() {
			let circle = new Circle({ x: 1, y: 1 }, 5);
			let point = new Point(4, 5);
			assert.ok(circle.hasPoint(point));
		});
		it("should invalidate if distance of point from circle center is not equal to radius", function() {
			let circle = new Circle({ x: 1, y: 1 }, 5);
			let point = new Point(4, 2);
			assert.ok(!circle.hasPoint(point));
		});
		it("should invalidate if other is not a point ", function() {
			let circle = new Circle({ x: 1, y: 1 }, 5);
			let point = 1;
			assert.ok(!circle.hasPoint(point));
		});
	});
	describe("moveTo", function() {
		it("should move to given dimensions of point", function() {
			let circle = new Circle({ x: 1, y: 1 }, 5);
			let point = new Point(4, 2);
			let expected = new Circle({ x: 4, y: 2 }, 5);
			assert.deepStrictEqual(circle.moveTo(point), expected);
		});
		it("should not move to the given dimensions if it is not an instance Point", function() {
			let circle = new Circle({ x: 1, y: 1 }, 5);
			let point = 4;
			expected = undefined;
			assert.deepStrictEqual(circle.moveTo(point), expected);
		});
	});
	describe("Covers", function() {
		it("should validate if distance of point from circle center less to radius", function() {
			let circle = new Circle({ x: 1, y: 1 }, 5);
			let point = new Point(4, 3);
			assert.ok(circle.covers(point));
		});
		it("should invalidate if distance of point from circle center equal to radius", function() {
			let circle = new Circle({ x: 1, y: 1 }, 5);
			let point = new Point(4, 5);
			assert.ok(!circle.covers(point));
		});
		it("should invalidate if other is not a point ", function() {
			let circle = new Circle({ x: 1, y: 1 }, 5);
			let point = 1;
			assert.ok(!circle.covers(point));
		});
	});
});
