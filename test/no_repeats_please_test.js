var testFile = require('../challenges/no-repeats.js');
var mocha = require('mocha');
var expect = require('expect.js');


var runTest = function(spec) {
    it(spec.description, function() {
        expect(spec.input).to.equal(spec.result);
    });
};

describe('repeats test suite', function() {
    runTest({
        description: 'repeats("aab") should return a number.',
        input: typeof testFile.repeats(1),
        result: 'number'
    });

    runTest({
        description: 'repeats("aab") should return 2.',
        input: testFile.repeats('aab'),
        result: 2
    });

    runTest({
        description: 'repeats("aaa") should return 0.',
        input: testFile.repeats('aaa'),
        result: 0
    });

    //permAlone("aabb") should return 8.
    runTest({
        description: 'repeats("aabb") should return 8.',
        input: testFile.repeats('aabb'),
        result: 8
    });

    //permAlone("abcdefa") should return 3600.
    runTest({
        description: 'repeats("abcdefa") should return 3600.',
        input: testFile.repeats('abcdefa'),
        result: 3600
    });

    //permAlone("abfdefa") should return 2640.
    runTest({
        description: 'repeats("abfdefa") should return 2640.',
        input: testFile.repeats('abfdefa'),
        result: 2640
    });

    //permAlone("zzzzzzzz") should return 0.
    runTest({
        description: 'repeats("zzzzzzzz") should return 0.',
        input: testFile.repeats('zzzzzzzz'),
        result: 0
    });

    //permAlone("a") should return 1.
    runTest({
        description: 'repeats("a") should return 1.',
        input: testFile.repeats('a'),
        result: 1
    });

    //permAlone("aaab") should return 0.
    runTest({
        description: 'repeats("aaab") should return 0.',
        input: testFile.repeats('aaab'),
        result: 0
    });

    //permAlone("aaabb") should return 12.
    runTest({
        description: 'repeats("aaabb") should return 12.',
        input: testFile.repeats('aaabb'),
        result: 12
    });

})
