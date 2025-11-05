import React from "react";
import { useParams, Link } from "react-router-dom";
import books from "../../data/books.json"; 

const Book = () => {
  const { id } = useParams();
  const book = books[id];

  if (!book) {
    return (
      <div className="book-not-found">
        <h2>Book not found</h2>
        <Link to="/books" className="home-link">
          ← Back to all books
        </Link>
      </div>
    );
  }

  return (
    <div className="book-details">
      <Link to="/books" className="back-link">
        ← Back to all books
      </Link>

      <div className="book-details-card">
        <img
          src={`${import.meta.env.BASE_URL}/images/${book.image}`}
          alt={book.title}
          className="book-details-image"
        />

        <div className="book-details-info">
          <h1 className="book-details-title">{book.title}</h1>
          <h2 className="book-details-author">by {book.author}</h2>
          <p>
            <strong>Publisher:</strong> {book.publisher}
          </p>
          <p>
            <strong>Year:</strong> {book.year}
          </p>
          <p>
            <strong>Age range:</strong> {book.age_range}
          </p>
          <p>
            <strong>Themes:</strong> {book.themes.join(", ")}
          </p>

          <h3>Summary</h3>
          <p>{book.summary}</p>

          <div className="book-links">
            <a href={book.read_aloud} target="_blank" rel="noreferrer">
              🎧 Read Aloud
            </a>
            {" | "}
            <a
              href={
                Array.isArray(book.availability)
                  ? book.availability[0]
                  : book.availability
              }
              target="_blank"
              rel="noreferrer"
            >
              📚 Find in Library
            </a>
          </div>
        </div>
      </div>

      {book.activities && (
        <div className="book-activities">
          <h2>Classroom Activities</h2>

          {book.activities.pre && (
            <div className="activity-section">
              <h3>Before Reading</h3>
              {book.activities.pre.discussion_questions && (
                <>
                  <h4>Discussion Questions:</h4>
                  <ul>
                    {book.activities.pre.discussion_questions.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </>
              )}
              {book.activities.pre.homework && (
                <p>
                  <strong>Homework:</strong> {book.activities.pre.homework}
                </p>
              )}
            </div>
          )}

          {book.activities.post && (
            <div className="activity-section">
              <h3>After Reading</h3>
              {book.activities.post.discussion_questions && (
                <>
                  <h4>Discussion Questions:</h4>
                  <ul>
                    {book.activities.post.discussion_questions.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </>
              )}
              {book.activities.post.creative && (
                <>
                  <h4>Creative Tasks:</h4>
                  <ul>
                    {book.activities.post.creative.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </>
              )}
              {book.activities.post.other && (
                <>
                  <h4>Other:</h4>
                  <ul>
                    {book.activities.post.other.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Book;
