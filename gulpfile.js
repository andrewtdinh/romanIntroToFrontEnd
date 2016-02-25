var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sequence = require('run-sequence');

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

gulp.task('build', function(callback){
  sequence('clean', ['copy-html', 'copy-css', 'do-something'], callback);
});
