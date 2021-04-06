/*
================
You are given the following list of movies

Task 1
Create a function called "showMovies" that
- iterates through the "movies" array and
- for each movie, it creates a <p> element with the movie title and director and append it to the #all-movies div.
- it sets the innerText of the #movies-number element to the total number of the movies in the array "movies"

Task 2
Amend your function above to only show movies after 1 second. Remember to use setTimeout to achieve that
Create a new function called "addMovie"
- it receives a movie object as an argument - your can create a new object for your favorite movie following using the "myMovies" objects as a guide 
- it adds the new movie to the list of movies after 2 seconds. Remember to setTimeout to achieve that
Call addMovies to add the new movie to the list and then showMovies to see the movies added on the screen.
How many movies can you see on your page?

Task 3
Can you make sure the new movie you just added is showing on the screen? 
TIP: use callbacks

Task 4
Create a form anywhere on your page. The form should have
- 4 input text fields, one for each property of your movie object
- a "save" button.
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3

================
*/
var movies = [
  {
    title: "Color Out of Space",
    director: "Richard Stanley",
    type: "sci-fi",
    haveWatched: true,
  },
  {
    title: "A Twelve-Year Night",
    director: "Álvaro Brechner",
    type: "horror",
    haveWatched: false,
  },
  {
    title: "The Whistlers",
    director: "Corneliu Porumboiu",
    type: "comedy",
    haveWatched: true,
  },
  {
    title: "The Invisible Man",
    director: "Leigh Whannell",
    type: "horror",
    haveWatched: false,
  },
];
//Declaracion de variables globales.
let containerMovieDescription = document.querySelector('#all-movies');
let numberOfMovies = document.querySelector('#movies-number');

// create showMovies function
// Task 1
function showMovies() {
  setTimeout(() => {
    numberOfMovies.innerText = movies.length;
    movies.forEach(movie => {
      let p = document.createElement('p');
      containerMovieDescription.appendChild(p);
      p.innerText = `TITLE: ${movie.title} - DIRECTOR: ${movie.director}`;
    })
  }, 1000)
}

// create a new movie object for your favorite movie
//Task 2
let myMovie = {
  title: "The Sixth Sense",
  director: "Manoj Nelliyattu Shyamalan",
  type: "psychological thriller",
  haveWatched: true,
}

// create addMovies function
function addMovie(movie) {
  setTimeout(() => {
    movies.push(movie)
    showMovies() // Task 3
  }
    , 2000)

}
//Llamando la funcion addMovie y luego showMovies 
addMovie(myMovie);

//Task 4
/* Task 4
When the button is clicked
- The field values should be used to create a new movie object literal
- The new movie is then added to the list of movies and gets displayed on your page
TIP: Use the functions you created on tasks 1-3*/
let jumbotronDiv = document.querySelector('div.jumbotron')
let newDiv = document.createElement('div');
jumbotronDiv.appendChild(newDiv).id = 'form-div';

let form = document.createElement('form');
newDiv.appendChild(form).id = 'new-movie';

form.innerHTML =
 `<input id="titleTextField" type="text" placeholder="Title"/>
  <input id="directorTextField" type="text" placeholder="Director"/>
  <input id="typeTextField" type="text" placeholder="Type"/>
  <input id="haveWatchedTextField" type="text" placeholder="haveWatchedTextField"/>
  <input id="submitButton" type="submit" value="save"/>`