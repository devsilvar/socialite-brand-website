import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const links = [
    { label: "About", href: "/#about" },
    { label: "Business", href: "/#business" },
    { label: "Gallery", href: "/gallery" },
    { label: "Awards", href: "/awards" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="py-16 sm:py-20 border-t border-border">
      <div className="container px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            
            {/* Logo & Tagline */}
            <div>
              <Link to="/" className="inline-block mb-3">
                <span className="text-2xl font-display font-medium text-foreground">
                  Wale<span className="text-primary">.</span>
                </span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                The intersection of sociology and real estate strategy.
              </p>
            </div>
            
            {/* Links */}
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {links.map((link) => (
                <motion.div key={link.label} whileHover={{ y: -2 }}>
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link 
                      to={link.href} 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="h-px w-full bg-border my-10" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} Wale Tomtom. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Forbes Business Council Member
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
