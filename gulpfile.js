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

gulp.task('javascript', function() {
  gulp.src('src/*.js')
    .pipe($.uglify())
    .pipe($.header("/*! <%= name %> <%= version %> */\n", { name: pkg.name, version: pkg.version } ))
    .pipe($.rename({ suffix:'.min' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('serve', function() {
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(serveStatic('./test/app'))
    // paths to bower_components should be relative to the current file
    // e.g. in app/index.html you should use ../bower_components
    .use('/bower_components', serveStatic('bower_components'))
    .use('/src', serveStatic('src'))
    .use(serveIndex('app'));

  require('http').createServer(app)
    .listen(9000)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:9000');
    });
});

gulp.task('protractor', function() {
  var httpPort = 9001;
  var serveStatic = require('serve-static');
  var serveIndex = require('serve-index');
  var app = require('connect')()
    .use(serveStatic('./test/e2e/app'))
    // paths to bower_components should be relative to the current file
    // e.g. in app/index.html you should use ../bower_components
    .use('/bower_components', serveStatic('bower_components'))
    .use('/dist', serveStatic('dist'))
    .use(serveIndex('app'));

  var server = require('http').createServer(app)
    .listen(httpPort)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:' + httpPort);
    });

  gulp.src(['./test/e2e/*.js'])
      .pipe($.protractor.protractor({
          configFile: './protractor.conf.js',
          args: ['--baseUrl', 'http://127.0.0.1:' + httpPort]
      })) 
      .on('error', function(e) { throw e })
      .on('end', function() {
        server.close();
      });
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('build', ['javascript'], function () {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('test', ['build'], function () {
  gulp.start('protractor');
});

gulp.task('copysrc', function () {
  gulp.src('src/*.js')
    .pipe($.header("/*! <%= name %> <%= version %> */\n", { name: pkg.name, version: pkg.version } ))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean', 'jshint'], function () {
  gulp.start('build', 'copysrc');
});
