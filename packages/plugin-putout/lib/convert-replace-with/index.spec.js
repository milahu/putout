'use strict';

const {createTest} = require('@putout/test');
const convertReplaceWith = require('.');

const {declare} = require('../index.js').rules;

const test = createTest(__dirname, {
    'putout/convert-replace-with': convertReplaceWith,
});

test('plugin-putout: convert-replace-with: report', (t) => {
    t.report('replace-with', `"operator.replaceWith" should be called instead of "path.replaceWith"`);
    t.end();
});

test('plugin-putout: convert-replace-with: transform', (t) => {
    t.transform('replace-with');
    t.end();
});

test('plugin-putout: convert-replace-with: transform: replaceWith exists', (t) => {
    t.transform('replace-with-exists');
    t.end();
});

test('plugin-putout: convert-replace-with: transform: replaceWith multiple exists', (t) => {
    t.transform('replace-with-multiple-exists');
    t.end();
});

test('plugin-putout: convert-replace-with: transform: insertAfter exists', (t) => {
    t.transform('insert-after-exists');
    t.end();
});

test('plugin-putout: convert-replace-with: transform: putout declared', (t) => {
    t.transform('putout-declared');
    t.end();
});

test('plugin-putout: convert-replace-with: transform: replace with crawl', (t) => {
    t.transform('replace-with-crawl', {
        declare,
    });
    t.end();
});
