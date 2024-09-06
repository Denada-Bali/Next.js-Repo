/**
 * therrasim librarin e react dhe useState per menaxhimin e gjendjes
 * React router- per navigimin midis nderfaqeve. Router- perfshin aplikacionin, Route- specifikimi i path, Link lidhjet midis faqeve
 */

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';

const App = () => {
  //Krijoj listen (books) dhe setBooks vendos te dhenat e listes 
  const [books, setBooks] = useState([
    { id: 1, title: 'Mindset', author: 'Carol Dweck' },
    { id: 2, title: 'Ti je ajo çfarë vesh', author: 'Jennifer Baumgartner'},
    { id: 3, title: '48 laws of power', author: 'Robert Greene'}
  ]);

  // shtoj nje liber ne liste (tre pikat mbajne librat ekzistuese something like memory)
  const addBook = (book) => {
    setBooks([...books, book]);
  };

  // update librin duke mare id e librit me pak fjal lidhet me id e librit 
  const editBook = (updatedBook) => {
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));
  };

  // delete me id librin dhe shfaq nje alert te perdoruesi. 
  const deleteBook = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  return (
    <Router>
      <div>
        <h1>Welcome to Book Management App</h1>

        <nav>
          <Link to="/">Home</Link> | <Link to="/add-book">Add Book</Link>
        </nav>

        <Routes>
          <Route path="/"  element={<BookList books={books} deleteBook={deleteBook} />} />

          <Route path="/add-book" element={<AddBook addBook={addBook} />} />
          <Route path="/edit-book/:id" element={<EditBook books={books} editBook={editBook} />} />

        </Routes>
      </div> 
    </Router>

  );
};

export default App;


