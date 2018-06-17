import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  render() {
    return <div> Bismillah </div>;
  }
}

const rootNode = document.getElementById("app");
ReactDom.render(<App />, rootNode);
