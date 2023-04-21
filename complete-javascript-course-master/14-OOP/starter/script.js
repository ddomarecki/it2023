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

console.log('PROTO', damian.__proto__.__proto__);
console.log(damian.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(damian));

Person.prototype.species = 'Homo Sapiens';

console.log(damian.hasOwnProperty('firstName'));
console.log(damian.hasOwnProperty('species'));

// 210. Prototypal Inheritance and The Prototype Chain - THEORY

// 211. Prototypal Inheritance on Built-In Objects

console.log(damian.__proto__);
console.log(damian.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 5, 6, 4, 3, 2, 4, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(dir => x + 1);

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// 212. Coding Challenge #1

const Car = function (make, speed) {
  (this.make = make), (this.speed = speed);
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Merceder', 95);
