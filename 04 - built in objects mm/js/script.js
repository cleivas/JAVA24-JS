const x = 100;
let y = x;

console.log( x, y)

y = 999;

console.log(x, y);

const obj1 = {
    x: 100
};

let obj2 = obj1;

console.log(obj1, obj2)

obj2.x = 999;

console.log(obj1, obj2)


const arr1 = [1, 2, 3];
const arr2 = arr1;

console.log(arr1, arr2)

arr1[0]= 9;
console.log(arr1, arr2)

arr2[2] = 'Oliver'
console.log(arr1, arr2)
