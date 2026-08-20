"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const metrics = [
  { label: "Website Performance", from: 69, to: 100, suffix: "", prefix: "", display: "arrow" },
  { label: "Organic Traffic", from: 0, to: 147, suffix: "%", prefix: "+", display: "value" },
  { label: "Search Visibility", from: 0, to: 89, suffix: "%", prefix: "+", display: "value" },
  { label: "Indexed Pages", from: 12, to: 48, suffix: "", prefix: "", display: "arrow" },
  { label: "Keywords Improved", from: 0, to: 85, suffix: "+", prefix: "", display: "value" },
  { label: "Organic Clicks", from: 0, to: 234, suffix: "%", prefix: "+", display: "value" },
];

function AnimatedCounter({ from, to, prefix, suffix, display, inView }: {
  from: number; to: number; prefix: string; suffix: string; display: string; inView: boolean;
}) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let start = from;
    const duration = 2000;
    const increment = (to - from) / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, from, to]);

  if (display === "arrow") {
    return (
      <span className="text-3xl md:text-4xl font-bold text-white">
        {from} <span className="text-electric-400">{"\u2192"}</span> {count}
      </span>
    );
  }

  return (
    <span className="text-3xl md:text-4xl font-bold text-white">
      {prefix}{count}{suffix}
    </span>
  );
}

export default function ResultsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-navy-900/30" id="results" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] mb-4">
            Real SEO.{" "}
            <span className="gradient-text">Measurable Results.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-8 text-center"
            >
              <AnimatedCounter {...metric} inView={inView} />
              <p className="mt-3 text-sm text-slate-400 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 text-electric-400 hover:text-electric-300 font-semibold transition-colors group"
          >
            See Our Case Studies
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}