const gulp = require ('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');

gulp.task('build:css', function() {
    gulp.src('styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('styles/'));
});

gulp.task('watch', function() {
    gulp.watch(['styles/**/*.scss'], function() {
        gulp.start('build:css');
    })
});

gulp.task('start', ['build:css', 'watch']);