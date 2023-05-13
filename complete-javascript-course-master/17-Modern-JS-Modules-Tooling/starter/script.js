// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

console.log('importing module');

// addToCart('bread', 5);

// console.log(price, tq);
////////////////////
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

/////////////////////////////
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// add('pizza', 2);
// console.log(price, tq);

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
console.log(cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log('data', data);

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log('data', data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost); // promise pending result

// Not very clean
lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// module pattern

// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);

//     const orderStock = function (product, quantity) {
//       console.log(`${quantity} ${product} ordered from supplier`);
//     };
//     return {
//       addToCart,
//       cart,
//       totalPrice,
//       totalQuantity,
//     };
//   };
// })();

// ShoppingCart2.addToCart('apple', 4);
// ShoppingCart2.addToCart('pizza', 2;

// console.log(ShoppingCart2);
// console.log(ShoppiingCart2.shippingCost); // undefined becouse private

// CommonJS Modules

// export
// export.addTocart = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);

// };

// // import
// const {addTocart} = require('./shoppingCart.js')

// 276. A Brief Introduction to the Command Line

// 277. Introduction to NPM

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state); // old way of cloning Objects
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

// 278. Bundling With Parcel and NPM Scripts

if (module.hot) {
  module.hot.accept();
}
