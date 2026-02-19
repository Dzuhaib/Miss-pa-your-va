"use client";

import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServiceList from "@/components/ServiceList";
import ScrollVelocity from "@/components/ScrollVelocity";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#FDFCFB]">
            <PageHero
                title="Our Expert"
                accentTitle="Services"
                subtitle="Complete business support solutions for beauty, wellness, and aesthetic professionals."
                currentPage="Services"
            />

            {/* Intro Copy Section */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-10 leading-tight">
                            Tailored Support for <span className="text-primary italic">Success.</span>
                        </h2>
                        <div className="space-y-8 text-2xl text-muted-foreground leading-relaxed font-light italic">
                            <p>
                                At Miss PA Your VA, we don&apos;t believe in one-size-fits-all. Every business is unique, and so are our solutions.
                            </p>
                            <p>
                                We become an extension of your team, offering reliable, efficient, and discreet assistance whenever you need it. Let us handle the details while you handle the growth.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Standardized Services List */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <ServiceList title="Experience Our expertise" lightMode={true} />
                </div>
            </section>

            <ScrollVelocity
                texts={['Expertise & Strategy', 'Creative & Growth']}
                velocity={40}
                className="text-primary"
            />

            <CTASection />
        </main>
    );
}
