import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-heading */}
          <p className="text-executive text-primary mb-6 opacity-0 animate-fade-in">
            Forbes Business Council Member
          </p>

          {/* Main heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6 opacity-0 animate-slide-up delay-100">
            The Intersection of{" "}
            <span className="text-gradient-gold">Sociology</span>
            <br />
            and Real Estate Strategy
          </h1>

          {/* Subtitle */}
          <p className="text-institutional text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-slide-up delay-200">
            Bridging institutional finance and property markets across two continents. 
            From the boardrooms of Leeds to the frontlines of Nigerian real estate.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-slide-up delay-300">
            <a
              href="#business"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide hover:bg-gold-light transition-all duration-300 hover-lift"
            >
              Access Investor Vault
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 text-sm font-medium tracking-wide hover:border-primary hover:text-primary transition-all duration-300"
            >
              Explore Journey
            </a>
          </div>

          {/* Credentials bar */}
          <div className="mt-16 pt-10 border-t border-border opacity-0 animate-fade-in delay-500">
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-muted-foreground">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-serif text-foreground">10+</p>
                <p className="text-xs uppercase tracking-wider mt-1">Years Experience</p>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-serif text-foreground">₦B+</p>
                <p className="text-xs uppercase tracking-wider mt-1">Assets Managed</p>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-serif text-primary">Forbes</p>
                <p className="text-xs uppercase tracking-wider mt-1">Business Council</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-500">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
