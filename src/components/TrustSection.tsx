"use client";
import { motion } from "framer-motion";
import { Search, BarChart3, MapPin, Zap, Link2, TrendingUp, Gauge, FileSearch } from "lucide-react";

const tools = [
  { name: "Google Search Console", Icon: Search },
  { name: "Google Analytics", Icon: BarChart3 },
  { name: "Google Business Profile", Icon: MapPin },
  { name: "PageSpeed Insights", Icon: Zap },
  { name: "Ahrefs", Icon: Link2 },
  { name: "Semrush", Icon: TrendingUp },
];

const proofPoints = [
  {
    Icon: Gauge,
    value: "69 → 100",
    label: "Website performance score",
    detail: "Technical SEO and performance optimization",
    color: "text-emerald-400",
  },
  {
    Icon: FileSearch,
    value: "3x More",
    label: "Indexed pages",
    detail: "Indexing, sitemap and internal linking improvements",
    color: "text-electric-400",
  },
  {
    Icon: MapPin,
    value: "Local SEO",
    label: "Built for nearby customers",
    detail: "Google Business Profile, local visibility and location-led growth",
    color: "text-amber-400",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 px-6 border-y border-white/5 bg-navy-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-400">
            Proof-led SEO for real businesses
          </p>
          <p className="mt-3 text-slate-400">
            From local businesses to growing digital teams, every campaign starts with data and ends with a clear growth story.
          </p>
        </motion.div>

        <div className="mb-12 grid gap-4 md:grid-cols-3">
          {proofPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-5"
            >
              <div className={`mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ${point.color}`}>
                <point.Icon size={20} />
              </div>
              <p className={`text-2xl font-bold ${point.color}`}>{point.value}</p>
              <p className="mt-1 font-semibold text-white">{point.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{point.detail}</p>
            </motion.div>
          ))}
        </div>

        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Reporting and optimization powered by
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-electric-500/20 transition-all cursor-default"
            >
              <tool.Icon size={20} className="text-electric-400" />
              <span className="text-sm text-slate-400 font-medium whitespace-nowrap">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}