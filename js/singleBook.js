const id = new URLSearchParams(window.location.search).get("id");

if (id) {
  fetch(`http://localhost:3000/books/${id}`)
    .then((response) => {
      if (!response.ok) throw new Error("Book not found");
      return response.json();
    })
    .then((book) => {
      const viewBook = document.getElementById("book-view");
      viewBook.innerHTML = "";

      const singlebook = ` <div class="set-row" id="book-view">
        <img src="../imgs/${book.image}" alt="Book Cover" id="currentImageName" />

        <div class="book-content">
          <h2 id="title">${book.title}</h2>

          <p class="description" id="description">
           ${book.description}
          </p>
          <p class="price" id="price">
            Price: <span class="current-price">${book.price}</span>
          </p>

          <ul class="book-details">
            <li id="author"><strong>Author:</strong> ${book.author}</li>
          </ul>

          <ul class="book-details">
            <li id="genre"><strong>genre:</strong> ${book.genre}</li>
          </ul>



          <div class="actions">
           <button type="submit" style="border: none;" onClick="window.location.href='UpdateBooks.html?id=${book.id}'">  <i class="bx bxs-edit update-icon"></i></button>
             <button onClick="deleteBook(${book.id})" style="border: none;" <i class="bx bxs-trash delete-icon"></i></button>
          </div>
        </div>
      </div>`;

      viewBook.innerHTML += singlebook;
    })
    .catch((error) => console.error("Error fetching book data:", error));
}
