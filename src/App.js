import React, { Component } from "react";
import GameBoard from "./components/GameBoard.jsx";

class App extends Component {
  state = {
    whosTurn: "X",
    gridArray: [null, null, null, null, null, null, null, null, null],
    playerXArray: [],
    playerOArray: [],
    winningCombinations: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ],
    winner: ''
  };
  render() {
    return (
      <div>
        <h1 className="heading">Nought and Crosses</h1>
        <GameBoard
          whosTurn={this.state.whosTurn}
          gridArray={this.state.gridArray}
          fillBox={this.fillBox}
        />
      </div>
    );
  }
checkWinner = () => {
  let newWinner;
  {winningCombinations, playerXArray, whosTurn} = this.state;
  
}

  fillBox = selectedCell => {
    // next - add the index of the array that was selected to the array of the player
    // create an array of winning sequences, loop over each of the winning arrays and check if the
    //  numbers are in the players array.

    const newPlayerXArray = [];
    const newPlayerOArray = [];
    const newGridArray = [...this.state.gridArray];
    let newTurn;

    if (!newGridArray[selectedCell.target.value]) {
      newGridArray[selectedCell.target.value] = this.state.whosTurn;
      this.state.whosTurn === "X" ? (newTurn = "O") : (newTurn = "X");
      this.state.whosTurn === "X"
        ? this.state.playerXArray.push(selectedCell.target.value)
        : this.state.playerOArray.push(selectedCell.target.value);
    } else {
      newTurn = this.state.whosTurn;
    }
    this.setState({
      gridArray: newGridArray,
      whosTurn: newTurn
    });
  };
}

export default App;
