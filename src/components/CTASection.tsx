"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
    return (
        <section className="py-24 px-6 md:py-48 bg-[#0F0F0F] text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="w-24 h-24 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-12 border border-primary/20 shadow-2xl shadow-primary/10 rotate-3"
                >
                    <MessageSquare size={40} />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-8xl font-serif font-bold mb-12 leading-[1.1]"
                >
                    Flexible & Tailored <br />
                    <span className="text-primary italic">Support.</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light">
                            Feeling overwhelmed by the constant demands of your business and family? You&apos;re not alone. Many successful entrepreneurs struggle to juggle it all, leading to burnout and missed opportunities.
                        </p>
                        <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                            <p className="text-white font-bold text-2xl font-serif italic mb-4">
                                &quot;Imagine a world where you can grow your revenue without increasing your workload...&quot;
                            </p>
                            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Your New Reality</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative p-12 rounded-[3rem] bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 shadow-2xl"
                    >
                        <Sparkles className="absolute -top-6 -right-6 text-primary w-12 h-12" />
                        <p className="text-white font-bold text-2xl md:text-3xl leading-snug font-serif">
                            What if you could delegate to a trusted partner, freeing yourself from the daily grind and allowing you to thrive?
                        </p>
                        <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                <ArrowRight className="text-primary" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-white/60">Let&apos;s talk about your business</span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <Link href="/contact" className="btn-premium px-20 py-8 text-2xl group shadow-3xl shadow-primary/30">
                        WORK WITH US?
                        <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
