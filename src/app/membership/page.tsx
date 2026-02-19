"use client";

import { motion } from "framer-motion";
import { Coffee, Heart, Users, CheckCircle, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function MembershipPage() {
    return (
        <main className="pt-32 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-6">
                            <Coffee size={16} />
                            <span>Community & Coaching</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-8">
                            From Broken <br /> To <span className="text-primary italic">Boss.</span>
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
                            We're superheroes disguised as humans. Juggling family, business, and everything in between can be exhausting. Miss PA Social wants to show you how to ditch the overwhelm and actually enjoy the journey.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="https://moneymindsetmamas.co.uk/" target="_blank" rel="noopener noreferrer" className="btn-premium group">
                                Join Money Mindset Mamas
                                <ExternalLink size={18} className="ml-2 group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="aspect-square bg-muted rounded-3xl overflow-hidden relative group">
                            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity" />
                            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-primary">
                                <Heart size={40} className="mb-4" />
                                <p className="font-bold text-sm uppercase">Happier You</p>
                            </div>
                        </div>
                        <div className="aspect-square bg-muted rounded-3xl overflow-hidden relative flex flex-col items-center justify-center p-8 text-center text-purple-600">
                            <Users size={40} className="mb-4" />
                            <p className="font-bold text-sm uppercase">Community</p>
                        </div>
                        <div className="aspect-square bg-muted rounded-3xl overflow-hidden relative flex flex-col items-center justify-center p-8 text-center text-blue-600">
                            <CheckCircle size={40} className="mb-4" />
                            <p className="font-bold text-sm uppercase">Focus</p>
                        </div>
                        <div className="aspect-square bg-primary rounded-3xl flex flex-col items-center justify-center p-8 text-center text-white">
                            <p className="text-3xl font-bold mb-1">3</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Main Focuses</p>
                        </div>
                    </motion.div>
                </section>

                <section className="py-24 border-t border-gray-100">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Three Pillars of <br /><span className="text-primary italic">Mama Growth</span></h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Spilling the tea on how to reclaim your time, energy, and happiness.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Time & Money",
                                desc: "Getting on top of finances, managing time effectively, and building income streams that work for you.",
                                color: "bg-blue-50 text-blue-600"
                            },
                            {
                                title: "Social & Branding",
                                desc: "Learning how to show up confidently, build a consistent brand, and turn content into paying clients.",
                                color: "bg-purple-50 text-purple-600"
                            },
                            {
                                title: "Wellbeing & Mindset",
                                desc: "Focusing on mental and emotional wellbeing — being a more balanced version of yourself as a mum and boss.",
                                color: "bg-rose-50 text-rose-600"
                            },
                        ].map((pillar, i) => (
                            <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                                <div className={`w-12 h-12 rounded-2xl ${pillar.color} flex items-center justify-center mb-6`}>
                                    <p className="text-xl font-bold">{i + 1}</p>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
