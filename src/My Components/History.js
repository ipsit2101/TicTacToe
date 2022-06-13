import React from "react";

const History = ({ history, moveTo, currentMove }) => {
  const style = {
    margin: "38px",
    padding: "5px",
    fontSize: "15px",
    listStyle: "none",
  };

  return (
    <ul style = {style}>
      {history.map((_, move) => {
        return (
          <li>
            <button
              type = "button"
              style = { {
                fontWeight: move === currentMove ? "bold" : "normal",
                width: '150px',
                padding: '6px',
                margin: '5px',
              } }
              className="btn btn-outline-warning"
              onClick={() => moveTo(move)}
            >
              {move === 0 ? "Go to game start" : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
