var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var svgmin = require('gulp-svgmin');
var svgsprite = require('gulp-svg-sprites');

gulp.task('default', function () {
    gulp.src('svg/*.svg')
        .pipe(svgsprite({
            mode: 'symbols',
            common: 'diy-svg-icn',
            svgId: 'diy-icn-%f',
            svg: {
                symbols: 'diy-icns-preview.svg'
            },
            preview: {
                symbols: 'index.html'
            }
        }))
        .pipe(gulp.dest('dist'));

    gulp.src('./svg/*.svg')
        .pipe(svgmin())
        .pipe(svgstore({
            fileName: 'diy-icons.svg',
            prefix: 'diy-icn-',
            transformSvg: function transformSvg ($svg, callback) {
                $svg.attr('style', 'display:none');
                var symbols = $svg.find('symbol');
                symbols.forEach(function (s) {
                    var paths = s.find('path');
                    paths.forEach(function (p) {
                        p.attr('fill', '');
                    });
                    var groups = s.find('g');
                    groups.forEach(function (g) {
                        g.attr('fill', '');
                    });
                });
                callback(null, $svg);
            }
        }))
        .pipe(gulp.dest('./dist'));
});
