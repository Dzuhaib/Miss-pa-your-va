"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const faqs = [
    {
        q: "Do I get to approve posts before they go live?",
        a: "You can if you'd like — but most of our clients leave us to it so they can stay totally stress-free. ✨ We share your content plan (Monday to Monday) in Airtable with an easy approval checkbox and a comments section, so you can tick, tweak, or add notes on anything you'd like changed."
    },
    {
        q: "Who creates the content?",
        a: "We do! From graphics and captions to planning and scheduling, we take care of it all (depending on your package). However, you're responsible for providing the raw content — such as photos, videos, or any behind-the-scenes clips — so we can build a strategy that truly reflects your business. We'll then use those assets (along with your brand colours, fonts, and tone of voice) to create polished, professional, engaging content that feels personal and authentic to you."
    },
    {
        q: "What if I don't have brand guidelines?",
        a: "No worries! We'll help you create a simple brand kit during onboarding — colours, fonts, and tone of voice — so your socials always look and sound consistent."
    },
    {
        q: "Do you reply to comments and DMs?",
        a: "This depends on your package. Our Super Hero package includes full DM management 🦸, while all other packages include small amounts of organic engagement (liking, commenting, and light interaction) to help boost visibility. We'll confirm exactly what's included in your package during onboarding so everything feels clear."
    },
    {
        q: "How often will I hear from you?",
        a: "You'll get regular updates and reports (bi-monthly as standard), plus we're available via email or WhatsApp for quick check-ins whenever you need us."
    },
    {
        q: "What's included in reporting?",
        a: "We keep it simple: reach, engagement, clicks, and growth. 📊 No jargon — just clear insights into what's working, what's not, and how we'll keep moving forward. We provide bi-monthly reporting as this gives the most accurate picture (thanks to algorithm delays). If you'd like reports more frequently, we can absolutely do that — but it will be chargeable."
    },
    {
        q: "What happens if I want to upgrade my package?",
        a: "Easy! Just let us know, and we'll adjust your package at the next billing cycle. 🚀"
    },
    {
        q: "What is “offboarding”?",
        a: "Offboarding is how we smoothly wrap things up when your contract comes to an end. Around 1–2 weeks before your end date, we'll start winding down posting and engagement. We'll then log out of your accounts, remove stored data, and provide final analytics ready for handover. This ensures you (or your next team) can carry on with zero stress and a clear picture of where things stand."
    },
    {
        q: "Can I pause my package instead of ending it?",
        a: "We don't usually hold spaces open, as we require one month's notice to terminate a package. However, if you decide to return, we'll always welcome you back with a 10% discount on your first invoice and guarantee you a space to slot back in. 💕"
    },
    {
        q: "Are social media managers responsible for sales?",
        a: "No — our role isn't direct selling. Instead, we help your brand look professional, gain visibility, and show up in the best light. ✨ We bring a real, human feel to your marketing so your audience connects with you — and that connection can lead to sales."
    },
    {
        q: "What if I want to cancel early?",
        a: "Let's be real — you'll never want to cancel (I've had clients stick with me for over 5 years 💕)… but if you do: We require 1 month's notice, as agreed in your contract. Notice must be put in writing via email, with the subject line Contract Termination. Please include: your name & business name, the package you're on, and your intended final date of service. During that notice period, we'll continue supporting you and begin the offboarding process — winding down posts, preparing final reports, and making sure you're never left in the lurch."
    }
];

export default function FAQsSubPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="Common"
                accentTitle="Questions"
                subtitle="Everything you need to know about partnering with Miss PA Your VA."
                parents={[{ name: "About", href: "/about" }]}
                currentPage="FAQS"
            />

            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
                        >
                            Help Center
                        </motion.div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Clear <span className="text-primary italic">Answers.</span></h2>
                        <p className="text-xl text-muted-foreground italic font-light">We believe in transparent, honest partnerships. If your question isn&apos;t here, just drop us a message.</p>
                    </div>

                    <div className="space-y-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className={`rounded-[2.5rem] border transition-all duration-500 ${openIndex === i ? 'border-primary bg-white shadow-xl shadow-primary/5' : 'border-gray-100 bg-white hover:border-primary/30 shadow-sm'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full px-10 py-8 flex items-center justify-between text-left group"
                                >
                                    <span className={`text-xl font-serif font-bold transition-colors ${openIndex === i ? 'text-primary' : 'text-foreground'}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-primary text-white rotate-180' : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                                        {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-10 pb-10 text-lg text-muted-foreground leading-relaxed italic font-light border-t border-gray-50 pt-6">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Best Practices Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-20 p-10 rounded-[3rem] bg-[#0F0F0F] text-white text-center relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                        <p className="text-sm opacity-60 italic relative z-10">
                            We follow best practices recommended by **Meta for Business** to ensure your content stays engaging and algorithm-friendly.
                        </p>
                    </motion.div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}
