"use client";
import { motion } from "framer-motion";
import { ArrowRight, Gauge, FileSearch } from "lucide-react";

const caseStudies = [
  {
    Icon: Gauge,
    title: "Website Performance Optimization",
    challenge: "Slow website + poor performance",
    solution: "Technical SEO + performance optimization",
    result: "69 \u2192 100",
    resultLabel: "Performance Score",
    color: "from-emerald-500/20 to-emerald-500/5",
    accentColor: "text-emerald-400",
  },
  {
    Icon: FileSearch,
    title: "Google Indexing Improvement",
    challenge: "Important pages weren't properly indexed.",
    solution: "Technical SEO + indexing + sitemap + internal linking",
    result: "3x More",
    resultLabel: "Indexed Pages",
    color: "from-electric-500/20 to-electric-500/5",
    accentColor: "text-electric-400",
  },
];

export default function CaseStudies() {
  return (
    <section className="section-padding" id="case-studies">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] mb-4">
            See What We{" "}
            <span className="gradient-text">Improved.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center mb-6`}>
                <study.Icon size={24} className={study.accentColor} />
              </div>

              <h3 className="text-xl font-bold text-white mb-6">{study.title}</h3>

              <div className="space-y-4 mb-8 flex-1">
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Challenge</span>
                  <p className="text-slate-300 mt-1">{study.challenge}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">What We Did</span>
                  <p className="text-slate-300 mt-1">{study.solution}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Result</span>
                  <p className={`text-2xl font-bold mt-1 ${study.accentColor}`}>{study.result}</p>
                  <p className="text-xs text-slate-500">{study.resultLabel}</p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm text-electric-400 hover:text-electric-300 font-medium transition-colors group"
              >
                View Case Study
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}