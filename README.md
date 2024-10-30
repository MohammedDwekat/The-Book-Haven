# The-Book-Haven

### Project 5: Book Library

**Description**  
The Book Haven is a catalog system that allows users to create and manage a personal library. Users can add new books with details, search for books, mark them as "Read" or "Unread," and keep track of their reading list.

## Features

1. **Add Books**  
   - Add books to the library by providing the title, author, and genre.

2. **Mark Books as Read/Unread**  
   - Easily mark books as "Read" or "Unread" to keep track of your progress.

3. **Search Functionality**  
   - Search for books by title or author to find entries quickly.

4. **Reading List**  
   - Add books to a reading list and view all books currently on your reading list.

5. **Data Storage**  
   - Books can be stored and retrieved from `localStorage` or a provided API for persistence across sessions.

## Installation and Usage

To run the project locally, you'll need to set up a JSON server.

### Prerequisites

- Install **json-server** globally if you haven't done so:
  
  ```bash
  npm install -g json-server

  json-server --watch js/data.json
