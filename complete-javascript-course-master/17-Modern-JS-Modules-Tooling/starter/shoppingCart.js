// Exporting module
console.log('Exporting module');

// Bloicking code
// console.log('start fething users');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('finish fetching users');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
console.log(cart);
