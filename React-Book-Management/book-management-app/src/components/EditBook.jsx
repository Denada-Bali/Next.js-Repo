import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = ({ books, editBook }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const bookToEdit = books.find((book) => book.id === Number(id));
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
    }
  }, [id, books]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBook = { id: Number(id), title, author };
    editBook(updatedBook);  // thrass editBook function
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
          required
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditBook;
