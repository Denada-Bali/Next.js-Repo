import React from 'react';
import { Link } from 'react-router-dom';

// perdor dy parametra ne kete komponent
const BookList = ({ books, deleteBook }) => {
  return (
    <div>
      <h2>Book List</h2>

      <ul>
        {/*map e perdor per te krijuar nje element liste per çdo book*/}
        {books.map((book) => (
          <li key={book.id}>  {/* books indentifikohen nga id */}
            <span>{book.title} by {book.author}</span>  {/* e shfaq ktu titullin dhe emrin e autorit */}
            <div className="buttons">
              <Link to={`/edit-book/${book.id}`} className="link-button">Edit</Link> {/* buttons/links per tek forma edit */}
              <button onClick={() => deleteBook(book.id)}>Delete</button> {/**therras funksionin deleteBook per te fshi librin me id */}
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default BookList;
