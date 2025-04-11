export async function getDogImages(breed, amount){
    const url = `https://dog.ceo/api/breed/${breed}/images/random/${amount}`;

    try{
        const response = await fetch(url);

        if(response.status === 404){
            throw new Error('Check your spelling')
        }

        const dogObj = await response.json();
        // console.log(Array.isArray( dogObj.message))
        return dogObj.message;
    }
    catch(error){
        throw error;
    }
}

// export {getDogImages}