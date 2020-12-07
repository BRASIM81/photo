const   gulp = require('gulp'),
        autoprefixer = require('gulp-autoprefixer'),
        browsersync = require('browser-sync').create(),
        reload = browsersync.reload,
        sass = require('gulp-sass'),
        cleancss = require('gulp-clean-css'),
        sourcemaps = require('gulp-sourcemaps'),
        concat = require('gulp-concat'),
        imagemin = require('gulp-imagemin'),
        changed = require('gulp-changed'),
        uglify = require('gulp-uglify'),
        pug = require('gulp-pug'),
        lineec = require('gulp-line-ending-corrector');

function css(){
    return gulp.src('./src/sass/**/*.sass')
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(lineec())
    .pipe(gulp.dest('./dest/css'));
}

function javascript(){
    return gulp.src('./src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(lineec())
    .pipe(gulp.dest('./dest/js'));
}

function imgmin() {
    return gulp.src('./src/img/*.jpg')
    .pipe(changed('./dest/img'))
    .pipe(imagemin([
        imagemin.gifsicle({interlaced:true}),
        imagemin.jpegtran({progressive:true}),
        imagemin.optipng({optimizationLevel:5})
    ]))
    .pipe(gulp.dest('./dest/img'));
}

function pugToHtml() {
    return gulp.src('./src/**/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./dest/'));
}

function watch() {
    browsersync.init({
        server: {
            baseDir: './dest/'
        }
    });
    gulp.watch('./src/sass/**/*.sass', css);
    gulp.watch('./src/js/**/*.js', javascript);
    gulp.watch('./src/img/*.jpg', imgmin);
    gulp.watch('./src/**/*.pug', pugToHtml);
    gulp.watch(['./dest/*.html', './src/sass/**/*.sass', './src/js/**/*.js', './src/img/*.jpg']).on('change', browsersync.reload);
}


exports.css = css;
exports.javascript = javascript;
exports.imgmin = imgmin;
exports.pugToHtml = pugToHtml;
exports.watch = watch;

var build = gulp.parallel(watch);

gulp.task('default', build);