"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Search, Sparkles, ChevronRight, Bookmark, Share2, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";

const blogPosts = [
    {
        title: "3 Social Media Myths That Are Killing Your Engagement",
        date: "1 Nov 2025",
        category: "Social Media",
        summary: "Busting three of the biggest social media myths once and for all, so you can see real results from your efforts.",
        slug: "social-media-myths-engagement",
        image: "/assets/images/founder.jpg"
    },
    {
        title: "Boosted Posts vs Facebook Ads – What's the Difference?",
        date: "15 Oct 2025",
        category: "Marketing",
        summary: "Knowing the difference can be the key to whether your budget brings new clients or just a few extra likes.",
        slug: "boosted-posts-vs-facebook-ads",
        image: "/assets/images/pa.webp"
    },
    {
        title: "What Should I Post to Attract More Clients?",
        date: "1 Oct 2025",
        category: "Social Media",
        summary: "Discover five powerful content ideas tailored for beauty and aesthetics clinics that build trust and drive bookings.",
        slug: "what-should-i-post-beauty-aesthetics",
        image: "/assets/images/after.jpg"
    },
    {
        title: "How to Use Social Media Without Feeling 'Salesy'",
        date: "19 Sep 2025",
        category: "Marketing",
        summary: "Learn how to show up online authentically and professionally without coming across as pushy.",
        slug: "how-to-use-social-media-not-salesy",
        image: "/assets/images/before.jpg"
    },
    {
        title: "Hosting the Glamour Awards UK Hair & Beauty Awards 2025",
        date: "19 Sep 2025",
        category: "News",
        summary: "Claire Northcott announced as host and judge for one of the UK's biggest beauty industry events.",
        slug: "hosting-glamour-awards-2025",
        image: "/assets/images/founder.jpg"
    },
    {
        title: "Why Luxury Aesthetics Clinics Need Stunning Video Content",
        date: "10 Sep 2025",
        category: "Content",
        summary: "In a world of fast trends, cinematic video is king for luxury clinics looking to stand out.",
        slug: "why-luxury-aesthetics-need-video",
        image: "/assets/images/pa.webp"
    },
];

const categories = ["All", "Social Media", "Marketing", "News", "Content", "Business Support"];

export default function BlogIndexPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="Perspectives on"
                accentTitle="Success"
                subtitle="Practical social media marketing tips for beauty and aesthetics business owners."
                currentPage="Blog"
            />

            <div className="max-w-7xl mx-auto px-6 py-32">
                {/* Filter / Search Bar */}
                <section className="mb-24 flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-100 pb-16">
                    <div className="flex flex-wrap gap-4 scrollbar-hide overflow-x-auto pb-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${cat === "All" ? "bg-primary text-white shadow-lg" : "bg-white border border-gray-100 hover:border-primary text-muted-foreground shadow-sm"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-96">
                        <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="SEARCH ARTICLES..."
                            className="w-full pl-16 pr-8 py-5 rounded-full border border-gray-100 bg-white focus:outline-none focus:border-primary text-[10px] font-bold tracking-widest shadow-sm"
                        />
                    </div>
                </section>

                {/* Featured Post */}
                <section className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group relative rounded-[5rem] overflow-hidden bg-[#0F0F0F] text-white aspect-[21/9] shadow-2xl"
                    >
                        <Image
                            src="/assets/images/founder.jpg"
                            alt="Featured Post"
                            fill
                            className="object-cover opacity-50 group-hover:scale-105 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 p-12 md:p-24 max-w-4xl relative z-20">
                            <div className="flex items-center gap-4 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-8">
                                <Sparkles size={16} />
                                Featured Insight
                            </div>
                            <h2 className="text-4xl md:text-7xl font-serif font-bold mb-10 leading-[1.1]">
                                Hosting the Glamour Awards 2025.
                            </h2>
                            <Link href="/blog/hosting-glamour-awards-2025" className="btn-premium px-12 py-6 text-lg group">
                                READ ARTICLE
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </section>

                {/* Blog Grid */}
                <section className="mb-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col h-full rounded-[4rem] bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
                            >
                                <div className="aspect-[1.3/1] relative overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                    />
                                    <div className="absolute top-8 left-8">
                                        <div className="px-6 py-2 rounded-full bg-white/95 backdrop-blur-md text-[9px] font-bold uppercase tracking-widest text-primary shadow-xl ring-1 ring-black/5">
                                            {post.category}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-12 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-6">
                                        <Calendar size={14} className="text-primary" />
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold mb-8 group-hover:text-primary transition-colors leading-tight uppercase tracking-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed mb-10 italic font-light line-clamp-3">
                                        {post.summary}
                                    </p>
                                    <div className="mt-auto pt-8 border-t border-gray-100 flex items-center justify-between">
                                        <Link href={`/blog/${post.slug}`} className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] group/link text-foreground hover:text-primary transition-colors">
                                            READ ARTICLE
                                            <ChevronRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                                        </Link>
                                        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            <Bookmark size={18} className="text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
                                            <Share2 size={18} className="text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Newsletter */}
                <section className="mb-40 py-32 px-12 bg-[#0F0F0F] text-white rounded-[5rem] relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="max-w-3xl mx-auto relative z-10">
                        <Quote className="mx-auto mb-10 text-primary opacity-20" size={64} />
                        <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 italic">Stay Ahead of the <span className="text-primary">Trends.</span></h2>
                        <p className="text-xl text-white/50 italic mb-12 font-light">
                            Join our community of beauty professionals. Get exclusive marketing tips and industry insights delivered to your inbox.
                        </p>
                        <form className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto">
                            <input
                                type="email"
                                placeholder="YOUR EMAIL ADDRESS..."
                                className="flex-1 px-10 py-6 rounded-full bg-white/5 border border-white/10 focus:outline-none focus:border-primary text-[10px] font-bold tracking-widest uppercase outline-none"
                            />
                            <button className="btn-premium px-12 py-6">
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </section>
            </div>

            <CTASection />
        </main>
    );
}
