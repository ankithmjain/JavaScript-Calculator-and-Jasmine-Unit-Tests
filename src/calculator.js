/**
 * Created by Ankith Jain on 8/28/2016.
 */
function Calculator() {

    // Declaring variable calc which creates an object of type ScientificCalculator
    var calc = this;
    calc.add = add;
    calc.subtract = subtract;
    calc.multiply = multiply;
    calc.divide = divide;

    /**
     * Adds two numbers
     * @param {Number} x
     * @param {Number} y
     * @return {Number} sum
     */
    function add(x, y) {
        return x + y;
    }

    /**
     * Subtracts two numbers
     * @param {Number} x
     * @param {Number} y
     * @return {Number} difference
     */

    function subtract(x, y) {
        return x - y;
    }

    /**
     * Multiplies two numbers
     * @param {Number} x
     * @param {Number} y
     * @return {Number} product
     */

    function multiply(x, y) {
        return x * y;
    }

    /**
     * Divides two numbers
     * @param {Number} x
     * @param {Number} y
     * @return {Number} quotient
     */
    function divide(x, y) {
        // Checks if y is equal to zero, if zero it returns NaN
        if (y === 0) {
            return NaN;
        } else {
            return x / y;
        }

    }

}