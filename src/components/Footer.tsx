"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Facebook, Linkedin, ArrowRight, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0F0F0F] text-white pt-32 pb-12 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <Link href="/" className="flex flex-col group">
                            <div className="relative w-[220px] h-[60px]">
                                <Image
                                    src="/logo.png"
                                    alt="Miss PA Your VA"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                        </Link>
                        <p className="text-white/50 leading-relaxed text-sm">
                            Miss PA Your VA offers expert Social Media Management and Coaching, plus Virtual Assistant services. We help busy business owners reclaim their time and grow their businesses by handling everything from social media to admin. Let us take the load off so you can focus on what you do best.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Instagram, href: "https://instagram.com/misspayourvasocialmedia" },
                                { icon: Facebook, href: "https://www.facebook.com/misspayourva" },
                                { icon: Linkedin, href: "http://www.linkedin.com/in/claire-northcott-5a7273130" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-10 text-primary">Explore</h4>
                        <ul className="space-y-4">
                            {["Home", "About", "Events", "Showcase", "Blog", "Contact", "FAQs"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={
                                            item === "Home" ? "/" :
                                                item === "FAQs" ? "/about/faqs" :
                                                    item === "Events" ? "/about/events" :
                                                        `/${item.toLowerCase()}`
                                        }
                                        className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-10 text-primary">Services</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Social Management", href: "/services/social-media-manager" },
                                { name: "Content Filming", href: "/services/content-filming" },
                                { name: "Virtual Assistant", href: "/services/virtual-assistant-services" },
                                { name: "Social Media Coaching", href: "/services/social-media-coaching" },
                                { name: "Websites & eCommerce", href: "/services/websites-ecommerce" }
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link href={service.href} className="text-white/60 hover:text-white transition-colors flex items-center gap-2 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-10 text-primary">Get in Touch</h4>
                        <div className="space-y-6">
                            <a href="tel:07725948167" className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                                    <Phone size={18} className="text-primary group-hover:text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Call Us</span>
                                    <span className="text-sm font-medium">07725948167</span>
                                </div>
                            </a>
                            <a href="mailto:claire@misspayourvirtualassisstant.com" className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors shrink-0">
                                    <Mail size={18} className="text-primary group-hover:text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Email Us</span>
                                    <span className="text-sm font-medium break-all">claire@misspayourvirtualassisstant.com</span>
                                </div>
                            </a>
                        </div>

                        <a href="https://moneymindsetmamas.co.uk/" target="_blank" className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all group">
                            <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center text-rose-500">
                                <Heart size={14} className="fill-current" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-bold uppercase tracking-widest text-white/60">Our Sister Brand</span>
                                <span className="text-[11px] font-bold">Money Mindset Mamas</span>
                            </div>
                            <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest">
                        © {currentYear} Miss PA Your VA. All rights reserved.
                    </div>

                    <div className="flex items-center gap-8 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                        <Link href="/business-policies" className="hover:text-primary transition-colors">Business Policies</Link>
                        <Link href="/contract-terms" className="hover:text-primary transition-colors">Contract Terms</Link>
                    </div>

                    <div className="flex items-center gap-2 text-white/30 text-[10px] uppercase tracking-widest">
                        <span>Website by</span>
                        <a href="https://aivized.com/" target="_blank" className="text-white hover:text-primary transition-colors font-bold">AI Vized</a>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Logic or purely visual element */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
                <span className="text-[15rem] font-serif font-bold text-white whitespace-nowrap">MISS PA SOCIAL</span>
            </div>
        </footer>
    );
}
