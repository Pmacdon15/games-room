import Link from 'next/link';
import Header from '@/components/ui/header';
export default function Home() {

  return (
    <div>
      <Header />
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center w-2/6">
          <Link
            className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 m-8 px-5 py-2.5 rounded text-white text-xl transition-all"
            href="/games/tick-tack-toe">

            Tick Tack Toe

          </Link>
          <Link
            className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 m-8 px-5 py-2.5 rounded text-white text-xl transition-all"
            href="/games/connect-4">

            Connect Four
          </Link>
        </div>
      </div>
    </div>
  );
}

