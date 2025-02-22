'use client'
import React, { useState} from 'react';

export default function Connect4() {

    const [board, setBoard] = useState(Array(6).fill(null).map(() => Array(7).fill(null)));
    const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
    // const [winner, setWinner] = useState<string | null>(null);

    const handleCellClick = (rowIndex: number, cellIndex: number) => {
        // if (winner || board[rowIndex][cellIndex]) return;

        const newBoard = [...board];
        newBoard[rowIndex][cellIndex] = isPlayer1Turn ? 'X' : 'O';
        setBoard(newBoard);
        setIsPlayer1Turn(!isPlayer1Turn);
    }

    return (
        <div className='flex justify-center'>
            <div className='mt-24'>
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
        </div>
    );
}
