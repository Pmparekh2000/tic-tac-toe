import React from 'react'

const Board = ({handleClick, boardSize=3, board=[[]]}) => {
  return (
    <div className='board' style={{gridTemplateColumns: `repeat(${boardSize}, 50px)`}}>
        {
            board?.map((row, rowIndex) => {
                return row?.map((cell, colIndex) => {
                    return (
                        <div
                            key={colIndex}
                            onClick={() => handleClick(rowIndex, colIndex)}
                            className={`cell ${cell ? 'selected' : ''}`}
                        >
                            {cell}
                        </div>
                    );
                })
            })
        }
    </div>
  )
}

export default Board