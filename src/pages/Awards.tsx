import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Award, Trophy, Star, Medal, Crown, Users, Globe, Heart } from "lucide-react";

const Awards = () => {
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-executive text-primary mb-4">Recognition & Honors</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
              Awards & Achievements
            </h1>
            <p className="text-institutional text-muted-foreground max-w-2xl mx-auto">
              A decade of excellence recognized by prestigious institutions, 
              industry bodies, and international organizations.
            </p>
            <div className="line-gold max-w-xs mx-auto mt-8" />
          </div>
        </div>
      </section>

      {/* Milestone Stats */}
      <section className="pb-16">
        <div className="container px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {milestones.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-6 bg-card border border-border hover:border-primary/50 transition-colors"
                >
                  <p className="font-serif text-3xl sm:text-4xl text-gradient-gold mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Major Awards */}
      <section className="pb-20">
        <div className="container px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-executive text-muted-foreground mb-4">Major Honors</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
                Prestigious Awards
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {majorAwards.map((award) => (
                <div
                  key={award.title}
                  className={`group p-8 transition-all duration-300 hover-lift ${
                    award.highlight
                      ? "bg-card border-gradient-gold glow-gold"
                      : "bg-card border border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 ${award.highlight ? "bg-primary/20" : "bg-muted"} transition-colors`}>
                      <award.icon
                        className={`w-8 h-8 ${
                          award.highlight ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                        } transition-colors`}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary">
                          {award.year}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl text-foreground mb-1">
                        {award.title}
                      </h3>
                      <p className="text-sm text-primary mb-3">{award.organization}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Recognition */}
      <section className="py-20 bg-card/50">
        <div className="container px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-executive text-muted-foreground mb-4">Media Presence</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
                Featured In
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recognitions.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-background border border-border hover:border-primary/50 transition-all duration-300 hover-lift text-center"
                >
                  <p className="text-xs text-primary mb-3">{item.year}</p>
                  <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-8" strokeWidth={1} />
            <blockquote className="font-serif text-2xl sm:text-3xl text-foreground mb-6 leading-relaxed">
              "Excellence is not a destination but a continuous journey. Every award 
              represents not just personal achievement, but the collective effort of 
              teams, partners, and communities who believe in our vision."
            </blockquote>
            <cite className="text-muted-foreground text-institutional">
              — Akinwale Matthew Feyiyemi Abidakun
            </cite>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Awards;
