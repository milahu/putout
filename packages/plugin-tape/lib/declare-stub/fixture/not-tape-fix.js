const {
    stub
} = require('supertape');

const test = createTest();

test('xxx', (t) => {
    const a = stub();
    
    t.end();
});
