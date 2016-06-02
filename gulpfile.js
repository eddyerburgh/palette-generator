var gulp = require('gulp');

var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var mocha = require('gulp-mocha');

// Compile SCSS
gulp.task('sass', function() {
  return gulp.src('./src/scss/style.scss')
  	.pipe(sass())
  	.pipe(gulp.dest('./css'))
  	.pipe(browserSync.reload({
      stream: true
    }))
});

// Compile Pug
gulp.task('pug', function(){
	return gulp.src('./src/pug/index.pug')
		.pipe(pug())
		.pipe(gulp.dest('./'))
});

// Compile JavaScript
gulp.task('scripts', function(){
  browserify('./src/js/main.js')
  .bundle()
  .on('error', function(e) {
    gutil.log(e);
  })
  .pipe(source('main.js'))
  .pipe(gulp.dest('./js'))
})

// Run tests
gulp.task('mocha', function() {
    return gulp.src(['test/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .on('error', gutil.log);
});

// Live reload
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

// Watch For Changes
gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('./src/scss/**/*.scss', ['sass']);
	gulp.watch('./src/pug/**/*.pug', ['pug']);
	gulp.watch('./src/js/**/*.js', ['scripts']);
  gulp.watch(['./src/js/**/*.js', './test/**'], ['mocha']);
});

