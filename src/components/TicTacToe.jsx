import React, { useEffect, useState } from 'react'
import Board from './Board';
import { checkWinner, resetGame } from '../utils/ticTacToeUtils';

const TicTacToe = ({boardSize=3}) => {
  const [board, setBoard] = useState(() => resetGame(boardSize));
  const [turnX, setTurnX] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [status, setStatus] = useState("Player O turn");
  const [movesPlayed, setMovesPlayed] = useState(0);

  useEffect(() => {
    const winner = checkWinner(board, boardSize);
    if (winner) {
        setStatus(winner === 'X' ? "Player X has won" : "Player O has won");
        setGameOver(true);
    } else {
        if (movesPlayed === boardSize*boardSize) {
            setStatus("Game drawn");
            setGameOver(true);
        } else {
            setStatus(turnX ? "Player O turn" : "Player X turn");
            setTurnX(!turnX);
        }
    }
  }, [board, movesPlayed]);

  const handleClick = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] || gameOver) {
        return;
    }
    setMovesPlayed((prevValue) => prevValue + 1);
    // Explicitly creating copies at each level of array for React to re-render
    setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        const newRow = [...newBoard[rowIndex]];
        newRow[colIndex] = turnX ? 'X' : 'O';
        newBoard[rowIndex] = newRow;
        return newBoard;
    });
  };
  
  return (
    <div className='container'>
        <div className="borard">
            <Board handleClick={handleClick} boardSize={boardSize} board={board}/>
        </div>
        <div className="status">{status}</div>
        <button className="reset-button" onClick={() => setBoard(resetGame(boardSize))}>Reset Game</button>
    </div>
  )
}

export default TicTacToe;
