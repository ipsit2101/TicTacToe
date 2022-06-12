import React from 'react'

const History = ({history, moveTo}) => {
  const style = {
    margin: '15px',
    padding: '2px',
    fontSize: '17px',
    listStyle: 'none'
  };

  return (
    <div style={style}>
      <ul style = {style}>
        {
          history.map((_, move) => {
            return (
              <li><button type = 'button' className='btn btn-group-sm' onClick = {() => moveTo(move)}>
                { move === 0 ? 'Go to game start' : `Go to move #${move}` }
              </button></li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default History;
