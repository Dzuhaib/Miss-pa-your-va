"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="Get in"
                accentTitle="Touch"
                subtitle="Marketing for Beauty Businesses in Devon | Contact Miss PA Your VA"
                currentPage="Contact"
            />

            {/* SECTION 2: CONTACT DETAILS & FORM */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                        {/* Content & Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-3xl font-serif font-bold mb-6">Let&apos;s Build Your Brand.</h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                        We specialise in marketing for beauty businesses in Devon, helping salons, clinics, and wellness brands stand out online. Our virtual assistant and social media management services are designed to help you save time, stay organised, and attract more clients.
                                    </p>
                                    <p className="text-lg font-bold text-primary">
                                        If you&apos;re ready to grow your business and need trusted marketing for beauty businesses in Devon, get in touch today.
                                    </p>
                                </div>

                                <div className="p-10 rounded-[3rem] bg-white border border-gray-100 shadow-sm space-y-8">
                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-[1rem] bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Covering</p>
                                            <p className="text-base text-muted-foreground leading-relaxed">
                                                We work with clients across Devon, Cornwall, Somerset, Avon, London, Birmingham, Essex, and Manchester.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-[1rem] bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Phone</p>
                                            <a href="tel:07725948167" className="text-xl font-bold hover:text-primary transition-colors">07725 948167</a>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-[1rem] bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Email</p>
                                            <div className="space-y-1">
                                                <a href="mailto:Claire@misspasocials.com" className="block text-xl font-bold hover:text-primary transition-colors">Claire@misspasocials.com</a>
                                                <a href="mailto:Admin@misspasocials.com" className="block text-lg font-bold text-muted-foreground hover:text-primary transition-colors">Admin@misspasocials.com</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-[1rem] bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <Clock size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Opening Hours</p>
                                            <p className="text-lg font-serif font-bold italic">Mon – Fri</p>
                                            <p className="text-sm text-muted-foreground">9:30 – 3:00 & 7:30 – 9:30</p>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/40 text-center">
                                    Marketing for beauty businesses in Devon
                                </p>
                            </div>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl shadow-primary/5 border border-gray-100 ring-1 ring-black/5"
                        >
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Name</label>
                                        <input type="text" className="w-full bg-[#FDFCFB] border border-gray-100 rounded-[1.5rem] px-8 py-5 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Your Name" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Email</label>
                                        <input type="email" className="w-full bg-[#FDFCFB] border border-gray-100 rounded-[1.5rem] px-8 py-5 focus:ring-2 focus:ring-primary/20 transition-all outline-none" placeholder="Your Email" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Service</label>
                                    <select className="w-full bg-[#FDFCFB] border border-gray-100 rounded-[1.5rem] px-8 py-5 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-muted-foreground">
                                        <option>Social Media Management</option>
                                        <option>Social Media Coaching</option>
                                        <option>Virtual Assistant Services</option>
                                        <option>Content Filming</option>
                                        <option>Websites & eCommerce</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground ml-2">Message</label>
                                    <textarea rows={5} className="w-full bg-[#FDFCFB] border border-gray-100 rounded-[1.5rem] px-8 py-5 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none" placeholder="How can we help you?" />
                                </div>
                                <button className="btn-premium w-full py-6 flex items-center justify-center gap-3 text-lg font-bold group">
                                    Send Message
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
