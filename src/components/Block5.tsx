'use client'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

export default function Block5() {
	return (
		<div className="relative w-full h-[500px]">
			<YMaps>
				<Map
					defaultState={{
						center: [54.0006, 27.2976],
						zoom: 14,
						controls: ['zoomControl'],
					}}
					modules={['control.ZoomControl']}
					width="100%"
					height="100%"
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
			</YMaps>

			<div className="absolute top-10 left-10 bg-white shadow-xl rounded-xl p-6 w-[320px] max-w-full z-10">
				<h2 className="text-2xl font-bold mb-2">Контакты</h2>
				<p className="text-sm mb-1">+375 (25) 990-58-88</p>
				<p className="text-sm mb-1 text-blue-600">davay_sdelaem@mail.ru</p>
				<p className="text-sm mb-1">г. Заславль ул.Набережная-1 к.305</p>
				<p className="text-sm">ПН-выходной, С 11:00 до 20:00</p>
			</div>
		</div>
	)
}
