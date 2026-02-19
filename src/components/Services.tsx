"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Sparkles, Heart } from "lucide-react";
import Link from "next/link";
import ServiceList from "./ServiceList";

const features = [
    {
        title: "BEAUTY & AESTHETICS",
        desc: "Elevate Your Aesthetics Brand with Miss PA Your VA. We specialise in crafting a luxurious online presence for discerning aesthetic clinics, wholesalers and academies.",
        icon: Heart,
        image: "/assets/images/founder.jpg",
        link: "/services/social-media-manager",
        tag: "Luxury Visuals"
    },
    {
        title: "AWARD WINNING",
        desc: "Our expert social media management services go beyond simply posting; we curate a sophisticated brand image that resonates with high-end clientele.",
        icon: Award,
        image: "/assets/images/pa.webp",
        link: "/about",
        tag: "Proven Strategy"
    },
    {
        title: "BESPOKE & STUNNING",
        desc: "From bespoke content strategies to visually stunning campaigns, we position you as the premier destination for aesthetic excellence.",
        icon: Sparkles,
        image: "/assets/images/after.jpg",
        link: "/showcase",
        tag: "Creative Excellence"
    }
];

export default function Services() {
    return (
        <section className="py-32 px-6 bg-[#0F0F0F] text-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
                    >
                        Our Expertise
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-[1.1]"
                    >
                        Management & <span className="text-primary italic">Coaching.</span>
                    </motion.h2>
                    <p className="text-xl md:text-2xl text-white/50 italic font-serif tracking-widest uppercase border-t border-white/10 pt-8 inline-block">
                        Everything you need for business success!
                    </p>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-40">
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group relative h-[600px] rounded-[4rem] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-sm"
                        >
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000 opacity-60 grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                            </div>

                            <div className="absolute top-8 right-8 z-20">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-primary shadow-2xl">
                                    {item.tag}
                                </div>
                            </div>

                            <div className="absolute inset-0 z-20 p-12 flex flex-col justify-end">
                                <div className="w-16 h-16 rounded-3xl bg-primary flex items-center justify-center mb-8 shadow-2xl shadow-primary/20 group-hover:-translate-y-2 transition-transform duration-500">
                                    <item.icon size={28} className="text-white" />
                                </div>
                                <h4 className="text-3xl font-bold mb-4 tracking-tight leading-tight uppercase font-serif drop-shadow-md">{item.title}</h4>
                                <p className="text-white/60 mb-8 leading-relaxed text-sm md:text-base transition-all duration-500">
                                    {item.desc}
                                </p>
                                <Link
                                    href={item.link}
                                    className="flex items-center gap-3 font-bold text-sm uppercase tracking-widest text-white hover:text-primary transition-colors group/btn"
                                >
                                    Expert Inquiry
                                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:border-primary group-hover/btn:bg-primary transition-all">
                                        <ArrowUpRight size={16} />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Brand Presence - Section 3 */}
                <section className="py-32 mb-40 relative rounded-[5rem] bg-white/[0.03] border border-white/5 overflow-hidden">
                    <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                        <Award size={400} className="text-primary rotate-12" />
                    </div>
                    <div className="max-w-4xl mx-auto text-center relative z-10 px-8">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="mb-12 inline-flex items-center gap-4 text-primary font-bold uppercase tracking-[0.4em] text-xs"
                        >
                            <span className="w-12 h-px bg-primary" />
                            Celebrating Excellence
                            <span className="w-12 h-px bg-primary" />
                        </motion.div>
                        <h3 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-tight">
                            Multi Award Winning <br /> <span className="text-primary italic">Social Media Management.</span>
                        </h3>
                        <h4 className="text-2xl italic text-white/40 font-serif mb-12 tracking-wide">&quot;Taking you from survive to strive!&quot;</h4>
                        <p className="text-xl text-white/50 leading-relaxed font-light italic">
                            Miss PA Your VA provides expert business support, helping busy professionals reclaim their time, reduce stress, and save money. With over 17 years of experience, our team has the honed skills necessary to provide exceptional support.
                        </p>
                    </div>
                </section>

                {/* Reusable Service List */}
                <ServiceList title="Expert Service Collective" />
            </div>
        </section>
    );
}
