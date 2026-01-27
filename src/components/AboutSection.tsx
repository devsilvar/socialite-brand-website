import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Globe, Building, Award } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: "2008",
      title: "University of Ilorin",
      description: "B.Sc. Sociology - Where analytical thinking met human behavior understanding",
      icon: GraduationCap,
    },
    {
      year: "2012",
      title: "Bi-Courtney Group",
      description: "5-year executive training under Dr. Wale Babalakin SAN, mastering institutional real estate",
      icon: Briefcase,
    },
    {
      year: "2016",
      title: "University of Leeds",
      description: "International Business certification - Global perspective meets local expertise",
      icon: Globe,
    },
    {
      year: "2018",
      title: "Bluemart Properties",
      description: "Founded Nigeria's premier distressed assets and remedial property solutions firm",
      icon: Building,
    },
    {
      year: "2022",
      title: "Forbes Business Council",
      description: "Inducted as member, representing Nigerian real estate on the global stage",
      icon: Award,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-background" ref={ref}>
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 px-4 py-2 bg-primary/10 rounded-full">
              The Pedigree
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Building an Institutional Bridge
            </h2>
            <div className="line-gold max-w-xs mx-auto" />
          </motion.div>

          {/* Bio content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Akinwale Matthew Feyiyemi Abidakun"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-2">CEO & Principal</p>
                  <p className="font-serif text-2xl text-white">Bluemart Properties Limited</p>
                </div>
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/30 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            </motion.div>

            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                <span className="text-foreground font-semibold">Akinwale Matthew Feyiyemi Abidakun</span>, 
                popularly known as Wale Tomtom, represents the new generation of Nigerian business leadership—
                one that seamlessly bridges academic rigor with commercial acumen.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Trained as a sociologist at the University of Ilorin and refined through international 
                business studies at the University of Leeds, his unique perspective allows him to see 
                property not just as assets, but as instruments of institutional transformation.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                His five-year tenure under the mentorship of Dr. Wale Babalakin SAN at the Bi-Courtney 
                Group forged an understanding of how major infrastructure and real estate developments 
                shape economic landscapes.
              </p>

              <motion.blockquote
                whileHover={{ x: 4 }}
                className="border-l-4 border-primary pl-6 py-4 my-8 bg-primary/5 rounded-r-lg"
              >
                <p className="font-serif text-xl text-foreground italic leading-relaxed">
                  "We don't just sell property; we liquidate non-performing collateral 
                  to restore institutional liquidity."
                </p>
              </motion.blockquote>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Today, as CEO of Bluemart Properties Limited and a distinguished member of the 
                Forbes Business Council, Wale Tomtom stands at the intersection where distressed 
                assets meet strategic investment, creating value for institutions and investors alike.
              </p>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="section-divider mb-16" />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary text-center mb-12">
              The Journey
            </p>
            
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year}
                  variants={itemVariants}
                  className="group relative grid md:grid-cols-[140px_1fr] gap-4 md:gap-8 pb-12 last:pb-0"
                >
                  {/* Year */}
                  <div className="flex items-center gap-3 md:justify-end">
                    <item.icon className="w-5 h-5 text-primary md:hidden" />
                    <span className="text-2xl font-serif text-primary">{item.year}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="relative pl-6 md:pl-10 border-l-2 border-border group-last:border-transparent">
                    {/* Dot with icon */}
                    <div className="absolute left-0 top-1 w-8 h-8 -translate-x-1/2 bg-background border-2 border-primary rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="w-4 h-4" />
                    </div>
                    
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                    >
                      <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
