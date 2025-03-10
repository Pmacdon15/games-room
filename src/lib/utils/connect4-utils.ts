export const checkRows = (board: (string | null)[][]): string | undefined => {
    console.log("running checkRows");
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
            console.log("checking row", i, j);
            console.log(board[i][j], board[i][j + 1], board[i][j + 2], board[i][j + 3]);
            if (board[i][j] === board[i][j + 1] && board[i][j] === board[i][j + 2] && board[i][j] === board[i][j + 3] && board[i][j] !== null) {
                console.log("returning winner");
                return board[i][j] || undefined;
            }
        }
    }
};

export const checkColumns = (board: (string | null)[][]): string | undefined => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 7; j++) {
            if (board[i][j] === board[i + 1][j] && board[i][j] === board[i + 2][j] && board[i][j] === board[i + 3][j] && board[i][j] !== null) {
                return board[i][j] || undefined;
            }
        }
    }
};

export const checkDiagonalsTopLeft = (board: (string | null)[][]): string | undefined => {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] === board[i + 1][j + 1] && board[i][j] === board[i + 2][j + 2] && board[i][j] === board[i + 3][j + 3] && board[i][j] !== null) {
                return board[i][j] || undefined;
            }
        }
    }
};

export const checkDiagonalsTopRight = (board: (string | null)[][]): string | undefined => {
    for (let i = 0; i < 3; i++) {
        for (let j = 6; j > 2; j--) {
            if (board[i][j] === board[i + 1][j - 1] && board[i][j] === board[i + 2][j - 2] && board[i][j] === board[i + 3][j - 3] && board[i][j] !== null) {
                return board[i][j] || undefined;
            }
        }
    }
}

export const checkWinnerOrDraw = (board: (string | null)[][]): string | null => {
    console.log("running checkWinnerOrDraw");
    const winnerRow = checkRows(board);
    const winnerColumn = checkColumns(board);
    const winnerDiagonalsTopLeft = checkDiagonalsTopLeft(board);
    const winnerDiagonalTopRight = checkDiagonalsTopRight(board);

    if (board.flat().every(cell => cell !== null)) return null;

    const winner = winnerRow || winnerColumn || winnerDiagonalsTopLeft || winnerDiagonalTopRight;
    return winner || null;
}

export const getLowestEmptyRow = ({ board, column }: { board: (string | null)[][], column: number }) => {
    for (let i = 5; i >= 0; i--) {
        if (board[i][column] === null) return i;
    }
    return -1;
};
