import Link from 'next/link'
import Header from '@/components/ui/header'

export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />

			{/* Hero Section */}
			<div className="flex flex-col items-center justify-center px-4 py-12 md:py-20">
				<h1
					className="mb-4 animate-pulse bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#FFD93D] bg-clip-text text-center font-bold text-5xl text-transparent md:text-7xl"
					style={{ fontFamily: "'Fredoka', sans-serif" }}
				>
					🎮 Games Room 🎮
				</h1>
				<p className="mb-12 max-w-2xl text-center text-xl opacity-80 md:text-2xl">
					Pick your favorite game and let the fun begin!
				</p>

				{/* Game Cards Grid */}
				<div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
					{/* Tic Tac Toe Card */}
					<Link className="group" href="/games/tick-tack-toe">
						<div className="relative overflow-hidden rounded-3xl border-4 border-[#FF6B6B]/30 bg-white/80 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#FF6B6B] hover:shadow-2xl dark:bg-[#2A2E3D]/80">
							{/* Decorative gradient overlay */}
							<div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

							<div className="relative z-10">
								<div className="mb-4 transform text-6xl transition-transform duration-300 group-hover:scale-110">
									❌⭕
								</div>
								<h2
									className="mb-3 font-bold text-3xl text-[#FF6B6B]"
									style={{
										fontFamily: "'Fredoka', sans-serif",
									}}
								>
									Tic Tac Toe
								</h2>
								<p className="mb-4 text-lg opacity-75">
									Classic strategy game! Get three in a row to
									win.
								</p>
								<div className="flex items-center gap-2 font-semibold text-[#FF6B6B]">
									<span>Play Now</span>
									<span className="transform transition-transform duration-300 group-hover:translate-x-2">
										→
									</span>
								</div>
							</div>

							{/* Animated corner accent */}
							<div className="-translate-y-8 group-hover:-translate-y-4 absolute top-0 right-0 h-24 w-24 translate-x-8 transform rounded-bl-full bg-[#FF6B6B]/20 transition-transform duration-300 group-hover:translate-x-4"></div>
						</div>
					</Link>

					{/* Connect 4 Card */}
					<Link className="group" href="/games/connect-4">
						<div className="relative overflow-hidden rounded-3xl border-4 border-[#4ECDC4]/30 bg-white/80 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#4ECDC4] hover:shadow-2xl dark:bg-[#2A2E3D]/80">
							{/* Decorative gradient overlay */}
							<div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

							<div className="relative z-10">
								<div className="mb-4 transform text-6xl transition-transform duration-300 group-hover:scale-110">
									🔴🟡
								</div>
								<h2
									className="mb-3 font-bold text-3xl text-[#4ECDC4]"
									style={{
										fontFamily: "'Fredoka', sans-serif",
									}}
								>
									Connect Four
								</h2>
								<p className="mb-4 text-lg opacity-75">
									Drop your discs and connect four to claim
									victory!
								</p>
								<div className="flex items-center gap-2 font-semibold text-[#4ECDC4]">
									<span>Play Now</span>
									<span className="transform transition-transform duration-300 group-hover:translate-x-2">
										→
									</span>
								</div>
							</div>

							{/* Animated corner accent */}
							<div className="-translate-y-8 group-hover:-translate-y-4 absolute top-0 right-0 h-24 w-24 translate-x-8 transform rounded-bl-full bg-[#4ECDC4]/20 transition-transform duration-300 group-hover:translate-x-4"></div>
						</div>
					</Link>
				</div>

				{/* Fun floating badge */}
				<div className="mt-16 rounded-full border-2 border-[#FFD93D]/50 bg-white/60 px-6 py-3 shadow-lg backdrop-blur-md dark:bg-[#2A2E3D]/60">
					<p className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text font-semibold text-lg text-transparent">
						✨ Created for fun! ✨
					</p>
				</div>
			</div>
		</div>
	)
}
