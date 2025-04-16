/**
 * Pig - a dice game
 * Author: Clara Leivas
 * © 2024. This work is licensed under CC BY-SA 4.0
 * https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1 
 * 
 * 
 * This is a one player Pig game made as an assignment for a JavaScript course at Grit Academy.
 * Rules: https://en.wikipedia.org/wiki/Pig_(dice_game) 
 * 
 * A user enters their name in a form and then chooses to either roll a die or save score using buttons. Once the player reaches a total score of 100 the player can restart the game. 
 * 
 */


// HTML elements
const gameDiv = document.querySelector('#gameDiv');
const winnerDiv = document.querySelector('#winnerDiv');
const form = document.querySelector('form');
const rollBtn = document.querySelector('#rollBtn');
const holdBtn = document.querySelector('#holdBtn');
const resetBtn = document.querySelector('#resetBtn');

// Game play variables
const MAX_SCORE = 10;
let player = {
    name: '',
    score: 0,
    turnScore: 0,
    turns: 0
};

//Keeps track of what class to be removed from the div element displaying the die when the player rolls the die
let removeCSSClass = 'one'; 

// Eventlisteners
form.addEventListener('submit', startGame );
rollBtn.addEventListener('click', rollDie );
holdBtn.addEventListener('click', holdScore );
resetBtn.addEventListener('click', startGame)

// Resets all scores and displays the game elements
function startGame(event){
    event.preventDefault();

    player.score = 0;
    player.turns = 0;
    player.turnScore = 0;

    // When the game starts the first time
    if(player.name == ''){
        player.name = form.querySelector('input').value;
        document.querySelector('#name').innerText = player.name;
        form.classList.add('hidden');
    }
    
    updateScoreBoard();

    winnerDiv.classList.add('hidden');
    gameDiv.classList.remove('hidden');
}

// Roll die and update score 
function rollDie(){
    const rand = Math.floor(Math.random()*6)+1;
    updateDie(rand);

    if(rand === 1){
        player.turns++;
        player.turnScore = 0;
        document.querySelector('#turns').innerText = 'Turns: ' + player.turns;
    }
    else{
        player.turnScore += rand;
    }
    document.querySelector('#turnScore').innerText = 'Turn score: ' + player.turnScore;
}

// Updates total score with the score from the recent turn
function holdScore(){
    player.score += player.turnScore;
    player.turnScore = 0;
    player.turns++;

    if(player.score >= MAX_SCORE) showWinner();
    else updateScoreBoard();
}

// Displays total score, turn score and number of turns
function updateScoreBoard(){
    document.querySelector('#turns').innerText = 'Turns: ' + player.turns;
    document.querySelector('#turnScore').innerText = 'Turn score: ' + player.turnScore;
    document.querySelector('#score').innerText = 'Score: ' + player.score;
}

// Hides game elements and displays the reset btn
function showWinner(){
    document.querySelector('#winnerDiv h2').innerText = `${player.name}, you reached ${MAX_SCORE} points in ${player.turns} turns!`
    gameDiv.classList.add('hidden');
    winnerDiv.classList.remove('hidden');
}

// Updates the displayed Die by adding the correct amount of dots and a CSS class
function updateDie(number){
    const classes = ['one', 'two', 'three', 'four', 'five', 'six']
    const newCSSClass = classes[number-1];
    const die = document.querySelector('.die');
    die.innerHTML = ''; //Remove all dots

    die.classList.remove(removeCSSClass);
    die.classList.add(newCSSClass);
    removeCSSClass = newCSSClass;

    for(let i=0; i<number; i++){
        const dot = document.createElement('div');
        die.append(dot);
    }
}