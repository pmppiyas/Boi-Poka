import React, { useEffect, useState } from 'react';
import Book from './Book';

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch('booksData.json')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-medium mb-6">Books '{books.length}' Pics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {books.map(book => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
}
