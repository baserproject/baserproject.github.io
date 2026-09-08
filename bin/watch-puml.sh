#!/bin/bash
#
# PlantUML のソースを監視し、変更があった際に SVG へ書き出す
#
#   ./bin/watch-puml.sh
#
# 監視には fswatch が必要となる
#   brew install fswatch
#
set -eu

cd "$(dirname "$0")/.."

if ! command -v fswatch > /dev/null 2>&1; then
	echo "fswatch が見つかりません。以下のコマンドでインストールしてください。" >&2
	echo "  brew install fswatch" >&2
	exit 1
fi

echo "src/puml/ を監視しています。終了する場合は Ctrl + C を押してください。"
fswatch -0 -e '.*' -i '\.puml$' src/puml | while read -r -d '' file; do
	./bin/build-puml.sh "${file#$(pwd)/}" || true
done
