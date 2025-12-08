import Link from 'next/link'
export default function BackButton() {
	return (
		<Link
			className="m-8 rounded bg-blue-600 px-5 py-2.5 text-white text-xl transition-all hover:bg-blue-700 hover:shadow-blue-200 hover:shadow-lg"
			href="/"
		>
			Back
		</Link>
	)
}
