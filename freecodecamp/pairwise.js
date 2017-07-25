var mocha = require('mocha')
var expect = require('expect.js')

function pairwise(arr, arg) {
  var indArr = [];
  if (arr.length < 2) {
    return 0
  }

  var arrWind = arr.map(function(v, i) {
    return [i, v];
  });

  var pairs = [];

  arrWind.forEach(function(value, index, array) {
    for(var j = index + 1; j < arrWind.length; j++ ) {
      pairs.push([value, arrWind[j]]);
    }
  });

  pairs.forEach(function(pair,index) {
    if (indArr.includes(pair[0][0]) || indArr.includes(pair[1][0])) {
      return false;
    }
    if(arg == pair[0][1] + pair[1][1]) {
      indArr.push(pair[0][0]);
      indArr.push(pair[1][0]);
    }
  });

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
  var rtnArr = indArr.reduce(function(value, sum){ return sum + value });
  console.log(rtnArr);
  return rtnArr;
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
