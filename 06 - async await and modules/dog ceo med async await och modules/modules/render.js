function renderImages(imgUrls){

    const container = document.querySelector('#imageContainer');
    container.innerHTML = '';

    imgUrls.forEach(url => {
        const imgEl = document.createElement('img');
        imgEl.src = url;
        container.append(imgEl);
    })
}

function renderError({message}){
    const container = document.querySelector('#imageContainer');
    container.innerHTML = '';

    const pEl = document.createElement('p');
    pEl.innerText = message;
    container.append(pEl);
}

export {renderImages, renderError};