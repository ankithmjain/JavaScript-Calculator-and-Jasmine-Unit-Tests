/**
 * Created by Ankith Jain on 8/28/2016.
 */
function ScientificCalculator() {

    // Declaring variable sc which creates an object of type ScientificCalculator
    var sc = this;
    sc.sin = sin;
    sc.cos = cos;
    sc.tan = tan;
    sc.log = log;
    /**
     * Provides sine of a number
     * @param {Number} x
     * @return {Number} sine of x
     */
    function sin(x) {
        return Math.sin(x);
    }

    /**
     * Provides cosine of a number
     * @param {Number} x
     * @return {Number} cosine of x
     */
    function cos(x) {
        return Math.cos(x);
    }

    /**
     * Provides tangent of a number
     * @param {Number} x
     * @return {Number} tangent of x
     */
    function tan(x) {
        return Math.tan(x);
    }

    /**
     * Provides logarithm of a number
     * @param {Number} x
     * @return {Number} logarithm of x
     */
    function log(x) {
        return Math.log(x);
    }
}