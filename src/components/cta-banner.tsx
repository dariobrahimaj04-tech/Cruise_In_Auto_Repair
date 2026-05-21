"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { business } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="bg-graphite px-5 py-20 sm:px-6 lg:px-8">
      <motion.div
        className="relative mx-auto max-w-7xl overflow-hidden border border-scarlet/35 bg-scarlet px-6 py-12 shadow-redglow sm:px-10 lg:px-14"
        initial={{ opacity: 0, y: 24 }}
        transition={{ duration: 0.65 }}
        viewport={{ once: true, amount: 0.25 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2),transparent_34%,rgba(0,0,0,0.26))]" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-white/75">
              Book With Confidence
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white sm:text-5xl">
              Need Reliable Auto Repair?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Trusted local automotive repair backed by honest service and experienced
              technicians.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-sm bg-white px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-asphalt transition hover:-translate-y-0.5 focus-ring"
              href="#contact"
            >
              Schedule Service
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-sm border border-white/45 bg-black/20 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 hover:bg-black/30 focus-ring"
              href={business.phoneHref}
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Call Today
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
