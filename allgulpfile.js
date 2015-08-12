//    编译Sass (gulp-ruby-sass)
//    Autoprefixer (gulp-autoprefixer)
//    缩小化(minify)CSS (gulp-minify-css)
//    JSHint (gulp-jshint)
//    拼接 (gulp-concat)
//    丑化(Uglify) (gulp-uglify)
//    图片压缩 (gulp-imagemin)
//    即时重整(LiveReload) (gulp-livereload)
//    清理档案 (gulp-clean)
//    图片快取，只有更改过得图片会进行压缩 (gulp-cache)
//    更动通知 (gulp-notify)
//    连接哈希 (gulp-rev-append)
//    压缩页面javascript、css，去除页面空格、注释，删除多余属性等操作 (gulp-htmlmin)

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
  gulp.src('*.html')
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

//gulp.task('testAutoFx', function () {
//    gulp.src('src/css/index.css')
//        .pipe(autoprefixer({
//            browsers: ['last 2 versions'],
//            cascade: true, //是否美化属性值 默认：true 像这样：
//            //-webkit-transform: rotate(45deg);
//            //        transform: rotate(45deg);
//            remove:true //是否去掉不必要的前缀 默认：true
//        }))
//        .pipe(gulp.dest('dist/css'));
//});


//gulp.task('testConcat', function () {
//    gulp.src('src/js/*.js')
//        .pipe(concat('all.js'))//合并后的文件名
//        .pipe(gulp.dest('dist/js'));
//});

//gulp.task('testImagemin', function () {
//    gulp.src('src/img/*.{png,jpg,gif,ico}')
//        .pipe(imagemin())
//        .pipe(gulp.dest('dist/img'));
//});
//or------
//gulp.task('testImagemin', function () {
//    gulp.src('src/img/*.{png,jpg,gif,ico}')
//        .pipe(imagemin({
//            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
//            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
//            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
//            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
//        }))
//        .pipe(gulp.dest('dist/img'));
//});
//or---------------
//深度压缩图片
//gulp.task('testImagemin', function () {
//    gulp.src('src/img/*.{png,jpg,gif,ico}')
//        .pipe(imagemin({
//            progressive: true,
//            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
//            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
//        }))
//        .pipe(gulp.dest('dist/img'));
//});
//改动过的图片压缩
//gulp.task('testImagemin', function () {
//    gulp.src('src/img/*.{png,jpg,gif,ico}')
//        .pipe(cache(imagemin({
//            progressive: true,
//            svgoPlugins: [{removeViewBox: false}],
//            use: [pngquant()]
//        })))
//        .pipe(gulp.dest('dist/img'));
//});

//gulp.task('testHtmlmin', function () {
//    var options = {
//        removeComments: true,//清除HTML注释
//        collapseWhitespace: true,//压缩HTML
//        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
//        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
//        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
//        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
//        minifyJS: true,//压缩页面JS
//        minifyCSS: true//压缩页面CSS
//    };
//    gulp.src('src/html/*.html')
//        .pipe(htmlmin(options))
//        .pipe(gulp.dest('dist/html'));
//});

//-----------------------------------------------------

// 图片
//gulp.task('images', function() { 
//  return gulp.src('src/images/**/*')
//    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
//    .pipe(gulp.dest('dist/images'))
//    .pipe(notify({ message: 'Images task complete' }));
//});
// 
//// 清理
//gulp.task('clean', function() { 
//  return gulp.src(['dist/styles', 'dist/scripts', 'dist/images'], {read: false})
//    .pipe(clean());
//});
// 
//// 预设任务
//gulp.task('default', ['clean'], function() { 
//    gulp.start('styles', 'scripts', 'images');
//});
// 
//// 看手
//gulp.task('watch', function() {
// 
//  // 看守所有.scss档
//  gulp.watch('src/styles/**/*.scss', ['styles']);
// 
//  // 看守所有.js档
//  gulp.watch('src/scripts/**/*.js', ['scripts']);
// 
//  // 看守所有图片档
//  gulp.watch('src/images/**/*', ['images']);
// 
//  // 建立即时重整伺服器
//  var server = livereload();
// 
//  // 看守所有位在 dist/  目录下的档案，一旦有更动，便进行重整
//  gulp.watch(['dist/**']).on('change', function(file) {
//    server.changed(file.path);
//  });
// 
//});




