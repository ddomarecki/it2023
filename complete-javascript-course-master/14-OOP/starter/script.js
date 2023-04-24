'use strict';

// 206. What is Object-Oriented Programming? (THEORY)

// 207. OOP in JavaScript (THEORY)

// 208. Constructor Functions and the new Operator

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //// Never do this
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const damian = new Person('Damian', 1986);

// static function:

// Person.hey = function () {
//   console.log('hey there 👍');
// };
// Person.hey();

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('jack', 1975);

// console.log(damian, matilda, jack);

// console.log(damian instanceof Person);

// // 209. Prototypes
// // adding function to Person constructor:
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// damian.calcAge();

// console.log('PROTO', damian.__proto__.__proto__);
// console.log(damian.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(damian));

// Person.prototype.species = 'Homo Sapiens';

// console.log(damian.hasOwnProperty('firstName'));
// console.log(damian.hasOwnProperty('species'));

// // 210. Prototypal Inheritance and The Prototype Chain - THEORY

// // 211. Prototypal Inheritance on Built-In Objects

// console.log(damian.__proto__);
// console.log(damian.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [1, 2, 3, 4, 5, 6, 4, 3, 2, 4, 5];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(h1);
// console.dir(dir => x + 1);

// 213. ES6 Classes

//class expression
// const PersonCl = class {};

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Instance methods
  // Methods will be added to .prototype property of PersonCl
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
    // console.log(this._fullName);
    // console.log('HI!');
  }

  // Static method
  static hey() {
    console.log('hey');
  }
}
const jessica = new PersonCl('Jessica Davis', 1996);

jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// }

jessica.greet();

const walter = new PersonCl('Walter Pol', 1965);

PersonCl.hey();

// 214. Setters and Getters

const account = {
  owner: 'jonas',
  movements: [200, 300, 530, 120],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;

// 215. Static Methods

// 216. Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.name = 'Steven';
// steven.birthYear = 2002;

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);

// sarah.init('Sarah', 1979);
// sarah.calcAge();

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// 218. Inheritance Between "Classes": Constructor Functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

// 212. Coding Challenge #1
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed = this.speed + 10;
//   console.log(this.speed);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Merceder', 95);

// 217. Coding Challenge #2

class CarlCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed = this.speed + 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }
  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }

  set speedUS(speedInMiH) {
    this.speed = speedInMiH * 1.6;
  }
}

const car1000 = new CarlCl('Ford', 120);

// 219. Coding Challenge #3

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

// const car1 = new Car('BMW', 120);

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Linking prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `Tesla going at ${this.speed}km/h, with a charge of ${this.charge}%`
  );
};

const car1 = new EV('Tesla', 120, 23);
console.log(car1);
