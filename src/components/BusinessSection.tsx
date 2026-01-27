import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Landmark, ShieldCheck, TrendingUp, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

const BusinessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Building2,
      title: "Distressed Assets",
      description: "Expert acquisition and disposition of non-performing collateral from major financial institutions.",
    },
    {
      icon: Landmark,
      title: "Bank Partnerships",
      description: "Direct relationships with commercial banks for exclusive access to remedial property portfolios.",
    },
    {
      icon: ShieldCheck,
      title: "Due Diligence",
      description: "Comprehensive title verification and legal clearance ensuring secure transactions.",
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic guidance for institutional and private investors seeking below-market opportunities.",
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
    <section id="business" className="py-24 sm:py-32 bg-card" ref={ref}>
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 px-4 py-2 bg-primary/10 rounded-full">
              Bluemart Properties
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Institutional Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nigeria's leading specialist in distressed and remedial property assets. 
              We transform non-performing collateral into investment opportunities.
            </p>
            <div className="line-gold max-w-xs mx-auto mt-8" />
          </motion.div>

          {/* Services grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-6 mb-20"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-8 bg-background rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Investor Vault CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-charcoal to-slate-dark p-10 sm:p-14 text-center"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Private Access</span>
              </div>
              
              <h3 className="font-serif text-3xl sm:text-4xl text-white mb-4">
                The Investor Vault
              </h3>
              <p className="text-white/70 mb-10 text-lg leading-relaxed">
                Access exclusive listings of bank-direct assets below market value. 
                Foreclosed properties, mortgaged assets, and remedial portfolios available 
                only to registered investors.
              </p>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 text-sm font-semibold tracking-wide rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                Join Private Broadcast List
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <p className="text-xs text-white/50 mt-6">
                Registration required. Verified credentials only.
              </p>
            </div>
          </motion.div>

          {/* B2B Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 pt-16 border-t border-border"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                  For Financial Institutions
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">
                  Partner With Nigeria's Leading Light
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Commercial banks seeking a trusted vendor for distressed property disposition 
                  find in Bluemart Properties a partner with the institutional credibility 
                  and market expertise to deliver results.
                </p>
                <ul className="space-y-4 text-muted-foreground">
                  {[
                    "Rapid liquidation of non-performing collateral",
                    "Transparent reporting and compliance",
                    "Nationwide operational capacity"
                  ].map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-background p-10 rounded-2xl border border-border shadow-lg"
              >
                <p className="font-serif text-2xl text-foreground mb-4">Bank Enquiries</p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  For institutional partnerships and bulk asset disposition discussions, 
                  schedule a confidential consultation.
                </p>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="inline-flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 text-sm font-semibold tracking-wide rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Request Consultation
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
