"use client";

import { motion } from "framer-motion";
import { GraduationCap, Facebook, Layout, Video, ZoomIn, MapPin, Award, CheckCircle2, Star, Sparkles, ChevronRight, MessageSquare, Quote, ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

const packages = [
    {
        name: "Instagram & Facebook Masterclass",
        price: "£149",
        image: "/assets/images/founder.jpg",
        desc: "Everything from your grid to your stories. Perfect for beauty businesses looking to sharpen their edge."
    },
    {
        name: "Camera Confidence Coaching",
        price: "£199",
        image: "/assets/images/pa.webp",
        desc: "Master your delivery, lighting, and presence. Stop hiding and start connecting with your audience."
    },
    {
        name: "Canva Design for Clinics",
        price: "£125",
        image: "/assets/images/after.jpg",
        desc: "Learn to create stunning, professional brand assets without the agency price tag."
    },
    {
        name: "Bio & Audit Refresh",
        price: "£85",
        image: "/assets/images/before.jpg",
        desc: "First impressions are everything. We'll optimise your profile for maximum conversions."
    }
];

export default function SMCoachingPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="Social Media"
                accentTitle="Coaching"
                subtitle="I make social media easy, effective and fun."
                parents={[{ name: "Services", href: "/services" }]}
                currentPage="Coaching"
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
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                                Empower Your <span className="text-primary italic">Presence.</span>
                            </h2>
                            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed italic">
                                <p>
                                    Social media doesn&apos;t have to be a chore. With the right strategy and a bit of confidence, it becomes the most powerful tool in your marketing arsenal.
                                </p>
                                <p>
                                    Our coaching sessions are designed specifically for practitioners in the beauty and wellness industry. I&apos;ll teach you how to target your ideal customer without wasting money on ads.
                                </p>
                                <p className="font-bold text-primary not-italic">
                                    Let&apos;s turn those followers into loyal clients.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white rotate-2"
                        >
                            <Image src="/assets/images/pa.webp" alt="Coaching Session" fill className="object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Kickstart Offer */}
            <section className="py-24 px-6 bg-primary text-white text-center mx-4 md:mx-8 rounded-[4rem] mb-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/5" />
                <div className="relative z-10 max-w-4xl mx-auto">
                    <Sparkles size={40} className="mx-auto mb-6 opacity-40" />
                    <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6 italic">£100 Kickstart Offer</h2>
                    <p className="text-xl md:text-2xl font-light leading-relaxed mb-10 opacity-90 italic">
                        Book a 90-minute 1:1 strategy intensive and get a full bio audit & custom reel template for FREE.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-4 bg-white text-primary px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
                        Claim Your Offer
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-serif font-bold mb-6 uppercase tracking-tight">Choice of <span className="text-primary italic">Coaching.</span></h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {packages.map((pkg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-white rounded-[4rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 overflow-hidden"
                            >
                                <div className="aspect-[16/9] relative overflow-hidden">
                                    <Image src={pkg.image} alt={pkg.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110" />
                                    <div className="absolute top-6 right-6 bg-white px-6 py-2 rounded-full font-bold text-primary shadow-xl">
                                        {pkg.price}
                                    </div>
                                </div>
                                <div className="p-10 md:p-12">
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 uppercase tracking-tight">{pkg.name}</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed italic mb-8">{pkg.desc}</p>
                                    <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all">
                                        Book Session <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results — Dark Section */}
            <section className="py-32 px-6 bg-[#0F0F0F] text-white rounded-[5rem] mx-4 md:mx-8 mb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8">What to <span className="text-primary italic">Expect.</span></h2>
                                <p className="text-xl text-white/50 leading-relaxed italic font-light">
                                    My goal is to leave you feeling inspired, not overwhelmed. We break down the technical barriers and focus on storytelling.
                                </p>
                            </div>

                            <div className="space-y-8">
                                {[
                                    "Customised Action Plan",
                                    "Content Pillar Strategy",
                                    "Equipment & Setup Guide",
                                    "Reel & Story Templates"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-center">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary transition-all">
                                            <Play size={20} fill="currentColor" />
                                        </div>
                                        <span className="text-xl md:text-2xl font-serif font-bold italic">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative aspect-square rounded-[4rem] overflow-hidden rotate-3 shadow-3xl border-8 border-white/5">
                            <Image src="/assets/images/founder.jpg" alt="Claire Coaching" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
