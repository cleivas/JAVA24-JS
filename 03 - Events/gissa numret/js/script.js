let randomNumber = Math.ceil( Math.random()*100);
let numberOfGuesses = 0;

const form = document.querySelector('form');
const resetBtn = document.querySelector('#restart');


form.addEventListener('submit', event =>{
    event.preventDefault();

    const pResult = document.querySelector('#result');
    const guess = form.querySelector('input').value;

    numberOfGuesses++;
    // console.log(typeof guess, typeof randomNumber)

    if(guess > randomNumber){
        pResult.innerText = 'Fel! Gissa lägre.';
    }
    else if(guess<randomNumber){
        pResult.innerText = 'Fel! Gissa högre.';
    }
    else{
        pResult.innerText = `Rätt! Det tog dig ${numberOfGuesses} gissningar.`;

        resetBtn.classList.remove('hidden');
        form.classList.add('hidden')
    }
});

resetBtn.addEventListener('click', ()=>{
    const pResult = document.querySelector('#result');

    numberOfGuesses = 0;
    randomNumber = Math.ceil( Math.random()*100);

    pResult.innerText = '';
    form.reset();
    form.classList.remove('hidden');
    resetBtn.classList.add('hidden');
})