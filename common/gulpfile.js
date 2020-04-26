const { src, dest, watch } = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

const build = () => tsProject.src()
  .pipe(tsProject())
  .pipe(src(['src/**', '!src/**/*.tsx', '!src/**/*.ts', '!src/**/*.js']))
  .pipe(dest('dist'));

function start() {
  watch('src/**', { events: 'all' }, build)
}

exports.start = start;
exports.default = build;