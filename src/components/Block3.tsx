import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Block3() {
	return (
		<Card className='bg-gray-100'>
			<CardHeader>
				<CardTitle className='text-center'>Мы работаем с брендами</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='flex justify-center space-x-4'>
					<div className='w-16 h-8 bg-gray-300' />
					<div className='w-16 h-8 bg-gray-300' />
					<div className='w-16 h-8 bg-gray-300' />
				</div>
			</CardContent>
		</Card>
	)
}
