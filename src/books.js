import React from "react";

const BOOKS = [
  { title: "Rails", author: "Hussein" },
  { title: "Dreamweaver", author: "Hussein" }
];

class Books extends React.Component {
  render() {
    return (
      <div>
        <h3>List of Books</h3>
        <ul>
          {BOOKS.map((book, i) => (
            <li key={i}>
              {i + 1}. {book.title} by {book.author}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Books;
