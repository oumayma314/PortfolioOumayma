import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Stack", href: "#stack" },
    { name: "Work", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#contact" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
          <div className="flex items-center justify-between px-6 py-3 bg-card/60 backdrop-blur-lg border border-border/50 rounded-full shadow-lg w-full max-w-4xl">
            <a href="#home" className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400">
              O.DERBALA
            </a>
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`nav-link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
