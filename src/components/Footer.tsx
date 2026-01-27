import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-charcoal border-t border-border">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Logo & tagline */}
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link to="/" className="inline-flex items-center gap-3 mb-3">
                <Sparkles className="w-6 h-6 text-primary" />
                <p className="font-serif text-2xl text-white">
                  Wale <span className="text-primary">Tomtom</span>
                </p>
              </Link>
              <p className="text-sm text-white/60">
                The Intersection of Sociology and Real Estate Strategy
              </p>
            </motion.div>
            
            {/* Quick links */}
            <div className="flex flex-wrap gap-8 text-sm">
              {[
                { label: "About", href: "/#about" },
                { label: "Business", href: "/#business" },
                { label: "Gallery", href: "/gallery" },
                { label: "Awards", href: "/awards" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <motion.div key={link.label} whileHover={{ y: -2 }}>
                  {link.href.startsWith("/") && !link.href.includes("#") ? (
                    <Link to={link.href} className="text-white/60 hover:text-primary transition-colors font-medium">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-white/60 hover:text-primary transition-colors font-medium">
                      {link.label}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="h-px w-full bg-white/10 my-10" />
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-white/50">
            <p>© {new Date().getFullYear()} Wale Tomtom. All rights reserved.</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Forbes Business Council Member • Bluemart Properties Limited
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
