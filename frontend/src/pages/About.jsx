// FILE: pages/About.jsx — About page: story, mission/vision, expertise, stats, timeline.
// EDIT HERE TO: change the `timeline` and `commitments` arrays (top of file).
// Main About text/paragraphs/expertise live in mock.js (ABOUT).

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Workflow,
  ShieldCheck,
  Leaf,
  Target,
  Eye,
  Award,
  CheckCircle2,
} from "lucide-react";
import Reveal from "../components/Reveal";
import DownloadProfile from "../components/DownloadProfile";
import { Eyebrow, CtaBand } from "../components/Sections";
import { ABOUT, STATS, COMPANY } from "../mock";

const ICONS = { Workflow, ShieldCheck, Leaf };

const timeline = [
  { year: "2021", text: "Junctioncraft Pvt. Ltd. incorporated on March 12, registered with ROC Bangalore." },
  { year: "2022", text: "Secured Karnataka Government approval as an electrical contractor." },
  { year: "2023", text: "Executed multi-kilometre 11kV and 33kV strengthening works for HESCOM." },
  { year: "2024", text: "Delivered 110kV & 220kV transmission lines and solar evacuation corridors." },
];

const commitments = [
  "Single accountable EPC team from design to commissioning",
  "Strict adherence to national electrical & safety standards",
  "Planned shutdown windows to minimise utility downtime",
  "In-house manufacturing and supply of grid-grade materials",
];

const About = () => {
  return (
    <main>
      <section className="pt-[112px] pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <Eyebrow>{ABOUT.eyebrow}</Eyebrow>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-neutral-900 max-w-4xl leading-[1.03]">
              {ABOUT.heading}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mt-6">
              {ABOUT.body}
            </p>
            <div className="mt-8">
              <DownloadProfile />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-6">
          {ABOUT.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 80}>
              <p className="text-neutral-700 leading-relaxed text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="mb-10">
            <Eyebrow>Our Expertise</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900">
              Capabilities across the power value chain.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT.expertise.map((e, i) => (
              <Reveal
                key={i}
                delay={i * 80}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h3 className="font-display text-lg font-bold text-neutral-900 mb-2">
                  {e.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {e.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-6">
          <Reveal className="bg-primary text-primary-foreground rounded-3xl p-10">
            <Target className="h-9 w-9 text-emerald-300 mb-5" />
            <h2 className="font-display text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-emerald-50/90 leading-relaxed">
              To build reliable, safe and sustainable electrical infrastructure
              that accelerates India's transition to clean, green energy.
            </p>
          </Reveal>
          <Reveal delay={120} className="bg-card border border-border rounded-3xl p-10">
            <Eye className="h-9 w-9 text-primary mb-5" />
            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-3">
              Our Vision
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              To be Karnataka's most trusted green-energy EPC partner for
              transmission, substations and renewable evacuation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-4 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-3 gap-6">
          {ABOUT.pillars.map((p, i) => {
            const Icon = ICONS[p.icon];
            return (
              <Reveal key={i} delay={i * 100} className="bg-secondary rounded-2xl p-8">
                <div className="h-12 w-12 rounded-xl bg-card flex items-center justify-center text-primary mb-5">
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
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={i} delay={i * 80} className="text-center">
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                {s.value}
              </div>
              <div className="text-sm text-emerald-200 mt-2">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline + commitments */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <Eyebrow>Our Journey</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-10">
              A growing track record.
            </h2>
            <div className="space-y-8">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-6">
                  <div className="font-display text-2xl font-extrabold text-primary w-16 shrink-0">
                    {t.year}
                  </div>
                  <p className="text-neutral-600 leading-relaxed border-l-2 border-border pl-6 pb-2">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>Why Junctioncraft</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-900 mb-8">
              Built on accountability.
            </h2>
            <ul className="space-y-5">
              {commitments.map((c, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-neutral-700 leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3 bg-secondary rounded-xl p-5">
              <Award className="h-8 w-8 text-primary" />
              <div>
                <div className="font-semibold text-neutral-900">
                  Karnataka Government Approved
                </div>
                <div className="text-sm text-neutral-500">
                  Approved electrical contractor, Karnataka
                </div>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-primary font-semibold mt-8 group"
            >
              Work with us
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </main>
  );
};

export default About;
