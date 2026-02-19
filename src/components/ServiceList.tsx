"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, Users, Monitor, Camera, ArrowRight } from "lucide-react";
import Link from "next/link";

const mainServices = [
    {
        label: "Social Media Management",
        href: "/services/social-media-manager",
        icon: MessageSquare,
        desc: "Strategic content, engagement growth, and community management."
    },
    {
        label: "Social Media Coaching",
        href: "/services/social-media-coaching",
        icon: Zap,
        desc: "1-on-1 sessions to master your brand's digital presence."
    },
    {
        label: "Virtual Assistant",
        href: "/services/virtual-assistant-services",
        icon: Users,
        desc: "Professional admin support and appointment setting."
    },
    {
        label: "Websites & eCommerce",
        href: "/services/websites-ecommerce",
        icon: Monitor,
        desc: "High-performance websites tailored for beauty clinics."
    },
    {
        label: "Content Filming",
        href: "/services/content-filming",
        icon: Camera,
        desc: "Cinematic Reel production and high-end brand photography."
    }
];

export default function ServiceList({ title = "Expert Service Collective", lightMode = false }: { title?: string, lightMode?: boolean }) {
    return (
        <div className="space-y-4">
            <div className={`mb-12 flex items-center justify-between border-b ${lightMode ? 'border-black/10' : 'border-white/10'} pb-6`}>
                <h3 className={`text-2xl font-serif font-bold uppercase tracking-widest ${lightMode ? 'text-black' : 'text-white'}`}>{title}</h3>
                <span className={`text-[10px] font-bold ${lightMode ? 'text-black/40' : 'text-white/40'} uppercase tracking-[0.5em]`}>Explore Our Offerings</span>
            </div>
            <div className="grid grid-cols-1 gap-4">
                {mainServices.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Link
                            href={service.href}
                            className={`group flex flex-col md:flex-row md:items-center justify-between p-8 md:p-12 rounded-[2rem] md:rounded-full ${lightMode ? 'bg-black/[0.03] border-black/5' : 'bg-white/[0.02] border-white/5'} border hover:bg-primary transition-all duration-700 relative overflow-hidden`}
                        >
                            <div className="flex items-center gap-8 relative z-10">
                                <div className={`w-16 h-16 rounded-full ${lightMode ? 'bg-black/5' : 'bg-white/5'} flex items-center justify-center text-primary group-hover:bg-white group-hover:text-primary transition-all duration-500`}>
                                    <service.icon size={28} />
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-2xl md:text-4xl font-serif font-bold ${lightMode ? 'text-black' : 'text-white'} group-hover:text-white transition-colors tracking-tight`}>
                                        {service.label}
                                    </span>
                                    <span className={`${lightMode ? 'text-black/40' : 'text-white/40'} text-sm group-hover:text-white/80 transition-colors hidden md:block mt-1`}>
                                        {service.desc}
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8 md:mt-0 flex items-center gap-4 relative z-10">
                                <span className={`text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 ${lightMode ? 'text-black' : 'text-white'}`}>
                                    View Service Details
                                </span>
                                <div className={`w-12 h-12 rounded-full border ${lightMode ? 'border-black/10' : 'border-white/10'} flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all duration-500 group-hover:scale-110 text-white group-hover:text-primary`}>
                                    <ArrowRight size={20} />
                                </div>
                            </div>

                            {/* Hover Decorative Element */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
