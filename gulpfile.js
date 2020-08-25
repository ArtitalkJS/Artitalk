const gulp = require('gulp')
const uglify = require('gulp-uglify-es').default
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const rename = require('gulp-rename')

const minify_css = () => (
    gulp.src('src/css/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename('artitalk.min.css'))
        .pipe(gulp.dest('dist/css'))
);

const concat_js = () => (
    gulp.src(['src/plugins/*.js', 'src/main.js'])
        .pipe(concat('artitalk.js'))
        .pipe(gulp.dest('dist/js'))
);

const minify_js = () => (
    gulp.src('dist/js/artitalk.js')
        .pipe(uglify())
        .pipe(rename('artitalk.min.js'))
        .pipe(gulp.dest('dist/js'))
);

module.exports = {
    minify_css: minify_css,
    concat_js: concat_js,
    minify_js: minify_js
};

gulp.task('dist', gulp.parallel(
    minify_css,
    gulp.series(
        concat_js,
        minify_js
    )
))

gulp.task('default', gulp.series('dist'));
