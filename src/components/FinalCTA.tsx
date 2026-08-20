"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-[#1a1040] to-navy-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-500/[0.08] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/[0.08] rounded-full blur-[120px]" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] mb-4">
            Your Next Customer Is Already{" "}
            <span className="gradient-text">Searching on Google.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-3">
            Will they find you&mdash;or your competitor?
          </p>
          <p className="text-slate-500 mb-10">
            Let&apos;s find out what&apos;s stopping your website from growing.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#audit" className="cta-button text-base px-8 py-4">
              <span className="flex items-center gap-2">
                Get Your Free SEO Audit
                <ArrowRight size={18} />
              </span>
            </a>
            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300 font-semibold"
            >
              <MessageCircle size={18} />
              WhatsApp RAM SEO
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}