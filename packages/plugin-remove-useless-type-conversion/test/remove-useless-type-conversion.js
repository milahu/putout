'use strict';

const {createTest} = require('@putout/test');
const removeUselessTypeConversion = require('..');

const test = createTest(__dirname, {
    'remove-useless-type-conversion': removeUselessTypeConversion,
});

test('plugin-remove-useless-type-conversion: report', (t) => {
    t.report('bool', 'Useless type conversion should be avoided');
    t.end();
});

test('plugin-remove-useless-type-conversion: transform', (t) => {
    t.transform('bool');
    t.end();
});

test('plugin-remove-useless-type-conversion: transform: typeof', (t) => {
    t.transform('typeof');
    t.end();
});

