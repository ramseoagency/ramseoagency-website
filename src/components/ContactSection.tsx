"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Calendar, Clock, MessageSquare, User, Mail, Phone, ArrowRight } from "lucide-react";

const timeSlots = [
  "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM",
  "09:30 PM", "10:00 PM", "10:30 PM", "11:00 PM",
  "11:30 PM", "12:00 AM"
];

export default function ContactSection() {
  const whatsappNumber = "918424036841";
  const targetEmail = "rambachanyadav8424@gmail.com";

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "SEO Audit",
    message: ""
  });
  
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  // Meeting State
  const [meetingData, setMeetingData] = useState({
    name: "",
    phone: "",
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isMeetingSubmitting, setIsMeetingSubmitting] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMeetingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingData({ ...meetingData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitting(true);

    try {
      // Send to Email via FormSubmit
      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "New SEO Inquiry from " + formData.name,
            Name: formData.name,
            Email: formData.email,
            Phone: formData.phone,
            Service: formData.service,
            Message: formData.message
        })
      });
    } catch (error) {
      console.error("Email send failed", error);
    }

    setIsFormSubmitting(false);

    // Open WhatsApp
    const text = `*New Inquiry from Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleMeetingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time.");
      return;
    }

    setIsMeetingSubmitting(true);

    try {
      // Send to Email via FormSubmit
      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "New Meeting Request: " + meetingData.name,
            Name: meetingData.name,
            Phone: meetingData.phone,
            Date: selectedDate,
            Time: selectedTime
        })
      });
    } catch (error) {
      console.error("Email send failed", error);
    }

    setIsMeetingSubmitting(false);

    // Open WhatsApp
    const text = `*Meeting Request*%0A%0AHi RAM SEO, I am ${meetingData.name} (${meetingData.phone}) and I would like to schedule a meeting with you on *${selectedDate}* at *${selectedTime}*.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="section-padding bg-navy-900/30" id="contact">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-sm font-medium mb-6"
          >
            <MessageSquare size={16} />
            LET'S CONNECT
          </motion.div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[var(--font-display)] mb-4">
            Ready to Grow Your <span className="gradient-text">Business?</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Send us a message or schedule a direct meeting to discuss your SEO strategy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glow-card h-full"
          >
            <div className="glow-card-inner">
              <h3 className="text-2xl font-bold text-white mb-6">Send an Inquiry</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input 
                        type="text" name="name" required
                        value={formData.name} onChange={handleFormChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-electric-500/50 transition-colors" 
                        placeholder="John Doe" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Phone</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input 
                        type="tel" name="phone" required
                        value={formData.phone} onChange={handleFormChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-electric-500/50 transition-colors" 
                        placeholder="+91 9876543210" 
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email</label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input 
                      type="email" name="email" required
                      value={formData.email} onChange={handleFormChange}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-electric-500/50 transition-colors" 
                      placeholder="john@example.com" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Service Needed</label>
                  <select 
                    name="service"
                    value={formData.service} onChange={handleFormChange}
                    className="w-full bg-navy-900 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-electric-500/50 transition-colors appearance-none"
                  >
                    <option>SEO Audit</option>
                    <option>Complete SEO Strategy</option>
                    <option>Technical SEO Fixes</option>
                    <option>Local SEO (Google Business)</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Message</label>
                  <textarea 
                    name="message" required rows={4}
                    value={formData.message} onChange={handleFormChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-electric-500/50 transition-colors resize-none"
                    placeholder="Tell us about your website and goals..."
                  />
                </div>

                <button type="submit" disabled={isFormSubmitting} className="w-full cta-button justify-center mt-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  {isFormSubmitting ? "Sending..." : <><Send size={16} /> Send Request</>}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Meeting Scheduler */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glow-card h-full"
          >
            <div className="glow-card-inner">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Schedule a Meeting</h3>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">Available Online</span>
              </div>
              <p className="text-sm text-slate-400 mb-6">Pick a convenient time between 7:30 PM and 12:00 AM (IST).</p>
              
              <form onSubmit={handleMeetingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Your Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input 
                        type="text" name="name" required
                        value={meetingData.name} onChange={handleMeetingChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-2 pl-10 pr-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors text-sm" 
                        placeholder="John Doe" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Your Phone</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                      <input 
                        type="tel" name="phone" required
                        value={meetingData.phone} onChange={handleMeetingChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-2 pl-10 pr-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors text-sm" 
                        placeholder="+91 9876543210" 
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-2">
                    <Calendar size={14} className="text-emerald-400" /> Select Date
                  </label>
                  <input 
                    type="date" 
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-emerald-500/50 transition-colors [color-scheme:dark]"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-xs text-slate-400 uppercase tracking-wider font-semibold flex items-center gap-2">
                    <Clock size={14} className="text-purple-400" /> Select Time Slot
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-1 text-xs rounded-lg border transition-all duration-300 font-medium ${
                          selectedTime === time 
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400 scale-105' 
                            : 'bg-white/[0.02] border-white/10 text-slate-400 hover:border-white/30 hover:bg-white/[0.05]'
                        }`}
                      >
                        {time}
                    </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <button type="submit" disabled={isMeetingSubmitting} className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all hover:-translate-y-1 disabled:opacity-70 disabled:hover:-translate-y-0 disabled:cursor-not-allowed">
                    {isMeetingSubmitting ? "Processing..." : <>Book Meeting <ArrowRight size={18} /></>}
                  </button>
                  <p className="text-[11px] text-slate-500 text-center mt-3">You will be redirected to WhatsApp to confirm.</p>
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}