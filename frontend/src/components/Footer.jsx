// FILE: components/Footer.jsx — Site footer: brand, links, services, contact, PDF download.
// EDIT HERE TO: change footer columns/bottom text. Company info comes from mock.js (COMPANY).

import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, Download } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "../mock";
import { COMPANY_PROFILE_PDF } from "../api";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-11 w-11 rounded-full bg-white flex items-center justify-center overflow-hidden ring-1 ring-white/20">
                <img
                  src={COMPANY.logo}
                  alt="JCPL logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="leading-none">
                <div className="font-display text-lg font-extrabold text-white">
                  Junctioncraft
                </div>
                <div className="text-[10px] font-semibold tracking-[0.25em] text-emerald-400">
                  PVT. LTD.
                </div>
              </div>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
              Karnataka Government approved contractor delivering green
              energy EPC across India since {COMPANY.since}.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-neutral-400 hover:text-emerald-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-400 hover:text-emerald-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.slug} className="text-neutral-400">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm tracking-wide">
              Get in touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-neutral-300 hover:text-emerald-400 break-all"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="text-neutral-300 hover:text-emerald-400"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-neutral-400">{COMPANY.location}</span>
              </li>
            </ul>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
            >
              Chat on WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={COMPANY_PROFILE_PDF}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center gap-2 text-sm font-semibold text-neutral-300 hover:text-emerald-300"
            >
              <Download className="h-4 w-4" /> Download Company Profile (PDF)
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} {COMPANY.legal}. All rights reserved.
          </p>
          <p>Registered with ROC Bangalore · Karnataka Government approved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
