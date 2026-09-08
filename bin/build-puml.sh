#!/bin/sh
#
# PlantUML のソースを SVG に書き出す
#
# src/puml/ 配下の puml ファイルを元に、ドキュメントルート配下の同階層に出力する
#   src/puml/5/ucmitz/svg/use_case/sample.puml → 5/ucmitz/svg/use_case/sample.svg
#
# 引数なしで実行すると src/puml/ 配下の全ファイルを変換する
#   ./bin/build-puml.sh
# 引数にファイルを指定すると、そのファイルのみ変換する
#   ./bin/build-puml.sh src/puml/5/ucmitz/svg/use_case/sample.puml
#
set -eu

cd "$(dirname "$0")/.."
root=$(pwd)
jar="$root/plantuml.jar"

if [ ! -f "$jar" ]; then
	echo "plantuml.jar が見つかりません。以下のコマンドでダウンロードしてください。" >&2
	echo "  curl -JLO http://sourceforge.net/projects/plantuml/files/plantuml.jar/download" >&2
	exit 1
fi

build() {
	src="$1"
	case "$src" in
		src/puml/*) ;;
		*)
			echo "src/puml/ 配下のファイルを指定してください: $src" >&2
			return 1
			;;
	esac
	relative=${src#src/puml/}
	destination="$root/$(dirname "$relative")"
	mkdir -p "$destination"
	java -jar "$jar" -o "$destination" -tsvg "$src"
	echo "$src -> ${relative%.puml}.svg"
}

if [ $# -gt 0 ]; then
	for file in "$@"; do
		build "$file"
	done
else
	find src/puml -name '*.puml' | sort | while read -r file; do
		build "$file"
	done
fi
