import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export default function Block1() {
	return (
		<div className='flex flex-row w-full p-4 items-center gap-8'>
			<div className='relative w-1/2 h-64 min-w-[200px]'>
				<Image
					src='/img/e5302e7e-b58f-4225-964b-fd31d32db460.jpg'
					alt='e5302e7e-b58f-4225-964b-fd31d32db460.jpg'
					fill
					sizes='100vw'
					className='object-cover'
				/>
			</div>
			<div className='text-left w-1/2 max-w-xl'>
				<h2 className='text-3xl font-bold'>
					Профессиональный ремонт вашей техники
				</h2>
				<p className='text-sm text-gray-700'>
					Надежный ремонт телефонов, планшетов и ноутбуков
				</p>
				<Button
					variant='default'
					className='mt-5 bg-[rgb(85,82,232)] hover:bg-[rgb(65,62,200)]'
					size={'lg'}
				>
					Оставить заявку
					<ArrowRight className='ml-2' />
				</Button>
				<p className='text-sm text-gray-700 mt-2'>
					Гарантия качества и быстрые сроки восстановления
				</p>
			</div>
		</div>
	)
}
