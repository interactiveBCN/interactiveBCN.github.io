'use strict';
var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

var config = {
  autoprefixer: { browsers: ['last 3 version'] },
  src: ['src/**/*.less', '!**/*.dep.less'],
  dest: '/'
};

gulp.task('less', function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(less(config.settings))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(gulp.dest(config.dest));
});

gulp.task('minless', function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(less(config.settings))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dest));
});


gulp.task('watch', function() {
        watch(config.src, function() {
        gulp.start('less');
        gulp.start('minless');
    });
});


