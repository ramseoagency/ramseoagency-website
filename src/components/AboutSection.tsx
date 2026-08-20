"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="section-padding" id="about">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] mb-6">
              We Help Businesses Turn Search Visibility Into{" "}
              <span className="gradient-text">Growth.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              RAM SEO helps businesses build stronger organic visibility through
              technical SEO, content optimization, local search and data-driven
              strategies.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 font-semibold transition-colors group"
            >
              Learn More About RAM SEO
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Right - Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-electric-500/30 to-purple-500/30 mx-auto mb-6 flex items-center justify-center border-2 border-electric-500/20">
                <span className="text-4xl font-bold gradient-text">R</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Founder</h3>
              <p className="text-sm text-electric-400 font-medium">RAM SEO</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
