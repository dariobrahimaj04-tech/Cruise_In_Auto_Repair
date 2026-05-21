import { MapPin, MessageCircle, Phone, Wrench } from "lucide-react";
import { business } from "@/lib/site-data";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" }
];

const serviceLinks = [
  "Engine Repair",
  "Brake Service",
  "Transmission Repair",
  "Diagnostics",
  "Oil Changes",
  "Suspension & Steering"
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07080b]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <a className="flex items-center gap-3 focus-ring" href="#top">
            <span className="grid h-11 w-11 place-items-center rounded-sm border border-white/15 bg-white/10 text-scarlet">
              <Wrench aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="text-base font-black uppercase leading-tight tracking-[0.12em] text-white">
              Cruise In
              <span className="block text-[0.65rem] font-semibold tracking-[0.3em] text-slate-400">
                Auto Repair
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
            Honest local automotive repair for Garden City and surrounding communities.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { label: "Call", icon: Phone, href: business.phoneHref },
              { label: "Map", icon: MapPin, href: "#contact" },
              { label: "Message", icon: MessageCircle, href: "#contact" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  aria-label={item.label}
                  className="grid h-10 w-10 place-items-center rounded-sm border border-white/10 bg-white/[0.06] text-slate-200 transition hover:border-scarlet/45 hover:text-white focus-ring"
                  href={item.href}
                  key={item.label}
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">
            Navigation
          </h3>
          <div className="mt-5 flex flex-col gap-3">
            {footerLinks.map((link) => (
              <a
                className="text-sm text-slate-400 transition hover:text-white focus-ring"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">
            Services
          </h3>
          <div className="mt-5 flex flex-col gap-3">
            {serviceLinks.map((service) => (
              <span className="text-sm text-slate-400" key={service}>
                {service}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.18em] text-white">
            Contact
          </h3>
          <div className="mt-5 space-y-4 text-sm leading-7 text-slate-400">
            <p>
              {business.address}
              <br />
              {business.city}
            </p>
            <a
              className="inline-flex items-center gap-2 font-bold text-white transition hover:text-ember focus-ring"
              href={business.phoneHref}
            >
              <Phone aria-hidden="true" className="h-4 w-4 text-scarlet" />
              {business.phone}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Cruise In Auto Repair. All rights reserved.</p>
          <p>Premium local business website demo.</p>
        </div>
      </div>
    </footer>
  );
}
