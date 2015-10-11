var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task('serve', function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./styles/*.css").on('change',function(){
    	return gulp.src("./styles/style.css")
        .pipe(browserSync.stream());
    });
    gulp.watch("./partials/*.html").on('change', browserSync.reload);
});
gulp.task('default', ['serve']);