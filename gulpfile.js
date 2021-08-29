var gulp = require('gulp');
var puml = require('gulp-puml');
var src = 'src/puml/**/*.puml';
var target = './';

gulp.task('puml', function () {
	return gulp.src(src)
		.pipe(puml({format: 'svg'}))
		.pipe(gulp.dest(target));
});

gulp.task('default', function(){
    gulp.watch(src, gulp.task('puml'));
});
