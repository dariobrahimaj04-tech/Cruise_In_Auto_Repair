"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Car, Cog, Droplets, Gauge, ShieldCheck, Wrench } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "Engine Repair",
    description:
      "Accurate engine troubleshooting, component repair, and performance-minded fixes for daily drivers.",
    icon: Wrench
  },
  {
    title: "Brake Service",
    description:
      "Pads, rotors, calipers, brake noise, and pedal feel handled with safety-first attention.",
    icon: ShieldCheck
  },
  {
    title: "Transmission Repair",
    description:
      "Reliable transmission service, shifting concerns, fluid checks, and honest repair guidance.",
    icon: Cog
  },
  {
    title: "Diagnostics",
    description:
      "Modern scan tools and experienced judgment to find the real issue before parts get replaced.",
    icon: Gauge
  },
  {
    title: "Oil Changes",
    description:
      "Fast maintenance using quality fluids with a practical inspection of the essentials.",
    icon: Droplets
  },
  {
    title: "Suspension & Steering",
    description:
      "Ride quality, steering response, alignment-related wear, and front-end repairs done right.",
    icon: Car
  }
];

export function ServicesSection() {
  return (
    <section className="section-shell bg-asphalt py-24 sm:py-28" id="services">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          copy="From daily maintenance to complex drivability issues, the site positions Cruise In as a capable local shop with premium service standards."
          eyebrow="Complete Repair Services"
          title="Built For The Work Local Drivers Actually Need"
        />

        <motion.div
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          initial="hidden"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                className="group metal-border relative overflow-hidden bg-white/[0.055] p-7 transition duration-300 hover:-translate-y-1 hover:border-scarlet/45 hover:bg-white/[0.08]"
                key={service.title}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 bg-scarlet/12 blur-3xl transition group-hover:bg-scarlet/24" />
                <div className="relative">
                  <div className="mb-7 grid h-14 w-14 place-items-center rounded-sm border border-white/10 bg-white/10 text-scarlet">
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-black text-white">{service.title}</h3>
                  <p className="mt-4 min-h-24 text-sm leading-7 text-slate-300">
                    {service.description}
                  </p>
                  <div className="mt-7 h-px w-full bg-gradient-to-r from-scarlet/80 via-white/15 to-transparent" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
