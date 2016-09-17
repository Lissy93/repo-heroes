var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  sass = require('gulp-sass'),
  coffee = require('gulp-coffee');

gulp.task('sass', function () {
  gulp.src('./public/css/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('coffee', function (){
  gulp.src('./public/js/*.coffee')
      .pipe(plumber())
      .pipe(coffee())
      .pipe(gulp.dest('./public/js'))
      .pipe(livereload())
});

gulp.task('watch', function() {
  gulp.watch('./public/css/*.scss', ['sass']);
  gulp.watch('./public/js/*.coffee', ['coffee']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js coffee jade',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'sass',
  'develop',
  'watch'
]);
