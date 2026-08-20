"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, TrendingUp } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Results", href: "#results" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 20);
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-electric-400 via-purple-400 to-emerald-400 transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-400 to-electric-600 text-white shadow-lg shadow-electric-500/20 transition-transform duration-300 group-hover:rotate-6">
              <TrendingUp size={18} strokeWidth={2.5} />
            </span>
            <span className="leading-none">
              <span className="block text-xl font-bold font-[var(--font-display)] tracking-tight">
                <span className="gradient-text">RAM</span>{" "}
                <span className="text-white">SEO</span>
              </span>
              <span className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:block">
                Growth systems
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-electric-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#audit"
              className="cta-button text-sm px-6 py-3"
            >
              <span className="flex items-center gap-2">
                Get Free SEO Audit
                <ArrowRight size={16} />
              </span>
            </a>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="#audit"
              className="text-xs font-semibold text-electric-400 hover:text-electric-300 transition-colors"
            >
              Free Audit
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-electric-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="block text-base text-slate-300 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#audit"
                onClick={() => setIsOpen(false)}
                className="cta-button text-sm w-full text-center mt-4 block"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Free SEO Audit
                  <ArrowRight size={16} />
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
