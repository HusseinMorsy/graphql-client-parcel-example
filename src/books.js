import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const BOOKS_QUERY = gql`
  query {
    books {
      title
      author
    }
  }
`;

function BookList({ books }) {
  return (
    <div>
      <h2>My favorites books</h2>
      <ul>{books.map(book => <Book book={book} />)}</ul>
    </div>
  );
}

const Book = ({ book }) => (
  <li>
    {book.title} from {book.author}
  </li>
);

class Books extends React.Component {
  render() {
    return (
      <Query query={BOOKS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error</p>;
          return <BookList books={data.books} />;
        }}
      </Query>
    );
  }
}

export default Books;
