import { FaInstagram, FaTelegramPlane } from 'react-icons/fa'

export default function Footer() {
	return (
		<footer className='bg-gray-100 py-8 text-gray-700'>
			<div className='container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left'>
				{/* Левая колонка — Логотип и копирайт */}
				<div>
					<h2 className='text-xl font-bold text-black mb-2'>Давай сделаем</h2>
					<p className='text-sm'>
						&copy; 2025 Давай сделаем. Все права защищены.
					</p>
				</div>

				{/* Центр — Контакты */}
				<div className='space-y-1'>
					<p className='text-base text-black font-medium'>
						+375 (25) 990-58-88
					</p>
					<p className='text-base text-indigo-600'>davay_sdelaem@mail.ru</p>
				</div>

				{/* Правая колонка — Ссылки и соцсети */}
				<div className='flex flex-col items-center md:items-end gap-2'>
					<div className='flex gap-4'>
						<a
							href='https://t.me/Davay_sdelaem_Zaslavl'
							className='bg-white p-2 rounded-full shadow text-indigo-600 hover:scale-105 transition'
						>
							<FaTelegramPlane size={18} />
						</a>
						<a
							href='https://www.instagram.com/davaysdelaem/'
							className='bg-white p-2 rounded-full shadow text-indigo-600 hover:scale-105 transition'
						>
							<FaInstagram size={18} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}
