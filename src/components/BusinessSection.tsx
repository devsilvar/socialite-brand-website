import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const BusinessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Distressed Assets",
      description: "Expert acquisition and disposition of non-performing collateral from major financial institutions.",
    },
    {
      title: "Bank Partnerships",
      description: "Direct relationships with commercial banks for exclusive access to remedial property portfolios.",
    },
    {
      title: "Due Diligence",
      description: "Comprehensive title verification and legal clearance ensuring secure transactions.",
    },
    {
      title: "Investment Advisory",
      description: "Strategic guidance for investors seeking below-market opportunities.",
    },
  ];

  const benefits = [
    "Rapid liquidation of non-performing collateral",
    "Transparent reporting and compliance",
    "Nationwide operational capacity",
  ];

  return (
    <section id="business" className="py-24 sm:py-32 bg-secondary/30" ref={ref}>
      <div className="container px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-20"
          >
            <p className="label-minimal text-primary mb-6">Bluemart Properties</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[0.95] mb-6">
              Institutional<br />
              <span className="text-gradient-gold">Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nigeria's leading specialist in distressed and remedial property assets. 
              We transform non-performing collateral into investment opportunities.
            </p>
          </motion.div>

          {/* Services - Clean Grid */}
          <div className="grid sm:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden mb-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group bg-background p-8 sm:p-10 hover:bg-card transition-colors duration-300"
              >
                <span className="text-xs font-medium text-primary mb-4 block">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Investor Vault - Premium CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative overflow-hidden rounded-2xl bg-foreground p-10 sm:p-16"
          >
            <div className="relative z-10 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-6">
                Private Access
              </p>
              <h3 className="text-3xl sm:text-4xl font-display font-medium text-background mb-4">
                The Investor Vault
              </h3>
              <p className="text-background/70 mb-10 leading-relaxed">
                Access exclusive listings of bank-direct assets below market value. 
                Foreclosed properties and remedial portfolios available only to registered investors.
              </p>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide rounded-full hover:bg-primary/90 transition-colors"
              >
                Join Private List
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </div>
            
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-primary rounded-full" />
              <div className="absolute bottom-1/4 right-1/3 w-48 h-48 border border-primary rounded-full" />
            </div>
          </motion.div>

          {/* B2B Section - Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-24 grid lg:grid-cols-2 gap-16 items-start"
          >
            <div>
              <p className="label-minimal text-primary mb-6">For Institutions</p>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-foreground mb-6">
                Partner With Nigeria's Leading Light
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Commercial banks seeking a trusted vendor for distressed property disposition 
                find in Bluemart Properties a partner with institutional credibility.
              </p>
              <ul className="space-y-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-card p-8 sm:p-10 rounded-2xl border border-border">
              <h4 className="text-xl font-medium text-foreground mb-3">Bank Enquiries</h4>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                For institutional partnerships and bulk asset disposition, schedule a confidential consultation.
              </p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-foreground border border-border rounded-full hover:border-foreground transition-colors"
              >
                Request Consultation
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
