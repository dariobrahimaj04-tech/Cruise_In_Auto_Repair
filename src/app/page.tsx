import { ContactSection } from "@/components/contact-section";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { HeroSection } from "@/components/hero-section";
import { MobileCallButton } from "@/components/mobile-call-button";
import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { WhyChooseSection } from "@/components/why-choose-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <StatsSection />
        <GallerySection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
      <MobileCallButton />
    </>
  );
}
