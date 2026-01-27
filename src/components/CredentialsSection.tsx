import { Award, Users, Newspaper, MapPin } from "lucide-react";

const CredentialsSection = () => {
  const credentials = [
    {
      icon: Award,
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

  return (
    <section id="credentials" className="py-20 sm:py-32 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-executive text-primary mb-4">Recognition</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Awards & Credentials
            </h2>
            <div className="line-gold max-w-xs mx-auto" />
          </div>

          {/* Credentials grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {credentials.map((item) => (
              <div
                key={item.title}
                className={`group p-8 transition-all duration-300 hover-lift ${
                  item.highlight 
                    ? "bg-card border-gradient-gold glow-gold" 
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                <item.icon 
                  className={`w-10 h-10 mb-6 ${item.highlight ? "text-primary" : "text-muted-foreground group-hover:text-primary"} transition-colors`} 
                  strokeWidth={1.5} 
                />
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Media Features */}
          <div className="section-divider mb-16" />
          
          <div className="text-center">
            <p className="text-executive text-muted-foreground mb-8">Featured In</p>
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
              {mediaFeatures.map((media) => (
                <div key={media.name} className="text-center group">
                  <p className="font-serif text-2xl sm:text-3xl text-foreground group-hover:text-primary transition-colors">
                    {media.name}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {media.type}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Family & Heritage */}
          <div className="mt-20 pt-16 border-t border-border">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <p className="text-executive text-primary mb-4">Heritage & Family</p>
                <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-6">
                  Rooted in Akure, Building for Tomorrow
                </h3>
                <p className="text-institutional text-muted-foreground mb-6">
                  A proud native of Akure, Ondo State, Wale Tomtom's vision extends beyond 
                  commercial success to community transformation. Married to the lovely Oyeteju, 
                  and blessed with two sons, his family values mirror his professional ethos: 
                  building legacies that endure.
                </p>
                <p className="text-institutional text-muted-foreground">
                  His commitment to Ondo State's development reflects a deeper understanding 
                  that true leadership means investing in the next generation and the communities 
                  that shaped us.
                </p>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] bg-card border border-border overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
                    alt="Family and community"
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
