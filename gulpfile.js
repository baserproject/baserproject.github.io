const gulp = require('gulp');
const puml = require('gulp-puml');
const cache = require('gulp-cached');
const browserSync = require('browser-sync').create();
const src = 'src/puml/**/*.puml';
const target = './';
const runSequence = require('gulp4-run-sequence');
const { watch } = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync.init({
		proxy: 'localhost:4000'
    });
});

gulp.task('bs-reload', function(){
    browserSync.reload();
});

gulp.task('puml', function () {
	return gulp.src(src)
		.pipe(cache('puml'))
		.pipe(puml({format: 'svg'}))
		.pipe(gulp.dest(target));
});

gulp.task('default', gulp.series(
	gulp.parallel('browser-sync', 'puml', function () {
		watch(src, function () {
			return runSequence(
				'puml',
				'bs-reload'
			);
		});
	})
));
