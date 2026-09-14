// FILE: pages/Projects.jsx — Projects listing with category filter (cards link to detail).
// EDIT HERE TO: change filter categories/layout. The 8 projects live in mock.js (PROJECTS).

import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { MapPin, Zap, Ruler } from "lucide-react";
import Reveal from "../components/Reveal";
import { Eyebrow, ClientsStrip, CtaBand } from "../components/Sections";
import { PROJECTS } from "../mock";

const CATEGORIES = ["All", "Transmission", "Distribution", "Substation"];

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const list = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <main>
      <section className="pt-[112px] pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <Eyebrow>Proven On Ground</Eyebrow>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-neutral-900 max-w-4xl leading-[1.03]">
              Projects that carry power to millions.
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mt-6">
              A selection of transmission, distribution and substation works
              delivered across Karnataka for utilities and renewable developers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  filter === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-neutral-600 hover:bg-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((p, i) => (
              <Reveal
                key={`${p.client}-${i}`}
                as={Link}
                to={`/projects/${p.id}`}
                delay={(i % 3) * 80}
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
                    {p.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
                    {p.client}
                  </div>
                  <h3 className="font-display text-lg font-bold text-neutral-900 mb-4 leading-snug">
                    {p.work}
                  </h3>
                  <div className="space-y-2 text-sm text-neutral-500">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4 text-primary" /> {p.voltage}
                    </div>
                    <div className="flex items-center gap-2">
                      <Ruler className="h-4 w-4 text-primary" /> {p.scope}
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      {p.location}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClientsStrip />
      <CtaBand />
    </main>
  );
};

export default Projects;
