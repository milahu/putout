'use strict';

const {createTest} = require('@putout/test');
const declareUndefinedVariables = require('..');

const montag = require('montag');

const test = createTest(__dirname, {
    'declare-undefined-variables': declareUndefinedVariables,
});

test('putout: plugin: declare-undefined-variables: report: assign', (t) => {
    t.report('assign', `Declare 'assign'`);
    t.end();
});

test('putout: plugin: declare-undefined-variables: transform: assign', (t) => {
    t.transform('assign');
    t.end();
});

test('putout: plugin: declare-undefined-variables: transform: is-array', (t) => {
    t.transform('is-array');
    t.end();
});

test('putout: plugin: declare-undefined-variables: transform: keys', (t) => {
    t.transform('keys');
    t.end();
});

test('putout: plugin: declare-undefined-variables: transform: values', (t) => {
    t.transform('values');
    t.end();
});

test('putout: plugin: declare-undefined-variables: transform: assign-dismiss', (t) => {
    t.noTransformWithOptions('assign-dismiss', {
        dismiss: ['assign', 'stringify'],
    });
    t.end();
});

test('putout: plugin: declare-undefined-variables: transform: parse', (t) => {
    t.transformWithOptions('parse', {
        dismiss: ['assign', 'stringify'],
    });
    t.end();
});

test('putout: plugin: declare-undefined-variables: no report after transform: assign', (t) => {
    t.noReportAfterTransform('assign');
    t.end();
});

test('putout: plugin: declare-undefined-variables: object', (t) => {
    t.transform('object');
    t.end();
});

test('putout: plugin: declare-undefined-variables: putout', (t) => {
    t.transform('putout');
    t.end();
});

test('putout: plugin: declare-undefined-variables: is-type', (t) => {
    t.transform('is-type');
    t.end();
});

test('putout: plugin: declare-undefined-variables: maybe', (t) => {
    t.transform('maybe');
    t.end();
});

test('putout: plugin: declare-undefined-variables: currify', (t) => {
    t.transform('currify');
    t.end();
});

test('putout: plugin: declare-undefined-variables: wraptile', (t) => {
    t.transform('wraptile');
    t.end();
});

test('putout: plugin: declare-undefined-variables: wrap', (t) => {
    t.transform('wrap');
    t.end();
});

test('putout: plugin: declare-undefined-variables: fresh-import', (t) => {
    t.transform('fresh-import');
    t.end();
});

test('putout: plugin: declare-undefined-variables: noop', (t) => {
    t.transformCode('noop();', montag`
        const noop = () => {};
        noop();
    `);
    t.end();
});

test('putout: plugin: declare-undefined-variables: eslint', (t) => {
    t.transformCode('eslint();', montag`
        import eslint from 'putout/eslint';
        eslint();
    `);
    t.end();
});

test('putout: plugin: declare-undefined-variables: once', (t) => {
    t.transformCode('once();', montag`
        import once from 'once';
        once();
    `);
    t.end();
});

test('putout: plugin: declare-undefined-variables: options-declarations', (t) => {
    t.transformWithOptions('options-declarations', {
        declarations: {
            custom: `const custom= require('custom')`,
        },
    });
    t.end();
});

test('putout: plugin: declare-undefined-variables: pipe', (t) => {
    t.transformCode('await pipe([stream]);', montag`
        import pipe from 'pipe-io';
        await pipe([stream]);
    `);
    t.end();
});

test('putout: plugin: declare-undefined-variables: pullout', (t) => {
    t.transformCode('await pullout(stream);', montag`
        import pullout from 'pullout';
        await pullout(stream);
    `);
    t.end();
});

test('putout: plugin: declare-undefined-variables: simport: commonjs', (t) => {
    t.transformCode(`await simport('fs');`, montag`
        import {createSimport} from 'simport';
        const simport = createSimport(__filename);
        await simport('fs');
    `);
    t.end();
});

test('putout: plugin: declare-undefined-variables: simport: esm', (t) => {
    t.transformCode(`import {readFile} from 'fs'; await simport('fs');`, montag`
        import {readFile} from 'fs';
        import {createSimport} from 'simport';
        const simport = createSimport(import.meta.url);
        await simport('fs');
    `);
    t.end();
});

test('putout: plugin: declare-undefined-variables: returns', (t) => {
    t.transformCode(`returns('hello');`, montag`
        const returns = a => () => a;
        returns('hello');
    `);
    t.end();
});

test('putout: plugin: declare-undefined-variables: readFixture', (t) => {
    t.transform(`fixtures`);
    t.end();
});

test('putout: plugin: declare-undefined-variables: chalk', (t) => {
    t.transformCode(`chalk.red('hello');`, montag`
        import chalk from 'chalk';
        chalk.red('hello');
    `);
    t.end();
});

test('putout: plugin: declare-undefined-variables: table', (t) => {
    t.transformCode(`table(data);`, montag`
        import table from 'table';
        table(data);
    `);
    t.end();
});

