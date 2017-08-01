var testFile = require('../challenges/pairwise.js');
var mocha = require('mocha');
var expect = require('expect.js');

var pairwiseTests = [
    {
        description: 'should return 0 for an empty list',
        input: testFile.pairwise([], 1),
        result: 0
    },

    {
        description: 'should return 0 for list with 1 element',
        input: testFile.pairwise([100], 8),
        result: 0
    },

    {
        description: 'should return the right',
        input: testFile.pairwise([1,4,2,3,0,5], 7),
        result: 11
    },

    {
        description: 'given 2 as arg should return 1',
        input: testFile.pairwise([1,1,1], 2),
        result: 1
    },

    {
        description: 'pairwise sum',
        input: testFile.pairwise([0,0,0,0,1,1], 1),
        result: 10
    }
]

makeTest = function(testSpec) {
    var description = testSpec.description;
    var input = testSpec.input;
    var result = testSpec.result;
    it(description, function() {
      expect(input).to.equal(result);
    })
}

pairwiseTests.forEach(function(test) {
    makeTest(test);
  }
);
