'use client'

import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import { FaEnvelope, FaPhone, FaTelegramPlane, FaViber } from 'react-icons/fa'

interface ContactModalProps {
	open: boolean
	onOpenChange: (open: boolean) => void
}

export default function ContactModal({
	open,
	onOpenChange,
}: ContactModalProps) {
	const tgLink = 'https://t.me/Davay_sdelaem_Zaslavl'
	const viberLink = 'viber://chat?number=%2B375259905888'
	const emailLink = 'mailto:davay_sdelaem@mail.ru'

	const phoneLink = 'tel:+375259905888'

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className='text-center'>
				<DialogHeader>
					<DialogTitle className='text-xl'>Связаться с нами</DialogTitle>
				</DialogHeader>
				<div className='flex justify-center gap-4'>
					<Button
						asChild
						variant='outline'
						className='p-6 flex items-center justify-center'
					>
						<a href={phoneLink}>
							<FaPhone size={32} />
						</a>
					</Button>

					<Button
						asChild
						variant='outline'
						className='p-6 flex items-center justify-center'
					>
						<a href={tgLink} target='_blank' rel='noopener noreferrer'>
							<FaTelegramPlane size={32} />
						</a>
					</Button>
					<Button
						asChild
						variant='outline'
						className='p-6 flex items-center justify-center'
					>
						<a href={viberLink} target='_blank' rel='noopener noreferrer'>
							<FaViber size={32} />
						</a>
					</Button>
					<Button
						asChild
						variant='outline'
						className='p-6 flex items-center justify-center'
					>
						<a href={emailLink} target='_blank' rel='noopener noreferrer'>
							<FaEnvelope size={32} />
						</a>
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}
