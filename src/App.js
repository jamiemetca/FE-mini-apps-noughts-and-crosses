import React, { Component } from "react";
import GameBoard from "./components/GameBoard.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">Noughts and Crosses</h1>
        <GameBoard />
      </div>
    );
  }
}

export default App;
