import React from "react";
import { useState } from "react";
import Board from "./My Components/Board";
import CalculateWinner from "./My Components/Helper";
import "./Styles/root.scss";

function App() {

  const [state, setState] = useState(Array(9).fill(''));
  const [isXNext, setXNext] = useState(false);

  const winner = CalculateWinner(state);
  console.log(winner);

  const message = (winner ? `${winner} is the winner` : `${isXNext ? 'X' : 'O'} is Next`);

  const updateCell = (position) => {
    
    if (state[position] !== '' || winner) return; // if value at that position already exists
    console.log(state);

    state[position] = isXNext ? 'X' : 'O';
    setState(() => state);

    setXNext((prev) => !prev);
  };

  return (
    <>
      <h1 className="text-center my-4">Tic Tac Toe</h1>
      <h3 className="text-center my-5"> {message} </h3>
      <div className="app">
        <Board state = {state} handleClick = {updateCell}/>
      </div>
    </>
  );
}

export default App;
