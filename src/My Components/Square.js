import React from 'react'

const Square = ({position, value, onClick, winningSquares}) => {

  return (
    <>
      <button type = "button" className='square' onClick={() => {onClick(position)}} 
      style = { {
        fontWeight: (winningSquares.includes(position) ? 'bold' : 'normal'),
      } }> {value} </button>
    </>
  );
}

export default Square;
