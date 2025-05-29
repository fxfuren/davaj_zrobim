'use client'

import { Button } from '@/components/ui/button'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { ArrowRight, Menu } from 'lucide-react'

export default function Header() {
	return (
		<header className='flex justify-between items-center w-full p-4 bg-black text-white shadow-md'>
			<h1 className='text-2xl pl-5 font-bold'>&quot;Давай сделаем&quot;</h1>

			{/* Десктопная версия */}
			<div className='hidden md:flex items-center gap-4'>
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
				<Button
					variant='default'
					className='bg-[rgb(85,82,232)] hover:bg-[rgb(65,62,200)]'
					size='lg'
				>
					Оставить заявку
					<ArrowRight className='ml-2' />
				</Button>
			</div>

			{/* Мобильная версия */}
			<div className='md:hidden'>
				<Sheet>
					<SheetTrigger asChild>
						<Button variant='ghost' size='icon' className='text-white'>
							<Menu className='w-6 h-6' />
						</Button>
					</SheetTrigger>
					<SheetContent
						side='right'
						className='w-[280px] sm:w-[300px] bg-black text-white border-0'
					>
						<SheetHeader>
							<SheetTitle className='text-white'>
								&quot;Давай сделаем&quot;
							</SheetTitle>
						</SheetHeader>
						<div className='px-4 space-y-3'>
							<div className='text-sm text-gray-400'>
								Служба приема и диагностики
								<br />
								ПН-выходной С11:00 до 20:00
							</div>
							<div className='text-lg font-bold'>+375 (25) 990-58-88</div>
							<Button
								variant='default'
								className='w-full bg-[rgb(85,82,232)] hover:bg-[rgb(65,62,200)]'
							>
								Оставить заявку
								<ArrowRight className='ml-2' />
							</Button>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	)
}
