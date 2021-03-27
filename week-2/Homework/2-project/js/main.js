//1. Declaracion de variables globales.
const divContent = document.querySelector('div.jumbotron');
const donateBtn = document.querySelector('div.jumbotron .btn-primary')
const volunteerBtn = document.querySelector('div.jumbotron .btn-secondary')

//1.2 Variables globales de los botones de cambio de tema.
const botonAzul = document.querySelector('#blueBtn');
const botonNaranja = document.querySelector('#orangeBtn');
const botonGreen = document.querySelector('#greenBtn');

let tema = [
  { nombre: 'tema azul', jumbotron: '#588fbd', donate: '#ffa500', volunteerBG: 'black', volunteerColor: 'white' },
  { nombre: 'tema naranja', jumbotron: '#f0ad4e', donate: '#5751fd', volunteerBG: '#31b0d5', volunteerColor: 'white' },
  { nombre: 'tema verde', jumbotron: '#87ca8a', donate: 'black', volunteerBG: '#8c9c08', volunteerColor: 'black' },
]
let temaAzul = ['#588fbd', 'ffa500', 'black', 'white']
//2. Funcionalidad del boton azul.
function changingTheme(boton, obj) {
divContent.style.backgroundColor = obj.jumbotron;
donateBtn.style.backgroundColor = obj.donate;
volunteerBtn.style.backgroundColor = obj.volunteerBG;
volunteerBtn.style.color = obj.volunteerColor;
}

botonAzul.addEventListener('click', () => changingTheme(botonAzul, tema[0]));
botonNaranja.addEventListener('click', () => changingTheme(botonNaranja, tema[1]));
botonGreen.addEventListener('click', (e) => changingTheme(e.target, tema[2]));
