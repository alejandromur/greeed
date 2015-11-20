var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concatcss = require('gulp-concat-css');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');



gulp.task('sass', function(){

  gulp.src('src/scss/main.scss')
    .pipe(sass({
      includePaths: ['src/scss'],
      outputStyle: 'compact'
      }).on('error',sass.logError))
    .pipe(gulp.dest('src/css'))

});

gulp.task('css', function(){

  return gulp.src(['src/css/lib/normalize.css', 'src/css/main.css'])
    .pipe(autoprefixer('last 20 version'))
    .pipe(concatcss('main.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('dist/css'))

});



gulp.task('watch', function(){

  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/css/**/*.css', ['css']);

});

gulp.task('default', function(){

  gulp.start(['sass', 'css']);

});