const Footer = () => {
  return (
    <footer className="py-12 bg-obsidian border-t border-border">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Logo & tagline */}
            <div>
              <p className="font-serif text-xl text-foreground mb-2">
                Wale <span className="text-primary">Tomtom</span>
              </p>
              <p className="text-sm text-muted-foreground">
                The Intersection of Sociology and Real Estate Strategy
              </p>
            </div>
            
            {/* Quick links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#business" className="text-muted-foreground hover:text-primary transition-colors">
                Business
              </a>
              <a href="#credentials" className="text-muted-foreground hover:text-primary transition-colors">
                Credentials
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
          
          <div className="section-divider my-8" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Wale Tomtom. All rights reserved.</p>
            <p>Forbes Business Council Member • Bluemart Properties Limited</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
