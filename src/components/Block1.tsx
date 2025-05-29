import Image from 'next/image'
import ContactButton from './ContactButton'

export default function Block1() {
	return (
		<section className='flex flex-col lg:flex-row w-full min-h-[600px]'>
			{/* Left side: Image */}
			<div className='relative w-full lg:w-1/2 min-h-[400px] lg:min-h-full'>
				<Image
					src='/img/e5302e7e-b58f-4225-964b-fd31d32db460.jpg'
					alt='Открытый ноутбук и инструменты'
					fill
					sizes='(min-width: 1024px) 50vw, 100vw'
					className='object-cover'
					priority
				/>
			</div>

			{/* Right side: Text */}
			<div className='w-full lg:w-1/2 bg-gray-50 flex items-center px-6 lg:px-20 py-12'>
				<div className='max-w-xl'>
					<h2 className='text-4xl font-bold leading-tight mb-4'>
						Профессиональный ремонт вашей техники
					</h2>
					<p className='text-gray-700 text-lg mb-6'>
						Надежный ремонт телефонов, планшетов и ноутбуков
					</p>
					<ContactButton className='bg-[rgb(85,82,232)] hover:bg-[rgb(65,62,200)]'>
						Связаться с нами
					</ContactButton>
					<p className='text-sm text-gray-500 mt-4'>
						Гарантия качества и быстрые сроки восстановления
					</p>
				</div>
			</div>
		</section>
	)
}
