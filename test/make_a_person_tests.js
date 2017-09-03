/*
Tests for free code camp Make A Person challenge
https://www.freecodecamp.org/challenges/make-a-person
*/

// testing framework, and assertion library
var mocha = require('mocha');
var expect = require('expect.js');

// the thing we are testing
var testFile = require('../challenges/make_a_person.js');
Person = testFile.Person;

describe('Official test suite straight from Free Code Camp', function() {

  var bob = null;

  beforeEach(function() {
    bob = new Person("Bob Ross");
  });

  it("Object.keys(bob).length should return 6.", function() {
    expect(Object.keys(bob)).to.have.length(6);
  });

  it("bob instanceof Person should return true.", function() {
    // this is the way the free code camp describes this test..
    expect(bob instanceof Person).to.equal(true);
    // this following assertion does not work though, because it is based on
    // typeof, not instanceof.  Hmmm
    // expect(bob).to.be.a('Person');
  });

  it("bob.firstName should return undefined.", function() {
    expect(bob.firstName).to.be(undefined);
  });

  it("bob.lastName should return undefined.", function() {
    expect(bob.lastName).to.be(undefined);
  });

  it('bob.getFirstName() should return "Bob".', function() {
    expect(bob.getFirstName()).to.eql("Bob");
  });

  it('bob.getLastName() should return "Ross".', function() {
    expect(bob.getLastName()).to.eql("Ross");
  });

  it('bob.getFullName() should return "Bob Ross".', function() {
    expect(bob.getFullName()).to.eql("Bob Ross");
  });

  it('bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").', function() {
    bob.setFirstName("Haskell")
    expect(bob.getFullName()).to.eql("Haskell Ross");
  });


  it('bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").', function() {
    // The way FCC set this test up, the expectation depends on the previous test
    // Since that is generally a bad practice, and won't work with the way we are using
    // beforeEach, the setFirstName call is repeated in here    bob.setFirstName("Haskell")
    bob.setFirstName("Haskell")
    bob.setLastName("Curry")
    expect(bob.getFullName()).to.eql("Haskell Curry");
  });

  it('bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").', function() {
    bob.setFullName("Haskell Curry")
    expect(bob.getFullName()).to.eql("Haskell Curry");
  });

  it('bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").', function() {
    bob.setFullName("Haskell Curry")
    expect(bob.getFirstName()).to.eql("Haskell");
  });

  it('bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").', function() {
    bob.setFullName("Haskell Curry")
    expect(bob.getLastName()).to.eql("Curry");
  });

});

/*
BONUS SECTION
wierd names oh my!
some reference: http://www.kalzumeus.com/2010/06/17/falsehoods-programmers-believe-about-names/
*/

// Remove this comment block once your ready to deal with wierd names!

/*
describe('Dealing with non-standard names', function() {

  it('should understand suffixes like Jr and Sr.', function() {
    person = new Person("Bob Ross Jr.")
    expect(person.getFirstName).to.eql("Bob");
    expect(person.getLastName).to.eql("Ross");
    expect(person.getFullName).to.eql("Bob Ross Jr.");
  });

  it('should handle arabic naming conventions', function() {
    person = new Person('Boutros Boutros-Ghali');
    expect(person.getFirstName).to.eql("Boutros");
    expect(person.getLastName).to.eql("Boutros-Ghali");
    expect(person.getFullName).to.eql("Boutros Boutros-Ghali");
  });

  it('Should appropriately deal with initialization pattern of "last, first"', function() {
    person = new Person("Ross, Bob")
    expect(person.getFirstName).to.eql("Bob");
    expect(person.getLastName).to.eql("Ross");
    expect(person.getFullName).to.eql("Bob Ross");
  });

  // Lots of stuff could be added here depending on requirements...
  // native american names, names in asian characters, one-word names, etc.

})

*/
