var gulp = require('gulp'),
  $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*'],
    replaceString: /\bgulp[\-.]/
  });

var paths = {
  'sketchSrc': './src/sketch/*.sketch', // 対象のSketchファイル
  'distDir' : './dist/' // 書き出すディレクトリ（のルート）
}

// タスクの登録
gulp.task('sketch', function() {
  return gulp.src(paths.sketchSrc)
    .pipe($.sketch({
      export: 'slices' // 書き出す対象の設定
    }))
    .pipe(gulp.dest(paths.distDir + 'images/')); // 書き出し先
});

// 対象のSketchファイルの監視
gulp.task('watch', function() {
  gulp.watch([paths.sketchSrc], ['sketch']);
});

// gulpで実行されるタスク
gulp.task('default', ['sketch', 'watch']);