const recipeContainer = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
}; // https://forkify-api.herokuapp.com/v2
 ///////////////////////////////////////
 // new version v 2.2 updated
 // all checked 18.05.2023
 // 288. Loading a Recipe from API

//# sourceMappingURL=index.62406edb.js.map
