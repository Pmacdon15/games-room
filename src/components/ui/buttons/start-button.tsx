export default function StartButton({ resetGame }: { resetGame: () => void }) {
    return (
        <div className="flex justify-center mb-5">
            <button
                className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 mt-8 px-5 py-2.5 rounded text-white text-xl transition-all"
                onClick={resetGame}
            >
                Start Game
            </button>
        </div>
    );
};