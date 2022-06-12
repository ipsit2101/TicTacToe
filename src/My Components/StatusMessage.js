import React from "react";

const StatusMessage = ({ current, winner }) => {
  const noMovesLeft = current.state.every((element) => element !== "");

  return (
    <>
      <div className="alert alert-success" role="alert" style = { {
        width: '20%',
        margin: '2em auto',
        textAlign: 'center',
      } }>
        <h3>
          {winner && `Winner is ${winner}`}
          {!winner && !noMovesLeft && `Next is ${current.isXNext ? "X" : "O"}`}
          {!winner && noMovesLeft && `X and O Tied`}
        </h3>
      </div>
    </>
  );
};

export default StatusMessage;
