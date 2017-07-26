// Solution to problem here:
//  https://www.freecodecamp.org/challenges/pairwise

var mocha = require('mocha')
var expect = require('expect.js')

function pairwise(arr, arg) {
  var indArr = [];
  if (arr.length < 2) {
    return 0
  }

  // Map the original array into an array of pairs with [original index, value]
  var arrWind = arr.map(function(v, i) {
    return [i, v];
  });

  var pairs = [];

  // Get all pairs of the index/value pairs into a new array
  arrWind.forEach(function(value, index, array) {
    for(var j = index + 1; j < arrWind.length; j++ ) {
      pairs.push([value, arrWind[j]]);
    }
  });

  // Now iterate each possible pair
  // skip pairs with indexes that have already been used
  // check pairs to see if they add to the arg
  // If they do, remember the original indexes
  pairs.forEach(function(pair,index) {
    if (indArr.includes(pair[0][0]) || indArr.includes(pair[1][0])) {
      return false;
    }
    if(arg == pair[0][1] + pair[1][1]) {
      indArr.push(pair[0][0]);
      indArr.push(pair[1][0]);
    }
  });

  // Initial failed attempt, does not account for requirement that an index be used only once
  //
  // arrWind.forEach(function(value, index, array) {
  //   for(var j = index + 1; j < arrWind.length; j++ ) {
  //     if(arg === value[1] + arrWind[j][1]) {
  //       indArr.push(value[0]);
  //       console.log(arrWind);
  //       indArr.push(arrWind[j][0]);
  //       array.splice(j, 1);
  //       array.splice(index, 1);
  //     }
  //   }
  // });

  // add the indexes of the pairs that added to the value
  var idxSum = indArr.reduce(function(value, sum){ return sum + value });
  console.log(idxSum);
  return idxSum;
}


describe("smoke test", function() {

  it("should return 0 for an empty list", function() {
    expect(pairwise([], 1)).to.equal(0)
  })

  it("should return 0 for list with 1 element", function() {
    expect(pairwise([100], 8)).to.equal(0)
  })

  it("should return the right", function() {
    expect(pairwise([1,4,2,3,0,5], 7)).to.equal(11);
  })

  it("Given 4 as arg should return 1", function() {
    expect(pairwise([1,3,2,4], 4)).to.equal(1);
  })

  it("Given 2 as arg should return 1", function() {
    expect(pairwise([1,1,1], 2)).to.equal(1);
  })

  it("Pairwise sum", function() {
    expect(pairwise([0,0,0,0,1,1], 1)).to.equal(10);
  })

});
