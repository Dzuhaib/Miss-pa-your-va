"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const recentPosts = [
    {
        title: "3 Social Media Myths That Are Killing Your Engagement",
        excerpt: "If you've been putting time and energy into social media but your posts are barely getting seen, you're not alone. Let's bust three of the biggest social media myths once and for all...",
        date: "1 November 2025",
        image: "/assets/images/founder.jpg",
        slug: "3-social-media-myths-that-are-killing-your-engagement-and-what-to-do-instead"
    },
    {
        title: "Boosted Posts vs Facebook Ads – What's the Difference?",
        excerpt: "Many beauty and aesthetics business owners ask me about the difference between boosted posts vs Facebook ads. Spoiler alert: it's not the same...",
        date: "15 October 2025",
        image: "/assets/images/pa.webp",
        slug: "boosted-posts-vs-facebook-ads-whats-the-difference"
    },
    {
        title: "What Should I Post as a Beauty & Aesthetics Business Owner?",
        excerpt: "If you are looking for beauty social media content ideas that actually attract clients, this guide will help you plan posts that work...",
        date: "1 October 2025",
        image: "/assets/images/after.jpg",
        slug: "what-should-i-post-as-a-beauty-aesthetics-business-owner-to-attract-more-clients"
    },
    {
        title: "How Can a Clinic Use Social Media Without Feeling \"Salesy\"?",
        excerpt: "In the world of beauty and aesthetics, your brand is your reputation. Understanding how to show up online authentically is the key to attracting more clients...",
        date: "19 September 2025",
        image: "/assets/images/before.jpg",
        slug: "how-can-a-beauty-or-aesthetics-clinic-use-social-media-to-attract-more-clients-without-feeling-salesy"
    },
    {
        title: "Hosting the Glamour Awards UK Hair & Beauty Awards 2025",
        excerpt: "What started with a few clients has grown into a career filled with creativity, connection, and results. I'm honored to host this prestigious event...",
        date: "19 September 2025",
        image: "/assets/images/founder.jpg",
        slug: "hosting-the-glamour-awards-uk-hair-beauty-awards-2025"
    },
    {
        title: "Why Luxury Aesthetics Clinics Need Stunning Video Content",
        excerpt: "In a world where TikTok trends are changing faster than your client's Botox wears off, video content is king—especially in the beauty industry...",
        date: "10 September 2025",
        image: "/assets/images/pa.webp",
        slug: "lights-camera-injectables-why-luxury-aesthetics-clinics-need-stunning-video-content-and-how-to-get-it"
    }
];

export default function BlogPreview() {
    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-serif font-bold mb-6"
                    >
                        Our <span className="text-primary italic">Blog</span>
                    </motion.h3>
                    <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                        Miss PA Your VA is your dedicated partner in business support, we&apos;ll show you how our range of virtual assistant and social media management services can help you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16 px-4">
                    {recentPosts.slice(0, 3).map((post, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
                                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border border-white/20">
                                        <Calendar size={12} className="text-primary" />
                                        {post.date}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {post.title}
                                </h4>
                                <p className="text-muted-foreground text-base leading-relaxed mb-6 line-clamp-3 italic opacity-80">
                                    {post.excerpt}
                                </p>
                                <div className="text-foreground font-bold text-sm flex items-center gap-2 group/btn">
                                    Read more
                                    <span className="w-8 h-[2px] bg-primary group-hover:w-12 transition-all duration-500" />
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link href="/blog" className="btn-premium px-12 py-5 text-sm uppercase tracking-widest">
                        View All Insights
                    </Link>
                </div>
            </div>
        </section >
    );
}
