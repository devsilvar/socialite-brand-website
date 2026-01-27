import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "About", href: "/#about", isPage: false },
    { label: "Business", href: "/#business", isPage: false },
    { label: "Gallery", href: "/gallery", isPage: true },
    { label: "Awards", href: "/awards", isPage: true },
    { label: "Contact", href: "/#contact", isPage: false },
  ];

  const handleNavClick = (href: string, isPage: boolean) => {
    setIsOpen(false);
    if (!isPage && location.pathname !== "/") {
      window.location.href = href;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors"
            >
              <Sparkles className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
            </motion.div>
            <span className="text-xl sm:text-2xl font-serif font-semibold text-foreground">
              Wale <span className="text-primary">Tomtom</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.div key={link.label} whileHover={{ y: -2 }}>
                {link.isPage ? (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg ${
                      location.pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href, link.isPage)}
                    className="px-4 py-2 text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-300 rounded-lg"
                  >
                    {link.label}
                  </a>
                )}
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/#contact"
              className="ml-4 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 rounded-lg bg-muted text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-2 pb-6 pt-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {link.isPage ? (
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => handleNavClick(link.href, link.isPage)}
                        className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.div>
                ))}
                
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  href="/#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 px-4 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg text-center shadow-lg shadow-primary/20"
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
