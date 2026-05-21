"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, DollarSign, MapPin, Phone, ShieldCheck, Star, Wrench } from "lucide-react";
import Image from "next/image";
import { business, images } from "@/lib/site-data";

const badges = [
  { label: "4.6 Rated", icon: Star },
  { label: "Locally Owned", icon: MapPin },
  { label: "Honest Pricing", icon: DollarSign },
  { label: "Experienced Technicians", icon: BadgeCheck }
];

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-asphalt pt-24"
      id="top"
    >
      <Image
        alt="Mechanic working under the hood in a professional automotive repair shop"
        className="object-cover opacity-58"
        fill
        priority
        sizes="100vw"
        src={images.hero}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,11,15,0.95)_0%,rgba(9,11,15,0.77)_44%,rgba(9,11,15,0.45)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(225,29,46,0.25),transparent_26rem)]" />
      <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-asphalt to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-12 sm:px-6 lg:px-8">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
          initial={{ opacity: 0, y: 28 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-3 border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-md">
            <ShieldCheck aria-hidden="true" className="h-4 w-4 text-scarlet" />
            <span className="text-xs font-black uppercase tracking-[0.24em] text-slate-100">
              Garden City Auto Repair
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl">
            Honest Auto Repair You Can Trust
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
            Serving Garden City and surrounding communities with reliable automotive repair
            for over a decade.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-sm bg-scarlet px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-redglow transition hover:-translate-y-0.5 hover:bg-ember focus-ring"
              href="#contact"
            >
              Schedule Service
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-sm border border-white/20 bg-white/10 px-7 py-4 text-sm font-black uppercase tracking-[0.14em] text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 focus-ring"
              href={business.phoneHref}
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Call Shop
            </a>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 grid gap-3 sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-4"
          initial={{ opacity: 0, y: 22 }}
          transition={{ delay: 0.22, duration: 0.7, ease: "easeOut" }}
        >
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                className="metal-border flex items-center gap-3 bg-white/[0.075] px-4 py-4 backdrop-blur-xl"
                key={badge.label}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-scarlet/15 text-scarlet">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
                <span className="text-sm font-black uppercase tracking-[0.12em] text-white">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-slate-400 lg:flex">
        <Wrench aria-hidden="true" className="h-4 w-4 text-scarlet" />
        Middlebelt Rd
      </div>
    </section>
  );
}
