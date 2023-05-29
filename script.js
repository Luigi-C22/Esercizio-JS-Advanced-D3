const apiurl = "https://api.pexels.com/v1";
const apiKey = "9orG0jI8QabJazXJn8eX2DTGfTxVHTVT0kyM0oQeojcgshwQHPlHey5Y";
const albumContainer = document.getElementById("album-container");

// problema 2) fare chiamata ajax

const getAlbum = () => {
    return fetch(apiurl + "/search?query=smile", {
        headers: {
            Authorization: apiKey 
        }
    })
        .then((res) => {
            return res.json()
    })
        .then((res2) => {
            albumCard(res2.photos)
        })
        .catch((err) => {console.error("Hai un errore: " + err)});
}

//problema 1) funzione per creare un DOM con gli oggetti degli API

const albumCard = (photos) => {
    photos.map(photo => {
    const card = document.createElement("div");
    card.classList.add("card");
    
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = photo.src.medium;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.textContent = photo.photographer;

    cardBody.appendChild(cardTitle);
    card.appendChild(img);
    card.appendChild(cardBody);
    albumContainer.appendChild(card);

    });
}
    /*photos = photos.filter (item => {return item.width <= 4000} ) //prova del metodo .filter
    const domElements = photos.map(photo => {
        console.log(photo);
      const img = document.createElement("img");
      img.src = photo.src.small;
    albumContainer.appendChild(img);
    /return img
    });
    console.log(domElements)
    albumContainer.append(domElements[0], domElements[1], domElements[2])
    albumContainer.append(...domElements) // i tre puntini si chiamano 'spread operator'
}*/



getAlbum();

/*const arr = [1, 3, 5, 8, 9, 10];
//arr.forEach(item => console.log(item))
const arrMod = arr.map (item => {
    return item*2 
} ) 
console.log(arrMod);*/
