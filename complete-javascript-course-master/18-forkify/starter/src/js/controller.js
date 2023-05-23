import * as model from './model.js';
import recipeView from './views/recipeView.js';
// import icons from '../img/icons.svg'; // Parcel 1

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

// new version v 2.2 updated

// all checked 18.05.2023

// 288. Loading a Recipe from API

////////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    // 1. loading recipy
    await model.loadRecipe(id);

    // 2. rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};
controlRecipes();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();

// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);

// 291. The MVC Architecture

// 292. Refactoring for MVC
