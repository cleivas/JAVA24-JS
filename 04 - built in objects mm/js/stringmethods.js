const colors = ['hotpink', 'skyblue', 'orange', 'lightgreen'];

const randomIndex = Math.floor(Math.random() * colors.length);
const color = colors[ randomIndex]
console.log(color);


const form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    
    const userGuess = document.querySelector('input').value;
    console.log(userGuess);

    console.log(color == userGuess.toLowerCase().trim());
    

})

