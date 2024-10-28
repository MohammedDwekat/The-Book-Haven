// view books in index page

fetch("http://localhost:3000/books")
  .then((response) => {
    if (response.ok) return response.json();
  })
  .then((data) => {
    const booklist = document.getElementById("book-list");
    if (booklist) {
      data.forEach((book) => {
        const bookHTML = `
        
        <div class="product-card">
        <input type="hidden" id="${book.id}" />
          <img
            src="../imgs/${book.image}"
            alt="${book.description}"
          />
          <div class="book-details">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p class="price">${book.price}</p>
            <p class="description">
              ${book.description}
            </p>
          </div>
          <div class="card-footer">
            <button class="read-more-btn">Read More</button>
            <div class="actions">
             <button type="submit" onClick="window.location.href='UpdateBooks.html?id=${book.id}'">  <i class="bx bxs-edit update-icon"></i></button>
             <i class="bx bxs-trash delete-icon"></i>
            </div>
          </div>
        </div>

        
        `;
        booklist.innerHTML += bookHTML;
      });
    }
  })
  .catch((error) => {
    console.error("Problem with the fetch data:", error);
  });
