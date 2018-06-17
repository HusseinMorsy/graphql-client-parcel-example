import React from "react";

class Books extends React.Component {
  render() {
    const books = [
      { title: "Rails", author: "Hussein" },
      { title: "Dreamweaver", author: "Hussein" }
    ];
    return (
      <div>
        <h3>List of Books</h3>
        <ul>
          {books.map((book, i) => (
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
