'use client'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Header() {
	return (
		<header className='flex justify-between items-center w-full p-4 bg-black text-white shadow-md'>
			<h1 className='text-2xl pl-5 font-bold'>&quot;Давай сделаем&quot;</h1>
			<div className='flex items-center gap-4'>
				<div className='leading-tight'>
					<div className='text-sm text-gray-400'>
						Служба приема и диагностики
						<br />
						ПН-выходной С11:00 до 20:00
					</div>
					<div className='text-lg font-bold text-right'>
						+375 (25) 990-58-88
					</div>
				</div>
				<Button variant='default' className='bg-blue-500'>
					Оставить заявку
					<ArrowRight className='ml-2' />
				</Button>
			</div>
		</header>
	)
}
