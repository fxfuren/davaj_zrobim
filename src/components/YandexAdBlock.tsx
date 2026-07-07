import Script from 'next/script'

const yandexRtbBlockId = process.env.NEXT_PUBLIC_YANDEX_RTB_BLOCK_ID

export default function YandexAdBlock() {
	if (!yandexRtbBlockId) {
		return null
	}

	const renderTo = `yandex_rtb_${yandexRtbBlockId}`

	return (
		<>
			<div id={renderTo} />
			<Script id={`yandex-rtb-render-${yandexRtbBlockId}`} strategy='afterInteractive'>
				{`
					window.yaContextCb = window.yaContextCb || [];
					window.yaContextCb.push(() => {
						Ya.Context.AdvManager.render({
							blockId: ${JSON.stringify(yandexRtbBlockId)},
							renderTo: ${JSON.stringify(renderTo)},
						});
					});
				`}
			</Script>
		</>
	)
}
