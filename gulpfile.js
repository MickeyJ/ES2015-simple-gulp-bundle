var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('scripts', function () {
  browserify({entries: 'src/js/main.js', extensions: ['.js'], debug: true})
    .transform(babelify, { presets: ['es2015'] })
    .bundle()
    .pipe(source('script.min.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('watch', ['scripts'], function () {
  gulp.watch('src/js/**/*.js', ['scripts']);
});

gulp.task('default', ['watch']);