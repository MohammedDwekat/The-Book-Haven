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
          <img id="image-${book.id}"
            src="../imgs/${book.image}"
            alt="${book.description}"
          />
          <div class="book-details">
            <h3 id="title-${book.id}">${book.title}</h3>
            <p id="author-${book.id}">${book.author}</p>
            <p id="price-${book.id}" class="price">${book.price}</p>
            <p id="description-${book.id}" class="description">
              ${book.description}
            </p>

          </div>
           
          <div class="card-footer">
           <button class="read-more-btn" onclick="readStatus(${book.id})"><p> <span class="status" id="status">${book.status}</span></p></button>
            <button class="read-more-btn" onClick="window.location.href='singleBook.html?id=${book.id}'">Read More</button>
            <div class="actions">
             <button type="submit" style="border: none;" onClick="window.location.href='UpdateBooks.html?id=${book.id}'">  <i class="bx bxs-edit update-icon"></i></button>
             <button onClick="deleteBook(${book.id})" style="border: none;" <i class="bx bxs-trash delete-icon"></i></button>
         
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
