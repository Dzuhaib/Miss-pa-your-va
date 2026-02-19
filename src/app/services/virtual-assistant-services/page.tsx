"use client";

import { motion } from "framer-motion";
import { CheckCircle2, List, Users, Clock, Zap, ArrowRight, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

const vaServices = [
    "Email & Inbox Management",
    "Digital Filing & Organization",
    "Customer Service Support",
    "Meeting & Travel Coordination",
    "Invoicing & Receipt Management",
    "Lifestyle & Personal Assistance",
    "Database & CRM Management",
    "Project & Event Support",
    "Data Entry & Spreadsheets",
    "Social Media Admin Support",
    "Document Preparation",
    "Bespoke Business Support"
];

export default function VAServicesPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="Virtual Assistant"
                accentTitle="Services"
                subtitle="Reclaim Your Time and Focus on What Matters Most."
                parents={[{ name: "Services", href: "/services" }]}
                currentPage="Virtual Assistant"
            />

            {/* Intro Copy */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                                Your <span className="text-primary italic">Invisible Hand.</span>
                            </h2>
                            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed italic">
                                <p>
                                    As your Virtual Assistant, we handle the essential administrative tasks that keep your business running smoothly, allowing you to Step away from the screen and back into your zone of genius.
                                </p>
                                <p>
                                    Whether it&apos;s managing your hectic inbox, coordinating your travel, or keeping your digital files in perfect order, we provide reliable, professional support tailored to your unique needs.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-2 border-white">
                                <Image src="/assets/images/pa.webp" alt="Virtual Assistant Support" fill className="object-cover" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                    <Clock size={24} />
                                </div>
                                <p className="text-xl font-serif font-bold">15-30 Hours <br /><span className="text-xs text-muted-foreground font-sans uppercase tracking-widest">Saved Weekly</span></p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid — Dark Section */}
            <section className="py-32 px-6 bg-[#0F0F0F] text-white rounded-[5rem] mx-4 md:mx-8 mb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-serif font-bold mb-6">Our VA <span className="text-primary italic">Expertise</span></h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {vaServices.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-primary/50 transition-all group flex items-center gap-6"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                                    <CheckCircle2 size={24} />
                                </div>
                                <span className="text-lg font-bold group-hover:text-primary transition-colors">{service}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Big Picture */}
            <section className="py-32 px-6 mb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl order-2 lg:order-1">
                        <Image src="/assets/images/founder.jpg" alt="Claire" fill className="object-cover" />
                        <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black/80 to-transparent text-white">
                            <p className="text-2xl font-serif font-bold italic mb-2">&quot;Focus on your vision.&quot;</p>
                            <p className="text-sm opacity-60">Claire – Support Specialist</p>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">The Big <span className="text-primary italic">Picture.</span></h2>
                        <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                            <p className="italic font-light">
                                &quot;In 2024, our virtual assistant clients saved an average of 15–30 hours per week. That&apos;s time that can be reinvested into strategy, family, or personal growth.&quot;
                            </p>
                            <p>
                                By choosing a VA over a permanent employee, you avoid the complexities of PAYE, pension contributions, and office overheads. You simply pay for the expert support you need, when you need it.
                            </p>
                            <div className="pt-6">
                                <a href="https://www.gov.uk/employment-status/worker" target="_blank" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary/5 border border-primary/10 text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all">
                                    Learn About Employment Status
                                    <ArrowRight size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
