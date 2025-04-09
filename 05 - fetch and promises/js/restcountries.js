
const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', event => {    
    event.preventDefault();
    const language = searchForm.querySelector('input').value.toLowerCase().trim();
    // console.log(language);
    
    const url = 'https://restcountries.com/v3.1/lang/' + language;
    // const url = 'https://restcountries.com/v3.1/all';
    
    fetch(url)
        .then( response => {
            console.log(response.status, response.ok);
            if(response.ok) {
                return response.json();
            }
            else if(response.status == 404){
                console.log('inga länger hittades')
                throw new Error('Check your spelling');
            }
            else{
                // uppsamling för serverfel mm
                throw new Error('Something went wrong. Please try again later.');
            }
        } )
        .then( displayCountries )
        .catch( error => {
            console.log(error)
            alert(error.message);
        })

})


function displayCountries( countries ){
    // console.log(countries);
    const containerDiv = document.querySelector('#countryContainer');
    containerDiv.innerHTML = '';

    countries.forEach( ({flags, name}) => {
        // Hitta egenskaperna i objekten som vi vill använda
        console.log(flags.png);
        console.log(flags.alt);
        console.log(name.common);

        // Skapa DOM-elementen som behövs
        const cardDiv = document.createElement('div');
        const nameH3 = document.createElement('h3');
        const img = document.createElement('img');

        // Använd genskaperna för att ge elementen innehåll
        nameH3.innerText = name.common;
        img.src = flags.png;
        img.alt = flags.alt;

        // Appenda elementen till container
        cardDiv.append(nameH3, img);
        containerDiv.append(cardDiv);
    })
}