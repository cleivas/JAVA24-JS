const arr = [4, 53, 2, 4, 654, 23, 5, 6];

arr.forEach((element, i, theArray)=>{
    // console.log(element, i, theArray);
});

// Filter
console.log(arr)
const result = arr.filter( num => num>10)

console.log(result)
// function(element){ return true }

// Map
const newArray = arr.map( num => num/4);
console.log(newArray)

// sort
arr.sort();
console.log(arr)

arr.sort( (a, b)=>{
    console.log(a, b, b-a);
    return b-a
})
console.log(arr)