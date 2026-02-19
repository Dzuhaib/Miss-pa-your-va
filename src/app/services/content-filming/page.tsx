"use client";

import { motion } from "framer-motion";
import { Camera, Film, CheckCircle2, Play, Sparkles, MapPin, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

const inclusions = [
    "Full Content Audit",
    "Content Strategy",
    "On-site Filming (4-5 Hours)",
    "Professional Editing",
    "Trending Audio Selection",
    "Done-for-you Posting"
];

export default function ContentFilmingPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="Content"
                accentTitle="Filming"
                subtitle="Helping clinics, salons and wellness brands stand out with professional content."
                parents={[{ name: "Services", href: "/services" }]}
                currentPage="Filming"
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
                            <h2 className="text-4xl md:text-8xl font-serif font-bold mb-8 leading-tight">
                                Let&apos;s be <br /><span className="text-primary italic">Honest.</span>
                            </h2>
                            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-10">
                                <p>
                                    As a business owner, you&apos;re busy. You often forget to take that photo, and when you do, it never quite looks how you wanted it to.
                                </p>
                                <p>
                                    Social media content creation is hard work, and doing it well takes time you simply don&apos;t have. That&apos;s where we come in.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-2 border-white"
                        >
                            <Image src="/assets/images/pa.webp" alt="Filming in Devon" fill className="object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Coverage */}
            <section className="py-24 px-6 bg-[#0F0F0F] text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="flex items-center justify-center gap-2 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-8">
                        <MapPin size={14} />
                        Covering Devon
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">We Bring the <span className="text-primary italic">Studio</span> to You.</h2>
                    <p className="text-xl text-white/50 leading-relaxed max-w-3xl mx-auto italic font-light mb-12">
                        Serving clinics and salons across Devon, including Exeter, Plymouth, Torquay, and Barnstaple. We arrive with professional equipment and a creative eye to capture your brand in its best light.
                    </p>
                </div>
            </section>

            {/* What's Included — Dark Section */}
            <section className="py-32 px-6 bg-[#0F0F0F] text-white rounded-[5rem] mx-4 md:mx-8 my-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Column 1: What's Included */}
                        <div className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/5 shadow-2xl">
                            <Camera size={40} className="mb-8 text-primary" />
                            <h3 className="text-2xl font-serif font-bold mb-8 uppercase tracking-tight">What&apos;s Included:</h3>
                            <ul className="space-y-6">
                                {inclusions.map((item, i) => (
                                    <li key={i} className="flex gap-4 items-center text-white/60 text-lg italic">
                                        <CheckCircle2 size={18} className="text-primary shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: Why work with me */}
                        <div className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/5 shadow-2xl">
                            <Sparkles size={40} className="mb-8 text-primary" />
                            <h3 className="text-2xl font-serif font-bold mb-8 uppercase tracking-tight">Why Choose Me?</h3>
                            <div className="space-y-6 text-lg text-white/60 leading-relaxed italic font-light">
                                <p>I don&apos;t just film; I understand the beauty and aesthetics industry. I know what your clients want to see.</p>
                                <p>I specialise in capturing the &quot;un-posed&quot; moments that build real trust with your audience.</p>
                            </div>
                        </div>

                        {/* Column 3: Ideal for */}
                        <div className="p-12 rounded-[4rem] bg-white/[0.03] border border-white/5 shadow-2xl">
                            <Film size={40} className="mb-8 text-primary" />
                            <h3 className="text-2xl font-serif font-bold mb-8 uppercase tracking-tight">Ideal For:</h3>
                            <div className="flex flex-wrap gap-4">
                                {["Aesthetics Clinics", "Beauty Salons", "Personal Trainers", "Wellness Brands", "Service Providers"].map((item, i) => (
                                    <span key={i} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest hover:border-primary transition-all">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
