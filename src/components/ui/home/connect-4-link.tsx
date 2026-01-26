import { Link } from 'lucide-react'

export default function Connect4Link() {
	return (
		<Link className="group" href="/games/connect-4">
			<div className="relative overflow-hidden rounded-3xl border-4 border-[#4ECDC4]/30 bg-white/80 p-8 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#4ECDC4] hover:shadow-2xl dark:bg-[#2A2E3D]/80">
				{/* Decorative gradient overlay */}
				<div className="absolute inset-0 bg-linear-to-br from-[#4ECDC4]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

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
						Drop your discs and connect four to claim victory!
					</p>
					<div className="flex items-center gap-2 font-semibold text-[#4ECDC4]">
						<span>Play Now</span>
						<span className="transform transition-transform duration-300 group-hover:translate-x-2">
							→
						</span>
					</div>
				</div>

				{/* Animated corner accent */}
				<div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 transform rounded-bl-full bg-[#4ECDC4]/20 transition-transform duration-300 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
			</div>
		</Link>
	)
}
