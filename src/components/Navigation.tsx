import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const scrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent page jump + lock scroll when mobile menu is open (iOS-safe)
  useEffect(() => {
    if (!isOpen) return;

    scrollYRef.current = window.scrollY;
    const body = document.body;

    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflowY: body.style.overflowY,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollYRef.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflowY = "scroll";

    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      body.style.overflowY = prev.overflowY;
      window.scrollTo(0, scrollYRef.current);
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/", isPage: true },
    { label: "Gallery", href: "/gallery", isPage: true },
    { label: "Awards", href: "/awards", isPage: true },
    { label: "Press", href: "/press", isPage: true },
  ];

  const handleNavClick = (href: string, isPage: boolean) => {
    setIsOpen(false);
    if (!isPage && location.pathname !== "/") {
      window.location.href = href;
    }
  };

  const handleLogoClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-background/95 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Logo */}
            <Link to="/" className="group" onClick={handleLogoClick}>
              <motion.span
                className="text-xl sm:text-2xl font-display font-medium text-foreground tracking-tight"
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.2 }}
              >
                Akinwale<span className="text-primary">.</span>
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <motion.div
                  key={link.label}
                  className="relative"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.isPage ? (
                    <Link
                      to={link.href}
                      onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                      className={`text-base lg:text-lg font-medium tracking-wide transition-colors duration-300 inline-block relative ${
                        location.pathname === link.href
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}
                    >
                      {link.label}
                      {/* Animated underline */}
                      <span className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300 ${
                        location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      }`} />
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => { handleNavClick(link.href, link.isPage); window.scrollTo(0, 0); }}
                      className="text-base lg:text-lg font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 inline-block relative"
                    >
                      {link.label}
                      <span className="absolute left-0 bottom-0 h-0.5 bg-primary w-0 hover:w-full transition-all duration-300" />
                    </a>
                  )}
                </motion.div>
              ))}

              {/* CTA */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/contact"
                className="px-6 py-2.5 bg-foreground text-background text-base font-medium tracking-wide rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Get in Touch
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground relative z-50"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-background md:hidden z-40"
          >
            <div className="pt-20">
              <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] gap-8">
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
                        onClick={() => { setIsOpen(false); window.scrollTo(0, 0); }}
                        className="text-3xl font-display font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={() => { handleNavClick(link.href, link.isPage); window.scrollTo(0, 0); }}
                        className="text-3xl font-display font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
