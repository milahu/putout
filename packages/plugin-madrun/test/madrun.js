'use strict';

const {createTest} = require('@putout/test');
const madrun = require('..');

const test = createTest(__dirname, {
    madrun,
});

test('plugin-madrun: transform', (t) => {
    t.transform('madrun');
    t.end();
});

test('plugin-madrun: no transform: no module.exports', (t) => {
    t.noTransform('no-module-exports');
    t.end();
});

test('plugin-madrun: no transform: module.exports not object', (t) => {
    t.noTransform('module-exports-not-object');
    t.end();
});

test('plugin-madrun: convert-nyc-to-c8', (t) => {
    t.transform('coverage');
    t.end();
});

test('plugin-madrun: set-report-lcov', (t) => {
    t.transform('set-report-lcov');
    t.end();
});

test('plugin-madrun: remove-check-duplicates', (t) => {
    t.transform('remove-check-duplicates');
    t.end();
});

test('plugin-madrun: declare', (t) => {
    t.transform('declare');
    t.end();
});

test('plugin-madrun: transform: convert-run-to-cut-env', (t) => {
    t.transform('convert-run-to-cut-env');
    t.end();
});

test('plugin-madrun: transform: convert-cut-env-to-run', (t) => {
    t.transform('convert-cut-env-to-run');
    t.end();
});

test('plugin-madrun: transform: add cut-env', (t) => {
    t.transform('add-cut-env');
    t.end();
});

