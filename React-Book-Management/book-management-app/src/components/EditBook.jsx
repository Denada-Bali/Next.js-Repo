/* useState esht hook, perdoret per te menaxhuar gjendjen e komponenit (titullin/autorin)
useEffect esht hook, e perdorim per te kryer efekte ansore ne komponent si marja e te dhenave dhe perdidsimi i DOM
useParams esht hook, mer parametrat nga url ose me qart rikthen nje parameter DINAMIK te url ku useri esht aktualisht - ne rastim tim id e librit

*/

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBook = ({ books, editBook }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  {/** useEffect thirret kur ndryshojn te dhenat e librit. Funksioni find gjen librin qe ka id e mare nga url dhe e konvertoj ne numer ..   */}
  useEffect(() => {
    const bookToEdit = books.find((book) => book.id === parseInt(id));
    if (bookToEdit) {
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
    }
  }, [id, books]);

  const handleSubmit = (e) => {
    e.preventDefault();
    {/** Krijoj objektin me id dhe te dhenat e librit */}
    const updatedBook = { id: parseInt(id), title, author };
    editBook(updatedBook);  // thrass editBook function per te edituar
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
