class DogCard{
    #breed;
    constructor(breed){
        this.#breed = breed;
    }

    async createGUI(containerEl){
        const img = document.createElement('img')
        containerEl.append(img);
        img.src = await this.#getDogImgUrl();
        
        img.addEventListener('click', async ()=>{ 
            img.src = await this.#getDogImgUrl();
        })
    }

    async #getDogImgUrl(){
        const url = `https://dog.ceo/api/breed/${this.#breed}/images/random`

        const response = await fetch(url);
        const dogObj = await response.json();
        return dogObj.message;
    }

    get getBreed(){
        return this.#breed;
    }
}

export {DogCard}