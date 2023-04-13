'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Section 13: Advanced Dom and Events

// 184. PROJECT: "Bankist" Website

// 185. How the DOM Really Works

// 186. Selecting, creating, and deleting elements

// Selecting elements
console.log(document.documentElement);
console.log(document.headt);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');

document.getElementsByClassName('btn');

// Creating and inserting elements

// .insertAdjacentHTML;

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = "We use cookies for improved functionality and analytics.";
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn--close--cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message)

// Delete elements
document
  .querySelector('.btn--close--cookie')
  .addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message)
    // old method above
  });

// 187. Styles, Attributes and Classes

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '102%';
message.style.height = '80px';

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orange');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes

logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Don't use
logo.clasName = 'Damian';
