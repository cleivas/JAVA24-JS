
// Utan higherorder och callback behövs en for-loop per uträkning
const arr = [4, 2, 4, 2, 54, 234, 65, 7, 87];
console.log(arr)
let result = [];

for(const num of arr){
    result.push(num*2 );
}

console.log(result);

result = [];
for(const num of arr){
    result.push(num/2)
}
console.log(result)


// Higher order function
function loopThroughArray(array, calcFunc){
    const result = [];
    for(const num of array){
        result.push( calcFunc(num) );
    }
    return result;
}

// Functions som kommer användas som callbackfunktioner
function double(number){
    return number*2;
}

function divideByTwo(number){
    return number/2;
}

console.log( loopThroughArray(arr, double)  )
console.log( loopThroughArray(arr, divideByTwo))

// Här används en anonym funktion som ett argument
console.log( loopThroughArray(arr, function(x){return x*10}))


// arrow functions
// function double(x){
    //     return x+x;
    // }
    
    const doubleUp = x => x+x;
    console.log( loopThroughArray(arr, doubleUp))
    console.log( loopThroughArray(arr, x => x*10))