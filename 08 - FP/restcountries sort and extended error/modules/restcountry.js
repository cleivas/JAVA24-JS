import { HTTPError } from "./httperror.js";

export async function getCountries(language){
    
    try{
        const url = 'https://restcountries.com/v3.1/lang/' + language;
        
        const response = await fetch(url);

        if(response.ok){
            const data = await response.json();

            //  om man vill mappa ut till objekt
            // const countries = data.map( ({name, population})=>{ return {name: name.common, population} });
        
            // En array med strings, ländernas namn
            const countries = data.map( ({name})=> {
                console.log(name)
                return name.common 
            });
            
            return countries;
        }
        else if(response.status === 404){
            throw new HTTPError('No countries were found. Please check your spelling.', response.status)
        }

    }
    catch(error){
        throw error;
    }
}