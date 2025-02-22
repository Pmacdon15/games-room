'use client'
import React, { useEffect, useState, useCallback } from 'react';
import StartButton from '@/components/ui/buttons/start-button';
export default function Connect4() {

    const [board, setBoard] = useState(Array(6).fill(null).map(() => Array(7).fill(null)));
    const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
    const [winner, setWinner] = useState<string | null>(null);

    const handleReset = () => {
        setBoard(Array(6).fill(null).map(() => Array(7).fill(null)));
        setIsPlayer1Turn(true);
        setWinner(null);
    };

    const handleCellClick = (rowIndex: number, cellIndex: number) => {
        if (winner || board[rowIndex][cellIndex]) return;

        const newBoard = [...board];
        newBoard[rowIndex][cellIndex] = isPlayer1Turn ? 'X' : 'O';
        setBoard(newBoard);
        setIsPlayer1Turn(!isPlayer1Turn);
        checkWinnerOrDraw();
    };

    const checkWinnerOrDraw = useCallback(() => {
        console.log("running checkWinnerOrDraw");
        const winnerRow = checkRows();
        const winnerColumn = checkColumns();

        if (board.flat().every(cell => cell !== null)) return 'Nobody';

        if (winnerRow) return winnerRow;
        if (winnerColumn) return winnerColumn;

        return null;
    }, [board]);

    function checkRows() {
        console.log("running checkRows");
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 4; j++) {
                console.log("checking row", i, j);
                console.log(board[i][j], board[i][j + 1], board[i][j + 2], board[i][j + 3]);
                if (board[i][j] === board[i][j + 1] && board[i][j] === board[i][j + 2] && board[i][j] === board[i][j + 3] && board[i][j] !== null && board[i][j] !== 0) {
                    console.log("returning winner");
                    return board[i][j];
                }
            }
        }
    }

    function checkColumns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 7; j++) {
                if (board[i][j] === board[i + 1][j] && board[i][j] === board[i + 2][j] && board[i][j] === board[i + 3][j] && board[i][j] !== null && board[i][j] !== 0) {
                    return board[i][j];
                }
            }
        }
    }

    useEffect(() => {
        function checkGameOver() {
            const winner = checkWinnerOrDraw();
            if (winner) {
                console.log("setting winner");
                setWinner(winner);
            }
        }
        checkGameOver();
    }, [board, checkWinnerOrDraw]);

    return (
        <div className='flex flex-col *:justify-center'>
            <h1 className='mt-12 text-4xl text-center'>Connect Four</h1>
            <StartButton resetGame={handleReset} />
            <div>
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex">
                        {row.map((cell, cellIndex) => (
                            <button
                                key={cellIndex}
                                className="border border-gray-500 w-12 h-12"
                                onClick={() => handleCellClick(rowIndex, cellIndex)}
                            >
                                {cell}
                            </button>
                        ))}
                    </div>
                ))}
            </div>
            {winner && <h1 className='mt-6 text-2xl text-center'>{winner} Wins!</h1>}
        </div>
    );
}
