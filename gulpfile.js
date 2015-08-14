var gulp = require('gulp'), 
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    rev = require('gulp-rev-append'),
    htmlmin = require('gulp-htmlmin'),
    watch = require('gulp-watch'),
    less = require('gulp-less');

var defaults = ['clean', 'html', 'javescript', 'less'];

var dev_html = 'dev/html/**/*.html';
var dest_html = 'dist/html';

var dev_js = 'dev/js/**/*.js';
var dest_js = 'dist/js';

var dev_less = 'dev/less/**/*.less';
var dest_less = 'dist/css';

gulp.task('html', function() {
  gulp.src(dev_html)
    .pipe(rev())
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(gulp.dest('dist/html'))
    .pipe(notify({ message: 'html finish' }));
});

gulp.task('javescript', function() {
//	 pipe(concat('jlib.js'))
  gulp.src(dev_js)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(gulp.dest(dest_js))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(dest_js))
    .pipe(notify({ message: 'javescript lib finish' }));  
  
//  gulp.src(dev_js)
//    .pipe(jshint('.jshintrc'))
//    .pipe(jshint.reporter('default'))
//    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
//    .pipe(gulp.dest(dest_js))
//    .pipe(rename({ suffix: '.min' }))
//    .pipe(uglify())
//    .pipe(gulp.dest(dest_js))
//    .pipe(notify({ message: 'javescript finish' }));
});

gulp.task('less', function() {
  gulp.src(dev_less)
    .pipe(less())
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(minifycss({compatibility: 'ie7'}))
    .pipe(gulp.dest(dest_less))
    .pipe(notify({ message: 'less finish' }));
});

gulp.task('clean', function() {
  gulp.src(['dist/**/*.*'], {read: false})
    .pipe(clean({force: true}))
    .pipe(notify({ message: 'clean finish' }));
});

gulp.task('lesswatch', function() {
  gulp.watch('dev/less/**/*.less', ['less']);
});

gulp.task('watch', function() { 
  gulp.watch('dev/**/*.*', defaults);
});

gulp.task('default', defaults);