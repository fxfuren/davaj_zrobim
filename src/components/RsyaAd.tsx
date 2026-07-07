'use client'

import Script from 'next/script'

const rsyaBlockId =
	process.env.NEXT_PUBLIC_RSYA_BLOCK_ID ?? 'R-A-00000000-1'
const rsyaContainerId = `yandex_rtb_${rsyaBlockId}`

export default function RsyaAd() {
	return (
		<div className='w-full py-8 flex justify-center'>
			<div className='w-full max-w-5xl'>
				<div id={rsyaContainerId} />
				<Script id='rsya-ad-render' strategy='afterInteractive'>
					{`
						window.yaContextCb = window.yaContextCb || [];
						window.yaContextCb.push(() => {
							if (window.Ya?.Context?.AdvManager) {
								window.Ya.Context.AdvManager.render({
									blockId: '${rsyaBlockId}',
									renderTo: '${rsyaContainerId}',
								});
							}
						});
					`}
				</Script>
			</div>
		</div>
	)
}
