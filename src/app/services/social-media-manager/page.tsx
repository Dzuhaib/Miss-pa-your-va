"use client";

import { motion } from "framer-motion";
import { MessageSquare, Target, Zap, ArrowRight, CheckCircle2, Star, Sparkles, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

const plans = [
    {
        name: "Content Only",
        price: "From £350",
        desc: "Ideal for businesses who want the content created but prefer to handle the engagement themselves.",
        features: ["12 Posts Per Month", "6 Reels Included", "Custom Graphics", "Basic Captioning"]
    },
    {
        name: "Standard Growth",
        price: "From £550",
        desc: "Our most popular plan. Full management, engagement, and consistent brand presence.",
        features: ["20 Posts Per Month", "10 Reels Included", "Daily Engagement", "Strategic Growth", "Monthly Reports"]
    },
    {
        name: "The Powerhouse",
        price: "From £850",
        desc: "Absolute domination. Maximum posting frequency, influencer outreach, and total brand immersion.",
        features: ["Daily Posting", "15 Reels Included", "Premium Engagement", "Brand Partnerships", "Bi-Weekly Calls"]
    },
    {
        name: "Engagement Only",
        price: "£15/Hr",
        desc: "Boost your visibility. We handle the DMs and comments so you don't have to.",
        features: ["Comment Management", "DM Support", "Niche Networking", "Minimum 10 hrs / Month"]
    }
];

export default function SMManagerPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="Social Media"
                accentTitle="Manager"
                subtitle="Reclaim your time and grow your presence with expert management."
                parents={[{ name: "Services", href: "/services" }]}
                currentPage="Manager"
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
                                Total <br /><span className="text-primary italic">Management.</span>
                            </h2>
                            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed italic">
                                <p>
                                    Managing social media is a full-time job. Between creating content, responding to comments, and staying ahead of the algorithm, it&apos;s easy to get overwhelmed.
                                </p>
                                <p>
                                    We take the entire burden off your shoulders. We don&apos;t just post images; we build a community around your brand and drive actual business results.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square rounded-[4rem] overflow-hidden shadow-2xl border-2 border-white"
                        >
                            <Image src="/assets/images/founder.jpg" alt="Social Media Strategy" fill className="object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            <section className="py-24 px-6 border-y border-gray-100 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { step: "01", title: "Discovery Call", desc: "We dive deep into your brand, your goals, and your current audience to build a custom roadmap." },
                        { step: "02", title: "The Proposal", desc: "A tailored strategy and package selection based specifically on what your business needs to grow." },
                        { step: "03", title: "Action Plan", desc: "We take over. High-quality content, strategic posting, and consistent engagement start immediately." }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <span className="text-4xl font-serif font-bold text-primary/20 mb-4 block italic">{item.step}</span>
                            <h3 className="text-2xl font-serif font-bold mb-4 uppercase tracking-tighter">{item.title}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed italic font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Plans — Dark Section */}
            <section className="py-32 px-6 bg-[#0F0F0F] text-white rounded-[5rem] mx-4 md:mx-8 my-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-serif font-bold mb-6">Pricing <span className="text-primary italic">Packages.</span></h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="p-8 rounded-[3rem] bg-white/[0.03] border border-white/5 hover:border-primary/50 transition-all flex flex-col group"
                            >
                                <h3 className="text-xl font-serif font-bold mb-2 uppercase tracking-tight">{plan.name}</h3>
                                <p className="text-3xl font-serif font-bold text-primary mb-6 italic">{plan.price}</p>
                                <p className="text-sm text-white/50 leading-relaxed mb-8 italic flex-grow">{plan.desc}</p>

                                <div className="space-y-4 mb-10">
                                    {plan.features.map((feature, j) => (
                                        <div key={j} className="flex gap-3 items-center text-xs opacity-80">
                                            <CheckCircle2 size={14} className="text-primary" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                <Link href="/contact" className="btn-premium py-4 text-xs text-center">GET STARTED</Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
