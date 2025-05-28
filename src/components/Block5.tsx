'use client'

export default function Block5() {
	return (
		<div className='relative w-full overflow-hidden'>
			{/* Контактная карточка */}
			<div className='absolute top-4 left-4 bg-white shadow-xl rounded-xl p-4 w-[90%] max-w-[320px] z-10 md:p-6'>
				<h2 className='text-xl font-bold mb-2'>Контакты</h2>
				<p className='text-sm mb-1'>+375 (25) 990-58-88</p>
				<a
					href='mailto:davay_sdelaem@mail.ru'
					className='text-sm mb-1 text-blue-600 block'
				>
					davay_sdelaem@mail.ru
				</a>
				<p className='text-sm mb-1'>г. Заславль ул.Набережная-1 к.305</p>
				<p className='text-sm'>ПН-выходной, С 11:00 до 20:00</p>
			</div>
		</div>
	)
}
