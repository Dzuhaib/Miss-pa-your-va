"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const PixelBlast = dynamic(() => import("./PixelBlast"), { ssr: false });

const slides = [
    {
        headline: <>Social Media Specialists in <span className="text-primary italic">Devon & Across the UK</span></>,
        body: "Helping beauty, aesthetics, and wellness businesses grow online with expert social media and marketing support.",
        cta1: { label: "Find out more", href: "/about" },
        cta2: { label: "Let's Talk?", href: "/contact" },
        pixelConfig: {
            variant: "square" as const,
            color: "#DE0C1A",
            pixelSize: 4,
            patternDensity: 1.2
        }
    },
    {
        headline: <>Filming for Beauty & <span className="text-primary italic">Aesthetic Clinics</span></>,
        body: "Bring your brand to life with high-quality content filming. We create cinematic visuals and social-ready videos that make your clinic stand out.",
        cta1: { label: "Learn More", href: "/services/content-filming" },
        cta2: { label: "Let's Talk?", href: "/contact" },
        pixelConfig: {
            variant: "circle" as const,
            color: "#FFFFFF",
            pixelSize: 3,
            patternDensity: 0.8
        }
    },
    {
        headline: <>Social Media Manager in <span className="text-primary italic">Devon & UK</span></>,
        body: "I turn ideas into action with purpose-driven strategies, creative storytelling, and clear messaging that connect brands with their ideal audience.",
        cta1: { label: "Learn More", href: "/services/social-media-manager" },
        cta2: { label: "Let's Talk?", href: "/contact" },
        pixelConfig: {
            variant: "diamond" as const,
            color: "#DE0C1A",
            pixelSize: 5,
            patternDensity: 1.5
        }
    },
    {
        headline: <>Virtual Assistant in <span className="text-primary italic">Devon & UK</span></>,
        body: "Your reliable helping hand for beauty and wellness businesses. I handle the details so you can focus on growing your brand.",
        cta1: { label: "Learn More", href: "/services/virtual-assistant-services" },
        cta2: { label: "Let's Talk?", href: "/contact" },
        pixelConfig: {
            variant: "triangle" as const,
            color: "#FFFFFF",
            pixelSize: 4,
            patternDensity: 0.6
        }
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-black flex flex-col">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <PixelBlast
                        variant={slides[current].pixelConfig.variant}
                        color={slides[current].pixelConfig.color}
                        pixelSize={slides[current].pixelConfig.pixelSize}
                        patternDensity={slides[current].pixelConfig.patternDensity}
                        enableRipples={true}
                        rippleSpeed={0.4}
                        speed={0.3}
                        edgeFade={0.4}
                        transparent={true}
                        className="opacity-50"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-6 relative z-20 w-full pt-[175px] pb-[125px]">
                <div className="max-w-3xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 30 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white w-fit mb-8 border border-white/20">
                                <Star size={14} className="fill-primary text-primary" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Award Winning Business Support</span>
                            </div>

                            <h1 className="text-4xl md:text-8xl font-serif font-bold leading-[1.1] mb-6 text-white tracking-tight">
                                {slides[current].headline}
                            </h1>

                            <p className="text-base md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
                                {slides[current].body}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href={slides[current].cta1.href} className="btn-premium group py-5 px-10">
                                    {slides[current].cta1.label}
                                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href={slides[current].cta2.href} className="px-10 py-5 rounded-full font-bold bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 transition-all text-center">
                                    {slides[current].cta2.label}
                                </Link>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Slide Indicators - Moved to Right Side */}
                <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={cn(
                                "w-1.5 transition-all duration-500 rounded-full",
                                current === i ? "h-12 bg-primary shadow-[0_0_15px_rgba(224,12,26,0.6)]" : "h-6 bg-white/30 hover:bg-white/50"
                            )}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 text-white/40">
                <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll to explore</span>
                <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-transparent" />
            </div>
        </section>
    );
}
