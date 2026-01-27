import BackButton from '@/components/ui/buttons/back-button'
import HangMan from '@/components/ui/hang-man'
import Header from '@/components/ui/header'
export default function Page() {
	return (
		<div className="flex flex-col items-center">
			<Header />
			<HangMan />
			<BackButton />
		</div>
	)
}
