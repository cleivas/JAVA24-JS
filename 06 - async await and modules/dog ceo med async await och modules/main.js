import { getDogImages } from "./modules/dogapi.js";
import { renderError, renderImages } from "./modules/render.js";

const form = document.querySelector('form');

form.addEventListener('submit', event =>{
    event.preventDefault();

    const breed = document.querySelector('#breedInput').value;
    const amount = document.querySelector('#amountInput').value;

    console.log(breed, amount);

    getDogImages(breed, amount)
        .then( renderImages )
        .catch( renderError );

})