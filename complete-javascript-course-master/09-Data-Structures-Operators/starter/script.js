'use strict';
// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// coding challenge #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
    1,
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2, pl] = game.players;

// const gk = game.players[0];
// const fieldPlayers =

const [gk, ...fieldPlayers] = game.players[0];

const allPlayers = [...game.players[0], ...game.players[1]];

const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];

// const { team1, x: draw, team2 } = game.odds;

const {
  odds: { team1, x: draw, team2 },
} = game;

//6

function printGoals(...playerNames) {
  for (let i = 0; i < playerNames.length; i++) {
    console.log(
      `${playerNames[i]} has scored a goal! In total ${playerNames.length} goals!`
    );
  }
}

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7.

game.odds.team1 < game.odds.team2 && console.log('TEAM 1 will win!');
game.odds.team2 < game.odds.team1 && console.log('TEAM 2 will win!');

// Coding challenge #2 by me:

for (const [nr, player] of Object.entries(game.scored)) {
  console.log(`${player} scored goal number ${Number(nr) + 1}`);
}
let totalAverage = 0;
for (const [team, odd] of Object.entries(game.odds)) {
  totalAverage += odd;
}
console.log(totalAverage);
console.log(
  `Average of win for team1 is: ${Math.trunc(
    (game.odds.team1 / totalAverage) * 100
  )}%,
Average of draw is: ${Math.trunc((game.odds.x / totalAverage) * 100)}%,
Aveage of win for team2 is: ${Math.trunc(
    (game.odds.team2 / totalAverage) * 100
  )}%`
);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(
    `Odd of ${game?.[team] ? 'victory' : 'DRAW'}${game?.[team] ?? ''}: ${odd}`
  );
}

//3 by instructor:

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

//2 by instructor:
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;

console.log('AVERAGE: ' + average);
// Bonus

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? (scorers[player] += 1) : (scorers[player] = 1);

  // if (scorers[player]) {
  //   scorers[player] += 1;
  // } else {
  //   scorers[player] = 1;
  // }
}
console.log(scorers);

//coding challange number 3
// 1

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// task nr 1
let gameEventArr = [];
for (const [min, game] of gameEvents) {
  gameEventArr.push(game);
}
const gameEvent = [...new Set(gameEventArr)];
console.log(gameEvent);

// task 2
gameEvents.delete(64);

//task 3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//task 4
for (const [min2, game2] of gameEvents) {
  console.log(
    min2 <= 45
      ? '[FIRST HALF]' + min2 + ': ' + game2
      : '[SECOND HALF] ' + min2 + ': ' + game2
  );
}

//1 instructor
const events3 = [...new Set(gameEvents.values())];

//4 instructor
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`[${half} HALF] ${min}: ${event}`);
}

//last challange

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', download);

function download() {
  let output = [];
  let text = document.querySelector('textarea').value;
  text = text.toLowerCase();
  let textSplit = text.split(/_|\n/);
  for (let i = 0; i < textSplit.length; i++) {
    textSplit[i] = textSplit[i].trim();

    if (!(i == 0 || i % 2 == 0)) {
      textSplit[i] = textSplit[i][0].toUpperCase() + textSplit[i].slice(1);
    }
  }
  for (let i = 0; i < textSplit.length; i++) {
    if (i == 0) {
      let connection1 = textSplit[0] + textSplit[1];
      output.push(connection1.padEnd(25, ' ') + '✅');
    } else if (i % 2 == 0) {
      let connection2 = textSplit[i] + textSplit[i + 1];
      output.push(connection2.padEnd(25, ' '));
    }
  }
  console.log(textSplit, output);
  for (let j = 1; j < output.length; j++) {
    output[j] = output[j] + '✅'.repeat(j + 1);
  }

  console.log(output.join('\n'));
}

// line breaker: \n\r

//125. String Methods Practice
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🛑' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

//END
