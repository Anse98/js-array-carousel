// CAROSELLO

//Creo un array di immagini
const images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp"
];

//creo una variabile che mi prende l'elemnto con la classe container dal DOM
const containerImg = document.querySelector(".container");

// Faccio un ciclo for che concatena template literal
for (let i = 0; i < images.length; i++) {

  // mi salvo l'immagine corrente in una variabile
  const currentImg = images[i];

  // mi creo un'altra variabile che contiene la stringa da inserire nel DOM
  const htmlString = ` 
  <div class="image">
  <img src ="${currentImg}">
  </div>
   `

  // Vado ad inserire nel container la variabile che contiene la stringa
  containerImg.innerHTML += htmlString;
}

// Creo una variabile che mi prende tutti gli elementi con la classe image
const imageElements = document.querySelectorAll(".image");

// Creo una variabile che mi prende tutti gli elementi con la classe thumb-img
const thumbImages = document.querySelectorAll(".thumb-img")


//Creo una variabile che mi prende il primo elemento che ha la classe image
const firstImageElement = imageElements[0];
firstImageElement.classList.add("active");

//Creo una variabile che mi prende il primo elemento che ha la classe thumb-img
const firstThumb = thumbImages[0];
firstThumb.classList.add("thumb-active");


// EVENTO AL CLICK DELLE FRECCE

// tengo traccia con una variabile a che foto sono
let actual = 0;


// FRECCIA GIU

function changeActDown() {

  // Rimuovo la classe active dall'elemento
  imageElements[actual].classList.remove("active");
  thumbImages[actual].classList.remove("thumb-active");

  // SE la foto è l'ultima allora ritorna alla prima
  if (actual === (imageElements.length - 1) || actual === (thumbImages.length - 1)) {
    actual = 0;

  // ALTRIMENTI passa alla foto successiva
  } else {
    actual += 1;
  }

  imageElements[actual].classList.add("active");
  thumbImages[actual].classList.add("thumb-active");
}


//FRECCIA SU

function changeActUp () {

  //Rimuovo la classe active dall'elemento
  imageElements[actual].classList.remove("active");
  thumbImages[actual].classList.remove("thumb-active");

  // SE sei alla prima foto allora passa all'ultima
  if (actual === 0) {
    actual = imageElements.length - 1;
    actual = thumbImages.length - 1;

  // ALTRIMENTI passa alla foto precedente
  } else {
    actual -= 1;
  }
  
  imageElements[actual].classList.add("active");
  thumbImages[actual].classList.add("thumb-active");
}