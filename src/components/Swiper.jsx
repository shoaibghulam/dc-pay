
export default function Swiper() {
  return (
<>
<div className="shadow-2xl h-[400px]">
<iframe
  id="iframe-widget"
  src="https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=false&amount=0.1&amountFiat=1500&backgroundColor=FFFFFF&darkMode=false&from=btc&fromFiat=eur&horizontal=false&isFiat=false&lang=en-US&link_id=4f0a88d9c30883&locales=false&logo=false&primaryColor=00C26F&to=eth&toFiat=eth&toTheMoon=true"
  style={{ height: "100%", width: "100%", border: "none" }}
/>
</div>

</>
  
  )
}
