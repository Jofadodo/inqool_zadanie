const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const webpack = require('webpack-stream');
const server = require('browser-sync').create();
const argv = require('yargs').argv;

const isProduction = (argv.production === undefined) ? false : true;

gulp.task('php', function () {
    return gulp.src('src/**/*.php').pipe(gulp.dest('dist'));
});

gulp.task('img', function () {
    return gulp.src('src/img/**/*.{jpg,jpeg,png,svg,gif}').pipe(gulp.dest('dist/img'));
});

gulp.task('sass', function () {
    return gulp
        .src('src/styles/style.sass')
        .pipe(sass({ errLogToConsole: true }))
        .pipe(gulp.dest('dist/css'))
        .pipe(server.stream());
});

gulp.task('js', function () {
    return gulp
        .src('src/js/client.js')
        .pipe(
            webpack({
                mode: isProduction ? "production" : 'development',
                output: {
                    filename: 'client.js',
                },
                externals: {
                    jquery: 'jQuery',
                },
            })
        )
        .pipe(gulp.dest('dist/js'))
        .pipe(server.stream());
});

gulp.task('minify-css', function () {
    return gulp
        .src('dist/css/style.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('build', function (done) {
    return gulp.series('img', 'sass', 'js', 'minify-css', 'php')(done);
});

gulp.task('dev', function (done) {
    return gulp.series('build', 'serve', 'watch')(done);
});

gulp.task('serve', function (done) {
    server.init({
        server: {
            baseDir: './',
        },
    });
    done();
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.{jpg,jpeg,png,svg,gif}', gulp.series('img', 'reload'));
    gulp.watch('src/**/*.sass', gulp.series('sass', 'reload'));
    gulp.watch('src/**/*.js', gulp.series('js', 'reload'));
    gulp.watch('**/*.html', gulp.series('reload'));
});

gulp.task('reload', function (done) {
    server.reload();
    done();
});