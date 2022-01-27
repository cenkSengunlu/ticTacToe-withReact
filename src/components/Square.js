import React from 'react';

const Square = (props) => {
  return(
    <div className={`square ${props.winner ? 'winner' : ''}`} onClick={() => props.onClick()}>{props.val}</div>
  )
}

export default Square;