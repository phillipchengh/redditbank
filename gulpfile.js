var gulp = require('gulp');
var spawn = require('child_process').spawn;

var util = require('gulp-util');
var less = require('gulp-less');
var concat = require('gulp-concat');

var onError = function(err) {
  util.beep();
  console.log(err);
};

gulp.task('styles', function() {

});

gulp.task('scripts', function() {
   
});


gulp.task('watch', function() {
  
});

gulp.task('default', ['watch', 'styles', 'scripts']);

gulp.task('auto-reload', function() {
  var process;
  function restart() {
    if (process) {
      process.kill();
    }

    process = spawn('gulp', ['default'], {stdio: 'inherit'});
  }

  gulp.watch('gulpfile.js', restart);
  restart();
});
