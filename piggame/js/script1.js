const game = document.querySelector('#gameDiv');
const winner = document.querySelector('#winnerDiv');
const buttons = document.querySelectorAll('#gameDiv button');

//variables
let name = '';
let score = 0;
let turnScore = 0;
let turns = 0;
let css = 'one';

// Eventlistener for the form
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    score = 0;
    turns = 0;
    turnScore = 0;
    name = document.querySelector('input').value;

    document.querySelector('#name').innerText = name;
    document.querySelector('#turns').innerText = 'Turns: ' + turns;
    document.querySelector('#turnScore').innerText = 'Turn score: ' + turnScore;
    document.querySelector('#score').innerText = 'Score: ' + score;

    event.target.classList.add('hidden');
    winner.classList.add('hidden');
    game.classList.remove('hidden');
});

// Eventlisteners for the buttons to roll the die and save the score
buttons[0].addEventListener('click', () => {
    const rand = Math.ceil(Math.random() * 6);
    console.log(rand)

    const classes = ['one', 'two', 'three', 'four', 'five', 'six']
    const die = document.querySelector('.die');
    die.innerHTML = ''; 
    die.classList.remove(css);
    css = classes[rand-1]
    die.classList.add(css);

    for (let i = 0; i < rand; i++) {
        const dot = document.createElement('div');
        die.append(dot);
    }

    if (rand === 1) {
        turns++;
        turnScore = 0;
        document.querySelector('#turns').innerText = 'Turns: ' + turns;
    }
    else {
        turnScore += rand;
    }
    document.querySelector('#turnScore').innerText = 'Turn score: ' + turnScore;
});
buttons[1].addEventListener('click', () => {
    score += turnScore;
    turnScore = 0;
    turns++;

    if (score >= 1) {
        document.querySelector('#winnerDiv h2').innerText = `${name}, you reached 100 points in ${turns} turns!`
        game.classList.add('hidden');
        winner.classList.remove('hidden');
    }
    else {
        document.querySelector('#turns').innerText = 'Turns: ' + turns;
        document.querySelector('#turnScore').innerText = 'Turn score: ' + turnScore;
        document.querySelector('#score').innerText = 'Score: ' + score;
    }
});

// Eventlistener for the reset button 
document.querySelector('#resetBtn').addEventListener('click', () => {
    score = 0;
    turns = 0;
    turnScore = 0;
    name = document.querySelector('input').value;

    document.querySelector('#name').innerText = name;
    document.querySelector('#turns').innerText = 'Turns: ' + turns;
    document.querySelector('#turnScore').innerText = 'Turn score: ' + turnScore;
    document.querySelector('#score').innerText = 'Score: ' + score;

    winner.classList.add('hidden');
    game.classList.remove('hidden');
})
