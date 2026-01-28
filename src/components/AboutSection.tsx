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
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const timeline = [
    { year: "2003", title: "University of Ilorin", desc: "B.Sc. Sociology & Anthropology (2.1)" },
    { year: "2005", title: "Bi-Courtney Group", desc: "Executive Personal Assistant to Dr. Wale Babalakin SAN" },
    { year: "2009", title: "University of Leeds", desc: "MSc International Business Management (Merit)" },
    { year: "2014", title: "Bluemart Realty Ltd", desc: "Founded institutional assets solutions firm" },
    { year: "2022", title: "Forbes Business Council", desc: "Inducted as member" },
  ];

  return (
    <section id="about" className="relative py-32 sm:py-40 overflow-hidden" ref={containerRef}>
      {/* Animated background gradient */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/30 blur-[100px]" />
      </motion.div>

      <div className="container px-6 sm:px-8 lg:px-12 relative z-10" ref={ref}>
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header with reveal animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24"
          >
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="label-minimal text-primary mb-6 flex items-center gap-4"
            >
              <span className="w-8 h-px bg-primary" />
              The Journey
            </motion.p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-medium text-foreground leading-[0.95]">
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
                className="block text-shimmer"
              >
                Institutional Bridge
              </motion.span>
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            
            {/* Left: Bio with premium styling */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed font-light">
                <span className="font-medium">Akinwale Matthew Feyiyemi Abidakun</span>, 
                known as Wale Tomtom, represents the new generation of Nigerian business 
                leadership—born in Akure, Ondo State, and forged through academic excellence 
                and executive mentorship.
              </p>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                Trained as a sociologist at the University of Ilorin (graduating with a 2.1) 
                and refined through International Business Management studies at the University 
                of Leeds (Merit), his unique perspective allows him to see property not just as 
                assets, but as instruments of institutional transformation.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                His nine-year tenure at Bi-Courtney Group, serving as Executive Personal 
                Assistant to Dr. Wale Babalakin SAN, forged an understanding of how major 
                infrastructure developments shape economic landscapes. This experience 
                directly informed his expertise in distressed institutional assets.
              </p>

              {/* Quote with glass effect */}
              <motion.blockquote
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative glass-card p-8 my-10"
              >
                <div className="absolute -left-3 top-6 w-1.5 h-16 bg-gradient-to-b from-primary to-primary/30 rounded-full" />
                <p className="text-xl lg:text-2xl font-display text-foreground italic leading-relaxed">
                  "We don't just sell property; we liquidate non-performing collateral 
                  to restore institutional liquidity for Nigeria's commercial banks."
                </p>
              </motion.blockquote>

              <p className="text-muted-foreground leading-relaxed">
                Today, as CEO of Bluemart Realty Ltd and Tomgate Alliance Ltd, and a 
                distinguished member of the Forbes Business Council, Wale Tomtom stands 
                at the intersection where distressed assets meet strategic investment—serving 
                as the trusted bridge between Nigeria's major commercial banks and discerning 
                property investors.
              </p>
            </motion.div>

            {/* Right: Timeline with enhanced styling */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <p className="label-minimal mb-10 flex items-center gap-4">
                <span className="w-8 h-px bg-muted-foreground" />
                Milestones
              </p>
              
              {/* Timeline line */}
              <div className="absolute left-[39px] top-20 bottom-10 w-px bg-gradient-to-b from-border via-primary/30 to-transparent" />
              
              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="group relative flex gap-8 py-8 hover:bg-gradient-to-r hover:from-primary/5 hover:to-transparent -mx-6 px-6 rounded-2xl transition-all duration-500"
                  >
                    {/* Year with circle marker */}
                    <div className="relative flex-shrink-0">
                      <span className="text-3xl font-display text-primary/80 group-hover:text-primary transition-colors">
                        {item.year}
                      </span>
                      <motion.div 
                        className="absolute -right-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-background border-2 border-primary/50 group-hover:border-primary group-hover:scale-125 transition-all"
                        whileHover={{ scale: 1.5 }}
                      />
                    </div>
                    
                    <div className="pt-1">
                      <h4 className="font-medium text-lg text-foreground group-hover:text-primary transition-colors mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
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
