"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FreeAuditCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="audit">
      <div className="absolute inset-0 bg-gradient-to-r from-electric-600/20 via-purple-500/20 to-electric-600/20" />
      <div className="absolute inset-0 bg-navy-950/80" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-electric-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] mb-6">
            What&apos;s Holding Your{" "}
            <span className="gradient-text">Website Back?</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Get a free SEO audit and discover technical issues, keyword
            opportunities, content gaps and ways to improve your Google
            visibility.
          </p>
          <a href="#contact" className="cta-button text-base inline-flex items-center gap-2 px-10 py-4 text-lg">
            <span className="flex items-center gap-2">
              Get My Free SEO Audit
              <ArrowRight size={20} />
            </span>
          </a>
          <p className="mt-6 text-sm text-slate-500">
            No obligation &bull; Real SEO insights &bull; Actionable recommendations
          </p>
        </motion.div>
      </div>
    </section>
  );
}