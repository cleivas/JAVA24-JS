const colors = ['violet', 'orange', 'hotpink', 'skyblue', 'limegreen'];

let index = 0;
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // console.log(event);

    // const randomIndex = Math.floor(Math.random()*colors.length);
    // document.body.style.background = colors[randomIndex];

    document.body.style.background = colors[index];
    index++;
    if(index>=colors.length) index = 0;
    console.log(index)
})


const random = Math.floor(Math.random()*colors.length);
console.log(random);

function changeBackgroundColor(event){
    console.log(event.clientY);

    document.body.style.background = `hsl(${event.clientX/10}, ${event.clientY}%, 80%)`;
}

document.body.addEventListener('mousemove', changeBackgroundColor)

