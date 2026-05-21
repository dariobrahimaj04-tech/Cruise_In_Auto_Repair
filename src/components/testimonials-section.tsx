"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const testimonials = [
  {
    quote: "Nothing but polite and professional mechanics and staff.",
    name: "Local customer",
    detail: "Garden City driver"
  },
  {
    quote: "The price was fair and the service was great.",
    name: "Repeat customer",
    detail: "Routine maintenance"
  },
  {
    quote: "Helpful and fast acting. They explained what needed to be done.",
    name: "Service customer",
    detail: "Same-week repair"
  }
];

export function TestimonialsSection() {
  return (
    <section className="bg-asphalt py-24 sm:py-28" id="reviews">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeading
            align="left"
            copy="The review language stays grounded and believable, highlighting courtesy, fairness, speed, and clear communication."
            eyebrow="Customer Reviews"
            title="Realistic Words That Build Confidence"
          />
          <div className="rounded-sm border border-white/10 bg-white/[0.045] p-6 text-slate-300">
            <div className="flex items-center gap-2 text-scarlet">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star aria-hidden="true" className="h-4 w-4 fill-current" key={index} />
              ))}
            </div>
            <p className="mt-4 text-sm leading-7">
              4.6-rated public reputation messaging, framed with restraint so the
              demo feels authentic instead of exaggerated.
            </p>
          </div>
        </div>

        <motion.div
          className="mt-12 grid gap-5 md:grid-cols-3"
          initial="hidden"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08
              }
            }
          }}
          viewport={{ once: true, amount: 0.25 }}
          whileInView="visible"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              className="metal-border flex min-h-72 flex-col justify-between bg-white/[0.055] p-7"
              key={testimonial.quote}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Quote aria-hidden="true" className="h-8 w-8 text-scarlet" />
              <p className="mt-8 text-xl font-semibold leading-9 text-white">
                {testimonial.quote}
              </p>
              <div className="mt-10 border-t border-white/10 pt-5">
                <p className="font-black text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-400">{testimonial.detail}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
