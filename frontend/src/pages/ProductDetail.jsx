// FILE: pages/ProductDetail.jsx — Single product page: overview, features, benefits,
// applications, specs sidebar + "Request a quote" form. Content from mock.js (PRODUCTS by slug).

import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import Reveal from "../components/Reveal";
import QuoteForm from "../components/QuoteForm";
import { Eyebrow, CtaBand } from "../components/Sections";
import { PRODUCTS } from "../mock";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const others = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <main>
      <section className="pt-[112px] pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="h-4 w-4" /> All Products
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <Eyebrow>Product</Eyebrow>
              <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-neutral-900 leading-[1.03]">
                {product.name}
              </h1>
              <p className="text-lg text-neutral-600 leading-relaxed mt-6">
                {product.long}
              </p>
              <p className="text-neutral-600 leading-relaxed mt-4">
                {product.long2}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-semibold mt-8 hover:bg-emerald-800 transition-all"
              >
                Enquire about {product.name} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
            <Reveal delay={120} className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[360px] object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-3 gap-10">
          {/* Features */}
          <Reveal className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-neutral-900 mb-6">
              Key features
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {product.features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-card border border-border rounded-xl p-5"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{f}</span>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold text-neutral-900 mt-12 mb-6">
              Why choose ours
            </h2>
            <div className="space-y-3">
              {product.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-neutral-700">{b}</span>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold text-neutral-900 mt-12 mb-6">
              Applications
            </h2>
            <div className="flex flex-wrap gap-3">
              {product.applications.map((a, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-secondary text-primary font-medium px-4 py-2 rounded-full text-sm"
                >
                  <Layers className="h-4 w-4" /> {a}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Specs */}
          <Reveal delay={120}>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8">
              <h3 className="font-display text-xl font-bold mb-6">
                Specifications
              </h3>
              <dl className="space-y-4">
                {product.specs.map((s, i) => (
                  <div
                    key={i}
                    className="flex justify-between gap-4 border-b border-emerald-800/60 pb-3 last:border-0"
                  >
                    <dt className="text-emerald-200 text-sm">{s.k}</dt>
                    <dd className="font-semibold text-right">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-6">
              <QuoteForm item={product.name} source="product" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 className="font-display text-2xl font-bold text-neutral-900 mb-8">
            Explore more products
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="font-display text-lg font-bold text-neutral-900">
                    {p.name}
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

export default ProductDetail;
