<<<<<<< HEAD
import { Books } from "./data.js";

const ViewBooks = (array = []) => {
  //console.log("Books list :\n");

  const booklist = document.getElementById("book-list");
  array.forEach((Book) => {
    //console.log(` Book ${Book.id} ${Book.title} ,  ${Book.author}`)

    const NewBook = `<div><h4>${Book.title}\n</h4> <h5>${Book.author}\n</h5> <p> ${Book.description}</p>  </div>`;

    booklist.innerHTML += NewBook;
  });
};

ViewBooks(Books);
=======
fetch("data.json")
  .then((response) => {
    if (response.ok) return response.json();
  })
  .then((data) => {
    const booklist = document.getElementById("book-list");
    if (booklist) {
      data.forEach((book) => {
        const bookHTML = `<div class="book-card">
              <h2>${book.title}</h2>
              <h3>${book.author}</h3>
              <p>${book.price}</p>
              
            </div>
          `;
        booklist.innerHTML += bookHTML;
      });
    }
  })
  .catch((error) => {
    console.error("Problem with the fetch data:", error);
  });
>>>>>>> Dwaikat
