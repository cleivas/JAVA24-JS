const mainEl = document.createElement('main');

document.body.append(mainEl);
console.log(mainEl);

const h1 = document.createElement('h1');
h1.innerText = 'Hej'
mainEl.append(h1);

// Skapa en topp tre lista
const topMovies = ["Interstellar", "El Camino", "Finding Nemo"];

const listEl = document.createElement('ol');
mainEl.append(listEl);

for(const movie of topMovies){
    const li = document.createElement('li');
    listEl.append(li);
    li.innerText = movie;
}

// ta bort ett element
document.querySelectorAll('li')[1].remove();

const text = 'det här är ett "citat" ${}'
console.log(text)

const name = 'Bob Ross';
const greeting = `Hi, ${name}!

Skriva lite mer...`;
console.log(greeting);


for(let i = 0; i<10; i++){
    const h2 = document.createElement('h2');
    document.body.append(h2);
    h2.innerText = i+1;

    const hue = i*10+100;

    console.log(i, hue);
    h2.style.backgroundColor = `hsl(${hue}, 70%, 80%)`;
}