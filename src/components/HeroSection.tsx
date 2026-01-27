import { motion } from "framer-motion";
import { Crown, Award, Building2, GraduationCap, Globe, Users } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const achievements = [
    { icon: Crown, label: "Forbes Business Council", value: "Member" },
    { icon: Building2, label: "Bluemart Properties", value: "CEO" },
    { icon: Award, label: "Youth Personality", value: "Award Winner" },
    { icon: Users, label: "Rotary International", value: "Distinguished" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Elegant gradient background */}
      <div 
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: "48px 48px"
        }}
      />

      {/* Decorative gold accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-3xl"
      />

      {/* Main Content - Portfolio Layout */}
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Photo & Visual Identity */}
            <motion.div variants={itemVariants} className="relative order-2 lg:order-1">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Main portrait */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                      alt="Akinwale Matthew Feyiyemi Abidakun - Wale Tomtom"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                    
                    {/* Name overlay on photo */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-2">
                          CEO & Principal
                        </p>
                        <h2 className="font-serif text-2xl sm:text-3xl text-white mb-1">
                          Bluemart Properties Limited
                        </h2>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Decorative frame */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary/30 rounded-2xl -z-10" />
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                </motion.div>

                {/* Forbes Badge - Floating */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -right-4 top-8 sm:top-16 bg-white shadow-xl rounded-xl p-4 border border-border"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Crown className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Member</p>
                      <p className="font-serif text-sm font-semibold text-foreground">Forbes Council</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Name, Title & Achievements */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              {/* Pre-title badge */}
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                  <Crown className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Forbes Business Council</span>
                </span>
              </motion.div>

              {/* Main Name - THE FOCUS */}
              <motion.div variants={itemVariants} className="mb-6">
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] mb-3">
                  Wale
                  <span className="block text-gradient-gold">Tomtom</span>
                </h1>
                <p className="text-lg text-muted-foreground font-medium">
                  Akinwale Matthew Feyiyemi Abidakun
                </p>
              </motion.div>

              {/* Tagline */}
              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl font-serif text-foreground/80 mb-4 leading-relaxed"
              >
                The Intersection of <span className="text-primary">Sociology</span> and{" "}
                <span className="text-primary">Real Estate Strategy</span>
              </motion.p>

              {/* Bio snippet */}
              <motion.p
                variants={itemVariants}
                className="text-base text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
              >
                From the boardrooms of Leeds to Nigerian real estate frontlines. 
                Bridging institutional finance and property markets across two continents.
              </motion.p>

              {/* Achievement Pills */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              >
                {achievements.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm hover:border-primary/50 hover:shadow-md transition-all duration-300"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#business"
                  className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Access Investor Vault
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 bg-card border-2 border-border text-foreground px-8 py-4 text-sm font-semibold tracking-wide rounded-lg hover:border-primary hover:text-primary transition-all duration-300"
                >
                  Explore Journey
                </motion.a>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                variants={itemVariants}
                className="mt-12 pt-8 border-t border-border"
              >
                <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12">
                  <div className="text-center lg:text-left">
                    <p className="text-3xl sm:text-4xl font-serif text-primary mb-1">10+</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="text-3xl sm:text-4xl font-serif text-primary mb-1">₦B+</p>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">Assets Managed</p>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">UniIlorin • Leeds UK</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest font-medium">Discover More</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-current rounded-full"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
