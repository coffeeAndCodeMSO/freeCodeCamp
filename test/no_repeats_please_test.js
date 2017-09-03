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
        description = "permAlone(" + testDef.input + ") should equal: " + testDef.expected_result
        it(description, function() {
            expect(testFile.permAlone(testDef.input)).to.equal(testDef.expected_result);
        });
    };

    BasicTestDefs = [{
        input: 'aab',
        expected_result: 2
    },{
        input: 'aaa',
        expected_result: 0
    },{
        input: 'aabb',
        expected_result: 8
    },{
        input: 'abcdefa',
        expected_result: 3600
    },{
        input: 'abfdefa',
        expected_result: 2640
    },{
        input: 'zzzzzzzz',
        expected_result: 0
    },{
        input: 'a',
        expected_result: 1
    },{
        input: 'aaab',
        expected_result: 0
    },{
        input: 'aaabb',
        expected_result: 12
    }]

    BasicTestDefs.forEach(function(testDef) {
      runBasicTest(testDef);
    });

})
