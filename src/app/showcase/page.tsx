"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquare, Quote, Target, Star, MapPin } from "lucide-react";
import Link from "next/link";
import ImageSlider from "@/components/ImageSlider";
import PageHero from "@/components/PageHero";

const caseStudies = [
    {
        id: "ajm-aesthetics",
        category: "Aesthetics",
        client: "AJM Aesthetics",
        location: "Birmingham / UK",
        title: "From Overcrowded to Clean and Impactful",
        description: "AJM Aesthetics is a multi-arm business covering clinic, academy, and wholesale. Their black and gold scheme was diluted by inconsistent execution and overcrowded graphics.",
        solution: "We implemented a new header banner, on-brand graphics with clear CTAs, and a darker dramatic aesthetic for better contrast. We focused on a mix of Reels and static posts to showcase quality.",
        impact: [
            "Consistent, luxury grid feel",
            "Increased booking inquiries via Reels",
            "Clearer distinction between clinic & academy"
        ],
        stats: "300% Growth in Engagement",
        testimonial: "Finally, a strategy that matches our brand's premium value.",
        before: "/assets/images/before.jpg",
        after: "/assets/images/after.jpg"
    },
    {
        id: "cornwall-wellbeing",
        category: "Wellness",
        client: "Wellbeing Brand",
        location: "Cornwall",
        title: "A Softer, Mindful Presence",
        description: "Goal was to refresh the online presence for a Cornish retreat focused on personal growth and relaxation.",
        solution: "Introduced a softer visual style and mindful messaging that resonates with an audience seeking balance.",
        impact: [
            "Authentic digital extension of physical retreats",
            "Higher high-quality follower retention",
            "Improved brand sentiment"
        ],
        stats: "50k+ Post Reach",
        testimonial: "The digital experience now feels like entering our retreat space.",
        before: "/assets/images/before.jpg",
        after: "/assets/images/after.jpg"
    },
    {
        id: "structured-branded",
        category: "Aesthetics",
        client: "Aesthetics Clinic",
        location: "Exeter",
        title: "Structured, Branded, and Balanced",
        description: "Issues with mismatched images and no coherent design style or structured posting order.",
        solution: "Defined a color palette and column-based grid structure. Column 1: text posts (quotes, tips); Columns 2–3: photography and transformations.",
        impact: [
            "Coherent design style established",
            "Predictable posting rhythm",
            "Better visual storytelling"
        ],
        stats: "100% Brand Consistency",
        before: "/assets/images/before.jpg",
        after: "/assets/images/after.jpg"
    },
    {
        id: "consistency-readability",
        category: "Beauty",
        client: "Beauty Specialist",
        location: "Devon",
        title: "Creating Consistency and Readability",
        description: "Grid was overly dark and graphics had excessive small text that didn't fit the layout.",
        solution: "Used lighter color overlays, bold black text headlines, and clear directional arrows to guide users.",
        impact: [
            "Brighter and more legible grid",
            "Improved click-through on graphics",
            "Clearer Call-to-Actions (CTAs)"
        ],
        stats: "2x Legibility Improvement",
        before: "/assets/images/before.jpg",
        after: "/assets/images/after.jpg"
    },
    {
        id: "london-clinic",
        category: "Medical",
        client: "London Medical Clinic",
        location: "London",
        title: "Professionalism Meets Approachability",
        description: "A leading clinic in London with skilled medics. Needed a professional yet approachable presence.",
        solution: "Educational content combined with behind-the-scenes visuals. We also conducted a content filming day.",
        impact: [
            "1,200+ pieces of new useable content",
            "Established authority in medical aesthetics",
            "Seamless integration of doctor-led team"
        ],
        stats: "1.2k Content Pieces Filmed",
        before: "/assets/images/before.jpg",
        after: "/assets/images/after.jpg"
    }
];

const categories = ["All", "Aesthetics", "Wellness", "Medical"];

