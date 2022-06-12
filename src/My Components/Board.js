import React from "react";
import Square from "./Square";

const Board = ({state, handleClick, winningSquares}) => {

  const renderCell = (position) => {
    return <Square position = {position} value = {state[position]} onClick = {handleClick} winningSquares = {winningSquares}/>
  }

  return (
    <div className="board">
      <div className="board-row">
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </div>
      <div className="board-row">
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </div>
      <div className="board-row">
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
    </div>
  );
};

export default Board;
