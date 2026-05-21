"use client";

import { animate, motion, useInView } from "framer-motion";
import { Award, Car, Gauge, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Stat = {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
};

const stats: Stat[] = [
  { label: "Years Serving Community", value: 10, suffix: "+", icon: Award },
  { label: "Vehicles Repaired", value: 4500, suffix: "+", icon: Car },
  { label: "Repeat Customers", value: 70, suffix: "%", icon: Users },
  { label: "Customer Satisfaction", value: 96, suffix: "%", icon: Gauge }
];

function AnimatedCounter({ value, suffix }: Pick<Stat, "value" | "suffix">) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;

    const controls = animate(0, value, {
      duration: 1.45,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.round(latest))
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-graphite py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,29,46,0.14),transparent_35rem)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.07
              }
            }
          }}
          viewport={{ once: true, amount: 0.3 }}
          whileInView="visible"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                className="metal-border bg-asphalt/72 p-7 text-center backdrop-blur"
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-sm bg-scarlet/15 text-scarlet">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </div>
                <p className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
                  <AnimatedCounter suffix={stat.suffix} value={stat.value} />
                </p>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.15em] text-slate-400">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
