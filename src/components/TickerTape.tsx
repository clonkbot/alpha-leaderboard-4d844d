export function TickerTape() {
  const tickerItems = [
    { symbol: "BTC", price: "67,842.50", change: "+2.4%" },
    { symbol: "ETH", price: "3,521.20", change: "+1.8%" },
    { symbol: "SPY", price: "512.30", change: "+0.6%" },
    { symbol: "NVDA", price: "875.40", change: "+3.2%" },
    { symbol: "GOLD", price: "2,341.60", change: "+0.3%" },
    { symbol: "EUR/USD", price: "1.0842", change: "-0.2%" },
    { symbol: "TSLA", price: "178.92", change: "-1.4%" },
    { symbol: "AAPL", price: "189.45", change: "+0.8%" },
  ];

  const allItems = [...tickerItems, ...tickerItems];

  return (
    <div className="sticky top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-amber-500/10">
      <div className="overflow-hidden py-2 md:py-3">
        <div className="ticker-scroll flex whitespace-nowrap">
          {allItems.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-4 md:mx-8"
            >
              <span className="font-mono text-[10px] md:text-xs text-amber-500 font-bold tracking-wider">
                {item.symbol}
              </span>
              <span className="font-mono text-[10px] md:text-xs text-gray-300 ml-2 md:ml-3">
                ${item.price}
              </span>
              <span
                className={`font-mono text-[10px] md:text-xs ml-2 ${
                  item.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'
                }`}
              >
                {item.change}
              </span>
              <span className="text-amber-500/20 ml-4 md:ml-8">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
