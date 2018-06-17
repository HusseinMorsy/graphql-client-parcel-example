import React from "react";
import { render } from "react-dom";
import Hello from "./src/hello";
import Books from "./src/books";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({ uri: "http://localhost:4000/" });

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Books />
      </ApolloProvider>
    );
  }
}

render(<App />, document.getElementById("app"));
