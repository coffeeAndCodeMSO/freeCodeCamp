/*
Tests for free code camp Record collection challenge
https://www.freecodecamp.org/challenges/record-collection
*/

// testing framework, and assertion library
var mocha = require('mocha');
var expect = require('expect.js');

// the thing we are testing
var testFile = require('../challenges/record_collection.js');
updateRecords = testFile.updateRecords;


describe("Update Record Collection", function() {
  it('After updateRecords(5439, "artist", "ABBA"), `artist` should be ABBA', function() {
    var collectionCopy = updateRecords(5439, "artist", "ABBA");
    expect(collectionCopy["5439"]["artist"]).to.eql("ABBA");
  });
});

// continue here w/ additional tests
