// Solution to problem here:
//  https://www.freecodecamp.org/challenges/pairwise

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

  // add the indexes of the pairs that added to the value
  var idxSum = indArr.reduce(function(value, sum){ return sum + value });
  console.log(idxSum);
  return idxSum;
}

module.exports.pairwise = pairwise;


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