import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
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
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
