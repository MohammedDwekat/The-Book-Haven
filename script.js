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
