var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('default', function () {
  console.log("Hello Hello Hello ... is there anyone in there?");
});

gulp.task('one', function () {
  return gulp.src('./styles.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./build'));
});


gulp.task("concatScripts", function() {
            gulp.src([
              '/app.js',
              '/other.js'])
            .pipe(concat("app.js"))
            .pipe(gulp.dest('js'));
          });
