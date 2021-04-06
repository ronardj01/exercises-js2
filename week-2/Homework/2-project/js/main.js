//1. Declaracion de variables globales.
const divContent = document.querySelector('div.jumbotron');
const donateBtn = document.querySelector('div.jumbotron .btn-primary')
const volunteerBtn = document.querySelector('div.jumbotron .btn-secondary')

//1.2 Variables globales de los botones de cambio de tema.
const botonAzul = document.querySelector('#blueBtn');
const botonNaranja = document.querySelector('#orangeBtn');
const botonGreen = document.querySelector('#greenBtn');

let tema = [
  { nombre: 'tema azul', jumbotron: '#588fbd', donate: '#ffa500', volunteer: { background: 'black', color: 'white' } },
  { nombre: 'tema naranja', jumbotron: '#f0ad4e', donate: '#5751fd', volunteer: { background: '#31b0d5', color: 'white' } },
  { nombre: 'tema verde', jumbotron: '#87ca8a', donate: 'black', volunteer: { background: '#8c9c08', color: 'black' } },
]

//1.3 Funcionalidad de los botones para el cambio de tema.
function changingTheme(obj) {
  divContent.style.backgroundColor = obj.jumbotron;
  donateBtn.style.backgroundColor = obj.donate;
  volunteerBtn.style.backgroundColor = obj.volunteer.background;
  volunteerBtn.style.color = obj.volunteer.color;
}

/* botonAzul.addEventListener('click', () => changingTheme(tema[0]));
botonNaranja.addEventListener('click', () => changingTheme(tema[1]));
botonGreen.addEventListener('click', () => changingTheme(tema[2])); */
[botonAzul, botonNaranja, botonGreen].forEach((boton, index) => boton.addEventListener('click', () => changingTheme(tema[index])))

//2. Declaracion de las variables globales.
const submitBtn = document.querySelector('form button');
const emailField = document.querySelector('#exampleInputEmail1');
const yourNameField = document.querySelector('#example-text-input');
const describeYourselfField = document.querySelector('#exampleTextarea');

//2.1 Funcionalidad del boton submit para la validacion de los campos.
function validateFields(event) {
  event.preventDefault();
  let isValid = true;
  let arrayOfFields = [emailField, yourNameField, describeYourselfField]
  
  //Limpiar todos los background color de los campos.
  arrayOfFields.forEach(field => field.style.backgroundColor = 'white')
  
  //Validar condiciones de los campos.
  if (!(emailField.value.length > 0 && emailField.value.includes('@'))) {
    emailField.style.backgroundColor = 'tomato';
    isValid = false;
  }
  if(!yourNameField.value.length > 0) {
    yourNameField.style.backgroundColor = 'tomato';
    isValid = false;
  }
  if(!describeYourselfField.value.length > 0) {
    describeYourselfField.style.backgroundColor = 'tomato';
    isValid = false;
  }
 //Verifica que todos los campos cumplen las condiciones y limpia los valores de los campos.
 if(isValid) {
   alert('thank you for filling out the form');
   arrayOfFields.forEach(field => field.value = " ");
 }
}

submitBtn.addEventListener('click', validateFields);



