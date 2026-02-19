"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Tag, User, ArrowLeft, Share2, MessageSquare, Bookmark } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

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

    // Split title for accent effect (last word)
    const titleWords = post.title.split(' ');
    const accentTitle = titleWords.length > 1 ? titleWords.pop() : '';
    const mainTitle = titleWords.join(' ');

    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title={mainTitle}
                accentTitle={accentTitle}
                subtitle={`${post.date} • ${post.category}`}
                parents={[{ name: "Blog", href: "/blog" }]}
                currentPage={post.title.length > 30 ? post.title.substring(0, 30) + '...' : post.title}
            />

            <article className="max-w-4xl mx-auto px-6 py-24">
                <header className="mb-20">
                    <div className="flex items-center gap-6 border-b border-gray-100 pb-12">
                        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center ring-4 ring-white shadow-xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                            <Image src="/assets/images/founder.jpg" alt="Claire Northcott" fill className="object-cover" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-serif font-bold text-2xl tracking-tight">Claire Northcott</p>
                            <p className="text-[10px] text-primary uppercase tracking-[0.3em] font-bold">Founder & Social Media Coach</p>
                        </div>
                        <div className="ml-auto flex gap-3">
                            <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                                <Share2 size={18} />
                            </button>
                            <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm">
                                <Bookmark size={18} />
                            </button>
                        </div>
                    </div>
                </header>

                <div className="prose prose-xl max-w-none mb-32">
                    {post.content.map((p, i) => (
                        <p key={i} className="text-xl text-muted-foreground/80 leading-relaxed mb-10 font-light italic">{p}</p>
                    ))}
                </div>

                <section className="p-16 rounded-[4rem] bg-[#0F0F0F] text-white text-center relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-32 -mt-32" />
                    <MessageSquare className="text-primary mx-auto mb-8" size={48} />
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to <span className="text-primary italic">Transform?</span></h2>
                    <p className="text-white/60 mb-12 text-xl max-w-2xl mx-auto font-light italic">Book a discovery call to see how these strategies can be tailored specifically for your brand.</p>
                    <Link href="/contact" className="btn-premium px-12 py-6 text-lg">
                        Talk to a Coach
                    </Link>
                </section>
            </article>

            <CTASection />
        </main>
    );
}
