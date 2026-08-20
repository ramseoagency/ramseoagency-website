"use client";
import { motion } from "framer-motion";
import { Target, BarChart3, Search, Settings, TrendingUp, Users } from "lucide-react";

const reasons = [
  {
    Icon: Target,
    title: "Business Focused",
    description: "We focus on traffic, leads and business growth\u2014not vanity metrics.",
    color: "text-electric-400",
  },
  {
    Icon: BarChart3,
    title: "Data Driven",
    description: "Every important SEO decision is backed by real website and search data.",
    color: "text-emerald-400",
  },
  {
    Icon: Search,
    title: "Transparent",
    description: "You know what we're working on and why.",
    color: "text-purple-400",
  },
  {
    Icon: Settings,
    title: "Complete SEO",
    description: "Technical SEO, on-page, content, local and off-page optimization.",
    color: "text-amber-400",
  },
  {
    Icon: TrendingUp,
    title: "Continuous Improvement",
    description: "SEO doesn't stop after one audit. We keep finding new opportunities.",
    color: "text-electric-400",
  },
  {
    Icon: Users,
    title: "Clear Communication",
    description: "Simple reports and straightforward communication.",
    color: "text-emerald-400",
  },
];

export default function WhyRAMSEO() {
  return (
    <section className="section-padding bg-navy-900/30" id="why-ram-seo">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] mb-4">
            SEO Without the{" "}
            <span className="gradient-text">Black Box.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-7"
            >
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${reason.color}`}>
                <reason.Icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}