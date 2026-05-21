"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const testimonials = [
  {
    name: "Gary Chappell",
    subtitle: "Local Guide · 31 reviews · 5 photos",
    quote:
      "Been there 2 times for repair of my Ford Flex. Both times they were fast and efficient at a very fair price. I'm 68 years old and I finally found an auto repair shop that takes care of their customers.",
    footerLabel: "Ford Flex Owner",
    footerSubtext: "Repeat repair customer"
  },
  {
    name: "James Tucker",
    subtitle: "Local Guide · 14 reviews",
    quote:
      "I bring all my trucks here when I need repairs. My business is fast paced so I appreciate them always getting my trucks in and back on the road ASAP. Modie is very knowledgeable and always lets me know what I do need and what I don't need.",
    footerLabel: "Business Fleet Customer",
    footerSubtext: "Commercial vehicle repairs"
  },
  {
    name: "Sade MyChell",
    subtitle: "Local Guide · 56 reviews · 5 photos",
    quote:
      "These men are so kind and affordable. They have no idea what their kindness did for me today. Thank you.",
    footerLabel: "Local customer",
    footerSubtext: "Affordable same-week service"
  }
];

export function TestimonialsSection() {
  return (
    <section className="bg-asphalt py-24 sm:py-28" id="reviews">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionHeading
            align="left"
            copy="Drivers come back for clear communication, fair pricing, and repairs handled by a team that treats people with respect."
            eyebrow="Customer Reviews"
            title="Trusted by Local Drivers"
          />
          <div className="rounded-sm border border-white/10 bg-white/[0.045] p-6 text-slate-300">
            <div className="flex items-center gap-2 text-scarlet">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star aria-hidden="true" className="h-4 w-4 fill-current" key={index} />
              ))}
            </div>
            <p className="mt-4 text-sm leading-7">
              A 4.6-star Google rating backed by straightforward service and
              professional communication.
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
              className="group metal-border flex min-h-[32rem] flex-col justify-between bg-white/[0.055] p-7 transition duration-300 hover:-translate-y-1 hover:border-scarlet/35 hover:shadow-redglow sm:p-8"
              key={testimonial.name}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-black text-white">
                        {testimonial.name}
                      </h3>
                      <BadgeCheck
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-scarlet"
                      />
                    </div>
                    <p className="mt-2 text-xs font-semibold tracking-[0.08em] text-slate-500">
                      {testimonial.subtitle}
                    </p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-scarlet/25 bg-scarlet/10 text-scarlet transition group-hover:bg-scarlet/15">
                    <Quote aria-hidden="true" className="h-5 w-5" />
                  </span>
                </div>

                <p className="mt-8 text-base font-semibold leading-8 text-slate-100 sm:text-lg sm:leading-9">
                  {testimonial.quote}
                </p>
              </div>

              <div className="mt-10 border-t border-white/10 pt-5">
                <p className="text-sm font-black tracking-[0.08em] text-white">
                  {testimonial.footerLabel}
                </p>
                <p className="mt-2 text-sm text-slate-400">
                  {testimonial.footerSubtext}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
