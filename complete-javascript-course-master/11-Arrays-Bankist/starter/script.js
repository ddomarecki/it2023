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

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};

const caclDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

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

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  caclDisplaySummary(acc);
};

// console.log(accounts);

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

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

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

// //153. Reduce Method

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

// const balance3 = movements.reduce((acc, cur) => acc + cur, 0);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;

// // Maximum value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);

// Coding Challenge #2
// use Map, Filter and Reduce methods

// Test data:
// let testData1 = [5, 2, 4, 1, 15, 8, 3];
// let testData2 = [16, 6, 10, 5, 6, 1, 4];

// function calcAverageHumanAge(ages) {
//   let dogAgeInHuman = ages.map(function (age, index) {
//     if (age <= 2) {
//       return age * 2;
//     } else {
//       return age * 4 + 16;
//     }
//   });
//   console.log(dogAgeInHuman);
//   let dogOlderThan18yo = dogAgeInHuman.filter(function (age, index) {
//     return age > 18;
//   });

//   console.log(
//     `Dogs older than 18yo in human years: ${dogOlderThan18yo.join(', ')}`
//   );
//   let averageHumanAgeOfDogs = dogAgeInHuman.reduce(
//     (acc, current) => acc + current
//   );
//   console.log(
//     `Average Human Age Of Dogs: ${Math.round(
//       averageHumanAgeOfDogs / dogAgeInHuman.length
//     )}`
//   );
// }

// calcAverageHumanAge(testData1);
// console.log('---------------test Data 2---------------');
// calcAverageHumanAge(testData2);

// Coding Challenge #2 - by lecturer

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);
//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//   const average =
//     adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0) /
//     adults.length;

//   // 2 3. (2+3) /2 = 2.5 ===  2/2 + 3/2 = 2.5

//   return average;
// };

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// 155. The Magic of Chainging Methods

// const eurToUsd = 1.1;
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   // .map(mov => mov * eurToUsd)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

// 156. Coding Challenge #3

// const calcAverageHumanAge = ages =>
//   Math.round(
//     ages
//       .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//       .filter(age => age >= 18)
//       .reduce((acc, age, i, arr) => acc + age / arr.length, 0)
//   );

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

// 157. The find Method

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// const account = accounts.find(acc => acc.owner === 'Jesica Davis');

// const entries = Object.entries(accounts);
// for (const [obj, value] of entries) {
//   // console.log(obj, value);
//   if (value.owner === 'Jessica Davis') {
//     console.log(obj, value);
//   }
// }

// 158. Implementing Login

// 159. Implementing Transfers

// 160. The findIndex Method

// 161. some and every

// // Equality
// console.log(movements.includes(-130));

// // some:  condition
// console.log(movements.some(mov => mov === -130));
// const anyDeposit = movements.some(mov => mov > 0);

// // Every
// console.log(movements.every(mov => mov > 0));

// // Separate callback

// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));

// 162. flat and flatMap

// const arr = [1, 2, 3, [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[1, 2], 3, [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// // flatMap
// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// 163. Sorting Arrays

// // Strings
// const owners = ['Damian', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());

// // NUmbers

// console.log(movements);

// // return < 0; A, B
// // return > 0; B, A

// // Ascending
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });

// movements.sort((a, b) => a - b);

// // Descendind
// // movements.sort((a, b) => {
// //   if (a > b) return 1;
// //   if (b > a) return -1;
// // });
// movements.sort((a, b) => b - a);

// console.log(movements);

// 163. More Ways of Creating and Filling Arrays.

const arr = [1, 2, 3, 4, 5, 6, 7];

//Empty arrays + fill method\
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
x.fill(1, 3, 5);
arr.fill(23, 4, 6);

// Array.from
const y = Array.from({ length: 7 }, () => 1);

const z = Array.from({ length: 7 }, (cur, i) => i + 1);

labelBalance.addEventListener('click', function () {
  console.log(x);
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});
