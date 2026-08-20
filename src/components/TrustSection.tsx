"use client";
import { motion } from "framer-motion";
import { Search, BarChart3, MapPin, Zap, Link2, TrendingUp } from "lucide-react";

const tools = [
  { name: "Google Search Console", Icon: Search },
  { name: "Google Analytics", Icon: BarChart3 },
  { name: "Google Business Profile", Icon: MapPin },
  { name: "PageSpeed Insights", Icon: Zap },
  { name: "Ahrefs", Icon: Link2 },
  { name: "Semrush", Icon: TrendingUp },
];

export default function TrustSection() {
  return (
    <section className="py-16 px-6 border-y border-white/5 bg-navy-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm uppercase tracking-widest mb-10"
        >
          SEO backed by real data, not guesswork.
        </motion.p>
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