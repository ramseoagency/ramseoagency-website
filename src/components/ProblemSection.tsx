"use client";
import { motion } from "framer-motion";
import { Search, TrendingDown, Settings, Target } from "lucide-react";

const problems = [
  {
    Icon: Search,
    title: "Not Ranking",
    description: "Your website isn't appearing for the searches that matter to your business.",
    color: "from-rose-500/20 to-rose-500/5",
    borderColor: "hover:border-rose-500/30",
    iconColor: "text-rose-400",
  },
  {
    Icon: TrendingDown,
    title: "Low Organic Traffic",
    description: "Your competitors are getting the visitors who could be your customers.",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "hover:border-amber-500/30",
    iconColor: "text-amber-400",
  },
  {
    Icon: Settings,
    title: "Technical Issues",
    description: "Slow pages, indexing problems and poor website structure can hold your rankings back.",
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "hover:border-purple-500/30",
    iconColor: "text-purple-400",
  },
  {
    Icon: Target,
    title: "No Clear Strategy",
    description: "SEO without a proper strategy wastes time and money.",
    color: "from-electric-500/20 to-electric-500/5",
    borderColor: "hover:border-electric-500/30",
    iconColor: "text-electric-400",
  },
];

export default function ProblemSection() {
  return (
    <section className="section-padding" id="problems">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] mb-4">
            Is Your Website Being Found{" "}
            <span className="gradient-text">by Your Customers?</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 ${problem.borderColor}`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-5`}>
                <problem.Icon size={24} className={problem.iconColor} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 text-slate-400 text-base"
        >
          <span className="font-semibold text-white">RAM SEO</span> finds what&apos;s holding your website back and builds a clear plan to fix it.
        </motion.p>
      </div>
    </section>
  );
}