'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};

calcDisplayBalance(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(accounts);

//same as above but using for of method:
// const createUsernames2 = function (accs) {
//   for (let acc of accs) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   }
// };
// createUsernames2(accounts);
// console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// Section 11: Working With Arrays

// // 142. Simple Array Methods

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// arr.slice(2);
// arr.slice(2, 4);
// arr.slice(-2);
// arr.slice(-1);
// arr.slice(1, -2);
// arr.slice();

// // SPLICE
// arr.splice(2);
// arr.splice(-1);
// arr.splice(1, 2);
// arr.splice(1, 0, 'b', 'c');

// // REVERSE
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// arr2.reverse();

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

// // 143. The new at Method

// const arr = [23, 11, 64];
// console.log(arr.at(0));

// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));

// console.log('jonas'.at(0));

// // 144. Looping Arrays: forEach

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} Your desposit ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} your withdrew ${Math.abs(movement)}`);
//   }
// }

// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1} Your desposit ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1} your withdrew ${Math.abs(movement)}`);
//   }
// });

// // 145. forEach With Maps and Sets

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set

// const currenciesUnique = new Set(['USD', 'GBP, "USD', 'EUR', 'EUR']);

// currenciesUnique.forEach(function (value, key, set) {
//   console.log(`${key}: ${value}`);
// });

// 146. PROJECT: "Bankist" App (introduction)

// 148. Coding Challenge #1
//Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
//Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// const checkDogs = function (dogsJulia, dogsKate) {
//   let copyDogsJulia = dogsJulia.slice(0);
//   copyDogsJulia.shift();
//   copyDogsJulia.splice(-2, 2);
//   let connectedArrays = copyDogsJulia.concat(dogsKate);
//   connectedArrays.forEach(function (dogAge, index) {
//     if (dogAge >= 3) {
//       console.log(
//         `Dog number ${index} is an adult, and is ${dogAge} years old 🐕`
//       );
//     } else {
//       console.log(`Dog number ${index} is still a puppy 🐕`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// // 149. Data Transformations: map, filter, reduce

// // 150. The map Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);

// const movementsUSDArrow = movements.map(mov => mov * eurToUsd);

// const movementsDescriptions = movements.map(
//   (mov, index, arr) =>
//     `Movement ${index + 1} your ${
//       mov > 0 ? 'deposited' : 'withdrew'
//     } ${Math.abs(mov)}`
// );
// console.log(movementsDescriptions);

// Own Exercises
// const account5 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// for (const [day, data2] of Object.entries(account5)) {
//   console.log(day, data2);
// }

// console.log(account5.movements.join('-'));

// // 152. The filter Method

// const deposits = movements.filter(function (mov, i, arr) {
//   return mov > 0;
// });

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);

// const withdrawals = movements.filter(function (mov) {
//   return mov < 0;
// });

//153. Reduce Method

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

const balance3 = movements.reduce((acc, cur) => acc + cur, 0);

let balance2 = 0;
for (const mov of movements) balance2 += mov;

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
