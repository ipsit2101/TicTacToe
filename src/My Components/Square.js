import React from 'react'

const Square = ({position, value, onClick}) => {

  return (
    <>
      <button type = "button" className='square' onClick={() => {onClick(position)}}> {value} </button>
    </>
  );
}

export default Square;
