"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import GlassSurface from "./GlassSurface";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Works", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        const offset = 40; // Height of navbar + extra spacing
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4">
      <div className="max-w-5xl mx-auto">
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={16}
          brightness={20}
          opacity={0.3}
          blur={15}
          displace={15}
          distortionScale={-150}
          backgroundOpacity={0.1}
          saturation={1.2}
          className="hidden md:block"
        >
          <div className="flex items-center justify-between px-6 py-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg cursor-pointer"
            >
              <span className="font-mono text-lg font-semibold text-primary">
                YJ
              </span>
            </a>

            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="text-sm text-foreground hover:text-primary transition-colors relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </GlassSurface>

        {/* Mobile Navigation */}
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={24}
          brightness={20}
          opacity={0.5}
          blur={15}
          displace={15}
          distortionScale={-150}
          redOffset={5}
          greenOffset={15}
          blueOffset={25}
          mixBlendMode="screen"
          backgroundOpacity={0.1}
          saturation={1.2}
          className="md:hidden"
        >
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg cursor-pointer"
              >
                <span className="font-mono text-base font-semibold text-primary">
                  YJ
                </span>
              </a>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="mt-4 pb-2 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      handleScroll(e, item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block text-sm text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </GlassSurface>
      </div>
    </nav>
  );
}
