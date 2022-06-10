import React from "react";
import Square from "./Square";
import { useState } from "react";

const Board = () => {

  const [state, setState] = useState(Array(9).fill(''));
  const [isXNext, setXNext] = useState(false);
  console.log(state); 

  const updateCell = (position) => {
    if (state[position] !== '') return;   // if value at that position already exists

    setState((prev) => {
      return prev.map((square, pos) => {

        if (pos === position) {
          return (isXNext ? 'X' : 'O');
        }
        else return square;

      });
    });

    setXNext((prev) => !prev);
  }

  return (
    <div className="board">
      <div className="board-row">
        <Square onClick = {() => { updateCell(0) }} value = {state[0]}/>
        <Square onClick = {() => { updateCell(1) }} value = {state[1]} />
        <Square onClick = {() => { updateCell(2) }} value = {state[2]} />
      </div>
      <div className="board-row">
        <Square onClick = {() => { updateCell(3) }} value = {state[3]} />
        <Square onClick = {() => { updateCell(4) }} value = {state[4]} />
        <Square onClick = {() => { updateCell(5) }} value = {state[5]} />
      </div>
      <div className="board-row">
        <Square onClick = {() => { updateCell(6) }} value = {state[6]} />
        <Square onClick = {() => { updateCell(7) }} value = {state[7]} />
        <Square onClick = {() => { updateCell(8) }} value = {state[8]} />
      </div>
    </div>
  );
};

export default Board;
