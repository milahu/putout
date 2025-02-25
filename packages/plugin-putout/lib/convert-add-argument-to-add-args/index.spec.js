'use strict';

const {createTest} = require('@putout/test');
const convertAddArgumentToAddArgs = require('.');

const test = createTest(__dirname, {
    'putout/convert-add-argument-to-add-args': convertAddArgumentToAddArgs,
});

test('plugin-putout: convert-add-argument-to-add-args: report', (t) => {
    t.report('add-argument', 'Use addArgs instead of addArgument');
    t.end();
});

test('plugin-putout: convert-add-argument-to-add-args: transform', (t) => {
    t.transform('add-argument');
    t.end();
});

