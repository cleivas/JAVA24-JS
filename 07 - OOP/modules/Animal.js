// function Animal(type, sound){
//     this.type = type;
//     this.sound = sound;
// }

// Animal.prototype.makeSound = function(){
//     console.log(this.sound, this.sound);
// }


class Animal{
    // let test = 10; //Går ej!
    
    constructor(type, sound){
        this.type = type;
        this.sound = sound;
    }

    makeSound(){
        console.log(this.sound, this.sound);
    }
}

class Bird extends Animal {     
    #wingspan; 
//Konstruktorn har samma parametrar som Animal plus en till
    constructor(type, sound, wingspan) {
        super(type, sound); //Anropar konstruktorn från Animal
        this.#wingspan = wingspan;
    }
    fly() { //Ny metod som endast finns i Bird
        console.log(`Flying with a ${this.#wingspan} wingspan`);
    }
}


export {Animal, Bird};