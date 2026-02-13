import type { Trader } from '../App';

interface TraderCardProps {
  trader: Trader;
  index: number;
  loaded: boolean;
}

export function TraderCard({ trader, index, loaded }: TraderCardProps) {
  const getRankBadge = (rank: number) => {
    if (rank === 1) return { bg: 'bg-gradient-to-br from-amber-400 to-amber-600', text: 'text-black', glow: true };
    if (rank === 2) return { bg: 'bg-gradient-to-br from-gray-300 to-gray-500', text: 'text-black', glow: false };
    if (rank === 3) return { bg: 'bg-gradient-to-br from-amber-700 to-amber-900', text: 'text-amber-100', glow: false };
    return { bg: 'bg-white/10', text: 'text-gray-400', glow: false };
  };

  const badge = getRankBadge(trader.rank);

  return (
    <div
      className={`card-holographic group relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 p-4 md:p-6 transition-all duration-500 hover:border-amber-500/30 hover:bg-white/[0.06] ${
        loaded ? 'animate-fade-slide-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${0.9 + index * 0.1}s` }}
    >
      {/* Top Row: Avatar + Rank */}
      <div className="flex items-start justify-between mb-4 md:mb-6">
        <div className="flex items-center gap-3 md:gap-4">
          {/* Avatar */}
          <div className="relative">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center border border-amber-500/20">
              <span className="font-display text-lg md:text-xl text-amber-400">
                {trader.avatar}
              </span>
            </div>
            {trader.rank <= 3 && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-amber-500 flex items-center justify-center">
                <span className="text-[8px] md:text-[10px] text-black font-bold">
                  {trader.rank}
                </span>
              </div>
            )}
          </div>

          {/* Name + Handle */}
          <div>
            <h3 className="font-display text-lg md:text-xl text-white tracking-wide group-hover:text-amber-300 transition-colors">
              {trader.name}
            </h3>
            <p className="font-mono text-[10px] md:text-xs text-amber-500/60">
              {trader.handle}
            </p>
          </div>
        </div>

        {/* Rank Badge */}
        <div
          className={`${badge.bg} ${badge.text} ${
            badge.glow ? 'rank-glow' : ''
          } w-10 h-10 md:w-12 md:h-12 flex items-center justify-center`}
        >
          <span className="font-display text-xl md:text-2xl">#{trader.rank}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
        <div className="bg-black/30 p-2 md:p-3 border-l-2 border-emerald-500/50">
          <p className="font-mono text-[10px] md:text-xs text-gray-500 mb-0.5 md:mb-1">ROI</p>
          <p className="font-display text-xl md:text-2xl text-emerald-400">
            +{trader.roi}%
          </p>
        </div>
        <div className="bg-black/30 p-2 md:p-3 border-l-2 border-amber-500/50">
          <p className="font-mono text-[10px] md:text-xs text-gray-500 mb-0.5 md:mb-1">Win Rate</p>
          <p className="font-display text-xl md:text-2xl text-amber-400">
            {trader.winRate}%
          </p>
        </div>
      </div>

      {/* Bottom Stats Row */}
      <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-white/5">
        <div className="flex items-center gap-4 md:gap-6">
          <div>
            <p className="font-mono text-[8px] md:text-[10px] text-gray-600 uppercase tracking-wider">
              P&L
            </p>
            <p className="font-mono text-xs md:text-sm text-emerald-400">{trader.pnl}</p>
          </div>
          <div>
            <p className="font-mono text-[8px] md:text-[10px] text-gray-600 uppercase tracking-wider">
              Trades
            </p>
            <p className="font-mono text-xs md:text-sm text-gray-300">
              {trader.totalTrades.toLocaleString()}
            </p>
          </div>
          <div className="hidden sm:block">
            <p className="font-mono text-[8px] md:text-[10px] text-gray-600 uppercase tracking-wider">
              Streak
            </p>
            <p className="font-mono text-xs md:text-sm text-amber-400">{trader.streak}W</p>
          </div>
        </div>

        <div className="px-2 md:px-3 py-1 bg-white/5 border border-white/10">
          <span className="font-mono text-[10px] md:text-xs text-gray-400">
            {trader.specialty}
          </span>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      </div>
    </div>
  );
}
