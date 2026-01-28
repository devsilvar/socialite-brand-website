import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/", isPage: true },
    { label: "About", href: "/#about", isPage: false },
    { label: "Business", href: "/#business", isPage: false },
    { label: "Gallery", href: "/gallery", isPage: true },
    { label: "Awards", href: "/awards", isPage: true },
    { label: "Press", href: "/press", isPage: true },
    { label: "Contact", href: "/contact", isPage: true },
  ];

  const handleNavClick = (href: string, isPage: boolean) => {
    setIsOpen(false);
    if (!isPage && location.pathname !== "/") {
      // Navigate to homepage first, then scroll to section
      window.location.href = href;
    }
  };

  const handleLogoClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo - Minimal & Refined */}
          <Link to="/" className="group" onClick={handleLogoClick}>
            <motion.span 
              className="text-xl sm:text-2xl font-display font-medium text-foreground tracking-tight"
              whileHover={{ opacity: 0.7 }}
              transition={{ duration: 0.2 }}
            >
              Wale<span className="text-primary">.</span>
            </motion.span>
          </Link>

          {/* Desktop Navigation - Ultra Clean */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <motion.div 
                key={link.label}
                whileHover={{ y: -1 }}
                transition={{ duration: 0.2 }}
              >
                {link.isPage ? (
                  <Link
                    to={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                      location.pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.href, link.isPage)}
                    className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                )}
              </motion.div>
            ))}
            
            {/* CTA - Minimal but Impactful */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="px-6 py-2.5 bg-foreground text-background text-sm font-medium tracking-wide rounded-full hover:bg-primary transition-colors duration-300"
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground relative z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-20 bg-background md:hidden z-40"
          >
              <div className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    {link.isPage ? (
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-3xl font-display font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => handleNavClick(link.href, link.isPage)}
                        className="text-3xl font-display font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
