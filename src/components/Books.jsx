import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import booksData from "../../data/books.json";
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <main className="books-page">
      <h1>Books</h1>
      <div className="books-list">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img
              src={`${import.meta.env.BASE_URL}/images/${book.image}`}
              alt={book.title}
              className="book-image"
            />

            <div className="book-info">
              <Link to={`/books/${index}`} className="book-title">
                {book.title}
              </Link>
              <p className="book-author">by {book.author}</p>
              {book.themes && (
                <p className="book-themes">
                  <strong>Themes:</strong> {book.themes.join(", ")}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Books;
