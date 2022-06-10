import React from "react";
import Board from "./My Components/Board";
import "./Styles/root.scss";

function App() {
  return (
    <>
      <h2>Tic Tac Toe</h2>
      <div className="app">
        <Board />
      </div>
    </>
  );
}

export default App;
