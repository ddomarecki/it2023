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
