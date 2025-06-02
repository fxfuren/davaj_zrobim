import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Head from 'next/head'
import './globals.css'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Давай сделаем',
	description:
		'Надежный ремонт телефонов, планшетов и ноутбуков в Заславле с гарантией',
	keywords: [
		'Ремонт цифровой техники',
		'Ремонт смартфонов в Заславле',
		'Сервисный центр по ремонту ноутбуков',
		'Замена экрана телефона',
		'Восстановление данных с жесткого диска',
		'Ремонт планшетов недорого',
		'Услуги по ремонту компьютеров',
		'Срочный ремонт электроники',
		'Ремонт зарядных устройств',
		'Чистка и профилактика ноутбуков',
		'Устранение вирусов и malware',
		'Настройка и ремонт Wi-Fi',
		'Ремонт видеокарт и комплектующих',
		'Замена батареи на смартфоне',
		'Ремонт принтеров и МФУ',
		'Обновление ПО и прошивка',
		'Ремонт телевизоров и мониторов',
		'Диагностика неисправностей техники',
		'Ремонт бытовой электроники',
		'Гарантия на ремонт цифровой техники',
	],
	icons: {
		icon: '/img/logo.jpg',
	},
	openGraph: {
		title: 'Давай сделаем – Ремонт электроники',
		description:
			'Профессиональный ремонт смартфонов, ноутбуков и планшетов в Заславле',
		url: 'https://давай-сделаем.бел',
		siteName: 'Давай сделаем',
		images: [
			{
				url: '/img/logo.jpg',
				width: 1200,
				height: 630,
				alt: 'Мастерская ремонта',
			},
		],
		locale: 'ru_RU',
		type: 'website',
	},
	alternates: {
		canonical: 'https://давай-сделаем.бел',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<Head>
				<meta name='yandex-verification' content='80af4c02ce371e06' />
			</Head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
