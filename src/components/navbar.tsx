"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, Wrench, X } from "lucide-react";
import { useEffect, useState } from "react";
import { business } from "@/lib/site-data";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-asphalt/88 shadow-2xl shadow-black/35 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a className="group flex items-center gap-3 focus-ring" href="#top">
          <span className="grid h-11 w-11 place-items-center rounded-sm border border-white/15 bg-white/10 text-scarlet shadow-redglow backdrop-blur">
            <Wrench aria-hidden="true" className="h-5 w-5" />
          </span>
          <span className="text-base font-black uppercase leading-tight tracking-[0.12em] text-white sm:text-lg">
            Cruise In
            <span className="block text-[0.65rem] font-semibold tracking-[0.3em] text-slate-300">
              Auto Repair
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              className="text-sm font-semibold text-slate-200 transition hover:text-white focus-ring"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="group inline-flex items-center gap-2 rounded-sm bg-scarlet px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-redglow transition hover:bg-ember focus-ring"
            href={business.phoneHref}
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Open navigation menu"
          className="grid h-11 w-11 place-items-center rounded-sm border border-white/15 bg-white/10 text-white backdrop-blur transition hover:bg-white/15 focus-ring lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-white/10 bg-asphalt/96 px-5 py-5 shadow-2xl backdrop-blur-xl lg:hidden"
            exit={{ opacity: 0, y: -16 }}
            initial={{ opacity: 0, y: -16 }}
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  className="rounded-sm px-3 py-3 text-base font-semibold text-slate-100 transition hover:bg-white/10 focus-ring"
                  href={link.href}
                  key={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-sm bg-scarlet px-5 py-4 text-sm font-black uppercase tracking-[0.12em] text-white shadow-redglow focus-ring"
                href={business.phoneHref}
                onClick={() => setIsOpen(false)}
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
