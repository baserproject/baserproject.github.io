const gulp = require('gulp');
const puml = require('gulp-puml');
const cache = require('gulp-cached');
const browserSync = require('browser-sync').create();
const src = 'src/puml/**/*.puml';
const target = './';
const runSequence = require('gulp4-run-sequence');
const gulpif = require('gulp-if');

gulp.task('browser-sync', function() {
    browserSync.init({
		proxy: 'localhost:4000'
    });
});

gulp.task('bs-reload', function(){
    browserSync.reload();
});

gulp.task('puml', function () {
	// 初回時に全データを吐き出さないようにキャッシュされたかを確認
	const isCached = cache.caches['puml'] !== undefined;
	return gulp.src(src)
		.pipe(cache('puml'))
		.pipe(puml({format: 'svg'}))
		.pipe(gulpif(isCached, gulp.dest(target)));
});

gulp.task('watch', function() {
	return gulp.watch(src, ['default']);
});


gulp.task('default', gulp.series(
	gulp.parallel('browser-sync', 'puml', function () {
		gulp.watch(src).on("change", function () {
			return runSequence(
				'puml',
				'bs-reload'
			);
		});
	})
));
