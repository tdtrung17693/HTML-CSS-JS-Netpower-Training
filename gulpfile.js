var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
//convert scss files to css
gulp.task('sass',function(){
return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'app/scss/*.scss'])
  .pipe(sass())
  .pipe(gulp.dest('./app/css'))
  .pipe(browserSync.stream());
});