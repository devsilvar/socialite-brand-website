import { motion } from "framer-motion";
import { ChevronDown, Sparkles, Award, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle gradient background */}
      <div 
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Elegant pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }}
      />

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full bg-primary/15 blur-3xl"
      />

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Pre-heading badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Forbes Business Council Member</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] mb-6"
          >
            The Intersection of{" "}
            <span className="text-gradient-gold">Sociology</span>
            <br />
            and Real Estate Strategy
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Bridging institutional finance and property markets across two continents. 
            From the boardrooms of Leeds to the frontlines of Nigerian real estate.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#business"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              Access Investor Vault
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#about"
              className="inline-flex items-center gap-2 border-2 border-border text-foreground px-8 py-4 text-sm font-semibold tracking-wide rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
            >
              Explore Journey
            </motion.a>
          </motion.div>

          {/* Credentials bar */}
          <motion.div
            variants={itemVariants}
            className="mt-20 pt-10"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16">
              <motion.div
                whileHover={{ y: -4 }}
                className="text-center group cursor-default"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <p className="text-3xl sm:text-4xl font-serif text-foreground">10+</p>
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Years Experience</p>
              </motion.div>
              
              <div className="h-12 w-px bg-border hidden sm:block" />
              
              <motion.div
                whileHover={{ y: -4 }}
                className="text-center group cursor-default"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <p className="text-3xl sm:text-4xl font-serif text-foreground">₦B+</p>
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Assets Managed</p>
              </motion.div>
              
              <div className="h-12 w-px bg-border hidden sm:block" />
              
              <motion.div
                whileHover={{ y: -4 }}
                className="text-center group cursor-default"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary" />
                  <p className="text-3xl sm:text-4xl font-serif text-primary">Forbes</p>
                </div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Business Council</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest font-medium">Discover</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
