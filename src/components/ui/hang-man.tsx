'use client'
import { useEffect, useState } from 'react'
import StartButton from '@/components/ui/buttons/start-button'
import {
	checkWinnerOrDraw,
	getLowestEmptyRow,
} from '@/lib/utils/connect4-utils'

export default function HangMan() {
	

	return (
		<div className="flex flex-col *:justify-center">
			<h1 className="mt-12 text-center text-4xl">Hang Man</h1>
			<div className='container bg-white '>
				words
			</div>
			
			{/* {winner && (
				<h1 className="mt-6 text-center text-2xl">{winner} Wins!</h1>
			)} */}
		</div>
	)
}
