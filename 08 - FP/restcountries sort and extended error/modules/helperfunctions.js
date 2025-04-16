export function sortCountries(countries, order){
    
    // toSorted ger en kopia av arrayen, sorterad i fallande bokstavsordning
    const sortedCountries = countries.toSorted();

    if(order === 'fallande') return sortedCountries;
    else if(order === 'stigande'){
        sortedCountries.reverse();
        return sortedCountries;
    }
    else if(order === 'default') return countries;
    
}