let counter = -1
let setAlarmValue = 0;
let h1TimeRemaining = document.querySelector('#timeRemaining');
function setAlarm() {
  clearInterval(counter);
  setAlarmValue = document.querySelector('#alarmSet').value;

  counter = setInterval(() => {
    if(setAlarmValue === 0) {
      playAlarm();
      clearInterval(counter);
      h1TimeRemaining.style.backgroundColor = 'tomato'
    }
    if (setAlarmValue < 10) {
      h1TimeRemaining.innerText = `Time Remaining: 00:0${setAlarmValue}`;
    } else {
      h1TimeRemaining.innerText = `Time Remaining: 00:${setAlarmValue}`;
    }
    setAlarmValue--;
  }, 1000);
  
}

//Habilitar un boton de pausa.
let pauseBtn = document.createElement('button');
let btnContent = document.querySelector('div.centre :nth-child(3n)');
btnContent.appendChild(pauseBtn);
pauseBtn.innerText = 'Pause';

function pause() {
  clearInterval(counter);
  let timeReminder = setAlarmValue + 1; //Cuando se imprime la variable el valor ha rebajado 1.
  document.querySelector('#alarmSet').value = timeReminder;
}

pauseBtn.addEventListener('click', pause)

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
