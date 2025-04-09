// destruct
const positions = [
    { x: 200, y: 300},
    { x: 32, y: 65},
    { x: 234, y: 34},
    { x: 32, y: 54},
    { x: 234, y: 345},
];

positions.forEach( ({x, y}) => {
    // console.log(position.x, position.y);
    console.log(x, y)
} );

const {x, y} = positions[0];
console.log('variabler:', x, y)

const numbers = [1, 32, 4, 54, 23];
const [a] = numbers;
console.log(a);

// Spread
console.log(numbers);
console.log(...numbers);
console.log(1, 32, 4, 54, 23)

console.log(Math.max(numbers)) //array är inte ett giltigt argument
console.log(Math.max(...numbers));

const obj1 = {
    p1: 'från objekt 1'
  }
  

  const obj2 = {
    p2: 'från objekt 2',
    p3: 'också från objekt 2'
  }
  

  const obj3 = {...obj1, ...obj2};
  console.log(obj3) //Innehåller egenskaperna p1, p2, p3


  const orgObj = {x: 100};
  const copyObj = {...orgObj};

  copyObj.x = 9;
  console.log(orgObj, copyObj);


const arrObj = {
    0: 'zero',
    1: 'one'
};

console.log(arrObj[0])


console.log(obj3.p1)
console.log(obj3['p1'])

// loopa igenom the keys
for(const key in obj3){
    console.log(key, obj3[key]);
}