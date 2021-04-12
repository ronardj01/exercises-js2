// Write your code here
//Imagenes para mostrar en el carrusel.
let img0 = "https://images.unsplash.com/photo-1606995797360-c446110d0344?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHBhaXNhamVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
let img1 = "https://images.unsplash.com/photo-1601859057596-f0c49e395b77?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGFpc2FqZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
let img2 = "https://images.unsplash.com/photo-1593006424201-8bbc93a4ba87?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGFpc2FqZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
let img3 = "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBhaXNhamVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

let arrayOfImages = [img0, img1, img2, img3];

//Creando las variables.
const body = document.querySelector('body');
const h1 = document.createElement('h1');
const divCarousel = document.createElement('div');
const divBtn = document.createElement('div');
const backBtn = document.createElement('button');
const forwardBtn = document.createElement('button');
const autoBackBtn = document.createElement('button');
const stopBtn = document.createElement('button');
const autoForwardBtn = document.createElement('button');

//Agregando los elementos al HTML.
body.append(h1, divCarousel, divBtn);
divBtn.id = 'botones';
divBtn.append(backBtn, autoBackBtn, stopBtn, forwardBtn, autoForwardBtn);

//Asignando valores a las variables.
h1.innerText = "CAROUSEL OF IMAGES";
divCarousel.innerHTML = `<img src = ${img0}>`; //Coloca la primera imagen al cargar la pagina.
backBtn.innerText = "Back";
forwardBtn.innerText = "Forward";
autoBackBtn.innerText = "Auto Back";
autoForwardBtn.innerText = "Auto Forward";
stopBtn.innerText = "Stop";

//Funciones para el carusel.
let index = 0;
let auto = -1; //Valor imposible para un intervalo.
function back() {
  index--;
  if (index < 0) {
    index = arrayOfImages.length - 1;
  }
  divCarousel.innerHTML = `<img src = ${arrayOfImages[index]}>`;
}

function forward() {
  index++;
  if (index === arrayOfImages.length) {
    index = 0;
  }
  divCarousel.innerHTML = `<img src = ${arrayOfImages[index]}>`;
}

function autoBack() {
  stop();
  auto = setInterval(() => back(), 3000);
}

function autoForward() {
  stop();
  auto = setInterval(() => forward(), 3000);
}

function stop() {
  clearInterval(auto);
}

//Funcionamiento de los botones
backBtn.addEventListener('click', back);
forwardBtn.addEventListener('click', forward);
autoBackBtn.addEventListener('click', autoBack);
autoForwardBtn.addEventListener('click', autoForward);
stopBtn.addEventListener('click', stop);

