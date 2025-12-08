export default function StartButton({ resetGame }: { resetGame: () => void }) {
	return (
		<div className="mb-5 flex justify-center">
			<button
				className="mt-8 rounded bg-blue-600 px-5 py-2.5 text-white text-xl transition-all hover:bg-blue-700 hover:shadow-blue-200 hover:shadow-lg"
				onClick={resetGame}
				type="button"
			>
				Start Game
			</button>
		</div>
	)
}
