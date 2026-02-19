"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Let's Create <br /><span className="text-primary">Something Great.</span></h2>
                        <p className="text-muted-foreground text-lg mb-12 max-w-lg">
                            Ready to reclaim your time? Fill out the form below or reach out directly to start your journey with Miss PA Social.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: Mail, label: "Email Us", val: "claire@misspasocial.co.uk" },
                                { icon: Phone, label: "Call Us", val: "07725 948167" },
                                { icon: MapPin, label: "Based In", val: "United Kingdom" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 items-center">
                                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-primary">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.label}</p>
                                        <p className="text-lg font-bold">{item.val}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-2xl shadow-primary/5"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-widest mb-2 block">Name</label>
                                    <input type="text" className="w-full bg-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Jane Doe" />
                                </div>
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-widest mb-2 block">Business Name</label>
                                    <input type="text" className="w-full bg-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Luxe Clinic" />
                                </div>
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-widest mb-2 block">Email Address</label>
                                <input type="email" className="w-full bg-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="jane@clinic.com" />
                            </div>
                            <div>
                                <label className="text-xs font-bold uppercase tracking-widest mb-2 block">Message</label>
                                <textarea rows={4} className="w-full bg-muted border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none" placeholder="How can we help you?" />
                            </div>
                            <button className="btn-premium w-full flex items-center justify-center gap-3">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
