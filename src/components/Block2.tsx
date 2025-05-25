import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Block2() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Что мы предлагаем</CardTitle>
			</CardHeader>
			<CardContent>
				<ul className='space-y-2'>
					<li>Настройка рекламы в Яндекс Директ — от 10 000₽</li>
					<li>Контекстная реклама в Google Ads — от 15 000₽</li>
					<li>Ведение рекламной кампании — от 5 000₽/мес</li>
				</ul>
			</CardContent>
		</Card>
	)
}
