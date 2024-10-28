const id = new URLSearchParams(window.location.search).get("id");

if (id) {
  fetch(`http://localhost:3000/books/${id}`)
    .then((response) => {
      if (!response.ok) throw new Error("Book not found");
      return response.json();
    })
    .then((book) => {
      document.getElementById("title").value = book.title;
      document.getElementById("author").value = book.author;
      document.getElementById("description").value = book.description;
      document.getElementById("price").value = book.price;
      document.getElementById("currentImageName").innerText = book.image;
      document.getElementById("genre").value = book.genre;
    })
    .catch((error) => console.error("Error fetching book data:", error));
}
