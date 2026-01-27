import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background" ref={ref}>
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
              Connect
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Let's Discuss Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Whether you're an investor seeking below-market assets or a financial institution 
              requiring property solutions, the conversation starts here.
            </p>
            <div className="line-gold max-w-xs mx-auto mt-8" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-serif text-2xl text-foreground mb-10">Verified Credentials</h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: "Direct Line",
                    value: "+234 803 456 7890",
                    href: "tel:+2348034567890",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "info@bluemartproperties.com",
                    href: "mailto:info@bluemartproperties.com",
                  },
                  {
                    icon: MapPin,
                    label: "Office",
                    value: "Lagos, Nigeria",
                    subtext: "Akure Heritage",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                      <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-lg text-foreground hover:text-primary transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <>
                          <p className="text-lg text-foreground font-medium">{item.value}</p>
                          {item.subtext && <p className="text-sm text-muted-foreground">{item.subtext}</p>}
                        </>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Legacy credential */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-12 pt-10 border-t border-border"
              >
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Legacy Contact</p>
                  <p className="text-sm text-muted-foreground mb-3">BBM PIN (Archived)</p>
                  <code className="text-2xl font-serif text-primary font-semibold">2b134bb2</code>
                  <p className="text-xs text-muted-foreground mt-3">
                    A testament to over a decade of consistent industry presence
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-card rounded-3xl border border-border p-8 sm:p-10 shadow-lg"
            >
              <h3 className="font-serif text-2xl text-foreground mb-8">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-3">Name</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-3">Email</label>
                    <input
                      type="email"
                      className="w-full px-5 py-4 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-3">Inquiry Type</label>
                  <select className="w-full px-5 py-4 bg-background rounded-xl border border-border text-foreground focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer">
                    <option value="">Select an option</option>
                    <option value="investor">Investment Inquiry</option>
                    <option value="institution">Institutional Partnership</option>
                    <option value="media">Media Request</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-3">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-5 py-4 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-5 text-sm font-semibold tracking-wide rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl flex items-center justify-center gap-3 transition-all"
                >
                  Send Message
                  <Send className="w-4 h-4" />
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
