const gulp = require('gulp');
const puml = require('gulp-puml');
const cache = require('gulp-cached');
const browserSync = require('browser-sync').create();
const [target, src] = ['./', 'src/puml/**/*.puml'];
const runSequence = require('gulp4-run-sequence');
const gulpif = require('gulp-if');
const exec = require('child_process').exec;

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
		gulp.watch(src).on("change", function (fileName) {
			// 行数が多いことにより、gulpがうまくいかないためjava側で実行
			/** @see https://baserproject.github.io/5/ucmitz/etc/troubleshooting#gulp-pumlにてplantumlのコンパイルが失敗する場合 */
			if (fileName === "src/puml/5/ucmitz/svg/class/manage_contents.puml") {
				exec(`java -jar plantuml.jar -verbose -o "../../../../../../5/ucmitz/svg/class"  ${fileName}  -tsvg`,
					function (error, stdout, stderr) {
						console.log('stdout: ' + stdout);
						console.log('stderr: ' + stderr);
						if (error !== null) {
							console.log('exec error: ' + error);
						}
				});
			} else {
				return runSequence(
					'puml',
					'bs-reload'
				);
			}
		});
	})
));
