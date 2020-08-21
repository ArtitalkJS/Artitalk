const gulp = require('gulp')
const uglify = require('gulp-uglify-es').default
const cleanCSS = require('gulp-clean-css')
const concat = require('gulp-concat')
const rename = require('gulp-rename')

gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('artitalk.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('concat-js', () => {
  return gulp.src(['src/plugins/*.js', 'src/main.js'])
    .pipe(concat('artitalk.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('minify-js', () => {
  return gulp.src('dist/js/artitalk.js')
    .pipe(uglify())
    .pipe(rename('artitalk.min.js'))
    .pipe(gulp.dest('dist/js'))
});

gulp.task('default', gulp.series('minify-css', 'concat-js', 'minify-js'));
