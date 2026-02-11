"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type NavLink = { label: string; href: string; isRoute?: boolean };

const navLinks: NavLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Produtos", href: "/produtos", isRoute: true },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = 0;
    
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
      
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else if (currentScrollY <= 20 && lastScrollY > 20) {
        setIsScrolled(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
        style={{
          background: isScrolled
            ? 'hsl(38 92% 55% / 0.6)'
            : 'hsl(38 92% 55% / 0.3)',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 4px 24px -4px hsla(215, 60%, 18%, 0.08)' : 'none'
        }}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/next-js/logo-prelaje.png"
            alt="Prelaje Logo" 
            width={56} 
            height={56}
            className="h-12 md:h-14 w-auto object-contain" 
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white font-medium text-sm tracking-wide uppercase transition-colors duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white font-medium text-sm tracking-wide uppercase transition-colors"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#contato"
            className="font-semibold text-sm px-6 py-2.5 rounded-lg hover:brightness-110 transition-all duration-200 shadow-accent"
            style={{ backgroundColor: 'hsl(38, 92%, 55%)', color: 'hsl(215, 60%, 12%)' }}
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-primary-foreground p-2"
          aria-label="Menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-primary/95 backdrop-blur-md overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-primary-foreground/80 hover:text-accent font-medium text-sm tracking-wide uppercase transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-primary-foreground/80 hover:text-accent font-medium text-sm tracking-wide uppercase transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="#contato"
                onClick={() => setIsMobileOpen(false)}
                className="font-semibold text-sm px-6 py-2.5 rounded-lg mt-2"
                style={{ backgroundColor: 'hsl(38, 92%, 55%)', color: 'hsl(215, 60%, 12%)' }}
              >
                Fale Conosco
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
