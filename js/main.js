let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navmenu");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = function () {
  let scrollButton = document.querySelector(".scroll-to-top");
  if (document.documentElement.scrollTop > 200) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
};

document.querySelectorAll(".status-icon").forEach(function (icon) {
  icon.addEventListener("click", function () {
    const productCard = this.closest(".product-card");
    const isReadable = productCard.getAttribute("data-readable") === "true";
    productCard.setAttribute("data-readable", !isReadable);
  });
});

fetch("http://localhost:3000/books")
  .then((response) => {
    if (response.ok) return response.json();
  })
  .then((data) => {
    const booklist = document.getElementById("book-list");
    const showMoreContainer = document.querySelector(".show-more-container");

    if (booklist) {
      // Only display the first 6 books
      const booksToDisplay = data.slice(0, 6);
      booksToDisplay.forEach((book) => {
        const bookHTML = `
        <div class="product-card">
          <input type="hidden" id="${book.id}" />
          <img src="../imgs/${book.image}" alt="${book.description}" />
          <div class="book-details">
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p class="price">${book.price}</p>
            <p class="description">${book.description}</p>
          </div>
          <div class="card-footer">
             <button class="read-more-btn" onclick="readStatus(${book.id})"><p> <span class="status" id="status">${book.status}</span></p></button>
            <button class="read-more-btn" onClick="window.location.href='SingleBook.html?id=${book.id}'">Read More</button>
            <div class="actions">
              <button type="submit" style="border: none;" onClick="window.location.href='UpdateBooks.html?id=${book.id}'">
                <i class="bx bxs-edit update-icon"></i>
              </button>
              <button onClick="deleteBook(${book.id})" style="border: none;">
                <i class="bx bxs-trash delete-icon"></i>
              </button>
            </div>
          </div>
        </div>
        `;
        booklist.innerHTML += bookHTML;
      });

      // Show or hide the "Show More" button based on the number of books
      if (data.length > 6) {
        showMoreContainer.style.display = "block";
      } else {
        showMoreContainer.style.display = "none";
      }
    }
  })
  .catch((error) => {
    console.error("Problem with the fetch data:", error);
  });
