const deleteBook = (bookId) => {
  fetch(`http://localhost:3000/books/${bookId}`, {
    method: "delete",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("failed to delete the book");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
