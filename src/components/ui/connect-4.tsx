'use client'
import { useState, useEffect } from 'react'
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
	const [droppingPiece, setDroppingPiece] = useState<{
		row: number
		col: number
		player: string | null
	}>({ row: -1, col: -1, player: null })

	const handleReset = () => {
		setBoard(
			Array(6)
				.fill(null)
				.map(() => Array(7).fill(null)),
		)
		setIsPlayer1Turn(true)
		setWinner(null)
		setDroppingPiece({ row: -1, col: -1, player: null })
	}

	const handleCellClick = (_rowIndex: number, cellIndex: number) => {
		if (winner) return
		const lowestEmptyRow = getLowestEmptyRow({ board, column: cellIndex })
		const player = isPlayer1Turn ? '🔴' : '🟡'
		setDroppingPiece({ row: 0, col: cellIndex, player })
	}

	useEffect(() => {
		if (droppingPiece.player) {
			const timer = setTimeout(() => {
				const lowestEmptyRow = getLowestEmptyRow({
					board,
					column: droppingPiece.col,
				})
				const newBoard = [...board]
				newBoard[lowestEmptyRow][droppingPiece.col] = droppingPiece.player
				setBoard(newBoard)
				setIsPlayer1Turn(!isPlayer1Turn)
				const playerWinner = checkWinnerOrDraw(newBoard)
				if (playerWinner) setWinner(playerWinner)
				setDroppingPiece({ row: -1, col: -1, player: null })
			}, 500) // adjust the delay to control the drop speed
			return () => clearTimeout(timer)
		}
	}, [droppingPiece, board, isPlayer1Turn])

	return (
		<div className="flex flex-col *:justify-center">
			<h1 className="mt-12 text-center text-4xl">Connect Four</h1>
			<StartButton resetGame={handleReset} />
			<div className="relative">
				{droppingPiece.player && (
					<div
						className="absolute z-10 text-2xl"
						style={{							
							left: droppingPiece.col * 48 + 8, // adjust based on cell size
							transition: 'top 0.5s',
							top: droppingPiece.row * 48 + 8, // adjust based on cell size
						}}
					>
						{droppingPiece.player}
					</div>
				)}
				{board.map((row, rowIndex) => (
					<div className="flex" key={rowIndex}>
						{row.map((cell, cellIndex) => (
							<button
								className="h-12 w-12 border border-gray-500 text-2xl"
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