import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
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
				<meta
					name='google-site-verification'
					content='ksREfCKWpkEARwo0HDi2d--sAKoaM0KmAaVMCi0EaoE'
				/>
			</Head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Script id='yandex-metrika' strategy='afterInteractive'>
					{`
						(function(m,e,t,r,i,k,a){
							m[i]=m[i]||function(){
								(m[i].a=m[i].a||[]).push(arguments)
							};
							m[i].l=1*new Date();
							for (var j = 0; j < document.scripts.length; j++) {
								if (document.scripts[j].src === r) { return; }
							}
							k=e.createElement(t),a=e.getElementsByTagName(t)[0],
							k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
						})
						(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

						ym(102320198, "init", {
							clickmap:true,
							trackLinks:true,
							accurateTrackBounce:true
						});
					`}
				</Script>

				<noscript>
					<div>
						<img
							src='https://mc.yandex.ru/watch/102320198'
							style={{ position: 'absolute', left: '-9999px' }}
							alt=''
						/>
					</div>
				</noscript>
				{children}
			</body>
		</html>
	)
}
