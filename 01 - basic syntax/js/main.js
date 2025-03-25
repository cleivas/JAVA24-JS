console.log("Hello, world!");

const firstName = 'Clara';
console.log(firstName);

// firstName = 'Frida';
// kommentar för windows: ctrl *, för OS cmd shift 7

console.log('test');

let lastName = 'Leivas';
console.log(lastName);

lastName = 'Smedberg';
console.log(lastName);

lastName = 99;
console.log(lastName);

console.log(typeof lastName)

let empty;
console.log(empty, typeof empty);

let x = 10;
let y = 20;
let sum = x+y;

console.log(sum);

console.log(firstName + lastName)
console.log(firstName * lastName)
console.log(x * lastName)

const trees = ['Oak', 'Bristlecone', 'Birch', 'Redwood'];
console.log(trees);
console.log(trees[1]);
console.log(trees.length);
console.log(typeof trees);

// Funkar trots att det är en const
trees[0] = 0;

trees.push('oak')
console.log(trees);

const num = 10;

console.log(num == 10)
console.log(num == "10")
console.log(num === "10")


// Här deklareras en variabel av typen var. Den är tillgänglig utanför 
{
    test = 40;
}

console.log(test)

for(let i = 0; i<trees.length; i++){
    console.log(trees[i]);
}

for(const tree of trees){
    console.log(tree);
}

