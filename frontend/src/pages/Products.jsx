// FILE: pages/Products.jsx — Products listing grid (cards link to product detail pages).
// EDIT HERE TO: change grid/card layout. Product content lives in mock.js (PRODUCTS).

import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";
import { Eyebrow, CtaBand } from "../components/Sections";
import { PRODUCTS } from "../mock";

const Products = () => {
  return (
    <main>
      <section className="pt-[112px] pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <Eyebrow>Products & Solutions</Eyebrow>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-neutral-900 max-w-4xl leading-[1.03]">
              Manufactured for the grid. Built to last decades.
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mt-6">
              We manufacture and supply grid-grade electrical materials engineered
              for 11kV to 220kV networks — with quality that meets utility and
              national standards.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <Reveal
              key={p.slug}
              as={Link}
              to={`/products/${p.slug}`}
              delay={(i % 3) * 90}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all block"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-neutral-900 mb-2">
                  {p.name}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <CheckCircle2 className="h-4 w-4" /> Utility-grade quality
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
};

export default Products;