export default function ShowcasePage() {
    const [filter, setFilter] = useState("All");

    const filteredStudies = filter === "All"
        ? caseStudies
        : caseStudies.filter(s => s.category === filter);

    return (
        <main className="bg-[#FDFCFB] min-h-screen">
            <PageHero
                title="Our Client"
                accentTitle="Showcase"
                subtitle="Discover how we've helped beauty, aesthetics, and wellness businesses build stunning digital presences."
                currentPage="Showcase"
            />

            <div className="max-w-7xl mx-auto px-6 py-32">
                {/* Filter Bar */}
                <div className="flex flex-wrap justify-center gap-4 mb-24">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={cn(
                                "px-10 py-4 rounded-full text-sm font-bold transition-all border",
                                filter === cat
                                    ? "bg-primary text-white border-primary shadow-xl scale-105"
                                    : "bg-white text-muted-foreground border-gray-100 hover:border-primary/30 shadow-sm"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Case Studies */}
                <div className="space-y-40">
                    {filteredStudies.map((study, i) => (
                        <motion.section
                            key={study.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
                        >
                            <div className={cn("space-y-10", i % 2 !== 0 && "lg:order-2")}>
                                <div className="flex flex-wrap gap-3">
                                    <span className="px-5 py-2 rounded-xl bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.2em] border border-primary/10">{study.category}</span>
                                    <span className="px-5 py-2 rounded-xl bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                                        <MapPin size={12} /> {study.location}
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight uppercase tracking-tight">
                                    {study.client}: <br /><span className="text-primary italic">{study.title}</span>
                                </h2>
                                <p className="text-xl text-muted-foreground leading-relaxed italic font-light">
                                    {study.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 border-y border-gray-100">
                                    <div className="space-y-6">
                                        <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-3 text-primary">
                                            <Target size={18} /> The Solution
                                        </h4>
                                        <p className="text-base text-muted-foreground leading-relaxed italic">{study.solution}</p>
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="text-xs font-bold uppercase tracking-widest flex items-center gap-3 text-primary">
                                            <Star size={18} /> The Impact
                                        </h4>
                                        <ul className="space-y-4">
                                            {study.impact?.map((item, idx) => (
                                                <li key={idx} className="text-sm flex items-start gap-3 text-muted-foreground">
                                                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {study.testimonial && (
                                    <div className="p-10 rounded-[3rem] bg-[#0F0F0F] text-white relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                                        <Quote className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={64} />
                                        <p className="text-lg font-serif italic mb-4 leading-relaxed relative z-10">&quot;{study.testimonial}&quot;</p>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-primary relative z-10">— Verified Client</p>
                                    </div>
                                )}

                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
                                    <div>
                                        <p className="text-4xl font-serif font-bold text-primary italic leading-none">{study.stats}</p>
                                        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold mt-2">Recorded Growth</p>
                                    </div>
                                    <Link href="/contact" className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all font-bold text-[10px] uppercase tracking-widest">
                                        Book Results Like This <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>

                            <div className={cn(i % 2 !== 0 && "lg:order-1")}>
                                <div className="relative p-4 bg-white rounded-[4rem] shadow-2xl border border-gray-100">
                                    <ImageSlider
                                        beforeImage={study.before}
                                        afterImage={study.after}
                                        beforeAlt={`${study.client} before transformation`}
                                        afterAlt={`${study.client} after transformation`}
                                    />
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Closing CTA */}
                <section className="mt-40 mb-20 p-12 md:p-32 rounded-[5rem] bg-[#0F0F0F] text-white text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative z-10 max-w-3xl mx-auto"
                    >
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-10 border border-primary/20">
                            <MessageSquare size={32} />
                        </div>
                        <h2 className="text-4xl md:text-8xl font-serif font-bold mb-8">Ready to <span className="text-primary italic">Transform?</span></h2>
                        <p className="text-xl text-white/50 mb-12 leading-relaxed italic font-light">
                            Stop the scroll and start engaging. Let&apos;s build a digital presence that reflects the true quality of your business.
                        </p>
                        <Link href="/contact" className="btn-premium px-16 py-6 text-lg">
                            Book Your Discovery Call
                        </Link>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}

function cn(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}
