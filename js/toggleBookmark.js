function toggleBookmark(bookId) {
  // Find the book in the `allBooks` array
  const book = allBooks.find((b) => b.id === bookId);

  if (book) {
    // Toggle the status
    book.status = book.status === "read" ? "unread" : "read";

    // Update the JSON data on the server
    fetch(`http://localhost:3000/books/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to update bookmark status");
        return response.json();
      })
      .then((updatedBook) => {
        // Update the icon on the page based on the new status
        displayBooks(allBooks); // Refresh book list to show updated status
        alert(`Book status updated to "${updatedBook.status}"`);
      })
      .catch((error) =>
        console.error("Error updating bookmark status:", error)
      );
  }
}
