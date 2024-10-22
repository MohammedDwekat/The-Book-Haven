import { Books } from "./data.js";

const ViewBooks = (array = []) => {
  console.log("Books list :\n");
  array.forEach((Book) =>
    console.log(` Book ${Book.id} ${Book.title} ,  ${Book.author}`)
  );
};

ViewBooks(Books);
