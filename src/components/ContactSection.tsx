import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    { label: "Direct Line", value: "+234 803 456 7890", href: "tel:+2348034567890" },
    { label: "Email", value: "info@bluemartproperties.com", href: "mailto:info@bluemartproperties.com" },
    { label: "Office", value: "Lagos, Nigeria" },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32" ref={ref}>
      <div className="container px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <p className="label-minimal text-primary mb-6">Connect</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-foreground leading-[0.95] mb-6">
              Let's Discuss<br />
              <span className="text-gradient-gold">Opportunities</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're an investor seeking below-market assets or a financial institution 
              requiring property solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="label-minimal mb-8">Credentials</p>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((item) => (
                  <div key={item.label} className="group">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="text-xl font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xl font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Legacy BBM */}
              <div className="p-6 bg-secondary/50 rounded-xl">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  Legacy Contact • BBM PIN
                </p>
                <code className="text-2xl font-display text-primary">2b134bb2</code>
                <p className="text-xs text-muted-foreground mt-2">
                  A testament to over a decade of consistent presence
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-card rounded-2xl border border-border p-8 sm:p-10"
            >
              <p className="label-minimal mb-8">Send a Message</p>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Type</label>
                  <select className="w-full px-4 py-3 bg-background rounded-lg border border-border text-foreground focus:border-foreground focus:outline-none transition-colors text-sm appearance-none cursor-pointer">
                    <option value="">Select inquiry type</option>
                    <option value="investor">Investment Inquiry</option>
                    <option value="institution">Institutional Partnership</option>
                    <option value="media">Media Request</option>
                    <option value="speaking">Speaking Engagement</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground block mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-background rounded-lg border border-border text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors resize-none text-sm"
                    placeholder="Your message..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full bg-foreground text-background py-4 text-sm font-medium tracking-wide rounded-lg hover:bg-primary transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
