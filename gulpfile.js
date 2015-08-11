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
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    rev = require('gulp-rev-append'),
    htmlmin = require('gulp-htmlmin'),
    watch = require('gulp-watch');

var defaults = ['clean', 'html', 'javescript'];

gulp.task('html', function() {
  gulp.src('html/**/*.html')
    .pipe(rev())
    .pipe(gulp.dest('dist/html'))
    .pipe(notify({ message: 'html finish' }));
});

gulp.task('javescript', function() {
  gulp.src('js/lib/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('dist/js/lib'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/lib'))
    .pipe(notify({ message: 'javescript lib finish' }));  
  
  gulp.src('js/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('dist/js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'javescript finish' }));
});

gulp.task('clean', function() {
  gulp.src(['dist/**/*.js'], {read: false})
    .pipe(clean({force: true}))
    .pipe(notify({ message: 'clean finish' }));
});

gulp.task('watch', function() { 
  gulp.watch('js/**/*.js', defaults);
});

gulp.task('default', defaults);