export function checkWinner(board, boardSize) {
    // check for all rows for same value
    for (let i=0;i<boardSize;i++) {
        const symbol = board[i][0];
        if (symbol) {
            let winner = true;
            for (let j=0;j<boardSize;j++) {
                if (symbol !== board[i][j]) {
                    winner = false;
                    break;
                }
            }
            if (winner) {
                return symbol;
            }
        }   
    }

    // check for all columns for same value
    for (let i=0;i<boardSize;i++) {
        const symbol = board[0][i];
        if (symbol) {
            let winner = true;
            for (let j=0;j<boardSize;j++) {
                if (symbol !== board[j][i]) {
                    winner = false;
                    break;
                }
            }
            if (winner) {
                return symbol;
            }
        }
    }

    // check diagnoal for same value
    let winner = true;
    let symbol = board[0][0];
    if (symbol) {
        for (let i=0;i<boardSize;i++) {
            if (symbol !== board[i][i]) {
                winner = false;
                break;
            }
        }
        if (winner) {
            return symbol;
        }
    }

    // check anti-diagnoal for same value
    winner = true;
    symbol = board[0][boardSize-1];
    if (symbol) {
        for (let i=boardSize-1;i>=0;i--) {
            if (symbol !== board[boardSize-i-1][i]) {
                winner = false;
                break;
            }
        }
        if (winner) {
            return symbol;
        }
    }

    return null;
}

export const resetGame = (boardSize=3) => {
    return Array.from({length: boardSize}, (_, index) => {
        return new Array(boardSize).fill(null);
    });
};

