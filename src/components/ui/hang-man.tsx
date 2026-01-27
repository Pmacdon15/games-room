'use client'

import { useCallback, useEffect, useState } from 'react'
import { alphabet, words } from '@/lib/utils/words'
import { HangmanDrawing } from './hangman-drawing'

export default function HangMan() {
	const getRandomWord = () => words[Math.floor(Math.random() * words.length)]

	const [word, setWord] = useState(getRandomWord)
	const [guessedLetters, setGuessedLetters] = useState<string[]>([])

	const lettersOfWord = word.split('')
	const incorrectLetters = guessedLetters.filter(
		(letter) => !word.includes(letter),
	)

	const isLoser = incorrectLetters.length >= 6
	const isWinner = lettersOfWord.every((letter) =>
		guessedLetters.includes(letter),
	)

	const handleGuess = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter) || isLoser || isWinner) return
			setGuessedLetters((prev) => [...prev, letter])
		},
		[guessedLetters, isLoser, isWinner],
	)

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key.toLowerCase()
			if (!key.match(/^[a-z]$/)) return

			e.preventDefault()
			handleGuess(key)
		}

		document.addEventListener('keypress', handler)

		return () => {
			document.removeEventListener('keypress', handler)
		}
	}, [handleGuess])

	return (
		<div className="flex w-full flex-col items-center *:justify-center">
			<h1 className="mt-2 text-center text-4xl">Hang Man</h1>

			{/* WORD DISPLAY */}
			<div className="container mt-4 flex flex-col items-center gap-8 rounded-sm bg-white/40 p-8">
				<div className="flex flex-col items-center gap-4">
					<div className="font-bold text-2xl text-black">
						{isWinner && 'Winner! - Refresh to try again'}
						{isLoser && 'Nice Try - Refresh to try again'}
					</div>
					<HangmanDrawing numberOfGuesses={incorrectLetters.length} />
				</div>

				<div className="mt-6 flex max-w-md flex-wrap justify-center gap-2">
					{lettersOfWord.map((letter, index) => (
						<div
							className="w-8 border-black border-b-2 text-center text-2xl text-black"
							key={index}
						>
							<span
								className={
									!guessedLetters.includes(letter) && isLoser
										? 'text-red-500'
										: 'text-black'
								}
							>
								{guessedLetters.includes(letter) || isLoser
									? letter
									: ''}
							</span>
						</div>
					))}
				</div>

				{/* ALPHABET */}
				<div className="mt-6 flex max-w-md flex-wrap justify-center gap-2 text-black">
					{alphabet.map((letter) => {
						const isGuessed = guessedLetters.includes(letter)

						return (
							<button
								className={`w-8 rounded border text-center text-xl${isGuessed ? 'cursor-not-allowed bg-gray-400' : 'bg-white hover:bg-gray-100'}
							`}
								disabled={isGuessed}
								key={letter}
								onClick={() => handleGuess(letter)}
								type="button"
							>
								{letter}
							</button>
						)
					})}
				</div>
				<button
					className="rounded-sm border bg-blue-300 px-4 py-2 hover:bg-blue-100 hover:text-black"
					onClick={() => {
						setWord(getRandomWord)
						setGuessedLetters([])
					}}
					type="button"
				>
					Restart
				</button>
			</div>
		</div>
	)
}
