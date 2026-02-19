"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface PageHeroProps {
    title: string;
    accentTitle?: string;
    subtitle: string;
    parents?: { name: string; href: string }[];
    currentPage: string;
}

export default function PageHero({ title, accentTitle, subtitle, parents = [], currentPage }: PageHeroProps) {
    return (
        <section className="relative min-h-[65vh] flex flex-col justify-center py-24 pt-44 overflow-hidden bg-[#0F0F0F]">
            {/* Background Video/Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />
            <video
                src="https://misspasocial.co.uk/wp-content/uploads/2025/01/social-media.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            />

            <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    {parents.map((parent, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <ChevronRight size={10} />
                            <Link href={parent.href} className="hover:text-primary transition-colors">{parent.name}</Link>
                        </div>
                    ))}
                    <ChevronRight size={10} />
                    <span className="text-white">{currentPage}</span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-full"
                >
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-8 md:whitespace-nowrap overflow-hidden text-ellipsis">
                        {title}
                        {accentTitle && (
                            <> <span className="text-primary italic">{accentTitle}.</span></>
                        )}
                        {!accentTitle && !title.endsWith('.') && '.'}
                    </h1>
                    <p className="text-lg text-white/60 leading-relaxed max-w-2xl font-light italic">
                        {subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
