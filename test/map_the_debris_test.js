/*
Tests for free code camp Map the Debris challenge
https://www.freecodecamp.org/challenges/map-the-debris

*/

// testing framework, and assertion library
var mocha = require('mocha');
var expect = require('expect.js');

// the thing we are testing
var testFile = require('../challenges/start/map_the_debris__START.js');
orbitalPeriod = testFile.orbitalPeriod;

describe('Calculate the Orbital Period \n', function() {

  it('"orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])" \n \t should return \n \t \t [{name: "sputnik", orbitalPeriod: 86400}] \n \n', function() {
    expect(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}])).to.eql([{name: "sputnik", orbitalPeriod: 86400}]);
  });

  it('"orbitalPeriod([{name: "iss", avgAlt: 413.6}, \n \t \t {name: "hubble", avgAlt: 556.7}, \n \t \t {name: "moon", avgAlt: 378632.553}])" \n \t should return \n \t \t [{name : "iss", orbitalPeriod: 5557}, \n \t \t {name: "hubble", orbitalPeriod: 5734}, \n \t \t {name: "moon", orbitalPeriod: 2377399}]', function() {
    expect(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])).to.eql([{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]);
  });
});
