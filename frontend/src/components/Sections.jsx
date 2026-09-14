// FILE: components/Sections.jsx — Reusable shared blocks used across pages:
// Eyebrow (small label), Marquee (green ticker), ClientsStrip (Proudly served),
// Testimonials, CtaBand (green call-to-action). EDIT layout/styling here; text/data in mock.js.

import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Quote } from "lucide-react";
import Reveal from "./Reveal";
import { MARQUEE, CLIENTS, TESTIMONIALS, COMPANY } from "../mock";

export const Eyebrow = ({ children }) => (
  <div className="inline-flex items-center gap-2 mb-4">
    <span className="h-px w-8 bg-primary/60" />
    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
      {children}
    </span>
  </div>
);

export const Marquee = () => (
  <div className="bg-primary py-4 overflow-hidden border-y border-emerald-900">
    <div className="flex w-max jc-marquee">
      {[...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE].map((m, i) => (
        <div key={i} className="flex items-center gap-6 px-6">
          <span className="font-display text-lg sm:text-xl font-bold text-primary-foreground whitespace-nowrap">
            {m}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </div>
      ))}
    </div>
  </div>
);

export const ClientsStrip = () => (
  <section className="py-20 sm:py-24 bg-secondary">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="text-center mb-12">
        <Eyebrow>Proudly served</Eyebrow>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900">
          Clients & partners who trust us.
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
        {CLIENTS.map((c, i) => (
          <Reveal
            key={c.name}
            delay={i * 60}
            className="group bg-card rounded-xl border border-border p-5 flex flex-col items-center justify-center gap-3 h-32 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            {c.type === "image" ? (
              <img
                src={c.logo}
                alt={`${c.name} logo`}
                className="max-h-12 max-w-[85%] object-contain grayscale-[0.2] group-hover:grayscale-0 transition-all"
                loading="lazy"
              />
            ) : (
              <div className="text-center">
                <div className="font-display text-lg font-extrabold text-primary leading-tight">
                  {c.name}
                </div>
                {c.sub && (
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    {c.sub}
                  </div>
                )}
              </div>
            )}
          </Reveal>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-8">
        Also serving NHAI · KPTCL · BESCOM · Govt. of Karnataka
      </p>
    </div>
  </section>
);

export const Testimonials = () => (
  <section className="py-20 sm:py-28 bg-background">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      <Reveal className="max-w-2xl mb-14">
        <Eyebrow>Client Voices</Eyebrow>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-neutral-900">
          Trusted by utilities & developers.
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <Reveal
            key={i}
            delay={i * 100}
            className="bg-card rounded-2xl border border-border p-8 flex flex-col hover:shadow-xl transition-shadow"
          >
            <Quote className="h-8 w-8 text-emerald-600/40 mb-5" />
            <p className="text-neutral-700 leading-relaxed flex-1">{t.quote}</p>
            <div className="mt-6 pt-6 border-t border-border">
              <div className="font-semibold text-neutral-900">{t.name}</div>
              <div className="text-sm text-muted-foreground">{t.org}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const CtaBand = () => (
  <section className="py-20 sm:py-28 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#fff,transparent_40%)]" />
    <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative">
      <Reveal>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
          Let's Build Together
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mt-4 mb-8 leading-tight">
          Need advice on your next power project?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-md font-semibold hover:bg-emerald-50 transition-all hover:-translate-y-0.5"
          >
            Get an Appointment <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a
            href={COMPANY.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-emerald-400/60 text-white px-7 py-3.5 rounded-md font-semibold hover:bg-emerald-800 transition-all"
          >
            Chat on WhatsApp <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
