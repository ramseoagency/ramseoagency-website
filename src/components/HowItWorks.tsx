"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Audit", description: "We analyze your website, technical health, rankings and current organic performance." },
  { num: "02", title: "Strategy", description: "We identify valuable keywords, competitors and the biggest growth opportunities." },
  { num: "03", title: "Optimize", description: "We improve your technical SEO, pages, content and website structure." },
  { num: "04", title: "Build", description: "We strengthen your website through content, local SEO and relevant authority-building activities." },
  { num: "05", title: "Measure", description: "We track rankings, traffic, visibility and conversions." },
  { num: "06", title: "Improve", description: "We continuously optimize the strategy based on real performance data." },
];

export default function HowItWorks() {
  return (
    <section className="section-padding" id="how-it-works">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] mb-4">
            A Simple Process.{" "}
            <span className="gradient-text">Measurable Growth.</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[30px] md:left-[40px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-electric-500/50 via-purple-500/50 to-emerald-500/50" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-start gap-6 md:gap-8 group"
              >
                <div className="relative z-10 flex-shrink-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-2xl bg-navy-800 border border-white/10 flex items-center justify-center group-hover:border-electric-500/30 transition-all duration-300">
                  <span className="text-lg md:text-xl font-bold gradient-text">{step.num}</span>
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}