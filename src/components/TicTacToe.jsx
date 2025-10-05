import React, { useState } from 'react'
import Board from './Board';

const TicTacToe = ({boardSize=3}) => {
  const [board, setBoard] = useState(Array.from({length: boardSize}, (_, index) => {
    return new Array(boardSize).fill(null);
  }));
  const [turnX, setTurnX] = useState(true);

  const status = turnX ? "Player X turn" : "Player O turn";

  const handleClick = (rowIndex, colIndex) => {
    console.log("Called handle click", rowIndex, colIndex);

    if (board[rowIndex][colIndex]) {
        return;
    }
    // A1: Does not create a new reference and hence does not cause a re-render
    // setBoard((prevBoard) => {
    //     prevBoard[rowIndex][colIndex] = 'X';
    //     return prevBoard;
    // });
    // A2: Does not handle functions
    // const deepCopy = JSON.parse(JSON.stringify(board));
    // deepCopy[rowIndex][colIndex] = turnX ? 'X' : 'O';
    // setBoard(deepCopy);
    // A3: Best suited since also handles functions, undefined and complex objects. Check Gemini
    setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        const newRow = [...newBoard[rowIndex]];
        newRow[colIndex] = turnX ? 'X' : 'O';
        newBoard[rowIndex] = newRow;
        return newBoard;
    });

    setTurnX(!turnX);
  };
  
  return (
    <div className='container'>
        <div className="borard">
            <Board handleClick={handleClick} boardSize={boardSize} board={board}/>
        </div>
        <div className="status">{status}</div>
        <button className="reset-button">Reset Game</button>
    </div>
  )
}

export default TicTacToe;
