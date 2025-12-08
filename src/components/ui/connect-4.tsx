'use client'
import { useState } from 'react'
import StartButton from '@/components/ui/buttons/start-button'
import {
	checkWinnerOrDraw,
	getLowestEmptyRow,
} from '@/lib/utils/connect4-utils'

export default function Connect4() {
	const [board, setBoard] = useState(
		Array(6)
			.fill(null)
			.map(() => Array(7).fill(null)),
	)
	const [isPlayer1Turn, setIsPlayer1Turn] = useState(true)
	const [winner, setWinner] = useState<string | null>(null)

	const handleReset = () => {
		setBoard(
			Array(6)
				.fill(null)
				.map(() => Array(7).fill(null)),
		)
		setIsPlayer1Turn(true)
		setWinner(null)
	}

	const handleCellClick = (_rowIndex: number, cellIndex: number) => {
		if (winner) return
		const lowestEmptyRow = getLowestEmptyRow({ board, column: cellIndex })
		const newBoard = [...board]
		newBoard[lowestEmptyRow][cellIndex] = isPlayer1Turn ? 'X' : 'O'
		setBoard(newBoard)
		setIsPlayer1Turn(!isPlayer1Turn)
		const playerWinner = checkWinnerOrDraw(board)
		if (playerWinner) setWinner(playerWinner)
	}

	return (
		<div className="flex flex-col *:justify-center">
			<h1 className="mt-12 text-center text-4xl">Connect Four</h1>
			<StartButton resetGame={handleReset} />
			<div>
				{board.map((row, rowIndex) => (
					<div className="flex" key={rowIndex}>
						{row.map((cell, cellIndex) => (
							<button
								className="h-12 w-12 border border-gray-500"
								key={cellIndex}
								onClick={() =>
									handleCellClick(rowIndex, cellIndex)
								}
								type="button"
							>
								{cell}
							</button>
						))}
					</div>
				))}
			</div>
			{winner && (
				<h1 className="mt-6 text-center text-2xl">{winner} Wins!</h1>
			)}
		</div>
	)
}
