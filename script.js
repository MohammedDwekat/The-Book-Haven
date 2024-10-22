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
