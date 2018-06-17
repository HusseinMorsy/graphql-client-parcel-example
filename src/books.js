import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const BOOKS_QUERY = gql`
  query {
    books {
      title
      author
      year
    }
  }
`;

function BooksContainer() {
  return (
    <Query query={BOOKS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error</p>;
        return <Books books={data.books} />;
      }}
    </Query>
  );
}

function Books({ books }) {
  return (
    <div>
      <h2>My favorites books</h2>
      <ul>{books.map(book => <Book book={book} />)}</ul>
    </div>
  );
}

function Book({ book }) {
  return (
    <li>
      {book.title} from {book.author} ({book.year})
    </li>
  );
}

export default BooksContainer;
