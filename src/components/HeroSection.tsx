import { motion } from "framer-motion";

const HeroSection = () => {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "₦5B+", label: "Assets Managed" },
    { value: "200+", label: "Successful Deals" },
  ];

  const credentials = [
    "Forbes Business Council",
    "Bluemart CEO", 
    "Leeds Business School",
    "Rotary International",
  ];

  return (
    <section className="relative min-h-screen flex items-center py-20 lg:py-0 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      <div className="container relative z-10 px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          
          {/* Left Side - Large Circular Profile */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-1"
          >
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px] rounded-full border border-border/60"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] lg:w-[560px] lg:h-[560px] rounded-full border border-border/30"
              />
            </div>

            {/* Main Profile Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Subtle glow */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-xl" />
              
              {/* Profile Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-border/50 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Wale Tomtom"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background border border-border px-6 py-2 rounded-full shadow-lg"
              >
                <p className="text-xs font-medium tracking-wider text-primary uppercase">Forbes Council</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Information */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="order-2 lg:order-2 text-center lg:text-left"
          >
            {/* Pre-label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-6"
            >
              Real Estate Strategist & Investor
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-foreground leading-[1.1] mb-3"
            >
              Wale <span className="text-gradient-gold">Tomtom</span>
            </motion.h1>

            {/* Full name */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-sm text-muted-foreground tracking-wide mb-6"
            >
              Akinwale Matthew Feyiyemi Abidakun
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl font-display text-foreground/80 max-w-md mx-auto lg:mx-0 mb-8"
            >
              The intersection of sociology and real estate strategy.
            </motion.p>

            {/* Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-10"
            >
              {credentials.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  className="px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground border border-border rounded-full hover:border-primary/50 hover:text-foreground transition-all duration-300"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex justify-center lg:justify-start gap-8 mb-10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <p className="text-2xl sm:text-3xl font-display text-foreground leading-none mb-1">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
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
          </motion.div>
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
