import React from "react";
import { useState } from "react";
import Board from "./My Components/Board";
import History from "./My Components/History";
import CalculateWinner from "./My Components/Helper";
import StatusMessage from "./My Components/StatusMessage";

import "./Styles/root.scss";

const NEW_GAME = [{state: Array(9).fill(''), isXNext: false}];

function App() {

  const [history, setHistory] = useState( NEW_GAME );

  const [currentMove, setCurrentMove] = useState(0);  // used to store the index of history(array of Objects)

  const current = history[currentMove]; // to get current state of the game

  const {winner, winningSquares} = CalculateWinner(current.state);  // Destructuring winner and winning Squares
  console.log(winner);

  //const message = (winner ? `${winner} is the winner` : `${current.isXNext ? 'X' : 'O'} is Next`);

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

  const startGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }

  return (
    <>
      <h1 className="text-center my-3">Tic Tac Toe</h1>
      <br/>
      <StatusMessage current = {current} winner = {winner}/> 
      <div className="app">
        <Board state = {current.state} handleClick = {updateCell} winningSquares = {winningSquares} />
        <br/>
        <button className="btn btn-outline-dark" onClick = {startGame} > Start Game </button>
        <History history = {history} moveTo = {moveTo}  currentMove = {currentMove} />
      </div>
    </>
  );
}

export default App;
