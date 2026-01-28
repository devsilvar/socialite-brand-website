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
    <footer className="relative py-20 sm:py-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-background to-background" />
      
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="container px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Top section with large branding */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-16">
            
            {/* Logo & Tagline */}
            <div className="max-w-md">
              <Link to="/" className="inline-block mb-6 group">
                <span className="text-4xl sm:text-5xl font-display font-medium text-foreground group-hover:text-primary transition-colors">
                  Wale<span className="text-primary group-hover:text-foreground transition-colors">.</span>
                </span>
              </Link>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The intersection of sociology and real estate strategy. Building institutional bridges across Nigeria.
              </p>
            </div>
            
            {/* Links with hover effects */}
            <div className="flex flex-wrap gap-8 lg:gap-12">
              {links.map((link, index) => (
                <motion.div 
                  key={link.label} 
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm tracking-wide"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Divider with gradient */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent mb-10" />
          
          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Wale Tomtom. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-primary"
                style={{ boxShadow: "0 0 8px hsl(38, 50%, 50%, 0.5)" }}
              />
              <span>Forbes Business Council Member</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
