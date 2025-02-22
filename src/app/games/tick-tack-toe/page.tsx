import TickTackToe from '@/components/ui/tick-tack-toe';
import BackButton from '@/components/ui/buttons/back-button';
import Header from '@/components/ui/header';
export default function Page() {
    return (
        <div className='flex flex-col items-center'>
            <Header />
            <TickTackToe />
            <BackButton />
        </div>
    );
};