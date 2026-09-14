// FILE: components/Navbar.jsx — Top navigation bar + JCPL logo + mobile menu.
// EDIT HERE TO: change logo size/shape or nav styling. Menu items live in mock.js (NAV_LINKS).

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, COMPANY } from "../mock";

const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5 group">
    <img
      src={COMPANY.logo}
      alt="Junctioncraft Pvt. Ltd. (JCPL) logo"
      className="h-11 w-11 rounded-full object-cover bg-white ring-1 ring-black/5 shadow-sm"
    />
    <div className="leading-none">
      <div className="font-display text-lg font-extrabold tracking-tight text-neutral-900">
        Junctioncraft
      </div>
      <div className="text-[10px] font-semibold tracking-[0.25em] text-primary">
        PVT. LTD.
      </div>
    </div>
  </Link>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-[0_2px_20px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <Logo />

        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  active
                    ? "text-primary"
                    : "text-neutral-600 hover:text-primary hover:bg-secondary"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-emerald-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Contact Us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 text-neutral-800"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-background border-b border-border ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-5 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-3 rounded-md text-base font-medium ${
                pathname === l.to
                  ? "text-primary bg-secondary"
                  : "text-neutral-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-md text-sm font-semibold"
          >
            Contact Us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
