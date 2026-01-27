const AboutSection = () => {
  const timeline = [
    {
      year: "2008",
      title: "University of Ilorin",
      description: "B.Sc. Sociology - Where analytical thinking met human behavior understanding",
    },
    {
      year: "2012",
      title: "Bi-Courtney Group",
      description: "5-year executive training under Dr. Wale Babalakin SAN, mastering institutional real estate",
    },
    {
      year: "2016",
      title: "University of Leeds",
      description: "International Business certification - Global perspective meets local expertise",
    },
    {
      year: "2018",
      title: "Bluemart Properties",
      description: "Founded Nigeria's premier distressed assets and remedial property solutions firm",
    },
    {
      year: "2022",
      title: "Forbes Business Council",
      description: "Inducted as member, representing Nigerian real estate on the global stage",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-executive text-primary mb-4">The Pedigree</p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
              Building an Institutional Bridge
            </h2>
            <div className="line-gold max-w-xs mx-auto" />
          </div>

          {/* Bio content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
            {/* Image placeholder - executive portrait */}
            <div className="relative">
              <div className="aspect-[4/5] bg-card border-gradient-gold overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                  alt="Akinwale Matthew Feyiyemi Abidakun"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <p className="text-executive text-primary mb-2">CEO & Principal</p>
                  <p className="font-serif text-xl text-foreground">Bluemart Properties Limited</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/30 -z-10" />
            </div>

            {/* Bio text */}
            <div className="space-y-6">
              <p className="text-institutional text-muted-foreground">
                <span className="text-foreground font-medium">Akinwale Matthew Feyiyemi Abidakun</span>, 
                popularly known as Wale Tomtom, represents the new generation of Nigerian business leadership—
                one that seamlessly bridges academic rigor with commercial acumen.
              </p>
              
              <p className="text-institutional text-muted-foreground">
                Trained as a sociologist at the University of Ilorin and refined through international 
                business studies at the University of Leeds, his unique perspective allows him to see 
                property not just as assets, but as instruments of institutional transformation.
              </p>
              
              <p className="text-institutional text-muted-foreground">
                His five-year tenure under the mentorship of Dr. Wale Babalakin SAN at the Bi-Courtney 
                Group forged an understanding of how major infrastructure and real estate developments 
                shape economic landscapes.
              </p>

              <blockquote className="border-l-2 border-primary pl-6 py-2 my-8">
                <p className="font-serif text-xl text-foreground italic">
                  "We don't just sell property; we liquidate non-performing collateral 
                  to restore institutional liquidity."
                </p>
              </blockquote>

              <p className="text-institutional text-muted-foreground">
                Today, as CEO of Bluemart Properties Limited and a distinguished member of the 
                Forbes Business Council, Wale Tomtom stands at the intersection where distressed 
                assets meet strategic investment, creating value for institutions and investors alike.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="section-divider mb-16" />
          
          <div className="relative">
            <p className="text-executive text-primary text-center mb-12">The Journey</p>
            
            <div className="space-y-0">
              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className="group relative grid md:grid-cols-[120px_1fr] gap-4 md:gap-8 pb-12 last:pb-0"
                >
                  {/* Year */}
                  <div className="text-2xl font-serif text-primary md:text-right">
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <div className="relative pl-6 md:pl-8 border-l border-border group-last:border-transparent">
                    {/* Dot */}
                    <div className="absolute left-0 top-2 w-2 h-2 bg-primary -translate-x-1/2 group-hover:scale-150 transition-transform" />
                    
                    <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
