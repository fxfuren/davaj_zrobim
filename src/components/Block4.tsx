import Image from 'next/image'

const features = [
	{
		title: 'Квалифицированные мастера',
		desc: 'Наши специалисты обладают многолетним опытом и навыками.',
		img: '/img/67e21105-64b7-451f-b543-2b0729ee10a2.png',
	},
	{
		title: 'Быстрая диагностика',
		desc: 'Мы оперативно выявляем и устраняем неисправности.',
		img: '/img/diagnostics.png',
	},
	{
		title: 'Гарантия на работы',
		desc: 'Мы предоставляем гарантию на все виды ремонта.',
		img: '/img/warranty.png',
	},
	{
		title: 'Доступные цены',
		desc: 'Конкурентные цены на все виды ремонта.',
		img: '/img/pricing.png',
	},
]

export default function Block4() {
	return (
		<section className="py-20 bg-white text-center">
			<div className="container mx-auto px-6">
				<p className="text-indigo-600 font-medium mb-2">Преимущества работы с нами</p>
				<h2 className="text-3xl font-bold mb-4">Почему нас выбирают</h2>
				<p className="text-gray-600 max-w-2xl mx-auto mb-12">
					Мы предоставляем качественный и надёжный ремонт вашей техники. Опытные специалисты быстро и эффективно вернут ваши устройства к жизни.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{features.map((feature, index) => (
						<div key={index} className="relative rounded-xl overflow-hidden shadow-md group">
							<Image
								src={feature.img}
								alt={feature.title}
								width={400}
								height={250}
								className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 p-4 flex flex-col justify-end text-left text-white">
								<h3 className="font-semibold text-lg">{feature.title}</h3>
								<p className="text-sm">{feature.desc}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
