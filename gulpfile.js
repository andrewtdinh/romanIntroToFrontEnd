var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('server', ['copy-html'], function(){
  gulp.src('./dist')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('copy-html', function(){
  return gulp
    .src('./src/*')
    .pipe(gulp.dest('dist'));
});
