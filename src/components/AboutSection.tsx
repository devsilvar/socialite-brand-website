import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const timeline = [
    { year: "2003", title: "University of Ilorin", desc: "B.Sc. Sociology & Anthropology (2.1)", image: "/waletom at lagos business school photoshoot.jpeg" },
    { year: "2005", title: "Bi-Courtney Group", desc: "Executive Assistant to Dr. Wale Babalakin SAN", image: "/waletom professional shoot image.jpeg" },
    { year: "2009", title: "University of Leeds", desc: "MSc International Business Management (Merit)", image: "/waletom at graduation day in lagos business school ceremony.jpeg" },
    { year: "2014", title: "Bluemart Realty Ltd", desc: "Founded institutional assets solutions firm", image: "/wale-tomtom.jpg" },
    { year: "2022", title: "Forbes Business Council", desc: "Inducted as member", image: "/waletom with an award in albert ogunde studio.jpeg" },
  ];

  // Clip path reveal for images
  const clipVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: { 
      clipPath: "inset(0 0% 0 0)",
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Blur reveal for text
  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(20px)", transform: "scale(1.1)" },
    visible: { 
      opacity: 1, 
      filter: "blur(0px)", 
      transform: "scale(1)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden" ref={containerRef}>
      {/* Animated background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/20 blur-[100px]" />
      </motion.div>

      <div className="container px-6 sm:px-8 lg:px-12 relative z-10" ref={ref}>
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
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
              className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-4 flex items-center gap-4"
            >
              <span className="w-12 h-px bg-primary" />
              About
            </motion.p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[0.95]">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="block"
              >
                Building an
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block text-primary"
              >
                Institutional Bridge
              </motion.span>
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Bio with premium styling */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed font-light">
                <span className="font-medium">Akinwale Matthew Feyiyemi Abidakun</span> 
                represents the new generation of Nigerian business leadership—born in Akure, 
                Ondo State, and forged through academic excellence and executive mentorship.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={clipVariants}
                  className="aspect-[4/3] rounded-xl overflow-hidden"
                >
                  <img 
                    src="/waletom in paris.jpeg" 
                    alt="International business"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={clipVariants}
                  transition={{ delay: 0.2 }}
                  className="aspect-[4/3] rounded-xl overflow-hidden"
                >
                  <img 
                    src="/waletom with the popular tony elumelu at uba.jpeg" 
                    alt="Strategic partnership"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                Trained as a sociologist at the University of Ilorin (graduating with a 2.1) 
                and refined through International Business Management studies at the University 
                of Leeds (Merit), his unique perspective allows him to see property not just as 
                assets, but as instruments of institutional transformation.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                His nine-year tenure at Bi-Courtney Group, serving as Executive Personal 
                Assistant to Dr. Wale Babalakin SAN, forged an understanding of how major 
                infrastructure developments shape economic landscapes.
              </p>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative p-8 bg-secondary/30 rounded-2xl border-l-4 border-primary"
              >
                <p className="text-lg lg:text-xl font-display text-foreground italic leading-relaxed">
                  "We don't just sell property; we liquidate non-performing collateral 
                  to restore institutional liquidity for Nigeria's commercial banks."
                </p>
              </motion.blockquote>

              <p className="text-muted-foreground leading-relaxed">
                Today, as CEO of Bluemart Realty Ltd, he stands at the intersection where 
                distressed assets meet strategic investment—serving as the trusted bridge 
                between Nigeria's major commercial banks and discerning property investors.
              </p>
            </motion.div>

            {/* Right: Timeline with images */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-10 flex items-center gap-4">
                <span className="w-12 h-px bg-primary" />
                Journey
              </p>
              
              {/* Timeline line */}
              <div className="absolute left-[59px] top-24 bottom-10 w-px bg-gradient-to-b from-border via-primary/30 to-transparent" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="group relative flex gap-6 p-4 -mx-4 rounded-2xl hover:bg-secondary/20 transition-all duration-500"
                  >
                    {/* Year with circle marker */}
                    <div className="relative flex-shrink-0">
                      <span className="text-4xl font-display text-primary/80 group-hover:text-primary transition-colors">
                        {item.year}
                      </span>
                      <motion.div 
                        className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary/50 group-hover:border-primary group-hover:scale-125 transition-all"
                        whileHover={{ scale: 1.5 }}
                      />
                    </div>
                    
                    {/* Image thumbnail */}
                    <div className="relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-primary/20" />
                    </div>
                    
                    <div className="pt-2">
                      <h4 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
