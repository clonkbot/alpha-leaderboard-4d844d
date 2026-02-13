export function StatsBar() {
  const stats = [
    { label: "Total Volume", value: "$847M+", prefix: "" },
    { label: "Active Traders", value: "12,847", prefix: "" },
    { label: "Avg. Win Rate", value: "89.2%", prefix: "" },
    { label: "Countries", value: "47", prefix: "" },
  ];

  return (
    <section className="px-4 md:px-8 lg:px-16 py-6 md:py-8 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center md:text-left count-up"
              style={{ animationDelay: `${0.8 + index * 0.1}s` }}
            >
              <p className="font-mono text-[10px] md:text-xs text-gray-500 tracking-wider mb-1 md:mb-2 uppercase">
                {stat.label}
              </p>
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-white">
                {stat.prefix}{stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
