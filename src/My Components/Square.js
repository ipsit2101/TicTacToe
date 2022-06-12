import React from 'react'

const Square = ({position, value, onClick, winningSquares}) => {

  return (
    <>
      <button type = "button" className='square' onClick={() => {onClick(position)}} 
      style = { {
        fontWeight: (winningSquares.includes(position) ? 'bold' : 'normal'),
        color: (value === 'X' ? 'rgb(4, 185, 31)' : 'rgb(219, 136, 19)'),
      } }> {value} </button>
    </>
  );
}

export default Square;
