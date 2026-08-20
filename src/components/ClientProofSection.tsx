"use client";
import { motion } from "framer-motion";
import {
  BarChart3,
  CheckCircle2,
  ExternalLink,
  ImagePlus,
  MapPin,
  MessageSquareQuote,
  PhoneCall,
  Search,
  Star,
  TrendingUp,
} from "lucide-react";

const featuredWork = [
  { name: "Open4All", type: "Verification & trust services", location: "Mumbai" },
  { name: "Devsindia", type: "Software development", location: "India" },
  { name: "Sami Infotech", type: "Education & technology", location: "Navi Mumbai" },
  { name: "Sublime Technocorp", type: "Custom software company", location: "India" },
  { name: "BoradeAI", type: "AI content platform", location: "India" },
  { name: "Mytek Innovations", type: "Electronics procurement", location: "India" },
];

const outcomeCards = [
  { value: "147%", label: "Organic traffic growth", icon: TrendingUp, color: "text-emerald-400" },
  { value: "+63%", label: "Qualified lead growth", icon: PhoneCall, color: "text-amber-400" },
  { value: "+89%", label: "Search visibility", icon: Search, color: "text-electric-400" },
  { value: "3x", label: "More indexed pages", icon: BarChart3, color: "text-purple-400" },
];

const proofSlots = [
  { title: "Google rankings", label: "Add ranking screenshot", icon: Search },
  { title: "Traffic & leads", label: "Add GA / GSC proof", icon: TrendingUp },
  { title: "Local visibility", label: "Add GBP insights screenshot", icon: MapPin },
];

export default function ClientProofSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-navy-900/40 section-padding" id="client-proof">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[760px] -translate-x-1/2 rounded-full bg-electric-500/[0.07] blur-[130px]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">
            <CheckCircle2 size={15} /> Featured SEO work
          </div>
          <h2 className="text-3xl font-bold leading-tight font-[var(--font-display)] sm:text-4xl lg:text-5xl">
            Worked with businesses <span className="gradient-text">across industries and locations.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            Technical SEO, local visibility and growth campaigns built around the way real customers search.
          </p>
        </motion.div>

        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomeCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass-card rounded-2xl p-5"
            >
              <card.icon size={21} className={card.color} />
              <p className={`mt-5 text-3xl font-bold ${card.color}`}>{card.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-300">{card.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-14">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric-400">Selected projects</p>
              <h3 className="mt-2 text-2xl font-bold text-white font-[var(--font-display)]">SEO work across local and digital businesses</h3>
            </div>
            <span className="hidden items-center gap-2 text-xs text-slate-500 sm:flex"><MapPin size={14} /> India + local markets</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.09] bg-white/[0.025] p-4 transition-colors hover:border-electric-500/30 hover:bg-electric-500/[0.05]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-navy-800 text-sm font-bold text-electric-300">
                  {client.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-semibold text-white">{client.name}</p>
                  <p className="truncate text-xs text-slate-500">{client.type}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-slate-400"><MapPin size={11} /> {client.location}</p>
                </div>
                <ExternalLink size={15} className="ml-auto shrink-0 text-slate-600 transition-colors group-hover:text-electric-400" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">Proof gallery</p>
              <h3 className="mt-2 text-2xl font-bold text-white font-[var(--font-display)]">Show the work. Let the numbers speak.</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {proofSlots.map((slot) => (
                <div key={slot.title} className="group min-h-40 rounded-2xl border border-dashed border-white/15 bg-navy-950/50 p-4 transition-colors hover:border-electric-400/40">
                  <div className="flex h-full flex-col justify-between">
                    <slot.icon size={20} className="text-electric-400" />
                    <div>
                      <p className="font-semibold text-white">{slot.title}</p>
                      <p className="mt-1 flex items-center gap-1 text-xs text-slate-500"><ImagePlus size={12} /> {slot.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <MessageSquareQuote size={24} className="text-emerald-400" />
            <p className="mt-5 text-lg leading-relaxed text-slate-300">“Add a client-approved testimonial here after confirming the exact wording.”</p>
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm font-semibold text-white">Client testimonial</span>
              <span className="flex items-center gap-1 text-xs text-slate-500"><Star size={12} /> Verified quote slot</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
