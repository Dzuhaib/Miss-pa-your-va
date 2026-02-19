"use client";

import { motion } from "framer-motion";
import { MessageSquare, Target, Zap, ArrowRight, CheckCircle2, Star, Sparkles, Play, Video, Calendar, Phone, FileText, Activity, Users, Camera, Mail, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ScrollVelocity from "@/components/ScrollVelocity";

const packages = [
    {
        name: "Basic Full Management",
        subtitle: "Perfect for those just wanting to start out",
        daily: "£13 a day",
        price: "400",
        features: [
            "3 posts a week on 2 platforms",
            "Content plan based on industry research",
            "3-5 stories a week",
            "Hashtags research to suit Industry",
            "Organic engagement 3x a week"
        ]
    },
    {
        name: "Premium Full Management",
        subtitle: "Plenty of content posted throughout the week!",
        daily: "£17 a day",
        price: "550",
        features: [
            "Post 4x times a week on 2 platforms",
            "Content plan based on industry research",
            "5-7 Stories a week",
            "Hashtags research to suit Industry",
            "Content shared in relevant groups",
            "Organic engagement 4x a week"
        ],
        popular: true
    },
    {
        name: "Super Full Management",
        subtitle: "Scale your business, stress free",
        daily: "£33 a day",
        price: "725",
        features: [
            "Post 5x a week on 2 platforms",
            "Content plan based on industry research",
            "Upto 8 stories a day",
            "Hashtags research to suit Industry",
            "Content shared in relevant groups",
            "Organic engagement 5x a week",
            "Outreach messages to new contacts",
            "Video editing & watermarking",
            "Personalised templates",
            "Branded stationery"
        ]
    },
    {
        name: "Super Hero Management",
        subtitle: "Look professional and have your messages answered",
        daily: "£45 a day",
        price: "995",
        features: [
            "Post 5x a week on 2 platforms",
            "Content plan based on industry research",
            "Upto 8 stories a day",
            "Organic engagement 3x a day",
            "Answering basic messages AM & PM",
            "Hashtags research to suit Industry",
            "Content shared in relevant groups",
            "Outreach messages to new contacts",
            "Video editing & watermarking",
            "Personalised templates",
            "Branded stationery",
            "1 animated gif",
            "1 content filming day a month"
        ]
    }
];

const addOns = [
    { name: "TikTok", price: "£257", icon: Video },
    { name: "LinkedIn", price: "£125", icon: MessageSquare },
    { name: "Email Marketing", price: "£257", icon: Mail },
    { name: "Content Filming", price: "£257", icon: Camera },
    { name: "SM Coaching", price: "£157", icon: TrendingUp },
];

export default function SocialMediaManagerPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="Social Media"
                accentTitle="Management"
                subtitle="Award-Winning strategies for Instagram, Facebook, LinkedIn, and TikTok."
                parents={[{ name: "Services", href: "/services" }]}
                currentPage="Social Media Manager"
            />

            {/* Intro with Video Context */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                                Scalable Growth
                            </div>
                            <h2 className="text-4xl md:text-7xl font-serif font-bold mb-10 leading-tight">
                                Award-Winning <br /><span className="text-primary italic">Business Growth.</span>
                            </h2>
                            <div className="space-y-8 text-xl text-muted-foreground leading-relaxed italic font-light">
                                <p>
                                    We empower businesses to boost visibility, drive sales, and outperform competitors. Tired of generic templates and struggling with ever-changing algorithms?
                                </p>
                                <p>
                                    We create bespoke strategies, compelling content, and targeted campaigns to elevate your brand and connect with your ideal audience. Our comprehensive services cover everything from content creation and community management to performance analysis.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl">
                                <Image src="/assets/images/pa.webp" alt="Award Winning SMM" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-100 group-hover:scale-110 transition-transform">
                                        <Play fill="currentColor" size={32} />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -left-10 bg-[#0F0F0F] p-10 rounded-[3rem] text-white shadow-2xl max-w-[280px]">
                                <Sparkles className="text-primary mb-4" size={32} />
                                <p className="text-sm italic font-light opacity-80 leading-relaxed">
                                    Bespoke strategies designed to achieve your specific goals and deliver real results.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Process */}
            <section className="py-32 px-6 bg-white border-y border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 italic uppercase tracking-tighter">Your Roadmap to Success</h2>
                        <p className="text-xl text-muted-foreground font-light italic">Three simple steps to social excellence</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Phone,
                                title: "Free Discovery Call",
                                desc: "Let's connect and see what works for you. Includes a free audit to help you understand what's needed to grow."
                            },
                            {
                                icon: FileText,
                                title: "Proposal",
                                desc: "I'll write down your business goals and create a bespoke proposal to target all needed marketing strategies."
                            },
                            {
                                icon: Zap,
                                title: "Action",
                                desc: "The fun part. We start designing, creating, and writing your professional content plan and strategy."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-10 rounded-[3rem] bg-gray-50/50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                    <item.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed italic font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content & Filming specialized offers */}
            <section className="py-32 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-[#0F0F0F] rounded-[4rem] p-12 text-white relative overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
                            <div className="relative z-10">
                                <Calendar className="text-primary mb-8" size={40} />
                                <h3 className="text-3xl font-serif font-bold mb-4 italic">Content Plan</h3>
                                <div className="text-5xl font-serif font-bold text-primary mb-6 italic">£250</div>
                                <p className="text-white/60 mb-8 font-light italic leading-relaxed">
                                    Full-month plan (Mon-Fri) bespoke to your branding. Includes Posts, Reels & Stories ready to download, copy, and paste.
                                </p>
                                <Link href="/contact" className="btn-premium group inline-flex">
                                    Download Plan
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-[4rem] p-12 border border-gray-100 relative overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
                            <div className="relative z-10">
                                <Camera className="text-primary mb-8" size={40} />
                                <h3 className="text-3xl font-serif font-bold mb-4 italic">Content Filming Days</h3>
                                <div className="text-5xl font-serif font-bold text-primary mb-6 italic">£257 <span className="text-lg text-muted-foreground font-light">/ Full Day</span></div>
                                <p className="text-muted-foreground mb-8 font-light italic leading-relaxed">
                                    Capture up to 1200 pieces of high-resolution content for your website and socials to give you a professional grid.
                                </p>
                                <Link href="/services/content-filming" className="btn-premium group inline-flex">
                                    Book a Day
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Pricing Packages */}
            <section className="py-32 px-6 bg-[#0F0F0F] text-white rounded-[5rem] mx-4 md:mx-8 mb-32 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-4 text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-8"
                        >
                            <span className="w-8 h-px bg-primary" />
                            Premium Packages
                            <span className="w-8 h-px bg-primary" />
                        </motion.div>
                        <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 italic">Award-Winning <br /><span className="text-primary italic">Social Packages.</span></h2>
                        <p className="text-white/40 italic font-light text-lg">Everything your business needs to strive in the social world…</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {packages.map((pkg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className={cn(
                                    "relative p-8 md:p-12 rounded-[3.5rem] bg-white/[0.03] border flex flex-col lg:flex-row items-center gap-10 transition-all duration-700 group overflow-hidden",
                                    pkg.popular ? "border-primary shadow-[0_0_60px_rgba(224,12,26,0.1)] ring-1 ring-primary/20 bg-white/[0.05]" : "border-white/5 hover:border-white/10 hover:bg-white/[0.04]"
                                )}
                            >
                                {pkg.popular && (
                                    <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-primary" />
                                )}

                                {/* Left: Name & Price */}
                                <div className="w-full lg:w-1/4 shrink-0 px-10">
                                    {pkg.popular && (
                                        <div className="flex items-center gap-2 text-white bg-primary text-[8px] font-bold uppercase tracking-widest mb-6 w-fit px-3 py-1.5 rounded-full shadow-lg">
                                            <Sparkles size={10} className="fill-current" />
                                            Most Popular Choice
                                        </div>
                                    )}
                                    <h3 className="text-3xl font-serif font-bold mb-3 tracking-tight group-hover:text-primary transition-colors italic leading-tight uppercase">{pkg.name}</h3>
                                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] mb-8 italic">{pkg.subtitle}</p>

                                    <div className="flex flex-col gap-1">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-sm text-white/30 font-light translate-y-[-16px]">£</span>
                                            <span className="text-6xl font-serif font-bold text-primary italic leading-none">{pkg.price}</span>
                                            <span className="text-sm text-white/30 font-light translate-y-[-16px]">/mo</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest mt-6">
                                            <Zap size={10} className="text-primary fill-primary" />
                                            {pkg.daily}
                                        </div>
                                    </div>
                                </div>

                                {/* Center: Features Grid */}
                                <div className="flex-grow w-full py-8 lg:py-0 border-y lg:border-y-0 lg:border-x border-white/5 lg:px-12">
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-5">
                                        {pkg.features.map((feature, j) => (
                                            <div key={j} className="flex gap-4 items-start text-[11px] font-light leading-relaxed group/item">
                                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-primary transition-colors">
                                                    <CheckCircle2 size={12} className="text-primary group-hover/item:text-white transition-colors" />
                                                </div>
                                                <span className="text-white/60 group-hover:text-white transition-opacity">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right: CTA */}
                                <div className="w-full lg:w-1/5 shrink-0 flex flex-col items-center justify-center gap-4 px-10">
                                    <Link
                                        href="/contact"
                                        className={cn(
                                            "w-full py-7 rounded-[2.5rem] font-bold text-[10px] uppercase tracking-widest text-center transition-all duration-500",
                                            pkg.popular
                                                ? "bg-primary text-white shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02]"
                                                : "bg-white/5 text-white border border-white/10 hover:bg-primary hover:border-primary hover:text-white"
                                        )}
                                    >
                                        GET STARTED
                                    </Link>
                                    <p className="text-[8px] text-white/20 font-bold uppercase tracking-widest">Limited Availability</p>
                                </div>

                                {pkg.popular && <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />}
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-10 rounded-[4rem] bg-white/[0.02] border border-white/5 text-center relative overflow-hidden backdrop-blur-sm">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                        <p className="text-sm font-light italic text-white/60 max-w-2xl mx-auto leading-relaxed">
                            <span className="text-primary font-bold mr-2 uppercase tracking-widest">Expansion Add-ons:</span>
                            Increase your reach by adding TikTok <span className="text-white font-bold ml-1">£257/mo</span>  |  LinkedIn <span className="text-white font-bold ml-1">£125/mo</span>  |  Email Marketing <span className="text-white font-bold ml-1">£257/mo</span>  |  SM Coaching Session <span className="text-white font-bold ml-1">£157</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Transition Strip */}
            <ScrollVelocity
                texts={['Strategy & Creative', 'Growth & Analysis']}
                velocity={40}
                className="text-primary"
            />

            {/* Statistic Section Container */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 italic">Statistics & <span className="text-primary">Successes.</span></h2>
                        <p className="text-xl text-muted-foreground font-light italic">Reach, Views, Engagement & Follower Growth — The Numbers Speak for Themselves.</p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                        {[
                            { label: "Accounts Reached", value: "2.4M+", icon: Users },
                            { label: "Video Views", value: "5.8M+", icon: Play },
                            { label: "Avg. Engagement", value: "7.2%", icon: TrendingUp },
                            { label: "Followers Grown", value: "110K+", icon: Activity }
                        ].map((stat, i) => (
                            <div key={i} className="p-12 rounded-[4rem] bg-white border border-gray-100 shadow-sm text-center group hover:shadow-2xl transition-all duration-700">
                                <div className="w-16 h-16 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                    <stat.icon size={28} />
                                </div>
                                <div className="text-5xl font-serif font-bold text-gray-900 mb-2 italic">{stat.value}</div>
                                <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Other Services Grid */}
            <section className="py-20 px-6 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { name: "Social Media Management", href: "/services/social-media-manager" },
                            { name: "Social Media Coaching", href: "/services/social-media-coaching" },
                            { name: "Virtual Assistant Services", href: "/services/virtual-assistant-services" },
                            { name: "Websites & eCommerce", href: "/services/websites-ecommerce" }
                        ].map((link, i) => (
                            <Link key={i} href={link.href} className="p-10 rounded-[3rem] bg-white border border-gray-100 text-center font-bold text-[10px] uppercase tracking-widest hover:border-primary hover:text-primary hover:shadow-lg transition-all">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Closing Delegate CTA */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">Flexible & <span className="text-primary italic">Tailored Support.</span></h2>
                        <div className="space-y-8 text-xl text-muted-foreground leading-relaxed italic font-light mb-12 px-6">
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
