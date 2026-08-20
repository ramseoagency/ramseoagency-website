import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import FreeAuditCTA from "@/components/FreeAuditCTA";
import HowItWorks from "@/components/HowItWorks";
import ResultsSection from "@/components/ResultsSection";
import ClientProofSection from "@/components/ClientProofSection";
import CaseStudies from "@/components/CaseStudies";
import BeforeAfter from "@/components/BeforeAfter";
import SEOReporting from "@/components/SEOReporting";
import WhyRAMSEO from "@/components/WhyRAMSEO";
import ExclusivePlatform from "@/components/ExclusivePlatform";

import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import ContactSection from "@/components/ContactSection";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustSection />
      <ProblemSection />
      <ServicesSection />
      <FreeAuditCTA />
      <HowItWorks />
      <ResultsSection />
      <ClientProofSection />
      <CaseStudies />
      <BeforeAfter />
      <SEOReporting />
      <WhyRAMSEO />
      <ExclusivePlatform />
      <AboutSection />
      <FAQSection />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
