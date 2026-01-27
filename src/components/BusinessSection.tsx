import { Building2, Landmark, ShieldCheck, TrendingUp } from "lucide-react";

const BusinessSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Distressed Assets",
      description: "Expert acquisition and disposition of non-performing collateral from major financial institutions.",
    },
    {
      icon: Landmark,
      title: "Bank Partnerships",
      description: "Direct relationships with commercial banks for exclusive access to remedial property portfolios.",
    },
    {
      icon: ShieldCheck,
      title: "Due Diligence",
      description: "Comprehensive title verification and legal clearance ensuring secure transactions.",
    },
    {
      icon: TrendingUp,
      title: "Investment Advisory",
      description: "Strategic guidance for institutional and private investors seeking below-market opportunities.",
    },
  ];

  return (
    <section id="business" className="py-20 sm:py-32 bg-card">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-executive text-primary mb-4">Bluemart Properties</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Institutional Solutions
            </h2>
            <p className="text-institutional text-muted-foreground max-w-2xl mx-auto">
              Nigeria's leading specialist in distressed and remedial property assets. 
              We transform non-performing collateral into investment opportunities.
            </p>
            <div className="line-gold max-w-xs mx-auto mt-8" />
          </div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 bg-background border border-border hover:border-primary/50 transition-all duration-300 hover-lift"
              >
                <service.icon className="w-10 h-10 text-primary mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Investor Vault CTA */}
          <div className="border-gradient-gold p-8 sm:p-12 bg-background/50 text-center">
            <div className="max-w-2xl mx-auto">
              <p className="text-executive text-primary mb-4">Private Access</p>
              <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">
                The Investor Vault
              </h3>
              <p className="text-muted-foreground mb-8">
                Access exclusive listings of bank-direct assets below market value. 
                Foreclosed properties, mortgaged assets, and remedial portfolios available 
                only to registered investors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium tracking-wide hover:bg-gold-light transition-all duration-300 animate-pulse-gold"
                >
                  Join Private Broadcast List
                </a>
              </div>
              
              <p className="text-xs text-muted-foreground mt-6">
                Registration required. Verified credentials only.
              </p>
            </div>
          </div>

          {/* B2B Section */}
          <div className="mt-16 pt-16 border-t border-border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-executive text-primary mb-4">For Financial Institutions</p>
                <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">
                  Partner With Nigeria's Leading Light
                </h3>
                <p className="text-institutional text-muted-foreground mb-6">
                  Commercial banks seeking a trusted vendor for distressed property disposition 
                  find in Bluemart Properties a partner with the institutional credibility 
                  and market expertise to deliver results.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Rapid liquidation of non-performing collateral
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Transparent reporting and compliance
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-primary" />
                    Nationwide operational capacity
                  </li>
                </ul>
              </div>
              
              <div className="bg-secondary/30 p-8 border border-border">
                <p className="font-serif text-xl text-foreground mb-4">Bank Enquiries</p>
                <p className="text-muted-foreground mb-6">
                  For institutional partnerships and bulk asset disposition discussions, 
                  schedule a confidential consultation.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 text-sm font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Request Consultation
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
