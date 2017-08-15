/*
Tests for free code camp Validate US Telephone Numbers challenge
https://www.freecodecamp.org/challenges/validate-us-telephone-numbers
*/

// testing framework, and assertion library
var mocha = require('mocha');
var expect = require('expect.js');

// the thing we are testing
var testFile = require('../challenges/validate_telephone_numbers.js');
telephoneCheck = testFile.telephoneCheck;

// tests[i] are test-value arrays: test[i][0] is the argument, test[i][1] is the expected return value
var tests = [["1 555-555-5555", true], ["1 (555) 555-5555", true], ["5555555555", true],
              ["555-555-5555", true], ["(555)555-5555", true], ["1(555)555-5555", true],
              ["555-5555", false], ["5555555", false], ["1 555)555-5555", false],
              ["1 555 555 5555", true], ["1 456 789 4444", true], ["123**&!!asdf#", false],
              ["55555555", false], ["(6505552368)", false], ["2 (757) 622-7382", false],
              ["0 (757) 622-7382", false], ["-1 (757) 622-7382", false],
              ["2 757 622-7382", false], ["10 (757) 622-7382", false], ["27576227382", false],
              ["(275)76227382", false], ["2(757)6227382", false], ["2(757)622-7382", false],
              ["555)-555-5555", false], ["(555-555-5555", false], ["(555)5(55?)-5555", false]];


function testAll(test) {
  it('"telephoneCheck(' + test[0] + ')" should return ' + test[1], function() {
    expect(telephoneCheck(test[0])).to.be(test[1]);
  });
}

describe('Validate US Telephone Numbers', function() {
  // only test that does not fit the pattern
  it('"telephoneCheck(555-555-5555)" should return a Boolean', function() {
    expect(telephoneCheck('555-555-5555')).to.be.a('boolean');
  });
  // loops the tests array and generates an `it` Fx
  tests.forEach(function(test) {
    testAll(test);
  });
});
