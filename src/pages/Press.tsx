import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink, Calendar, Newspaper } from "lucide-react";

const Press = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pressFeatures = [
    {
      publication: "THISDAY",
      title: "Akinwale Abidakun joins Forbes Business Council",
      excerpt: "Akinwale Matthew Feyiyemi Abidakun, widely known by his nickname Wale Tomtom, is a prominent figure in the Nigerian real estate landscape, serving as the founder and President of Bluemart Realty Group. He has been honored and inaugurated into the Forbes Africa Business Council, an acknowledgment of his exemplary track record.",
      date: "January 2026",
      url: "https://www.thisdaylive.com/2026/01/07/akinwale-abidakun-joins-forbes-business-council/",
      featured: true,
    },
    {
      publication: "City People",
      title: "How I Help Banks Sell Properties Of Loan Defaulters",
      excerpt: "Wale Tomtom reveals interesting details about his mind-blowing segment in the real estate game. 'Our company renders services to commercial banks across Nigeria to help them dispose of all their seized collaterised assets, foreclosed properties and mortgaged properties.'",
      date: "June 2022",
      url: "https://www.citypeopleonline.com/how-i-help-banks-sell-properties-of-loan-defaulters/",
      featured: false,
    },
    {
      publication: "Forbes Business Council",
      title: "Member Profile: Akinwale Abidakun",
      excerpt: "Selected for membership based on impressive achievements and influence within the African continent. Recognized for significant contributions to the real estate industry and exemplary track record as a savvy businessman impacting the African economic landscape.",
      date: "2022",
      url: "https://councils.forbes.com/forbesbusinesscouncil",
      featured: true,
    },
    {
      publication: "The Guardian Nigeria",
      title: "UNILORIN @50: Distinguished Alumni Contributing to National Development",
      excerpt: "Featured among distinguished alumni of the University of Ilorin contributing to national development, highlighting his journey from sociology studies to becoming a leading figure in Nigerian real estate.",
      date: "2023",
      url: "https://guardian.ng/specials/unilorin-50-special-focus-on-distinguished-alumni-contributing-to-national-development/",
      featured: false,
    },
    {
      publication: "Leadership Nigeria",
      title: "Real Estate Excellence: The Wale Tomtom Story",
      excerpt: "Profile on Akinwale Abidakun's transformation of Bluemart Realty from a small outfit into a dynamic and respected brand synonymous with excellence in distressed property management within five years.",
      date: "2023",
      url: "#",
      featured: false,
    },
    {
      publication: "The Sun Nigeria",
      title: "Navigating Nigeria's Remedial Asset Market",
      excerpt: "Expert insights on understanding opportunities within distressed property portfolios and institutional liquidation, featuring commentary from industry specialist Wale Tomtom.",
      date: "2024",
      url: "#",
      featured: false,
    },
  ];

  const mediaLogos = [
    { name: "THISDAY", featured: true },
    { name: "City People", featured: true },
    { name: "Forbes", featured: true },
    { name: "The Guardian", featured: false },
    { name: "The Sun", featured: false },
    { name: "Leadership", featured: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="container px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="label-minimal text-primary mb-6 flex items-center gap-4"
            >
              <span className="w-8 h-px bg-primary" />
              Press & Media
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-foreground mb-6"
            >
              Featured In
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-2xl"
            >
              Articles, interviews, and features highlighting Wale Tomtom's expertise in distressed asset management and contributions to Nigerian real estate.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Media Logos */}
      <section className="py-12 border-y border-border/50">
        <div className="container px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
            {mediaLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`text-lg sm:text-xl font-display font-medium ${
                  logo.featured ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {logo.name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Features */}
      <section className="py-24 sm:py-32" ref={ref}>
        <div className="container px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            
            {/* Featured Articles */}
            <div className="grid lg:grid-cols-2 gap-6 mb-12">
              {pressFeatures.filter(item => item.featured).map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-foreground text-background p-8 lg:p-10 rounded-3xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-background/10 rounded-full text-xs font-medium uppercase tracking-wider">
                        {article.publication}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-background/60">
                        <Calendar size={14} />
                        {article.date}
                      </span>
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-medium mb-4 text-background">
                      {article.title}
                    </h3>
                    
                    <p className="text-background/70 mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    {article.url !== "#" && (
                      <motion.a
                        whileHover={{ x: 4 }}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Read Full Article
                        <ExternalLink size={14} />
                      </motion.a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Other Articles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressFeatures.filter(item => !item.featured).map((article, index) => (
                <motion.article
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group glass-card p-6 rounded-2xl hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Newspaper size={16} className="text-primary" />
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">
                      {article.publication}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-medium mb-3 text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{article.date}</span>
                    {article.url !== "#" && (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                      >
                        Read <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Quotes Section */}
      <section className="py-24 sm:py-32 bg-secondary/30">
        <div className="container px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="label-minimal text-primary mb-8"
            >
              In His Words
            </motion.p>
            
            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-display text-foreground mb-8 leading-relaxed"
            >
              "I noticed a gap in this particular sector. Most people didn't know about it until my company came on board. I can say our company propagated sale of seized collaterised property by banks in Nigeria."
            </motion.blockquote>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-muted-foreground">— City People Magazine, 2022</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Media Inquiries CTA */}
      <section className="py-24 sm:py-32">
        <div className="container px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-foreground mb-6">
              Media Inquiries
            </h2>
            <p className="text-muted-foreground mb-8">
              For press inquiries, interview requests, or speaking engagements, please get in touch with our communications team.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="inline-block bg-foreground text-background px-8 py-4 text-sm font-medium rounded-full hover:bg-primary transition-colors"
            >
              Contact for Media
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Press;
