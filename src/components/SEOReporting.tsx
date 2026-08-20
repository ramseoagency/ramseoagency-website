"use client";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Eye, MousePointerClick, Percent, Hash, FileText, Link2, Target } from "lucide-react";

const reportMetrics = [
  { label: "Organic Traffic", Icon: TrendingUp, color: "text-emerald-400" },
  { label: "Search Impressions", Icon: Eye, color: "text-electric-400" },
  { label: "Clicks", Icon: MousePointerClick, color: "text-purple-400" },
  { label: "CTR", Icon: Percent, color: "text-amber-400" },
  { label: "Keyword Rankings", Icon: Hash, color: "text-electric-400" },
  { label: "Indexed Pages", Icon: FileText, color: "text-emerald-400" },
  { label: "Backlinks", Icon: Link2, color: "text-purple-400" },
  { label: "Conversions", Icon: Target, color: "text-rose-400" },
];

export default function SEOReporting() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-slate-500 ml-2">RAM SEO &mdash; Performance Report</span>
              </div>

              <div className="mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-slate-400">Organic Traffic</span>
                  <span className="text-sm font-bold text-emerald-400">{"\u2191"} 147%</span>
                </div>
                <div className="h-16 flex items-end gap-[3px]">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const height = 20 + (i / 30) * 60 + Math.random() * 20;
                    return (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.02 }}
                        className="flex-1 rounded-t bg-gradient-to-t from-electric-500/40 to-emerald-400/80"
                      />
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {reportMetrics.slice(0, 4).map((metric) => (
                  <div key={metric.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div className="flex items-center gap-2 mb-1">
                      <metric.Icon size={14} className={metric.color} />
                      <span className="text-xs text-slate-500">{metric.label}</span>
                    </div>
                    <div className="text-lg font-bold text-white">&mdash;</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-display)] mb-6">
              Know Exactly What Your{" "}
              <span className="gradient-text">SEO Is Doing.</span>
            </h2>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {reportMetrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 py-2"
                >
                  <metric.Icon size={16} className={metric.color} />
                  <span className="text-sm text-slate-300">{metric.label}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-slate-400 leading-relaxed mb-8">
              Clear SEO reporting that shows what improved, what needs attention
              and what we&apos;ll work on next.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 font-semibold transition-colors group"
            >
              View Sample SEO Report
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}