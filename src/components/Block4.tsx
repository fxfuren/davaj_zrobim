import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Block4() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Почему выбирают нас</CardTitle>
			</CardHeader>
			<CardContent>
				<ul className='space-y-2'>
					<li>✔ Более 5 лет опыта</li>
					<li>✔ Прозрачная аналитика</li>
					<li>✔ Реальные кейсы</li>
				</ul>
			</CardContent>
		</Card>
	)
}
