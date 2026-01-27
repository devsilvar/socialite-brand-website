import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-executive text-primary mb-4">Connect</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Let's Discuss Opportunities
            </h2>
            <p className="text-institutional text-muted-foreground max-w-xl mx-auto">
              Whether you're an investor seeking below-market assets or a financial institution 
              requiring property solutions, the conversation starts here.
            </p>
            <div className="line-gold max-w-xs mx-auto mt-8" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact info */}
            <div>
              <h3 className="font-serif text-2xl text-foreground mb-8">Verified Credentials</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Phone className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-executive text-muted-foreground mb-1">Direct Line</p>
                    <a href="tel:+2348034567890" className="text-foreground hover:text-primary transition-colors">
                      +234 803 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-executive text-muted-foreground mb-1">Email</p>
                    <a href="mailto:info@bluemartproperties.com" className="text-foreground hover:text-primary transition-colors">
                      info@bluemartproperties.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-card border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                    <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-executive text-muted-foreground mb-1">Office</p>
                    <p className="text-foreground">Lagos, Nigeria</p>
                    <p className="text-muted-foreground text-sm">Akure Heritage</p>
                  </div>
                </div>
              </div>

              {/* Legacy credential */}
              <div className="mt-10 pt-8 border-t border-border">
                <p className="text-executive text-muted-foreground mb-2">Legacy Contact</p>
                <p className="text-muted-foreground text-sm mb-2">BBM PIN (Archived)</p>
                <code className="text-primary text-lg font-mono">2b134bb2</code>
                <p className="text-xs text-muted-foreground mt-2">
                  A testament to over a decade of consistent industry presence
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-card border border-border p-8">
              <h3 className="font-serif text-xl text-foreground mb-6">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-executive text-muted-foreground block mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-executive text-muted-foreground block mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-executive text-muted-foreground block mb-2">Inquiry Type</label>
                  <select className="w-full px-4 py-3 bg-background border border-border text-foreground focus:border-primary focus:outline-none transition-colors appearance-none">
                    <option value="">Select an option</option>
                    <option value="investor">Investment Inquiry</option>
                    <option value="institution">Institutional Partnership</option>
                    <option value="media">Media Request</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-executive text-muted-foreground block mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 text-sm font-medium tracking-wide hover:bg-gold-light transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
