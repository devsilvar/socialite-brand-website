import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    { year: "2008", title: "University of Ilorin", desc: "B.Sc. Sociology" },
    { year: "2012", title: "Bi-Courtney Group", desc: "Executive training under Dr. Wale Babalakin SAN" },
    { year: "2016", title: "University of Leeds", desc: "International Business Certification" },
    { year: "2018", title: "Bluemart Properties", desc: "Founded distressed assets solutions firm" },
    { year: "2022", title: "Forbes Council", desc: "Inducted as member" },
  ];

  return (
    <section id="about" className="py-24 sm:py-32" ref={ref}>
      <div className="container px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="label-minimal text-primary mb-6">The Journey</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[0.95]">
              Building an<br />
              <span className="text-gradient-gold">Institutional Bridge</span>
            </h2>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left: Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-medium">Akinwale Matthew Feyiyemi Abidakun</span>, 
                known as Wale Tomtom, represents the new generation of Nigerian business 
                leadership—one that bridges academic rigor with commercial acumen.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Trained as a sociologist at the University of Ilorin and refined through 
                international business studies at the University of Leeds, his unique 
                perspective allows him to see property not just as assets, but as 
                instruments of institutional transformation.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                His five-year tenure under the mentorship of Dr. Wale Babalakin SAN 
                at the Bi-Courtney Group forged an understanding of how major 
                infrastructure developments shape economic landscapes.
              </p>

              {/* Quote */}
              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="border-l-2 border-primary pl-6 py-4 my-8"
              >
                <p className="text-xl font-display text-foreground italic leading-relaxed">
                  "We don't just sell property; we liquidate non-performing collateral 
                  to restore institutional liquidity."
                </p>
              </motion.blockquote>

              <p className="text-muted-foreground leading-relaxed">
                Today, as CEO of Bluemart Properties Limited and a distinguished member 
                of the Forbes Business Council, Wale Tomtom stands at the intersection 
                where distressed assets meet strategic investment.
              </p>
            </motion.div>

            {/* Right: Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="label-minimal mb-8">Milestones</p>
              
              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="group flex gap-6 py-6 border-b border-border last:border-0 hover:bg-secondary/30 -mx-4 px-4 rounded-lg transition-colors duration-300"
                  >
                    <span className="text-2xl font-display text-primary min-w-[80px]">
                      {item.year}
                    </span>
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
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
