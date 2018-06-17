import React from "react";
import ReactDom from "react-dom";
import Hello from "./src/hello";
import Books from "./src/books";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1> Bismillah </h1>
        <Hello name="Esma" />
        <Books />
      </React.Fragment>
    );
  }
}

const rootNode = document.getElementById("app");
ReactDom.render(<App />, rootNode);
