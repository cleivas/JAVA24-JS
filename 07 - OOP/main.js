import { Animal } from "./modules/Animal.js";
import { Bird } from "./modules/Animal.js";
import { DogCard } from "./modules/DogCard.js";

const dogContainer = document.querySelector('#dogContainer');
const form = document.querySelector('form');

form.addEventListener('submit', event =>{
    event.preventDefault();

    const breed = form.querySelector('input').value;
    const dogCard = new DogCard(breed);
    // dogCard.breed = 'hound';
    dogCard.createGUI(dogContainer)

    // console.log(dogCard.#breed)
    console.log(dogCard.getBreed)

    // Försegla 
    Object.seal(dogCard);
    dogCard.name = 'test';

})








const dog = new Animal('dog', 'woof');
const gorilla = new Animal('gorilla', 'AAAHHHH');

console.log(dog)
dog.makeSound();
gorilla.makeSound();

const bird = new Bird('toucan', 'KAH kAHHH', '2m');
bird.makeSound();

console.log(bird);

// // Bara för att visa att det är möjligt
// String.prototype.getTrue = ()=>true;

// const str = 'string';
// console.log( str.getTrue() );