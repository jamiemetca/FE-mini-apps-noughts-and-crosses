import React from "react";
import "./GameBoard.css";

function GameBoard(props) {
  return (
    <div className="grid">
      {props.gridArray.map((cell, index) => {
        let boxInput;
        if (props.gridArray[index]) {
          boxInput = props.gridArray[index];
        }
        return (
          <button
            key={index}
            value={index}
            className="cell"
            onClick={props.fillBox}
          >
            {boxInput}
          </button>
        );
      })}
    </div>
  );
}

export default GameBoard;
