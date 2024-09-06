import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books, deleteBook }) => {
  return (
    <div>
      <h2>Book List</h2>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span>{book.title} by {book.author}</span>  {/* e therras ktu titullin dhe emrin e autorit */}
            <div className="buttons">
              <Link to={`/edit-book/${book.id}`} className="link-button">Edit</Link>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default BookList;
