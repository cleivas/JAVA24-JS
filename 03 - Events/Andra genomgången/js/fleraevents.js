const btnContainer = document.querySelector('#buttonContainer');

btnContainer.addEventListener('click', event => {
    // console.log(event.target);

    if(event.target.tagName == 'BUTTON'){
        const color = event.target.innerText;
        
        console.log(color);

        btnContainer.style.background = color;
    }

})