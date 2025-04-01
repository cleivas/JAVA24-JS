const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault(); //Behövs alltid!!
    console.log(event.target) //The event source
    //event.target.remove() // Tar bort formelementet


    const text = document.querySelector('#text').value;
    const number = document.querySelector('#number').value;
    const color = document.querySelector('#colorSelect').value;

    console.log(text, number, color);
    addParagraph(text, number, color);
    // form.reset();
})

function addParagraph(text, fontSize, color){
    const container = document.querySelector('#textContainer');
    const pEl = document.createElement('p');
    pEl.innerText = text;
    pEl.style.fontSize = fontSize+'px';
    pEl.style.color = color;

    container.prepend(pEl);
}

// Göm eller visa ett element genom att lägga till en klass som har en stilregel: display: none - se css-filen
const toggleErrorBtn = document.querySelector('#hideErrorBtn');

toggleErrorBtn.addEventListener('click', ()=>{
    const errorEl = document.querySelector('#errorMessage');
    errorEl.classList.toggle('hidden');
})

toggleErrorBtn.addEventListener('drag', (event)=>{
    console.log(event);
})