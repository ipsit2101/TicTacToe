import React from "react";
import { useState } from "react";
import Board from "./My Components/Board";
import History from "./My Components/History";
import CalculateWinner from "./My Components/Helper";
import "./Styles/root.scss";

function App() {

  const [history, setHistory] = useState( [{state: Array(9).fill(''), isXNext: false}] );
  //const [isXNext, setXNext] = useState(false);

  const [currentMove, setCurrentMove] = useState(0);  // used to store the index of history(array of Objects)

  let current = history[currentMove]; // to get current state of the game

  const winner = CalculateWinner(current.state);
  console.log(winner);

  const message = (winner ? `${winner} is the winner` : `${current.isXNext ? 'X' : 'O'} is Next`);

  const updateCell = (position) => {
    
    if (current.state[position] !== '' || winner) return; // if value at that position already exists
    console.log(current.state);       
    
    setHistory((prev) => {
      const last = prev[prev.length-1];
      
      const newBoard = last.state.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return square;
      });

      return prev.concat({state: newBoard, isXNext: !last.isXNext});
    });

    setCurrentMove(prev => prev+1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  }

  return (
    <>
      <h1 className="text-center my-4">Tic Tac Toe</h1>
      <h3 className="text-center my-5"> {message} </h3>
      <div className="app">
        <Board state = {current.state} handleClick = {updateCell} />
        <History history = {history} moveTo = {moveTo}/>
      </div>
    </>
  );
}

export default App;
