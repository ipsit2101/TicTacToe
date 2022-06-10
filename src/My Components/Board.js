import React from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {

  const [state, setState] = useState(Array(9).fill(null));
  console.log(state); 

  return (
    <div className="board">
      <div className="board-row">
        <Square value={state} />
        <Square value={state} />
        <Square value={state} />
      </div>
      <div className="board-row">
        <Square value={state} />
        <Square value={state} />
        <Square value={state} />
      </div>
      <div className="board-row">
        <Square value={state} />
        <Square value={state} />
        <Square value={state} />
      </div>
    </div>
  );
};

export default Board;
