/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");

  arrayOfPeople.forEach(function (persona) {
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h2');
    content.appendChild(h1);
    content.appendChild(h2);
    h1.innerText = persona.name;
    h2.innerText = persona.job;
  })

}

/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */

function exerciseTwo(shopping) {
  //Write your code in here
  const listaDesordenada = document.getElementById('content');
  const ul = document.createElement('ul');
  listaDesordenada.appendChild(ul);

  const elementosLista = document.querySelector('div#content ul');
  shopping.forEach(function (articulo) {
    let li = document.createElement('li');
    elementosLista.appendChild(li);
    li.innerText = articulo;
  })

}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here

  const nuevoDiv = document.querySelector('#content');
  const div = document.createElement('div');
  nuevoDiv.appendChild(div).className = 'book-list';

  const booksContent = document.querySelector('.book-list');
  const h1 = document.createElement('h1');
  booksContent.appendChild(h1);
  h1.innerText = 'Books List'

  const listaLibros = document.querySelector('.book-list');
  const ul = document.createElement('ul');
  listaLibros.appendChild(ul);
  ul.style.listStyle = 'none';
  ul.style.display = 'flex';
  ul.style.flexWrap = 'wrap';
  ul.style.padding = '20px';

  let libro = document.querySelector('.book-list ul');
  let img1 = "./img/design-of-everyday-things.jpg";
  let img2 = "./img/the-most-human-human.jpg";
  let img3 = "./img/the-pragmatic-programmer.jpg";
  let arrayOfBooksImages = [img1, img2, img3];
  books.forEach(function (book, index) {
    let li = document.createElement('li');
    libro.appendChild(li);
    li.innerHTML =
      `<p>${book.title}-${book.author}</p>
      <img src="${arrayOfBooksImages[index]}">`
    li.style.margin = '15px';
    li.style.padding = '10px';
    li.style.minWidth = '350px';
    if (book.alreadyRead) {
      li.style.backgroundColor = 'green'
    } else {
      li.style.backgroundColor = 'red'
    }
  })
}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
