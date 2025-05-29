import Image from 'next/image'
import ContactButton from './ContactButton'

export default function Block3() {
	return (
		<section className='bg-[#f5f3ff] py-16'>
			<div className='container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
				{/* Text content */}
				<div className='md:w-1/2 text-left'>
					<h2 className='text-3xl font-bold mb-4'>
						Профессиональный ремонт вашей техники
					</h2>
					<p className='text-gray-700 text-base mb-6 max-w-md'>
						Надежный ремонт телефонов, планшетов, телевизоров, ноутбуков и
						компьютеров в{' '}
						<span className='font-medium'>&quot;Давай сделаем&quot;</span>.
					</p>
					<ContactButton className='bg-[rgb(85,82,232)] hover:bg-[rgb(65,62,200)] text-white px-6 py-2 text-base rounded-lg'>
						Получить консультацию
					</ContactButton>
				</div>

				{/* Image */}
				<div className='md:w-1/2 relative h-[350px] w-full'>
					<Image
						src='/img/703aa66d-94bd-42f8-96aa-050d4cf8143b.webp'
						alt='Мастер чинит телефон'
						fill
						className='object-cover rounded-xl shadow-lg'
					/>
				</div>
			</div>
		</section>
	)
}
