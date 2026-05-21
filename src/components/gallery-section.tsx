"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { images } from "@/lib/site-data";

const galleryItems = [
  {
    title: "Brake Work",
    tag: "Before / After",
    image: images.brake,
    className: "md:col-span-2"
  },
  {
    title: "Engine Bay",
    tag: "Diagnostics",
    image: images.engine,
    className: ""
  },
  {
    title: "Service Bay",
    tag: "Clean Process",
    image: images.bay,
    className: ""
  },
  {
    title: "Repair Detail",
    tag: "Precision",
    image: images.detail,
    className: "md:col-span-2"
  }
];

export function GallerySection() {
  return (
    <section className="section-shell bg-asphalt py-24 sm:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          copy="A high-impact visual section gives the shop a premium portfolio feel, showing the care and detail behind the repair process."
          eyebrow="Shop Quality"
          title="Before / After Gallery"
        />

        <motion.div
          className="mt-14 grid auto-rows-[300px] gap-5 md:grid-cols-3 md:auto-rows-[340px]"
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
          {galleryItems.map((item) => (
            <motion.article
              className={`group relative overflow-hidden border border-white/10 bg-white/[0.04] shadow-premium ${item.className}`}
              key={item.title}
              variants={{
                hidden: { opacity: 0, scale: 0.98 },
                visible: { opacity: 1, scale: 1 }
              }}
            >
              <Image
                alt={`${item.title} at an automotive repair shop`}
                className="object-cover transition duration-500 group-hover:scale-105"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-asphalt via-asphalt/18 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-flex rounded-sm bg-scarlet px-3 py-1 text-[0.68rem] font-black uppercase tracking-[0.18em] text-white">
                  {item.tag}
                </span>
                <h3 className="mt-4 text-2xl font-black text-white">{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
