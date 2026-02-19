"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Tag, User, ArrowLeft, Share2, MessageSquare } from "lucide-react";
import Link from "next/link";

const blogContent: Record<string, { title: string, category: string, date: string, content: string[] }> = {
    "social-media-myths-engagement": {
        title: "3 Social Media Myths That Are Killing Your Engagement",
        category: "Social Media",
        date: "1 Nov 2025",
        content: [
            "If you've been putting time and energy into social media but your posts are barely getting seen, you're not alone. The truth is, many business owners are unknowingly following outdated or completely false 'rules' that are actually hurting their engagement, not helping it.",
            "The constant pressure to post every single day, the obsession with follower counts, and the belief that you have to be on every platform are all myths that lead to burnout and poor results. We bust these myths once and for all, so you can focus on what actually works: quality over quantity and genuine connection."
        ]
    },
    "boosted-posts-vs-facebook-ads": {
        title: "Boosted Posts vs Facebook Ads – What's the Difference?",
        category: "Marketing",
        date: "15 Oct 2025",
        content: [
            "Knowing the difference can be the key to whether your marketing budget brings you new clients or just a few extra likes.",
            "Boosted Posts take an existing post from your Facebook or Instagram page and pay to show it to more people. It's quick, easy, and ideal for increasing visibility—like putting your content on a billboard.",
            "Facebook Ads (via Meta Ads Manager) are fully customisable with powerful targeting options. You can choose specific objectives: lead generation, website traffic, sales, and more. It requires more setup but delivers better ROI for client acquisition."
        ]
    },
    "what-should-i-post-beauty-aesthetics": {
        title: "What Should I Post as a Beauty & Aesthetics Business Owner?",
        category: "Social Media",
        date: "1 Oct 2025",
        content: [
            "1. Before & After Transformations — The OG of aesthetics content. Showcase results to build instant trust. Clients love to see results, not just read about them.",
            "2. Educational FAQs & Aftercare Tips — Position yourself as the go-to expert; your audience feels smarter for following you. Answer 'Does it hurt?' or 'How long does it last?'",
            "3. Behind the Scenes — People buy into you. Share peeks of your clinic, your team, and your coffee-fuelled mornings.",
            "4. Social Proof / Testimonials — Nothing sells like social proof. Share client reviews or user-generated content.",
            "5. Relatable & Trending Content — Memes and trending audios make your brand memorable and shareable."
        ]
    },
    "how-to-use-social-media-not-salesy": {
        title: "How to Use Social Media Without Feeling 'Salesy'",
        category: "Marketing",
        date: "19 Sep 2025",
        content: [
            "In the world of beauty and aesthetics, your brand is your reputation. For many startup clinics, the biggest challenge is knowing how to show up online authentically without feeling pushy.",
            "The secret lies in providing value first. By educating your audience and sharing the human side of your business, you build a connection that naturally leads to inquiries and bookings."
        ]
    },
    "hosting-glamour-awards-2025": {
        title: "Hosting the Glamour Awards UK Hair & Beauty Awards 2025",
        category: "News",
        date: "19 Sep 2025",
        content: [
            "Claire Northcott (Miss PA Your VA) was announced as host and judge for the Glamour Awards UK Hair & Beauty Awards 2025 at The Midland Hotel, Manchester.",
            "The event celebrates passion, dedication, and the inspiring journeys of beauty and hair business owners from across the UK. Claire will also be a judge for the 'Best Social Media' category.",
            "Awards boost your brand, increase visibility, and provide recognition that builds immense credibility in a competitive market."
        ]
    },
    "why-luxury-aesthetics-need-video": {
        title: "Why Luxury Aesthetics Clinics Need Stunning Video Content",
        category: "Content",
        date: "10 Sep 2025",
        content: [
            "In a world where TikTok trends change faster than Botox wears off, video content is king. Clinics still relying on grainy before-and-afters need a glow-up.",
            "Video builds trust—clients can see your environment, your skill, and your professionalism. High-quality video positions your brand as premium and worth the investment."
        ]
    }
};

export default function BlogPostPage() {
    const params = useParams();
    const slug = params.slug as string;
    const post = blogContent[slug] || {
        title: slug.replace(/-/g, " ").split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        category: "Social Media",
        date: "Sept 2025",
        content: ["Content for this article is being updated. Please check back soon or contact us for marketing insights."]
    };

    return (
        <main className="pt-32 pb-24 px-6">
            <article className="max-w-4xl mx-auto">
                <Link href="/blog" className="flex items-center gap-2 text-primary font-bold mb-12 hover:-translate-x-1 transition-transform">
                    <ArrowLeft size={18} /> Back to Insights
                </Link>

                <header className="mb-16">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">{post.category}</span>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 border-y border-gray-100 py-6">
                        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                            <User className="text-primary" size={24} />
                        </div>
                        <div>
                            <p className="font-bold text-sm">Claire Northcott</p>
                            <p className="text-xs text-muted-foreground">Founder & Social Media Coach</p>
                        </div>
                        <div className="ml-auto flex gap-3">
                            <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"><Share2 size={18} /></button>
                        </div>
                    </div>
                </header>

                <div className="prose prose-lg max-w-none mb-24">
                    {post.content.map((p, i) => (
                        <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-8">{p}</p>
                    ))}
                </div>

                <section className="p-12 rounded-[3rem] bg-muted/50 border border-gray-100 text-center">
                    <MessageSquare className="text-primary mx-auto mb-6" size={40} />
                    <h2 className="text-3xl font-serif font-bold mb-4">Want more insights?</h2>
                    <p className="text-muted-foreground mb-8">Book a discovery call to see how these strategies can work for your specifically.</p>
                    <Link href="/contact" className="btn-premium">
                        Talk to a Coach
                    </Link>
                </section>
            </article>
        </main>
    );
}
