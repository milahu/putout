'use strict';

const {createTest} = require('@putout/test');
const removeEmptyImport = require('.');

const test = createTest(__dirname, {
    'remove-empty-import': removeEmptyImport,
});

test('plugin-remove-empty: import: report', (t) => {
    t.report('import', 'Empty import statement');
    t.end();
});

test('plugin-remove-empty: import', (t) => {
    t.transform('import', '\n\n');
    t.end();
});

test('plugin-remove-empty: import: not empty', (t) => {
    t.noTransform('not-empty-import');
    t.end();
});

test('plugin-remove-empty: import: css', (t) => {
    t.noTransform('import-css');
    t.end();
});

test('plugin-remove-empty: import: min', (t) => {
    t.noTransform('import-min');
    t.end();
});

test('plugin-remove-empty: import: options', (t) => {
    t.noTransformWithOptions('options', {
        ignore: [
            'firebase',
        ],
    });
    t.end();
});

