export const files = [
    '*.js',
    '*.mjs',
    '*.cjs',
    '*.jsx',
    '*.ts',
    '*.tsx',
];

export const branch = (source) => [{
    source,
    startLine: 0,
}];

export const merge = (source, list) => list[0];

