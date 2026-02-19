"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import ImageSlider from "./ImageSlider";

const showcaseItems = [
    {
        title: "AJM Aesthetics",
        type: "Social Media Transformation",
        before: "/assets/images/before.jpg",
        after: "/assets/images/after.jpg",
        stats: "240% Growth",
        desc: "Complete visual overhaul and strategy implementation leading to record-breaking engagement levels."
    },
    {
        title: "Cornwall Wellbeing",
        type: "Digital Strategy & Branding",
        before: "/assets/images/before.jpg",
        after: "/assets/images/after.jpg",
        stats: "15+ Bookings/Wk",
        desc: "Streamlined appointment flow and aesthetic consistency across all social platforms."
    }
];

export default function Showcase() {
    return (
        <section className="py-32 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6"
                        >
                            <Sparkles size={16} />
                            Success Stories
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-serif font-bold leading-tight"
                        >
                            Results that <br /> <span className="text-primary italic">Speak for Themselves.</span>
                        </motion.h2>
                    </div>
                    <Link href="/showcase" className="text-sm font-bold uppercase tracking-widest border-b-2 border-primary pb-2 hover:text-primary transition-colors">
                        View Full Portfolio
                    </Link>
                </div>

                <div className="space-y-32 lg:space-y-48">
                    {showcaseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className={cn(
                                "flex flex-col lg:items-center gap-16 lg:gap-24",
                                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                            )}
                        >
                            {/* Text Side */}
                            <div className="w-full lg:w-1/2 space-y-10 order-2 lg:order-none">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/10">
                                        <Sparkles size={12} className="fill-current" />
                                        Case Study 0{index + 1}
                                    </div>
                                    <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-tight uppercase leading-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-primary font-bold text-xs uppercase tracking-[0.3em] italic">
                                        {item.type}
                                    </p>
                                </div>

                                <p className="text-muted-foreground text-xl leading-relaxed font-light italic max-w-xl">
                                    {item.desc}
                                </p>

                                <div className="flex items-center gap-10">
                                    <div className="px-8 py-4 bg-primary text-white rounded-[2rem] shadow-xl shadow-primary/20">
                                        <span className="text-2xl font-serif font-bold italic">{item.stats}</span>
                                        <p className="text-[8px] uppercase tracking-widest font-bold opacity-80 mt-1">Verified Growth</p>
                                    </div>
                                    <Link href="/showcase" className="group flex items-center gap-4 font-bold text-xs uppercase tracking-widest">
                                        Details
                                        <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500 text-primary" />
                                    </Link>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 order-1 lg:order-none">
                                <div className="relative p-4 md:p-6 bg-white rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 group">
                                    <div className="absolute inset-0 bg-primary/5 rounded-[3.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    <div className="relative z-10">
                                        <ImageSlider
                                            beforeImage={item.before}
                                            afterImage={item.after}
                                            beforeAlt={`${item.title} Before`}
                                            afterAlt={`${item.title} After`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 pt-20 border-t border-gray-100 text-center">
                    <p className="text-2xl md:text-4xl font-serif italic text-muted-foreground/60 mb-12 max-w-4xl mx-auto leading-relaxed">
                        Ready to transform your brand into a premium destination for your ideal clients?
                    </p>
                    <Link href="/contact" className="btn-premium px-16 py-6 text-xl shadow-2xl shadow-primary/20">
                        Book Your Transformation
                    </Link>
                </div>
            </div>
        </section>
    );
}
