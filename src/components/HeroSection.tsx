import { motion } from "framer-motion";

const HeroSection = () => {
  const achievements = [
    "Forbes Business Council",
    "Bluemart Properties CEO", 
    "Leeds Business School",
    "Rotary International",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Minimal decorative element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-3xl"
      />

      <div className="container relative z-10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left: Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              {/* Label */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="label-minimal text-primary mb-6"
              >
                Forbes Business Council Member
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-medium text-foreground leading-[0.95] mb-4"
              >
                Wale
                <br />
                <span className="text-gradient-gold">Tomtom</span>
              </motion.h1>

              {/* Full Name */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm text-muted-foreground tracking-wide mb-8"
              >
                Akinwale Matthew Feyiyemi Abidakun
              </motion.p>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl sm:text-2xl font-display text-foreground/80 leading-relaxed mb-10 max-w-xl"
              >
                The intersection of sociology and real estate strategy.
              </motion.p>

              {/* Achievements - Minimal Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-3 mb-12"
              >
                {achievements.map((item, index) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="px-4 py-2 text-xs font-medium tracking-wide text-muted-foreground border border-border rounded-full hover:border-primary/50 hover:text-foreground transition-all duration-300"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#business"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium tracking-wide rounded-full hover:bg-primary transition-colors duration-300"
                >
                  Investor Access
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#about"
                  className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-foreground border border-border rounded-full hover:border-foreground transition-colors duration-300"
                >
                  Explore
                </motion.a>
              </motion.div>
            </div>

            {/* Right: Portrait */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Main Image */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                    alt="Wale Tomtom"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                  
                  {/* Name on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary/90 mb-2">
                      CEO & Principal
                    </p>
                    <p className="font-display text-xl text-white/90">
                      Bluemart Properties
                    </p>
                  </div>
                </div>

                {/* Stats - Minimal floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -bottom-6 -left-6 sm:left-auto sm:-right-6 bg-background border border-border rounded-xl p-5 shadow-xl"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-2xl font-display text-foreground">10+</p>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Years</p>
                    </div>
                    <div className="w-px h-10 bg-border" />
                    <div className="text-center">
                      <p className="text-2xl font-display text-foreground">₦B+</p>
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">Assets</p>
                    </div>
                  </div>
                </motion.div>
              </div>
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
        <a href="#about" className="flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-current rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
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
