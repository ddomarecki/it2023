// 281. Let's Fix Some Bad Code: Part 1

'strict mode';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // if there is no user, the value will be undefined and undefined + ?? will give us 0 Nullish coalescing operator

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, cleanUser }]
    : state;
  // budget.push({ value: -value, description, cleanUser });
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpenses2 = function (state, limits) {
  return state.map(entry => {
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};

// const checkExpenses = (state, limits) =>
//   state.map(entry =>
//     entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry
//   );

// {
//   for (const entry of budget)
//     if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';
// };

const finalBudget = checkExpenses2(newBudget3, spendingLimits);
console.log(finalBudget);

// Impure function
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  // .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');

  console.log(bigExpenses);
  // let output = '';
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)}  /` : '';
  // output = output.slice(0, -2); // Remove last '/ ' - from 0 add all to -2
  // console.log(output);
};

console.log(budget);

logBigExpenses(finalBudget, 500);

// 282. Declarative and Functional JavaScript Principles - therory / imperative vs declarative

// 283. Let's Fix Some Bad Code: Part 2
