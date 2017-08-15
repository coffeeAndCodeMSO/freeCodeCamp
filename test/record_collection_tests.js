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

  it('After updateRecords(5439, "tracks", "Take a Chance on Me"), tracks should have "Take a Chance on Me as the last element"', function() {
    var collectionCopy = updateRecords(5439, "tracks", "Take a Chance on Me");
    expect(collectionCopy["5439"]["tracks"][(collectionCopy["5439"]["tracks"].length - 1)]).to.eql("Take a Chance on Me");
  });

  it('After updateRecords(2548, "artist", ""), artist should not be set', function() {
    var collectionCopy = updateRecords(2548, "artist", "");
    expect(collectionCopy["2548"]["artist"]).to.eql(undefined);
  });

  it('After updateRecords(1245, "tracks", "Addicted to Love"), tracks should have "Addicted to Love" as the last element', function() {
     var collectionCopy = updateRecords(1245, "tracks", "Addicted to Love");
     expect(collectionCopy["1245"]["tracks"][(collectionCopy["1245"]["tracks"].length - 1)]).to.eql("Addicted to Love");
  });

  it('AFter updateRecords(2468, "tracks", "Free"), tracks should have "1999" as the first element', function() {
    var collectionCopy = updateRecords(2468, "tracks", "Free");
    expect(collectionCopy["2468"]["tracks"][0]).to.eql("1999");
  });

  it('After updateRecords(2548, "tracks", ""), tracks should not be set', function() {
    var collectionCopy = updateRecords(2548, "tracks", "");
    expect(collectionCopy["2548"]["tracks"]).to.eql(undefined);
  });

});
