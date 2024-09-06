/*
useState eshte hook dhe perdoret per te menaxhuar gjendjen brenda komponentit.
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//komponent qe kerkon vetem nje parameter
const AddBook = ({ addBook }) => {
  {/**get/set te dhenat e librit */}
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: Math.random(), title, author }; //ktu krijoj objektin me nje id te rastesishme  Math.random(), titullin dhe autorin 
    addBook(newBook);  // thrras addBook function  qe kam ndertuar me lart - const AddBook = ({ addBook }) ndryshe mund te quhet funksioni prind
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
