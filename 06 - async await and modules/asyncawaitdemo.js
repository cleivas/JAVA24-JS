async function asyncFunc() {

    console.log('I asyncFunc');

    return 100;
}

// const asyncFuncPromise = asyncFunc();
// console.log(asyncFuncPromise)


async function getDogImage(breed) {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;


    try {
        const response = await fetch(url);
        console.log(response);
        if(response.status === 404) throw new Error('Try a different breed or check your spelling.')

        const dogObj = await response.json();
        console.log(dogObj)

        return dogObj.message;
    }
    catch(error){
        console.log(error)
        throw error;
    }
}

function renderDogImage(imgUrl) {
    const imgEl = document.createElement('img');
    imgEl.src = imgUrl;
    document.body.append(imgEl);
}

function renderErrorMessage(errorObj){
    const pEl = document.createElement('p');
    pEl.innerText = errorObj.message;
    document.body.append(pEl);
}

getDogImage('pomeranian')
    .then(renderDogImage)
    .catch(renderErrorMessage);

console.log('längst ner i koden')


// async function forDemo(){
//     const dogImgUrl = await getDogImage('hound');
//     console.log(dogImgUrl)
// }

// console.log('For Demo', forDemo())