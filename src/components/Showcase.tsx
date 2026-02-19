"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
                    {showcaseItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group"
                        >
                            <div className="mb-10">
                                <ImageSlider
                                    beforeImage={item.before}
                                    afterImage={item.after}
                                    beforeAlt={`${item.title} Before`}
                                    afterAlt={`${item.title} After`}
                                />
                            </div>

                            <div className="flex flex-col gap-6">
                                <div className="flex justify-between items-start">
                                    <div className="space-y-2">
                                        <h3 className="text-3xl font-serif font-bold tracking-tight">{item.title}</h3>
                                        <p className="text-primary font-bold text-xs uppercase tracking-widest">{item.type}</p>
                                    </div>
                                    <div className="px-6 py-3 bg-primary/5 border border-primary/10 rounded-2xl">
                                        <span className="text-primary font-bold text-xl">{item.stats}</span>
                                    </div>
                                </div>

                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {item.desc}
                                </p>

                                <Link href="/showcase" className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest group/link">
                                    Case Study Details
                                    <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform duration-500 text-primary" />
                                </Link>
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
