/*
from FCC Advanced Algorithm Challenges:
Instructions here & below:
https://www.freecodecamp.org/challenges/map-the-debris

To run the tests, from project root: $ mocha test/map_the_debris__START.js
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr;
}

module.exports.orbitalPeriod = orbitalPeriod;

/*
Return a new array that transforms the element's average altitude into
their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number.
The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of
earth is 398600.4418 km3s-2.

*/
