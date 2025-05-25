import Image from 'next/image'

export default function Block1() {
	return (
		<div className='flex items-center justify-center gap-8 p-4 w-full'>
			<div className='relative w-64 h-64 flex-shrink-0'>
				<Image
					src='/img/e5302e7e-b58f-4225-964b-fd31d32db460.jpg'
					alt='Hero'
					fill
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw)'
				/>
			</div>
			<div className='text-center'>
				<h2 className='text-2xl font-bold'>
					Настроим рекламу для вашего бизнеса
				</h2>
				<p className='text-gray-700 mt-2'>
					Реклама, которая приводит клиентов, а не сливает бюджет.
				</p>
			</div>
		</div>
	)
}
