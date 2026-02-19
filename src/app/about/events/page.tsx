"use client";

import { motion } from "framer-motion";
import { Calendar, Mic2, Users, Presentation, ArrowRight, Quote, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

const upcomingEvents = [
    {
        day: "22",
        month: "August",
        title: "TLA Awards",
        year: "2025",
        category: "Awards"
    },
    {
        day: "20",
        month: "September",
        title: "Female Boss Awards",
        year: "2025",
        category: "Awards"
    },
    {
        day: "18",
        month: "October",
        title: "Glamour Awards",
        year: "2025",
        category: "Awards"
    },
    {
        day: "28",
        month: "November",
        title: "Westcountry Womens Awards",
        year: "2025",
        category: "Awards"
    }
];

const availableFor = [
    { icon: Mic2, label: "Public speaking" },
    { icon: Presentation, label: "Workshops" },
    { icon: Users, label: "Event hosting" }
];

export default function EventsPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="Empowerment Through"
                accentTitle="Speaking"
                subtitle="Inspire. Motivate. Connect."
                parents={[{ name: "About", href: "/about" }]}
                currentPage="Event"
            />

            {/* Available For Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 uppercase tracking-tight">Available For</h2>
                            <p className="text-xl text-muted-foreground leading-relaxed italic mb-12">
                                At Miss Pa Social, I bring energy, authenticity, and heart to every stage and event — empowering women to believe bigger, take action, and own their success.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                                {availableFor.map((item, i) => (
                                    <div key={i} className="flex flex-col items-center p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:border-primary/50 transition-colors text-center group">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                                            <item.icon size={24} />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
                                    </div>
                                ))}
                            </div>

                            <Link href="/contact" className="btn-premium inline-flex items-center gap-2 group">
                                Book me to speak and ignite your audience today!
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl"
                        >
                            <Image src="/assets/images/founder.jpg" alt="Empowerment Speaker" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="py-32 px-6 bg-[#0F0F0F] text-white rounded-[5rem] mx-4 md:mx-8 mb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
                        <div className="max-w-xl text-left">
                            <h2 className="text-4xl md:text-7xl font-serif font-bold mb-6 italic">Upcoming Events.</h2>
                            <p className="text-xl text-white/50 italic leading-relaxed">
                                See me at these events next — Come and say hello, I&apos;d love to meet you in person.
                            </p>
                        </div>
                        <div className="text-center md:text-right">
                            <p className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-2">More dates coming soon</p>
                            <span className="text-2xl font-serif font-bold italic">{upcomingEvents.length} Events Listed</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {upcomingEvents.map((event, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-[3rem] bg-white/[0.03] border border-white/10 hover:border-primary transition-all group"
                            >
                                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                                    <div className="flex flex-col">
                                        <span className="text-5xl font-serif font-bold text-primary italic leading-none">{event.day}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] mt-2 opacity-60">{event.month}</span>
                                    </div>
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-40 group-hover:opacity-100 group-hover:bg-primary group-hover:text-white transition-all">
                                        <Calendar size={18} />
                                    </div>
                                </div>
                                <h4 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{event.title}</h4>
                                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">{event.year} · {event.category}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Inspiring Women Section */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-7xl font-serif font-bold mb-10 leading-tight">Inspiring Women to <br /><span className="text-primary italic">Rise, Lead & Thrive.</span></h2>
                        <div className="space-y-8 text-xl text-muted-foreground italic leading-relaxed font-light">
                            <p>
                                I believe every woman has a powerful story, a powerful voice, and a powerful future. Through uplifting public speaking and engaging event hosting, I bring energy, warmth, and real-life mumpreneur wisdom to every stage I step onto.
                            </p>
                            <p>
                                Whether it&apos;s a women&apos;s empowerment event, business workshop, networking meetup or a mindset-shifting retreat, I inspire audiences to step into confidence, take bold action, and create success on their own terms.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Book Me Section */}
            <section className="py-32 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border-2 border-primary/5 order-2 lg:order-1">
                            <Image src="/assets/images/pa.webp" alt="Speaker on stage" fill className="object-cover" />
                            <div className="absolute top-10 left-10 bg-primary/90 backdrop-blur-md p-10 rounded-[3rem] text-white shadow-2xl rotate-3">
                                <Quote size={40} className="mb-4 opacity-40" />
                                <p className="text-2xl font-serif font-bold italic leading-tight uppercase">&quot;Expect sessions that are heart-led & encouraging&quot;</p>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 uppercase tracking-tight">Why Book Me to Speak?</h2>
                            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed italic mb-12">
                                <p>
                                    I blend mindset empowerment, business motivation, and real, relatable storytelling that connects deeply with mums in business.
                                </p>
                                <p>
                                    I don&apos;t just speak at a room — I engage it, lift it, and leave every woman feeling seen, supported, and ready to grow.
                                </p>
                            </div>

                            <div className="space-y-4 mb-12">
                                {[
                                    "Heart-led & encouraging",
                                    "Practical steps for income and direction",
                                    "Packed with actionable takeaways",
                                    "Tailored for mumpreneurs & small business owners"
                                ].map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-muted/30 border border-gray-100">
                                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <span className="font-bold text-sm uppercase tracking-widest">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-10 rounded-[3rem] bg-[#0F0F0F] text-white relative overflow-hidden">
                                <h3 className="text-2xl font-serif font-bold mb-4">Ready to Inspire Your Audience?</h3>
                                <p className="text-white/60 mb-8 italic">Let&apos;s create an unforgettable, empowering experience together. I&apos;m now booking 2026 events, workshops and speaking opportunities.</p>
                                <p className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">Lead with heart. Empower with purpose. Let&apos;s rise together.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing Support Copy Section */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-10">
                            <Heart size={32} />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">Flexible & <span className="text-primary italic">Tailored Support.</span></h2>
                        <div className="space-y-8 text-xl text-muted-foreground leading-relaxed italic font-light mb-12">
                            <p>
                                Feeling overwhelmed by the constant demands of your business and family? You&apos;re not alone. Many successful entrepreneurs struggle to juggle it all, leading to burnout and missed opportunities.
                            </p>
                            <p>
                                Imagine a world where you can grow your revenue without increasing your workload, reclaim control over your time and energy, and focus on the tasks that truly move the needle forward.
                            </p>
                            <p>
                                What if you could delegate to a trusted partner, freeing yourself from the daily grind and allowing you to thrive?
                            </p>
                        </div>
                        <Link href="/contact" className="btn-premium group">
                            WORK WITH US?
                            <Sparkles size={18} className="ml-2 group-hover:scale-125 transition-transform" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
