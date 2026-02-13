import { useState, useEffect } from 'react';
import { TraderCard } from './components/TraderCard';
import { TickerTape } from './components/TickerTape';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import './styles.css';

export interface Trader {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  roi: number;
  winRate: number;
  totalTrades: number;
  specialty: string;
  rank: number;
  pnl: string;
  streak: number;
}

const traders: Trader[] = [
  { id: 1, name: "Marcus Chen", handle: "@ghostchain", avatar: "MC", roi: 847.2, winRate: 94.3, totalTrades: 2847, specialty: "Derivatives", rank: 1, pnl: "+$12.4M", streak: 23 },
  { id: 2, name: "Elena Voss", handle: "@vossquant", avatar: "EV", roi: 623.8, winRate: 91.7, totalTrades: 1923, specialty: "Forex", rank: 2, pnl: "+$8.7M", streak: 18 },
  { id: 3, name: "Raj Patel", handle: "@alpharaj", avatar: "RP", roi: 512.4, winRate: 89.2, totalTrades: 3421, specialty: "Crypto", rank: 3, pnl: "+$6.2M", streak: 15 },
  { id: 4, name: "Sofia Andersson", handle: "@nordicwhale", avatar: "SA", roi: 445.6, winRate: 88.9, totalTrades: 1567, specialty: "Options", rank: 4, pnl: "+$5.1M", streak: 12 },
  { id: 5, name: "James Wright", handle: "@wrightmoves", avatar: "JW", roi: 398.2, winRate: 87.4, totalTrades: 2156, specialty: "Equities", rank: 5, pnl: "+$4.3M", streak: 9 },
  { id: 6, name: "Yuki Tanaka", handle: "@tokyoalpha", avatar: "YT", roi: 356.9, winRate: 86.1, totalTrades: 1834, specialty: "Futures", rank: 6, pnl: "+$3.8M", streak: 11 },
];

function App() {
  const [loaded, setLoaded] = useState(false);
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    setLoaded(true);
  }, []);

  const specialties = ['all', ...new Set(traders.map(t => t.specialty))];
  const filteredTraders = filter === 'all' ? traders : traders.filter(t => t.specialty === filter);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Ambient Glow */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-80 h-80 bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

      <TickerTape />

      <main className="relative z-10">
        <HeroSection loaded={loaded} />

        <StatsBar />

        {/* Filter Section */}
        <section className="px-4 md:px-8 lg:px-16 py-8 md:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
              {specialties.map((spec) => (
                <button
                  key={spec}
                  onClick={() => setFilter(spec)}
                  className={`px-4 md:px-6 py-2 md:py-3 font-mono text-xs md:text-sm uppercase tracking-wider transition-all duration-300 min-h-[44px] ${
                    filter === spec
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                      : 'bg-white/5 text-gray-400 border border-white/10 hover:border-amber-500/30 hover:text-amber-300'
                  }`}
                >
                  {spec}
                </button>
              ))}
            </div>

            {/* Traders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {filteredTraders.map((trader, index) => (
                <TraderCard
                  key={trader.id}
                  trader={trader}
                  index={index}
                  loaded={loaded}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="px-4 md:px-8 lg:px-16 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-mono text-amber-500/60 text-xs md:text-sm tracking-[0.3em] mb-4 md:mb-6">
              EXCLUSIVE ACCESS
            </p>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 tracking-wide">
              JOIN THE ELITE
            </h2>
            <p className="font-serif text-base md:text-lg text-gray-400 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto italic px-4">
              "The market rewards those who see what others cannot.
              Become a member and learn from the best."
            </p>
            <button className="group relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-amber-600 to-amber-500 text-black font-mono text-sm md:text-base uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] min-h-[56px]">
              <span className="relative z-10">Request Invitation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-300 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-4 md:px-8 py-6 md:py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[10px] md:text-xs text-gray-600 tracking-wider">
            ALPHA LEADERBOARD v2.4.1
          </div>
          <div className="font-mono text-[10px] md:text-xs text-gray-600 tracking-wider text-center">
            Requested by @vladyy__01 · Built by @clonkbot
          </div>
          <div className="font-mono text-[10px] md:text-xs text-gray-600 tracking-wider">
            {new Date().getFullYear()} ALL RIGHTS RESERVED
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
