import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CredentialsSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const credentials = [
    {
      title: "Forbes Business Council",
      description: "Distinguished member representing Nigerian real estate excellence globally",
      featured: true,
    },
    {
      title: "Outstanding Youth Personality",
      description: "Recognized for exceptional contributions to business and community",
      featured: false,
    },
    {
      title: "Distinguished Rotarian",
      description: "Active member committed to humanitarian service and leadership",
      featured: false,
    },
    {
      title: "Akure Native & Ondo Advocate",
      description: "Championing quality leadership and development in Ondo State",
      featured: false,
    },
  ];

  const press = [
    { 
      name: "THISDAY", 
      logo: (
        <svg viewBox="0 0 120 30" className="h-6 sm:h-8 w-auto">
          <text x="0" y="24" className="fill-current font-bold text-xl tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            THISDAY
          </text>
        </svg>
      )
    },
    { 
      name: "City People", 
      logo: (
        <svg viewBox="0 0 140 30" className="h-6 sm:h-8 w-auto">
          <text x="0" y="22" className="fill-current font-bold" style={{ fontFamily: 'Arial Black, sans-serif', fontSize: '18px' }}>
            CITY PEOPLE
          </text>
        </svg>
      )
    },
    { 
      name: "The Sun", 
      logo: (
        <svg viewBox="0 0 100 35" className="h-7 sm:h-9 w-auto">
          <circle cx="17" cy="17" r="12" className="fill-current opacity-90" />
          <text x="35" y="24" className="fill-current font-bold" style={{ fontFamily: 'Times New Roman, serif', fontSize: '20px' }}>
            The Sun
          </text>
        </svg>
      )
    },
    { 
      name: "Forbes", 
      logo: (
        <svg viewBox="0 0 100 28" className="h-6 sm:h-7 w-auto">
          <text x="0" y="22" className="fill-current" style={{ fontFamily: 'Georgia, serif', fontWeight: '400', fontSize: '24px', letterSpacing: '1px' }}>
            Forbes
          </text>
        </svg>
      )
    },
  ];

  return (
    <section id="credentials" className="relative py-32 sm:py-40 overflow-hidden" ref={containerRef}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      {/* Decorative elements */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 pointer-events-none opacity-60"
      >
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-secondary/30 blur-[80px]" />
      </motion.div>

      <div className="container px-6 sm:px-8 lg:px-12 relative z-10" ref={ref}>
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="label-minimal text-primary mb-6 flex items-center gap-4"
            >
              <span className="w-8 h-px bg-primary" />
              Recognition
            </motion.p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-foreground">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block"
              >
                Awards &
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block text-shimmer"
              >
                Credentials
              </motion.span>
            </h2>
          </motion.div>

          {/* Credentials - Premium Cards */}
          <div className="grid lg:grid-cols-2 gap-6 mb-24">
            {credentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className={`group relative p-8 lg:p-10 rounded-3xl border overflow-hidden transition-all duration-500 ${
                  item.featured 
                    ? "bg-foreground text-background border-foreground" 
                    : "glass-card hover:border-primary/30"
                }`}
              >
                {/* Glow effect for featured */}
                {item.featured && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
                )}
                
                <div className="relative z-10">
                  <h3 className={`text-xl lg:text-2xl font-medium mb-3 ${
                    item.featured ? "text-background" : "text-foreground group-hover:text-primary transition-colors"
                  }`}>
                    {item.title}
                  </h3>
                  <p className={item.featured ? "text-background/70 text-lg" : "text-muted-foreground text-lg"}>
                    {item.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 rounded-tl-full ${
                  item.featured ? "bg-primary/10" : "bg-primary/5 opacity-0 group-hover:opacity-100"
                } transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>

          {/* Press - Marquee style logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-card py-16 px-8 rounded-3xl overflow-hidden"
          >
            <p className="label-minimal text-center mb-12">Featured In</p>
            <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16 lg:gap-24">
              {press.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="text-foreground/40 hover:text-foreground transition-all duration-500 cursor-default"
                  title={item.name}
                >
                  {item.logo}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Heritage Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-32 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
          >
            <div className="order-2 lg:order-1">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="label-minimal text-primary mb-8 flex items-center gap-4"
              >
                <span className="w-8 h-px bg-primary" />
                Heritage
              </motion.p>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-foreground mb-8 leading-[0.95]">
                Rooted in Akure, Building for Tomorrow
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                A proud native of Akure, Ondo State, Wale Tomtom's vision extends beyond 
                commercial success to community transformation. Married to the lovely Oyeteju, 
                and blessed with two sons, his family values mirror his professional ethos.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                His commitment to Ondo State's development reflects a deeper understanding 
                that true leadership means investing in the next generation.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute inset-0 scale-95 rounded-3xl bg-primary/10 blur-[40px]" />
                
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-white/10 z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
                    alt="Family and community"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
