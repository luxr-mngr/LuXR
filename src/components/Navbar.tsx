
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useActiveSection } from '../hooks/useActiveSection';
import logoSvg from '../assets/logo.svg';

// Sections with a dark background
const DARK_SECTIONS = new Set(['inicio', 'proceso', 'casos', 'contacto']);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home',      id: 'inicio'    },
    { name: 'Solutions', id: 'soluciones' },
    { name: 'Stack',     id: 'proceso'   },
    { name: 'Portfolio', id: 'casos'     },
    { name: 'Team',      id: 'team'      },
    { name: 'Contact',   id: 'contacto'  },
  ];

  const activeSection = useActiveSection(navLinks.map(l => l.id));

  // True when the current section has a dark bg (or we haven't scrolled yet = hero = dark)
  const isDark = !scrolled || DARK_SECTIONS.has(activeSection ?? 'inicio');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? 'bg-slate-950/80 backdrop-blur-md py-3'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-3 shadow-sm'
          : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={logoSvg} alt="LuXR Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative py-2
                ${activeSection === link.id
                  ? 'text-indigo-500'
                  : isDark
                    ? 'text-slate-400 hover:text-white'
                    : 'text-slate-400 hover:text-slate-900'
                }
              `}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${isDark ? 'text-white' : 'text-slate-900'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden absolute top-full left-0 w-full border-b backdrop-blur-md ${
              isDark
                ? 'bg-slate-950/90 border-white/10'
                : 'bg-white/90 border-slate-200'
            }`}
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-lg font-bold transition-colors ${
                    activeSection === link.id
                      ? 'text-indigo-500'
                      : isDark
                        ? 'text-slate-300'
                        : 'text-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
