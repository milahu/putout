'use strict';

const {run, cutEnv} = require('madrun');

const env = {
    FORCE_COLOR: 3,
    SUPERTAPE_PROGRESS_BAR: 1,
    CI: 1,
    KEYPRESS: 1,
};

module.exports = {
    'wisdom': () => run(['lint', 'coverage']),
    'test': () => [env, `tape 'test/*.js' '{bin,lib}/**/*.spec.{js,mjs}'`],
    'watch:test': async () => [env, `nodemon -w bin -w lib -w test -x "${await cutEnv('test')}"`],
    'lint': () => `bin/putout.mjs .`,
    'fresh:lint': () => run('lint', '--fresh'),
    'fix:lint': () => run('lint', '--fix'),
    'fix:lint:fresh': () => run('fix:lint', '--fresh'),
    'lint:progress': () => run('lint', '--fix'),
    'lint:fresh': () => run('lint', '--fresh'),
    'coverage': async () => [env, `c8 ${await cutEnv('test')}`],
    'report': () => `nyc report --reporter=text-lcov | coveralls`,
};

