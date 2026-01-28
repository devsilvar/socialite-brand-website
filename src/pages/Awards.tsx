import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const majorAwards = [
    {
      title: "Forbes Business Council",
      year: "2022",
      organization: "Forbes Media LLC",
      description: "Inducted as a distinguished member of the Forbes Business Council, joining an exclusive community of successful business leaders and entrepreneurs worldwide.",
      featured: true,
    },
    {
      title: "Outstanding Youth Personality",
      year: "2019",
      organization: "Nigerian Leadership Awards",
      description: "Recognized for exceptional entrepreneurship and contributions to Nigeria's real estate sector as a young business leader.",
      featured: true,
    },
    {
      title: "Real Estate Excellence Award",
      year: "2023",
      organization: "Real Estate Developers Association of Nigeria",
      description: "Honored for pioneering work in distressed asset management and institutional property solutions across Nigeria.",
      featured: false,
    },
    {
      title: "Distinguished Rotarian",
      year: "2018",
      organization: "Rotary Club of Lagos",
      description: "Recognized for exemplary humanitarian service and leadership in community development initiatives.",
      featured: false,
    },
    {
      title: "Leeds Business School Alumni Achievement",
      year: "2015",
      organization: "University of Leeds Alumni Association",
      description: "Honored for outstanding achievement in international business following MSc in International Business Management.",
      featured: false,
    },
    {
      title: "Ondo State Development Champion",
      year: "2020",
      organization: "Ondo State Excellence Awards",
      description: "Recognized for championing quality leadership and development initiatives in Ondo State as a proud Akure native.",
      featured: false,
    },
  ];

  const press = [
    { name: "Forbes Africa", year: "2022" },
    { name: "ThisDay", year: "2023" },
    { name: "City People", year: "2022" },
    { name: "The Sun", year: "2023" },
  ];

  const milestones = [
    { value: "₦10B+", label: "Assets Managed" },
    { value: "500+", label: "Transactions" },
    { value: "20+", label: "Bank Partners" },
    { value: "19+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero - Ultra Minimal */}
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-24" ref={ref}>
        <div className="container px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="label-minimal text-primary mb-6">Recognition</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[0.95] mb-6">
              Awards &<br />
              <span className="text-gradient-gold">Achievements</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              A decade of excellence recognized by prestigious institutions 
              and international organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="pb-20">
        <div className="container px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-start gap-12 sm:gap-16 lg:gap-20 py-8 border-y border-border"
          >
            {milestones.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <p className="text-3xl sm:text-4xl font-display text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Awards */}
      <section className="pb-24">
        <div className="container px-6 sm:px-8 lg:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="label-minimal mb-12"
          >
            Major Honors
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-6">
            {majorAwards.filter(a => a.featured).map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group p-8 sm:p-10 bg-card border border-border rounded-2xl hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-medium tracking-wide text-primary px-3 py-1.5 bg-primary/10 rounded-full">
                    {award.year}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display text-foreground mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-primary font-medium mb-4">{award.organization}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {award.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Awards - Minimal List */}
      <section className="pb-24">
        <div className="container px-6 sm:px-8 lg:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="label-minimal mb-8"
          >
            Additional Recognition
          </motion.p>

          <div className="space-y-0 border-t border-border">
            {majorAwards.filter(a => !a.featured).map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-border hover:bg-secondary/30 transition-colors duration-300 -mx-4 px-4 rounded-lg"
              >
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {award.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{award.organization}</p>
                </div>
                <span className="text-sm font-medium text-muted-foreground mt-2 sm:mt-0">
                  {award.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Section - Super Minimal */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-6 sm:px-8 lg:px-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="label-minimal text-center mb-12"
          >
            Featured In
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16"
          >
            {press.map((item) => (
              <div key={item.name} className="text-center group cursor-default">
                <p className="text-xl sm:text-2xl font-display text-foreground group-hover:text-primary transition-colors">
                  {item.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote - Elegant */}
      <section className="py-24 sm:py-32">
        <div className="container px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-display text-foreground leading-relaxed mb-8">
              "Excellence is not a destination but a continuous journey. Every recognition 
              represents the collective effort of teams and communities who believe in our vision."
            </p>
            <p className="text-sm text-muted-foreground tracking-wide">
              — Akinwale Matthew Feyiyemi Abidakun
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Awards;
