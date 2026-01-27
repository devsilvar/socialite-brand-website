import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CredentialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const credentials = [
    {
      title: "Forbes Business Council",
      description: "Distinguished member representing Nigerian real estate excellence globally",
      featured: true,
    },
    {
      title: "Outstanding Youth Personality",
      description: "Recognized for exceptional contributions to business and community",
      featured: false,
    },
    {
      title: "Distinguished Rotarian",
      description: "Active member committed to humanitarian service and leadership",
      featured: false,
    },
    {
      title: "Akure Native & Ondo Advocate",
      description: "Championing quality leadership and development in Ondo State",
      featured: false,
    },
  ];

  const press = ["THISDAY", "City People", "The Sun", "Forbes"];

  return (
    <section id="credentials" className="py-24 sm:py-32" ref={ref}>
      <div className="container px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="label-minimal text-primary mb-6">Recognition</p>
            <h2 className="text-4xl sm:text-5xl font-display font-medium text-foreground">
              Awards & Credentials
            </h2>
          </motion.div>

          {/* Credentials - Clean List */}
          <div className="grid lg:grid-cols-2 gap-6 mb-20">
            {credentials.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className={`group p-8 rounded-2xl border transition-all duration-300 ${
                  item.featured 
                    ? "bg-foreground text-background border-foreground" 
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                <h3 className={`text-xl font-medium mb-2 ${
                  item.featured ? "text-background" : "text-foreground"
                }`}>
                  {item.title}
                </h3>
                <p className={item.featured ? "text-background/70" : "text-muted-foreground"}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Press */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="py-12 border-y border-border"
          >
            <p className="label-minimal text-center mb-10">Featured In</p>
            <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16">
              {press.map((name) => (
                <motion.span
                  key={name}
                  whileHover={{ scale: 1.05 }}
                  className="text-2xl sm:text-3xl font-display text-foreground/60 hover:text-foreground transition-colors cursor-default"
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Heritage */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <p className="label-minimal text-primary mb-6">Heritage</p>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-foreground mb-6">
                Rooted in Akure, Building for Tomorrow
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A proud native of Akure, Ondo State, Wale Tomtom's vision extends beyond 
                commercial success to community transformation. Married to the lovely Oyeteju, 
                and blessed with two sons, his family values mirror his professional ethos.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His commitment to Ondo State's development reflects a deeper understanding 
                that true leadership means investing in the next generation.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
                  alt="Family and community"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
