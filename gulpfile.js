/**
 * Created by Ankith Jain on 8/29/2016.
 */
'use strict';

var gulp = require('gulp');
var open = require('gulp-open');
// This gulp task opens Jasmine test execution results in a default browser
gulp.task('test', function () {
    gulp.src('./index.html')
        .pipe(open());
});
