import { sortCountries } from "./modules/helperfunctions.js";
import { renderCountries, renderError } from "./modules/render.js";
import { getCountries } from "./modules/restcountry.js";


const form = document.querySelector('form');
const select = document.querySelector('select');
let countries = [];

form.addEventListener('submit', async event =>{
    event.preventDefault();

    const language = form.querySelector('input').value;

    // console.log(language)
    try{
        countries = await getCountries(language)
        renderCountries(countries);
    }
    catch(error){
        console.log(error)
        renderError(error);
    }
})

select.addEventListener('change', event =>{
    
    const sortedCountries = sortCountries(countries, select.value );

    renderCountries(sortedCountries);
})