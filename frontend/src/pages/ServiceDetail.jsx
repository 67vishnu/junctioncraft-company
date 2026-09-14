// FILE: pages/ServiceDetail.jsx — Single service page: overview, scope ("what we deliver"),
// process steps, deliverables, benefits + "Request a quote" form. Content from mock.js (SERVICES by slug).

import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Building2,
  Cable,
  Sun,
  Wind,
  Truck,
  Lightbulb,
} from "lucide-react";
import Reveal from "../components/Reveal";
import QuoteForm from "../components/QuoteForm";
import { Eyebrow, CtaBand } from "../components/Sections";
import { SERVICES } from "../mock";

const ICONS = { Building2, Cable, Sun, Wind, Truck, Lightbulb };

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug) || SERVICES[0];
  const Icon = ICONS[service.icon];
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <section className="pt-[112px] pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="h-14 w-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-6">
                <Icon className="h-7 w-7" />
              </div>
              <Eyebrow>Service {service.no}</Eyebrow>
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-neutral-900 leading-[1.03]">
                {service.title}
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed mt-6">
                {service.long}
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                {service.long2}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-semibold mt-8 hover:bg-emerald-800 transition-all"
              >
                Discuss this service <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={120} className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[360px] object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-6">
              Scope of work
            </h2>
            <ul className="space-y-4">
              {service.scope.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{s}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display text-2xl font-bold text-neutral-900 mt-12 mb-6">
              Deliverables
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.deliverables.map((d, i) => (
                <span
                  key={i}
                  className="bg-secondary text-primary font-medium px-4 py-2 rounded-full text-sm"
                >
                  {d}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-6">
              Our process
            </h2>
            <div className="space-y-4">
              {service.process.map((p, i) => (
                <div
                  key={i}
                  className="flex items-center gap-5 bg-card border border-border rounded-xl p-5"
                >
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground font-display font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <span className="font-semibold text-neutral-800">{p}</span>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold text-neutral-900 mt-10 mb-4">
              Client benefits
            </h2>
            <div className="space-y-3">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{b}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-12">
          <div className="max-w-xl">
            <QuoteForm item={service.title} source="service" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-2xl font-bold text-neutral-900 mb-8">
            More services
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {others.map((s) => {
              const I = ICONS[s.icon];
              return (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="h-11 w-11 rounded-xl bg-secondary flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <I className="h-5 w-5" />
                  </div>
                  <div className="font-display text-lg font-bold text-neutral-900">
                    {s.title}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
};

export default ServiceDetail;
