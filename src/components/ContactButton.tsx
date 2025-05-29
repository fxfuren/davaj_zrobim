'use client'

import { ArrowRight } from 'lucide-react'
import { useState } from 'react'
import ContactModal from './ContactModal'
import { Button } from './ui/button'

interface Props {
	children: React.ReactNode
	className?: string
}

export default function ContactButton({ children, className }: Props) {
	const [open, setOpen] = useState(false)

	const handleClick = () => {
		setOpen(true)
	}

	return (
		<>
			<Button onClick={handleClick} className={className} size='lg'>
				{children}
				<ArrowRight className='ml-2' />
			</Button>
			<ContactModal open={open} onOpenChange={setOpen} />
		</>
	)
}
