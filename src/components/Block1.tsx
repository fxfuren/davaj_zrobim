import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'

export default function Block1() {
	return (
		<section className='bg-gray-50 py-12'>
			<div className='container mx-auto flex flex-col lg:flex-row items-center gap-10 px-6'>
				{/* Image section */}
				<div className='relative w-full lg:w-1/2 h-[400px]'>
					<Image
						src='/img/e5302e7e-b58f-4225-964b-fd31d32db460.jpg'
						alt='Открытый ноутбук и инструменты'
						fill
						sizes='100vw'
						className='object-cover rounded-xl shadow'
					/>
				</div>

				{/* Text section */}
				<div className='w-full lg:w-1/2 max-w-xl text-left pl-20'>
					<h2 className='text-4xl font-bold leading-tight mb-4'>
						Профессиональный ремонт вашей техники
					</h2>
					<p className='text-gray-700 text-lg mb-6'>
						Надежный ремонт телефонов, планшетов и ноутбуков
					</p>
					<Button
						variant='default'
						size='lg'
						className='bg-[rgb(85,82,232)] hover:bg-[rgb(65,62,200)]'
					>
						Связаться с нами <ArrowRight className='ml-2' />
					</Button>
					<p className='text-sm text-gray-500 mt-4'>
						Гарантия качества и быстрые сроки восстановления
					</p>
				</div>
			</div>
		</section>
	)
}
