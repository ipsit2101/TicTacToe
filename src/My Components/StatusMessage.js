import React from "react";

const StatusMessage = ({ current, winner }) => {
  const noMovesLeft = current.state.every(element => element !== "");

  const val = (current.isXNext ? 'X' : 'O');
  
  return (
    <>
      <div
        style={{
          width: "30%",
          margin: "2em auto",
          padding: "1px",
          textAlign: "center",
          fontSize: "21px",
          color: "white",
        }}
      >
        <h4>
          {winner && `Winner is `} {winner && <span style = { {color: (winner === 'X' ? 'rgb(4, 185, 31)' : 'rgb(219, 136, 19)'),} }>{winner}</span>}
          {!winner &&
            !noMovesLeft &&
            `Next is `}{!winner &&
              !noMovesLeft && <span style = { {color: (val === 'X' ? 'rgb(4, 185, 31)' : 'rgb(219, 136, 19)'),} }>{val}</span>}
          {!winner && noMovesLeft && `X and O tied`}
        </h4>
      </div>
    </>
  );
};

export default StatusMessage;
