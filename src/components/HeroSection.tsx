import { motion } from "framer-motion";

const HeroSection = () => {
  const achievements = [
    { label: "Forbes Council", position: "top-[15%] left-[8%]" },
    { label: "₦5B+ Assets", position: "top-[35%] right-[5%]" },
    { label: "200+ Deals", position: "bottom-[30%] left-[3%]" },
    { label: "10+ Years", position: "bottom-[15%] right-[10%]" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      
      {/* Decorative vertical line */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent origin-top hidden lg:block"
      />
      
      {/* Main content with proper top spacing for navbar */}
      <div className="container relative z-10 px-6 sm:px-8 lg:px-12 pt-32 sm:pt-36 lg:pt-40">
        <div className="max-w-7xl mx-auto">
          
          {/* Editorial Layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[70vh]">
            
            {/* Left Column - Typography & Info */}
            <div className="lg:col-span-5 order-2 lg:order-1 text-center lg:text-left lg:pr-8">
              
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.3em] text-primary border-b border-primary pb-1">
                  Real Estate Strategist
                </span>
              </motion.div>

              {/* Name - Stacked Typography */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-6"
              >
                <h1 className="font-display leading-[0.9]">
                  <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground">
                    Wale
                  </span>
                  <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-gradient-gold mt-1">
                    Tomtom
                  </span>
                </h1>
              </motion.div>

              {/* Subtle divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-16 h-px bg-border mb-6 mx-auto lg:mx-0 origin-left"
              />

              {/* Full name */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xs text-muted-foreground tracking-[0.15em] uppercase mb-6"
              >
                Akinwale Matthew Feyiyemi Abidakun
              </motion.p>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-base sm:text-lg text-foreground/70 max-w-sm mx-auto lg:mx-0 leading-relaxed mb-10"
              >
                Where sociology meets real estate. Building wealth through understanding people.
              </motion.p>

              {/* CTAs - Stacked on mobile, inline on desktop */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#business"
                  className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-foreground text-background text-sm font-medium tracking-wide rounded-full hover:bg-primary transition-all duration-300"
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
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#about"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium tracking-wide text-foreground border border-border rounded-full hover:border-foreground hover:bg-foreground/5 transition-all duration-300"
                >
                  Explore Journey
                </motion.a>
              </motion.div>
            </div>

            {/* Center Column - Large Circular Portrait */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative flex justify-center lg:justify-end">
              
              {/* Floating achievement badges */}
              <div className="absolute inset-0 hidden lg:block">
                {achievements.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
                    className={`absolute ${item.position}`}
                  >
                    <div className="px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-full shadow-sm">
                      <span className="text-xs font-medium tracking-wide text-muted-foreground">{item.label}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Main portrait container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="relative"
              >
                {/* Outer decorative ring */}
                <motion.div
                  initial={{ opacity: 0, rotate: -10 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 1.2, delay: 0.6 }}
                  className="absolute -inset-6 sm:-inset-8 rounded-full border border-border/40"
                />
                
                {/* Second ring with dots */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -inset-12 sm:-inset-16 rounded-full border border-dashed border-border/30"
                />
                
                {/* Accent arc */}
                <motion.div
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 0.6, rotate: 0 }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  className="absolute -inset-10 sm:-inset-12 rounded-full border-2 border-primary/20"
                  style={{ 
                    clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" 
                  }}
                />

                {/* Profile image */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                    alt="Wale Tomtom - Real Estate Strategist"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom accent badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-5 py-2.5 bg-background border border-border rounded-full shadow-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider text-foreground uppercase">Forbes Council</span>
                </motion.div>
              </motion.div>

              {/* Mobile achievements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-20 left-0 right-0 flex justify-center gap-4 lg:hidden"
              >
                {achievements.slice(0, 3).map((item, index) => (
                  <motion.span
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                    className="text-[10px] font-medium tracking-wide text-muted-foreground"
                  >
                    {item.label}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - refined */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="group flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12M5 11l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
