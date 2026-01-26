import Header from '@/components/ui/header'
import Connect4Link from '@/components/ui/home/connect-4-link'
import TicTacToeLink from '@/components/ui/home/tic-tac-toe-link'

export default function Home() {
	return (
		<div className="">
			<Header />

			<div className="flex flex-col items-center justify-center px-4 py-12 md:py-20">
				<h1
					className="mb-4 animate-pulse bg-linear-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#FFD93D] bg-clip-text text-center font-bold text-5xl text-transparent md:text-7xl"
					style={{ fontFamily: "'Fredoka', sans-serif" }}
				>
					🎮 Games Room 🎮
				</h1>
				<p className="mb-12 max-w-2xl text-center text-xl opacity-80 md:text-2xl">
					Pick your favorite game and let the fun begin!
				</p>

				{/* Game Cards Grid */}
				<div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
					<TicTacToeLink />
					<Connect4Link />
				</div>

				<div className="mt-16 rounded-full border-2 border-[#FFD93D]/50 bg-white/60 px-6 py-3 shadow-lg backdrop-blur-md dark:bg-[#2A2E3D]/60">
					<p className="bg-linear-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text font-semibold text-lg text-transparent">
						✨ Created for fun! ✨
					</p>
				</div>
			</div>
		</div>
	)
}
