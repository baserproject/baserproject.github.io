const gulp = require('gulp');
const puml = require('gulp-puml');
const browserSync = require('browser-sync').create();
const exec = require('child_process').exec;

/**
 * ソースファイル
 * @type {string}
 */
const src = 'src/puml/**/**/*.puml';

/**
 * コンパイル先
 * @type {string}
 */
const target = './';

/**
 * Java実行対象ファイル 
 * 行数が多いことにより、gulp-puml がうまくいかない場合、java側で実行する
 * @see https://baserproject.github.io/5/ucmitz/etc/troubleshooting#gulp-pumlにてplantumlのコンパイルが失敗する場合
 * @type {string[]}
 */
const pumlAnalogTargets = [
	"src/puml/5/ucmitz/svg/class/baser-core/manage_contents.puml",
	"src/puml/5/ucmitz/svg/class/baser-core/manage_sites.puml",
	"src/puml/5/ucmitz/svg/class/baser-core/manage_content_folders.puml",
];

/**
 * browser-sync を初期化
 */
function initBs() {
    browserSync.init({
		proxy: 'localhost:4000'
    });
}

/**
 * ブラウザをリロード
 */
function bsRload(){
    browserSync.reload();
}

/**
 * PlantUML を書き出す
 * @returns {*}
 */
function buildPuml(file) {
	if (pumlAnalogTargets.includes(file)) {
		path = file.replace('src/puml/', '');
		fileName = path.split('\/').pop();
		reg = new RegExp('\/' + fileName.replace('.', '\.'), 'g');
		targetDir = '../../../../../../../' + path.replace(reg, '');
		exec(`java -jar plantuml.jar -verbose -o "${targetDir}"  ${file}  -tsvg`,
			function (error) {
				if (error !== null) {
					console.log('exec error: ' + error);
				}
			}
		);
	} else {
		// ファイル単体で引き渡す
		gulp.src([file], { base: './src/puml' })
			.pipe(puml({format: 'svg'}))
			.pipe(gulp.dest(target));
		// ジェネレーターに時間がかかるため12秒待ってからリロード
		setTimeout(function(){
			browserSync.reload();
		}, 12000)
	}
}

/**
 * ファイルを監視する
 */
function watchFiles() {
	gulp.watch(src).on('change', function(file){
		console.log(file);
		buildPuml(file);
	});
	gulp.watch(['5/**/**/*.md']).on('change', function (file){
		console.log(file);
		// ジェネレーターに時間がかかるため12秒待ってからリロード
		setTimeout(function(){
			browserSync.reload();
		}, 12000)
	});
}

/**
 * 処理実行
 */
gulp.task('default', gulp.parallel(initBs, watchFiles));

