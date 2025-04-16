function sayHello(name){ //Yttre funktion
    const greeting = `Hello, ${name}`;

    return function(){ //Inre funktion
        console.log(greeting); //Variabel från parent scopet
    };
}


const sayHelloToEveryone = sayHello('Everyone');
const sayHelloToTheMoon = sayHello('the Moon');

sayHelloToEveryone(); //Hello, Everyone
sayHelloToTheMoon(); //Hello, the moon


const btns = document.querySelectorAll('button');

btns[0].addEventListener('click', changeSize(100))
btns[1].addEventListener('click', changeSize(200))
btns[2].addEventListener('click', changeSize(300))


function changeSize(size){
    const div = document.querySelector('div');
   
    return function(event){
        console.log(event.target.innerText)
        div.style.width = size + 'px';
    }
}


