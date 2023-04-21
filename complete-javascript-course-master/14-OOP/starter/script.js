'use strict';

// 206. What is Object-Oriented Programming? (THEORY)

// 207. OOP in JavaScript (THEORY)

// 208. Constructor Functions and the new Operator

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const damian = new Person('Damian', 1986);

const matilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);

console.log(damian, matilda, jack);

console.log(damian instanceof Person);

// 209. Prototypes
// adding function to Person constructor:
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

damian.calcAge();

console.log(damian.__proto__);
console.log(damian.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(damian));

Person.prototype.species = 'Homo Sapiens';

console.log(damian.hasOwnProperty('firstName'));
console.log(damian.hasOwnProperty('species'));
