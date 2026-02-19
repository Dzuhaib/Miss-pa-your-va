"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Users, MessageSquare, Camera, Sparkles, Shield, Zap } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

const team = [
    { name: "Claire", role: "Founder | Director | Specialist", image: "/assets/images/founder.jpg" },
    { name: "Emma", role: "Executive Assistant & HR", image: "/assets/images/pa.webp" },
    { name: "Naomi", role: "JR Social Media Manager", image: "/assets/images/after.jpg" },
    { name: "Lilo", role: "JR Social Media Manager", image: "/assets/images/before.jpg" },
    { name: "Katie", role: "Engagement Assistant", image: "/assets/images/founder.jpg" },
    { name: "Megan", role: "Engagement Assistant", image: "/assets/images/pa.webp" },
];

const credentials = [
    "Diploma in Marketing",
    "Digital Marketing Specialist",
    "CPD Accredited SMM",
    "Business Management Level 3",
    "Virtual Assistant Expert"
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="Your Business"
                accentTitle="Support Solutions"
                subtitle="Your specialist partner for Virtual Assistant and Social Media Management in Devon and across the UK."
                currentPage="About"
            />

            {/* Intro */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-8xl font-serif font-bold mb-10 leading-tight">
                                Meet <span className="text-primary italic">Claire.</span>
                            </h2>
                            <div className="space-y-8 text-xl text-muted-foreground leading-relaxed italic">
                                <p>
                                    At Miss PA Your VA, we specialise in virtual assistant and social media management, offering complete business support for beauty, wellness, and aesthetic professionals.
                                </p>
                                <p>
                                    We understand the challenges of juggling multiple responsibilities. We&apos;re here to provide that extra pair of hands, freeing up your time so you can focus on growing your business and your income.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-3xl border-8 border-white">
                                <Image src="/assets/images/founder.jpg" alt="Claire" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-[#0F0F0F] p-12 rounded-[3.5rem] shadow-2xl text-white rotate-3 border border-white/10 max-w-[280px]">
                                <Award size={40} className="mb-6 text-primary" />
                                <p className="text-2xl font-serif font-bold italic leading-tight">Taking you from survive to strive</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Credentials — Dark Section */}
            <section className="py-32 px-6 bg-[#0F0F0F] text-white rounded-[5rem] mx-4 md:mx-8 mb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h2 className="text-4xl md:text-7xl font-serif font-bold mb-12">Expertise & <span className="text-primary italic">Credentials</span></h2>
                    <div className="flex flex-wrap justify-center gap-4 mb-20 max-w-5xl mx-auto">
                        {credentials.map((cred, i) => (
                            <span key={i} className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                                {cred}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: "Awards 2024", val: "6", sub: "Best Social Media Mgt" },
                            { label: "Awards 2020", val: "2", sub: "Business Excellence" },
                            { label: "Experience", val: "17+", sub: "Years in Support" }
                        ].map((stat, i) => (
                            <div key={i} className="p-12 rounded-[3rem] bg-white/[0.03] border border-white/5">
                                <p className="text-6xl font-serif font-bold text-primary mb-4 italic">{stat.val}</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-2">{stat.label}</p>
                                <p className="text-sm font-bold tracking-tight">{stat.sub}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
                        <div>
                            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
                                <Users size={14} />
                                Our Collective
                            </div>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">Meet Our <span className="text-primary italic">Team.</span></h2>
                        </div>
                        <p className="max-w-md text-xl text-muted-foreground italic leading-relaxed border-l-4 border-primary/20 pl-8">
                            Claire&apos;s team is made up of working mums, reflecting her mission to support time freedom and family.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
                        {team.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group"
                            >
                                <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-6 shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <Image src={member.image} alt={member.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <h4 className="text-lg font-serif font-bold group-hover:text-primary transition-colors">{member.name}</h4>
                                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mt-1">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
