"use client";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Rocket, CheckCircle } from "lucide-react";
import ThreeDHero from "@/components/ThreeDHero";

const trustPoints = [
  "Technical SEO",
  "On-Page SEO",
  "Local SEO",
  "Content SEO",
  "SEO Analytics",
];

export default function Hero() {
  return (
    <section className="relative flex items-center px-4 sm:px-6 lg:px-8 py-16 pt-28 lg:pt-32 lg:py-20 grid-bg overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-electric-500/10 rounded-full blur-[128px] ambient-orb" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] ambient-orb-delayed" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-sm font-medium mb-6"
            >
              <Rocket size={16} />
              RAM SEO / DATA-DRIVEN GROWTH SYSTEMS
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[var(--font-display)] leading-tight mb-6">
              Get Found on Google.{" "}
              <span className="gradient-text">Get More Customers.</span>
            </h1>

            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl">
              We help businesses improve their Google rankings, increase organic
              traffic and generate more qualified leads through proven,
              data-driven SEO strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#audit" className="cta-button text-base w-full sm:w-auto">
                <span className="flex items-center gap-2">
                  Get Free SEO Audit
                  <ArrowRight size={18} />
                </span>
              </a>
              <a
                href="#results"
                className="inline-flex items-center justify-center gap-2 px-8 py-[14px] rounded-xl border border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-semibold w-full sm:w-auto"
              >
                View Our Results
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {trustPoints.map((point) => (
                <span key={point} className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle size={14} className="text-emerald-400" />
                  {point}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative"
          >
            <ThreeDHero />
          </motion.div>
        </div>
      </div>
    </section>
  );
}