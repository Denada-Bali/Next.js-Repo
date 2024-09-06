import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: Math.random(), title, author };
    addBook(newBook);  // thrras addBook function
    navigate('/');
  };

  return (
    <div>
      <h2>Add New Book</h2>
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
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
