import Image from 'next/image'
import ContactButton from './ContactButton'

export default function Block3() {
	return (
		<section className='bg-[#f5f3ff] py-20'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 items-center gap-12'>
					{/* Text content */}
					<div>
						<h2 className='text-2xl sm:text-3xl font-bold mb-4'>
							Профессиональный ремонт вашей техники
						</h2>
						<p className='text-gray-700 text-base sm:text-lg mb-6'>
							Надежный ремонт телефонов, планшетов, телевизоров, ноутбуков и
							компьютеров
						</p>
						<ContactButton className='bg-[rgb(85,82,232)] hover:bg-[rgb(65,62,200)] text-white px-6 py-2 text-base rounded-lg'>
							Получить консультацию
						</ContactButton>
					</div>

					{/* Image */}
					<div className='relative w-full aspect-[4/3]'>
						<Image
							src='/img/703aa66d-94bd-42f8-96aa-050d4cf8143b.webp'
							alt='Мастер чинит телефон'
							fill
							className='rounded-xl shadow-lg object-cover'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
