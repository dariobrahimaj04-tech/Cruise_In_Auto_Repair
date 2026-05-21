"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Navigation, Phone, Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { business } from "@/lib/site-data";

export function ContactSection() {
  return (
    <section className="bg-asphalt py-24 sm:py-28" id="contact">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          copy="Call the shop or request an appointment for honest repair guidance from a trusted Garden City team."
          eyebrow="Contact The Shop"
          title="Schedule Service in Garden City"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            className="metal-border bg-white/[0.055] p-6 sm:p-8"
            initial={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="space-y-5">
              <div className="flex gap-4 border-b border-white/10 pb-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-scarlet/15 text-scarlet">
                  <MapPin aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-white">
                    Address
                  </p>
                  <a
                    className="mt-2 block leading-7 text-slate-300 transition hover:text-white focus-ring"
                    href={business.mapsHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {business.name}
                    <br />
                    {business.address}
                    <br />
                    {business.city}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 border-b border-white/10 pb-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-scarlet/15 text-scarlet">
                  <Phone aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-white">
                    Phone
                  </p>
                  <a
                    className="mt-2 block text-lg font-bold text-slate-200 transition hover:text-white focus-ring"
                    href={business.phoneHref}
                  >
                    {business.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-scarlet/15 text-scarlet">
                  <Clock aria-hidden="true" className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-white">
                    Business Hours
                  </p>
                  <div className="mt-3 space-y-2">
                    {business.hours.map((item) => (
                      <div
                        className="flex min-w-0 justify-between gap-5 text-sm text-slate-300"
                        key={item.day}
                      >
                        <span>{item.day}</span>
                        <span className="font-semibold text-white">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 overflow-hidden border border-white/10 bg-graphite">
              <div className="relative min-h-72 bg-garage-grid bg-[length:38px_38px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,46,0.35),transparent_12rem)]" />
                <div className="absolute inset-x-8 top-1/2 h-1 -translate-y-1/2 bg-slate-500/35" />
                <div className="absolute inset-y-8 left-1/2 w-1 -translate-x-1/2 bg-slate-500/35" />
                <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-asphalt bg-scarlet text-white shadow-redglow">
                  <Navigation aria-hidden="true" className="h-7 w-7" />
                </div>
                <div className="absolute bottom-5 left-5 right-5 border border-white/10 bg-asphalt/82 p-4 backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-scarlet">
                    Middlebelt Rd
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Garden City, Michigan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="metal-border bg-white/[0.055] p-6 sm:p-8"
            initial={{ opacity: 0, x: 24 }}
            onSubmit={(event) => event.preventDefault()}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-300">
                  Full Name
                </span>
                <input
                  className="mt-3 w-full rounded-sm border border-white/10 bg-asphalt px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-scarlet"
                  placeholder="Full name"
                  type="text"
                />
              </label>
              <label className="block">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-300">
                  Phone Number
                </span>
                <input
                  className="mt-3 w-full rounded-sm border border-white/10 bg-asphalt px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-scarlet"
                  placeholder="(734) 000-0000"
                  type="tel"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-300">
                  Vehicle Year / Make / Model
                </span>
                <input
                  className="mt-3 w-full rounded-sm border border-white/10 bg-asphalt px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-scarlet"
                  placeholder="2018 Ford F-150"
                  type="text"
                />
              </label>
              <label className="block">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-300">
                  Service Needed
                </span>
                <select
                  className="mt-3 w-full rounded-sm border border-white/10 bg-asphalt px-4 py-4 text-white outline-none transition focus:border-scarlet"
                  defaultValue=""
                >
                  <option disabled value="">
                    Select a service
                  </option>
                  <option>Engine Repair</option>
                  <option>Brake Service</option>
                  <option>Transmission Repair</option>
                  <option>Diagnostics</option>
                  <option>Oil Change</option>
                  <option>Suspension & Steering</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-300">
                  Preferred Date
                </span>
                <input
                  className="mt-3 w-full rounded-sm border border-white/10 bg-asphalt px-4 py-4 text-white outline-none transition focus:border-scarlet"
                  type="date"
                />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-300">
                  Message
                </span>
                <textarea
                  className="mt-3 min-h-40 w-full resize-none rounded-sm border border-white/10 bg-asphalt px-4 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-scarlet"
                  placeholder="Tell us what is going on with your vehicle."
                />
              </label>
            </div>

            <button
              className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-sm bg-scarlet px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-redglow transition hover:bg-ember focus-ring sm:w-auto"
              type="submit"
            >
              Request Appointment
              <Send aria-hidden="true" className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
