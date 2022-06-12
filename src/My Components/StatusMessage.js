import React from "react";

const StatusMessage = ({ current, winner }) => {
  const noMovesLeft = current.state.every((element) => element !== "");
  const X = 'X';
  const O = 'O';

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
          {winner && `Winner is ${winner}`}
          {!winner &&
            !noMovesLeft &&
            `Next is ${current.isXNext ? 'X' : 'O'}`}
          {!winner && noMovesLeft && `X and O Tied`}
        </h4>
      </div>
    </>
  );
};

export default StatusMessage;
