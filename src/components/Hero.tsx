"use client";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Search, BarChart3, Target, Activity, Rocket, CheckCircle } from "lucide-react";

const trustPoints = [
  "Technical SEO",
  "On-Page SEO",
  "Local SEO",
  "Content SEO",
  "SEO Analytics",
];

const dashboardMetrics = [
  { label: "Organic Traffic", value: "\u2191 147%", icon: TrendingUp, color: "text-emerald-400" },
  { label: "Keywords", value: "\u2191 312", icon: Search, color: "text-electric-400" },
  { label: "Search Visibility", value: "\u2191 89%", icon: BarChart3, color: "text-purple-400" },
  { label: "Leads", value: "\u2191 63%", icon: Target, color: "text-amber-400" },
  { label: "Website Health", value: "95%", icon: Activity, color: "text-emerald-400" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-32 grid-bg overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-electric-500/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px]" />

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
              DATA-DRIVEN SEO FOR BUSINESS GROWTH
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

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#audit" className="cta-button text-base">
                <span className="flex items-center gap-2">
                  Get Free SEO Audit
                  <ArrowRight size={18} />
                </span>
              </a>
              <a
                href="#results"
                className="inline-flex items-center gap-2 px-8 py-[14px] rounded-xl border border-white/10 text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300 font-semibold"
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
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="glass-card rounded-2xl p-6 animate-float">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-slate-500 ml-2">SEO Dashboard</span>
              </div>

              <div className="space-y-4">
                {dashboardMetrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.04] hover:bg-white/[0.06] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-white/5 ${metric.color}`}>
                        <metric.icon size={18} />
                      </div>
                      <span className="text-sm text-slate-300">{metric.label}</span>
                    </div>
                    <span className={`text-sm font-bold ${metric.color}`}>
                      {metric.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 h-20 flex items-end gap-1">
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${20 + Math.random() * 80}%` }}
                    transition={{ delay: 0.8 + i * 0.03, duration: 0.5 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-electric-500/40 to-electric-400/80"
                  />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-4 -left-4 glass-card rounded-xl p-4 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <TrendingUp size={20} className="text-emerald-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Monthly Growth</div>
                <div className="text-lg font-bold text-emerald-400">+147%</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}