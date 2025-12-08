import BackButton from '@/components/ui/buttons/back-button'
import Connect4 from '@/components/ui/connect-4'
import Header from '@/components/ui/header'
export default function Page() {
	return (
		<div className="flex flex-col items-center">
			<Header />
			<Connect4 />
			<BackButton />
		</div>
	)
}
