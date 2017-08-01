/*
Tests for no-repeats-please challenge
URL: https://www.freecodecamp.org/challenges/no-repeats-please
*/

var testFile = require('../challenges/no-repeats.js');
var mocha = require('mocha');
var expect = require('expect.js');


describe('Official test suite straight from Free Code Camp', function() {

    it( 'repeats("aab") should return a number.', function() {
        rtn = testFile.permAlone('abab')
        expect(rtn).to.be.a('number');
    });

    runBasicTest = function(testDef) {
        it(testDef.description, function() {
            expect(testFile.permAlone(testDef.input)).to.equal(testDef.expected_result);
        });
    };

    BasicTestDefs = [{
        description: 'repeats("aab") should return 2.',
        input: 'aab',
        expected_result: 2
    },{
        description: 'repeats("aaa") should return 0.',
        input: 'aaa',
        expected_result: 0
    },{
        description: 'repeats("aabb") should return 8.',
        input: 'aabb',
        expected_result: 8
    },{
        description: 'repeats("abcdefa") should return 3600.',
        input: 'abcdefa',
        expected_result: 3600
    },{
        description: 'repeats("abfdefa") should return 2640.',
        input: 'abfdefa',
        expected_result: 2640
    },{
        description: 'repeats("zzzzzzzz") should return 0.',
        input: 'zzzzzzzz',
        expected_result: 0
    },{
        description: 'repeats("a") should return 1.',
        input: 'a',
        expected_result: 1
    },{
        description: 'repeats("aaab") should return 0.',
        input: 'aaab',
        expected_result: 0
    },{
        description: 'repeats("aaabb") should return 12.',
        input: 'aaabb',
        expected_result: 12
    }]

    BasicTestDefs.forEach(function(testDef) {
      runBasicTest(testDef);
    });

})
