import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className="mt-auto bg-gray-800 py-4 text-white">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between">
					<div className="space-y-2 text-sm">
						<div className="flex items-center gap-2">
							<Mail className="h-4 w-4" />
							<Link
								className="hover:underline"
								href="mailto:patrick@patmac.ca"
							>
								patrick@patmac.ca
							</Link>
						</div>
						<div className="flex items-center gap-2">
							<MapPin className="h-4 w-4" />
							<Link
								className="hover:underline"
								href="https://www.google.com/maps/place/Calgary,+AB"
								rel="noopener noreferrer"
								target="_blank"
							>
								Calgary, AB
							</Link>
						</div>
					</div>
					<div className="flex gap-4">
						<Link
							href="https://github.com/pmacdon15"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Github className="h-6 w-6" />
						</Link>
						<Link
							href="https://www.linkedin.com/in/patrick-macdonald-231640285/"
							rel="noopener noreferrer"
							target="_blank"
						>
							<Linkedin className="h-6 w-6" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
