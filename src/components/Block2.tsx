import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

export default function Block2() {
	const services = [
		{
			title: 'Ремонт телефонов - качественно и быстро восстановим ваш гаджет.',
			price: 'от 10 руб.',
		},
		{
			title: 'Ремонт планшетов - вернем устройству прежнюю работоспособность.',
			price: 'от 10 руб.',
		},
		{
			title: 'Ремонт телевизоров - устраняем любые неполадки любой сложности.',
			price: 'от 10 руб.',
		},
		{
			title: 'Ремонт ноутбуков - продлим срок службы вашего устройства.',
			price: 'от 10 руб.',
		},
		{
			title: 'Ремонт компьютеров - быстрый и надежный сервис.',
			price: 'от 10 руб.',
		},
		{
			title: 'Диагностика устройств - точный анализ и рекомендации.',
			price: '0 руб.',
		},
	]

	return (
		<Card className='max-w-4xl mx-auto text-center !border-none mt-15 mb-15'>
			<CardHeader>
				<CardTitle className='text-4xl font-bold'>Наши Услуги</CardTitle>
				<CardDescription className='text-2xl mb-5'>
					Профессиональный ремонт электронной техники в кратчайшие сроки.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ul className='divide-y divide-gray-200'>
					{services.map((service, index) => (
						<li
							key={index}
							className='flex justify-between items-center py-3 text-left text-sm sm:text-2xl'
						>
							<span>{service.title}</span>
							<span className='font-semibold text-blue-600 whitespace-nowrap'>
								{service.price}
							</span>
						</li>
					))}
				</ul>
				<p className='text-xs text-muted-foreground mt-6'>
					Оставляя заявку, вы соглашаетесь на{' '}
					<a href='#' className='text-blue-600 underline'>
						обработку персональных данных
					</a>{' '}
					и с<br />
					<a href='#' className='text-blue-600 underline'>
						условиями бронирования счёта
					</a>
				</p>
			</CardContent>
		</Card>
	)
}
