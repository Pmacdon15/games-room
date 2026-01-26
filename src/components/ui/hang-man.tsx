'use client'

import { useState } from 'react'
import { alphabet, words } from '@/lib/utils/words'

export default function HangMan() {
	const getRandomWord = () => words[Math.floor(Math.random() * words.length)]

	const [word, setWord] = useState(getRandomWord)
	const [guessedLetters, setGuessedLetters] = useState<string[]>([])

	const lettersOfWord = word.split('')

	const handleGuess = (letter: string) => {
		if (guessedLetters.includes(letter)) return
		setGuessedLetters((prev) => [...prev, letter])
	}

	return (
		<div className="flex w-full flex-col items-center *:justify-center">
			<h1 className="mt-12 text-center text-4xl">Hang Man</h1>

			{/* WORD DISPLAY */}
			<div className="container mt-8 flex flex-col items-center gap-4 rounded-sm bg-white p-8">
				<div className="mt-6 flex max-w-md flex-wrap justify-center gap-2">
					{lettersOfWord.map((letter, index) => (
						<div
							className="w-8 border-black border-b-2 text-center text-2xl text-black"
							key={index}
						>
							{guessedLetters.includes(letter) ? letter : ''}
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
