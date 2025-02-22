import Link from 'next/link';
export default function BackButton() {
    return (
        <Link
            className="bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 m-8 px-5 py-2.5 rounded text-white text-xl transition-all"
            href="/">
            Back
        </Link>
    );
};