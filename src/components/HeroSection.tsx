import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const achievements = [
    { label: "Forbes Council", position: "top-[18%] left-[5%]", delay: 0 },
    { label: "₦5B+ Assets", position: "top-[40%] right-[2%]", delay: 0.1 },
    { label: "200+ Deals", position: "bottom-[35%] left-[0%]", delay: 0.2 },
    { label: "10+ Years", position: "bottom-[12%] right-[8%]", delay: 0.3 },
  ];

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex items-center overflow-hidden">
      {/* Mesh gradient background */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: "var(--gradient-mesh)" }}
      />
      
      {/* Animated floating orbs */}
      <motion.div 
        animate={{ 
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, -20, 30, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[80px] pointer-events-none"
      />

      {/* Decorative rotating ring */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-dashed border-primary/10 pointer-events-none hidden lg:block"
      />
      
      {/* Decorative vertical lines */}
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        className="absolute left-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent origin-top hidden lg:block"
      />
      <motion.div 
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
        className="absolute right-[8%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/30 to-transparent origin-top hidden lg:block"
      />
      
      {/* Main content */}
      <motion.div 
        style={{ y, opacity, scale }}
        className="container relative z-10 px-6 sm:px-8 lg:px-12 pt-32 sm:pt-36 lg:pt-40"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Editorial Layout */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-6 items-center min-h-[70vh]">
            
            {/* Left Column - Typography & Info */}
            <div className="lg:col-span-5 order-2 lg:order-1 text-center lg:text-left lg:pr-8">
              
              {/* Eyebrow with animated line */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mb-10 inline-flex items-center gap-4"
              >
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="hidden lg:block h-px w-12 bg-primary origin-left"
                />
                <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                  Real Estate Strategist
                </span>
              </motion.div>

              {/* Name - Dramatic stacked typography */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mb-8"
              >
                <h1 className="font-display leading-[0.85]">
                  <motion.span 
                    initial={{ opacity: 0, y: 40, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground"
                  >
                    Wale
                  </motion.span>
                  <motion.span 
                    initial={{ opacity: 0, y: 40, rotateX: -15 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-shimmer mt-1"
                  >
                    Tomtom
                  </motion.span>
                </h1>
              </motion.div>

              {/* Animated divider */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="w-20 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent mb-8 mx-auto lg:mx-0 origin-left"
              />

              {/* Full name with reveal */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-[11px] text-muted-foreground tracking-[0.2em] uppercase mb-8"
              >
                Akinwale Matthew Feyiyemi Abidakun
              </motion.p>

              {/* Tagline with glass effect */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="glass-card p-5 mb-10 max-w-sm mx-auto lg:mx-0"
              >
                <p className="text-base text-foreground/80 leading-relaxed">
                  Where sociology meets real estate. Building wealth through understanding people.
                </p>
              </motion.div>

              {/* CTAs with premium hover effects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  href="#business"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium tracking-wide rounded-full overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10">Investor Access</span>
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 14 14" 
                    fill="none"
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <motion.div
                    className="absolute inset-0 bg-primary"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#about"
                  className="group inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-foreground border border-border rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-500 backdrop-blur-sm"
                >
                  <span>Explore Journey</span>
                  <motion.span 
                    className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -5 }}
                    whileHover={{ x: 0 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>
            </div>

            {/* Right Column - Large Circular Portrait with effects */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative flex justify-center lg:justify-end">
              
              {/* Floating achievement badges with glassmorphism */}
              <div className="absolute inset-0 hidden lg:block">
                {achievements.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + item.delay }}
                    className={`absolute ${item.position}`}
                  >
                    <motion.div 
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                      className="glass-card px-5 py-2.5 shadow-lg"
                    >
                      <span className="text-xs font-medium tracking-wide text-foreground/80">{item.label}</span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Main portrait container with glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Glow effect behind portrait */}
                <div className="absolute inset-0 scale-90 rounded-full bg-primary/20 blur-[60px] animate-pulse-glow" />
                
                {/* Outer decorative ring - animated */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 1.5, delay: 0.6 }}
                  className="absolute -inset-8 sm:-inset-10 rounded-full border border-border/40"
                />
                
                {/* Second ring with gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="absolute -inset-16 sm:-inset-20 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, transparent 30%, hsl(38, 45%, 45%, 0.1) 50%, transparent 70%)"
                  }}
                />
                
                {/* Dashed orbit ring - rotating */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-12 sm:-inset-16 rounded-full border border-dashed border-border/20"
                />
                
                {/* Accent arc with glow */}
                <motion.div
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{ opacity: 0.8, rotate: 0 }}
                  transition={{ duration: 1.5, delay: 0.7 }}
                  className="absolute -inset-10 sm:-inset-14 rounded-full border-2 border-primary/30"
                  style={{ 
                    clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                    filter: "drop-shadow(0 0 10px hsl(38, 50%, 50%, 0.3))"
                  }}
                />

                {/* Profile image with premium styling */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden shadow-2xl border-2 border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-white/10 z-10" />
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                    alt="Wale Tomtom - Real Estate Strategist"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom accent badge - glassmorphism */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2"
                >
                  <div className="glass-card flex items-center gap-3 px-6 py-3 shadow-xl">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2.5 h-2.5 rounded-full bg-primary shadow-lg"
                      style={{ boxShadow: "0 0 10px hsl(38, 50%, 50%, 0.5)" }}
                    />
                    <span className="text-xs font-semibold tracking-wider text-foreground uppercase">Forbes Council</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Mobile achievements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-24 left-0 right-0 flex justify-center gap-6 lg:hidden"
              >
                {achievements.slice(0, 3).map((item, index) => (
                  <motion.span
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                    className="text-[10px] font-medium tracking-wide text-muted-foreground glass-card px-3 py-1.5"
                  >
                    {item.label}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator - refined with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="group flex flex-col items-center gap-4 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-[10px] uppercase tracking-[0.25em] font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border border-current flex items-start justify-center p-2"
          >
            <motion.div 
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-current"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
