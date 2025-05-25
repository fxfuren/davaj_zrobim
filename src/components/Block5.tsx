import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Block5() {
	return (
		<Card className='bg-gray-50 text-center'>
			<CardHeader>
				<CardTitle>Готовы увеличить продажи?</CardTitle>
			</CardHeader>
			<CardContent>
				<p className='mb-4'>Оставьте заявку, и мы свяжемся с вами</p>
				<Button>Оставить заявку</Button>
			</CardContent>
		</Card>
	)
}
