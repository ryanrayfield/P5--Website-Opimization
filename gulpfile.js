var gulp = require('gulp');

gulp.task('default', function() {
    var gulp = require('gulp');
var imageop = require('gulp-image-optimization');
 
gulp.task('images', function(cb) {
    gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('dist/views/images')).on('end', cb).on('error', cb);
});
  // place code for your default task here
});