import { Phone } from "lucide-react";
import { business } from "@/lib/site-data";

export function MobileCallButton() {
  return (
    <a
      aria-label="Call Cruise In Auto Repair"
      className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-scarlet text-white shadow-redglow focus-ring md:hidden"
      href={business.phoneHref}
    >
      <Phone aria-hidden="true" className="h-6 w-6" />
    </a>
  );
}
