//Less configuration
var gulp = require('gulp');
var less = require('gulp-less');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleanCSS = new LessPluginCleanCSS({ advanced: true });

gulp.task('less', function(){
    gulp.src('*.less')
        .pipe(less())
        .pipe(gulp.dest(function(f){
            return f.base;
        }));
});

gulp.task('less-minify', function(){
    gulp.src('*.less')
        .pipe(less({
            plugins: [cleanCSS]
        }))
        .pipe(gulp.dest(function(f){
            return f.base;
        }));
})

gulp.task('default', ['less'], function(){
    gulp.watch('*.less', ['less']);
});