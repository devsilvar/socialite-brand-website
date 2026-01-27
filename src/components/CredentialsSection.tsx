import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, MapPin, Crown, Star } from "lucide-react";

const CredentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const credentials = [
    {
      icon: Crown,
      title: "Forbes Business Council",
      description: "Distinguished member representing Nigerian real estate excellence on the global stage",
      highlight: true,
    },
    {
      icon: Award,
      title: "Outstanding Youth Personality",
      description: "Recognized for exceptional contributions to business and community development",
      highlight: false,
    },
    {
      icon: Users,
      title: "Distinguished Rotarian",
      description: "Active member committed to humanitarian service and community leadership",
      highlight: false,
    },
    {
      icon: MapPin,
      title: "Akure Native & Ondo Advocate",
      description: "Championing quality leadership and development in Ondo State",
      highlight: false,
    },
  ];

  const mediaFeatures = [
    { name: "THISDAY", type: "National Daily" },
    { name: "City People", type: "Society Magazine" },
    { name: "The Sun", type: "National Newspaper" },
    { name: "Forbes", type: "Business Council" },
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
    <section id="credentials" className="py-24 sm:py-32 bg-background" ref={ref}>
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
              Recognition
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Awards & Credentials
            </h2>
            <div className="line-gold max-w-xs mx-auto" />
          </motion.div>

          {/* Credentials grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 gap-6 mb-20"
          >
            {credentials.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group p-8 rounded-2xl transition-all duration-300 ${
                  item.highlight 
                    ? "bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 shadow-xl shadow-primary/10" 
                    : "bg-card border border-border hover:border-primary/50 hover:shadow-lg"
                }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  item.highlight 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground"
                }`}>
                  <item.icon 
                    className={`w-7 h-7 ${item.highlight ? "text-primary-foreground" : "text-primary group-hover:text-primary-foreground"} transition-colors`} 
                    strokeWidth={1.5} 
                  />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Media Features */}
          <div className="section-divider mb-16" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-10">Featured In</p>
            <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
              {mediaFeatures.map((media, index) => (
                <motion.div
                  key={media.name}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="text-center group cursor-default"
                >
                  <p className="font-serif text-3xl sm:text-4xl text-foreground group-hover:text-primary transition-colors">
                    {media.name}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-2">
                    {media.type}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Family & Heritage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-24 pt-20 border-t border-border"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                  Heritage & Family
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">
                  Rooted in Akure, Building for Tomorrow
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A proud native of Akure, Ondo State, Wale Tomtom's vision extends beyond 
                  commercial success to community transformation. Married to the lovely Oyeteju, 
                  and blessed with two sons, his family values mirror his professional ethos: 
                  building legacies that endure.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  His commitment to Ondo State's development reflects a deeper understanding 
                  that true leadership means investing in the next generation and the communities 
                  that shaped us.
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="order-1 lg:order-2"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
                    alt="Family and community"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
