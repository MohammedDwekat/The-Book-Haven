document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".add-to-list-btn");

  if (addButton) {
    addButton.addEventListener("click", function () {
      const book = {
        title: document.querySelector(".book-content h2").innerText,
        description: document.querySelector(".book-content .description")
          .innerText,
        price: document.querySelector(".current-price").innerText,
        author: document.querySelector(".book-details li strong").innerText,
        imageSrc: document
          .querySelector("#book-details img")
          .getAttribute("src"),
      };

      let savedBooks = JSON.parse(localStorage.getItem("myBooksList")) || [];
      savedBooks.push(book);
      localStorage.setItem("myBooksList", JSON.stringify(savedBooks));
      alert("Book added to your list!");
    });
  } else {
    console.error("Add to list button not found!");
  }
});

function renderSavedBooks() {
  console.log("Rendering saved books...");
  const bookContainer = document.querySelector(".product-container");
  let savedBooks = JSON.parse(localStorage.getItem("myBooksList")) || [];
  console.log("Retrieved books:", savedBooks);

  bookContainer.innerHTML = "";

  savedBooks.forEach(function (book, index) {
    const bookCard = `
      <div class="product-card" data-id="${index}">
          <i class="bx bxs-bookmark status-icon"></i>
        <img src="${book.imageSrc}" alt="${book.title}" />
        <div class="book-details">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <p class="price">${book.price}</p>
          <p class="description">${book.description}</p>
        </div>
        <div class="card-footer">
          <a href="pages/SingleBook.html">
            <button class="read-more-btn">Read More</button>
          </a>
          <div class="actions">
            <a href="pages/UpdateBooks.html">
              <i class="bx bxs-edit update-icon"></i>
            </a>
            <i class="bx bxs-trash delete-icon"></i>
          </div>
        </div>
      </div>
    `;

    bookContainer.innerHTML += bookCard;
  });

  console.log("Books rendered.");
}

document.addEventListener("DOMContentLoaded", renderSavedBooks);
