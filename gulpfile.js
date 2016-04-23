var gulp = require('gulp');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

gulp.task('runeverything', ['watch','one','concatScripts','browser-sync'], function(){});

gulp.task('watch', function () {
  gulp.watch('./*.styl',['one']);
 });

gulp.task('one', function () {
  return gulp.src('./styles.styl')
    .pipe(stylus())
    .pipe(gulp.dest(''));
});


gulp.task("concatScripts", function() {
            gulp.src([
              '/app.js',
              '/other.js'])
            .pipe(concat("app.js"))
            .pipe(gulp.dest('js'));
          });
// gulp.watch('*.styl', ['browser-sync']);

// gulp.task('browser-sync', function() {
//               browserSync({
//                   server: {
//                       baseDir: "./"
//                   }
//               });
//           });
gulp.task('browser-sync', function() {
    browserSync.init({
      server: "./"

    });
    // return gulp.src("/*.css")
    //     .pipe(styl())
    //     .pipe(gulp.dest("/"))
    //     .pipe(browserSync.stream());
gulp.watch('*.styl').on('change',browserSync.reload);

});

// gulp.task('default', ['serve']);
