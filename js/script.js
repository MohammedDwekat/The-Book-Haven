// view books in index page

fetch("http://localhost:3000/books")
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

// AddBook function

const form = document.getElementById("book-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const description = document.getElementById("description").value;
  const status = "unread";
  const price = document.getElementById("price").value;
  const image = document.getElementById("image");
  const imageName = image.files[0].name;

  fetch("http://localhost:3000/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error: the response not OK ");
    })
    .then((existingBooks) => {
      // Calculate the new ID
      const lastId = existingBooks[existingBooks.length - 1].id;
      const id = lastId + 1;

      const bookData = {
        id,
        title,
        author,
        genre,
        description,
        status,
        price,
        image: imageName,
      };

      fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });
    })

    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to add the book");
    })

    .catch((error) => {
      console.error("Error:", error);
    });

  form.reset();
});
