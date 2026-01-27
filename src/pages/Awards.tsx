import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Award, Trophy, Star, Medal, Crown, Globe, Heart, Quote } from "lucide-react";

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const majorAwards = [
    {
      icon: Trophy,
      title: "Forbes Business Council Member",
      year: "2022 - Present",
      organization: "Forbes Media LLC",
      description: "Selected for membership in the exclusive Forbes Business Council, recognizing exceptional business leadership and industry expertise on a global stage.",
      highlight: true,
    },
    {
      icon: Crown,
      title: "Outstanding Youth Personality of the Year",
      year: "2021",
      organization: "Nigerian Youth Excellence Awards",
      description: "Honored for exceptional contributions to youth development, entrepreneurship, and community building across Nigeria.",
      highlight: true,
    },
    {
      icon: Medal,
      title: "Real Estate Excellence Award",
      year: "2023",
      organization: "Nigerian Real Estate Developers Association",
      description: "Recognized for innovation in distressed asset management and pioneering bank-direct property solutions.",
      highlight: false,
    },
    {
      icon: Star,
      title: "Distinguished Rotarian",
      year: "2020",
      organization: "Rotary International District 9125",
      description: "Awarded for outstanding humanitarian service and leadership within the Rotary community.",
      highlight: false,
    },
    {
      icon: Globe,
      title: "International Business Leadership",
      year: "2022",
      organization: "Leeds Business School Alumni Association",
      description: "Honored for demonstrating exceptional business acumen and representing Nigerian excellence in international markets.",
      highlight: false,
    },
    {
      icon: Heart,
      title: "Community Development Champion",
      year: "2021",
      organization: "Ondo State Government",
      description: "Recognized for significant contributions to housing development and youth empowerment in Ondo State.",
      highlight: false,
    },
  ];

  const recognitions = [
    {
      title: "ThisDay Business Profile",
      description: "Featured as one of Nigeria's emerging real estate moguls",
      year: "2023",
    },
    {
      title: "City People Magazine Cover",
      description: "Cover feature highlighting business achievements and lifestyle",
      year: "2022",
    },
    {
      title: "The Sun Newspaper Feature",
      description: "In-depth profile on institutional real estate innovation",
      year: "2023",
    },
    {
      title: "Forbes Africa Spotlight",
      description: "Featured in Forbes Africa's business leaders segment",
      year: "2022",
    },
  ];

  const milestones = [
    { value: "₦5B+", label: "Assets Managed" },
    { value: "200+", label: "Successful Transactions" },
    { value: "15+", label: "Bank Partnerships" },
    { value: "10+", label: "Years of Excellence" },
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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20" ref={ref}>
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 px-4 py-2 bg-primary/10 rounded-full">
              Recognition & Honors
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
              Awards & Achievements
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A decade of excellence recognized by prestigious institutions, 
              industry bodies, and international organizations.
            </p>
            <div className="line-gold max-w-xs mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Milestone Stats */}
      <section className="pb-16">
        <div className="container px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {milestones.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="text-center p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all"
                >
                  <p className="font-serif text-3xl sm:text-4xl text-gradient-gold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Major Awards */}
      <section className="pb-20">
        <div className="container px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Major Honors
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
                Prestigious Awards
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 gap-6"
            >
              {majorAwards.map((award, index) => (
                <motion.div
                  key={award.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group p-8 rounded-2xl transition-all duration-300 ${
                    award.highlight
                      ? "bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 shadow-xl shadow-primary/10"
                      : "bg-card border border-border hover:border-primary/50 hover:shadow-xl"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      award.highlight 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground"
                    }`}>
                      <award.icon
                        className={`w-7 h-7 ${
                          award.highlight ? "text-primary-foreground" : "text-primary group-hover:text-primary-foreground"
                        } transition-colors`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full mb-3">
                        {award.year}
                      </span>
                      <h3 className="font-serif text-xl text-foreground mb-1">
                        {award.title}
                      </h3>
                      <p className="text-sm text-primary font-medium mb-3">{award.organization}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Media Recognition */}
      <section className="py-24 bg-card">
        <div className="container px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                Media Presence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
                Featured In
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {recognitions.map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="p-6 bg-background rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <span className="inline-block text-xs font-semibold text-primary mb-3 px-3 py-1 bg-primary/10 rounded-full">
                    {item.year}
                  </span>
                  <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Quote className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
            <blockquote className="font-serif text-2xl sm:text-3xl text-foreground mb-6 leading-relaxed">
              "Excellence is not a destination but a continuous journey. Every award 
              represents not just personal achievement, but the collective effort of 
              teams, partners, and communities who believe in our vision."
            </blockquote>
            <cite className="text-lg text-muted-foreground font-medium">
              — Akinwale Matthew Feyiyemi Abidakun
            </cite>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Awards;
