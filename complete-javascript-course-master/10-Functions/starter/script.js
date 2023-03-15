'use strict';
//128
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1000);

//129
// const flight = 'LH234';
// const jonas = {
//   name: 'Damian Domarecki',
//   passport: 2384399532,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'MR. ' + passenger.name;

//   if (passenger.passport === 2384399532) {
//     alert('Check in');
//   } else {
//     alert('wrong passport!');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

//130
//131 functions acceptiog callback function

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('Javascript is the best!', upperFirstWord);

// transformer('Javascript is the best!', oneWord);

// // JS uses callbacks all the time

// const high5 = function () {
//   console.log('✋');
// };
// document.body.addEventListener('click', high5);
// ['Damian', 'Marta', 'Adam'].forEach(high5);

// 132 Functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// Challenge arrow fction:
// const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey = greet('hey');

// greeterHey('Damian');
// greeterHey('Adam');

// greet('hello')('Damien');

//The call and apply Methods start here

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(230, 'Damian Domarecki');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // book(23, "Sarah Williams")

// //call method
// book.call(eurowings, 23, 'Satah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 573, 'Mary Cooper');

// //Apply method
// const flightData = [583, 'George Cooper'];

// book.apply(swiss, flightData);
// console.log(swiss);

// //call method is better than apply method
// book.call(swiss, ...flightData);

// //bind method

// book.bind(eurowings);

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');

// //preset name in bind method
// const bookEW23 = book.bind(eurowings, 23);

// bookEW23('Damianno Italianno');
// bookEW23('Martha Cooper');

// //With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// console.log(addVAT(100));

// // challange
// const tax = function (rate) {
//   return function (value) {
//     console.log(value + value * rate);
//   };
// };

// tax(0.5)(100);
// // const greet = function (greeting) {
// //   return function (name) {
// //     console.log(`${greeting} ${name}`);
// //   };
// // };

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(200));

// Codding Challenge #1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let answearInput = prompt(
      `What is your favourite programming language? \n
    0: JavaScript \n
    1: Python \n
    2: Rust \n
    3: C++ \n
    (Write option number)`
    );
    answearInput >= 0 && answearInput <= 3
      ? (this.answers[Number(answearInput)] += 1)
      : alert('chose between 0 and 3');
  },
  displayResults(type) {
    let listing = 'Poll results are: ';
    if (typeof type === 'string') {
      for (const item of poll.answers.entries()) {
        if (item[0] == poll.answers.length - 1) {
          listing = listing + item[1] + '';
        } else {
          listing = listing + item[1] + ', ';
        }
      }
      console.log(listing);

      // console.log(
      //   `Poll results are: ${this.answers[0]}, ${this.answers[1]}, ${this.answers[2]}, ${this.answers[3]}`
      // );
    } else if (typeof type === 'object') {
      console.log(this.answers);
    }
  },
};

document.querySelector('.poll').addEventListener('click', function () {
  poll.registerNewAnswer.call(poll);
  poll.displayResults.call(poll, 'call');
});
