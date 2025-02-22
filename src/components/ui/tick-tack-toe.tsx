'use client'
import React, { useState, useEffect, useCallback } from 'react';
import StartButton from '@/components/ui/buttons/start-button';

export default function TickTackToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
    const [winner, setWinner] = useState<string | null>(null);

    const checkWinner = useCallback(() => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        if (!board.includes(null)) {
            return 'draw';
        }

        return null;
    }, [board]);

    useEffect(() => {
        function checkGameOver() {
            const winner = checkWinner();
            if (winner) {
                setWinner(winner);
            }
        }
        checkGameOver();
    }, [board, checkWinner]);

    const handleClick = (index: number) => {
        if (winner || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = isPlayer1Turn ? 'X' : 'O';
        setBoard(newBoard);
        setIsPlayer1Turn(!isPlayer1Turn);
    };

    const startGame = () => {
        setBoard(Array(9).fill(null));
        setIsPlayer1Turn(true);
        setWinner(null);
    };

    return (
        <div className='font-["Protest_Strike"]'>
            <h1 className="mt-12 text-blue-600 text-4xl text-center">Tick Tack Toe</h1>
         
            <StartButton resetGame={startGame} />
            <div className="justify-items-center items-center gap-2.5 grid grid-cols-3 bg-white mx-auto p-5 rounded-lg">
                {board.map((value, index) => (
                    <button
                        key={index}
                        className="flex justify-center items-center bg-gradient-to-r from-[#6991ba] to-[#1a8ab9] hover:shadow-md m-0 p-5 rounded w-[60px] h-[60px] text-white text-2xl cursor-pointer"
                        onClick={() => handleClick(index)}
                    >
                        {value}
                    </button>
                ))}
            </div>
            {winner &&
                <div className="mt-5 text-xl text-center">
                    {winner === 'draw' ? 'It\'s a draw!' : `${winner} wins!`}
                </div>
            }
        </div>
    );
}

