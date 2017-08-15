


var mocha = require('mocha');
var expect = require('expect.js');

var testFile = require('../challenges/dna_pairing.js');
pairElement = testFile.pairElement;

describe('Official test suite straight from Free Code Camp', function() {
  it("pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].", function() {
    expect(Object.keys(bob)).to.have.length(6);
  });
});
