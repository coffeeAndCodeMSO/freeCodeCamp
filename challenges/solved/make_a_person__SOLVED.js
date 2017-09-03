/*
Solution to problem here:
 https://www.freecodecamp.org/challenges/make-a-person

To run the tests, from project root: $ mocha test/make_a_person_tests.js

Challenge: Change the Person "class" so it passes all the Tests

Bonus Challenge: Add more tests to handle odd non-american names, and make them pass too
*/
// "Bob Ross"
var Person = function(firstAndLast) {
    this.getFirstName = function() {
      return firstAndLast.split(" ")[0];
    }

    this.getLastName = () => firstAndLast.split(" ")[1];
    this.getFullName = () => firstAndLast;

    this.setFirstName = (firstName) => {
      var temp = firstAndLast.split(' ');
      temp[0] = firstName;
      firstAndLast = temp.join(' ');
    }

    this.setLastName = (lastName) => {
      var temp = firstAndLast.split(' ');
      temp[1] = lastName;
      firstAndLast = temp.join(' ');

    }

    this.setFullName = (newName) => {
      firstAndLast = newName;
    }
};

module.exports.Person = Person;
