// FILE: pages/Home.jsx — Homepage: hero (with animated wind turbines), stats, marquee,
// about preview, products, services, renewable, projects, testimonials, clients, CTA.
// EDIT HERE TO: reorder homepage sections. All text/data lives in mock.js.

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Workflow,
  ShieldCheck,
  Leaf,
  Building2,
  Cable,
  Sun,
  Wind,
  Truck,
  Lightbulb,
  MapPin,
} from "lucide-react";
import Reveal from "../components/Reveal";
import WindTurbine from "../components/WindTurbine";
import {
  Eyebrow,
  Marquee,
  Testimonials,
  ClientsStrip,
  CtaBand,
} from "../components/Sections";
import {
  HERO,
  STATS,
  ABOUT,
  PRODUCTS,
  SERVICES,
  RENEWABLE,
  PROJECTS,
} from "../mock";

const ICONS = {
  Workflow,
  ShieldCheck,
  Leaf,
  Building2,
  Cable,
  Sun,
  Wind,
  Truck,
  Lightbulb,
};

const Home = () => {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative pt-[72px] jc-hero-bg">
        <WindTurbine />
        <div className="jc-hero-veil relative z-10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-center">
              <div className="jc-reveal">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-primary mb-6">
                  [ {HERO.badge} ]
                </div>
                <h1 className="font-display text-[3.2rem] leading-[0.92] sm:text-7xl lg:text-8xl font-extrabold text-neutral-900">
                  {HERO.titleLead}
                  <br />
                  <span className="text-primary">{HERO.titleAccent}</span>
                </h1>
              </div>

              <div className="jc-reveal" style={{ animationDelay: "0.15s" }}>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-md">
                  {HERO.description}
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-semibold hover:bg-emerald-800 transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Our Services <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 border border-primary/40 text-primary px-6 py-3.5 rounded-md font-semibold hover:bg-secondary transition-all"
                  >
                    Get a Quote
                  </Link>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 mt-8">
                  {HERO.note}
                </p>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border mt-16 sm:mt-20 rounded-xl overflow-hidden border border-border">
              {STATS.map((s, i) => (
                <Reveal
                  key={i}
                  delay={i * 80}
                  className="bg-background p-6 sm:p-8"
                >
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-primary">
                    {s.value}
                  </div>
                  <div className="text-sm text-neutral-500 mt-2">{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* ABOUT */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal>
              <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-neutral-900 leading-[1.05]">
                {ABOUT.heading}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {ABOUT.body}
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold mt-6 group"
              >
                Our Story
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {ABOUT.pillars.map((p, i) => {
              const Icon = ICONS[p.icon];
              return (
                <Reveal
                  key={i}
                  delay={i * 100}
                  className="bg-card rounded-2xl border border-border p-8 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">{p.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 sm:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <Eyebrow>Products & Solutions</Eyebrow>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-neutral-900 leading-tight">
                Manufactured for the grid. Built to last decades.
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-primary font-semibold shrink-0 hover:gap-3 transition-all"
            >
              All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p, i) => (
              <Reveal
                key={p.slug}
                as={Link}
                to={`/products/${p.slug}`}
                delay={(i % 3) * 90}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all block"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                    {p.name}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="max-w-2xl mb-14">
            <Eyebrow>What We Deliver</Eyebrow>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-neutral-900 leading-tight">
              End-to-end electrical infrastructure services.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {SERVICES.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <Reveal
                  key={s.slug}
                  as={Link}
                  to={`/services/${s.slug}`}
                  delay={(i % 3) * 80}
                  className="group bg-background p-8 hover:bg-secondary transition-colors block"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-sm font-bold text-neutral-300">
                      {s.no}
                    </span>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-neutral-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* RENEWABLE */}
      <section className="py-20 sm:py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={RENEWABLE.image}
                alt="Utility-scale solar farm"
                loading="lazy"
                className="w-full h-[420px] object-cover"
              />
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow>{RENEWABLE.eyebrow}</Eyebrow>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-neutral-900 leading-tight mb-6">
                {RENEWABLE.heading}
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                {RENEWABLE.body}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  to="/services"
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <Sun className="h-6 w-6 text-primary mb-3" />
                  <div className="font-bold text-neutral-900">Solar EPC</div>
                  <div className="text-sm text-neutral-500">
                    Evacuation lines & pooling substations
                  </div>
                </Link>
                <Link
                  to="/services"
                  className="bg-card rounded-xl border border-border p-5 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <Wind className="h-6 w-6 text-primary mb-3" />
                  <div className="font-bold text-neutral-900">Wind</div>
                  <div className="text-sm text-neutral-500">
                    Erection & electrical cabling
                  </div>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <Eyebrow>Proven On Ground</Eyebrow>
              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-neutral-900 leading-tight">
                Projects that carry power to millions.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-primary font-semibold shrink-0 hover:gap-3 transition-all"
            >
              All Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 3).map((p, i) => (
              <Reveal
                key={i}
                as={Link}
                to={`/projects/${p.id}`}
                delay={i * 100}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all block"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.work}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {p.voltage}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                    {p.client}
                  </div>
                  <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">
                    {p.work} — {p.scope}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                    <MapPin className="h-4 w-4" /> {p.location}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <ClientsStrip />
      <CtaBand />
    </main>
  );
};

export default Home;
