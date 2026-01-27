import { ArrowRight, BookOpen, TrendingUp, MapPin } from "lucide-react";

const DispatchSection = () => {
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

  return (
    <section id="dispatch" className="py-20 sm:py-32 bg-card">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <p className="text-executive text-primary mb-4">The Dispatch</p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground">
                Insights & Updates
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary hover:text-gold-light transition-colors text-sm font-medium tracking-wide"
            >
              View All
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="line-gold mb-16" />

          {/* Articles grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <article
                key={article.title}
                className="group bg-background border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                {/* Category header */}
                <div className="p-6 border-b border-border flex items-center gap-3">
                  <article.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <span className="text-executive text-muted-foreground">{article.category}</span>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <p className="text-xs text-primary">{article.date}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Subscribe CTA */}
          <div className="mt-16 text-center">
            <div className="bg-background/50 border border-border p-8 sm:p-12 max-w-2xl mx-auto">
              <p className="text-executive text-primary mb-4">Stay Informed</p>
              <h3 className="font-serif text-2xl text-foreground mb-4">
                Join the Dispatch
              </h3>
              <p className="text-muted-foreground mb-6">
                Receive market insights, investment opportunities, and exclusive updates 
                directly from Wale Tomtom.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
                <button className="bg-primary text-primary-foreground px-6 py-3 text-sm font-medium tracking-wide hover:bg-gold-light transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DispatchSection;
