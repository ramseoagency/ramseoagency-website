"use client";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Map, Activity, Gift, ArrowRight } from "lucide-react";

export default function ExclusivePlatform() {
  return (
    <section className="section-padding bg-navy-900/40 relative overflow-hidden" id="platform">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-500/[0.05] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6"
            >
              <Gift size={16} />
              EXCLUSIVE CLIENT BONUS
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] mb-6 leading-tight">
              Free Lifetime Access to the <br/>
              <span className="gradient-text text-4xl sm:text-5xl lg:text-6xl">RAM SEO Platform</span>
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              Humare sabhi clients ko milta hai humare proprietary marketing dashboard ka <strong className="text-emerald-400">100% FREE Lifetime Access</strong>. Track your website promotion, check local area marketing reach, and monitor ads working in real-time.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: Map, title: "Local Area Marketing Checker", color: "text-amber-400" },
                { icon: Activity, title: "Live Ads & Promotion Tracking", color: "text-electric-400" },
                { icon: ShieldCheck, title: "VIP Access - Only for Active Clients", color: "text-emerald-400" },
              ].map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <feature.icon size={20} className={feature.color} />
                  <span className="text-slate-300 font-medium">{feature.title}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="https://ram-seo-platform.ramyadav8928900746.workers.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button text-base px-8 py-4 inline-flex items-center gap-2"
            >
              Preview The Platform <ExternalLink size={18} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glow-card">
              <div className="glow-card-inner !p-2 bg-navy-950">
                {/* Browser Mockup Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02] rounded-t-xl">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="mx-auto flex items-center gap-2 px-4 py-1.5 rounded-md bg-navy-900 border border-white/5 text-[10px] text-slate-500 w-2/3 truncate justify-center">
                    ram-seo-platform.ramyadav8928900746.workers.dev
                  </div>
                </div>
                
                {/* Iframe Preview */}
                <div className="w-full aspect-[4/3] sm:aspect-video rounded-b-xl overflow-hidden bg-navy-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                    <div className="w-16 h-16 rounded-full border-4 border-electric-500/30 border-t-electric-500 animate-spin" />
                    <span className="text-xs text-electric-400 font-medium uppercase tracking-widest animate-pulse">Loading Platform...</span>
                  </div>
                  <iframe 
                    src="https://ram-seo-platform.ramyadav8928900746.workers.dev/" 
                    className="w-full h-full relative z-10 border-0"
                    title="RAM SEO Platform Preview"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 z-20"
            >
              <div className="bg-emerald-500 text-navy-950 font-bold py-3 px-6 rounded-xl shadow-[0_10px_30px_rgba(16,185,129,0.4)] flex items-center gap-2 border border-emerald-400">
                <span className="line-through opacity-60 text-sm">$99/mo</span>
                <span className="text-xl">$0 for Clients</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}