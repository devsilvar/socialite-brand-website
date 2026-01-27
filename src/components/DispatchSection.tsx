import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const DispatchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const articles = [
    {
      category: "Ondo Vision",
      title: "Quality Leadership for Ondo State's Future",
      excerpt: "A vision for developmental leadership that prioritizes infrastructure, youth empowerment, and sustainable growth.",
    },
    {
      category: "Industry",
      title: "Navigating Nigeria's Remedial Asset Market",
      excerpt: "Understanding opportunities within distressed property portfolios and institutional liquidation.",
    },
    {
      category: "Forbes",
      title: "The Sociology of Real Estate Investment",
      excerpt: "How understanding human behavior transforms property investment strategies in emerging markets.",
    },
  ];

  return (
    <section id="dispatch" className="py-24 sm:py-32 bg-secondary/30" ref={ref}>
      <div className="container px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
          >
            <div>
              <p className="label-minimal text-primary mb-6">The Dispatch</p>
              <h2 className="text-4xl sm:text-5xl font-display font-medium text-foreground">
                Insights & Updates
              </h2>
            </div>
            <motion.a
              whileHover={{ x: 4 }}
              href="/awards"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              View All →
            </motion.a>
          </motion.div>

          {/* Articles */}
          <div className="grid lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group bg-background p-8 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-primary mb-4">
                  {article.category}
                </p>
                <h3 className="text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Subscribe */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 bg-background rounded-2xl border border-border p-10 sm:p-12 max-w-2xl mx-auto text-center"
          >
            <p className="label-minimal text-primary mb-4">Stay Informed</p>
            <h3 className="text-2xl font-display font-medium text-foreground mb-4">
              Join the Dispatch
            </h3>
            <p className="text-muted-foreground mb-8">
              Receive market insights and investment opportunities directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 bg-secondary/50 rounded-full border border-border text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-foreground text-background px-6 py-3 text-sm font-medium rounded-full hover:bg-primary transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DispatchSection;
