'use strict';

const {createTest} = require('@putout/test');
const removeUselessEscape = require('..');

const madrun = require('@putout/plugin-madrun');
const addFixLint = madrun.rules['add-fix-lint'];

const test = createTest(__dirname, {
    'remove-useless-escape': removeUselessEscape,
});

test('plugin-remove-useless-escape: report', (t) => {
    t.report('string', 'Unnecessary escape character');
    t.end();
});

test('plugin-remove-useless-escape: report: a: ^', (t) => {
    t.report('a', 'Unnecessary escape character');
    t.end();
});

test('plugin-remove-useless-escape: no report: no-emoji', (t) => {
    t.noReport('no-emoji');
    t.end();
});

test('plugin-remove-useless-escape: no report: new-line', (t) => {
    t.noReport('new-line');
    t.end();
});

test('plugin-remove-useless-escape: no report: escaped', (t) => {
    t.noReport('escaped');
    t.end();
});

test('plugin-remove-useless-escape: transform: string', (t) => {
    t.transform('string');
    t.end();
});

test('plugin-remove-useless-escape: transform: template', (t) => {
    t.transform('template');
    t.end();
});

test('plugin-remove-useless-escape: transform: a: ^', (t) => {
    t.transform('a');
    t.end();
});

test('plugin-remove-useless-escape: no report: slash', (t) => {
    t.noReport('slash');
    t.end();
});

test('plugin-remove-useless-escape: transform: quote', (t) => {
    t.transform('quote');
    t.end();
});

test('plugin-remove-useless-escape: no report after transform', (t) => {
    t.noReportAfterTransform('quote');
    t.end();
});

test('plugin-remove-useless-escape: transform: emoji', (t) => {
    t.transform('emoji');
    t.end();
});

test('plugin-remove-useless-escape: transform: emoji: template', (t) => {
    t.transform('emoji-template');
    t.end();
});

test('plugin-remove-useless-escape: transform: regexp: colon', (t) => {
    t.transform('regexp-colon');
    t.end();
});

test('plugin-remove-useless-escape: no transform: regexp', (t) => {
    t.noTransform('regexp-slash');
    t.end();
});

test('plugin-remove-useless-escape: transform: plus', (t) => {
    t.transform('plus');
    t.end();
});

test('plugin-remove-useless-escape: transform: backtick', (t) => {
    t.transform('backtick');
    t.end();
});

test('plugin-remove-useless-escape: transform: coma', (t) => {
    t.transform('coma');
    t.end();
});

test('plugin-remove-useless-escape: no transform: no raw', (t) => {
    t.transform('no-raw', {
        addFixLint,
    });
    t.end();
});

