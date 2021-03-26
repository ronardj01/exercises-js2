//1. Declaracion de variables globales.
const divContent = document.querySelector('div.jumbotron');
const donateBtn = document.querySelector('div.jumbotron .btn-primary')
const volunteerBtn = document.querySelector('div.jumbotron .btn-secondary')

//1.2 Variables globales de los botones de cambio de tema.
const botonAzul = document.querySelector('#blueBtn');
const botonNaranja = document.querySelector('#orangeBtn');

//2. Funcionalidad del boton azul.
function changingToBlueTheme() {
  divContent.style.backgroundColor = '#588fbd';
  donateBtn.style.backgroundColor = '#ffa500';
  volunteerBtn.style.backgroundColor = 'white';
}

botonAzul.addEventListener('click', changingToBlueTheme);

//3. Funcionalidad del boton naranja.
function changingToOrangeTheme() {
  divContent.style.backgroundColor = '#f0ad4e';
  donateBtn.style.backgroundColor = '#5751fd';
  volunteerBtn.style.backgroundColor = 'white';
}
botonNaranja.addEventListener('click', changingToOrangeTheme);
