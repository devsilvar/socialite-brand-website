const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Subtle background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-mesh)" }}
      />
      
      {/* Decorative background elements */}
      <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      
      {/* Main grid layout */}
      <div className="container relative z-10 px-6 sm:px-8 lg:px-16 pt-32 lg:pt-40 pb-20">
        
        {/* Top section - Eyebrow spanning full width */}
        <div className="flex items-center gap-6 mb-12 lg:mb-16">
          <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent max-w-[100px]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">
            Real Estate Strategist • Forbes Council
          </span>
          <span className="h-px flex-1 bg-gradient-to-l from-border to-transparent max-w-[100px]" />
        </div>

        {/* Magazine-style asymmetric grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0">
          
          {/* Left side - Large name typography */}
          <div className="lg:col-span-7 lg:pr-8">
            
            {/* Massive stacked name */}
            <div className="relative mb-8 lg:mb-12">
              <h1 className="font-display leading-[0.85] tracking-tighter">
                <span className="block text-7xl sm:text-8xl lg:text-[9rem] xl:text-[11rem] font-medium text-foreground">
                  Wale
                </span>
                <span className="block text-7xl sm:text-8xl lg:text-[9rem] xl:text-[11rem] font-medium text-shimmer -mt-2 lg:-mt-6">
                  Tomtom
                </span>
              </h1>
              
              {/* Decorative number overlay */}
              <span className="absolute -right-4 top-0 text-[12rem] lg:text-[20rem] font-display font-bold text-border/20 leading-none pointer-events-none hidden lg:block">
                01
              </span>
            </div>

            {/* Tagline with left border accent */}
            <div className="flex gap-6 items-start mb-10 max-w-lg">
              <div className="w-1 h-16 bg-gradient-to-b from-primary to-primary/20 rounded-full flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg lg:text-xl text-foreground/80 leading-relaxed mb-3">
                  Where sociology meets real estate. Building generational wealth through understanding people.
                </p>
                <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase">
                  Akinwale Matthew Feyiyemi Abidakun
                </p>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mb-10 max-w-md">
              {[
                { value: "10+", label: "Years" },
                { value: "200+", label: "Deals" },
                { value: "₦5B+", label: "Assets" },
                { value: "50+", label: "Partners" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-display font-semibold text-foreground">{stat.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#business"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium tracking-wide rounded-full hover:bg-primary transition-colors duration-300"
              >
                <span>Investor Access</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-foreground border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <span>Explore Journey</span>
              </a>
            </div>
          </div>

          {/* Right side - Image with overlapping elements */}
          <div className="lg:col-span-5 relative lg:-mt-20">
            
            {/* Main image container - slightly rotated for editorial feel */}
            <div className="relative">
              
              {/* Background shape */}
              <div className="absolute inset-0 bg-primary/10 rounded-3xl translate-x-4 translate-y-4" />
              
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Wale Tomtom - Real Estate Strategist"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay text on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="glass-card p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      <span className="text-xs font-semibold tracking-wider uppercase">Forbes Council Member</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating credential cards */}
              <div className="absolute -left-8 top-1/4 glass-card px-4 py-3 shadow-lg hidden lg:block">
                <div className="text-xs font-medium text-foreground/80">Featured in</div>
                <div className="text-sm font-semibold text-foreground mt-1">Forbes Africa</div>
              </div>
              
              <div className="absolute -right-4 bottom-1/3 glass-card px-4 py-3 shadow-lg hidden lg:block">
                <div className="text-xs font-medium text-foreground/80">Expertise</div>
                <div className="text-sm font-semibold text-foreground mt-1">Property Development</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - horizontal scroll hint */}
        <div className="flex items-center justify-between mt-16 lg:mt-24 pt-8 border-t border-border/30">
          <div className="flex items-center gap-8">
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Scroll to explore</span>
            <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
          </div>
          
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="https://linkedin.com" className="text-xs uppercase tracking-wider hover:text-foreground transition-colors">Li</a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a href="https://twitter.com" className="text-xs uppercase tracking-wider hover:text-foreground transition-colors">Tw</a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <a href="https://instagram.com" className="text-xs uppercase tracking-wider hover:text-foreground transition-colors">Ig</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
