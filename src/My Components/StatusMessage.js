import React from "react";

const StatusMessage = ({ current, winner }) => {
  const noMovesLeft = current.state.every((element) => element !== "");

  return (
    <>
      <div className="alert alert-success" role="alert" style = { {
        width: '10%',
        margin: '2em auto',
        textAlign: 'center',
        fontSize: '21px',
      } }>
        <h4>
          {winner && `Winner is ${winner}`}
          {!winner && !noMovesLeft && `Next is ${current.isXNext ? "X" : "O"}`}
          {!winner && noMovesLeft && `X and O Tied`}
        </h4>
      </div>
    </>
  );
};

export default StatusMessage;
