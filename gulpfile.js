var gulp = require('gulp');
var del = require('del');
var minify = require('gulp-minifier');

var cssConfig = {

};

var jsConfig = {

};

var htmlConfig = {
  collapseWhitespace: true,
  minifyCSS: cssConfig,
  minifyJS: jsConfig,
};

gulp.task('minify', function () {
  return gulp.src('src/index.html')
    .pipe(minify({
      minify: true,
      minifyHTML: htmlConfig,
      minifyJS: jsConfig,
      minifyCSS: cssConfig,
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('copyResource', function () {
  return gulp.src([
    'src/resource/*',
    'src/favicons/*'
  ], {
    base: 'src',
  }).pipe(gulp.dest('dist/'))
})

gulp.task('clean', function () {
  return del(['dist']);
});

gulp.task('default', gulp.series(
  'clean',
  gulp.parallel('minify', 'copyResource'),
));
