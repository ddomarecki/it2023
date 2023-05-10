'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = ` <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// new url: https://restcountries.com/v2/
// https://restcountries.com/v2/name/portugal

// 246. Asynchronous JavaScript, AJAX and APIs

// 248. Our First AJAX Call: XMLHttpRequest
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   // console.log(request);

//   request.addEventListener('load', function () {
//     // console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText);
//     // zamiaast this.rewsponseText mozna request.responseText
//     const html = ` <article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)}</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');

// 249. [OPTIONAL] How the Web Works: Requests and Responses (theory)

// 250. Welcome to Callback Hell

// const getCountryAndNeighbour = function (country) {
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // descructuring under this commend, here we have a array so we need 0 element
//     const [data] = JSON.parse(this.responseText);

//     // Render country 1
//     renderCountry(data);
//     // console.log(JSON.parse(this.responseText));

//     // Get neighbour country 2
//     const neighbour = data.borders?.[0];

//     // AJAX call country 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('poland');

// // Callback hell:
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 3000);
//   }, 1000);
// }, 1000);

// 251. Promises and the Fetch API

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.com/v2/name/portugal');
// console.log(request);

// const getCountryData = function (country) {
//   const request = fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       // console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // country 1
//   const request = fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok) throw new Error(`country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;
//       // country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.log(`${err}💥`);
//       renderError(`Something went wrong 💥${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

const getCountryData = function (country) {
  // country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!');
      // country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'country not found'
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.log(`${err}💥`);
      renderError(`Something went wrong 💥${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// 253. Chaining Promises

// 254. Handling Rejected Promises

// 255. Throwing Errors Manually

// 257. Asynchronous Behind the Scenes: The Event Loop

// 258. The Event Loop in Practice

// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolve promise 2').then(res => {
//   for (let i = 0; i < 10000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');

// 259. Building a Simple Promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 🤑');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err));

// Promisifyinmg setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 second passed'));

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 3000);
//   }, 1000);
// }, 1000);

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

// 260. Promisifying the Geolocation API

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=239396541926777502332x12175`
      );
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Problem with geocinding ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`you are in ${data.city}, ${data.country}`);
      // getCountryData(data.country);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error('Country not found');
      return res.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(`There is an error here! ${err.message}`);
    });
};

btn.addEventListener('click', whereAmI);

// 262. Consuming Promises with Async/Await
// 263. Error Handling With try...catch

const whereAmI2 = async function () {
  try {
    // geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=239396541926777502332x12175`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    // country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting location data');

    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong ${err.message}`);
    // Reject promise returned from async function
    throw err;
  }
};
// const city = whereAmI2();
// console.log(city);

// whereAmI2()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2 ${err.message}`))
//   .finally(() => console.log('3'));

(async function () {
  try {
    const city = await whereAmI2();
    console.log(`2: ${city}`);
  } catch (err) {
    console.log('2');
  }
  console.log('3');
})();

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

// 264. Returning Values from Async Functions

// 265. Running Promises in Parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'poland');

// 266. Other Promise Combinators: race, allSettled and any

// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/germany`),
    getJSON(`https://restcountries.com/v2/name/france`),
  ]);
  console.log(res[0]);
})();

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long!'));
    }, s * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/belarus`), timeout(5)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('success'),
]).then(res => console.log(res));

Promise.all;
Promise.all([
  Promise.resolve('success'),
  Promise.reject('error'),
  Promise.resolve('success'),
]).then(res => console.log(res));

// Promise.any
Promise.any([
  Promise.resolve('successsuccesssuccess'),
  Promise.reject('errorerrorerrorerror'),
  Promise.resolve('successssssssssssss'),
]).then(res => console.log(res));

//////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Coding Challenge #1
// https://geocode.xyz/[request]&auth=239396541926777502332x12175
// 'https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=your_api_key'

// const whereAmI = function (lat, lng) {
//   const request = fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=239396541926777502332x12175`
//   )
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Problem with geocinding ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`you are in ${data.city}, ${data.country}`);
//       getCountryData(data.country);
//     })
//     .catch(err => {
//       console.error(`There is an error here! ${err.message}`);
//     });
// };

// const country = whereAmI(52.508, 13.381);

// 261. Coding Challenge #2

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// let imgContainer = document.querySelector('.images');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('image not found'));
//     });
//   });
// };

let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

// 267. Coding Challenge #3

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('image not found'));
    });
  });
};

// 267. Coding Challenge #3 - my code
// (async function () {
//   try {
//     let img = await createImage('img/img-1.jpg');
//     currentImg = img;
//     await wait(2);
//     currentImg.style.display = 'none';
//     img = await createImage('img/img-2.jpg');
//     currentImg = img;
//     await wait(2);
//     currentImg.style.display = 'none';
//     img = createImage('img/img-3.jpg');
//     currentImg = img;
//     await wait(2);
//     currentImg.style.display = 'none';
//   } catch (err) {
//     console.error(err.message);
//   }
//   console.log('finally');
// })();

// let imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img3.jpg'];
// let imgs = [];
// let data;

// const loadAll = async function (arr) {
//   let imgs = [];
//   data = await Promise.all([arr.map(img => imgs.push(img))]);
// };

// loadAll(imgArr);

// 267. Coding Challenge #3

// PART 1
const loadNPause = async function () {
  try {
    // image 1
    let img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    await wait(2);
    img.style.display = none;

    // image 2
    img = await createImage('img/img-2.jpg');
    console.log('Image 2 loaded');
    await wait(2);
    img.style.display = none;
  } catch (err) {
    console.error(err);
  }
};

// loadNPause();

// PART 2

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs); // promises

    const imgsEl = await Promise.all(imgs);

    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(err);
  }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
