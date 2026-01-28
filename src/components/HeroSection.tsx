const HeroSection = () => {
  const achievements = [
    { label: "Forbes Council", icon: "🏆" },
    { label: "₦5B+ Assets", icon: "💎" },
    { label: "200+ Deals", icon: "📈" },
    { label: "10+ Years", icon: "⭐" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: "var(--gradient-mesh)" }}
      />
      
      {/* Decorative elements - static */}
      <div className="absolute top-[15%] right-[10%] w-[400px] h-[400px] rounded-full bg-primary/8 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] pointer-events-none" />
      
      {/* Decorative vertical lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/30 to-transparent hidden lg:block" />
      <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/20 to-transparent hidden lg:block" />
      
      {/* Main content */}
      <div className="container relative z-10 px-6 sm:px-8 lg:px-12 pt-28 pb-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Two-column editorial layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Column - Typography & Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              
              {/* Eyebrow */}
              <div className="mb-8 inline-flex items-center gap-4">
                <span className="hidden lg:block h-px w-16 bg-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-primary">
                  Real Estate Strategist
                </span>
              </div>

              {/* Name - Large stacked typography */}
              <div className="mb-6">
                <h1 className="font-display leading-[0.9]">
                  <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem] font-medium text-foreground tracking-tight">
                    Wale
                  </span>
                  <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-[7rem] font-medium text-shimmer tracking-tight">
                    Tomtom
                  </span>
                </h1>
              </div>

              {/* Divider line */}
              <div className="w-24 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent mb-6 mx-auto lg:mx-0" />

              {/* Full name */}
              <p className="text-xs text-muted-foreground tracking-[0.2em] uppercase mb-8">
                Akinwale Matthew Feyiyemi Abidakun
              </p>

              {/* Tagline */}
              <div className="glass-card p-6 mb-10 max-w-md mx-auto lg:mx-0">
                <p className="text-base lg:text-lg text-foreground/85 leading-relaxed">
                  Where sociology meets real estate. Building generational wealth through understanding people and markets.
                </p>
              </div>

              {/* Achievement stats - horizontal */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                {achievements.map((item) => (
                  <div 
                    key={item.label}
                    className="glass-card px-4 py-2.5 flex items-center gap-2"
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="text-xs font-medium tracking-wide text-foreground/80">{item.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#business"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium tracking-wide rounded-full overflow-hidden transition-all duration-300 hover:bg-primary"
                >
                  <span>Investor Access</span>
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 14 14" 
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="#about"
                  className="group inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-foreground border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <span>Explore Journey</span>
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              </div>
            </div>

            {/* Right Column - Portrait with decorative frame */}
            <div className="order-1 lg:order-2 relative flex justify-center">
              
              {/* Decorative rings */}
              <div className="absolute -inset-6 sm:-inset-8 rounded-full border border-border/30" />
              <div className="absolute -inset-12 sm:-inset-16 rounded-full border border-dashed border-border/15" />
              <div 
                className="absolute -inset-10 sm:-inset-12 rounded-full border-2 border-primary/25"
                style={{ clipPath: "polygon(0 0, 45% 0, 45% 100%, 0 100%)" }}
              />
              
              {/* Glow behind portrait */}
              <div className="absolute inset-0 scale-75 rounded-full bg-primary/15 blur-[60px]" />

              {/* Profile image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-2xl border-2 border-white/30">
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/15 via-transparent to-white/10 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Wale Tomtom - Real Estate Strategist"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge at bottom */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                <div className="glass-card flex items-center gap-3 px-6 py-3 shadow-xl">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-lg" />
                  <span className="text-xs font-semibold tracking-wider text-foreground uppercase">Forbes Council Member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll</span>
          <div className="w-5 h-9 rounded-full border border-current flex items-start justify-center p-1.5">
            <div className="w-1 h-2 rounded-full bg-current" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
