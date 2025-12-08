'use client'
import { useCallback, useEffect, useState } from 'react'
import StartButton from '@/components/ui/buttons/start-button'

export default function TickTackToe() {
	const [board, setBoard] = useState(Array(9).fill(null))
	const [isPlayer1Turn, setIsPlayer1Turn] = useState(true)
	const [winner, setWinner] = useState<string | null>(null)

	const checkWinner = useCallback(() => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i]
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				return board[a]
			}
		}

		if (!board.includes(null)) {
			return 'draw'
		}

		return null
	}, [board])

	useEffect(() => {
		function checkGameOver() {
			const winner = checkWinner()
			if (winner) {
				setWinner(winner)
			}
		}
		checkGameOver()
	}, [checkWinner])

	const handleClick = (index: number) => {
		if (winner || board[index]) return

		const newBoard = [...board]
		newBoard[index] = isPlayer1Turn ? 'X' : 'O'
		setBoard(newBoard)
		setIsPlayer1Turn(!isPlayer1Turn)
	}

	const startGame = () => {
		setBoard(Array(9).fill(null))
		setIsPlayer1Turn(true)
		setWinner(null)
	}

	return (
		<div className='font-["Protest_Strike"]'>
			<h1 className="mt-12 text-center text-4xl text-blue-600">
				Tick Tack Toe
			</h1>

			<StartButton resetGame={startGame} />
			<div className="mx-auto grid grid-cols-3 items-center justify-items-center gap-2.5 rounded-lg bg-white p-5">
				{board.map((value, index) => (
					<button
						className="m-0 flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded bg-gradient-to-r from-[#6991ba] to-[#1a8ab9] p-5 text-2xl text-white hover:shadow-md"
						key={index}
						onClick={() => handleClick(index)}
						type="button"
					>
						{value}
					</button>
				))}
			</div>
			{winner && (
				<div className="mt-5 text-center text-xl">
					{winner === 'draw' ? "It's a draw!" : `${winner} wins!`}
				</div>
			)}
		</div>
	)
}
