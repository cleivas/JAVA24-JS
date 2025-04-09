const url = 'https://restcountries.com/v3.1/lang/spanish';

// Loggar alla promises för att det ska bli tydligt att de existerar
const fetchPromise = fetch(url);

console.log(1, "fetchPromise", fetchPromise);

const jsonPromise =  fetchPromise.then( response => {
    console.log(2, "fetchPromise resolved: ", response);

    return response.json();
})

console.log(3, "jsonPromise", jsonPromise);

jsonPromise.then( countries => {
    console.log(4, "jsonPromise resolved", countries);
})

// fetch(url)
//     .then( response => response.json() )
//     .then( countries => console.log(countries));

console.log('Det här händer före det att länderna loggas')