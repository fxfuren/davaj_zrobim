'use client'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

export default function Block5() {
	return (
		<div className="relative w-full overflow-hidden">
			<YMaps>
				<div className="w-full h-[500px] md:h-[600px]">
					<Map
						defaultState={{
							center: [54.0006, 27.2976],
							zoom: 14,
							controls: ['zoomControl'],
						}}
						modules={['control.ZoomControl']}
						options={{ autoFitToViewport: 'always' }}
						style={{ width: '100%', height: '100%' }}
					>
						<Placemark
							geometry={[54.0006, 27.2976]}
							options={{ preset: 'islands#blueIcon' }}
							properties={{
								balloonContentHeader: 'Давай сделаем',
								balloonContentBody: 'г. Заславль, ул.Набережная-1 к.305',
							}}
						/>
					</Map>
				</div>
			</YMaps>

			{/* Контактная карточка */}
			<div className="absolute top-4 left-4 bg-white shadow-xl rounded-xl p-4 w-[90%] max-w-[320px] z-10 md:p-6">
				<h2 className="text-xl font-bold mb-2">Контакты</h2>
				<p className="text-sm mb-1">+375 (25) 990-58-88</p>
				<a
					href="mailto:davay_sdelaem@mail.ru"
					className="text-sm mb-1 text-blue-600 block"
				>
					davay_sdelaem@mail.ru
				</a>
				<p className="text-sm mb-1">г. Заславль ул.Набережная-1 к.305</p>
				<p className="text-sm">ПН-выходной, С 11:00 до 20:00</p>
			</div>
		</div>
	)
}
