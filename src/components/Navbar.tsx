"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Instagram, Facebook, Linkedin, ShoppingBag, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "About",
        href: "/about",
        subLinks: [
            { name: "Events", href: "/about/events" },
            { name: "FAQS", href: "/about/faqs" },
        ]
    },
    {
        name: "Services",
        href: "/services",
        subLinks: [
            { name: "Social Media Manager", href: "/services/social-media-manager" },
            { name: "Virtual Assistant", href: "/services/virtual-assistant-services" },
            { name: "Social Media Coaching", href: "/services/social-media-coaching" },
            { name: "Content Filming", href: "/services/content-filming" },
            { name: "Websites & eCommerce", href: "/services/websites-ecommerce" },
        ]
    },
    { name: "Showcase", href: "/showcase" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            {/* Pre-Header Bar */}
            <div className={cn(
                "bg-[#0F0F0F] text-white/60 py-2.5 px-6 border-b border-white/5 transition-all duration-500 overflow-hidden",
                isScrolled ? "h-0 py-0 border-none opacity-0" : "h-auto opacity-100"
            )}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-6">
                        <a href="tel:07725948167" className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Phone size={12} className="text-primary" /> 07725948167
                        </a>
                        <a href="mailto:claire@misspayourvirtualassisstant.com" className="hidden sm:flex items-center gap-2 hover:text-primary transition-colors">
                            <Mail size={12} className="text-primary" /> claire@misspayourvirtualassisstant.com
                        </a>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4 border-r border-white/10 pr-6">
                            <a href="https://instagram.com/misspayourvasocialmedia" target="_blank" className="hover:text-primary transition-colors"><Instagram size={14} /></a>
                            <a href="https://www.facebook.com/misspayourva" target="_blank" className="hover:text-primary transition-colors"><Facebook size={14} /></a>
                            <a href="http://www.linkedin.com/in/claire-northcott-5a7273130" target="_blank" className="hover:text-primary transition-colors"><Linkedin size={14} /></a>
                        </div>
                        <div className="flex items-center gap-4">
                            <a href="https://moneymindsetmamas.co.uk/" target="_blank" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                <Heart size={12} className="text-primary" /> Money Mindset Mamas
                            </a>
                            <a href="https://stan.store/MissPAyourVA" target="_blank" className="hover:text-primary transition-colors flex items-center gap-1.5">
                                <ShoppingBag size={12} className="text-primary" /> Our Store
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <header
                className={cn(
                    "transition-all duration-500 px-6",
                    isScrolled ? "py-3 bg-white/80 backdrop-blur-lg shadow-sm" : "py-6 bg-transparent"
                )}
            >
                <nav className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center group">
                        <div className="relative w-[200px] h-[50px]">
                            <Image
                                src="/logo.png"
                                alt="Miss PA Your VA"
                                fill
                                className={cn(
                                    "object-contain transition-all duration-500",
                                    !isScrolled && !mobileMenuOpen ? "brightness-0 invert" : ""
                                )}
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className={cn(
                        "hidden md:flex items-center gap-8 px-10 py-3 rounded-full transition-all duration-500 border",
                        isScrolled
                            ? "bg-white/40 backdrop-blur-md border-black/5 shadow-sm"
                            : "bg-white/10 backdrop-blur-md border-white/20 text-white"
                    )}>
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1 py-1",
                                        isScrolled ? "text-foreground/80 hover:text-primary" : "text-white hover:text-primary"
                                    )}
                                >
                                    {link.name}
                                    {link.subLinks && (
                                        <ChevronDown className={cn("transition-transform duration-300", activeDropdown === link.name && "rotate-180")} size={14} />
                                    )}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.subLinks && (
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 p-4 bg-[#0F0F0F] text-white rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden"
                                            >
                                                <div className="flex flex-col gap-1">
                                                    {link.subLinks.map((sub) => (
                                                        <Link
                                                            key={sub.name}
                                                            href={sub.href}
                                                            className="text-[10px] font-bold uppercase tracking-widest p-4 rounded-2xl hover:bg-primary transition-all flex items-center justify-between group/sub"
                                                        >
                                                            {sub.name}
                                                            <motion.span
                                                                initial={{ x: -10, opacity: 0 }}
                                                                whileHover={{ x: 0, opacity: 1 }}
                                                                className="text-white"
                                                            >
                                                                →
                                                            </motion.span>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/contact" className="btn-premium py-3 px-8 text-xs font-bold uppercase tracking-widest">
                            Book a Call
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={cn(
                            "md:hidden p-3 rounded-xl transition-colors",
                            !isScrolled && !mobileMenuOpen ? "text-white bg-white/10" : "text-foreground bg-black/5"
                        )}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 mt-4 mx-6 p-8 bg-[#0F0F0F] text-white rounded-[3rem] md:hidden flex flex-col gap-2 max-h-[85vh] overflow-y-auto shadow-2xl border border-white/10"
                        >
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col border-b border-white/5 last:border-none">
                                    <Link
                                        href={link.href}
                                        className="text-lg font-serif font-bold py-5 flex items-center justify-between group"
                                        onClick={() => !link.subLinks && setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                        {link.subLinks && <ChevronDown size={20} className="text-primary" />}
                                    </Link>
                                    {link.subLinks && (
                                        <div className="flex flex-col pl-4 gap-2 mb-6">
                                            {link.subLinks.map((sub) => (
                                                <Link
                                                    key={sub.name}
                                                    href={sub.href}
                                                    className="text-sm font-medium py-3 text-white/50 hover:text-primary transition-all flex items-center gap-3"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                    {sub.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link href="/contact" className="btn-premium w-full mt-6 text-center py-5 text-sm font-bold uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                                Let&apos;s Start Your Journey
                            </Link>

                            {/* Mobile Socials */}
                            <div className="flex justify-center gap-8 mt-10 pt-10 border-t border-white/5 text-white/40">
                                <a href="https://instagram.com/misspayourvasocialmedia" target="_blank"><Instagram size={20} /></a>
                                <a href="https://www.facebook.com/misspayourva" target="_blank"><Facebook size={20} /></a>
                                <a href="http://www.linkedin.com/in/claire-northcott-5a7273130" target="_blank"><Linkedin size={20} /></a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </div>
    );
}
