/**
 * Created by Ankith Jain on 8/28/2016.
 */
'use strict';
// Test spec for ScientificCalculator
describe("ScientificCalculator", function () {
    // Variable declaration
    var calculator;
    beforeEach(function () {
        calculator = new ScientificCalculator();
    });
    // Tests
    it("extends ScientificCalculator", function () {
        expect(calculator instanceof ScientificCalculator).toBeTruthy();
    });

    it("returns the sine of PI / 2", function () {
        expect(calculator.sin(Math.PI / 2)).toEqual(1);
    });

    it("returns the cosine of PI", function () {
        expect(calculator.cos(Math.PI)).toEqual(-1);
    });
    it("returns the tangent of 0", function () {
        expect(calculator.tan(0)).toEqual(0);
    });
    it("returns the logarithm of 1", function () {
        expect(calculator.log(1)).toEqual(0);
    });

});