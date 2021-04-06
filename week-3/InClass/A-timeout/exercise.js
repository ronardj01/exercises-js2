/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/
//Task 1
let body = document.querySelector('body');
setTimeout(() => body.style.backgroundColor = '#F098F5', 3000)

//Task 2
let arrayOfColors = ['#33FF57', '#33FFBD', '#75FF33', '#DBFF33', '#FFBD33']
let index = 0;

setInterval(() => {
  if (index >= arrayOfColors.length) {
    index = 0;
  }
  body.style.backgroundColor = arrayOfColors[index];
  index++
}, 5000) 