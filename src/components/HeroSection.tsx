import { motion } from "framer-motion";

const HeroSection = () => {
  const stats = [
    { value: "10+", label: "Years" },
    { value: "₦5B+", label: "Assets" },
    { value: "200+", label: "Deals" },
  ];

  const credentials = [
    "Forbes Council",
    "Bluemart CEO", 
    "Leeds Business",
    "Rotarian",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Decorative circles */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.03, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full border border-foreground"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.02, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute w-[650px] h-[650px] sm:w-[800px] sm:h-[800px] lg:w-[950px] lg:h-[950px] rounded-full border border-foreground"
        />
      </div>

      <div className="container relative z-10 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Centered Content */}
          <div className="flex flex-col items-center text-center">
            
            {/* Pre-label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs font-medium uppercase tracking-[0.25em] text-primary mb-8"
            >
              Forbes Business Council Member
            </motion.p>

            {/* Circular Profile Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative mb-10"
            >
              {/* Outer ring */}
              <div className="absolute -inset-4 rounded-full border border-border" />
              <div className="absolute -inset-8 rounded-full border border-border/50" />
              
              {/* Stats positioned around circle */}
              <div className="hidden sm:block">
                {stats.map((stat, index) => {
                  const angle = -60 + index * 60; // Position at -60°, 0°, 60°
                  const radius = 180;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="absolute bg-background border border-border rounded-full px-4 py-2 shadow-sm"
                      style={{
                        left: `calc(50% + ${x}px - 40px)`,
                        top: `calc(50% + ${y}px - 20px)`,
                      }}
                    >
                      <p className="text-lg font-display text-foreground leading-none">{stat.value}</p>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Profile Image */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80"
                  alt="Wale Tomtom"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-4"
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-foreground leading-none">
                Wale <span className="text-gradient-gold">Tomtom</span>
              </h1>
            </motion.div>

            {/* Full name */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-muted-foreground tracking-wide mb-6"
            >
              Akinwale Matthew Feyiyemi Abidakun
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl sm:text-2xl font-display text-foreground/80 max-w-lg mb-8"
            >
              The intersection of sociology and real estate strategy.
            </motion.p>

            {/* Credentials Pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-2 mb-10"
            >
              {credentials.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  className="px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground border border-border rounded-full hover:border-primary/50 hover:text-foreground transition-all duration-300"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            {/* Mobile stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-8 mb-10 sm:hidden"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-display text-foreground">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#business"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background text-sm font-medium tracking-wide rounded-full hover:bg-primary transition-colors duration-300"
              >
                Investor Access
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-foreground border border-border rounded-full hover:border-foreground transition-colors duration-300"
              >
                Explore Journey
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-current rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 bg-current rounded-full"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
