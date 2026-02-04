import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.05]);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Text reveal animation for words
  const wordVariants = {
    initial: { opacity: 0, y: 20, filter: "blur(10px)" },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-background">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-40"
          style={{ 
            background: `
              radial-gradient(at 30% 20%, hsl(38, 50%, 85%) 0px, transparent 50%),
              radial-gradient(at 80% 0%, hsl(45, 30%, 90%) 0px, transparent 50%),
              radial-gradient(at 0% 50%, hsl(30, 20%, 92%) 0px, transparent 50%),
              radial-gradient(at 80% 50%, hsl(38, 40%, 88%) 0px, transparent 50%),
              radial-gradient(at 0% 100%, hsl(45, 25%, 95%) 0px, transparent 50%)
            `
          }}
        />
        {/* Animated accent orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 right-[10%] w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 left-[5%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" 
        />
      </div>

      <div className="container relative z-10 px-6 sm:px-8 lg:px-12 pt-24 pb-16">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-12 gap-8 lg:gap-12 min-h-[80vh] items-center"
        >
          {/* Left Content */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 lg:pr-8">
            {/* Eyebrow */}
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-4 mb-6"
            >
              <span className="h-px w-12 bg-primary" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Forbes Council Member
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1 variants={fadeInUp} className="font-display leading-[0.9] tracking-tight mb-6">
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-medium text-foreground">
                Akinwale
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-medium text-primary -mt-1">
                Abidakun
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p variants={fadeInUp} className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8 max-w-md">
              Nigeria's leading institutional asset specialist. Transforming distressed bank properties into strategic investments.
            </motion.p>

            {/* Credentials pills */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 mb-8">
              {[
                { label: "CEO, Bluemart Realty Ltd", icon: "◆" },
                { label: "15+ Years Experience", icon: "◇" },
                { label: "₦10B+ Assets", icon: "○" }
              ].map((item) => (
                <span 
                  key={item.label}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full text-sm text-muted-foreground"
                >
                  <span className="text-primary">{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <a
                href="#business"
                className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium tracking-wide rounded-full hover:bg-primary hover:text-white transition-all duration-300"
              >
                <span>View Portfolio</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium tracking-wide text-foreground border border-border rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <span>Learn More</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Hero Image */}
          <motion.div variants={fadeInUp} className="lg:col-span-7">
            <div className="relative">
              {/* Main image container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, clipPath: "inset(0 0 100% 0)" }}
                animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0 0% 0)" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{ scale }}
                className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/waletom professional phsotoshoot popularly used with blue backgound.jpeg"
                  alt="Akinwale Abidakun - CEO of Bluemart Realty Ltd"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium text-white/80 tracking-wider uppercase">Available for Consultations</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating cards with stagger */}
              <motion.div
                initial={{ opacity: 0, x: 30, rotate: 5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{ y: y1 }}
                className="absolute -left-8 top-1/4 glass-card px-6 py-4 shadow-xl hidden lg:block"
              >
                <div className="text-xs font-medium text-muted-foreground mb-1">Education</div>
                <div className="text-lg font-semibold text-foreground">University of Leeds</div>
                <div className="text-xs text-muted-foreground">MSc International Business</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30, rotate: -5 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                style={{ y: y2 }}
                className="absolute -right-4 bottom-1/3 glass-card px-6 py-4 shadow-xl hidden lg:block"
              >
                <div className="text-xs font-medium text-muted-foreground mb-1">Recognition</div>
                <div className="text-lg font-semibold text-foreground">Forbes Council</div>
                <div className="text-xs text-muted-foreground">Member since 2022</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom section - Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-between mt-16 pt-8 border-t border-border/30"
        >
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {["Fb", "Ig", "Li"].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors px-2 py-1"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-muted-foreground">
            <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center">
              <motion.div 
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-primary rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
