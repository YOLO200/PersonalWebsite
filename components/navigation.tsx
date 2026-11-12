"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import SeasonPicker from "@/components/seasons/SeasonPicker";

/** Compact season picker that slides in/out; `gap` cancels the parent's flex gap while hidden. */
function NavSeasonPicker({ show, gap }: { show: boolean; gap: number }) {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          key="nav-season-picker"
          initial={{ opacity: 0, width: 0, marginLeft: -gap }}
          animate={{ opacity: 1, width: "auto", marginLeft: 0 }}
          exit={{ opacity: 0, width: 0, marginLeft: -gap }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            // fade lags the slide a little so the icons emerge gradually
            opacity: { duration: 1.1, ease: "easeInOut" },
          }}
          className="overflow-hidden shrink-0"
        >
          <SeasonPicker compact />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const links = [
  { label: "About", href: "#about", num: "01" },
  { label: "Experience", href: "#experience", num: "02" },
  { label: "Projects", href: "#projects", num: "03" },
  { label: "Contact", href: "#contact", num: "04" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Home page has the big picker in the hero, so only show this one once scrolled.
  const isHome = usePathname() === "/";
  const showSeasonPicker = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50"
          : "bg-background/35 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-extrabold text-xl text-foreground"
        >
          YJ<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground text-sm font-mono tracking-wide transition-colors group flex items-center gap-2"
            >
              <span className="text-primary/50 text-[10px] group-hover:text-primary transition-colors">
                {link.num}
              </span>
              {link.label}
            </a>
          ))}
          <NavSeasonPicker show={showSeasonPicker} gap={40} />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <NavSeasonPicker show={showSeasonPicker} gap={12} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground text-sm font-mono tracking-wide transition-colors"
                >
                  <span className="text-primary/50 text-[10px]">
                    {link.num}
                  </span>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
