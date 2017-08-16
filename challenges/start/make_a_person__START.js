/*
Solution to problem here:
 https://www.freecodecamp.org/challenges/make-a-person

To run the tests, from project root: $ mocha test/make_a_person_tests.js

Challenge: Change the Person "class" so it passes all the Tests

Bonus Challenge: Add more tests to handle odd non-american names, and make them pass too
*/

var Person = function(firstAndLast) {
    this.getFirstName = function() {
    }
    return firstAndLast
};

module.exports.Person = Person;
