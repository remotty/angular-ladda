/* jshint node:true */

var pkg = require('./package.json');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('jshint', function () {
  return gulp.src('src/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});

gulp.task('compress', function() {
  gulp.src('src/*.js')
    .pipe($.uglify())
    .pipe($.header("/*! <%= name %> <%= version %> */\n", { name: pkg.name, version: pkg.version } ))
    .pipe($.rename({ suffix:'.min' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('build', ['jshint', 'compress'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});
