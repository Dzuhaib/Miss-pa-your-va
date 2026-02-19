"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, CheckCircle2, ArrowRight, MessageSquare, Target, Zap, BarChart3, HelpCircle, Sparkles, ChevronRight, Star, Globe } from "lucide-react";
import Link from "next/link";
import CTASection from "@/components/CTASection";

const locationsMap: Record<string, { title: string, desc: string, localFact: string }> = {
    "plymouth-dvn": {
        title: "Plymouth",
        desc: "A thriving city combining coastal charm with modern growth. From the Hoe to Sutton Harbour, we help local shops, cafés, and digital businesses flourish.",
        localFact: "Strategies designed to connect with the Plymouth community, reaching families, students, and professionals alike."
    },
    "paignton-dvn": {
        title: "Paignton",
        desc: "Local SEO-focused social media ensuring your brand stands out in Paignton and across Devon.",
        localFact: "We create campaigns for local icons like the Paignton Regatta and seasonal holiday promotions."
    },
    "barnstaple-dvn": {
        title: "Barnstaple",
        desc: "Showcasing North Devon landmarks, events, and the scenic lifestyle that makes Barnstaple unique.",
        localFact: "Campaigns for events like the Barnstaple Fair, seasonal markets, and local festivals."
    },
    "tavistock-dvn": {
        title: "Tavistock",
        desc: "Empowering Tavistock businesses with an understanding of the local market and audience.",
        localFact: "Specialised strategies for local businesses to build consistent and professional online profiles."
    },
    "torquay-dvn": {
        title: "Torquay",
        desc: "Dynamic social management for the English Riviera's premier businesses and hospitality brands.",
        localFact: "Focusing on the luxury aesthetic that defines Torquay's premium wellness and clinic scene."
    },
    "exeter-dvn": {
        title: "Exeter",
        desc: "Sophisticated social strategies for Devon's capital, targeting high-value city professionals.",
        localFact: "Connecting your brand with the vibrant, upscale audience that defines modern Exeter."
    }
};

export default function LocationPage() {
    const params = useParams();
    const slug = params.location as string;
    const locationInfo = locationsMap[slug] || {
        title: slug.replace("-dvn", "").replace("-", " ").split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        desc: `Expert social media management tailored for businesses in ${slug.replace("-dvn", "").replace("-", " ")} and across Devon.`,
        localFact: `Helping local ${slug.replace("-dvn", "").replace("-", " ")} businesses reach their ideal community.`
    };

    return (
        <main className="min-h-screen pt-32 bg-[#FDFCFB]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero Section */}
                <section className="mb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-8">
                                <MapPin size={16} />
                                Local SEO Specialist
                            </div>
                            <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[1.1] mb-10">
                                Grow in <br />
                                <span className="text-primary italic">{locationInfo.title}.</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl italic">
                                {locationInfo.desc} We handle everything from content creation to paid campaigns so you can focus on running your business.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact" className="btn-premium px-10 py-5">
                                    FREE CONSULTATION
                                </Link>
                                <div className="p-4 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Sparkles size={18} />
                                    </div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/60">{locationInfo.localFact}</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative"
                        >
                            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-3xl bg-white border-8 border-white p-12 flex items-center justify-center">
                                <div className="absolute inset-0 bg-primary/5 opacity-50" />
                                <div className="relative z-10 text-center">
                                    <Globe size={120} className="text-primary mx-auto mb-8 opacity-20" />
                                    <p className="text-3xl font-serif font-bold text-[#1A1A1A]">Devon Rooted <br /><span className="text-primary italic">UK Reaching</span></p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Local Process */}
                <section className="py-24 px-12 bg-white rounded-[5rem] border border-gray-100 shadow-sm mb-40 overflow-hidden relative">
                    <div className="absolute p-20 opacity-[0.03] top-0 right-0 pointer-events-none rotate-12">
                        <MapPin size={400} />
                    </div>
                    <div className="text-center mb-24 relative z-10">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Local <span className="text-primary italic">Excellence.</span></h2>
                        <p className="text-lg text-muted-foreground italic">Our 4-step process tailored for the {locationInfo.title} market.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                        {[
                            { icon: MessageSquare, title: "Discovery", desc: `Deep dive into your ${locationInfo.title} audience.` },
                            { icon: Target, title: "Local Strategy", desc: "SEO-focused calendars targeting local keywords." },
                            { icon: Zap, title: "Execution", desc: "Post creation and high-impact platform management." },
                            { icon: BarChart3, title: "Optimization", desc: "Monitor performance and adjust for community growth." }
                        ].map((s, i) => (
                            <motion.div key={i} whileHover={{ y: -5 }} className="p-8 rounded-[2.5rem] bg-[#FDFCFB] border border-gray-100 flex flex-col h-full">
                                <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6">
                                    <s.icon size={24} />
                                </div>
                                <h4 className="font-serif font-bold text-xl mb-3">{s.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed italic opacity-80">{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* FAQ / Trust Section */}
                <section className="mb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="space-y-12">
                            <h2 className="text-4xl md:text-7xl font-serif font-bold leading-tight">Why Choose <br /><span className="text-primary italic">Miss PA Social?</span></h2>
                            <div className="space-y-8">
                                {[
                                    "Experienced & Certified Social Media Experts",
                                    "Customisable Strategies That Grow With You",
                                    "Consistent Management & Performance Tracking",
                                    "Local Market Understanding & SEO Expertise"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 group">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:scale-110">
                                            <CheckCircle2 size={20} />
                                        </div>
                                        <span className="text-lg font-serif italic text-muted-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-12 md:p-16 rounded-[4rem] bg-[#0F0F0F] text-white relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                                <HelpCircle size={120} />
                            </div>
                            <h4 className="text-2xl font-serif font-bold mb-8">Location FAQ</h4>
                            <p className="text-lg text-white/50 leading-relaxed mb-10 italic">
                                "Do you create campaigns for local events?" <br />
                                <span className="text-white font-medium opacity-100">Yes — we specialise in local event integration like the Paignton Regatta or Totnes Markets to ensure your brand is part of the local conversation.</span>
                            </p>
                            <Link href="/contact" className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.2em] text-[10px] group/link">
                                ASK A QUESTION
                                <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            <CTASection />
        </main>
    );
}
