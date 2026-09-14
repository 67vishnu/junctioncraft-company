// FILE: pages/Contact.jsx — Contact page: info cards + enquiry form (POSTs to backend /api/enquiries).
// EDIT HERE TO: change form fields/layout. Contact details come from mock.js (COMPANY).

import React, { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import Reveal from "../components/Reveal";
import { Eyebrow } from "../components/Sections";
import { createEnquiry } from "../api";
import { COMPANY, SERVICES } from "../mock";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handle = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setSubmitting(true);
    try {
      await createEnquiry({ ...form, source: "contact" });
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      toast.success("Thank you! We'll get back to you shortly.");
    } catch (err) {
      toast.error("Something went wrong. Please try again or WhatsApp us.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full rounded-md border border-input bg-card px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition";

  return (
    <main>
      <section className="pt-[112px] pb-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <Reveal>
            <Eyebrow>Let's Build Together</Eyebrow>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-neutral-900 max-w-3xl leading-[1.03]">
              Talk to our engineering team.
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed max-w-2xl mt-6">
              Tell us about your transmission, substation or renewable project.
              We'll respond with a clear, accountable plan.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12">
          {/* Info */}
          <Reveal className="space-y-4">
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-start gap-4 bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm text-neutral-500">Email us</div>
                <div className="font-semibold text-neutral-900 break-all">
                  {COMPANY.email}
                </div>
              </div>
            </a>
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="flex items-start gap-4 bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm text-neutral-500">Call / WhatsApp</div>
                <div className="font-semibold text-neutral-900">
                  {COMPANY.phone}
                </div>
              </div>
            </a>
            <div className="flex items-start gap-4 bg-card border border-border rounded-2xl p-6">
              <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm text-neutral-500">Location</div>
                <div className="font-semibold text-neutral-900">
                  {COMPANY.location}
                </div>
              </div>
            </div>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-2xl p-5 font-semibold hover:bg-emerald-800 transition-all"
            >
              Chat on WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="bg-card border border-border rounded-3xl p-8 sm:p-10">
            <form onSubmit={submit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Full name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handle}
                    placeholder="Your name"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    placeholder="+91"
                    className={inputCls}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handle}
                  placeholder="you@company.com"
                  className={inputCls}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Service of interest
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handle}
                  className={inputCls}
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  rows={5}
                  placeholder="Tell us about your project scope, voltage and location..."
                  className={inputCls}
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground px-6 py-3.5 rounded-md font-semibold hover:bg-emerald-800 transition-all disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send Inquiry"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
