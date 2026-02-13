interface HeroSectionProps {
  loaded: boolean;
}

export function HeroSection({ loaded }: HeroSectionProps) {
  return (
    <section className="relative px-4 md:px-8 lg:px-16 pt-12 md:pt-20 lg:pt-32 pb-12 md:pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Decorative Elements */}
        <div className="absolute top-8 md:top-16 right-4 md:right-16 lg:right-32">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full live-pulse" />
            <span className="font-mono text-[10px] md:text-xs text-emerald-400 tracking-wider">
              LIVE
            </span>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="space-y-4 md:space-y-6">
          <div
            className={`overflow-hidden ${loaded ? 'hero-reveal' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            <p className="font-mono text-amber-500/60 text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-4">
              ALPHA LEADERBOARD / 2024
            </p>
          </div>

          <div
            className={`overflow-hidden ${loaded ? 'hero-reveal' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] leading-[0.85] tracking-tight">
              <span className="text-white">THE</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                BEST
              </span>
              <br />
              <span className="text-white">TRADERS</span>
            </h1>
          </div>

          <div
            className={`overflow-hidden ${loaded ? 'hero-reveal' : 'opacity-0'}`}
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mt-6 md:mt-8">
              <p className="font-serif text-lg md:text-xl lg:text-2xl text-gray-400 max-w-md italic leading-relaxed">
                "Where legends are made and fortunes are forged in the crucible of the markets."
              </p>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-12 md:w-16 h-[1px] bg-gradient-to-r from-amber-500 to-transparent" />
                <span className="font-mono text-[10px] md:text-xs text-gray-500 tracking-wider">
                  EST. 2024
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div
          className={`mt-12 md:mt-16 lg:mt-24 ${loaded ? 'hero-reveal' : 'opacity-0'}`}
          style={{ animationDelay: '0.6s' }}
        >
          <div className="flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-amber-500/50 via-amber-500/20 to-transparent" />
            <span className="font-mono text-[10px] md:text-xs text-amber-500/40 tracking-[0.2em] md:tracking-[0.3em]">
              TOP PERFORMERS
            </span>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-amber-500/50 via-amber-500/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
