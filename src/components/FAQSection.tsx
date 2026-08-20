"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How long does SEO take?",
    answer: "SEO results depend on your website, competition, industry and current authority. SEO is a continuous process, and meaningful growth generally takes consistent work over time.",
  },
  {
    question: "Do you guarantee #1 Google rankings?",
    answer: "No. Honest SEO cannot guarantee a specific Google ranking. We focus on improving the factors that influence organic visibility and business growth.",
  },
  {
    question: "What is included in SEO?",
    answer: "Technical SEO, keyword research, on-page SEO, content optimization, local SEO, off-page SEO, competitor analysis, analytics and reporting.",
  },
  {
    question: "Will I get monthly reports?",
    answer: "Yes. Reports can include traffic, rankings, impressions, clicks, completed SEO work and next priorities.",
  },
  {
    question: "Can you optimize my existing website?",
    answer: "Yes. We can audit and improve an existing website without requiring a complete redesign.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className={`rounded-2xl border px-5 md:px-6 transition-colors duration-300 ${
        isOpen
          ? "border-electric-500/30 bg-electric-500/[0.06]"
          : "border-white/[0.08] bg-white/[0.025] hover:border-white/[0.16] hover:bg-white/[0.045]"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-semibold text-white group-hover:text-electric-400 transition-colors pr-4">
          {faq.question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-electric-400 group-hover:bg-electric-500/10 transition-all">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-400 leading-relaxed pr-2 md:pr-12">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="section-padding bg-navy-900/30" id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.question} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
