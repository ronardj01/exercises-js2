/* In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats are considered UNeven for this kata. */


function testEven(n) {
  //Your awesome code here!
  return n % 2 === 0;
}
console.log('> Primera kata')
console.log(testEven(5));
console.log(testEven(0.5));
console.log(testEven(8));
console.log(testEven(-4));

/* You were camping with your friends far away from home, but when it's time to go back,
you realize that your fuel is running out and the nearest pump is 50 miles away! 
You know that on average, your car runs on about 25 miles per gallon. 
There are 2 gallons left. Considering these factors, write a function that tells you if it is possible
to get to the pump or not. Function should return true (1 in Prolog) if it is possible and false (0 in Prolog)
 if not. The input values are always positive. */

console.log("")
console.log('> Segunda kata')
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  return distanceToPump / fuelLeft <= mpg;
};

console.log(zeroFuel(50, 25, 2));

/* Take an array and remove every second element from the array.
Always keep the first element and start removing with the next element. */

console.log("")
console.log('> Tercera kata')
function removeEveryOther(arr) {
  //your code here
  return arr.filter((element, index) => index % 2 === 0)
}

let arrayMixta = ['Luisa', 'Ronar', 2, 5, 'Eli', 18, 'Xaire'];

console.log(removeEveryOther(arrayMixta));

/* Write a program that finds the summation of every number from 1 to num.
The number will always be a positive integer greater than 0. */

console.log("")
console.log('> Cuarta kata')
var summation = function (num) {
  // Code here
  resultado = 0
  for (i = 0; i <= num; i++) {
    resultado += i;
  }
  return resultado
}

console.log(summation(8))

/* At the annual family gathering, the family likes to find the oldest living family member’s age
and the youngest family member’s age and calculate the difference between them.
You will be given an array of all the family members' ages, in any order. 
The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.
Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the 
youngest and oldest age]. */


console.log("")
console.log('> Quinta kata')
function differenceInAges(ages){
  let resultado = [];
  resultado.push(Math.min(...ages));
  resultado.push(Math.max(...ages));
  resultado.push(Math.max(...ages) - Math.min(...ages))
  return resultado;
}

let arrayOfAge = [82, 15, 6, 38, 35];
console.log(differenceInAges(arrayOfAge));