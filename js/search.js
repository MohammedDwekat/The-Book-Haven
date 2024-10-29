let allBooks = [];

// Fetch all books and store them in `allBooks`
function fetchBooks() {
  fetch("http://localhost:3000/books") // Replace with your actual API endpoint
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch books");
      return response.json();
    })
    .then((data) => {
      allBooks = data; // Store all books in a global array
      displayBooks(allBooks); // Initially display all books
    })
    .catch((error) => console.error("Error fetching books:", error));
}

// Function to display books in the container
function displayBooks(books) {
  const bookContainer = document.getElementById("book-list");
  bookContainer.innerHTML = ""; // Clear current content

  books.forEach((book) => {
    const bookCard = `
      <div class="product-card" data-id="${book.id}">
        <i class="bx bxs-bookmark status-icon"></i>
        <img src="${book.imageSrc}" alt="${book.title}" />
        <div class="book-details">
          <h3>${book.title}</h3>
          <p>${book.author}</p>
          <p class="price">${book.price}</p>
          <p class="description">${book.description}</p>
        </div>
        <div class="card-footer">
          <a href="SingleBook.html?id=${book.id}">
            <button class="read-more-btn">Read More</button>
          </a>
          <div class="actions">
            <a href="pages/UpdateBooks.html?id=${book.id}">
              <i class="bx bxs-edit update-icon"></i>
            </a>
            <button onClick="deleteBook(${book.id})" style="border: none;">
              <i class="bx bxs-trash delete-icon"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    bookContainer.innerHTML += bookCard;
  });
}

// Function to filter books based on search input
function searchBooks() {
  const searchQuery = document.querySelector(".search").value.toLowerCase();

  // Filter books by title or author
  const filteredBooks = allBooks.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery)
    );
  });

  // Display the filtered books
  displayBooks(filteredBooks);
}

// Call fetchBooks when the page loads to initially fetch and display all books
document.addEventListener("DOMContentLoaded", fetchBooks);

// Attach the search function to the search box input event
document.querySelector(".search").addEventListener("input", searchBooks);
