import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BookOpen, TrendingUp, MapPin, Mail } from "lucide-react";

const DispatchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const articles = [
    {
      category: "Ondo Vision",
      icon: MapPin,
      title: "Quality Leadership for Ondo State's Future",
      excerpt: "A vision for developmental leadership that prioritizes infrastructure, youth empowerment, and sustainable growth.",
      date: "Ongoing Initiative",
    },
    {
      category: "Industry Insights",
      icon: TrendingUp,
      title: "Navigating Nigeria's Remedial Asset Market",
      excerpt: "Understanding the opportunities within distressed property portfolios and institutional liquidation.",
      date: "Market Analysis",
    },
    {
      category: "Thought Leadership",
      icon: BookOpen,
      title: "The Sociology of Real Estate Investment",
      excerpt: "How understanding human behavior transforms property investment strategies in emerging markets.",
      date: "Forbes Contribution",
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
    <section id="dispatch" className="py-24 sm:py-32 bg-card" ref={ref}>
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
          >
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 px-4 py-2 bg-primary/10 rounded-full">
                The Dispatch
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground">
                Insights & Updates
              </h2>
            </div>
            <motion.a
              whileHover={{ x: 4 }}
              href="#"
              className="inline-flex items-center gap-2 text-primary hover:text-gold-dark transition-colors text-sm font-semibold tracking-wide"
            >
              View All
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          <div className="line-gold mb-16" />

          {/* Articles grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-3 gap-6"
          >
            {articles.map((article) => (
              <motion.article
                key={article.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group bg-background rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Category header */}
                <div className="p-6 border-b border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <article.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{article.category}</span>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <p className="text-xs font-semibold text-primary">{article.date}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Subscribe CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <div className="bg-background rounded-3xl border border-border p-10 sm:p-14 max-w-2xl mx-auto shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                Stay Informed
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">
                Join the Dispatch
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Receive market insights, investment opportunities, and exclusive updates 
                directly from Wale Tomtom.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 bg-card rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-wide rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl transition-all"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DispatchSection;
