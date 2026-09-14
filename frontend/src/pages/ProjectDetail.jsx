// FILE: pages/ProjectDetail.jsx — Single project page: overview, challenge, outcome,
// highlights + key facts sidebar. Content from mock.js (PROJECTS by id).

import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, MapPin, Zap, Ruler, Building2 } from "lucide-react";
import Reveal from "../components/Reveal";
import { Eyebrow, CtaBand } from "../components/Sections";
import { PROJECTS } from "../mock";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];
  const others = PROJECTS.filter((p) => p.id !== project.id).slice(0, 3);

  const facts = [
    { icon: Building2, label: "Client", value: project.client },
    { icon: Zap, label: "Voltage", value: project.voltage },
    { icon: Ruler, label: "Scope", value: project.scope },
    { icon: MapPin, label: "Location", value: project.location },
  ];

  return (
    <main>
      <section className="pt-[112px] pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> All Projects
          </Link>
          <Reveal>
            <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {project.category}
            </span>
            <div className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
              {project.client}
            </div>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-neutral-900 leading-[1.03] max-w-4xl">
              {project.work}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal className="rounded-3xl overflow-hidden shadow-xl mb-12">
            <img
              src={project.image}
              alt={project.work}
              className="w-full h-[300px] sm:h-[440px] object-cover"
            />
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-10">
            <Reveal className="lg:col-span-2">
              <Eyebrow>Project Overview</Eyebrow>
              <p className="text-lg text-neutral-700 leading-relaxed">
                {project.summary}
              </p>

              <h2 className="font-display text-xl font-bold text-neutral-900 mt-8 mb-2">
                The challenge
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                {project.challenge}
              </p>

              <h2 className="font-display text-xl font-bold text-neutral-900 mt-6 mb-2">
                The outcome
              </h2>
              <p className="text-neutral-600 leading-relaxed">
                {project.outcome}
              </p>

              <h2 className="font-display text-xl font-bold text-neutral-900 mt-6 mb-3">
                Highlights
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="bg-secondary text-primary font-medium px-4 py-2 rounded-full text-sm"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-semibold mt-8 hover:bg-emerald-800 transition-all"
              >
                Start a similar project <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-secondary rounded-2xl p-8 space-y-6">
                {facts.map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-card flex items-center justify-center text-primary shrink-0">
                      <f.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-neutral-500">
                        {f.label}
                      </div>
                      <div className="font-semibold text-neutral-900">
                        {f.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-2xl font-bold text-neutral-900 mb-8">
            More projects
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {others.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.work}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase text-primary mb-1">
                    {p.client}
                  </div>
                  <div className="font-display text-base font-bold text-neutral-900">
                    {p.work}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
};

export default ProjectDetail;
