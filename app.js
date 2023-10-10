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

//Creo una variabile che mi prende il primo elemento che ha la classe image
const firstImageElement = imageElements[0];
firstImageElement.classList.add("active");