import React from "react";
import { render } from "react-dom";
import Hello from "./src/hello";
import Books from "./src/books";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1> Bismillah </h1>
        <Hello name="Esma" />
        <Books />
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
