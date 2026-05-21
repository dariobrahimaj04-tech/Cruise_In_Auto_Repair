"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock, DollarSign, Handshake, ShieldCheck, Wrench } from "lucide-react";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { images } from "@/lib/site-data";

const features = [
  { label: "Honest Estimates", icon: Handshake },
  { label: "Transparent Pricing", icon: DollarSign },
  { label: "Fast Turnaround", icon: Clock },
  { label: "Experienced Mechanics", icon: Wrench },
  { label: "Reliable Repairs", icon: ShieldCheck },
  { label: "Local Community Trust", icon: BadgeCheck }
];

export function WhyChooseSection() {
  return (
    <section className="bg-graphite py-24 sm:py-28" id="why-choose-us">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <SectionHeading
            align="left"
            copy="Customers choose a repair shop when they believe the team will explain the issue clearly, charge fairly, and stand behind the work."
            eyebrow="Why Choose Us"
            title="Straight Answers, Skilled Repairs, And Respect For Every Customer"
          />

          <div className="mt-8 space-y-5 text-base leading-8 text-slate-300">
            <p>
              Cruise In Auto Repair is presented as the kind of neighborhood shop
              drivers remember: practical, direct, and focused on fixing the right
              problem the first time.
            </p>
            <p>
              The message centers on honesty, transparent recommendations, experienced
              technicians, fair pricing, and a customer-first mentality that fits a
              trusted Garden City repair business.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  className="flex items-center gap-3 border border-white/10 bg-white/[0.055] px-4 py-4"
                  key={feature.label}
                >
                  <span className="grid h-10 w-10 place-items-center rounded-sm bg-scarlet/15 text-scarlet">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-black uppercase tracking-[0.1em] text-white">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative min-h-[520px] overflow-hidden border border-white/10 bg-white/[0.04] shadow-premium"
          initial={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
        >
          <Image
            alt="Professional mechanic repairing a vehicle in a clean service bay"
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 42vw, 100vw"
            src={images.why}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="max-w-sm border border-white/15 bg-asphalt/78 p-5 backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-scarlet">
                Local Reputation
              </p>
              <p className="mt-3 text-2xl font-black text-white">
                Built around trust, not pressure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
