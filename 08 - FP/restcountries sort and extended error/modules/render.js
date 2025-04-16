export function renderCountries(countries){
    const container = document.querySelector('div');
    container.innerHTML = '';

    for(const country of countries){
        const h1 = document.createElement('h1');

        h1.innerText = country;
        container.append(h1);
    }

}

export function renderError(error){
    console.log(error)
    const container = document.querySelector('div');
    container.innerHTML = '';
    const h1 = document.createElement('h1');

    if(error.statusCode) h1.innerText = error.message;
    else h1.innerText = 'Something went wrong. Please try again later.'


    container.append(h1);
}