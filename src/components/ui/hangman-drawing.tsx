'use client'

const HEAD = (
	<div
		className="absolute top-[50px] right-[-20px] h-[50px] w-[50px] rounded-full border-[10px] border-black"
		key="head"
	/>
)

const BODY = (
	<div
		className="absolute top-[89px] right-[-95px] h-[10px] w-[100px] origin-left rotate-90 bg-black"
		key="body"
	/>
)

const RIGHT_ARM = (
	<div
		className="absolute top-[125px] right-[-95px] h-[10px] w-[100px] origin-left rotate-[-30deg] bg-black"
		key="right-arm"
	/>
)

const LEFT_ARM = (
	<div
		className="absolute top-[125px] right-[5px] h-[10px] w-[100px] origin-right rotate-[30deg] bg-black"
		key="left-arm"
	/>
)

const RIGHT_LEG = (
	<div
		className="absolute top-[185px] right-[-95px] h-[10px] w-[100px] origin-left rotate-[60deg] bg-black"
		key="right-leg"
	/>
)

const LEFT_LEG = (
	<div
		className="absolute top-[185px] right-[5px] h-[10px] w-[100px] origin-right rotate-[-60deg] bg-black"
		key="left-leg"
	/>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
	numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
	return (
		<div className="relative">
			{BODY_PARTS.slice(0, numberOfGuesses)}

			{/* Rope */}
			<div className="absolute top-0 right-0 h-[50px] w-[10px] bg-black" />

			{/* Top beam */}
			<div className="ml-[120px] h-[10px] w-[200px] bg-black" />

			{/* Pole */}
			<div className="ml-[120px] h-[250px] w-[10px] bg-black" />

			{/* Base */}
			<div className="h-[10px] w-[250px] bg-black" />
		</div>
	)
}
