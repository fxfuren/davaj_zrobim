import Image from 'next/image'
import ContactButton from './ContactButton'

export default function Block1() {
	return (
		<section className='w-full overflow-x-hidden'>
			<div className='min-h-screen lg:min-h-[700px] grid grid-cols-1 lg:grid-cols-2'>
				{/* Left side: Full-height image */}
				<div className='relative h-[300px] lg:h-auto w-full'>
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
				<div className='bg-gray-50 flex items-center justify-center px-6 sm:px-10 lg:px-16 py-12'>
					<div className='max-w-xl w-full'>
						<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
							Профессиональный ремонт вашей техники
						</h2>
						<p className='text-gray-700 text-base sm:text-lg mb-6'>
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
			</div>
		</section>
	)
}
