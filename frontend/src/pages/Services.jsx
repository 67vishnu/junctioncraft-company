// FILE: pages/Services.jsx — Services listing grid + renewable band (cards link to detail).
// EDIT HERE TO: change layout. Service content lives in mock.js (SERVICES).

import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Cable,
  Sun,
  Wind,
  Truck,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { Eyebrow, CtaBand } from "../components/Sections";
import { SERVICES, RENEWABLE } from "../mock";

const ICONS = { Building2, Cable, Sun, Wind, Truck, Lightbulb };

const Services = () => {
  return (
    <main>
      <section className="pt-[112px] pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <Eyebrow>What We Deliver</Eyebrow>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-neutral-900 max-w-4xl leading-[1.03]">
              End-to-end electrical infrastructure services.
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mt-6">
              From substations and overhead lines to solar evacuation and wind
              erection — one accountable team handles engineering, procurement
              and construction.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal
                key={s.slug}
                as={Link}
                to={`/services/${s.slug}`}
                delay={(i % 3) * 90}
                className="group bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:-translate-y-1 transition-all block"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-2xl font-extrabold text-neutral-200">
                    {s.no}
                  </span>
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{s.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Renewable band */}
      <section className="py-20 sm:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal className="rounded-3xl overflow-hidden shadow-xl">
            <img
              src={RENEWABLE.image}
              alt="Solar and wind renewable energy"
              loading="lazy"
              className="w-full h-[380px] object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>{RENEWABLE.eyebrow}</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 leading-tight mb-6">
              {RENEWABLE.heading}
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              {RENEWABLE.body}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-semibold hover:bg-emerald-800 transition-all"
            >
              Discuss your project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
};

export default Services;
