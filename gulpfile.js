/**
 * Created by Administrator on 2017/8/14 0014.
 */

var minifycss = require('gulp-minify-css'), // CSSѹ��
    uglify = require('gulp-uglify'), // jsѹ��
    minhtml = require('gulp-htmlmin'), //htmlѹ��
    imagemin = require('gulp-imagemin'); //ͼƬѹ��
    var gulp = require('gulp');
var rename = require("gulp-rename");

gulp.task('html',function(){
    return gulp.src('myitem2/*.html')
        .pipe(minhtml({collapseWhitespace: true}))
        .pipe(rename({
            basename:'_index'
        }))
        .pipe(gulp.dest('myitem2/'))
})
gulp.task('css',function(){
    return gulp.src('myitem2/src/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('myitem2/dist/css/'))
})

gulp.task('js',function(){
    return gulp.src('myitem2/src/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('myitem2/dist/js/'))
})

gulp.task('img',function(){
    return gulp.src('myitem2/image/*.jpg')
        .pipe(imagemin())
        .pipe(gulp.dest('myitem2/dist/image'))
})

gulp.task('build',['html','css','js','img'])