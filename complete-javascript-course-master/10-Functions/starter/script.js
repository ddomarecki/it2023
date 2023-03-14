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

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(230, 'Damian Domarecki');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, "Sarah Williams")

//call method
book.call(eurowings, 23, 'Satah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 573, 'Mary Cooper');

//Apply method
const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);
console.log(swiss);
