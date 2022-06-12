import React from "react";

const StatusMessage = ({ current, winner }) => {

  const noMovesLeft = current.state.every((element) => element !== "");

  return (
    <h3 className="text text-center my-4">
      {winner && `Winner is ${winner}`}
      {!winner && !noMovesLeft && `Next is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && noMovesLeft && `X and O Tied`}
    </h3>
  );
};

export default StatusMessage;
