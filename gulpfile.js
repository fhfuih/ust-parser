var gulp = require('gulp');
var del = require('del');
var minify = require('gulp-minifier');
var nunjucks = require('gulp-nunjucks');
var data = require('gulp-data');
var fs = require('fs');
var yaml = require('js-yaml');
var inline = require('gulp-inline-source');
var rename = require('gulp-rename');

var cssConfig = {

};

var jsConfig = {

};

var htmlConfig = {
  collapseWhitespace: true,
  removeComments: true,
  minifyCSS: cssConfig,
  minifyJS: jsConfig,
};

gulp.task('copyResource', function () {
  return gulp.src([
    'src/resource/*',
    'src/favicons/*'
  ], {
    base: 'src',
  }).pipe(gulp.dest('dist/'))
})

gulp.task('clean-dist', function () {
  return del(['dist']);
});

gulp.task('clean-js', function () {
  return del('src/template/js/main.js');
});


gulp.task('build', function () {
  // inject data to template
  return gulp.src('src/template/index.nunjucks')
    .pipe(data(yaml.safeLoad(fs.readFileSync('src/template/data.yaml'))))
    .pipe(nunjucks.compile())
    // rename for the sake of output file and ext detection by minifier
    .pipe(rename('index.html'))
    // inline-ize js and css
    .pipe(inline({compress: false}))
    // minify
    .pipe(minify({
      minify: true,
      minifyHTML: htmlConfig,
      minifyJS: jsConfig,
      minifyCSS: cssConfig,
    }))
    .pipe(gulp.dest('dist/'))
});

gulp.task('build-js', function () {
  return gulp.src('src/template/js/main.nunjucks')
    .pipe(data(yaml.safeLoad(fs.readFileSync('src/template/data.yaml'))))
    .pipe(nunjucks.compile())
    .pipe(rename('main.js'))
    .pipe(gulp.dest('src/template/js/'))
});

gulp.task('default', gulp.series(
  'clean-dist',
  gulp.parallel('copyResource', gulp.series('build-js', 'build')),
  'clean-js'
));
