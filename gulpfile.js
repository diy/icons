var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');


gulp.task('default', function () {
    gulp.src('./svg/*.svg')
        .pipe(svgmin())
        .pipe(svgstore({ fileName: 'diy-icons.svg', prefix: 'diy-icn-' }))
        .pipe(gulp.dest('./dist'));
});
