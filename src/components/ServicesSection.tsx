"use client";
import { motion } from "framer-motion";
import { Wrench, Target, Link, MapPin, PenTool, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    Icon: Wrench,
    title: "Technical SEO",
    description: "Fix crawling, indexing, speed, Core Web Vitals, sitemap, robots.txt, schema and technical issues.",
    link: "#",
    color: "from-electric-500/20 to-electric-600/5",
    iconColor: "text-electric-400",
  },
  {
    Icon: Target,
    title: "On-Page SEO",
    description: "Optimize keywords, titles, meta descriptions, headings, content, URLs and internal links.",
    link: "#",
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-400",
  },
  {
    Icon: Link,
    title: "Off-Page SEO",
    description: "Build relevant authority through strategic link building, competitor analysis and brand visibility.",
    link: "#",
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-400",
  },
  {
    Icon: MapPin,
    title: "Local SEO",
    description: "Improve Google Maps and local search visibility with Google Business Profile optimization.",
    link: "#",
    color: "from-amber-500/20 to-amber-500/5",
    iconColor: "text-amber-400",
  },
  {
    Icon: PenTool,
    title: "Content SEO",
    description: "Build content around keywords, search intent, topic clusters and content gaps.",
    link: "#",
    color: "from-rose-500/20 to-rose-500/5",
    iconColor: "text-rose-400",
  },
  {
    Icon: BarChart3,
    title: "SEO Analytics",
    description: "Track traffic, rankings, impressions, clicks, conversions and overall SEO performance.",
    link: "#",
    color: "from-electric-400/20 to-electric-500/5",
    iconColor: "text-electric-400",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-navy-900/30" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] mb-4">
            Everything Your Website Needs to{" "}
            <span className="gradient-text">Grow on Google.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-2xl p-7 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}>
                <service.Icon size={24} className={service.iconColor} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">{service.description}</p>
              <a
                href={service.link}
                className="inline-flex items-center gap-2 text-sm text-electric-400 hover:text-electric-300 font-medium transition-colors group/link"
              >
                Explore {service.title}
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}