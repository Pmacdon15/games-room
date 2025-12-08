import Link from 'next/link';
import Header from '@/components/ui/header';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center px-4 py-12 md:py-20">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 bg-gradient-to-r from-[#FF6B6B] via-[#4ECDC4] to-[#FFD93D] bg-clip-text text-transparent animate-pulse" 
            style={{ fontFamily: "'Fredoka', sans-serif" }}>
          🎮 Games Room 🎮
        </h1>
        <p className="text-xl md:text-2xl text-center mb-12 opacity-80 max-w-2xl">
          Pick your favorite game and let the fun begin!
        </p>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          
          {/* Tic Tac Toe Card */}
          <Link href="/games/tick-tack-toe" className="group">
            <div className="relative overflow-hidden rounded-3xl p-8 backdrop-blur-md bg-white/80 dark:bg-[#2A2E3D]/80 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-[#FF6B6B]/30 hover:border-[#FF6B6B]">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  ❌⭕
                </div>
                <h2 className="text-3xl font-bold mb-3 text-[#FF6B6B]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  Tic Tac Toe
                </h2>
                <p className="text-lg opacity-75 mb-4">
                  Classic strategy game! Get three in a row to win.
                </p>
                <div className="flex items-center gap-2 text-[#FF6B6B] font-semibold">
                  <span>Play Now</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
              
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B6B]/20 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300"></div>
            </div>
          </Link>

          {/* Connect 4 Card */}
          <Link href="/games/connect-4" className="group">
            <div className="relative overflow-hidden rounded-3xl p-8 backdrop-blur-md bg-white/80 dark:bg-[#2A2E3D]/80 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-4 border-[#4ECDC4]/30 hover:border-[#4ECDC4]">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  🔴🟡
                </div>
                <h2 className="text-3xl font-bold mb-3 text-[#4ECDC4]" style={{ fontFamily: "'Fredoka', sans-serif" }}>
                  Connect Four
                </h2>
                <p className="text-lg opacity-75 mb-4">
                  Drop your discs and connect four to claim victory!
                </p>
                <div className="flex items-center gap-2 text-[#4ECDC4] font-semibold">
                  <span>Play Now</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </div>
              
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#4ECDC4]/20 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-300"></div>
            </div>
          </Link>
        </div>

        {/* Fun floating badge */}
        <div className="mt-16 px-6 py-3 rounded-full backdrop-blur-md bg-white/60 dark:bg-[#2A2E3D]/60 shadow-lg border-2 border-[#FFD93D]/50">
          <p className="text-lg font-semibold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
            ✨ Created for fun! ✨
          </p>
        </div>
      </div>
    </div>
  );
}


