/**
 * Created by ADMIN on 8/28/2016.
 */
'use strict';
// Test spec for Calculator
describe("Calculator", function () {
    // Variable declaration
    var calculator;
    beforeEach(function () {
        calculator = new Calculator();
    });
    // Tests
    it("extends Calculator", function () {
        expect(calculator instanceof Calculator).toBeTruthy();
    });
    it("adds 1 and 2", function () {
        expect(calculator.add(1, 2)).toEqual(3);

    });
    it("should subtract two numbers", function () {
        expect(calculator.subtract(9, 2)).toEqual(7);
    });
    it("multiplies 4 and 3", function () {
        expect(calculator.multiply(4, 3)).toEqual(12);
    });
    it("divides 10 by 2", function () {
        expect(calculator.divide(10, 2)).toEqual(5);
    });
    it("does not divide by 0", function () {
        expect(calculator.divide(5, 0)).toEqual(NaN);
    });

});